/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-06 11:59:49
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-23 11:23:48
 */
import { viteTypeof } from './objType';
import { getFileType } from './files';
import installComponent from './installComponent';
import { getSlots } from './getslots';
import { simpleDownload, blobDownload } from './download';
import xhr from './xhr';
import log from './log';

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

const cId = (length?: number) => {
  const n = length || 10;
  return Number(Math.random().toString().substr(3, n) + Date.now()).toString(
    36,
  );
};

const computedSize = (val: number) => {
  // val 大小为b
  const kb = val / 1024;
  const m = kb / 1024;

  if (kb > 100) {
    return m.toFixed(0) + 'M';
  }
  return kb.toFixed(0) + 'kb';
};

export {
  viteTypeof,
  arrayCheck,
  setStyleClass,
  getFileType,
  installComponent,
  getSlots,
  xhr,
  cId,
  computedSize,
  log,
  simpleDownload,
  blobDownload,
};
