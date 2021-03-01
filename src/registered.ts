/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-11-30 09:53:41
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-26 10:04:14
 */
import { App } from 'vue';
import vui from '../package/vitevui';
import vitevuu from '../package/vitevuu';

export default {
  async install(app: App, options: any) {
    app.use(vui);
    app.config.globalProperties.$vitevuu = vitevuu;
  },
};
