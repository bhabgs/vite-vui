/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 16:21:03
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-08 13:22:45
 */
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: String,
  },
  setup(Prop, context) {
    return () => <div class='test'>{Prop.name}</div>;
  },
});
