<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-08 13:25:10
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-08 14:30:01
-->

# tabsPage

> 该组件主要为了通用现有 ieam 项目的 tabs 页

## 使用方法

> 使用该组件不需要传递任何数据 数据通信均采用内置 `mitt` 协议

```ts
import { defineComponent, getCurrentInstance } from 'vue';

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()!;
    const mitt = proxy!.$mitt;
    return () => <viteTabsPage />;
  },
});
```

> 为了能在项目内的 vue 原型上使用 `$mitt`, 需要进行如下配置

```ts
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $mitt: typeof Emitter;
  }
}
```

## `mitt` 与 tabsPage 通讯方式

1. `vite-tabspage-add` -> 添加 page 页面

   > 使用时请注意打开的 page 参数要复合 tabsPage 组件要求

   ```ts
   import { tabItem } from 'vitevui/lib/types/tabsPage/tabsHooks';
   interface tabItem {
     hasClosed?: boolean;
     disabled?: boolean;
     icon?: string;
     id: string;
     props?: baseObject;
     name: string;
     component?: Component;
     params?: baseObject;
   }
   const addPage: tabItem = {} as tabItem;

   mitt.emit('vite-tabspage-add', addPage);
   ```

2. `vite-tabspage-remove` -> 删除某个或多个 page 页面

   > 当前页面调用该方法后如未传入 ids 那么默认关闭当前页面

   ```ts
   mitt.emit('vite-tabspage-remove');
   ```

   > 关闭指定页面或多个页面

   ```ts
   mitt.emit('vite-tabspage-remove', ['pageid-1', 'pageid-2', ...ids]);
   ```

3. `vite-tabspage-open` -> 打开指定页面

   ```ts
   mitt.emit('vite-tabspage-open', pageId);
   ```

4. `vite-tabspage-clear` -> 清空 tabspage

   ```ts
   mitt.emit('vite-tabspage-clear');
   ```

## 其他方法

1. 获取 page 信息 `getTabCurrentDetail`;

   > 默认获取当前页面信息，传入 id 后可根据 page id 查询页面

   ```ts
   import { defineComponent } from 'vue';
   import { getTabCurrentDetail } from 'vitevui/lib/types/tabsPage/tabsHooks';
   export default defineComponent({
     setup() {

       return () => (<div>
        <button onClick={() => {
          console.log(getTabCurrentDetail(ids?: string))
        }}>获取当前页面数据</button>
       <div/>);
     },
   });
   ```
