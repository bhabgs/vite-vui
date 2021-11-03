# layout 容器布局

> 用于布局的容器组件，方便快速搭建页面的基本结构：
>
> `<vi-layout >`: 容器
>
> `<vi-layout-header>`：顶栏容器
>
> `<vi-layout-sider>`：侧边栏容器
>
> `<vi-layout-main>`：主要区域容器
>
> `<vi-layout-footer>`：底栏容器

<style>
.default_vi{
  height: 400px;
  margin-bottom: 2rem;
  background:white;
}
.vite-layout-header{
  background: #7dbcea;
}
.vite-layout-sider {
 background: #3ba0e9;
}
.vite-layout-main{
  background: #108ee9;
}
.vite-layout-footer{
  background: #7dbcea;
}
</style>

## 基本用法

<vi-layout class='default_vi'>
  <vi-layout-header>header</vi-layout-header>
  <vi-layout-main>main</vi-layout-main>
  <vi-layout-footer>footer</vi-layout-footer>
</vi-layout>

<vi-layout class='default_vi'>
  <vi-layout-header>header</vi-layout-header>
  <vi-layout>
  <vi-layout-sider>sider</vi-layout-sider>
  <vi-layout-main>main</vi-layout-main>
  </vi-layout>
  <vi-layout-footer>footer</vi-layout-footer>
</vi-layout>

<vi-layout class='default_vi'>
  <vi-layout-sider>sider</vi-layout-sider>
  <vi-layout>
  <vi-layout-header>header</vi-layout-header>
  <vi-layout-main>main</vi-layout-main>
  <vi-layout-footer>footer</vi-layout-footer>
  </vi-layout>
</vi-layout>

## 代码演示

```tsx
export default {
  render() {
    return (
      <vi-layout>
        <vi-layout-header>header</vi-layout-header>
        <vi-layout>
          <vi-layout-sider>sider</vi-layout-sider>
          <vi-layout-main>main</vi-layout-main>
        </vi-layout>
        <vi-layout-footer>footer</vi-layout-footer>
      </vi-layout>
    );
  },
};
```

## API

### `<vi-layout-sider />`

> 侧边组件

<vi-layout class='default_vi'>
<!-- <vi-layout-sider>sider</vi-layout-sider> -->
<vi-layout-main>main</vi-layout-main>
</vi-layout>

| 参数  | 说明                           | 类型   | 可选值 | 默认值 |
| ----- | ------------------------------ | ------ | :----: | ------ |
| width | `<vi-layout-sider />` 宽度控制 | string |   -    | 200px  |

### `<vi-layout-header />`

> 头部组件

<vi-layout-header>header</vi-layout-header>

| 参数   | 说明                            | 类型   | 可选值 | 默认值 |
| ------ | ------------------------------- | ------ | :----: | ------ |
| height | `<vi-layout-header />` 高度控制 | string |   -    | 64px   |

### `<vi-layout-footer />`

> 底部组件

<vi-layout-footer>footer</vi-layout-footer>

| 参数   | 说明                            | 类型   | 可选值 | 默认值 |
| ------ | ------------------------------- | ------ | :----: | ------ |
| height | `<vi-layout-footer />` 高度控制 | string |   -    | 64px   |
