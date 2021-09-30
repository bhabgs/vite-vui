/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-20 16:55:51
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-09 16:40:08
 */
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
// import replace from "@rollup/plugin-replace";
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import cssnano from 'cssnano';
import url from '@rollup/plugin-url';
import path from 'path';
import copyDir from './createFile';

const assets = path.join(__dirname, 'src/style/icon/');

const extensions = ['.ts', '.js', '.tsx', '.json', '.ttf', '.woff', '.woff2'];

// 创建iconfont 目录
copyDir(assets, './lib');

export default [
  typescript({
    lib: ['es5', 'dom'], // , 'es6', 'dom'
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
  url({
    include: [`${assets}logo.png`],
    destDir: `./lib`,
  }),
];
