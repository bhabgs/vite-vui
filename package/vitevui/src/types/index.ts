/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-05 14:17:25
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-24 09:58:30
 */
interface baseObject<T = any> {
  [key: string]: T;
}
import { VNode } from 'vue';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

export { baseObject };
