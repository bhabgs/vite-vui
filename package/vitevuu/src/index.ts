/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 16:56:15
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-26 10:54:34
 */
import axios, { instance } from './axios';
import checkUser from './checkUser';
import { getAllQuery, getQueryString } from './getQuery';
import signature from './signature';
import { deepCopy, decodeUnicode, encodeUnicode, guid, platForm } from './base';
import tp from './tp';
import tpu from './tp/ut';

const _default = {
  axios,
  instance,
  getAllQuery,
  getQueryString,
  platForm,
  checkUser,
  deepCopy,
  decodeUnicode,
  encodeUnicode,
  guid,
  signature,
  tp,
  tpu,
};

export {
  axios,
  instance,
  getAllQuery,
  getQueryString,
  platForm,
  checkUser,
  deepCopy,
  decodeUnicode,
  encodeUnicode,
  guid,
  signature,
  tp,
  tpu,
};

export default _default;
