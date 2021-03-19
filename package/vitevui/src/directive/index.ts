/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-03-18 11:52:08
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-03-19 13:39:29
 */
import { App } from 'vue';
import contextmenu from './contextmenu';

export default {
  install(app: App) {
    app.use(contextmenu);
  },
};
