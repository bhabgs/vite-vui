/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-03-30 15:27:25
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-03-31 15:42:33
 */
import { defineComponent } from 'vue';
import { setStyleClass } from '@/util';

export interface MenuItemProps {
  icon: string;
  id: string;
  title: string;
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
  },
  setup(Prop, context) {
    const props = (Prop as unknown) as MenuItemProps;

    const slots = context.slots;
    const def = slots.default;
    const classes = setStyleClass(['menu_group']);

    return () => (
      <ul class={classes}>
        <div class={setStyleClass(['menu_group_title'])}>{props.title}</div>
        {<def />}
      </ul>
    );
  },
});
