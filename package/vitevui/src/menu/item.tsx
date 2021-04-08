/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-03-31 09:58:10
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-06 14:27:56
 */
import { computed, defineComponent, inject, ref, Ref, watch } from 'vue';
import { setStyleClass } from '../util';
import { MenuItemProps } from './group';

export default defineComponent({
  props: {
    icon: {
      default: '',
      type: String,
    },
    id: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    },
  },
  setup(Prop, context) {
    const props = (Prop as unknown) as MenuItemProps;
    const slots = context.slots;
    const def = slots.default;
    const meun_active_item = inject<Ref>('meun_active_item');

    const classes = computed(() =>
      setStyleClass([
        'menu_item',
        props.id === meun_active_item?.value ? 'menu_item_active' : '',
      ]),
    );

    return () => (
      <li
        class={[...classes.value]}
        onClick={() => {
          context.emit('customclick', props);
        }}
      >
        <span>
          {props.icon ? <i class={`${props.icon} vite_`}></i> : ''}
          {props.title}
        </span>
      </li>
    );
  },
});
