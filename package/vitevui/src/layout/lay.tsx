/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-23 10:51:00
 */
import { App, defineComponent, ref } from 'vue';

const viLayout = defineComponent({
  setup() {
    return {
      sider: ref<boolean>(false),
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

viLayout.install = (app: App) => {
  app.component(viLayout.name, viLayout);
};
export default viLayout;
