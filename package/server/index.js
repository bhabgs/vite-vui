/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 17:10:05
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-24 09:47:59
 */
const Koa = require('koa');
const path = require('path');
const static = require('koa-static');

const resolve = (filePath) => {
  return path.join(__dirname, '..', filePath);
};

const app = new Koa();

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './dist';

app.use(static(path.join(__dirname, staticPath)));

console.log(resolve('.'));

// app.use(async (ctx) => {
//   ctx.body = 'hello world';
// });

app.listen(3100, () => {
  console.log('[demo] static-use-middleware is starting at port 3100');
});
