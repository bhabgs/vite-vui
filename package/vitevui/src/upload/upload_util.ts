/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-25 09:32:36
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-26 09:31:26
 */
import { SetupContext } from '@vue/runtime-core';
import { uploadItem } from '.';
import { cId, computedSize, log, xhr } from '../util';

interface ManageFileData {
  state: boolean;
  data: uploadItem | any;
  formData: FormData;
  msg: string;
}

export const onErr = (context: SetupContext, msg: string) => {
  context.emit('err', { msg });
};

export const manageFile: (
  props: any,
  context: SetupContext,
  e: File,
) => ManageFileData = (props, context, e) => {
  const formData = new FormData();
  const id = cId();
  const data = {
    name: e.name,
    size: e.size,
    fileType: e.type,
    url: window.URL.createObjectURL(e),
    id,
    progress: 0,
  };
  let msg = '';
  let state = true;
  if (e.size >= props.fileSize) {
    msg = `文件上传大小不能超过 ${computedSize(
      props.fileSize,
    )}, 当前文件大小为${computedSize(e.size)}`;
    onErr(context, msg);
    log.warn(msg);
  }
  props.value.push(data);
  formData.append('file', e);
  formData.append('size', String(e.size));
  formData.append('name', e.name);
  formData.append('fileType', e.type);
  return {
    state,
    msg,
    data,
    formData,
  };
};

export const uploader: (
  props: any,
  context: SetupContext,
  id: string,
  formData: FormData,
) => any = async (props: any, context: SetupContext, id, formData) => {
  const ndata = props.value?.find((item: any) => item.id === id);
  const ajax = xhr.create();

  let res: any = {};
  try {
    res = await ajax.post(props.action, formData, {
      headers: props.headers || {},
      progress: (e): any => {
        const { val } = e;
        ndata.progress = val;
      },
      progressDone: (): any => {
        console.log(ndata.id);
      },
    });
    ndata.progress = 100;
    ndata.url = res.data.url;
  } catch (error) {
    ndata.progress = 0;
  }
};
