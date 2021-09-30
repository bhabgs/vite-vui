import { baseObject } from '@/types';

/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-20 15:16:26
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-20 15:16:45
 */
type TYPEOF =
  | 'string'
  | 'array'
  | 'object'
  | 'number'
  | 'boolean'
  | 'function'
  | 'date'
  | 'document'
  | 'global'
  | 'RegExp'
  | 'error'
  | 'undefined'
  | 'null';

const typeEnums: baseObject<TYPEOF> = {
  '[object String]': 'string',
  '[object Number]': 'number',
  '[object Boolean]': 'boolean',
  '[object Undefined]': 'undefined',
  '[object Null]': 'null',
  '[object Function]': 'function',
  '[object Date]': 'date',
  '[object Array]': 'array',
  '[object Error]': 'error',
  '[object RegExp]': 'RegExp',
  '[object HTMLDocument]': 'document',
  '[object global]': 'global',
};

export const viteTypeof: (ars: any) => TYPEOF = (ars) => {
  const ty = Object.prototype.toString.call(ars);
  return typeEnums[ty] || 'any';
};
