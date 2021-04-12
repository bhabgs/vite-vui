/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 11:43:20
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-09 14:34:02
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
  setup(Prop, context) {
    const props = Prop as tabsProps;
    const { mitt, open, remove } = hook();
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
                title={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  open(item.id);
                }}
              >
                <span>
                  <i class={[item.icon, 'vite_']}></i>
                  {item.name}
                </span>
                {item.hasClosed ? (
                  <i
                    class='vite_close vite_'
                    onClick={withModifiers(
                      (e: any) => {
                        remove([item.id]);
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
