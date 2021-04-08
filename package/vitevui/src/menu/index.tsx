/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:44:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-06 14:27:47
 */
import { App, defineComponent, provide, ref, readonly, computed } from 'vue';
import { setStyleClass } from '../util';
import menusGroup, { MenuItemProps } from './group';
import menusItem from './item';

export interface MenusItem {
  title: string;
  id: string;
  icon?: string;
  child: Array<MenusItem>;
}

export interface SiderProps {
  width: string;
  menus: Array<MenusItem>;
  theme?: 'dark' | 'light';
  defaultActiveId?: string;
  collapsed?: boolean;
  collapsedwidth?: string;
  menuTitle?: string;
}

const side = defineComponent({
  name: 'menuBox',
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
  },
  setup(Prop, Context) {
    const props = Prop as SiderProps;
    const collapsed = ref(props.collapsed);

    const siderBoxStyleClass = computed(() =>
      setStyleClass([
        'menu_box',
        `menu_${props.theme || 'light'}`,
        collapsed.value ? 'menu_collapsed' : '',
      ]),
    );

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
      };
      return (
        <menusGroup {...groupProp} child={item.child}>
          {renderItem(item.child)}
        </menusGroup>
      );
    };

    // 折叠逻辑和样式
    const iconClass = computed(() => [
      collapsed.value ? 'vite_shouqi' : 'vite_zhankai',
      'vite_',
    ]);
    const style = computed(() =>
      collapsed.value
        ? { width: props.collapsedwidth }
        : { width: props.width },
    );

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
              Context.emit('collapsed', collapsed.value);
            }}
          >
            <i class={iconClass.value}></i>
          </button>
        </div>
        {renderItem(props.menus)}
      </ul>
    );
  },
});

side.install = (app: App) => {
  app.component(side.name, side);
};
export default side;
