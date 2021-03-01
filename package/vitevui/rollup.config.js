/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-20 16:57:35
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-23 10:45:45
 */
import plugins from './build/plugins';
// import VuePlugin from "rollup-plugin-vue";
import output from './build/output';

import jsx from 'acorn-jsx';

export default {
  input: 'src/index.ts',
  output,
  plugins,
  acornInjectPlugins: [jsx()],
  external: ['vue'],
};
