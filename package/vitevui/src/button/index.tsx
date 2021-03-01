/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-23 14:26:10
 */
import { defineComponent, App } from 'vue';
import { getButtonSlots } from '../util';
import prop from './buttonTypes';

const Button = defineComponent({
  name: 'viButton',
  props: prop(),
  setup() {},
  render() {
    // const { $slots } = this;
    // const className = () => {};
    return <button>{getButtonSlots(this)}</button>;
  },
});
Button.install = (app: App) => {
  app.component(Button.name, Button);
};
export default Button;
