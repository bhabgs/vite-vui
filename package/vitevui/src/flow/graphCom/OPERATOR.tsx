import {
  defineComponent,
  reactive,
  onMounted,
  getCurrentInstance,
  watch,
} from 'vue';
import customUtil from './util';

export default defineComponent({
  props: ['com', 'type'],
  setup(props: any, context) {
    const state = reactive({
      resData: {
        value: '',
        valueType: '',
        name: '',
        dynamically: false,
      },
    });
    const { proxy }: any = getCurrentInstance();
    watch(props, () => {
      customUtil.resetObj(state.resData);
      state.resData = { ...state.resData, ...props.com.data };
    });
    onMounted(() => {
      customUtil.resetObj(state.resData);
      state.resData = { ...state.resData, ...props.com.data };
    });

    const handleOk = () => {
      context.emit('ok', state.resData);
    };

    const renderOperator = () => {
      return (
        <div>
          <div class='flex line'>
            <div class='name'>运算符：</div>
            <div class='flex1'>
              <a-select
                v-model={[state.resData.value, 'value']}
                style='width: 120px'
              >
                <a-select-option value='+'>加</a-select-option>
                <a-select-option value='-'>减</a-select-option>
                <a-select-option value='*'>乘</a-select-option>
                <a-select-option value='/'>除</a-select-option>
                <a-select-option value='%'>取余</a-select-option>
                <a-select-option value='=='>等于</a-select-option>
                <a-select-option value='!='>不等于</a-select-option>
                <a-select-option value='>'>大于</a-select-option>
                <a-select-option value='<'>小于</a-select-option>
                <a-select-option value='>='>大于等于</a-select-option>
                <a-select-option value='<='>小于等于</a-select-option>
              </a-select>
            </div>
            {props.type === 'template' ? (
              <div class='option'>
                <a-checkbox v-model={[state.resData.dynamically, 'checked']}>
                  可配
                </a-checkbox>
              </div>
            ) : (
              ''
            )}
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
