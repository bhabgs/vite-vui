/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-12-01 16:34:44
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-24 11:07:15
 */
import { instance } from './axios';
import { getAllQuery } from './getQuery';
import { netType, BASECALLDATA, TYPE } from './types';

const { netType, corpId } = getAllQuery();

const config = {
  netType: netType || 1,
};

export default {
  // 检查用户信息
  async checkToken(token?: string): Promise<BASECALLDATA> {
    token = token || window.sessionStorage.getItem('token') || '';
    if (!token) return this.baseCallData('failure', null, 'token不存在');
    let res;
    try {
      res = await instance.get(`/auth/oauth/check_token?token=${token}`);
    } catch (error) {
      return this.baseCallData('failure', res, 'token检查失败.');
    }
    return this.baseCallData('ok', res, 'token有效');
  },
  async getTokenByCode(code: string): Promise<BASECALLDATA> {
    let res: any;
    try {
      res = await instance.get(
        `/auth/oauth/getTokenByCode?code=${code}&netType=${config.netType}`,
      );
    } catch (error) {
      return this.baseCallData(
        'failure',
        res,
        'token检查失败. 接口请求错误 500+',
      );
    }
    if (res.code === 'M0000') {
      window.sessionStorage.setItem('token', res.data.access_token);
      window.sessionStorage.setItem('rf_token', res.data.refresh_token);
    } else {
      return this.baseCallData(
        'failure',
        res,
        `token检查失败. 接口返回错误 code:${res.code}`,
      );
    }
    return this.baseCallData('ok', res, 'token有效');
  },

  async check(checkCorpId?: boolean): Promise<BASECALLDATA> {
    let res = await this.checkToken();
    const sessionCorpId = sessionStorage.getItem('corpId');
    if (res.type === 'failure') {
      const { userCode } = getAllQuery();
      if (!userCode)
        return this.baseCallData('failure', {}, '客户端没有传递userCode');
      res = await this.getTokenByCode(userCode);
    }
    if (!corpId && !sessionCorpId && checkCorpId) {
      return this.baseCallData('failure', {}, '客户端没有传递corpId');
    }
    window.sessionStorage.setItem('corpId', corpId || sessionCorpId);
    return res;
  },
  baseCallData(type: TYPE, data: any, msg: string): Promise<BASECALLDATA> {
    // Promise.reject
    return Promise.resolve({ type, data, msg });
  },
  async refreshToken(cb?: () => {}) {
    const rfToken = sessionStorage.getItem('rf_token');
    const res = await instance.get(`/refresh/token?refresh_token=${rfToken}`);
    sessionStorage.setItem('token', res.data.access_token);
    sessionStorage.setItem('rf_token', res.data.refresh_token);
    if (cb) cb();
    return this.baseCallData('ok', res, '');
  },
};
