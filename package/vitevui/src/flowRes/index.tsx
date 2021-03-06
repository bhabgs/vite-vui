import {
  createTextVNode,
  createVNode,
  defineComponent,
  reactive,
  ref,
} from 'vue';
import { installComponent } from '../util';
import { Graph, Shape, Addon } from '@antv/x6';

import './action.less';

const props = {
  type: {
    default: 'res',
  },
  cells: {
    default: [],
  },
  nodeList: {
    default: [],
  },
};

const viFlowRes = defineComponent({
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
    if (this.type === 'template') {
      this.dealTemData();
    } else {
      this.dealResData();
    }
  },
  methods: {
    finishEdit(ele: any) {
      ele.done = true;
      ele.attrs.body.stroke = 'green';
    },
    dealTemData() {
      this.cells.forEach((ele: any) => {
        if (ele.shape !== 'edge') {
          if (ele.dynamically) {
            ele.done = false;
            ele.attrs.body.stroke = 'blue';
            ele.attrs.body.strokeWidth = 2;
          }
        }
      });
      this.graph.fromJSON(this.cells);
    },
    dealResData() {
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
      this.graph.on('node:click', (arg: any) => {
        this.selectedObj = arg.node.store.data;
        console.log(this.selectedObj);
        this.$emit('click', this.selectedObj);
      });
    },
  },
  render(h: any) {
    return (
      <div class='vuiFlow'>
        <div class='flex drag'>
          <div id='graph'></div>
        </div>
      </div>
    );
  },
});
export default installComponent(viFlowRes, 'viFlowRes');
