import {
  createTextVNode,
  createVNode,
  defineComponent,
  reactive,
  ref,
} from 'vue';
import { Graph, Shape, Addon } from '@antv/x6';
import { message } from 'ant-design-vue';

import '@/assets/less/action.less';

const props = {
  cells: {
    default: [],
  },
  nodeList: {
    default: [],
  },
};

export default defineComponent({
  components: {},
  props,
  data() {
    return {
      recordType: 0 as any, // 0规则 1决策
      graph: undefined as any,
      stencil: undefined as any,
      action: {
        name: '',
        recordCode: '',
        moduleCode: '',
        des: '',
      },
      diaVisible: false,
      selectedObj: undefined as any,
      diaObj: {
        name: '',
      } as any,
    };
  },
  mounted() {
    this.initGraph();
    this.getData();
  },
  methods: {
    async getData() {
      this.cells.forEach((ele: any) => {
        // 暂时只有函数
        if (ele.shape !== 'edge') {
          for (let i = 1; i < this.nodeList.length; i += 1) {
            const item: any = this.nodeList[i];
            if (ele.id === item.interfaceId) {
              let borderColor = 'grey';
              let resContent = '';
              switch (item.nodeStatus) {
                case 0:
                  resContent = item.resContent;
                  borderColor = 'green';
                  break;
                case 1:
                  resContent = item.errorMsg;
                  borderColor = 'red';
                  break;
                default:
                  borderColor = 'blue';
              }
              ele.attrs.body.stroke = borderColor;
              ele.attrs.body.strokeWidth = 2;
              ele.size = { width: 200, height: 150 };
              ele.attrs.label.text = item.viewStr;
              if (item.argContent) {
                delete item.argContent['@type'];
              }

              ele.attrs.argContent = {
                text: JSON.stringify(item.argContent || ''),
                refY: 0.2,
              };
              ele.attrs.resContent = {
                text: JSON.stringify(resContent),
                refY: 0.7,
              };
            }
          }
        }
      });
      this.graph.fromJSON(this.cells);
    },
    initGraph() {
      this.graph = new Graph({
        grid: true,
        // 对齐线
        snapline: true,
        // 节点缩放
        resizing: true,
        container: document.getElementById('graph')!,
        background: { color: '#ffffff' },
        // 禁止出画布
        translating: {
          restrict: true,
        },
        scroller: {
          enabled: true,
        },
        // 缩放
        mousewheel: {
          enabled: true,
          modifiers: ['alt'],
        },
        keyboard: true,
        clipboard: true,
        history: true,
        interacting: false,
        selecting: {
          enabled: true,
          className: 'x6-widget-selection-selected',
          showNodeSelectionBox: true,
        },
        connecting: {
          snap: true,
          allowBlank: false,
          allowLoop: false,
          highlight: true,
          connector: 'normal',
          connectionPoint: 'boundary',
          router: 'manhattan',
          createEdge(arg) {
            return new Shape.Edge({
              attrs: {
                line: {
                  // stroke: '#a0a0a0',
                  strokeWidth: 1,
                  targetMarker: {
                    name: 'classic',
                    size: 7,
                  },
                },
              },
            });
          },
          validateConnection(arg) {
            return true;
          },
        },
      });
    },
  },
  render(h: any) {
    return (
      <div class='action'>
        <div class='flex drag'>
          <div id='graph'></div>
        </div>
      </div>
    );
  },
});
