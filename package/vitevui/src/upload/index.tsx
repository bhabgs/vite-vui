/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-08 15:57:51
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-20 15:52:06
 */
import { defineComponent, computed } from 'vue';
import { setStyleClass, installComponent, getFileType } from '../util';
import { iconsName, FileTypes } from '../util/files';

export interface uploadItem {
  name: string;
  url: string;
  size: number;
  fileType: FileTypes;
  icon?: iconsName;
}

const viteUploadProp = {
  action: {
    type: String,
    default: '',
  }, // 上传文件地址
  headers: {
    type: Object,
    default() {
      return {};
    },
  }, // 上头信息
  multiple: {
    type: Boolean,
    default: false,
  }, // 是否支持多文件上传
  accept: {
    type: Array,
    default: [
      'ai',
      'arm',
      'css',
      'eps',
      'cad',
      'zip',
      'json',
      'html',
      'jpg',
      'ppt',
      'txt',
      'gif',
      'wav',
      'docx',
      'pdf',
      'ps',
      'mp3',
      'xml',
      'mp4',
      'xls',
      'vid',
      'png',
    ],
  }, // 允许上传的文件类型
  limit: {
    type: Number,
    default: 10,
  }, // 允许上传文件最大个数
  disabled: {
    type: Boolean,
    default: false,
  }, // 是否可编辑
  fileTitle: {
    type: String,
    default: '',
  },
  value: Array, // 默认值
};

const viteUpload = defineComponent({
  props: viteUploadProp,
  setup(props, context) {
    const classes = setStyleClass(['upload_box']);
    // 区分可预览和不可预览的文件列
    const files = computed(() => {
      const previewFiles: Array<uploadItem> = [];
      const others: Array<uploadItem> = [];
      const previewFilesType = ['png', 'jpg', 'gif', 'video'];
      for (const i of props.value as Array<uploadItem>) {
        const hasPreview = previewFilesType.find((item) => item === i.fileType);
        if (hasPreview) {
          previewFiles.push(i);
        } else {
          others.push(i);
        }
      }
      return { previewFiles, others };
    });

    // 删除方法
    const removeItem = (item: uploadItem) => {
      const newval = props.value?.filter(
        (unitem: any) => item.url !== unitem.url,
      );
      console.log(newval);
      context.emit('update:value', newval);
    };
    // 删除按钮 vdom
    const closeIcon = (item: uploadItem) => {
      return (
        <viIcon
          name={'vite_close'}
          class='item_close'
          onClick={() => {
            removeItem(item);
          }}
        />
      );
    };

    return () => (
      <div class={classes}>
        <viButton
          type='upload'
          vSlots={{
            uploadTitle() {
              return props.fileTitle || <viIcon name='vite_ziyuan' />;
            },
          }}
        />
        {/* 图片视频预览位置 */}
        <ul class='img_video_box'>
          {files.value.previewFiles.map((item) => (
            <li title={item.name}>
              <img src={item.url} alt={item.name} />
              {closeIcon(item)}
            </li>
          ))}
        </ul>
        {/* 文件压缩包 等其他无法预览文件预览位置 */}
        <ul class='other_files'>
          {files.value.others.map((item) => (
            <li>
              <viIcon svg name={item.icon || getFileType(item.url)} />
              <div class='upload_context'>
                <span class='file_name'>{item.name}</span>
                <span class='file_size'>{item.size}KB</span>
              </div>
              <viIcon svg name={item.icon} />
              {closeIcon(item)}
            </li>
          ))}
        </ul>
      </div>
    );
  },
});
export default installComponent(viteUpload, 'viUpload');
