import { App } from 'vue';

export default {
  install(app: App) {
    app.directive('contextmenu', {
      beforeMount(el, b) {
        const ul = document.createElement('ul');
        ul.id = 'contextmenu_box';
        const createdMenuElement = () => {
          ul.className = 'contextmenu';
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
          ul.className = 'contextmenu active';
          ul.style.left = e.x - x + 'px';
          ul.style.top = e.y - y + 'px';
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
