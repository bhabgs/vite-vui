/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-03-30 15:21:51
 */
import { App, defineComponent } from 'vue';

const viLayoutSider = defineComponent({
  name: 'viLayoutSider',
  props: {
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
  },

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

viLayoutSider.install = (app: App) => {
  app.component(viLayoutSider.name, viLayoutSider);
};
export default viLayoutSider;
