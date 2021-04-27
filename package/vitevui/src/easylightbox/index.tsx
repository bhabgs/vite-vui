import { installComponent, setStyleClass, simpleDownload } from '../util';
import { defineComponent, PropType, ref, Teleport } from 'vue';

const props = {
  srcList: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
  srcIndex: {
    type: Number as PropType<number>,
    default: 0,
  },
  value: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
};
const easyLightBox = defineComponent({
  name: 'viEasyLightBox',
  props,
  setup(props, context) {
    const showControl = (url: string) => {
      const type = 'img';

      if (type === 'img') {
        return <img src={url} />;
      }
    };

    const closeLightbox = () => {
      context.emit('update:value', false);
    };

    const maskClick = () => {
      closeLightbox();
    };

    const scale = ref(1);
    const deg = ref(0);
    const delayS = ref(0);

    const switchPic = (direction: 'prev' | 'next') => {
      const srcListLength = props.srcList.length;
      let currentIndex = props.srcIndex;

      delayS.value = 0;
      scale.value = 1;
      deg.value = 0;

      if (direction === 'prev') {
        currentIndex = currentIndex <= 0 ? srcListLength - 1 : currentIndex - 1;
      }
      if (direction === 'next') {
        currentIndex = currentIndex >= srcListLength - 1 ? 0 : currentIndex + 1;
      }

      context.emit('update:srcIndex', currentIndex);
    };

    const zoomClick = (type: 'zoomOut' | 'zoomIn') => {
      delayS.value = 0.3;

      if (type === 'zoomOut') {
        if (parseFloat(scale.value.toFixed(2)) > 0.2) {
          scale.value -= 0.2;
        }
      }
      if (type === 'zoomIn') {
        scale.value += 0.2;
      }
    };

    const rotate = (type: 'left' | 'right') => {
      delayS.value = 0.3;

      if (type === 'left') {
        deg.value -= 90;
      }
      if (type === 'right') {
        deg.value += 90;
      }
    };

    const download = async (e: Event) => {
      const fileUrl = props.srcList?.[props.srcIndex];

      if (fileUrl) {
        // 执行下载
        simpleDownload(fileUrl);
      }
    };

    return () =>
      props.value ? (
        <Teleport to='body'>
          <div class={setStyleClass(['easylightbox'])}>
            <div
              class={setStyleClass(['easylightbox_mask'])}
              onClick={maskClick}
            ></div>
            <div class={setStyleClass(['easylightbox_canvas'])}>
              {props.srcList.map((url: string, index: number) => {
                // 后期会判断展示图片还是视频
                return index === props.srcIndex ? (
                  <div
                    class={setStyleClass(['easylightbox_item'])}
                    style={{
                      transform: `scale(${scale.value}) rotate(${deg.value}deg)`,
                      transition: `transform ${delayS.value}s ease 0s`,
                    }}
                  >
                    {showControl(url)}
                  </div>
                ) : (
                  ''
                );
              })}
            </div>
            {/* 关闭 */}
            <div
              class={setStyleClass(['easylightbox_btn', 'easylightbox_close'])}
              onClick={closeLightbox}
            >
              <viIcon name='vite_close' />
            </div>
            {/* 左右按钮 */}
            {props.srcList.length > 1
              ? [
                  <div
                    class={setStyleClass([
                      'easylightbox_btn',
                      'easylightbox_prev',
                    ])}
                    onClick={() => {
                      switchPic('prev');
                    }}
                  >
                    <viIcon name='vite_left' />
                  </div>,
                  <div
                    class={setStyleClass([
                      'easylightbox_btn',
                      'easylightbox_next',
                    ])}
                    onClick={() => {
                      switchPic('next');
                    }}
                  >
                    <viIcon name='vite_right' />
                  </div>,
                ]
              : ''}
            {/* 功能按钮 */}
            <div
              class={setStyleClass([
                'easylightbox_btn',
                'easylightbox_actions',
              ])}
            >
              {/* 放大缩小 */}
              <div class={setStyleClass(['easylightbox_actions-inner'])}>
                <div
                  class={setStyleClass(['easylightbox_actions_zoom-out'])}
                  onClick={() => {
                    zoomClick('zoomOut');
                  }}
                >
                  <viIcon name='vite_minus-circle' />
                </div>
                <div
                  class={setStyleClass(['easylightbox_actions_zoom-in'])}
                  onClick={() => {
                    zoomClick('zoomIn');
                  }}
                >
                  <viIcon name='vite_plus-circle' />
                </div>
                {/* 旋转 */}
                <div
                  class={setStyleClass([
                    'easylightbox_actions_zoom_rotate-left',
                  ])}
                  onClick={() => {
                    rotate('left');
                  }}
                >
                  <viIcon name='vite_rotate-left' />
                </div>
                <div
                  class={setStyleClass([
                    'easylightbox_actions_zoom_rotate-right',
                  ])}
                  onClick={() => {
                    rotate('right');
                  }}
                >
                  <viIcon name='vite_rotate-right' />
                </div>
                {/* 下载 */}
                <div
                  class={setStyleClass(['easylightbox_actions_zoom-download'])}
                  onClick={download}
                >
                  <viIcon name='vite_xiazai-2' />
                </div>
              </div>
            </div>
          </div>
        </Teleport>
      ) : (
        ''
      );
  },
});

export default installComponent(easyLightBox, 'viEasyLightBox');
