# canvas 签名

> 目前是简单版本 支持返回 base64 文本，clear,

```ts
import vitevuu, { signature } from 'vitevuu';

// 初始化
const signature = new vitevuu.signature({
  ele: 'canvas', // 元素id
  width: 400,
  height: 400,
  lineWidth: 2, // 线条粗细
  fontColor: 'red', // 线条颜色
});

// 清除
signature.clear();

// 获取png
signature.getPNGImage();
```
