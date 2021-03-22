/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-03-22 15:49:03
 */
import { App, defineComponent } from 'vue';

const viLayoutHeader = defineComponent({
  name: 'viLayoutHeader',
  props: {
    height: {
      type: String,
      default() {
        return '64px';
      },
    },
  },
  render() {
    const { $slots } = this;
    const def = $slots.default;
    return (
      <section class='vite-layout-header' style={{ height: this.height }}>
        <def />
      </section>
    );
  },
});

viLayoutHeader.install = (app: App) => {
  app.component(viLayoutHeader.name, viLayoutHeader);
};
export default viLayoutHeader;
