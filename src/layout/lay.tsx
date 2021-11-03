/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:42:58
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-21 15:18:58
 */
import { defineComponent } from 'vue';
import { TimePicker } from 'ant-design-vue';
import moment from 'moment';
import 'ant-design-vue/dist/antd.css';

export default defineComponent({
  components: {
    timepicker: TimePicker,
  },
  setup(prop, context) {
    return () => (
      <vi-layout>
        <vi-layout-header>
          <div class='text_overflow_ellipsis' onClick={() => {}}></div>
        </vi-layout-header>
        <vi-layout>
          <viMenuBox
            menuTitle={'润滑管理'}
            menus={[
              {
                title: '1111119099',
                id: '1',
                icon: 'vite_vehivles',
                badgeCount: 1,
                shortname: '折叠1',
              },
              {
                title: '3333333',
                id: '3',
                shortname: '折叠2',
              },
            ]}
            onItemclick={(e: any) => {
              console.log(e);
            }}
            onCollapsed={(e: boolean) => {
              console.log(e);
            }}
          />

          <vi-layout-main>
            <timepicker
              default-value={moment('12', 'HH')}
              format='HH'
              style={{ width: '80px' }}
            />
          </vi-layout-main>
        </vi-layout>
        <vi-layout-footer
          v-contextmenu={{ menus: [{ key: '1', name: '哈哈' }], callBack() {} }}
        >
          <vi-icon
            name='vite_close'
            onClick={() => {
              alert(666);
            }}
          />
        </vi-layout-footer>
      </vi-layout>
    );
  },
});
