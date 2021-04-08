/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-06 13:47:41
 */
import { App, defineComponent } from 'vue';

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

viLayoutMain.install = (app: App) => {
  app.component(viLayoutMain.name, viLayoutMain);
};
export default viLayoutMain;
