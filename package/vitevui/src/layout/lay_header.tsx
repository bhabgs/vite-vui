/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-20 15:37:39
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

const viLayoutHeader = defineComponent({
  name: 'viLayoutHeader',
  props,
  setup(props, context) {
    const slots = getSlots(context);
    return () => (
      <section class='vite-layout-header' style={{ height: props.height }}>
        <slots.def />
      </section>
    );
  },
});

export default installComponent(viLayoutHeader, 'viLayoutHeader');
