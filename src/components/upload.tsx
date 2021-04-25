/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 16:21:03
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-23 11:38:19
 */
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(Prop, context) {
    const values = ref([]);
    return () => (
      <div class='test'>
        <viUpload
          // multiple
          action={'/api/storage/v1/document/upload'}
          accept='aplication/zip'
          headers={{
            corpId: '1',
          }}
          v-model={[values.value, 'value']}
        />
        {JSON.stringify(values.value)}
      </div>
    );
  },
});
