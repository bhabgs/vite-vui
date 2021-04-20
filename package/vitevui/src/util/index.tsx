/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-06 11:59:49
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-20 15:26:08
 */
import { viteTypeof } from './objType';
import { getFileType } from './files';
import installComponent from './installComponent';
import { getSlots } from './getslots';

const setStyleClass: (classes: Array<string>) => Array<string> = (classes) =>
  classes.map((item) => (item !== '' ? `vite_${item}` : ''));

const arrayCheck: (
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

export {
  viteTypeof,
  arrayCheck,
  setStyleClass,
  getFileType,
  installComponent,
  getSlots,
};
