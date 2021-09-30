/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-20 15:39:00
 */
import { defineComponent } from 'vue';
import { installComponent } from '../util';

const viLayoutMain = defineComponent({
  name: 'viLayoutMain',
  render() {
    const { $slots, $parent } = this;
    const def = $slots.default;
    if (($parent as any)?.hasSider) {
      ($parent as any)?.hasSider();
    }
    return (
      <main class='vite-layout-main'>
        <def />
      </main>
    );
  },
});

export default installComponent(viLayoutMain, 'viLayoutMain');
