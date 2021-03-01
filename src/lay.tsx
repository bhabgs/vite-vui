/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:42:58
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-26 13:42:32
 */
import { defineComponent, reactive } from 'vue';
import { RouterView } from 'vue-router';

const state = reactive({
  t: 'ooo',
});

export default defineComponent({
  components: {},
  created() {
    console.log(this.$vitevuu);
  },
  render() {
    return (
      <vi-layout>
        <vi-layout-header>header</vi-layout-header>
        <vi-layout>
          <vi-layout-sider>sider</vi-layout-sider>
          <vi-layout-main>{state.t}</vi-layout-main>
        </vi-layout>
        <vi-layout-footer>footer</vi-layout-footer>
      </vi-layout>
    );
  },
});
