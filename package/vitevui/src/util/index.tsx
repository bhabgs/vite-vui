/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-06 11:59:49
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-03-31 14:24:09
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
