/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:42:58
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-03-19 13:27:18
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
    return (
      <vi-layout>
        <vi-layout-header>header</vi-layout-header>
        <vi-layout>
          <vi-layout-sider>sider</vi-layout-sider>
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
