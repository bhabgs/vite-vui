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
        triggerType: '', // 触发器相关
        triggerContext: '',
        startTime: '',
        period: '',
        actionCodeList: [] as any[],
        eventCodeList: [] as any[],
        onDataItems: [] as any[], // 触发器结束
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

    const renderTrigger = () => {
      state.resData.triggerType = state.resData.triggerType || '2';
      const renderElement = () => {
        let dom: undefined | JSX.Element;
        if (state.resData.triggerType === '2') {
          dom = (
            <div class='triggerItem'>
              <div class='flex'>
                <div class='name'>首次延时(秒)：</div>
                <div class='flex1'>
                  <a-input
                    v-model={[state.resData.startTime, 'value']}
                  ></a-input>
                </div>
              </div>
              <div class='flex'>
                <div class='name'>周期(秒)：</div>
                <div class='flex1'>
                  <a-input v-model={[state.resData.period, 'value']}></a-input>
                </div>
              </div>
            </div>
          );
        } else if (state.resData.triggerType === '1') {
          dom = (
            <div>
              {state.resData.onDataItems.map((ele: any, index: number) => {
                return (
                  <div class='triggerItem'>
                    <div class=' flex ele'>
                      <div class='name'></div>
                      <div class='name'>设备编号(tc)：</div>
                      <div class='flex1'>
                        <a-input v-model={[ele.tc, 'value']}></a-input>
                      </div>
                    </div>
                    <div class=' flex ele'>
                      <div class='name'>属性编码(mc)：</div>
                      <div class='flex1'>
                        <a-input v-model={[ele.mc, 'value']}></a-input>
                      </div>
                      <div>
                        <a-button
                          type='danger'
                          onClick={() => {
                            state.resData.onDataItems.splice(index, 1);
                          }}
                        >
                          删除
                        </a-button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <a-button
                class='buttons'
                onClick={() => {
                  state.resData.onDataItems.push({});
                }}
              >
                添加
              </a-button>
            </div>
          );
        } else if (state.resData.triggerType === '3') {
          dom = (
            <div>
              {state.resData.actionCodeList.map((ele: any, index: number) => {
                return (
                  <div class='triggerItem'>
                    <div class=' flex ele'>
                      <div class='name'>动作：</div>
                      <div class='flex1'>
                        <a-input
                          v-model={[
                            state.resData.actionCodeList[index],
                            'value',
                          ]}
                        ></a-input>
                      </div>
                      <div>
                        <a-button
                          type='danger'
                          onClick={() => {
                            state.resData.actionCodeList.splice(index, 1);
                          }}
                        >
                          删除
                        </a-button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <a-button
                class='buttons'
                onClick={() => {
                  state.resData.actionCodeList.push('');
                }}
              >
                添加
              </a-button>
            </div>
          );
        } else if (state.resData.triggerType === '4') {
          dom = (
            <div>
              {state.resData.eventCodeList.map((ele: any, index: number) => {
                return (
                  <div class='triggerItem'>
                    <div class=' flex ele'>
                      <div class='name'>事件：</div>
                      <div class='flex1'>
                        <a-input
                          v-model={[
                            state.resData.eventCodeList[index],
                            'value',
                          ]}
                        ></a-input>
                      </div>
                      <div>
                        <a-button
                          type='danger'
                          onClick={() => {
                            state.resData.eventCodeList.splice(index, 1);
                          }}
                        >
                          删除
                        </a-button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <a-button
                class='buttons'
                onClick={() => {
                  state.resData.eventCodeList.push('');
                }}
              >
                添加
              </a-button>
            </div>
          );
        }
        return dom;
      };
      return (
        <div>
          <div>
            类型：
            <a-radio-group v-model={[state.resData.triggerType, 'value']}>
              <a-radio-button value='2'>时间</a-radio-button>
              <a-radio-button value='4'>事件</a-radio-button>
              <a-radio-button value='3'>动作</a-radio-button>
              <a-radio-button value='1'>信号</a-radio-button>
            </a-radio-group>
          </div>
          {renderElement()}
          <a-textarea
            v-model={[state.resData.triggerContext, 'value']}
          ></a-textarea>
        </div>
      );
    };

    return () => (
      <div>
        {renderTrigger()}
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
