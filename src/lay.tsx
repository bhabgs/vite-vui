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
import { viFlowRes } from '../package/vitevui/src';

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

const cells = [
  {
    size: { width: 100, height: 40 },
    shape: 'rect',
    markup: [
      { selector: 'body', tagName: 'rect' },
      { selector: 'label', tagName: 'text' },
      { selector: 'argContent', tagName: 'text' },
      { selector: 'resContent', tagName: 'text' },
    ],
    data: {
      funcName: 'E5006_state_monitor',
      valueType: 'STR',
      name: '压滤全局状态监控Event',
      paramList: [],
      nodeType: 'FUNCTION',
      value: '',
      resField: '',
    },
    position: { x: 370, y: 180 },
    id: 'b439a9fe-9420-4a08-963c-57dc64961f81',
    ports: {
      groups: {
        topGroup: {
          position: { name: 'top' },
          attrs: {
            circle: {
              strokeWidth: 1,
              r: 5,
              fill: '#fff',
              magnet: true,
              stroke: '#45B8B1',
            },
          },
        },
        rightGroup: {
          position: { name: 'right' },
          attrs: {
            circle: {
              strokeWidth: 1,
              r: 5,
              fill: '#fff',
              magnet: true,
              stroke: '#45B8B1',
            },
          },
        },
        bottomGroup: {
          position: { name: 'bottom' },
          attrs: {
            circle: {
              strokeWidth: 1,
              r: 5,
              fill: '#fff',
              magnet: true,
              stroke: '#45B8B1',
            },
          },
        },
        leftGroup: {
          position: { name: 'left' },
          attrs: {
            circle: {
              strokeWidth: 1,
              r: 5,
              fill: '#fff',
              magnet: true,
              stroke: '#45B8B1',
            },
          },
        },
      },
      items: [
        {
          id: '527b3154-516b-4ecd-96f1-6c19ac0ad912',
          group: 'leftGroup',
        },
        {
          id: 'd28e8840-df2b-4fbc-9c47-d01692c818b1',
          group: 'rightGroup',
        },
        {
          id: '1494e58c-33c2-45ba-8e5a-8d15e317b7f0',
          group: 'topGroup',
        },
        {
          id: 'fded4011-40f8-4efc-8e27-6b2795ae5f98',
          group: 'bottomGroup',
        },
      ],
    },
    attrs: {
      label: { text: '压滤全局状态' },
      body: { strokeWidth: 1, rx: 10, ry: 10, fill: '#FDF1B3' },
    },
    zIndex: 1,
  },
  {
    size: { width: 80, height: 40 },
    shape: 'rect',
    data: {
      period: '1',
      valueType: '',
      name: '',
      startTime: '1',
      actionCodeList: [],
      triggerType: '2',
      nodeType: 'TRIGGER',
      triggerContext: '',
      eventCodeList: [],
      onDataItems: [],
      value: '',
    },
    position: { x: 140, y: 100 },
    id: 'ab478e92-6884-45d8-8f26-57bfaf2a468d',
    ports: {
      groups: {
        topGroup: {
          position: { name: 'top' },
          attrs: {
            circle: {
              strokeWidth: 1,
              r: 5,
              fill: '#fff',
              magnet: true,
              stroke: '#45B8B1',
            },
          },
        },
        rightGroup: {
          position: { name: 'right' },
          attrs: {
            circle: {
              strokeWidth: 1,
              r: 5,
              fill: '#fff',
              magnet: true,
              stroke: '#45B8B1',
            },
          },
        },
        bottomGroup: {
          position: { name: 'bottom' },
          attrs: {
            circle: {
              strokeWidth: 1,
              r: 5,
              fill: '#fff',
              magnet: true,
              stroke: '#45B8B1',
            },
          },
        },
        leftGroup: {
          position: { name: 'left' },
          attrs: {
            circle: {
              strokeWidth: 1,
              r: 5,
              fill: '#fff',
              magnet: true,
              stroke: '#45B8B1',
            },
          },
        },
      },
      items: [
        {
          id: '7d8a6e33-b506-46b0-b5a2-8220334124af',
          group: 'leftGroup',
        },
        {
          id: 'd7785fd5-40a0-4ee4-ad33-153c384d3938',
          group: 'rightGroup',
        },
        {
          id: '45c886f4-d543-4c24-acdf-737fd47f787e',
          group: 'topGroup',
        },
        {
          id: 'da0e605b-f493-48cc-a4e8-3125d0e5595c',
          group: 'bottomGroup',
        },
      ],
    },
    attrs: {
      label: { text: '定时触发：每' },
      body: { strokeWidth: 1, fill: '#A0D5FF' },
    },
    zIndex: 2,
  },
  {
    shape: 'edge',
    id: '18810e55-b99f-4ac5-925b-03cd1ad35532',
    source: {
      port: 'd7785fd5-40a0-4ee4-ad33-153c384d3938',
      cell: 'ab478e92-6884-45d8-8f26-57bfaf2a468d',
    },
    attrs: {
      line: {
        strokeWidth: 1,
        targetMarker: { size: 7, name: 'classic' },
      },
    },
    target: {
      port: '1494e58c-33c2-45ba-8e5a-8d15e317b7f0',
      cell: 'b439a9fe-9420-4a08-963c-57dc64961f81',
    },
    zIndex: 3,
  },
];

const nodeList = [
  {
    argContent: { '@type': 'java.util.HashMap' },
    corpId: '160573079492499',
    id: '767',
    interfaceId: 'b439a9fe-9420-4a08-963c-57dc64961f81',
    logId: '246944381678813184',
    moduleCode: '5006',
    nodeCode: 'E5006_state_monitor-NO-001',
    nodeStatus: 0,
    recordCode: 'E5006_state_monitor',
    recordId: '239081017154416640',
    resContent: '["404","405"]',
    rulesComponent: {
      nodeType: 'FUNCTION',
      funcName: 'E5006_state_monitor',
      name: '压滤全局状态监控Event',
      paramList: [],
      resField: '',
      valueType: 'STR',
    },
    viewStr: '压滤全局状态监控Event',
  },
  {
    corpId: '160573079492499',
    id: '768',
    interfaceId: 'ab478e92-6884-45d8-8f26-57bfaf2a468d',
    moduleCode: '5006',
    nextInterfaceIdSet: ['b439a9fe-9420-4a08-963c-57dc64961f81'],
    nextNodeCodeMap: {
      '@type': 'java.util.HashMap',
      'b439a9fe-9420-4a08-963c-57dc64961f81': 'E5006_state_monitor-NO-001',
    },
    nodeCode: 'E5006_state_monitor-NO-002',
    nodeStatus: 2,
    recordCode: 'E5006_state_monitor',
    recordId: '239081017154416640',
    rulesComponent: {
      nodeType: 'TRIGGER',
      actionCodeList: [],
      eventCodeList: [],
      name: '',
      onDataItems: [],
      period: 1,
      startTime: 1,
      triggerContext: '',
      triggerType: 2,
      valueType: '',
    },
    viewStr: '定时触发：每1触发一次',
  },
];

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
    const functions: any[] = [
      {
        name: '解析为java对象',
        funcName: 'json.parse',
        shortIntroduce: '解析json字符串为java对象',
        paramDefineList: [
          {
            defineCode: 'jsonString',
            paramType: 'STR',
            name: 'json字符串',
          },
        ],
      },
    ];
    let rules: any = [];
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
            {/* <viFlow
              type='template'
              functions={functions}
              onRuleSearch={async (val: string) => {
                const par: any = { searchTag: val };
                const res = await axios.post(
                  '/api/fsmEdge/v1/componentGraph/search',
                  {
                    recordType: 0,
                    pageNum: 1,
                    pageSize: 1000,
                    ...par,
                  },
                  {
                    headers: {
                      corpId: '160573079492499',
                    },
                  },
                );
                rules = res.data.list;
              }}
            ></viFlow> */}
            <viFlowRes nodeList={nodeList} cells={cells} type='template' />
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
