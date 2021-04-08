/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-08 10:17:27
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-08 14:10:40
 */
import { reactive, Component, getCurrentInstance, watch } from 'vue';
import { baseObject } from '../types';

export interface tabItem {
  hasClosed?: boolean;
  disabled?: boolean;
  icon?: string;
  id: string;
  props?: baseObject;
  name: string;
  component?: Component;
  params?: baseObject;
}

export interface tabsProps {
  items: Array<tabItem>;
  activeVal?: any;
}

export const setCurrentDetail = (val: any) => {
  (window as any)['vite_tabspage_current_detail'] = val;
};

export const getTabCurrentDetail: (id?: string) => tabItem = (id) => {
  if (id) {
    const windowTabpage: Array<tabItem> =
      (window as any)['vite_tabspage'] || [];
    return windowTabpage.find((item) => item.id === id);
  }
  return (window as any)['vite_tabspage_current_detail'];
};

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
