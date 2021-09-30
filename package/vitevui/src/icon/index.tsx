/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-21 14:06:07
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-21 14:32:05
 */
import { defineComponent } from 'vue';
import { installComponent } from '../util';

const props = {
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
  props,
  setup(props) {
    return () => {
      return props.svg ? (
        <svg class={['vite_ icon', props.class]} aria-hidden='true'>
          <use xlinkHref={`#${props.name}`}></use>
        </svg>
      ) : (
        <i class={[`vite_ ${props.name}`, props.class]}></i>
      );
    };
  },
});
export default installComponent(viIcon, 'viIcon');
