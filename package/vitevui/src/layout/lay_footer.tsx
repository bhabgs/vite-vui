/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-03-22 15:49:11
 */
import { App, defineComponent } from 'vue';

const viLayoutFooter = defineComponent({
  name: 'viLayoutFooter',
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
      <footer class='vite-layout-footer' style={{ height: this.height }}>
        <def />
      </footer>
    );
  },
});

viLayoutFooter.install = (app: App) => {
  app.component(viLayoutFooter.name, viLayoutFooter);
};
export default viLayoutFooter;
