/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-16 13:41:11
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-16 13:53:48
 */
import { baseObject } from '@/types';

export const getSlots: (ele: any) => baseObject<any> = (ele: any) => {
  let componentOptions = ele.componentOptions || {};
  if (ele.$vnode) {
    componentOptions = ele.$vnode.componentOptions || {};
  }
  const children = ele.slots || ele.children || componentOptions.children || [];

  const slots: baseObject = {};

  for (let i in children) {
    let key = i;
    if (i === 'default') {
      key = 'def';
    }
    slots[key] = children[i];
  }

  return { ...slots };
};
