/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 16:21:03
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-08 17:41:37
 */
import { defineComponent } from 'vue';

export default defineComponent({
  setup(Prop, context) {
    return () => (
      <div class='test'>
        <viteUpload />
        <el-table />
      </div>
    );
  },
});
