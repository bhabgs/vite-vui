/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:42:58
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-21 15:18:58
 */
import {
  defineComponent,
  reactive,
  ref,
  getCurrentInstance,
  nextTick,
} from 'vue';
import axios from 'axios';
import { viFlow } from '../package/vitevui/src';
import test1 from './components/test1';
import test2 from './components/test2';
import upload from './components/upload';

const menus = [
  { name: 'deng', key: 'deng' },
  { name: 'deng1', key: 'deng1' },
];

const state = reactive({
  t: 'ooo',
});

const tabsItem = ref([
  {
    name: '润滑管理润滑管理润滑管理润滑管理润滑管理',
    icon: 'vite_atm-away',
    hasClosed: true,
    disabled: false,
    component: upload,
    id: 'aaaa',
  },
  {
    name: '润滑管理1',
    icon: 'sss',
    hasClosed: true,
    disabled: false,
    component: test1,
    id: 'bbbbbb',
  },
  {
    name: '润滑管理2',
    icon: 'sss',
    hasClosed: true,
    disabled: true,
    component: test2,
    id: 'ccccc',
  },
]);

const v = ref('aaa');

export default defineComponent({
  components: {},
  created() {},
  setup() {},
  render() {
    const props = reactive({
      collapsed: false,
    });
    const { proxy } = getCurrentInstance()!;
    const mitt = proxy!.$mitt;
    nextTick(() => {
      mitt.emit('vite-tabspage-add', tabsItem.value[0]);
      // nextTick(() => {
      //   mitt.emit('vite-tabspage-add', tabsItem.value[1]);
      // });
    });
    // 规则引擎测试专用
    const functions:any[]=[{
      "name":"解析为java对象",
      "funcName":"json.parse",
      "shortIntroduce":"解析json字符串为java对象",
      "paramDefineList":[
          {
              "defineCode":"jsonString",
              "paramType":"STR",
              "name":"json字符串"
          }
      ]
  }]
  let rules:any=[]
    // 规则引擎测试专用结束
    return (
      <vi-layout>
        <vi-layout-header>
          <div class='text_overflow_ellipsis'>
            润滑管理润滑管理润滑管理润滑管理润滑管理
          </div>
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
              },
              {
                title: '22222222',
                id: '2',
                icon: 'vite_vehivles',
                badgeCount: 20,
                child: [
                  {
                    title: '222222-111111',
                    id: '2-1',
                    badgeCount: 1,
                  },
                  {
                    title: '222222-222222',
                    id: '2-2',
                    icon: 'vite_vehivles',
                    badgeCount: 0,
                  },
                ],
              },
              {
                title: '3333333',
                id: '3',
              },
            ]}
            collapsed={props.collapsed}
            onItemclick={(e: any) => {
              console.log(e);
            }}
            onCollapsed={(e: boolean) => {
              console.log(e);
            }}
          />
          <vi-layout-main>
            {/* <viTabsPage /> */}
            <viFlow functions={functions} onRuleSearch={async(val:string)=>{
              const par: any = { searchTag: val };
              const res = await axios.post('/api/fsmEdge/v1/componentGraph/search', {
                recordType: 0,
                pageNum: 1,
                pageSize: 1000,
                ...par,
              },{
                headers:{
                  corpId:'160573079492499'
                }
              });
              rules = res.data.list;
                }}></viFlow>
                <div class='buttons'>
          <a-button
            type='primary'
            onClick={() => {
              // this.save();
            }}
          >
            保存
          </a-button>
        </div>
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
