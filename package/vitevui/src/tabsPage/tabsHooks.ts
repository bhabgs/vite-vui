/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-08 10:17:27
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-08 14:10:40
 */
import { reactive, Component, getCurrentInstance, watch } from 'vue';
import { tabItem, tabsProps } from './tabsFunHook';

export default function () {
  const { proxy } = getCurrentInstance()!;
  const mitt = proxy!.$mitt;

  const tabsData = reactive<{
    active: string;
    list: Array<tabItem>;
  }>({
    active: '',
    list: [],
  });

  watch(
    () => tabsData.list,
    () => {
      (window as any)['vite_tabspage'] = tabsData.list;
    },
  );
  return {
    tabsData,
    mitt,
  };
}
