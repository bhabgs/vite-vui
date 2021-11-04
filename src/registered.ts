/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-11-30 09:53:41
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-21 13:31:27
 */
import { App } from 'vue';
import vui from '../package/vitevui/src/index';
import '../package/vitevui/src/style/index.less';
// import vui from '../package/vitevui';
// import '../package/vitevui/lib/style.css';

export default {
  async install(app: App, options: any) {
    app.use(vui);
    // app.config.globalProperties.$vitevuu = vitevuu;
  },
};
