/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-03-19 13:38:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-03-22 17:59:31
 */
import { App } from 'vue';
let contextmenuClass = 'contextmenu box_shadow';

export default {
  install(app: App) {
    app.directive('contextmenu', {
      beforeMount(el, b) {
        const ul = document.createElement('ul');
        ul.id = 'contextmenu_box';
        const createdMenuElement = () => {
          if (b.value.box_shadow === 'close') {
            contextmenuClass.replace('box_shadow', '');
          }

          ul.className = contextmenuClass;

          for (let i of b.value.menus) {
            const text = document.createTextNode(i.name);
            const li = document.createElement('li');

            li.onclick = (e) => {
              e.preventDefault();
              b.value.callBack(i);
            };
            li.appendChild(text);
            ul.appendChild(li);
          }
          el.appendChild(ul);
        };
        createdMenuElement();

        window.addEventListener('scroll', () => {
          ul.className = contextmenuClass;
        });

        el.style.position = 'relative';
      },
      mounted(el, b) {
        let ul: HTMLElement;
        setTimeout(() => {
          ul = document.getElementById('contextmenu_box') as HTMLElement;
        }, 10);

        // 右键触发展示
        el.addEventListener('contextmenu', (e: any) => {
          const { x, y } = {
            x: el.offsetLeft,
            y: el.offsetTop,
          };
          e.preventDefault();
          ul.className = contextmenuClass + ' active';
          ul.style.left = e.clientX + 'px';
          ul.style.top = e.clientY + 'px';
        });

        // 单击box 隐藏
        el.addEventListener('click', (e: any) => {
          e.preventDefault();
          ul.className = 'contextmenu';
        });
      },
    });
  },
};
