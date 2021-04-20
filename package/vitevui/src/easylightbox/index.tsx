/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-20 15:11:44
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-20 15:27:07
 */
import { defineComponent } from 'vue';
import { installComponent } from '../util';

const easyLightBox = defineComponent({
  setup() {
    return () => <div>easyLightBox</div>;
  },
});

export default installComponent(easyLightBox, 'viEasyLightBox');
