/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 11:45:48
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-06 14:28:22
 */
import { defineComponent } from 'vue';
import { setStyleClass } from '../util';

export default defineComponent({
  setup() {
    const classes = setStyleClass(['tab_components_box']);
    return () => <div class={classes}></div>;
  },
});
