/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-08 17:38:21
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-12 09:24:19
 */
import 'ant-design-vue/dist/antd.css';
import { Input, Button, Drawer, Radio, Select, Checkbox } from 'ant-design-vue';
// import el from 'element-plus';

import { App } from '@vue/runtime-core';

const components = [Input, Button, Drawer, Select, Radio, Checkbox];

export const setupAntDesign = (app: App) => {
  // app.use(el);
  components.forEach((component) => {
    app.component(component.name, component);
  });
  app.component('ASelectOption', Select.Option);
};
