/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-06 11:53:25
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-22 09:34:16
 */
import { PropType } from 'vue';
import { tuple } from '../util';

const ButtonTypes = tuple(
  'default',
  'primary',
  'ghost',
  'dashed',
  'danger',
  'link',
);

export type ButtonType = typeof ButtonTypes[number];
const ButtonShapes = tuple('circle', 'circle-outline', 'round');
export type ButtonShape = typeof ButtonShapes[number];
const ButtonSizes = tuple('large', 'default', 'small');
export type ButtonSize = typeof ButtonSizes[number];

const buttonProps = () => ({
  size: {
    type: String as PropType<ButtonSize>,
    default: ButtonSizes[1],
  },
  loading: Boolean,
  icon: String,
  shapes: {
    type: String as PropType<ButtonSize>,
    default: '',
  },
  type: {
    type: String as PropType<ButtonType>,
    default: ButtonTypes[0],
  },
});

export default buttonProps;
