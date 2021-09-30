/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataModel } from 'ht';

// 计算
const compunted: (a: number, b: number, c: number) => string = (
  min,
  max,
  precision,
) => {
  const num = parseInt(`${Math.random() * (max - min + 1)}${min}`, 10);
  return num.toFixed(precision);
};

// 计算百分数
const computedPercentage: (a: number, b: number, c: number) => string = (
  min,
  max,
  precision,
) => {
  let num = Math.random() * max;
  if (num < min) {
    num = 1 - num;
  }
  return num.toFixed(precision);
};

// 随机真伪
const computedTrue = () => {
  return !(Math.random() > 0.5);
};

export type GetTcMcArr = {
  name: string;
  tc: string;
  mc: string;
  v: any;
  tag: string;
};
const getTcMcArr = (obj: any, tagname: string): Array<GetTcMcArr> => {
  const arr: Array<GetTcMcArr> = [];
  for (const i in obj) {
    const itemJoin = i.split('.');
    if (itemJoin.length >= 2) {
      let nv = arr.find((item) => item.name === itemJoin[0]);
      if (!nv) {
        arr.push({ name: itemJoin[0], tc: '', mc: '', v: '', tag: tagname });
      }
      nv = arr.find((item) => item.name === itemJoin[0]);
      if (nv) {
        const arrkey = itemJoin[1] as keyof GetTcMcArr;
        nv[arrkey] = obj[i];
      }
    }
  }

  return arr;
};

const getValByTcMc: (
  b: DataModel,
  tag?: string,
) => Array<Pick<GetTcMcArr, 'tc' | 'mc'>> = (dataModel, tag) => {
  // 获取tags
  const tagMaps = dataModel.getTagMap();
  let tcMcArr: Array<GetTcMcArr> = [];
  for (const i in tagMaps) {
    const arrtObj = tagMaps[i].getAttrObject();
    const arr = getTcMcArr(arrtObj, i);
    tcMcArr = tcMcArr.concat(arr);
  }

  // 过滤出合格的数据
  const params = tcMcArr
    .filter((item) => item.tc && item.mc)
    .map((item) => {
      return {
        tc: item.tc,
        mc: item.mc,
      };
    });

  // 将相关参数返回
  return params;
};

export {
  compunted,
  computedTrue,
  computedPercentage,
  getTcMcArr,
  getValByTcMc,
};

export default {
  compunted,
  computedTrue,
  computedPercentage,
  getTcMcArr,
  getValByTcMc,
};
