/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-08 15:57:51
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-08 17:33:58
 */
import { defineComponent, App } from 'vue';
import { setStyleClass } from '../util';

const viteUploadProp = {};

const viteUpload = defineComponent({
  name: 'viteUpload',
  props: viteUploadProp,
  setup(props, context) {
    const classes = setStyleClass(['upload']);
    return () => <div class={classes}>viviteUpload</div>;
  },
});
viteUpload.install = (app: App) => {
  app.component(viteUpload.name, viteUpload);
};
export default viteUpload;
