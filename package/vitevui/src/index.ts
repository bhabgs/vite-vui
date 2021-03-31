/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-05 14:05:58
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-03-31 11:31:11
 */
import type { App } from 'vue';
import directive from './directive';
import type { baseObject } from './types';
import viLayout from './layout/lay';
import viLayoutHeader from './layout/lay_header';
import viLayoutSider from './layout/lay_sider';
import viLayoutMain from './layout/lay_main';
import viLayoutFooter from './layout/lay_footer';
import button from '@/button';
import SideBox from '@/menu';
import './style/index.less';

const COMPS: baseObject = {
  viLayout,
  viLayoutHeader,
  viLayoutSider,
  viLayoutMain,
  viLayoutFooter,
  button,
  SideBox,
};
const VERSION: string = '0.0.1';

const install = (app: App) => {
  app.use(directive);
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
  SideBox,
};

export default {
  install,
  version: VERSION,
};
