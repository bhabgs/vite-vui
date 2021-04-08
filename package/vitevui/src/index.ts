/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-05 14:05:58
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-08 17:41:08
 */
import type { App } from 'vue';
import { setupElement } from './setup/element';
import mitt from './util/mitt';
import directive from './directive';
import type { baseObject } from './types';
import viLayout from './layout/lay';
import viLayoutHeader from './layout/lay_header';
import viLayoutSider from './layout/lay_sider';
import viLayoutMain from './layout/lay_main';
import viLayoutFooter from './layout/lay_footer';
import button from './button';
import menu from './menu';
import viteTabs from './tabs';
import viteTabsPage from './tabsPage';
import upload from './upload';
import { getTabCurrentDetail } from './tabsPage/tabsHooks';
import './style/index.less';

const COMPS: baseObject = {
  viLayout,
  viLayoutHeader,
  viLayoutSider,
  viLayoutMain,
  viLayoutFooter,
  button,
  viteTabs,
  viteTabsPage,
  menu,
  upload,
};
const VERSION: string = '0.0.1';

const install = (app: App) => {
  app.use(directive);
  app.config.globalProperties.$mitt = mitt;
  for (const key in COMPS) {
    app.use(COMPS[key]);
  }
  setupElement(app);
};

export {
  viLayout,
  viLayoutHeader,
  viLayoutSider,
  viLayoutMain,
  viLayoutFooter,
  button,
  menu,
  viteTabsPage,
  viteTabs,
  upload,
  setupElement,
  getTabCurrentDetail,
};

export default {
  install,
  version: VERSION,
};
