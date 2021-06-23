import { Shape, Markup } from '@antv/x6';

const factory: any = {};
function getPort(position: any) {
  return {
    position: {
      name: position,
    },
    attrs: {
      circle: {
        r: 5,
        magnet: true,
        stroke: '#45B8B1',
        strokeWidth: 1,
        fill: '#fff',
      },
    },
  };
}
function getGroups() {
  const obj = {
    leftGroup: getPort('left'),
    rightGroup: getPort('right'),
    topGroup: getPort('top'),
    bottomGroup: getPort('bottom'),
  };
  return obj;
}
function getMarkup(type: string) {
  return [
    {
      tagName: type,
      selector: 'body',
    },
    {
      tagName: 'text',
      selector: 'label',
    },
    {
      tagName: 'text',
      selector: 'argContent',
    },
    {
      tagName: 'text',
      selector: 'resContent',
    },
  ];
}
function getItems() {
  return [
    {
      group: 'leftGroup',
    },
    {
      group: 'rightGroup',
    },
    {
      group: 'topGroup',
    },
    {
      group: 'bottomGroup',
    },
  ];
}
factory.getRect = (x?: number, y?: number) => {
  return new Shape.Polygon({
    x,
    y,
    width: 90,
    height: 40,
    points: '5,0 20,0 25,10 0,10',
    zIndex: 10,
    attrs: {
      body: {
        fill: '#A0D5FF',
        strokeWidth: 1,
      },
      label: {
        text: '触发器',
      },
    },
    ports: {
      groups: getGroups(),
      items: getItems(),
    },
    data: {
      nodeType: 'TRIGGER',
    },
  });
};
factory.getRectRadius = (x?: number, y?: number) => {
  return new Shape.Rect({
    x,
    y,
    width: 100,
    height: 40,
    markup: getMarkup('rect'),
    zIndex: 10,
    attrs: {
      body: {
        fill: '#FDF1B3',
        strokeWidth: 1,
        rx: 10,
        ry: 10,
      },
      label: {
        text: '函数',
      },
    },
    ports: {
      groups: getGroups(),
      items: getItems(),
    },
    data: {
      nodeType: 'FUNCTION',
    },
  });
};
factory.getRhombus = (x?: number, y?: number) => {
  return new Shape.Polygon({
    x,
    y,
    width: 90,
    height: 50,
    zIndex: 10,
    points: '0,10 20,0 40,10 20,20',
    markup: getMarkup('polygon'),
    attrs: {
      body: {
        fill: '#ffc292',
        strokeWidth: 1,
      },
      label: {
        text: '判断',
      },
    },
    ports: {
      groups: getGroups(),
      items: getItems(),
    },
    data: {
      nodeType: 'SELECTOR',
    },
  });
};
factory.getTrapezoid = (x?: number, y?: number) => {
  return new Shape.Polygon({
    x,
    y,
    width: 100,
    height: 40,
    zIndex: 10,
    points: '5,0 25,0 20,10 0,10',
    attrs: {
      body: {
        fill: '#ACFACE',
        strokeWidth: 1,
      },
      label: {
        text: 'switch',
      },
    },
    ports: {
      groups: getGroups(),
      items: getItems(),
    },
    data: {
      nodeType: 'SWITCH',
    },
  });
};
factory.getEllipse = (x?: number, y?: number) => {
  return new Shape.Ellipse({
    x,
    y,
    zIndex: 10,
    width: 90,
    height: 45,
    attrs: {
      body: {
        fill: '#F9A4EE',
        strokeWidth: 1,
      },
      label: {
        text: '规则',
      },
    },
    ports: {
      groups: getGroups(),
      items: getItems(),
    },
    data: {
      nodeType: 'RULES',
    },
  });
};
factory.getCircle = (x?: number, y?: number) => {
  return new Shape.Circle({
    x,
    y,
    width: 60,
    height: 60,
    zIndex: 10,
    attrs: {
      body: {
        fill: '#FF807C',
        strokeWidth: 1,
      },
      label: {
        text: '运算符',
      },
    },
    ports: {
      groups: getGroups(),
      items: getItems(),
    },
    data: {
      nodeType: 'OPERATOR',
    },
  });
};
factory.getSquare = (x?: number, y?: number) => {
  return new Shape.Rect({
    x,
    y,
    width: 60,
    height: 60,
    zIndex: 10,
    attrs: {
      body: {
        fill: '#DBDFEB',
        strokeWidth: 1,
      },
      label: {
        text: '常量',
      },
    },
    ports: {
      groups: getGroups(),
      items: getItems(),
    },
    data: {
      nodeType: 'CONSTANT',
    },
  });
};
factory.getTriangle = (x?: number, y?: number) => {
  return new Shape.Polygon({
    x,
    y,
    width: 70,
    height: 60,
    zIndex: 10,
    points: '100,0 200,173 0,173',
    attrs: {
      body: {
        fill: '#CBFFA3',
        strokeWidth: 1,
      },
      label: {
        y: 12,
        text: '逻辑符',
      },
    },
    ports: {
      groups: getGroups(),
      items: getItems(),
    },
    data: {
      nodeType: 'LOGIC',
    },
  });
};
factory.getGroup = (x?: number, y?: number) => {
  return new Shape.Rect({
    x,
    y,
    width: 80,
    height: 40,
    zIndex: 1,
    attrs: {
      body: {
        fill: '#A0D5FF',
        strokeWidth: 1,
      },
      label: {
        text: '组',
      },
    },
    ports: {
      groups: getGroups(),
      items: getItems(),
    },
    data: {
      nodeType: 'RULES',
      embed: true,
      parent: true,
    },
  });
};
export default factory;
