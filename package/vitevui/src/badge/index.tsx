import { defineComponent } from 'vue';
import { setStyleClass, installComponent, getSlots } from '../util/index';

const props = {
  count: {
    type: [String, Number],
  },
};

const Badge = defineComponent({
  name: 'viBadge',
  props: props,
  setup(props, context) {
    const slots = getSlots(context);

    return () =>
      props.count ? (
        <span class={setStyleClass(['badge'])}>
          <slots.def />
          <div class={setStyleClass(['badge-count'])}>
            <div class={setStyleClass(['badge-number'])}>{props.count}</div>
          </div>
        </span>
      ) : (
        <slots.def />
      );
  },
});

export default installComponent(Badge, 'viBadge');
