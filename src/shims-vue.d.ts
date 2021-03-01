/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:25:14
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-26 11:11:22
 */
import { DefineComponent } from 'vue';
import vitevuu from '../package/vitevuu';

declare module '*.vue' {
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// 设置vue用户自定义属性
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $vitevuu: typeof vitevuu;
  }
}
