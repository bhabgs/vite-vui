import { defineComponent, nextTick } from 'vue';
import { installComponent } from '../util';

import './action.less';

const props = {
  type: {
    default: 'res',
  },
  data: {
    type: Array as any,
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
      action: {
        name: '',
        recordCode: '',
        moduleCode: '',
        des: '',
      },
      selectedObj: undefined as any,
      cells: [],
      nodeList: [],
      domNum: 0,
    };
  },
  watch: {
    data: {
      handler(val: any[]) {
        if (val.length != 0) {
          this.cells = this.data[0].cells;
          this.nodeList = this.data[1].nodeList;
          this.graph.fromJSON(this.data[0].cells);
        }
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    this.domNum = Math.floor(Math.random() * 1000);
  },
  mounted() {
    nextTick(() => {
      this.initGraph();
      if (this.type === 'template') {
        this.dealTemData();
      } else {
        this.dealResData();
      }
    });
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
    async initGraph() {
      const { Graph } = await import('@antv/x6');
      this.graph = new Graph({
        grid: true,
        // 对齐线
        snapline: true,
        // 节点缩放
        resizing: { enabled: true, orthogonal: false },
        container: document.getElementById(`graph${this.domNum}`)!,
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
        },
      });
      this.graph.on('node:click', (arg: any) => {
        this.selectedObj = arg.node.store.data;
        this.$emit('nodeClick', this.selectedObj);
      });
    },
  },
  render(h: any) {
    return (
      <div class='vuiFlow'>
        <div class='flex drag'>
          <div class='graph' id={`graph${this.domNum}`}></div>
        </div>
      </div>
    );
  },
});
export default installComponent(viFlowRes, 'viFlowRes');
