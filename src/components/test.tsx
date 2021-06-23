/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 16:21:03
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-16 15:06:41
 */
import { defineComponent, getCurrentInstance } from 'vue';
import { getTabCurrentDetail } from '../../package/vitevui';
import test1 from './test1';

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()!;
    const mitt = proxy!.$mitt;
    mitt.on('reload', () => {
      alert('aaa');
    });

    return () => (
      <div class='test'>
        <button
          onClick={() => {
            const tabPage: any = {
              name: 'newPage',
              id: 'newpage',
              component: test1,
              params: {
                name: 'params',
              },
            };
            mitt.emit('vite-tabspage-add', tabPage);
          }}
        >
          add
        </button>
        <button
          onClick={() => {
            mitt.emit('vite-tabspage-remove');
          }}
        >
          remove
        </button>

        <button
          onClick={() => {
            console.log(getTabCurrentDetail());
          }}
        >
          get
        </button>
      </div>
    );
  },
});
