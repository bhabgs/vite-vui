/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-06 11:13:21
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-20 15:46:21
 */
import { defineComponent } from 'vue';
import { setStyleClass, installComponent } from '../util';
import tabs, { tabsProps, tabItem } from './tab';

export interface TabsProps extends tabsProps {
  value: string;
}

const viteTabs = defineComponent({
  name: 'viteTabs',
  components: {
    tabs,
  },
  props: {
    value: String,
    items: Array,
  },
  setup(Prop, context) {
    const props = Prop as TabsProps;
    const classes = setStyleClass(['tabs']);
    return () => (
      <div class={classes}>
        <tabs
          items={props.items}
          activeVal={props.value}
          onClose={(e: tabItem) => {
            // console.log(props.items.filter((item) => item.id !== e.id));
            const newArr = props.items.filter((item) => item.id !== e.id);
            context.emit('update:items', newArr);
          }}
          onSelect={(e: tabItem) => {
            context.emit('update:value', e.id);
          }}
        />
      </div>
    );
  },
});

export default installComponent(viteTabs, 'viteTabs');
