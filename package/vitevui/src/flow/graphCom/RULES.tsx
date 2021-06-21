import {
  defineComponent,
  reactive,
  onMounted,
  getCurrentInstance,
  watch,
} from 'vue';
import customUtil from './util';

export default defineComponent({
  props: ['com'],
  setup(props: any, context) {
    const state = reactive({
      ruleOption: [],
      resData: {
        value: '',
        valueType: '',
        name: '',
        rulesCode: '',
      },
    });
    const { proxy }: any = getCurrentInstance();
    watch(props, () => {
      customUtil.resetObj(state.resData);
      state.resData = { ...state.resData, ...props.com.data.data };
    });
    onMounted(() => {
      customUtil.resetObj(state.resData);
      state.resData = { ...state.resData, ...props.com.data.data };
    });

    const handleOk = () => {
      context.emit('ok', state.resData);
    };

    const handleRuleSearch = async (val: string) => {
      const par: any = { searchTag: val };
      const res = await proxy.$axios.post('/fsmEdge/v1/componentGraph/search', {
        recordType: 0,
        pageNum: 1,
        pageSize: 1000,
        ...par,
      });
      state.ruleOption = res.data.list;
    };
    const handleRuleChange = (val: string) => {
      state.ruleOption.forEach((element: any) => {
        if (element.recordCode === val) {
          state.resData.name = element.name;
          state.resData.rulesCode = element.recordCode;
        }
      });
    };
    const renderRules = () => {
      return (
        <div>
          输入规则名称：
          <a-select
            show-search
            v-model={[state.resData.rulesCode, 'value']}
            placeholder='input search text'
            notFoundContent={null}
            filter-option={false}
            style='width: 200px'
            onChange={(val: string) => {
              handleRuleChange(val);
            }}
            onSearch={(val: string) => {
              handleRuleSearch(val);
            }}
          >
            {state.ruleOption.map((ele: any) => {
              return (
                <a-select-option key={ele.recordCode}>
                  {ele.name}:{ele.recordCode}
                </a-select-option>
              );
            })}
          </a-select>
        </div>
      );
    };

    return () => (
      <div>
        {renderRules()}
        <div>
          <div class='buttons'>
            <a-button
              type='primary'
              onClick={() => {
                handleOk();
              }}
            >
              确定
            </a-button>
          </div>
        </div>
      </div>
    );
  },
});
