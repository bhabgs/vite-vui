import {
  defineComponent,
  reactive,
  ref,
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
        dynamically: ref(false),
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

    const renderConstant = () => {
      return (
        <div>
          <div class='flex line'>
            <div class='name'>常量值：</div>
            <div class='flex1'>
              <a-input v-model={[state.resData.value, 'value']} />
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
          <div>
            常量类型：
            <a-select
              v-model={[state.resData.valueType, 'value']}
              style='width: 120px'
            >
              <a-select-option value='INT'>整数</a-select-option>
              <a-select-option value='FLT'>浮点数</a-select-option>
              <a-select-option value='BOO'>布尔</a-select-option>
              <a-select-option value='STR'>字符</a-select-option>
              <a-select-option value='REF'>变量</a-select-option>
            </a-select>
          </div>
        </div>
      );
    };

    return () => (
      <div>
        {renderConstant()}
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
