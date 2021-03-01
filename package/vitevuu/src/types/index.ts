/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 16:59:03
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-26 10:37:56
 */

// 展示平台
type PLATFORM = 'app' | 'pcAdmin' | 'pc' | 'pad' | 'web' | 'all';
type TYPE = 'failure' | 'ok';
type netType = 1 | 2;

interface BASECALLDATA {
  type: TYPE;
  data: any;
  msg: string;
}
interface baseObject<T = any> {
  [key: string]: T;
}

export { PLATFORM, baseObject, netType, BASECALLDATA, TYPE };
