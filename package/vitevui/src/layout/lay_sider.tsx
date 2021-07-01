/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-20 15:39:58
 */
import { defineComponent } from 'vue';
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
  render() {
    const { $slots, $parent } = this;
    const def = $slots.default;

    if (($parent as any)?.hasSider) {
      ($parent as any)?.hasSider();
    }
    return (
      <aside class='vite-layout-sider' style={{ width: this.width }}>
        <def />
      </aside>
    );
  },
});

export default installComponent(viLayoutSider, 'viLayoutSider');
