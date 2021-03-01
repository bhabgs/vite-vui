/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-24 10:23:05
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-24 10:43:14
 */
const inDev = {
  dir: 'lib',
  format: 'es',
  sourcemap: true,
  name: 'vitevuu',
};
const path = 'lib';
let output = [inDev];

const isProduction = process.env.NODE_ENV === 'production'; // 生产环境

if (isProduction) {
  output = [];
  ['iife', 'es', 'umd'].forEach((item, key) => {
    if (item !== 'es') {
      output.push({
        file: 'lib/' + item + '.js',
        format: item,
        name: 'vitevuu',
      });
    } else {
      output.push({
        dir: 'lib',
        format: 'es',
        name: 'vitevuu',
      });
    }
  });
}

export default output;
