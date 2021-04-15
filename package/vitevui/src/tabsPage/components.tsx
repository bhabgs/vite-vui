/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 11:45:48
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-13 13:38:41
 */
import {
  createCommentVNode,
  defineComponent,
  toRaw,
  Transition,
  TransitionGroup,
} from 'vue';
import { setStyleClass } from '../util';
import { tabsProps } from './tabsFunHook';

interface componentProps extends tabsProps {
  animate: string;
}

export default defineComponent({
  props: {
    items: {
      default: [],
      type: Array,
    },
    activeVal: String,
    animate: String,
  },
  setup(Prop, context) {
    const props = Prop as componentProps;
    const classes = setStyleClass(['tabs_components_box']);
    return () => (
      <div class={classes}>
        <TransitionGroup name={props.animate}>
          {props.items.map((item, key) => {
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
