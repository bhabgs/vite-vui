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
