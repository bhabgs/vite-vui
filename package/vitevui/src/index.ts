/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-05 14:05:58
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-21 14:33:01
 */
import type { App } from 'vue';
import mitt from './util/mitt';
import directive from './directive';
import type { baseObject } from './types';
import viLayout from './layout/lay';
import viLayoutHeader from './layout/lay_header';
import viLayoutSider from './layout/lay_sider';
import viLayoutMain from './layout/lay_main';
import viLayoutFooter from './layout/lay_footer';
import button from './button';
import easylightbox from './easylightbox';
import badge from './badge';
import menu from './menu';
import viteTabs from './tabs';
import viteTabsPage from './tabsPage';
import upload from './upload';
import viIcon from './icon';
import viFlow from './flow';
import viFlowRes from './flowRes';
import viLoginBox from './loginBox';
import tabsPageHook, { getTabCurrentDetail } from './tabsPage/tabsFunHook';
import './style/index.less';
import './assets/iconfont.css';

const COMPS: baseObject = {
  viLayout,
  viLayoutHeader,
  viLayoutSider,
  viLayoutMain,
  viLayoutFooter,
  button,
  easylightbox,
  badge,
  viteTabs,
  viteTabsPage,
  menu,
  viIcon,
  viFlow,
  viFlowRes,
  upload,
  viLoginBox,
};
const VERSION: string = '0.0.2';

const install = (app: App) => {
  app.use(directive);
  app.config.globalProperties.$mitt = mitt;
  for (const key in COMPS) {
    app.use(COMPS[key]);
  }
};

export {
  viLayout,
  viLayoutHeader,
  viLayoutSider,
  viLayoutMain,
  viLayoutFooter,
  button,
  easylightbox,
  badge,
  menu,
  viteTabsPage,
  viteTabs,
  upload,
  viFlow,
  viFlowRes,
  viIcon,
  viLoginBox,
  getTabCurrentDetail,
  tabsPageHook,
};

export default {
  install,
  version: VERSION,
};
