/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 11:13:21
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-12 14:53:33
 */
import { defineComponent, App, computed, nextTick } from 'vue';
import componentsBox from './components';
import { arrayCheck, setStyleClass, viteTypeof } from '../util';
import log from '../util/log';
import tabs from './tab';
import hooks from './tabsHooks';
import funHooks, { tabItem, setCurrentDetail } from './tabsFunHook';

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
    const { open, mitt } = funHooks();
    const { tabsData } = hooks();
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
      if (hasPage) return open(hasPage.id);
      // return log.warn('页面已经存在，请勿重复添加');

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
    mitt.on(
      'vite-tabspage-remove',
      (e?: string | Array<string> | undefined) => {
        let newArr: string | any[] = [];
        let flag: number = 100000;
        if (!e) {
          newArr = tabsData.list.filter((item, key) => {
            const status = item.id !== tabsData.active;
            if (!status) {
              flag = key;
            }
            return status;
          });
        }

        if (viteTypeof(e) === 'string') {
          newArr = tabsData.list.filter((item, key) => {
            const status = item.id === e;
            if (status) {
              flag = key;
            }
            return !status;
          });
        }

        if (viteTypeof(e) === 'array') {
          newArr = tabsData.list.filter((item, key) => {
            if (key === 0) {
              // 当获取到第一个page时 验证删除页面里是否存在首页
              const isFirst = (e as Array<string>).find((fi, fk) => {
                const status = fi === item.id;
                if (status) {
                  (e as Array<string>).splice(fk, 1);
                }
                return status;
              });
              if (isFirst) {
                log.warn('默认第一个page 为主page，主page无法删除');
              }
            }
            return !(e as Array<string>).find((fi) => fi === item.id);
          });
          flag = newArr.length;
        }

        if (flag === 100000) {
          return log.warn('默认第一个page 为主page，主page无法删除');
        }

        if (!arrayCheck(newArr, tabsData.list, 'id')) {
          updatePage(newArr, tabsData.list[flag - 1].id);
        } else {
          log.warn('没有匹配的键');
        }
      },
    );

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
