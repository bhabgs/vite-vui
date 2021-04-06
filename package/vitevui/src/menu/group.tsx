/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-03-30 15:27:25
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-06 10:37:17
 */
import { computed, inject, defineComponent, ref, Ref } from 'vue';
import { setStyleClass } from '@/util';
import { MenusItem } from '.';

export interface MenuItemProps {
  icon: string;
  id: string;
  title: string;
  child: Array<MenusItem>;
}

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
    child: {
      default: [],
      type: Array,
    },
  },
  setup(Prop, context) {
    const slots = context.slots;
    const def = slots.default;

    const props = (Prop as unknown) as MenuItemProps;
    const meun_active_item = inject<Ref>('meun_active_item');
    const close = ref(false);
    const classesChild = setStyleClass(['menu_group']);

    const childIds: (list: Array<MenusItem>) => Array<string> = (list) => {
      const ids: Array<string> = [];
      for (let i of list) {
        if (i.child && i.child.length > 0) {
          ids.concat([], childIds(i.child));
        } else {
          ids.push(i.id);
        }
      }
      return ids;
    };

    const activeInChild = computed(() =>
      childIds(props.child).find((item) => item === meun_active_item?.value),
    );

    const classes = computed(() =>
      setStyleClass([
        'menu_group',
        close.value ? 'menu_group_close' : '',
        activeInChild.value ? 'menu_active_in_child' : '',
      ]),
    );

    return () => (
      <ul class={classes.value}>
        <div
          class={setStyleClass(['menu_group_title'])}
          onClick={() => {
            close.value = !close.value;
          }}
        >
          <span>
            {props.icon ? <i class={`${props.icon} vite_`}></i> : ''}
            {props.title}
          </span>
          <i class={`vite_arrow-down vite_`}></i>
        </div>
        <ul class={classesChild}>{<def />}</ul>
      </ul>
    );
  },
});
