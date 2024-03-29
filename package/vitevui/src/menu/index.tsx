/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-20 15:43:18
 */
import { defineComponent, provide, ref, readonly, computed, inject } from 'vue';
import { setStyleClass, installComponent } from '../util';
import menusGroup, { MenuItemProps } from './group';
import menusItem from './item';

export interface MenusItem {
  title: string;
  id: string;
  icon?: string;
  badgeCount: string | number;
  child: Array<MenusItem>;
  shortname?: string;
}

export interface SiderProps {
  width: string;
  menus: Array<MenusItem>;
  theme?: 'dark' | 'light';
  defaultActiveId?: string;
  collapsed?: boolean;
  collapsedwidth?: string;
  menuTitle?: string;
  isSider?: Boolean;
}

const side = defineComponent({
  name: 'viMenuBox',
  components: { menusGroup, menusItem },
  props: {
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
    isSider: {
      type: Boolean,
      default: true,
    },
  },
  setup(Prop, Context) {
    const props = Prop as unknown as SiderProps;
    const collapsed = ref(props.collapsed);
    const collapsedActiveIng = ref(false);
    const siderBoxStyleClass = computed(() => [
      ...setStyleClass([
        'menu_box',
        `menu_${props.theme || 'light'}`,
        collapsedActiveIng.value ? 'menu_collapsed_active' : '',
        collapsed.value ? 'menu_collapsed' : 'menu_zhankai',
      ]),
      props.isSider ? 'vite-layout-sider' : '',
    ]);
    if (props.isSider) {
      const provideSider = inject<Function>('sider')!;
      provideSider();
    }
    // 当 provide 是为了告诉item是否选中
    const defaultActiveId = ref(props.defaultActiveId);
    provide('meun_active_item', readonly(defaultActiveId));
    const renderItem = (item: Array<MenusItem>) => {
      return item.map((menuItem) => {
        if (menuItem.child?.length > 0) {
          return renderGroup(menuItem);
        }
        return (
          <menusItem
            {...menuItem}
            collapsed={collapsed.value}
            onCustomclick={(e: MenuItemProps) => {
              defaultActiveId.value = e.id;
              Context.emit('itemclick', e);
            }}
          />
        );
      });
    };

    const renderGroup = (item: MenusItem) => {
      const groupProp = {
        key: item.id,
        icon: item.icon,
        title: item.title,
        badgeCount: item.badgeCount,
      };
      return (
        <menusGroup
          {...groupProp}
          child={item.child}
          collapsed={collapsed.value}
        >
          {renderItem(item.child)}
        </menusGroup>
      );
    };

    // 折叠逻辑和样式
    const iconClass = computed(() =>
      collapsed.value ? 'vite_caidanyou' : 'vite_caidan',
    );
    const style = computed(() => [
      collapsed.value
        ? { width: props.collapsedwidth }
        : { width: props.width },
    ]);

    return () => (
      <ul class={siderBoxStyleClass.value} style={style.value}>
        <div class={[setStyleClass(['menu_title'])]}>
          <div
            class={[setStyleClass(['menu_title_content'])]}
            v-show={!collapsed.value}
          >
            {props.menuTitle}
          </div>
          <button
            onClick={() => {
              collapsed.value = !collapsed.value;
              collapsedActiveIng.value = true;
              Context.emit('collapsed', collapsed.value);
              setTimeout(() => {
                collapsedActiveIng.value = false;
              }, 300);
            }}
          >
            <viIcon name={iconClass.value} />
          </button>
        </div>
        {renderItem(props.menus)}
      </ul>
    );
  },
});

export default installComponent(side, 'viMenuBox');
