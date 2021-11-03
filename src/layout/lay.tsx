/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:42:58
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-21 15:18:58
 */
import { defineComponent, onMounted } from 'vue';
import { TimePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

export default defineComponent({
  components: {
    timepicker: TimePicker,
  },
  setup(prop, context) {
    onMounted(() => {});
    return () => (
      <vi-layout>
        <canvas id='canvas'></canvas>
      </vi-layout>
    );
  },
});
