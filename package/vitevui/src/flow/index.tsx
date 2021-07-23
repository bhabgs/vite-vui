import { defineComponent, createTextVNode } from 'vue';
import { Graph, Shape, Addon } from '@antv/x6';
import { installComponent } from '../util';
import fac from './component';
import FUNCTION from './graphCom/FUNCTION';
import CONSTANT from './graphCom/CONSTANT';
import OPERATOR from './graphCom/OPERATOR';
import TRIGGER from './graphCom/TRIGGER';
import RULES from './graphCom/RULES';
import LOGIC from './graphCom/LOGIC';
import SELECTOR from './graphCom/SELECTOR';
import SELECTORLine from './graphCom/SELECTORLine';
import SWITCH from './graphCom/SWITCH';
import SWITCHLine from './graphCom/SWITCHLine';

import './action.less';

const coms: any = {
  FUNCTION,
  CONSTANT,
  OPERATOR,
  TRIGGER,
  RULES,
  LOGIC,
  SELECTOR,
  SELECTORLine,
  SWITCH,
  SWITCHLine,
};

const viFlow = defineComponent({
  props: {
    // 模板：template
    type: {
      type: String,
      default: '',
    },
    functions: {
      default: [],
    },
    rules: {
      default: [],
    },
    data: {
      type: Array as any,
      default: [],
    },
  },

  data() {
    return {
      recordType: 1 as any, // 0规则 1决策
      graph: undefined as any,
      stencil: undefined as any,
      action: {
        name: '',
        recordCode: '',
        moduleCode: '',
        des: '',
      },
      funs: [] as any[],
      diaVisible: false,
      selectedObj: undefined as any,
      diaObj: {} as any,
      domNum: 0,
    };
  },
  watch: {
    functions: {
      handler(val: any[]) {
        this.funs = val;
      },
      deep: true,
      immediate: true,
    },
    data: {
      handler(val: any[]) {
        if (val.length != 0) {
          this.init();
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
    this.initGraph();
  },
  methods: {
    async init() {
      this.graph.fromJSON(this.data[0].cells);
      [, this.action] = this.data;
    },
    initGraph() {
      this.graph = new Graph({
        grid: true,
        // 对齐线
        snapline: true,
        // 节点缩放
        resizing: true,
        // height:document.getElementById('graph')!.clientHeight,
        container: document.getElementById(`graph${this.domNum}`)!,
        background: { color: '#ffffff' },
        // 禁止出画布
        translating: {
          restrict: true,
        },
        scroller: {
          enabled: true,
        },
        embedding: {
          enabled: true,
          findParent({ node }) {
            const bbox = node.getBBox();
            return this.getNodes().filter((ele) => {
              // 只有 data.parent 为 true 的节点才是父节点
              const data = ele.getData<any>();

              if (data && data.parent) {
                const targetBBox = ele.getBBox();
                return bbox.isIntersectWithRect(targetBBox);
              }
              return false;
            });
          },
        },
        // 缩放
        mousewheel: {
          enabled: true,
          modifiers: ['alt'],
        },
        keyboard: true,
        clipboard: true,
        history: true,
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
      this.graphEvent();
      this.stencil = new Addon.Stencil({
        target: this.graph,
        title: '组件',
        stencilGraphWidth: 280,
        stencilGraphHeight:
          document.getElementsByClassName('vuiFlow')[0].clientHeight - 32,
      });
      const stencilContainer = document.querySelector(`#module${this.domNum}`);
      stencilContainer!.appendChild(this.stencil.container);
      this.stencil.load([
        fac.getRectRadius(),
        fac.getRhombus(),
        fac.getRect(),
        fac.getTrapezoid(),
        fac.getEllipse(),
        fac.getCircle(),
        fac.getSquare(),
        fac.getTriangle(),
        fac.getGroup(),
      ]);
    },
    graphEvent() {
      this.graph.bindKey('del', (e: KeyboardEvent) => {
        const cells = this.graph.getSelectedCells();
        this.graph.removeCells(cells);
      });
      this.graph.bindKey('ctrl+c', (e: KeyboardEvent) => {
        const cells = this.graph.getSelectedCells();
        this.graph.copy(cells);
      });
      this.graph.bindKey('ctrl+v', (e: KeyboardEvent) => {
        this.graph.paste();
      });
      this.graph.bindKey('ctrl+z', (e: KeyboardEvent) => {
        this.graph.undo();
      });
      this.graph.bindKey('ctrl+y', (e: KeyboardEvent) => {
        this.graph.redo();
      });
      this.graph.on('node:dblclick', (arg: any) => {
        this.selectedObj = arg.node;
        this.diaObj = JSON.parse(JSON.stringify(this.selectedObj.store.data));
        this.diaVisible = true;
      });
      this.graph.on('edge:click', (arg: any) => {
        this.selectedObj = arg.edge;
        this.diaObj = JSON.parse(JSON.stringify(this.selectedObj.store.data));
        const id = this.diaObj.source.cell;
        const node = this.graph.getCellById(id);
        const type = node.store.data.data.nodeType;
        if (type === 'SELECTOR' || type === 'SWITCH') {
          this.selectedObj.setData({ nodeType: `${type}Line` });
          this.diaVisible = true;
        }
      });
      this.graph.on('edge:mouseenter', ({ edge }: any) => {
        edge.addTools([
          'source-arrowhead',
          'target-arrowhead',
          {
            name: 'button-remove',
            args: {
              distance: -50,
            },
          },
        ]);
      });
      this.graph.on('edge:mouseleave', ({ edge }: any) => {
        edge.removeTools();
      });
    },

    async setDiaVal(data: any) {
      this.diaObj = {};
      const selected = this.selectedObj.store.data;
      selected.data = {
        nodeType: data.nodeType,
        ...selected.data,
        ...JSON.parse(JSON.stringify(data)),
      };
      if (selected.data.nodeType.indexOf('Line') >= 0) {
        this.selectedObj.setData({ info: data });
        this.selectedObj.setLabels(data.value || data.leftOp + data.leftValue);
      } else {
        const param = {
          interfaceId: selected.id,
          nodeCode: selected.id,
          rulesComponent: selected.data,
        };
      }
      this.diaVisible = false;
    },

    save() {
      const cells = this.graph.toJSON();
      const nodes = cells.cells.filter((ele: any) => {
        return ele.shape !== 'edge';
      });
      const lines = cells.cells.filter((ele: any) => {
        return ele.shape === 'edge';
      });
      const par = {
        ...this.action,
        enabled: true,
        graphInfo: cells,
        recordType: this.recordType,
        nodeList: [] as any[],
      };
      nodes.forEach((node: any) => {
        const resNode: any = {
          interfaceId: node.id,
          nodeCode: node.id,
          rulesComponent: { ...node.data },
          nextInterfaceIdSet: [] as any[],
        };
        if (node.parent) {
          resNode.groupInterfaceId = node.parent;
        }
        // 查看是否有连接线
        lines.forEach((line: any) => {
          if (node.id === line.source.cell) {
            resNode.nextInterfaceIdSet.push(line.target.cell);
            if (line.data?.nodeType === 'SELECTORLine') {
              if (line.labels[0] === 'true') {
                resNode.rulesComponent.selectorParamList[0].trueInterfaceId =
                  line.target.cell;
              } else if (line.labels[0] === 'false') {
                resNode.rulesComponent.selectorParamList[0].falseInterfaceId =
                  line.target.cell;
              } else {
                // message.error('判断走向需要指定值，请继续编辑');
              }
            } else if (line.data?.nodeType === 'SWITCHLine') {
              resNode.rulesComponent.selectorParamList =
                resNode.rulesComponent.selectorParamList ?? [];
              resNode.rulesComponent.selectorParamList.push({
                ...line.data.info,
                trueInterfaceId: line.target.cell,
              });
            }
          }
        });
        par.nodeList.push(resNode);
      });
      return par;
    },
    closeDrawer() {
      this.diaObj = {};
    },
    renderDia() {
      let customComName = '';
      if (this.diaObj) {
        customComName = this.diaObj.data?.nodeType;
      }
      const customCom = customComName
        ? coms[customComName]
        : createTextVNode('');
      return (
        <a-drawer
          class='comDra'
          title='详细信息'
          placement='right'
          width='350px'
          v-model={[this.diaVisible, 'visible']}
          onClose={this.closeDrawer}
        >
          <div>
            {this.diaObj ? (
              <customCom
                com={this.diaObj}
                funAll={this.funs}
                rules={this.rules}
                type={this.type}
                onRuleSearch={(val: string) => {
                  this.$emit('ruleSearch', val);
                }}
                onOk={(res: any) => {
                  this.setDiaVal(res);
                }}
              />
            ) : (
              ''
            )}
          </div>
        </a-drawer>
      );
    },
  },
  render(h: any) {
    return (
      <div class='vuiFlow'>
        <div class='flex drag'>
          <div class='module' id={`module${this.domNum}`}></div>
          <div class='graph' id={`graph${this.domNum}`}></div>
        </div>

        {this.renderDia()}
      </div>
    );
  },
});
export default installComponent(viFlow, 'viFlow');
