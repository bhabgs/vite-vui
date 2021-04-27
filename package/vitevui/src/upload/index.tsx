/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-08 15:57:51
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-25 13:00:17
 */
import { defineComponent, computed, ref } from 'vue';
import { uploader, manageFile, onErr } from './upload_util';
import {
  setStyleClass,
  installComponent,
  getFileType,
  computedSize,
} from '../util';
import { iconsName, FileTypes } from '../util/files';
import uploadButton from './uploadButton';

export interface uploadItem {
  name: string;
  url: string;
  size: number;
  fileType: FileTypes;
  icon?: iconsName;
  progress?: number;
  id?: any;
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
  accept: String, // 允许上传的文件类型
  limit: {
    type: Number,
    default: 2,
  }, // 允许上传文件最大个数
  disabled: {
    type: Boolean,
    default: false,
  }, // 是否可编辑
  fileTitle: {
    type: String,
    default: '',
  },
  progressColor: {
    type: String,
    default: '#4498f0',
  },
  fileSize: {
    type: Number,
    default: 1024 * 1024 * 10,
  },
  value: Array, // 默认值
};

const viteUpload = defineComponent({
  props: viteUploadProp,
  components: {
    uploadButton,
  },
  setup(props, context) {
    let uploadStatus = false;

    // 区分可预览和不可预览的文件列
    const files = computed(() => {
      const previewFiles: Array<uploadItem> = [];
      const others: Array<uploadItem> = [];
      const previewFilesType = [
        'image/png',
        'image/jpg',
        'image/gif',
        'video',
        'image/jpeg',
      ];
      let length = 0;
      for (const i of props.value as Array<uploadItem>) {
        const hasPreview = previewFilesType.find((item) => item === i.fileType);
        length += 1;
        if (hasPreview) {
          previewFiles.push(i);
        } else {
          others.push(i);
        }
      }
      const classes = setStyleClass([
        'upload_box',
        length >= props.limit ? 'upload_disabled' : '',
      ]);
      return { previewFiles, others, length, classes };
    });

    // 删除方法
    const removeItem = (item: uploadItem) => {
      const newval = props.value?.filter(
        (unitem: any) => item.url !== unitem.url,
      );
      context.emit('update:value', newval);
    };
    // 删除按钮 vdom
    const closeIcon = (item: uploadItem) => {
      return (
        <viIcon
          name={'vite_close'}
          class='item_close'
          onClick={(e: Event) => {
            e.stopPropagation();
            removeItem(item);
          }}
        />
      );
    };

    // 上传文件处理
    const uploadFile = async (e: any) => {
      const files = e.target.files[0];

      const { data, formData, state } = manageFile(props, context, files);

      if (!state) return;

      uploader(props, context, data.id, formData);
      uploadStatus = true;

      e.target.files = null;
      e.target.value = null;
    };

    const visible = ref(false);

    const srcIndex = ref(0);

    const srcList = computed(() => {
      return files.value.previewFiles.map((item: any) => item.url);
    });

    // 图片点击操作
    const imgClick = (item: uploadItem, index: number) => {
      if (item.progress && item.progress === 100) {
        visible.value = true;
        srcIndex.value = index;
      }
    };

    const renderProgress = (progress: number) => {
      let flag = true;

      if (progress >= 100) {
        flag = false;
      }
      if (progress) {
        return (
          <div
            class='progress'
            style={{
              width: progress + '%',
              background: props.progressColor,
              opacity: !flag ? 0 : 1,
            }}
          ></div>
        );
      }
      return '';
    };

    return () => (
      <div class={files.value.classes}>
        <uploadButton
          fileTitle={props.fileTitle}
          accept={props.accept}
          multiple={props.multiple}
          disabled={files.value.length >= props.limit ? true : props.disabled}
          onChange={(e: any) => {
            uploadFile(e);
          }}
        />
        {/* 图片视频预览位置 */}
        <ul class='img_video_box'>
          {files.value.previewFiles.map((item, index) => (
            <li
              title={item.name}
              onClick={() => {
                imgClick(item, index);
              }}
            >
              <img src={item.url} alt={item.name} />
              {closeIcon(item)}
              {renderProgress(item.progress || 0)}
            </li>
          ))}
        </ul>
        {/* 文件压缩包 等其他无法预览文件预览位置 */}
        <ul class='other_files'>
          {files.value.others.map((item) => (
            <li>
              <viIcon svg name={item.icon || getFileType(item.fileType)} />
              <div class='upload_context'>
                <span class='file_name'>{item.name}</span>
                <span class='file_size'>{computedSize(item.size)}</span>
              </div>
              <viIcon svg name={item.icon} />
              <a href={item.url} target='view_window'>
                <viIcon name='vite_xiazai-2' class='loadfile_button' />
              </a>
              {closeIcon(item)}
              {renderProgress(item.progress || 0)}
            </li>
          ))}
        </ul>
        {/* 图片预览 */}
        <viEasyLightBox
          v-models={[
            [visible.value, 'value'],
            [srcIndex.value, 'srcIndex'],
          ]}
          srcList={srcList.value}
        />
      </div>
    );
  },
});
export default installComponent(viteUpload, 'viUpload');
