<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-03-03 11:22:11
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-03-22 18:17:57
-->

# 更新日志

## 2021-03-19

### 新特性

- 指令
  - 新添加 `vContextmenu` 指令，用于弹出右键自定义菜单

## 2021-03-22

### 修复一个 bug `vContextmenu`

- fix(逻辑): 修复自定义右键指令已知问题

1. 滚动屏幕后右键位置改变
2. 当右键菜单出现后，滚动屏幕 隐藏右键菜单

- layout 组件
  - feat(props 自定义): 更新 layout 组件自定义宽高
  1. 新增对 footer header 的高度控制
  2. 新增对 sider 组件的 宽度控制
