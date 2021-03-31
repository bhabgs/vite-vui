/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:42:58
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-03-31 15:55:45
 */
import { defineComponent, reactive } from 'vue';

const menus = [
  { name: 'deng', key: 'deng' },
  { name: 'deng1', key: 'deng1' },
];

const state = reactive({
  t: 'ooo',
});

export default defineComponent({
  components: {},
  created() {},
  render() {
    const props = reactive({
      collapsed: false,
    });
    return (
      <vi-layout>
        <vi-layout-header>header</vi-layout-header>
        <vi-layout>
          <vi-layout-sider>
            <menuBox
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
          </vi-layout-sider>
          <vi-layout-main
            vContextmenu={{
              menus,
              callBack(e: any) {
                console.log(e);
              },
            }}
          >
            {state.t}
          </vi-layout-main>
        </vi-layout>
        <vi-layout-footer>footer</vi-layout-footer>
      </vi-layout>
    );
  },
});
