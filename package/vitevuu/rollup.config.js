/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-20 16:57:35
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-24 10:29:50
 */

import typescript from '@rollup/plugin-typescript';
import path from 'path';
import output from './build/output';

const resolve = (filePath) => {
  return path.join(__dirname, '..', filePath);
};

export default {
  input: 'src/index.ts',
  output,
  plugins: [
    typescript({
      lib: ['esnext', 'dom', 'ES2015.Promise', 'ES5'], // , 'es6', 'dom'
      target: 'es5',
      noEmitOnError: true,
    }),
  ],
};
