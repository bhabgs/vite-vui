/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-22 15:58:19
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-26 08:55:18
 */

import { baseObject } from '@/types';

interface Config {
  headers?: baseObject;
  data?: any;
  timeout?: number;
  progress?: (event: { e: ProgressEvent<EventTarget>; val: number }) => {};
  progressDone?: (event: { e: any; val: number }) => {};
  baseURL?: string;
}

const methods = ['put', 'get', 'post'];

class xhr {
  constructor(config?: Config) {
    this.config = Object.assign(this.config, config || {});

    methods.forEach((item) => {
      (this as any)[item] = async (url: string, data: any, config?: Config) => {
        this.config.data = data;
        return await this.request(
          url,
          item,
          Object.assign(this.config, config || {}),
        );
      };
    });
  }

  public get!: (url: string, data: any, config?: Config) => Promise<any>;

  public put!: (url: string, data: any, config?: Config) => Promise<any>;

  public post!: (url: string, data: any, config?: Config) => Promise<any>;

  private request(url: string, method: string, config: Config) {
    return new Promise((res, rej) => {
      const ajax = new XMLHttpRequest();
      ajax.open(method.toUpperCase(), url);

      if (config.headers) {
        for (const i in config.headers) {
          const item = config.headers[i];
          ajax.setRequestHeader(i, item);
        }
      }

      if (this.config.progress) {
        ajax.upload.onprogress = (event) => {
          // console.log(event);
          const { loaded, total } = event;
          const val = Number(((loaded / total) * 100).toFixed(2)) - 1;
          if (event.lengthComputable) {
            (this.config as any).progress({
              e: event,
              val: val > 100 ? 99 : val,
            });
          }
        };
      }

      ajax.send(config?.data);

      ajax.onload = () => {
        if (ajax.status === 200) {
          res(JSON.parse(ajax.response));
          this.config.progressDone
            ? this.config.progressDone({
                e: ajax.response,
                val: 100,
              })
            : '';
        } else {
          (this.config as any).progress({ e: ajax.response, val: 0 });
          rej(ajax.responseText);
        }
      };
    });
  }

  create(config?: Config) {
    return new xhr(config);
  }

  private config: Config = {
    headers: {},
    data: {},
    baseURL: '',
    timeout: 1000,
  };
}

const axios = new xhr();
export default axios;
