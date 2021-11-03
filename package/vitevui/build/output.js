/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-20 16:55:21
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-24 12:08:39
 */
const isProduction = process.env.NODE_ENV === 'production'; // 生产环境
const globals = {
  vue: 'Vue',
  '@antv/x6': 'x6',
};
const path = 'lib';
let output = [];

output.push({
  dir: path,
  format: 'es',
  globals,
  sourcemap: true,
  name: 'viteui',
});

if (isProduction) {
  output = [];
  ['iife', 'es', 'umd'].forEach((item, key) => {
    if (item !== 'es') {
      output.push({
        file: 'lib/' + item + '.js',
        format: item,
        name: 'viteui',
        globals,
      });
    } else {
      output.push({
        dir: 'lib',
        format: 'es',
        name: 'viteui',
        globals,
      });
    }
  });
}

export default output;
