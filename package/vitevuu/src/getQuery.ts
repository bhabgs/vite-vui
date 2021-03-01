/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-12-02 11:21:27
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-24 09:44:31
 */

import type { baseObject } from './types';

const getQueryUrl = (): string => {
  return window.location.search.substr(1) || window.location.hash.split('?')[1];
};

const getQueryString: (name: string, search?: any) => string = (
  name,
  search,
) => {
  search = search || getQueryUrl();
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = search.match(reg);
  if (r != null) return unescape(r[2]);
  return '';
};

const getAllQuery: (s?: string) => baseObject = (s) => {
  const queryData: baseObject = {};
  let src: string | string[] = s || getQueryUrl();

  if (!src) {
    return queryData;
  }

  src = src.split('&');

  for (const i of src) {
    const oneQuery: any = i.split('=');
    // eslint-disable-next-line prefer-destructuring
    queryData[oneQuery[0]] = oneQuery[1];
  }
  return queryData;
};

const install = {
  getQueryString,
  getAllQuery,
};

export { getQueryString, getAllQuery };

export default install;
