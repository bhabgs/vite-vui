/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-20 15:42:12
 */
import { defineComponent, ref, provide } from 'vue';
import { installComponent } from '../util';

const viLayout = defineComponent({
  setup(props, context) {
    const def = context.slots.default || '';
    const sider = ref<boolean>(false);
    const defv = ref();
    provide('sider', () => {
      sider.value = true;
    });
    return () => (
      <section
        ref={defv}
        class={['vite-layout', sider.value ? 'vite-layout-hassider' : '']}
      >
        <def />
      </section>
    );
  },
  name: 'viLayout',
});

export default installComponent(viLayout, 'viLayout');
