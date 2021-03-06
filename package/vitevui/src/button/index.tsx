/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-26 09:50:20
 */
import { defineComponent } from 'vue';
import { setStyleClass, installComponent, getSlots } from '../util/index';

const buttonProps = {
  type: {
    type: String,
    default: 'default',
  },
  accept: String,
  radius: {
    type: Boolean,
    default: true,
  },
  multiple: Boolean,
  disabled: {
    type: Boolean,
    default: false,
  },
};

const Button = defineComponent({
  name: 'viButton',
  props: buttonProps,
  setup(props, context) {
    const classes = setStyleClass([
      'button',
      'button_' + props.type,
      props.radius ? 'button_radius' : '',
    ]);
    const slots = getSlots(context);
    return () => (
      <button class={classes}>
        {props.type === 'upload' ? (
          <>
            <div class={setStyleClass(['button_mask'])}>
              {!slots.uploadTitle ? (
                <viIcon name='vite_add-select' />
              ) : (
                <slots.uploadTitle />
              )}
            </div>
            <input
              // class={classes}
              type='file'
              accept={props.accept}
              multiple={props.multiple}
              disabled={props.disabled}
            />
          </>
        ) : (
          <slots.def />
        )}
      </button>
    );
  },
});

export default installComponent(Button, 'viButton');
