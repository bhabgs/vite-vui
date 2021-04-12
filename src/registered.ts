/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-11-30 09:53:41
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-12 16:03:45
 */
import { App } from 'vue';
import vui from '../package/vitevui/src/index';
// import 'element-plus/lib/theme-chalk/index.css';
// import vui from '../package/vitevui';
import '../package/vitevui/lib/style.css';
import vitevuu from '../package/vitevuu';

export default {
  async install(app: App, options: any) {
    app.use(vui);
    app.config.globalProperties.$vitevuu = vitevuu;
  },
};
