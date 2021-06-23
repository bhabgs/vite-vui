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
            逻辑符：
            <a-select
              v-model={[state.resData.value, 'value']}
              style='width: 120px'
            >
              <a-select-option value='&&'>并且</a-select-option>
              <a-select-option value='||'>或者</a-select-option>
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
