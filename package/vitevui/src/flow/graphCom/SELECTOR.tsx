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
        selectorParamList: [
          {
            leftOp: '',
            leftOpDynamically: false,
            leftValue: '',
            leftValueDynamically: false,
            leftValueType: '',
          },
        ] as any[],
      },
    });
    const { proxy }: any = getCurrentInstance();
    watch(props, () => {
      state.resData.selectorParamList = props.com.data.data
        .selectorParamList ?? [{}];
    });
    onMounted(() => {
      state.resData.selectorParamList = props.com.data.data
        .selectorParamList ?? [{}];
    });

    const handleOk = () => {
      const obj = state.resData.selectorParamList[0];
      if (obj.leftOpDynamically || obj.leftValueDynamically) {
        obj.dynamically = true;
      }
      context.emit('ok', state.resData);
    };

    const renderConstant = () => {
      return (
        <div>
          <div class='flex line'>
            <div class='name'>判断：</div>
            <div class='flex1'>
              <a-select
                v-model={[state.resData.selectorParamList[0].leftOp, 'value']}
                style='width: 120px'
              >
                <a-select-option value='>'>大于</a-select-option>
                <a-select-option value='>='>大于等于</a-select-option>
                <a-select-option value='=='>等于</a-select-option>
                <a-select-option value='<'>小于</a-select-option>
                <a-select-option value='<='>小于等于</a-select-option>
              </a-select>
            </div>
            {props.type === 'template' ? (
              <div class='option'>
                <a-checkbox
                  v-model={[
                    state.resData.selectorParamList[0].leftOpDynamically,
                    'checked',
                  ]}
                >
                  可配
                </a-checkbox>
              </div>
            ) : (
              ''
            )}
          </div>
          <div class='flex line'>
            <div class='name'>判断值：</div>
            <div class='flex1'>
              <a-input
                v-model={[
                  state.resData.selectorParamList[0].leftValue,
                  'value',
                ]}
              />
            </div>
            {props.type === 'template' ? (
              <div class='option'>
                <a-checkbox
                  v-model={[
                    state.resData.selectorParamList[0].leftValueDynamically,
                    'checked',
                  ]}
                >
                  可配
                </a-checkbox>
              </div>
            ) : (
              ''
            )}
          </div>
          <div>
            值类型：
            <a-select
              v-model={[
                state.resData.selectorParamList[0].leftValueType,
                'value',
              ]}
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
