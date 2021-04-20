/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-19 10:44:05
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-19 11:13:03
 */

import { App, DefineComponent } from '@vue/runtime-core';

export default (component: DefineComponent | any, name: string) => {
  component.install = (app: App) => {
    app.component(name, component);
  };
  return component;
};
