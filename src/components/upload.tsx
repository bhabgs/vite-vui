/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 16:21:03
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-26 10:06:02
 */
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(Prop, context) {
    const values = ref([
      {
        name: 'logo-dark-1000-1000.jpg',
        size: 167445,
        fileType: 'image/jpeg',
        url:
          'http://192.168.5.176/nas/document/1/20210427/logo-dark-1000-1000_1619487260876.jpg',
        id: 'aexa3fs4yg80000',
        progress: 100,
      },
      {
        name: '431941.jpg',
        size: 359215,
        fileType: 'image/jpeg',
        url:
          'http://192.168.5.176/nas/document/1/20210427/431941_1619488799917.jpg',
        id: '5vpzfw04cjg0000',
        progress: 100,
      },
    ]);
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
