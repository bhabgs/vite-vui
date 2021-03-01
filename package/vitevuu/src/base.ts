/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-24 11:15:54
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-24 11:19:34
 */

import { baseObject, PLATFORM } from './types';

// 深拷贝
export const deepCopy = (source: any): any => {
  const target: baseObject<any> = Array.isArray(source) ? [] : {};
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object' && source[key] !== null) {
        target[key] = deepCopy(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
};

// 转为unicode 编码
export function encodeUnicode(str: string) {
  const res = [];
  for (let i = 0; i < str.length; i += 1) {
    res[i] = `00${str.charCodeAt(i).toString(16)}`.slice(-4);
  }
  return `\\u${res.join('\\u')}`;
}

// 解码
export function decodeUnicode(str: string) {
  str = str.replace(/\\/g, '%');
  return unescape(str);
}

// 生成id
export const guid = () => {
  return Number(Math.random().toString().substr(3, 3) + Date.now()).toString(
    36,
  );
};

export const platForm: () => PLATFORM = () => {
  const phoneMatch = /phone|iPhone|Moto|SM|Pixel/;
  const padMatch = /pad|iPod|Mobile/;

  if (navigator.userAgent.match(phoneMatch)) return 'app';

  if (navigator.userAgent.match(padMatch)) return 'pad';

  return 'web';
};
