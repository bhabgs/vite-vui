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
      resData: {
        value: '',
        valueType: '',
        name: '',
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

    const renderOperator = () => {
      return (
        <div>
          <div>
            运算符：
            <a-select
              v-model={[state.resData.value, 'value']}
              style='width: 120px'
            >
              <a-select-option value='add'>加</a-select-option>
              <a-select-option value='subtract'>减</a-select-option>
              <a-select-option value='multiply'>乘</a-select-option>
              <a-select-option value='divide'>除</a-select-option>
              <a-select-option value='mod'>取余</a-select-option>
              <a-select-option value='eq'>等于</a-select-option>
              <a-select-option value='ne'>不等于</a-select-option>
              <a-select-option value='gt'>大于</a-select-option>
              <a-select-option value='lt'>小于</a-select-option>
              <a-select-option value='gte'>大于等于</a-select-option>
              <a-select-option value='lte'>小于等于</a-select-option>
            </a-select>
          </div>
        </div>
      );
    };

    return () => (
      <div>
        {renderOperator()}
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
