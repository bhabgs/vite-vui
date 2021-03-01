/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-23 13:38:33
 */
import { App, defineComponent } from 'vue';

const viLayoutFooter = defineComponent({
  name: 'viLayoutFooter',
  render() {
    const { $slots } = this;
    const def = $slots.default;
    return (
      <footer class='vite-layout-footer'>
        <def />
      </footer>
    );
  },
});

viLayoutFooter.install = (app: App) => {
  app.component(viLayoutFooter.name, viLayoutFooter);
};
export default viLayoutFooter;
