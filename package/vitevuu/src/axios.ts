/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-12-02 09:23:52
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-24 11:19:42
 */
import axios from 'axios';
import type { PLATFORM, baseObject } from './types';
import { getAllQuery } from './getQuery';
import { platForm } from './base';

const clientType: PLATFORM = 'app';

const headers: baseObject = {
  'X-Custom-Header': 'foobar',
  clientType,
  platForm: platForm(),
  'Content-Type': 'application/json;charset=UTF-8',
};

const instance = axios.create({
  baseURL: '/api/', // http://192.168.6.166:18003/webapi
  timeout: 60000,
  validateStatus(status) {
    if (status > 400 && status < 500) {
      console.error(`请求失败. status:${status}`);
    }
    return status < 500;
  },
  headers,
});

const getToken = (): string => {
  return `Bearer ${sessionStorage.getItem('token')}`;
};

let confReq = {};

instance.interceptors.request.use(
  (conf) => {
    const corpId = sessionStorage.getItem('corpId');
    conf.headers.Authorization = getToken();
    if (corpId) {
      conf.headers.corpId = corpId;
    }
    confReq = conf;
    return conf;
  },
  (err) => {
    return Promise.reject(err);
  },
);

let status: boolean = false;

instance.interceptors.response.use(
  async (res) => {
    const resData = res.data;
    status = resData.code === 'M0000';
    if (status) {
      return Promise.resolve(resData);
    }

    if (resData.code === 'O_T_001' && !getAllQuery().prevpath) {
      // window.history.go(0);
    }
    return Promise.resolve(resData);
  },
  (err) => {
    return Promise.reject(err);
  },
);

export { instance };

export default axios;
