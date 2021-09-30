/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-03-31 09:58:10
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-05-06 09:22:01
 */
import { computed, defineComponent, inject, Ref } from 'vue';
import { setStyleClass } from '../util';

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
    badgeCount: {
      type: [String, Number],
    },
  },
  setup(props, context) {
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
        <viBadge count={props.badgeCount}>
          <span>
            {props.icon ? <viIcon name={props.icon} /> : ''}
            {props.title}
          </span>
        </viBadge>
      </li>
    );
  },
});
