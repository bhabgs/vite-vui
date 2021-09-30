/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:25:14
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-07 14:07:34
 */
import Emitter from '../package/vitevui/lib/types/mitt';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $mitt: typeof Emitter;
  }
}
import { createApp } from 'vue';
import reg from './registered';

import App from './lay';
import './assets/style/index.less';
import '../package/vitevui/src/style/index.less';

createApp(App).use(reg).mount('#app');
