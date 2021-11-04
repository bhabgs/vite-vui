/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-03-22 09:53:14
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-03-31 16:01:13
 */

import DefaultTheme from 'vitepress/dist/client/theme-default';
import asa from './component/contentmenu.vue';
import ant from 'ant-design-vue';
// import vitevui from '../../../package/vitevui';
import '../../../package/vitevui/src/style/index.less';
import './style.less';

export default {
  ...DefaultTheme,
  enhanceApp(opt) {
    const { app } = opt;
    // app.use(vitevui);
    app.use(ant);
    app.component('rightMenu', asa);
    // setTimeout(async () => {
    // const vitevui = await import('../../../package/vitevui');

    // }, 500);
  },
};
