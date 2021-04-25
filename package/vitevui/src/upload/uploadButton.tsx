/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-21 14:48:11
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-23 11:19:19
 */
import { defineComponent } from 'vue';

const props = {
  fileTitle: {
    type: String,
    default: '',
  },
  accept: {
    type: String,
    default: 'image/png, image/jpeg, image/jpg',
  }, // 允许上传的文件类型
  multiple: {
    type: Boolean,
    default: false,
  }, // 是否支持多文件上传
  disabled: {
    type: Boolean,
    default: false,
  },
};
export default defineComponent({
  props,
  setup(props, context) {
    return () => (
      <viButton
        type='upload'
        accept={props.accept}
        multiple={props.multiple}
        disabled={props.disabled}
        vSlots={{
          uploadTitle() {
            return props.fileTitle || <viIcon name='vite_ziyuan' />;
          },
        }}
      />
    );
  },
});
