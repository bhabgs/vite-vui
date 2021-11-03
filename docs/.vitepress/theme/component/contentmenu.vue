<template>
  <div
    class="contextmenu_box"
    v-contextmenu="{ menus: [{ key: '1', name: '哈哈' }], callBack() {} }"
  >
    contextmenu_box 自定义右键菜单
  </div>
</template>
<style lang="less">
  .contextmenu_box {
    height: 500px;
    background-color: #108ee9;
    text-align: center;
    line-height: 500px;
    color: white;
    font-size: 3rem;
  }
</style>
