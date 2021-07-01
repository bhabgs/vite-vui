<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-03-22 15:59:08
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-03-22 17:41:40
-->

# contextmenu(右键)

> 用户自定义右键 弹窗

<style>
.contextmenu_box{
  height: 500px;
}
</style>
<rightMenu />

```vue
<template>
  <div
    class="contextmenu_box"
    v-contextmenu="{ menus: [{ key: '1', name: '哈哈' }], callBack() {} }"
  >
    contextmenu_box 自定义右键菜单
  </div>
</template>
```
