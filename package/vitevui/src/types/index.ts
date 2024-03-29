/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-05 14:17:25
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-07 14:01:27
 */

type baseObject<T = any> = Record<string, T>;
import { VNode } from 'vue';
import { Emitter } from 'mitt';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface IntrinsicElements {}
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $mitt: Emitter;
  }
}

export { baseObject };
