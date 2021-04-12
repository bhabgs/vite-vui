/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-06 11:59:49
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-09 11:58:23
 */
import { baseObject } from '@/types';
import { Text, VNode } from 'vue';

export const tuple = <T extends string[]>(...args: T) => args;

export const getButtonSlots: (
  self: any,
  name?: string,
) => Array<VNode | JSX.Element> = (self: any, name = 'default') => {
  let res = self.$slots[name]({});
  const children: Array<VNode | JSX.Element> = [];
  res.forEach((element: VNode) => {
    if (element.type === Text) {
      children.push(<span>{element.children}</span>);
    } else {
      children.push(element);
    }
  });
  return children;
};

export const setStyleClass: (classes: Array<string>) => Array<string> = (
  classes,
) => classes.map((item) => (item !== '' ? `vite_${item}` : ''));

export const arrayCheck: (
  arr1: Array<any>,
  arr2: Array<any>,
  key: string,
) => boolean = (arr1, arr2, key) => {
  if (arr1.length !== arr2.length) return false;
  try {
    arr1.map((item) => item[key]);
    arr2.map((item) => item[key]);
  } catch (error) {
    return false;
  }
  return true;
};
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
