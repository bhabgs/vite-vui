/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 11:43:20
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-21 14:36:34
 */
import { defineComponent, withModifiers } from 'vue';
import { setStyleClass } from '../util';
import hook, { tabsProps } from './tabsFunHook';
export default defineComponent({
  props: {
    items: {
      default: [],
      type: Array,
    },
    activeVal: String,
  },
  setup(props) {
    const { open, remove } = hook();
    const classes = setStyleClass(['tab_box']);
    return () => (
      <div class={classes}>
        <div class={setStyleClass(['items_box'])}>
          {props.items.map((item: any) => {
            const itemClass = setStyleClass([
              'tabs_item',
              item.disabled ? 'disabled' : '',
              item.hasClosed ? 'has_close' : '',
              props.activeVal === item.id ? 'tabs_item_active' : '',
            ]);
            return (
              <div
                class={itemClass}
                title={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  open(item.id);
                }}
              >
                <span>
                  <viIcon name={item.icon} />
                  {item.name}
                </span>
                {item.hasClosed ? (
                  <vi-icon
                    name={'vite_close'}
                    onClick={withModifiers(() => {
                      remove(item.id);
                    }, ['stop'])}
                  />
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
