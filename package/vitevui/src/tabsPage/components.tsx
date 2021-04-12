/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 11:45:48
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-09 11:10:10
 */
import { createCommentVNode, defineComponent, toRaw, Transition } from 'vue';
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
  },
  setup(Prop, context) {
    const props = Prop as componentProps;
    const classes = setStyleClass(['tabs_components_box']);
    return () => (
      <div class={classes}>
        {props.items.map((item) => {
          const com = toRaw(item.component || createCommentVNode(''));
          const params = item.params || {};
          return (
            <Transition name={props.animate}>
              <com
                {...params}
                class={[setStyleClass(['component_item'])]}
                vShow={item.id === props.activeVal}
              />
            </Transition>
          );
        })}
      </div>
    );
  },
});
