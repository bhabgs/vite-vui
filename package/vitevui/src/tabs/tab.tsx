/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 11:43:20
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-07 09:31:17
 */
import { defineComponent, Component, withModifiers } from 'vue';
import { setStyleClass } from '../util';
export interface tabItem {
  hasClosed?: boolean;
  disabled?: boolean;
  icon?: string;
  id?: string;
  name: string;
  component?: Component;
}

export interface tabsProps {
  items: Array<tabItem>;
  activeVal?: any;
}

export default defineComponent({
  props: {
    items: {
      default: [],
      type: Array,
    },
    activeVal: String,
  },
  setup(Prop, context) {
    const props = Prop as tabsProps;
    const classes = setStyleClass(['tab_box']);
    return () => (
      <div class={classes}>
        <div class={setStyleClass(['items_box'])}>
          {props.items.map((item) => {
            const itemClass = setStyleClass([
              'tabs_item',
              item.disabled ? 'disabled' : '',
              item.hasClosed ? 'has_close' : '',
              props.activeVal === item.id ? 'tabs_item_active' : '',
            ]);
            return (
              <div
                class={itemClass}
                onClick={(e) => {
                  e.preventDefault();
                  context.emit('select', item);
                }}
              >
                {item.name}
                {item.hasClosed ? (
                  <i
                    class='vite_close vite_'
                    onClick={withModifiers(
                      (e: any) => {
                        // 关闭
                        context.emit('close', item);
                      },
                      ['stop'],
                    )}
                  ></i>
                ) : (
                  ''
                )}
              </div>
            );
          })}
        </div>
        <div class={setStyleClass(['right_box'])}></div>
      </div>
    );
  },
});
