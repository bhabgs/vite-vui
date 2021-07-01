/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-08 17:38:21
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-12 09:24:19
 */
import 'element-plus/lib/theme-chalk/index.css';
import { ElTable, ElTableColumn } from 'element-plus';
// import el from 'element-plus';

import { App } from '@vue/runtime-core';

const components = [ElTable, ElTableColumn];

export const setupElement = (app: App) => {
  // app.use(el);
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
