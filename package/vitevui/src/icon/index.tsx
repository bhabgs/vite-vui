/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-16 15:53:51
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-20 15:30:25
 */
import { defineComponent } from 'vue';
import { installComponent } from '../util';

const iconProps = {
  name: {
    type: String,
    default: '',
  },
  class: String,
  svg: {
    type: Boolean,
    default: false,
  },
};

const viIcon = defineComponent({
  name: 'viIcon',
  props: iconProps,
  emits: ['click'],
  setup(props, context) {
    // withModifiers(() => {
    //}, ['stop'])
    const emitClick = () => {
      context.emit('click');
    };
    return () => (
      <>
        {props.svg ? (
          <svg
            class={['vite_ icon', props.class]}
            aria-hidden='true'
            onClick={() => {
              emitClick();
            }}
          >
            <use xlinkHref={`#${props.name}`}></use>
          </svg>
        ) : (
          <i
            onClick={() => {
              emitClick();
            }}
            class={[`vite_ ${props.name}`, props.class]}
          ></i>
        )}
      </>
    );
  },
});

export default installComponent(viIcon, 'viIcon');
