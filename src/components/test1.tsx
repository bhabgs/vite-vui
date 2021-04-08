/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 16:21:03
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-08 14:10:06
 */
import { defineComponent, getCurrentInstance } from 'vue';
import { getTabCurrentDetail } from '../../package/vitevui';

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()!;
    const mitt = proxy!.$mitt;
    return () => (
      <div
        class='test'
        onClick={() => {
          console.log(getTabCurrentDetail('aaaa'));
        }}
      >
        aaaa1
        <input type='text' />
      </div>
    );
  },
});
