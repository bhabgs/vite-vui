/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 11:45:48
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-20 15:49:23
 */
import {
  createCommentVNode,
  defineComponent,
  toRaw,
  TransitionGroup,
} from 'vue';
import { setStyleClass } from '../util';
import { tabsProps } from './tabsFunHook';

interface componentProps extends tabsProps {
  animate: string;
}

const props = {
  items: {
    default: [],
    type: Array,
  },
  activeVal: String,
  animate: String,
};

export default defineComponent({
  props,
  setup(props, context) {
    const classes = setStyleClass(['tabs_components_box']);
    return () => (
      <div class={classes}>
        <TransitionGroup name={props.animate}>
          {props.items.map((item: any, key) => {
            const com = toRaw(item.component || createCommentVNode(''));
            const params = item.params || {};

            return (
              <com
                {...params}
                key={key}
                class={[
                  setStyleClass([
                    'component_item',
                    item.id === props.activeVal ? 'component_item_active' : '',
                  ]),
                ]}
                // vShow={item.id === props.activeVal}
              />
            );
          })}
        </TransitionGroup>
      </div>
    );
  },
});
