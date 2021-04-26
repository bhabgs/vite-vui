/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-20 15:11:44
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-26 10:17:18
 */
import { defineComponent } from 'vue';
import { installComponent } from '../util';

const easyLightBox = defineComponent({
  setup() {
    return () => <div class='vite_easylightbox'>easyLightBox</div>;
  },
});

export default installComponent(easyLightBox, 'viEasyLightBox');
