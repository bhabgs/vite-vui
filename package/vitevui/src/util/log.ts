/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-07 14:45:00
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-07 14:56:08
 */

const logTip = 'vitevui:';
export default {
  err(err?: string) {
    throw new Error(logTip + err);
  },
  warn(warn?: string) {
    console.warn(logTip + warn);
  },
};
