/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-20 16:55:51
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-23 11:08:58
 */
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
// import replace from "@rollup/plugin-replace";
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import cssnano from 'cssnano';

const extensions = ['.ts', '.js', '.tsx'];

export default [
  typescript({
    lib: ['es5'], // , 'es6', 'dom'
    target: 'es5',
    noEmitOnError: true,
  }),

  resolve({ mainFields: ['module', 'main', 'browser'] }),
  commonjs({ extensions, sourceMap: true }),
  babel({ babelHelpers: 'bundled', extensions }),
  postcss({
    plugins: [cssnano],
    extract: 'style.css', // 输出路径
  }),
  // replace({
  //   __buildEnv__: "production",
  //   __buildDate__: () => new Date(),
  //   __buildVersion: 1,
  // }),
];
