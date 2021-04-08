/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 11:13:21
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-08 14:29:19
 */
import { defineComponent, App, computed, nextTick } from 'vue';
import componentsBox from './components';
import { arrayCheck, setStyleClass } from '../util';
import log from '../util/log';
import tabs from './tab';
import hooks, { tabsProps, tabItem, setCurrentDetail } from './tabsHooks';

interface TabsProps extends tabsProps {
  value: string;
  animate: string;
}

const viteTabs = defineComponent({
  name: 'viteTabsPage',
  components: {
    tabs,
    componentsBox,
  },
  props: {
    animate: String,
  },
  setup(Prop) {
    const { tabsData, mitt } = hooks();
    const classes = setStyleClass(['tabs', 'tabs_page']);

    const activePageDetail = computed(() =>
      tabsData.list.find((item) => item.id === tabsData.active),
    );

    // 负责更新标签页
    const updatePage = (newArr: Array<tabItem>, id?: string | undefined) => {
      tabsData.list = newArr;
      if (id) {
        tabsData.active = id;
      }
    };

    // 等待晴空tabs
    mitt.on('vite-tabspage-clear', () => {
      updatePage([]);
    });
    // 等待触发添加
    mitt.on('vite-tabspage-add', (e: tabItem | undefined) => {
      // 判断是否存在该id的页面
      const hasPage = tabsData.list.find((item) => item.id === e!.id);
      if (hasPage) return log.warn('页面已经存在，请勿重复添加');

      const newArr: Array<tabItem> = [...(tabsData.list ? tabsData.list : [])];

      if (e) {
        newArr.push(e);
        updatePage(newArr, e.id);
        nextTick(() => {
          setCurrentDetail(activePageDetail.value);
        });
      }
    });

    // 等待触发主动删除
    mitt.on('vite-tabspage-remove', (e: Array<string> | undefined) => {
      let newArr = [];
      let flag = 0;
      if (!e) {
        newArr = tabsData.list.filter((item, key) => {
          const status = item.id !== tabsData.active;

          if (!status) {
            flag = key;
          }
          return status;
        });
      } else {
        newArr = tabsData.list.filter((item) => {
          return !e?.find((fItem) => fItem === item.id);
        });
      }

      if (flag === 0) {
        log.err('默认第一个page 为主page，主page无法删除');
      }

      if (!arrayCheck(newArr, tabsData.list, 'id')) {
        updatePage(newArr);
      } else {
        log.warn('没有匹配的键');
      }
    });

    // 等待打开某个页面
    mitt.on('vite-tabspage-open', (id: string | undefined) => {
      if (id) {
        tabsData.active = id;
      } else {
        log.err('id 为必填参数.');
      }
    });

    return () => (
      <div class={classes}>
        <tabs
          items={tabsData.list}
          activeVal={tabsData.active}
          onClose={async (e: tabItem) => {
            // 默认打开第一页
            let openPage: tabItem = tabsData.list[0];
            const newArr = tabsData.list.filter((item, key) => {
              const flag = item.id !== e.id;
              if (!flag) {
                // 默认打开上一页
                openPage = tabsData.list[key - 1];
              }
              return flag;
            });
            // 负责更新标签页
            updatePage(newArr, openPage.id);

            // 更新页面 active id
          }}
          onSelect={(e: tabItem) => {
            tabsData.active = e.id;
            setCurrentDetail(activePageDetail.value);
          }}
        />
        <componentsBox
          animate={Prop.animate}
          items={tabsData.list}
          activeVal={tabsData.active}
        />
      </div>
    );
  },
});
viteTabs.install = (app: App) => {
  app.component(viteTabs.name, viteTabs);
};
export default viteTabs;
