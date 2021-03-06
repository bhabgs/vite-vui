/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-20 15:35:21
 */
import { defineComponent } from 'vue';
import { installComponent, getSlots } from '../util';

const props = {
  height: {
    type: String,
    default() {
      return '64px';
    },
  },
};

const viLayoutFooter = defineComponent({
  name: 'viLayoutFooter',
  props,
  setup(props, context) {
    const slots = getSlots(context);
    return () => (
      <footer class='vite-layout-footer' style={{ height: props.height }}>
        <slots.def />
      </footer>
    );
  },
});

export default installComponent(viLayoutFooter, 'viLayoutFooter');
