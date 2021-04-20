/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-20 15:42:12
 */
import { defineComponent, ref } from 'vue';
import { installComponent } from '../util';

const viLayout = defineComponent({
  setup() {
    const sider = ref<boolean>(false);
    return {
      sider,
    };
  },
  name: 'viLayout',
  methods: {
    hasSider() {
      this.sider = true;
    },
  },
  render() {
    const { $slots } = this;
    const def = $slots.default || '';

    return (
      <section
        class={['vite-layout', this.sider ? 'vite-layout-hassider' : '']}
      >
        <def />
      </section>
    );
  },
});

export default installComponent(viLayout, 'viLayout');
