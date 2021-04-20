/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 16:21:03
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-20 14:18:30
 */
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(Prop, context) {
    const values = ref([
      {
        name: 'bhabgs',
        url:
          'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png?id=1',
        size: '88',
        fileType: 'png',
        icon: '',
      },
      {
        name: 'bhabgs',
        url:
          'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png?id=2',
        size: '88',
        fileType: 'png1',
        icon: '',
      },
      {
        name: 'bhabgs',
        url:
          'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png?id=3',
        size: '88',
        fileType: 'png1',
        icon: '',
      },
    ]);
    return () => (
      <div class='test'>
        <viUpload v-model={[values.value, 'value']} />
      </div>
    );
  },
});
