/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-20 15:39:58
 */
import { defineComponent, inject } from 'vue';
import { installComponent } from '../util';

const props = {
  width: {
    type: String,
    default() {
      return '200px';
    },
  },
  custom: {
    type: Boolean,
    default: true,
  },
};

const viLayoutSider = defineComponent({
  name: 'viLayoutSider',
  props,
  setup(props, context) {
    const def = context.slots.default || '';
    context.expose({
      viLayoutSider: true,
    });
    const provideSider = inject<Function>('sider')!;
    provideSider();
    return () => (
      <aside class='vite-layout-sider' style={{ width: props.width }}>
        <def />
      </aside>
    );
  },
});

export default installComponent(viLayoutSider, 'viLayoutSider');
