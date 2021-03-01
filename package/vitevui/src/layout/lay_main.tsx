/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-23 10:50:43
 */
import { App, defineComponent } from 'vue';

const viLayoutMain = defineComponent({
  name: 'viLayoutMain',
  render() {
    const { $slots } = this;
    const def = $slots.default;
    return (
      <main class='vite-layout-main'>
        <def />
      </main>
    );
  },
});

viLayoutMain.install = (app: App) => {
  app.component(viLayoutMain.name, viLayoutMain);
};
export default viLayoutMain;
