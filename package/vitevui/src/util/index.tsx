/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-06 11:59:49
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-07 14:53:58
 */
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
