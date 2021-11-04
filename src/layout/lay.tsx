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
import vitevuu, { signature } from '../../package/vitevuu';

export default defineComponent({
  components: {
    timepicker: TimePicker,
  },
  setup(prop, context) {
    let aaa: signature;
    onMounted(() => {
      aaa = new vitevuu.signature({
        ele: 'canvas',
        width: 400,
        height: 400,
        lineWidth: 2,
        fontColor: 'red',
      });
    });
    return () => (
      <vi-layout>
        <div
          onClick={() => {
            const base64 = aaa.getPNGImage();
            console.log(base64);
          }}
        >
          下载图片
        </div>

        <div
          onClick={() => {
            aaa.clear();
          }}
        >
          清除画面
        </div>
        <div>
          <canvas id='canvas'></canvas>
        </div>
        {/* <div style='width:20px; height: 100%'></div>
          <div style='padding: 20px 0;width: 200px; height:200px;'>
          </div> */}
      </vi-layout>
    );
  },
});
