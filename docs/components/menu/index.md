<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-03-31 15:57:10
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-06 09:05:42
-->

# Menu 菜单栏

> 菜单栏减少用户对组件的操作，数据驱动。

## 使用方式

```ts
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  components: {},
  created() {},
  render() {
    const props = reactive({
      collapsed: false,
    });
    return (
      <viMenuBox
        menuTitle={'润滑管理'}
        width={'14.29rem'}
        menus={[
          {
            title: '111111',
            id: '1',
            icon: 'vite_vehivles',
            shortname: ‘’， // 折叠后简称
          },
          {
            title: '22222222',
            id: '2',
            child: [
              {
                title: '222222-111111',
                id: '2-1',
              },
              {
                title: '222222-222222',
                id: '2-2',
                icon: 'vite_vehivles',
              },
            ],
          },
          {
            title: '3333333',
            id: '3',
          },
        ]}
        collapsed={props.collapsed}
        onItemclick={(e: any) => {
          console.log(e);
        }}
        onCollapsed={(e: boolean) => {
          console.log(e);
        }}
      />
    );
  },
});
```

## 参数

```ts
{
  width: {
      type: String,
      default() {
        return '14.29rem';
      },
    },
    menus: {
      type: Array,
      default() {
        return [] as Array<MenusItem>;
      },
    },
    theme: {
      type: String,
      default: 'light',
    },
    defaultActiveId: {
      type: String,
      default: '3',
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
    collapsedwidth: {
      type: String,
      default: '80px',
    },
    menuTitle: {
      type: String,
      default: '',
    },
}
```
