/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:42:58
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-21 15:18:58
 */
import {
  defineComponent,
  reactive,
  ref,
  getCurrentInstance,
  nextTick,
} from 'vue';
import test1 from './components/test1';
import test2 from './components/test2';
import upload from './components/upload';

const menus = [
  { name: 'deng', key: 'deng' },
  { name: 'deng1', key: 'deng1' },
];

const state = reactive({
  t: 'ooo',
});

const tabsItem = ref([
  {
    name: '润滑管理润滑管理润滑管理润滑管理润滑管理',
    icon: 'vite_atm-away',
    hasClosed: true,
    disabled: false,
    component: upload,
    id: 'aaaa',
  },
  {
    name: '润滑管理1',
    icon: 'sss',
    hasClosed: true,
    disabled: false,
    component: test1,
    id: 'bbbbbb',
  },
  {
    name: '润滑管理2',
    icon: 'sss',
    hasClosed: true,
    disabled: true,
    component: test2,
    id: 'ccccc',
  },
]);

const v = ref('aaa');

export default defineComponent({
  components: {},
  created() {},
  setup() {},
  render() {
    const props = reactive({
      collapsed: false,
    });
    const { proxy } = getCurrentInstance()!;
    const mitt = proxy!.$mitt;
    nextTick(() => {
      mitt.emit('vite-tabspage-add', tabsItem.value[0]);
      // nextTick(() => {
      //   mitt.emit('vite-tabspage-add', tabsItem.value[1]);
      // });
    });
    return (
      <vi-layout>
        <vi-layout-header>
          <div class='text_overflow_ellipsis'>
            润滑管理润滑管理润滑管理润滑管理润滑管理
          </div>
        </vi-layout-header>
        <vi-layout>
          <viMenuBox
            menuTitle={'润滑管理'}
            menus={[
              {
                title: '111111',
                id: '1',
                icon: 'vite_vehivles',
              },
              {
                title: '22222222',
                id: '2',
                icon: 'vite_vehivles',
                child: [
                  {
                    title: '222222-111111',
                    id: '2-1',
                  },
                  {
                    title: '222222-222222',
                    id: '2-2',
                    icon: 'vite_vehivles',
                  },
                ],
              },
              {
                title: '3333333',
                id: '3',
              },
            ]}
            collapsed={props.collapsed}
            onItemclick={(e: any) => {
              console.log(e);
            }}
            onCollapsed={(e: boolean) => {
              console.log(e);
            }}
          />
          <vi-layout-main>
            <viTabsPage />
          </vi-layout-main>
        </vi-layout>
        <vi-layout-footer
          v-contextmenu={{ menus: [{ key: '1', name: '哈哈' }], callBack() {} }}
        >
          <vi-icon
            name='vite_close'
            onClick={() => {
              alert(666);
            }}
          />
        </vi-layout-footer>
      </vi-layout>
    );
  },
});
