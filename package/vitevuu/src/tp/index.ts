/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataModel, graph, List, deserializeCallBack } from 'ht';

export interface TPINIT {
  callBack: deserializeCallBack | undefined;
  json: string;
  zoomable?: boolean;
  pannable?: boolean;
  dom?: unknown | HTMLDivElement;
}

export interface PROMISETP {
  json: any;
  dm: DataModel | null;
  gv: graph.GraphView | null;
  data: List | null;
  reload: (url: string, cb: deserializeCallBack) => void;
}

export default (opt: TPINIT) => {
  const dom = opt.dom as HTMLDivElement;
  const graphView = new ht.graph.GraphView();
  if (dom) {
    graphView.addToDOM(dom);
  }
  return new Promise<PROMISETP>((res, rej) => {
    graphView.deserialize(opt.json, (json, dm, gv, data) => {
      if (json.title) document.title = json.title;
      gv.setZoomable(opt.zoomable || false);
      gv.setPannable(opt.pannable || false);
      if (opt.callBack) opt.callBack(json, dm, gv, data);
      res({
        json,
        dm,
        gv,
        data,
        reload(url, cb) {
          dm.clear();
          gv.deserialize(url, cb);
        },
      });
    });
  });
};
