import {
  defineComponent,
  reactive,
  onMounted,
  getCurrentInstance,
  watch,
  ref,
} from 'vue';

import customUtil from './util';

export default defineComponent({
  props: ['com', 'funAll', 'type'],
  setup(props: any, context) {
    const state = reactive({
      funOption: [] as any[],
      resData: {
        value: '',
        valueType: '',
        name: '',
        dynamically: false,
        paramList: [],
        funcName: '',
        pattern: '',
        resField: '', // 函数返回字段
      },
    });
    const { proxy }: any = getCurrentInstance();

    const getOptions = () => {
      state.funOption = props.funAll;
    };

    onMounted(() => {
      getOptions();
      customUtil.resetObj(state.resData);
      state.resData = { ...state.resData, ...props.com.data };
    });

    const handleSearch = (val: string) => {
      state.funOption = [];
      props.funAll.forEach((ele: any) => {
        if (
          (ele.name && ele.name.indexOf(val) >= 0) ||
          ele.funcName.indexOf(val) >= 0
        ) {
          state.funOption.push(ele);
        }
      });
    };
    const handleChange = (val: string) => {
      props.funAll.forEach((element: any) => {
        if (element.funcName === val) {
          state.resData.name = element.name;
          state.resData.funcName = element.funcName;
          state.resData.pattern = element.pattern;
          state.resData.paramList = element.paramDefineList || [];
          state.resData.paramList.forEach((par: any) => {
            par.paramCode = par.defineCode;
          });
        }
      });
    };
    const handleOk = () => {
      state.resData.paramList.forEach((ele: any) => {
        if (ele.dynamically) {
          state.resData.dynamically = true;
        }
      });
      context.emit('ok', state.resData);
    };
    const renderFun = () => {
      return (
        <div>
          输入函数名或code：
          <a-select
            show-search
            v-model={[state.resData.funcName, 'value']}
            placeholder='input search text'
            notFoundContent={null}
            filter-option={false}
            style='width: 200px'
            onChange={handleChange}
            onSearch={handleSearch}
          >
            {state.funOption.map((ele: any) => {
              return (
                <a-select-option key={ele.funcName}>
                  {ele.name}:{ele.funcName}
                </a-select-option>
              );
            })}
          </a-select>
          {state.resData.paramList.map((ele: any) => {
            if (ele.type === 'select') {
              const fun = props.funAll.find((func: any) => {
                return func.funcName === state.resData.funcName;
              });
              const param = fun?.paramDefineList?.find((par: any) => {
                return par.defineCode === ele.defineCode;
              });
              if (param) {
                ele.option = param.option;
              }
            }
            return (
              <div class='flex line'>
                <div class='name'>{ele.name}：</div>
                <div class='flex1'>
                  {ele.type === 'select' ? (
                    <a-select
                      v-model={[ele.value, 'value']}
                      allowClear={true}
                      style='width: 120px'
                    >
                      {ele.option.map((option: any) => {
                        return (
                          <a-select-option value={option.id}>
                            {option.name}
                          </a-select-option>
                        );
                      })}
                    </a-select>
                  ) : (
                    <a-input v-model={[ele.value, 'value']} />
                  )}
                </div>
                {props.type === 'template' ? (
                  <div class='option'>
                    <a-checkbox v-model={[ele.dynamically, 'checked']}>
                      可配
                    </a-checkbox>
                  </div>
                ) : (
                  ''
                )}
              </div>
            );
          })}
          <div class='flex line'>
            <div class='name'>返回字段：</div>
            <div class='flex1'>
              <a-input v-model={[state.resData.resField, 'value']} />
            </div>
          </div>
          <div class='flex line'>
            <div class='name'>返回类型：</div>
            <div class='flex1'>
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
        </div>
      );
    };

    return () => (
      <div>
        {renderFun()}
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
