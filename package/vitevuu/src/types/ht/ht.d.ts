/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable @typescript-eslint/ban-types */
/**
 * Created by ht on 2017/5/10.
 */

// eslint-disable-next-line max-classes-per-file
declare namespace ht {
  namespace ShapeType {
    // eslint-disable-next-line spaced-comment
    //var shapes = ['rect', 'circle', 'oval', 'roundRect', 'star', 'triangle', 'hexagon', 'pentagon', 'diamond', 'rightTriangle', 'parallelogram', 'trapezoid'];
  }
  // 'linear.southwest','linear.southeast','linear.northwest','linear.northeast', 'linear.north','linear.south','linear.west','linear.east', 'radial.center','radial.southwest','radial.southeast','radial.northwest','radial.northeast', 'radial.north','radial.south','radial.west','radial.east', 'spread.horizontal','spread.vertical','spread.diagonal','spread.antidiagonal', 'spread.north','spread.south','spread.west','spread.east'
  export class Notifier {
    /**
     * 增加监听器
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
     */
    add(listener: Function, scope?: any, ahead?: boolean): boolean;

    /**
     * 是否包含此监听器函数
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     */
    contains(listener: Function, scope?: any): boolean;

    /**
     * 派发事件，依次调用所有的监听器函数
     * @param {Object} event 事件对象
     */
    fire(event: Object): void;

    /**
     * 删除监听器
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     */
    remove(listener: Function, scope?: any): void;
  }
  export class List {
    /**
     * 添加元素
     * @param item 元素
     * @param index 指定位置
     */
    add(item: any, index?: number): number | Array<any>;

    /**
     * 将一批元素加入到当前集合中
     * @param {Array|List} array 元素数组或集合
     */
    addAll(array: any[] | List): void;

    /**
     * 清空集合
     */
    clear(): Array<any>;

    /**
     * 判断当前集合是否包含参数元素
     * @param {Object} item 是否包含此元素
     */
    contains(item: any): boolean;

    /**
     * 提供一个回调函数遍历此集合
     * @param {Function} func 遍历函数
     * @param {Object} [scope] 函数域
     * @example
     * list.each(function(item) {
     *     console.log(item);
     * });
     */
    each(func: Function, scope?: any): void;

    /**
     * 返回索引位置的的元素
     * @param {number} index 索引
     * @return {Object} 处于索引位置的元素
     */
    get(index: number): any;

    /**
     * 获取类声明(构造函数)
     * @return {Function} 类声明(构造函数)
     */
    getClass(): any;

    /**
     * 获取类全名
     * @return {String} 类全名
     */
    getClassName(): string;

    /**
     * 获取父类声明(构造函数)
     * @return {Function} 父类声明(构造函数)
     */
    getSuperClass(): any;

    /**
     * 获得参数元素的索引
     * @param {Object} item 元素
     * @return {number} 元素的索引
     */
    indexOf(item: any): number;

    /**
     * 判断集合是否为空
     * @return {boolean} 集合是否为空
     */
    isEmpty(): boolean;

    /**
     * 将参数元素从集合中删除
     * @param {Object} item 要删除的元素
     * @return {number} 要删除的元素的索引
     */
    remove(item: any): number;

    /**
     * 删除索引位置的元素
     * @param {number} index 要删除的索引
     * @return {Ojbect} 删除的元素
     */
    removeAt(index: number): any;

    /**
     * 将集合中的元素顺序倒序排序
     */
    reverse(): void;

    /**
     * 提供一个回调函数倒序遍历此集合
     * @param {Function} func 遍历函数
     * @param {Object} [scope] 函数域
     * @example list.reverseEach(function(item) {
     *     console.log(item);
     * });
     */
    reverseEach(func: any, scope?: any): void;

    /**
     * 设置索引处的元素
     * @param {number} index 索引，如果此索引处存在元素则将其替换
     * @param {Object} item 新元素
     */
    set(index: number, item: any): any;

    /**
     * 获取集合中的元素数
     * @return {number} 集合中的元素数
     */
    size(): number;

    /**
     * 提取集合中的部分元素组成一个新集合并返回
     * @param {number} start 开始索引(包含)
     * @param {number} end 结束索引(不包含)
     * @return {List} 新集合
     */
    slice(start: number, end?: number): List;

    /**
     * 根据参数函数将元素排序
     * @param {Function} sortFunc 排序函数
     * @example
     * list.sort(function(item1, item2) {
     *      return item1.age > item2.age;
     * });
     * @return {List} 自身
     */
    sort(sortFunc: any): List;

    /**
     * 以matchFunc为过滤函数构建新的元素数组
     * @param {Function} [matchFunc] 过滤函数
     * @param {Object} [scope] 函数域
     * @example
     * var array = list.toArray(function(item) {
     *    if (item.a('visible')) {
     *    	  return true;
     *    }
     * });
     *
     * @return {Array} 元素数组
     */
    toArray(mathFunc?: Function, scope?: any): any[];

    /**
     * 以matchFunc为过滤函数构建新的元素集合
     * @param {Function} [matchFunc] 过滤函数
     * @param {Object} [scope] 函数域
     * @example
     * var list = list.toList(function(item) {
     *     if (item.a('visible')) {
     *         return true;
     *     }
     * });
     *
     * @return {List} 元素集合
     */
    toList(mathFunc?: Function, scope?: any): List;

    /**
     * 重写js默认的toString
     * @return {String}
     */
    toString(): string;
  }

  export class Data {
    /**
     * 添加孩子节点
     * @param child 子元素
     * @param index 插入索引，为空则插入作为最后的孩子
     */
    addChild(child: Data, index?: number): void;

    /**
     * 增加 style 中 icons 属性
     * @param name 名称
     * @param icon icon 定义
     */
    addStyleIcon(name: string, icon: any): void;

    /**
     * 开启所在数据模型事务
     */
    beginTransaction(): void;

    /**
     * 结束所在数据模型事务
     */
    endTransaction(): void;

    /**
     * 删除所有孩子节点，
     */
    clearChildren(): void;

    /**
     * 删除所有孩子节点，并从数据模型移出
     */
    clearChildrenFromDataModel(): void;

    /**
     * 获取当前节点所在数据模型
     */
    dm(): void;

    /**
     * 设置节点数据模型
     * @param dataModel 数据模型
     */
    dm(dataModel: DataModel): DataModel;

    /**
     * 遍历所有子节点
     * @param func 遍历函数 (data, index) => {}
     * @param scope 作用域
     */
    eachChild(func: any, scope?: any): void;

    /**
     * 派发属性变化事件，可使用fp的简写方式
     * @param property 属性
     * @param oldValue 旧值
     * @param newValue 新值
     */
    firePropertyChange(property: string, oldValue: any, newValue: any): void;

    /**
     * 派发属性变化事件，firePropertyChange 方法的简写
     * @param property 属性
     * @param oldValue 旧值
     * @param newValue 新值
     */
    fp(property: string, oldValue: any, newValue: any): void;

    /**
     * 返回所有属性集合对象，当没设置过任何属性可能会返回 undefined
     */
    getAttrObject(): Object | undefined;

    /**
     * 返回指定索引位置的孩子
     * @param {number} index 索引
     * @return {Data} 索引对应的孩子
     */
    getChildAt(index: number): Data;

    /**
     * 获取所有孩子节点
     * @return {List} 孩子元素集合
     */
    getChildren(): List;

    /**
     * 获取类声明(构造函数)
     * @return {Function} 类声明(构造函数)
     */
    getClass(): any;

    /**
     * 获取类全名，继承Data并希望序列化时应该重写此方法返回子类的类名字符串
     * @return {String} 类全名
     */
    getClassName(): string;

    /**
     * 获取数据绑定对象
     */
    getDataBindings(): Object | undefined;

    /**
     * 获取所属的DataModel
     * @return {DataModel} DataModel数据模型
     */
    getDataModel(): DataModel;

    /**
     * 获取显示名称，常作为Column和Property的列头和属性名称显示
     * @return {String} 显示名称
     */
    getDisplayName(): string;

    /**
     * 获取小图标名称，常作为TreeView和ListView等组件上的节点小图标
     * @return {String|Object} 图标名或矢量
     */
    getIcon(): string | any;

    /**
     * 获取唯一编号
     * @return {number} 唯一编号
     */
    getId(): number;

    /**
     * 获取数据元素在GraphView组件中的图层位置
     * @default 0
     * @return {String|number} 图层名
     */
    getLayer(): string | number;

    /**
     * 获取三维渲染层级, 配合 ht.Default 中的 getRenderLayerInfo 和 setRenderLayerInfo 使用
     */
    getRenderLayer(): string | number;

    /**
     * 获取三维渲染层级掩码
     */
    getRenderLayerMask(): string | number;

    /**
         * 获取父元素
         * @return {Data} 父元素
         Data.prototype.getParent  = ();
         */
    getParent(): Data;

    /**
     * 获取数据元素名
     * @return {String} 名称
     */
    getName(): string;

    /**
     * 此函数返回一个map，决定序列化时哪些属性可被序列化，如果有自定义的get/set属性并且需要序列化，应该重写此方法
     * @example
     * function(){
     *     return {
     *         name: 1,
     *         displayName: 1,
     *         icon: 1,
     *         toolTip: 1,
     *         parent: 1,
     *         layer: 1,
     *         tag: 1,
     *         adjustChildrenToTop: 1
     *     };
     * }
     * @return {Object} 需要被序列化的属性map
     */
    getSerializableProperties(): any;

    /**
     * 此函数返回一个map，决定序列化时哪些attr属性可被序列化，默认所有attr对象里的属性都会被序列化
     * @example
     * function(){
     *     var name, map = ;
     *     for (name in this._attrObject) {
     *         map[name] = 1;
     *     }
     *     return map;
     * }
     * @return {Object} 需要被序列化的attr属性map
     */
    getSerializableAttrs(): any;

    /**
     * 此函数返回一个map，决定序列化时哪些样式可被序列化，默认所有样式都会被序列化
     * @example function(){
     *     var name, map = ;
     *     for (name in this._styleMap) {
     *         map[name] = 1;
     *     }
     *     return map;
     * }
     * @return {Object} 需要被序列化的样式map
     */
    getSerializableStyles(): any;

    /**
     * 设置attr属性, 有两个参数时相当于{@link Data#setAttr setAttr}
     * @param {String} name 属性名
     * @param {Object} [value] 属性值
     * @returns {Object}
     */
    a(name: string, value: any): void;

    /**
     * 获取attr属性
     * @param {String} name 属性名
     * @returns {Object}
     */
    a(name: string): any;

    /**
     * 获取或设置样式，仅有一个参数时相当于{@link Data#getStyle getStyle}，有两个参数时相当于{@link Data#setStyle setStyle}
     * @param {String} name 样式名
     * @param {Object} [value] 样式值
     * @returns {Object}
     */
    // s(name: string, value: any): any;
    s(
      p1:
        | {
            interactive: boolean;
            onClick: (event: any, data: any, view: any) => void;
          }
        | any,
      p2?: any,
    ): any;
    /**
     * 获取样式属性
     * @param {String} name 样式名
     * @returns {Object}
     */
    getStyle(name: string): any;
    /**
     * 设置样式
     * @param {String} name 样式名
     * @param {Object} value 样式值
     */
    setStyle(name: string, value: any): Data;

    /**
     * 设置节点样式对象
     * @param styleMap
     */
    setStyleMap(styleMap: any): void;
    /**
     * 获取attr属性
     * @param {String} name 属性名
     * @returns {Object}
     */
    getAttr(name: string): any;
    /**
     * 设置attr属性
     * @param {String} name 属性名
     * @param {Object} value 属性值
     */
    setAttr(name: string, value: any): Data;

    /**
     * 获取图元内部样式映射信息
     * @returns {Object} 样式映射表
     */
    getStyleMap(): any;

    /**
     * 返回当前运行态前缀内容
     */
    getCurrentPrefix(): string;

    /**
     * 自动附加当前前缀，获得对应属性
     * @param name
     */
    ca(name: string): any;

    /**
     * 自动附加当前前缀，设置对应属性
     * @param name
     */
    ca(name: string, value: any): any;

    /**
     * 获取父类声明(构造函数)，继承类时可以用来调用父类构造或函数
     * @example
     * function MyNode() {
     *      this.getSuperClass().call(this);//调用父类构造函数
     * }
     * Default.def(MyNode, Data, {
     *    setName: function(name) {
     *    	this.getSuperClass().prototype.setName.call(this, name);//调用父类的setName函数
     *    	this._username = name;
     *    }
     * });
     *
     * @returns {Function} 父类声明(构造函数)
     */
    getSuperClass(): any;

    /**
     * 获取标示号，可通过{@link DataModel#getDataByTag getDataByTag}快速查找
     * @returns {String} 标示号
     */
    getTag(): string;

    /**
     * 获取文字提示信息
     * @returns {String} 文字提示
     */
    getToolTip(): string;

    /**
     * 获取拓扑组件上的UI类
     * @returns {Function} UI类声明(构造函数)
     */
    getUIClass(): any;

    /**
     * 判断是否有孩子
     * @returns {boolean} 是否有孩子
     */
    hasChildren(): boolean;

    /**
     * 强制触发属性变化事件通知界面更新
     */
    invalidate(): void;

    /**
     * GraphView点击图元会自动sendToTop，该属性决定是否对子图元也进行sendToTop操作
     * @return {boolean} 是否将children自动sendToTop
     */
    isAdjustChildrenToTop(): boolean;

    /**
     * 判断自身是否为指定data的子孙
     * @param {Data} data 要对比的数据元素
     * @return {boolean} 自身是否为指定data的子孙
     */
    isDescendantOf(data: Data): boolean;

    /**
     * 判断是否有孩子，同{@link Data#hasChildren hasChildren}
     * @return {boolean} 是否有孩子
     */
    isEmpty(): boolean;

    /**
     * 判断自身是否为指定data的父亲
     * @param {Data} data 要对比的数据元素
     * @return {boolean} 自身是否为指定data的父亲
     */
    isParentOf(data: Data): boolean;

    /**
     * 判断自身与指定data是否有父子或子孙关系
     * @param {Data} data 要对比的数据元素
     * @return {boolean} 自身与指定data是否有父子或子孙关系
     */
    isRelatedTo(data: Data): boolean;

    /**
     * 强制触发属性变化事件通知界面更新，{@link Data#invalidate invalidate}的缩写
     */
    iv(): void;

    /**
     * 添加孩子时的回调函数，可重载做后续处理
     * @param {Data} child 新增加的孩子元素
     * @param {number} index 索引
     */
    onChildAdded(child: Data, index: number): void;

    /**
     * 删除孩子时的回调函数，可重载做后续处理
     * @param {Data} child 被删除的孩子元素
     * @param {number} index 索引
     */
    onChildRemoved(child: Data, index: number): void;

    /**
     * 改变父亲元素时的回调函数，可重载做后续处理
     * @param {Data} oldParent 旧的父元素
     * @param {Data} parent 新的父元素
     */
    onParentChanged(oldParent: Data, parent: Data): void;

    /**
     * 属性变化回调函数，可重载做后续处理
     * @param {Object} event 属性变化事件
     * @example //event格式：
     * {
     * 	   property: 'name',//发生变化的属性
     * 	   oldValue: 'oldValue',//旧值
     * 	   newValue: 'newValue',''新值
     * 	   data: data//发生变化的data
     * }
     *
     */
    onPropertyChanged(event: any): void;

    /**
     * 样式属性变化时会回调该函数，可重载做后续处理
     * @param {String} name 样式名
     * @param {Object} oldValue 旧的样式值
     * @param {Object} newValue 新的样式值
     */
    onStyleChanged(name: string, oldValue: any, newValue: any): void;

    /**
     * 删除指定孩子元素，内部会自动调用孩子元素的setParent
     * @param {Data} child 要删除的孩子元素
     */
    removeChild(child: Data): void;

    /**
     * 删除icon
     * @param {String} name 要删除的icon名
     */
    removeStyleIcon(name: string): void;

    /**
     * 从数据模型中移出
     */
    removeFromDataModel(): void;

    /**
     * GraphView点击图元会自动sendToTop，该属性决定是否对子图元也进行sendToTop操作
     * @param {boolean} adjustToTop 是否将children自动sendToTop
     */
    setAdjustChildrenToTop(adjustToTop: boolean): void;

    /**
     * 设置attr属性对象，该属性默认为空，用于存储用户业务信息
     * @param {Object} attrObject attr属性对象
     */
    setAttrObject(attrObject: any): void;

    /**
     * 设置显示名称，常作为Column和Property的列头和属性名称显示
     * @param {String}  displayName 显示名称
     */
    setDisplayName(displayName: string): void;

    /**
     * 设置数据绑定
     * @param dataBindings 数据绑定对象
     */
    setDataBindings(dataBindings: Object): void;

    /**
     * 设置小图标名称，常作为TreeView和ListView等组件上的节点小图标
     * @param {String|Object} icon 图标名或矢量
     */
    setIcon(icon: string | any): void;

    /**
     * 设置唯一编号，如果手工设置，一定要确保在data加入到DataModel之前设置并且唯一不重复
     * @param {String|number} id 唯一编号
     */
    setId(id: number): void;

    /**
     * 设置数据元素在GraphView组件中的图层位置
     * @param {String|number} layer 图层名
     */
    setLayer(layer: string | number): void;

    /**
     * 设置节点的三维渲染层级，配合 ht.Default 中的 getRenderLayerInfo 和 setRenderLayerInfo 使用
     * @param layerName
     */
    setRenderLayer(layerName: string | number): void;

    /**
     * 设置数据元素名称
     * @param {String} name 数据元素名称
     */
    setName(name: string): void;

    /**
     * 设置父元素
     * @param {Data} parent 父元素
     */
    setParent(parent: Data): void;

    /**
     * 设置标示号，可通过{@link DataModel#getDataByTag getDataByTag}快速查找
     * @param {String} tag 标示号
     */
    setTag(tag: string): void;
    /**
     * 设置文字提示信息
     * @param {String} toolTip 文字提示
     */
    setToolTip(toolTip: string): void;

    /**
     * 获取孩子元素总数
     * @return {number} 孩子元素总数
     */
    size(): number;

    /**
     * 以matchFunc为过滤函数构建新的孩子元素集合
     * @param {Function} [matchFunc] 过滤函数
     * @param {Object} [scope] 函数域
     * @example
     * var list = data.toChildren(function(child) {
     *     if (child.a('visible')) {
     *    	   return true;
     *     }
     * });
     *
     * @return {List} 孩子元素集合
     */
    toChildren(matchFunc?: Function, scope?: any): List;

    /**
     * 返回值作为TreeView和GraphView等组件上的图元文字标签，默认返回displayName||name信息
     * @return {String} 文字标签
     */
    toLabel(): string;

    /**
     * 测试对应的渲染层级名是否被注册
     */
    testRenderLayer(layerName: string): boolean;
  }
  export class Node extends Data {
    /**
     * 获取当前图元代理的连线集合
     * @return {List}
     */
    getAgentEdges(): List;

    /**
     * 获取吸附到自身的所有图元
     * @return {List}
     */
    getAttaches(): List;

    /**
     * 获取图元四个角的实时坐标(包括旋转后的坐标)
     * @param {number} xPadding 水平方向padding
     * @param {number} yPadding 垂直方向padding
     * @example //返回值示例：
     * [
     *     {x: 0, y: 0},//左上
     *     {x: 100, y: 0},//右上
     *     {x: 100, y: 100},//右下
     *     {x: 0, y: 100}//左下
     * ]
     * @return {Array} 四个角坐标，顺序为左上，右上，右下，左下
     */
    getCorners(xPadding: number, yPadding: number): Point[];

    /**
     * 获取图元中心在3D坐标系中的y坐标
     * @return {number}
     */
    getElevation(): number;

    /**
     * 获取所有跟图元关联的连线(不包括代理的连线)
     * @return {List}
     */
    getEdges(): List;

    /**
     * 获取欧拉旋转角
     */
    getEuler(): ht.Math.Euler;

    /**
     * 获取包括动态旋转（billboard 的 autorotate 属性作用下）在内的最终旋转
     */
    getFinalRotation3d(): Array<number>;

    /**
     * 获取包括动态缩放（billboard 的 fixSizeOnScreen 作用下）、scale、size在内的最终缩放
     */
    getFinalScale3d(): Array<number>;

    /**
     * 获取图元在2D拓扑中的高度，或3D拓扑中的z轴长度
     * @return {number}
     */
    getHeight(): number;

    /**
     * 获取宿主图元，当图元吸附上宿主图元时，宿主移动或旋转时会带动所有吸附者
     * @return {Data}
     */
    getHost(): Data;

    /**
     * 获取拓扑上展现的图片信息，在GraphView拓扑图中图片一般以position为中心绘制
     * @return {Data}
     */
    getImage(): Data;

    /**
     * 获取所有跟节点关联的自环连线
     * @return {List}
     */
    getLoopedEdges(): List;

    /**
     * 获取节点转换矩阵
     */
    getMatrix(): any;

    /**
     * 获取图元中心点坐标
     * @example //返回值示例：
     * {
     * 	   x: 0,
     * 	   y: 0
     * }
     *
     * @return {Object}
     */
    getPosition(): Point;

    /**
     * 获取图元中心点在3D拓扑中的三维坐标
     * @return {Array} 三维坐标数组，格式为[x, y, z]
     */
    getPosition3d(): number[];

    /**
     * 获取四元素
     */
    getQuaternion(): ht.Math.Quaternion;

    /**
     * 获取图元的矩形区域(包括旋转)
     * @example
     * //返回值示例：
     * {x: 0, y: 0, width: 100, height: 100}
     * @return {Object} 矩形区域
     */
    getRect(): Rect;

    /**
     * 获取图元的旋转角度，围绕中心点顺时针旋转
     * @return {number} 旋转角度(弧度制)
     */
    getRotation(): number;

    /**
     * 获取图元在3D拓扑中的三维旋转角度
     * @return {Array} 三维旋转角度(弧度制)，格式为[x, y, z]，即[getRotationX(), -getRotation(), getRotationZ()]
     */
    getRotation3d(): number[];

    /**
     * 返回三维旋转模式<br>
     * 图元在3D拓扑中旋转时，先沿x轴旋转，再沿y轴旋转和先沿y轴旋转，再沿x轴旋转最后的结果是不一样的
     * @return {String} 三维旋转模式，xyz|xzy|yxz|yzx|zxy|zyx
     */
    getRotationMode(): string;

    /**
     * 获取图元在3d拓扑中沿x轴的旋转角度(弧度制)
     * @return {number}
     */
    getRotationX(): number;

    /**
     * 获取图元在3d拓扑中沿y轴的旋转角度(弧度制)
     * @return {number}
     */
    getRotationY(): number;

    /**
     * 获取图元在3d拓扑中沿z轴的旋转角度(弧度制)
     * @return {number}
     */
    getRotationZ(): number;

    /**
     * 获取缩放后的大小，格式如 { width, height }
     */
    getScaledSize(): any;

    /**
     * 获取图元在2D拓扑中的尺寸(宽高)
     * @example //返回值示例：
     * {
     * 	   with: 100,
     * 	   height: 100
     * }
     * @return {Object}
     */
    getSize(): any;

    /**
     * 获取图元在3D拓扑中的尺寸(长宽高)
     * @return {Array} 格式为[x, y, z]，即[getWidth(), getTall(), getHeight()]
     */
    getSize3d(): number[];

    /**
     * 获取代理的起始于该图元的连线
     * @return {List}
     */
    getSourceAgentEdges(): List;

    /**
     * 获取跟图元关联的并起始于该图元的连线(不包括代理的连线)
     * @return {List}
     */
    getSourceEdges(): List;

    /**
     * 获取图元在3D拓扑中的y轴长度
     * @return {number}
     */
    getTall(): number;

    /**
     * 获取图元代理的结束于该图元的连线
     * @return {List}
     */
    getTargetAgentEdges(): List;

    /**
     * 获取跟图元关联的并结束于该图元的连线(不包括代理的连线)
     * @return {List}
     */
    getTargetEdges(): List;

    /**
     * 获取图元在2D拓扑中的宽度，或在3D拓扑中x轴的长度
     * @return {number}
     */
    getWidth(): number;

    /**
     * 当吸附宿主对象属性发生变化时回调该函数，可重载做后续处理
     * @param {Event} event 事件对象
     */
    handleHostPropertyChange(event: any): void;

    /**
     * 设置欧拉旋转角
     * @param euler
     */
    setEuler(euler: ht.Math.Euler): void;

    /**
     * 设置节点缩放属性
     * @param x 只传一个参数时，可以使用 { x: 1, y: 1 } 的格式
     * @param y 纵缩放
     */
    setScale(x: Point | number, y?: number): void;

    /**
     * 获取节点缩放属性
     */
    getScale(): Point;

    /**
     * 设置节点3d缩放属性
     * @param x 只传一个参数时，可以使用 [1, 1, 1] 的格式
     * @param y 纵缩放
     */
    setScale3d(x: Array<number> | number, y?: number, z?: number): void;

    /**
     * 获取节点3d缩放属性
     */
    getScale3d(): Array<number>;

    /**
     * 设置横向缩放
     * @param scaleX
     */
    setScaleX(scaleX: number): void;

    /**
     * 获取横向缩放
     */
    getScaleX(): number;

    /**
     * 设置纵向缩放
     * @param scaleY
     */
    setScaleY(scaleY: number): void;

    /**
     * 获取纵向缩放
     */
    getScaleY(): number;

    /**
     * 设置三维中高度缩放
     * @param scaleTall
     */
    setScaleTall(scaleTall: number): void;

    /**
     * 获取三维中高度缩放
     */
    getScaleTall(): number;

    /**
     * 设置节点锚点
     * @param x 只传一个参数时，可以使用 { x: 1, y: 1 } 或 [1,1] 的格式
     * @param y 纵锚点，当第一个对象为对象或者数组时，这个参数当作 rectStable
     * @param rectStable 是否保持保持包围盒位置不变
     */
    setAnchor(
      x: Point | number | Array<number>,
      y?: number | boolean,
      rectStable?: boolean,
    ): void;

    /**
     * 获取节点锚点属性
     */
    getAnchor(): Point;

    /**
     * 设置节点3d锚点属性
     * @param x 只传一个参数时，可以使用 [1, 1, 1] 的格式
     * @param y 纵锚点
     */
    setAnchor3d(x: Array<number> | number, y?: number, z?: number): void;

    /**
     * 获取节点3d锚点属性
     */
    getAnchor3d(): Array<number>;

    /**
     * 设置横向锚点a
     * @param anchorX
     */
    setAnchorX(anchorX: number): void;

    /**
     * 获取横向锚点
     */
    getAnchorX(): number;

    /**
     * 设置纵向锚点
     * @param AnchorY
     */
    setAnchorY(anchorY: number): void;

    /**
     * 获取纵向锚点
     */
    getAnchorY(): number;

    /**
     * 设置三维中高度锚点
     * @param anchorElevation
     */
    setAnchorElevation(anchorElevation: number): void;

    /**
     * 获取三维中高度锚点
     */
    getAnchorElevation(): number;

    /**
     * 获取节点 x 坐标
     */
    getX(): number;

    /**
     * 获取节点 y 坐标
     */
    getY(): number;

    /**
     * 判断当前图元上是否有代理连线
     * @return {boolean}
     */
    hasAgentEdges(): boolean;

    /**
     * 判断当前图元是否吸附到指定图元对象上
     * @param {Node} node 指定的图元
     * @return {boolean}
     */
    isHostOn(node: Node): boolean;

    /**
     * 判断当前节点是否与传入节点互相吸附
     * @param node
     */
    isLoopedHostOn(node: Node): boolean;

    /**
     * 执行布局
     * @param host
     */
    layout(host: Node): void;

    /**
     * 三维中，将节点指定面朝向目标位置旋转，可理解为节点本身看向这个位置，可以选择是哪个面看向目标
     * @param target 目标位置
     * @param face 可以是 front|back|top|bottom|right|left , 默认是 front
     */
    lookAt(target: number[], face?: string): void;

    /**
     * 三维中，指定面节点看向某个方向
     * @param vec 方向量，以节点自身为坐标中心，如 [0, 1, 0] 是正上方
     * @param face 可以是 front|back|top|bottom|right|left , 默认是 front
     */
    lookAtDirection(vec: number[], face?: string): void;

    /**
     * 三维中，绕着原朝向 a 跟目标朝向 b 的法线旋转 ab 夹角
     * @param target 目标位置
     * @param face 可以是 front|back|top|bottom|right|left , 默认是 front
     */
    lookAtX(target: number[], face?: string): void;

    /**
     * 当吸附的宿主对象发生变化时回调该函数，可重载做后续处理
     * @param {Node} oldHost 旧的宿主
     * @param {Node} newHost 新的宿主
     */
    onHostChanged(oldHost: Node, newHost: Node): void;

    /**
     * 获取或设置设置图元中心点坐标，有两个参数时相当于{@link Node#setPosition setPosition}，没有参数时相当于{@link Node#getPosition getPosition}
     * @param {number} [x] x坐标
     * @param {number} [y] y坐标
     * @return {Object} 坐标值，格式为:{x: x, y: y}
     */
    p(x: number, y: number): any;

    /**
     * 获取或设置图元中心点在3D拓扑中的三维坐标，相当于{@link Node#setPosition3d setPosition3d}
     * @param {number} [x] x坐标
     * @param {number} [y] y坐标
     * @param {number} [z] z坐标
     * @return {Array} 三维坐标数组，格式为[x, y, z]
     */
    p3(x: number | Array<number>, y?: number, z?: number): void;

    /**
     * 返回图元的三维坐标, 相当于{@link Node#getPosition3d getPosition3d}
     * @return {Array} 三维坐标数组，格式为[x, y, z]
     */
    p3(): number[];

    /**
     * 获取或设置图元在3D拓扑中的三维旋转角度，相当于{@link Node#setRotation3d setRotation3d}
     * @param {number} [rotationX] 沿x轴的旋转角度(弧度制)
     * @param {number} [rotationY] 沿y轴的旋转角度(弧度制)
     * @param {number} [rotationZ] 沿z轴的旋转角度(弧度制)
     * @return {Array} 三维旋转角度(弧度制)，格式为[x, y, z]，即[getRotationX(), -getRotation(), getRotationZ()]
     */
    r3(rotationX: number, rotationY: number, rotationZ: number): void;

    /**
     * 获取图元在3D拓扑中的三维旋转角度，相当于{@link Node#getRotation3d getRotation3d}
     * @return {Array} 三维旋转角度(弧度制)，格式为[x, y, z]，即[getRotationX(), -getRotation(), getRotationZ()]
     */
    r3(): number[];

    /**
     * 以指定的坐标为中心旋转图元
     * @param {number} x 指定x坐标
     * @param {number} y 指定y坐标
     * @param {number} angle 旋转角度(弧度制)
     */
    rotateAt(x: number, y: number, angle: number): void;

    /**
     * 获取或设置图元在3D拓扑中的尺寸，相当于{@link Node#setSize3d setSize3d}
     * @param {number} width x轴方向的长度
     * @param {number} tall y轴方向的长度
     * @param {number} height z轴方向的长度
     */
    s3(width: number | Array<number>, tall?: number, height?: number): void;

    /**
     * 获取或设置图元在3D拓扑中的尺寸，相当于{@link Node#getSize3d getSize3d}
     * @return {Array} 格式为[x, y, z]，即[getWidth(), getTall(), getHeight()]
     */
    s3(): number[];

    /**
     * 设置图元中心在3D坐标系中的y坐标
     * @param {number} elevation y轴方向的坐标值
     */
    setElevation(elevation: number): void;

    /**
     * 设置图元在2D拓扑中的高度，或3D拓扑中的z轴长度
     * @param {number} height 2D拓扑中的高度，或3D拓扑中的z轴长度
     */
    setHeight(height: number): void;

    /**
     * 设置宿主图元，当图元吸附上宿主图元时，宿主移动或旋转时会带动所有吸附者
     * @param {Data} data 宿主图元
     */
    setHost(data: Data): void;

    /**
     * 设置拓扑上展现的图片信息，在GraphView拓扑图中图片一般以position为中心绘制
     * @param {String|Object} image 注册的图片名或url或矢量对象
     */
    setImage(image: string | Object): void;

    /**
     * 设置图元中心点坐标
     * @param {number} x x坐标
     * @param {number} y y坐标
     */
    setPosition(x: number, y: number): void;

    /**
     * 设置图元中心点在3D拓扑中的三维坐标
     * @param {number} x x坐标
     * @param {number} y y坐标
     * @param {number} z z坐标
     */
    setPosition3d(x: number, y: number, z: number): void;

    /**
     * 设置四元素
     * @param quaternion
     */
    setQuaternion(quaternion: ht.Math.Quaternion): Node;

    /**
     * 设置图元矩形区域
     * @param {number} x x坐标
     * @param {number} y y坐标
     * @param {number} width 宽度
     * @param {number} height 高度
     */
    setRect(x: number, y: number, width: number, height: number): void;

    /**
     * 设置图元的旋转角度，围绕中心点顺时针旋转
     * @param {number} rotation 旋转角度(弧度制)
     */
    setRotation(rotation: number): void;

    /**
     * 设置图元在3D拓扑中的三维旋转角度
     * @param {number} x 沿x轴的旋转角度(弧度制)
     * @param {number} y 沿y轴的旋转角度(弧度制)
     * @param {number} z 沿z轴的旋转角度(弧度制)
     */
    setRotation3d(x: number, y: number, z: number): void;

    /**
     * 设置三维旋转模式<br>
     * 图元在3D拓扑中旋转时，先沿x轴旋转，再沿y轴旋转和先沿y轴旋转，再沿x轴旋转最后的结果是不一样的
     * @param {String} rotationMode 旋转模式，可选值如下：
     * <ul>
     * <li>xyz:先进行x轴旋转，再进行y轴旋转，最后进行z轴旋转</li>
     * <li>xzy:先进行x轴旋转，再进行z轴旋转，最后进行y轴旋转</li>
     * <li>yxz:先进行y轴旋转，再进行x轴旋转，最后进行z轴旋转</li>
     * <li>yzx:先进行y轴旋转，再进行z轴旋转，最后进行x轴旋转</li>
     * <li>zxy:先进行z轴旋转，再进行x轴旋转，最后进行y轴旋转</li>
     * <li>zyx:先进行z轴旋转，再进行y轴旋转，最后进行x轴旋转</li>
     * </ul>
     */
    setRotationMode(rotationMode: string): void;

    /**
     * 设置图元在3D拓扑中沿x轴的旋转角度(弧度制)
     * @param {number} rotationX 旋转角度(弧度制)
     */
    setRotationX(rotationX: number): void;

    /**
     * 设置图元在3D拓扑中沿y轴的旋转角度(弧度制)
     * @param {number} rotationY 旋转角度(弧度制)
     */
    setRotationY(rotationY: number): void;

    /**
     * 设置图元在3D拓扑中沿z轴的旋转角度(弧度制)
     * @param {number} rotationZ 旋转角度(弧度制)
     */
    setRotationZ(rotationZ: number): void;

    /**
     * 设置图元在2D拓扑中的尺寸(宽高)
     * @param {number} width 宽度
     * @param {number} height 高度
     */
    setSize(width: number, height: number): void;

    /**
     * 设置图元在3D拓扑中的尺寸
     * @param {number} width x轴方向的长度
     * @param {number} tall y轴方向的长度
     * @param {number} height z轴方向的长度
     */
    setSize3d(width: number, tall: number, height: number): void;

    /**
     * 设置图元在3D拓扑中的y轴方向的长度
     * @return {number} tall y轴方向的长度
     */
    setTall(tall: number): void;

    /**
     * 设置图元在3D拓扑中的x轴方向的长度
     * @return {number} width x轴方向的长度
     */
    setWidth(width: number): void;

    /**
     * 在当前坐标的基础上增加x、y、z三个方向的平移值，{@link Node#translate3d translate3d}的缩写
     * @param {number} tx x轴方向的平移值
     * @param {number} ty y轴方向的平移值
     * @param {number} tz z轴方向的平移值
     */
    t3(tx: number, ty: number, tz: number): void;

    /**
     * 在当前坐标的基础上增加x、y两个方向的平移值
     * @param {number} tx x轴方向的平移值
     * @param {number} ty y轴方向的平移值
     */
    translate(tx: number, ty: number): void;

    /**
     * 在当前坐标的基础上增加x、y、z三个方向的平移值，{@link Node#t3 t3}的缩写
     * @param {number} tx x轴方向的平移值
     * @param {number} ty y轴方向的平移值
     * @param {number} tz z轴方向的平移值
     */
    translate3d(tx: number, ty: number, tz: number): void;

    /**
     * 沿向量平移
     * @param {Array} direction 方向向量
     * @param {number} distance 平移距离
     */
    translate3dBy(direction: any, distance: number): void;

    /**
     * 沿向量[0, 0, -1]平移
     * @param {number} distance 平移距离
     */
    translateBack(distance: number): void;

    /**
     * 沿向量[0, -1, 0]平移
     * @param {number} distance 平移距离
     */
    translateBottom(distance: number): void;

    /**
     * 沿向量[0, 0, 1]平移
     * @param {number} distance 平移距离
     */
    translateFront(distance: number): void;

    /**
     * 沿向量[-1, 0, 0]平移
     * @param {number} distance 平移距离
     */
    translateLeft(distance: number): void;

    /**
     * 沿向量[1, 0, 0]平移
     * @param {number} distance 平移距离
     */
    translateRight(distance: number): void;

    /**
     * 沿向量[0, 1, 0]平移
     * @param {number} distance 平移距离
     */
    translateTop(distance: number): void;

    /**
     * 将全局坐标转换为本地矢量坐标，得到结果需再加上 anchor * size
     * @param point
     */
    toLoacl(point: Point): Point;

    /**
     * 将矢量本地坐标转换为图纸全局坐标
     * @param point
     */
    toGlobal(point: Point): Point;

    /**
     * 更新吸附于此节点的节点
     */
    updateAttach(): void;

    updateLayoutParameters(host: Node, params: any): void;
  }
  export class CSGShape extends Shape {}
  export class CSGNode extends Node {}
  export class CSGBox extends CSGNode {}

  export class DoorWindow extends CSGNode {}

  export class Edge extends Data {
    constructor(source?: Node, target?: Node);

    /**
     * 判断目前是否可以设置为连线端点，无需调用，需要可重载此方法
     * @param data 目标
     * @param type 类型，为 source 或 target
     */
    canSetSourceTarget(data: Data, type: string): boolean;

    /**
     * 判断当前图元上是否有代理连线
     * @return {boolean}
     */
    hasAgentEdges(): boolean;

    /**
     * 触发连线分组合并展开
     */
    toggle(): void;

    /**
     * 获取当前图元代理的连线集合
     * @return {List}
     */
    getAgentEdges(): List;

    /**
     * 获取连线组，起始和目标节点间有多条连线时才有值
     * @return {EdgeGroup} 连线分组
     */
    getEdgeGroup(): EdgeGroup;

    /**
     * 获取当前连线在连线组内的索引
     * @return {number} 索引
     */
    getEdgeGroupIndex(): number;

    /**
     * 获取代理的起始于该图元的连线
     * @return {List}
     */
    getSourceAgentEdges(): List;

    /**
     * 获取跟图元关联的并起始于该图元的连线(不包括代理的连线)
     * @return {List}
     */
    getSourceEdges(): List;

    /**
     * 获取图元代理的结束于该图元的连线
     * @return {List}
     */
    getTargetAgentEdges(): List;

    /**
     * 获取跟图元关联的并结束于该图元的连线(不包括代理的连线)
     * @return {List}
     */
    getTargetEdges(): List;

    /**
     * 获取当前连线所在的连线组中的连线数
     * @return {number} 连线数
     */
    getEdgeGroupSize(): number;

    /**
     * 获取起始图元
     * @return {Node} 起始图元
     */
    getSource(): Node;

    /**
     * 获取拓扑上连接的起始图元(代理)
     * @return {Node} 起始图元(代理)
     */
    getSourceAgent(): Node;

    /**
     * 获取目标图元
     * @return {Node} 目标图元
     */
    getTarget(): Node | Edge;

    /**
     * 获取拓扑上连接的目标图元(代理)
     * @return {Node} 目标图元(代理)
     */
    getTargetAgent(): Node;

    /**
     * 获取当前连线是否为所在连线组的代理
     * @return {boolean}
     */
    isEdgeGroupAgent(): boolean;

    /**
     * 判断当前连线在连线组中是否被隐藏
     * @return {boolean}
     */
    isEdgeGroupHidden(): boolean;

    /**
     * 是否是自环(起始和目标是同一个图元)
     * @return {boolean}
     */
    isLooped(): boolean;

    /**
     * 设置起始图元
     * @param {Node} source 起始图元
     */
    setSource(source: Node): void;

    /**
     * 设置目标图元
     * @param {Node} target 目标图元
     */
    setTarget(target: Node): void;
  }

  /**
   * 三维灯光
   */
  export class Light extends Node {}

  /**
   * 文本类，应用 style 中的 text 展示内容
   */
  export class Text extends Node {}

  /**
   * 点云，将一大堆需要重复展示的内容聚合起来，一次性绘制，提高页面的绘制性能,提供的相对应的样式如下
   * points.image点云节点上，展示的贴图，包括，rect / circle / 图片 / 矢量，该样式与 points.color 互斥，并且优先级高于 points.color 样式
   * points.color点云节点上，展示的颜色值，只有当未指定 points.image 样式时才生效
   * points.size点云节点展示的大小，这边要求点云设置的贴图大小，必须是正方形比例的贴图，如果贴图是非正方形，会被拉伸变形
   * points.transparent点云节点是否透明
   * points.opacity点云节点的透明度，取值范围 0 ~ 1
   */
  export class Points extends Node {
    /**
     * 设置点云节点的点位信息
     * @param points 格式为：[ x1, y1, z1, x2, y2, z2, ... xn, yn, zn ]
     */
    setPoints(points: number[]): void;

    /**
     * 更新某个具体位置的点位信息
     * @param index 要更新的点位下标
     * @param point 要更新的点位信息，格式为：[ x, y, z ]
     */
    setPoint(index: number, point: number[]): void;

    /**
     * 设置点云节点中，点位对应的颜色信息
     * @param color
     */
    setPointsColor(color: string[]): void;

    /**
     * 更新某个具体位置的点位颜色信息
     * @param index 更新的点位下标更新的点位下标
     * @param color 更新点位的颜色值
     */
    setPointColor(index: number, color: string): void;

    /**
     * 设置点云节点中，点位对应的大小值
     * @param size
     */
    setPointsSize(size: number[]): void;

    /**
     * 更新某个具体位置的点位大小值
     * @param index 更新的点位下标更新的点位下标
     * @param size 更新点位的大小值
     */
    setPointSize(index: number, size: number): void;
  }
  /**
   * 组图元类型，可以包含Node和其它孩子元素，可双击展开或关闭
   * @constructor
   * @extends Node
   */
  export class Group {
    /**
     * 判断Group对象是否处于展开状态
     * @return {boolean}
     */
    isExpanded(): boolean;

    /**
     * 设置Group对象的展开关闭状态
     * @param {boolean} expanded 为true展开，false关闭
     */
    setExpanded(expanded: boolean): void;

    /**
     * 切换展开关闭状态
     */
    toggle(): void;

    /**
     * 获取指定直接点区域
     * @param child
     */
    getChildRect(child: Node): Rect;

    /**
     * 获取所有孩子节点的区域
     */
    getChildrenRect(): Rect;
  }

  /**
   * 子网类
   */
  export class SubGraph extends Data {}

  /**
   * 多边形元素，由多点组合形成的多边形，如果不填充背景色，可作为折线或曲线
   * @constructor
   * @extends Node
   */
  export class Shape extends Node {
    /**
     * 增加点
     * @param {Object} point 坐标点
     * @param {number} [index] 索引，如果不指定索引则加到最后
     */
    addPoint(point: Object, index?: number): void;

    /**
     * 更新多边形，如当 points 数组属性变化时，可以通过此方法显示更新，可用简写 fs
     */
    fireShapeChange(): void;

    /**
     * 更新多边形，如当 points 数组属性变化时，可以通过此方法显示更新，fireShapeChange 的简写
     */
    fs(): void;

    /**
     * 计算Shape的长度
     * @param {number} [resolution] 曲线分段微分数，默认为12，数字越大计算结果越精确，同时也越耗费性能
     * @return {number}
     */
    getLength(resolution: number): number;

    /**
     * 获取点集合
     * @return {List}
     */
    getPoints(): List;

    getPointsMatrix2d(): any;

    getPointsMatrix3d(): any;

    /**
     * 获取线段类型集合
     * @return {List}
     */
    getSegments(): List;

    /**
     * 获取 shape 在三维中的 y 坐标
     */
    getShapeElevation(): number;

    /**
     * 获取3D拓扑中的线段厚度，小于0时可实现类似地板的填充效果
     * @return {number}
     */
    getThickness(): number;

    /**
     * 是否闭合Shape
     * @return {boolean}
     */
    isClosePath(): boolean;

    /**
     * 根据索引删除点
     * @param {number} index 索引
     */
    removePointAt(index: number): void;

    /**
     * 设置是否闭合Shape
     * @param {boolean} v
     */
    setClosePath(v: boolean): void;

    setHeightForce(height: number): void;

    /**
     * 修改索引指向的点坐标
     * @param {number} index 索引
     * @param {Object} point 新坐标点
     */
    setPoint(index: number, point: Object): void;

    /**
     * 设置Shape的点
     * @param {List| Array} points
     */
    setPoints(points: List | Array<Object>): void;

    /**
     * 设置Shape的线段类型
     * @param {List} segments
     */
    setSegments(segments: List | Array<Object>): void;

    /**
     * 设置3D拓扑中的线段厚度，小于0时可实现类似地板的填充效果
     * @param {number} thickness
     */
    setThickness(thickness: number): void;

    setWidthForce(width: number): void;

    /**
     * 偏移所有点
     * @param x x 轴，
     * @param y y 轴，三维中对应 z 轴
     * @param e 高度，三维中对应 y 轴
     */
    shiftPoints(x?: number, y?: number, e?: number): void;

    /**
     * @param e 高度，三维中对应 y 轴
     */
    shiftPoints(e: number): void;

    /**
     * 构建一个新的Shape点集合并返回
     * @return {List}
     */
    toPoints(): List;

    /**
     * 构建一个新的线段类型集合并返回
     * @return {List}
     */
    toSegments(): List;
  }
  export class Polyline extends Shape {}

  /**
   * Block 可以将所有孩子节点区域结合，形成一个虚拟的节点，本身不绘制内容，但是显示隐藏、大小、旋转变化会影响其子节点
   */
  export class Block extends Node {
    /**
     * 是否可以点击穿透，当选中时再次选择可以选择其子节点，当 block 本身不可选中时则可以直接选中子节点
     */
    isClickThroughEnabled(): boolean;

    /**
     * 是否同步大小
     */
    isSyncSize(): boolean;

    /**
     * 设置是否可点击穿透，为 true 当选中时再次选择可以选择其子节点，当 block 本身不可选中时则可以直接选中子节点
     * @param enable
     */
    setClickThroughEnabled(enable: boolean): void;

    /**
     * 设置是否同步大小
     * @param syncSize
     */
    setSyncSize(syncSize: boolean): void;
  }

  export class RefGraph extends Block {
    /**
     * 设置引用图纸地址
     * @param ref
     */
    setRef(ref: string): void;
    /**
     * 获取引用图纸地址
     */
    getRef(): string;

    /**
     * 更新引用
     */
    updateRef(): void;
  }

  /**
   * 连线分组
   * @constructor
   */
  export class EdgeGroup {
    /**
     * 提供一个回调函数遍历此分组的所有连线
     * @param {Function} func 遍历函数
     * @param {Object} [scope] 函数域
     * @example
     * edgeGroup.each(function(edge) {
     *     console.log(edge);
     * });
     */
    each(func: Function, scope?: any): void;

    /**
     * 提供一个回调函数遍历相同起始和目标图元之间其它分组中的连线
     * @param {Function} func 遍历函数
     * @param {Object} [scope] 函数域
     * @example
     * edgeGroup.eachSiblingEdge(function(edge) {
     *     console.log(edge);
     * });
     */
    eachSiblingEdge(func: Function, scope?: any): void;

    /**
     * 根据索引获取分组中的连线
     * @param {number} index 索引
     * @return {Edge}
     */
    get(index: number): void;

    /**
     * 获取分组中所有连线
     * @return {List}
     */
    getEdges(): List;

    /**
     * 获取相同起始和目标图元之间的其它分组
     * @return {List}
     */
    getSiblings(): List;

    /**
     * 获取参数连线在分组中的索引
     * @param {Edge} edge 连线
     * @return {number}
     */
    indexOf(edge: Edge): void;

    /**
     * 获取分组中的连线数量
     * @return {number}
     */
    size(): number;
  }
  /**
   * 选择模型管理DataModel模型中Data对象的选择状态，
   * 每个DataModel对象都内置一个SelectionModel选择模型，
   * 控制这个SelectionModel即可控制所有绑定该DataModel的视图组件的对象选择状态，
   * 这意味着共享同一DataModel的组件默认就具有选中联动功能。<br>
   * 如果希望某些组件不与其他组件选中联动，
   * 可通过调用view.setSelectionModelShared(false)，
   * 这样该view将创建一个专属的SelectionModel实例。
   * @constructor
   */
  export class SelectionModel {
    /**
     * 增加自身属性变化事件监听器
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
     */
    addPropertyChangeListener(
      listener: Function,
      scope?: any,
      ahead?: boolean,
    ): void;

    /**
     * 增加自身属性变化事件监听器，{@link SelectionModel#addPropertyChangeListener addPropertyChangeListener}的缩写
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
     */
    mp(listener: Function, scope?: any, ahead?: boolean): void;

    /**
     * 删除自身属性变化事件监听器
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     */
    removePropertyChangeListener(listener: Function, scope?: any): void;

    /**
     * 删除自身属性变化事件监听器，{@link SelectionModel#removePropertyChangeListener removePropertyChangeListener}的缩写
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     */
    ump(listener: Function, scope?: any): void;

    /**
     * 增加监听器，监听选中变化事件
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
     * @example
     * dataModel.addSelectionChangeListener(function(event) {
     *      //event格式：
     *      {
     *      	kind: "set",//事件类型set|remove|append|clear
     *      	datas: datas,//包含所有选中状态变化的数据元素，之前选中现在取消选中，和之前没选中现在被选中的数据元素
     *      }
     * });
     */
    addSelectionChangeListener(
      listener: Function,
      scope?: any,
      ahead?: boolean,
    ): void;

    /**
     * 增加监听器，监听选中变化事件，{@link SelectionModel#addSelectionChangeListener addSelectionChangeListener}的缩写
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
     * @example
     * dataModel.ms(function(event) {
     *      //event格式：
     *      {
     *      	kind: "set",//事件类型set|remove|append|clear
     *      	datas: datas,//包含所有选中状态变化的数据元素，之前选中现在取消选中，和之前没选中现在被选中的数据元素
     *      }
     * });
     */
    ms(listener: Function, scope?: any, ahead?: boolean): void;

    /**
     * 删除监听选中变化事件的监听器
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     */
    removeSelectionChangeListener(listener: Function, scope?: any): void;

    /**
     * 删除监听选中变化事件的监听器，{@link SelectionModel#removeSelectionChangeListener removeSelectionChangeListener}的缩写
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     */
    ums(listener: Function, scope?: any): void;

    /**
     * 追加选中一个或多个数据元素，参数可为单个数据元素，也可为List或Array数组
     * @param {Data|List|Array} datas 数据元素
     */
    appendSelection(datas: Data | List | Data[]): void;

    /**
     * 追加选中一个或多个数据元素，参数可为单个数据元素，也可为List或Array数组，{@link SelectionModel#appendSelection appendSelection}的缩写
     * @param {Data|List|Array} datas 数据元素
     */
    as(datas: Data | List | Data[]): void;

    /**
     * 取消所有选中数据元素
     */
    clearSelection(): void;

    /**
     * 取消所有选中数据元素，{@link SelectionModel#clearSelection clearSelection}的缩写
     */
    cs(): void;

    /**
     * 判断data对象是否被选中
     * @param {Data} data 要判断的data对象
     * * @returns {boolean} 是否选中
     */
    contains(data: Data): boolean;

    /**
     * 判断data对象是否被选中，{@link SelectionModel#contains contains}的缩写
     * @param {Data} data 要判断的data对象
     * @returns {boolean} 是否选中
     */
    co(data: Data): boolean;

    /**
     * 获取{@link SelectionModel#getDataModel getDataModel}的缩写
     */
    dm(): DataModel;

    /**
     * 设置数据模型 {@link SelectionModel#getDataModel getDataModel}的缩写
     * @return {DataModel} dataModel
     */
    dm(dataModel: DataModel): void;

    /**
     * 获取{@link DataModel DataModel}
     * @return {DataModel} dataModel
     */
    getDataModel(): DataModel;

    /**
     * 提供一个回调函数遍历此选中模型
     * @param {Function} func 遍历函数
     * @param {Object} [scope] 函数域
     * @example
     * selectionModel.each(function(data) {
     *     console.log(data: Data);
     * });
     */
    each(func: Function, scope?: any): void;

    /**
     * 返回首个被选中的数据元素，如果没有选中数据元素则返回空
     * @return {Data} 首个被选中的数据元素
     */
    getFirstData(): Data | void;

    /**
     * 返回首个被选中的数据元素，如果没有选中数据元素则返回空，此方法是{@link SelectionModel#getFirstData getFirstData}的缩写
     * @return {Data} 首个被选中的数据元素
     */
    fd(): Data | void;

    /**
     * 返回最后被选中的数据元素，如果没有选中数据元素则返回空
     * @return {Data} 最后被选中的数据元素
     */
    getLastData(): Data | void;

    /**
     * 返回最后被选中的数据元素，如果没有选中数据元素则返回空，{@link SelectionModel#getLastData getLastData}的缩写
     * @return {Data} 最后被选中的数据元素
     */
    ld(): Data | void;

    /**
     * 返回选中过滤器函数<br>
     * 有些数据元素不希望被用户选中，可以通过设置此过滤器实现
     * @return {Function} 选中过滤器函数
     */
    getFilterFunc(): void;

    /**
     * 设置选中过滤器函数<br>
     * 有些数据元素不希望被用户选中，可以通过设置此过滤器实现
     * @param {Function} func 选中过滤器函数
     * @example //禁止选中name为test的数据元素
     * selectionModel.setFilterFunc(function(data) {
     *     if (data.getName() === 'test') {
     *     	   return false;
     *     } else {
     *  	   return true;
     *     }
     * });
     */
    setFilterFunc(func: Function): void;

    /**
     * 获取所有被选中数据元素集合，注意不可直接对返回的集合进行增删操作，
     * 如果需要增删操作，应使用toSelection方法
     * @return {List} 被选中的数据元素集合
     */
    getSelection(): void;

    /**
     * 获取所有被选中数据元素集合，注意不可直接对返回的集合进行增删操作，
     * 如果需要增删操作，应使用toSelection方法
     * @return {List} 被选中的数据元素集合
     */
    toSelection(matchFunc: Function, scope?: any): void;

    /**
     * 以matchFunc为过滤函数构建新的元素集合并返回
     * @param {Function} [matchFunc] 过滤函数
     * @param {Object} [scope] 函数域
     * @return {List} 元素集合
     */
    setSelection(datas: List | Data | any[]): List;

    /**
     * 设置选中数据元素，参数可为单个数据元素，也可为List或Array数组，{@link SelectionModel#setSelection setSelection}的缩写
     * @param {Data|List|Array} datas 数据元素
     */
    ss(datas: List | Data | any[]): List;

    /**
     * 获取选中模式
     * @default multiple
     * @return {String} none|single|multiple
     */
    getSelectionMode(): string;

    /**
     * 设置选中模式，可选值：
     * <ul>
     * <li>none:不可选中</li>
     * <li>single:只能选中一个数据元素</li>
     * <li>multiple:可以选中多个数据元素</li>
     * </ul>
     * @default multiple
     * @param {String} mode 选中模式
     */
    setSelectionMode(mode: string): void;

    /**
     * 判断是否有选中的数据元素
     * @return {boolean}
     */
    isEmpty(): boolean;

    /**
     *
     * 判断数据元素是否可被选中
     * @param {Data} data 要判断的数据元素
     * @return {boolean}
     */
    isSelectable(data: Data): boolean;

    /**
     * 取消选中数据元素，参数可为单个数据元素，也可为List或Array数组
     * @param {Data|List|Array} datas 数据元素
     */
    removeSelection(datas: Data | List | Data[]): void;

    /**
     * 取消选中数据元素，参数可为单个数据元素，也可为List或Array数组，{@link SelectionModel#removeSelection removeSelection}的缩写
     * @param {Data|List|Array} datas 数据元素
     */
    rs(datas: Data | List | Data[]): void;

    /**
     * 选中DataModel中的所有数据元素
     */
    selectAll(): void;

    /**
     * 选中DataModel中的所有数据元素，{@link SelectionModel#selectAll selectAll}的缩写
     */
    sa(): void;

    /**
     * 获取选中模型中数据元素的个数
     * @return {number}
     */
    size(): number;
  }

  /**
   * 数据模型
   */
  export class DataModel {
    /**
     * 设置attr属性
     * @param {String} name 属性名
     * @param {Object} [value] 属性值
     * @returns {Object}
     */
    a(name: string, value: any): void;

    /**
     * 获取attr属性
     * @param {String} name 属性名
     * @param {Object} [value] 属性值
     * @returns {Object}
     */
    a(name: string): any;

    /**
     * 设置属性
     * @param obj
     */
    a(obj: Object): void;

    /**
     * 增加数据元素
     * @param {Data} data 数据元素
     * @param {number} [index] 插入索引
     */
    add(data: Data, index?: number): void;

    /**
     * 增加一条记录
     * @param action
     */
    addHistory(action: any): void;

    /**
     * 添加调度任务
     * @param task 调度任务对象
     */
    addScheduleTask(task: ScheduleTask): void;

    /**
     * 增加序列化监听
     * @param listener
     * @param scope
     * @param ahead
     */
    addSerializeListener(
      listener: Function,
      scope?: any,
      ahead?: boolean,
    ): void;

    /**
     * 将节点往前一级，即数组下标往后一级
     * @param data 对应节点
     */
    bringForward(data: Data): void;

    /**
     * 将节点置顶，即数组下标移至最后
     * @param data
     */
    bringToFront(data: Data): void;

    /**
     * 将选中的节点往前移动一级，即数组下标往后一级
     * @param sm 选择模型，若不传则使用数据模型自带的
     */
    bringSelectionForward(sm?: SelectionModel): void;

    /**
     * 将选中节点页面中置顶，即数组下标移至最后
     * @param sm 选择模型，若不传则使用数据模型自带的
     */
    bringSelectionToFront(sm?: SelectionModel): void;

    /**
     * 清空所有历史记录
     */
    clearHistoryManager(): void;

    /**
     * 禁用撤销重做功能
     */
    disableHistoryManager(): void;

    /**
     * 启用撤销重做功能
     */
    enableHistoryManager(): void;

    /**
     * 派发属性变化事件，可使用fp的简写方式
     * @param property 属性
     * @param oldValue 旧值
     * @param newValue 新值
     */
    firePropertyChange(property: string, oldValue: any, newValue: any): void;

    /**
     * 主动派发序列化事件
     * @param event
     */
    fireSerializeEvent(event: any): void;

    /**
     * 派发属性变化事件，firePropertyChange 方法的简写
     * @param property 属性
     * @param oldValue 旧值
     * @param newValue 新值
     */
    fp(property: string, oldValue: any, newValue: any): void;

    /**
     * 获取背景颜色，这一属性在部分视图组件中生效
     */
    getBackground(): string;

    /**
     * 获取环境光贴图
     */
    getEnvmap(): string;

    getFullscreenDatas(): any;

    /**
     * 获取拓扑中已定义的层
     * @return {Array}
     */
    getLayers(): Array<Object>;

    /**
     * 移除序列化监听
     * @param listener
     * @param scope
     */
    removeSerializeListener(listener: Function, scope?: any): void;

    /**
     * 增加数据模型增删变化事件监听器
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
     * @example
     * dataModel.addDataModelChangeListener(function(event) {
     *      //event格式：
     *      {
     *      	kind: "add"|"remove"|"clear",//事件类型
     *      	data: data//事件相关data
     *      }
     * });
     */
    addDataModelChangeListener(
      listener: Function,
      scope?: any,
      ahead?: boolean,
    ): void;

    /**
     * 增加数据模型增删变化事件监听器，{@link DataModel#addDataModelChangeListener addDataModelChangeListener}的缩写
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
     * @example
     * dataModel.mm(function(event) {
     *      //event格式：
     *      {
     *      	kind: "add"|"remove"|"clear",//事件类型
     *      	data: data//事件相关data
     *      }
     * });
     */
    mm(listener: Function, scope?: any, ahead?: boolean): void;

    /**
     * 增加模型中Data元素属性变化事件监听器
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
     * @example
     * dataModel.addDataPropertyChangeListener(function(event) {
     *      //event格式：
     *      {
     *      	property: "name",//发生变化的属性
     *      	data: data,//属性发生变化的data
     *      	oldValue: 0,//旧值
     *      	newValue: 1//新值
     *      }
     * });
     */
    addDataPropertyChangeListener(
      listener: Function,
      scope?: any,
      ahead?: boolean,
    ): void;

    /**
     * 增加模型中Data元素属性变化事件监听器，{@link DataModel#addDataPropertyChangeListener addDataPropertyChangeListener}的缩写
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
     * @example
     * dataModel.md(function(event) {
     *      //event格式：
     *      {
     *      	property: "name",//发生变化的属性
     *      	data: data,//属性发生变化的data
     *      	oldValue: 0,//旧值
     *      	newValue: 1//新值
     *      }
     * });
     */
    md(listener: Function, scope?: any, ahead?: boolean): void;

    /**
     * 增加监听器，监听Data在DataModel中的层次(用于TreeView、TreeTableView等)变化事件
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
     * @example
     * dataModel.addHierarchyChangeListener(function(event) {
     *      //event格式：
     *      {
     *      	data: data,//事件相关Data
     *      	oldIndex: 0,//旧层次
     *      	newIndex: 1//新层次
     *      }
     * });
     */
    addHierarchyChangeListener(
      listener: Function,
      scope?: any,
      ahead?: boolean,
    ): void;

    /**
     * 增加监听器，监听Data在DataModel中的层次(用于TreeView、TreeTableView等)变化事件，{@link DataModel#addHierarchyChangeListener addHierarchyChangeListener}的缩写
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
     * @example
     * dataModel.mh(function(event) {
     *      //event格式：
     *      {
     *      	data: data,//事件相关Data
     *      	oldIndex: 0,//旧层次
     *      	newIndex: 1//新层次
     *      }
     * });
     */
    mh(listener: Function, scope?: any, ahead?: boolean): void;

    /**
     * 增加监听器，监听Data在DataModel中的索引(用于拓扑组件)变化事件
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
     * @example
     * dataModel.addIndexChangeListener(function(event) {
     *      //event格式：
     *      {
     *      	data: data,//事件相关Data
     *      	oldIndex: 0,//旧索引
     *      	newIndex: 1//新索引
     *      }
     * });
     */
    addIndexChangeListener(
      listener: Function,
      scope?: any,
      ahead?: boolean,
    ): void;

    /**
     * 增加自身属性变化事件监听器，{@link DataMpdel#addPropertyChangeListener addPropertyChangeListener}的缩写
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
     */
    mp(listener: Function, scope?: Object, ahead?: boolean): void;
    /**
     * 增加自身属性变化事件监听器
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
     */
    addPropertyChangeListener(
      listener: Function,
      scope?: Object,
      ahead?: boolean,
    ): void;

    /**
     * 移除自身属性变化事件监听器，{@link DataMpdel#addPropertyChangeListener removePropertyChangeListener}的缩写
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     */
    ump(listener: Function, scope?: Object): void;

    /**
     * 移除自身属性变化事件监听器
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     */
    removePropertyChangeListener(listener: Function, scope?: Object): void;

    /**
     * 以树结构反向顺序遍历Data对象
     * @param {Function} func 遍历函数
     * @param {Data} [data] 遍历起点元素
     * @param {Object} [scope] 函数域
     */
    reverseEachByHierarchical(func: Function, data: Data, scope?: any): void;

    /**
     * 类似数据库里开启事务，从beginTransaction()到endTransaction()之间所有的修改可被一次性撤销或重做
     */
    beginTransaction(): void;

    /**
     * 删除容器中所有Data对象，该操作一次性清空，没有逐个remove的过程，不会影响Data父子关系
     */
    clear(): void;

    /**
     * 判断容器是否包含该data对象
     * @param {Data} data 要判断的数据元素
     * @return {boolean} 容器是否包含参数data
     */
    contains(data: boolean): boolean;

    /**
     * 反序列化数据到数据模型
     * @param {String} json 要被反序列化的json字符串
     * @param {Data} rootParent 指定反序列化的数据元素的父元素
     * @param {boolean} setId 反序列化后的数据元素是否保留原id
     * @return {List} 被反序列化的数据元素集合
     */
    deserialize(
      json: string | Object,
      rootParent?: Data,
      setId?: boolean,
    ): List;

    /**
     * 提供一个回调函数遍历此容器
     * @param {Function} func 遍历函数
     * @param {Object} [scope] 函数域
     * @example
     * dataModel.each(function(data) {
     *     console.log(data: Data);
     * });
     */
    each(func: Function, scope?: any): void;

    /**
     * 以data为起始深度优先遍历Data对象
     * @param {Function} func 遍历函数
     * @param {Data} [data] 遍历起点元素
     * @param {Object} [scope] 函数域
     */
    eachByDepthFirst(func: Function, data?: Data, scope?: any): void;

    /**
     * 以data为起始广度优先遍历Data对象
     * @param {Function} func 遍历函数
     * @param {Data} [data] 遍历起点元素
     * @param {Object} [scope] 函数域
     */
    eachByBreadthFirst(func: Function, data?: Data, scope?: any): void;

    /**
     * 以树结构顺序遍历Data对象
     * @param {Function} func 遍历函数
     * @param {Data} [data] 遍历起点元素
     * @param {Object} [scope] 函数域
     */
    eachByHierarchical(func: Function, data?: Data, scope?: any): void;

    /**
     * 类似数据库里开启事务，从beginTransaction()到endTransaction()之间所有的修改可被一次性撤销或重做
     */
    endTransaction(): void;

    /**
     * 获取attr属性
     * @param {String} name 属性名
     * @returns {Object}
     */
    getAttr(name: string): any;

    /**
     * 设置attr属性
     * @param {String} name 属性名
     * @param {Object} value 属性值
     */
    setAttr(name: string, value: any): Data;

    /**
     * 设置attr属性
     * @param {Object} value 属性值
     */
    setAttr(value: Object): Data;

    /**
     * 获取attr属性对象，该属性默认为空，用于存储用户业务信息
     * @return {Object} attr属性对象
     */
    getAttrObject(): Object;

    /**
     * 将节点往后一级，即数组下标往前一级
     * @param data 对应节点
     */
    sendBackward(data: Data): void;

    /**
     * 将节点置底，即数组下标移至开头
     * @param data
     */
    sendToBack(data: Data): void;

    /**
     * 将选中的节点往后移动一级，即数组下标往前一级
     * @param sm 选择模型，若不传则使用数据模型自带的
     */
    sendSelectionBackward(sm?: SelectionModel): void;

    /**
     * 将选中节点页面中置底，即数组下标移至开头
     * @param sm 选择模型，若不传则使用数据模型自带的
     */
    sendSelectionToBack(sm?: SelectionModel): void;

    /**
     * 设置attr属性对象，该属性默认为空，用于存储用户业务信息
     * @param {Object} attrObject attr属性对象
     */
    setAttrObject(attrObject: Object): void;

    /**
     * 根据id快速查找Data对象，模型内部维护着一个id->data的映射表，因此查找速度比遍历方式快
     * @param {String|number} id 要查找的id
     * @return {Data} 查找到的Data
     */
    getDataById(id: string | number): Data;

    /**
     * 根据tag快速查找，模型内部维护着一个tag->data的映射表，因此查找速度比遍历方式快
     * @param {String|number} tag 要查找的tag
     * @return {Data} 查找到的Data
     */
    getDataByTag(tag: string | number): Data;

    /**
     * 获取所有添加到容器的Data数据集合
     * @return {List}
     */
    getDatas(): List;

    /**
     * 获取名字
     */
    getName(): string;

    /**
     * 获取历史管理器
     * @return {HistoryManager}
     */
    getHistoryManager(): HistoryManager;

    /**
     * 获取后处理相关数据，后处理是 Bloom / Dof / 色彩饱和度
     */
    getPostProcessingData(): any;

    /**
     * 获取镜反射对象
     */
    getReflectors(): any;

    /**
     * 获取所有parent为空的Data对象
     * @return {List}
     */
    getRoots(): List;

    /**
     * 此函数返回一个map，决定序列化时哪些attr属性可被序列化，默认所有attr对象里的属性都会被序列化
     * @example
     * function(){
     *     var name, map = ;
     *     for (name in this._attrObject) {
     *         map[name] = 1;
     *     }
     *     return map;
     * }
     * @return {Object} 需要被序列化的attr属性map
     */
    getSerializableAttrs(): Object;

    /**
     * 获取和data同父子层次的兄弟数组，如果data父亲为空，则返回dataModel.getRoots()
     * @param {Data} data 目标data
     * @return {List}
     */
    getSiblings(data: Data): List;

    /**
     * 获取当前数据的 tag map 对象
     */
    getTagMap(): any;

    /**
     * 默认的数据属性变更处理函数
     * @param event
     */
    handleDataPropertyChange(event: any): void;

    /**
     * 是否自动调整data在容器中索引顺序
     * @return {boolean}
     */
    isAutoAdjustIndex(): boolean;

    /**
     * 判断容器是否为空
     * @return {boolean}
     */
    isEmpty(): boolean;

    /**
     * 获取是否树层次结构渲染
     */
    isHierarchicalRendering(): boolean;

    /**
     * 是否正在序列化中
     */
    isDeserializing(): boolean;

    /**
     * 移动data到同层兄弟数组中的下一个位置
     * @param {Data} data 要移动的数据元素
     */
    moveDown(data: Data): void;

    /**
     * 移动当前选中的数据元素到同层兄弟数组中的下一个位置
     * @param {SelectionModel} [sm] 要操作的选中模型，如果为空，使用dataModel自身绑定的选中模型
     */
    moveSelectionDown(sm: SelectionModel | null): void;

    /**
     * 移动当前选中的数据元素到同层兄弟数组的底部
     * @param {SelectionModel} [sm] 要操作的选中模型，如果为空，使用dataModel自身绑定的选中模型
     */
    moveSelectionToBottom(sm: SelectionModel | null): void;

    /**
     * 获取该容器的选择模型
     * @return {SelectionModel}
     */
    getSelectionModel(): SelectionModel;

    /**
     * 移动当前选中的数据元素到同层兄弟数组的顶部
     * @param {SelectionModel} [sm] 要操作的选中模型，如果为空，使用dataModel自身绑定的选中模型
     */
    moveSelectionToTop(sm: SelectionModel | null): void;

    /**
     * 移动当前选中的数据元素到同层兄弟数组中的上一个位置
     * @param {SelectionModel} [sm] 要操作的选中模型，如果为空，使用dataModel自身绑定的选中模型
     */
    moveSelectionUp(sm: SelectionModel | null): void;

    /**
     * 移动数据元素到同层兄弟数组中的指定索引
     * @param {Data} data 要移动的数据元素
     * @param {number} newIndex 目标索引
     */
    moveTo(data: Data, newIndex: number): void;

    /**
     * 移动数据元素到同层兄弟数组的底部
     * @param {Data} data 要移动的数据元素
     */
    moveToBottom(data: Data): void;

    /**
     * 移动数据元素到同层兄弟数组的顶部
     * @param {Data} data 要移动的数据元素
     */
    moveToTop(data: Data): void;

    /**
     * 移动数据元素到同层兄弟数组中的上一个位置
     * @param {Data} data 要移动的数据元素
     */
    moveUp(data: Data): void;

    /**
     * 将指定节点移动至新下标位置
     * @param data 节点
     * @param newIndex 新下标
     * @param oldIndex 旧下标
     */
    moveToIndex(data: Data, newIndex: number, oldIndex?: number): void;

    /**
     * 数据元素添加的回调函数，可重载做后续处理
     * @param {Data} data 新添加的数据元素
     */
    onAdded(data: Data): void;

    /**
     * 数据元素属性变化回调函数，可重载做后续处理
     * @param {Data} data 发生变化的数据元素
     * @param {Object} e 事件信息
     */
    onDataPropertyChanged(data: Data, e: Object): void;

    /**
     * 历史记录发生变化时的回调，可以重载做额外处理
     */
    onHistoryManagerChanged(): void;

    /**
     * 数据元素删除时回调函数，可重载做后续处理
     * @param {Data} data 被删除的数据元素
     */
    onRemoved(data: Data): void;

    /**
     * 删除数据元素，该操作有以下副作用：
     * <ul>
     * <li>其子孙被递归从DataModel中删除</li>
     * <li>被断开父子关系data.setParent(null)</li>
     * <li>Edge类型通过edge.setSource(null)和data.setTarget(null)断开节点关系</li>
     * <li>Node类型会将其关联的连线从DataModel中删除</li>
     * <li>Node类型通过data.setHost(null)断开与宿主吸附节点关系</li>
     * </ul>
     * @param {Data} data 要删除的数据元素
     */
    remove(data: Data): void;

    /**
     * 通过id删除数据元素
     * @param {number} id 要删除的数据元素id
     */
    removeDataById(id: string | number): void;

    /**
     * 通过tag删除数据元素
     * @param {String} tag 要删除的数据元素tag
     */
    removeDataByTag(tag: string): void;

    /**
     * 删除数据模型增删变化事件监听器
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     */
    removeDataModelChangeListener(listener: Function, scope?: any): void;

    /**
     * 删除调度任务
     * @param task 调度任务对象，注意必须是 add 时的同一引用对象
     */
    removeScheduleTask(task: ScheduleTask): void;

    /**
     * 删除数据模型增删变化事件监听器，{@link DataModel#removeDataModelChangeListener removeDataModelChangeListener}的缩写
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     */
    umm(listener: Function, scope?: any): void;

    /**
     * 删除模型中Data元素属性变化事件监听器
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     */
    removeDataPropertyChangeListener(listener: Function, scope?: any): void;

    /**
     * 删除模型中Data元素属性变化事件监听器，{@link DataModel#removeDataPropertyChangeListener removeDataPropertyChangeListener}的缩写
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     */
    umd(listener: Function, scope?: any): void;

    /**
     * 删除监听Data在DataModel中的层次(用于TreeView、TreeTableView等)变化事件的监听器
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     */
    removeHierarchyChangeListener(listener: Function, scope?: any): void;

    /**
     * 删除监听Data在DataModel中的层次(用于TreeView、TreeTableView等)变化事件的监听器，{@link DataModel#removeHierarchyChangeListener removeHierarchyChangeListener}的缩写
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     */
    umh(listener: Function, scope?: any): void;

    /**
     * 删除监听Data在DataModel中的索引(用于拓扑组件)变化事件的监听器
     * @param {Function} listener 监听器函数
     * @param {Object} [scope] 监听器函数域
     */
    removeIndexChangeListener(listener: Function, scope?: any): void;

    /**
     * 将data在拓扑上置底
     * @param {Data} data 要置底的数据元素
     */
    sendToBottom(data: Data): void;

    /**
     * 将data在拓扑上置顶
     * @param {Data} data 要置顶的数据元素
     */
    sendToTop(data: Data): void;

    /**
     * 将数据模型序列化成JSON格式字符串
     * @param {number} space 缩进空格数
     * @returns {String} 序列化字符串
     */
    serialize(space: number): string;

    /**
     * 设置是否自动调整data在容器中索引顺序
     * @param {boolean} autoAdjustIndex 是否自动调整data在容器中索引顺序
     */
    setAutoAdjustIndex(autoAdjustIndex: boolean): void;

    /**
     * 设置背景颜色
     * @param color 颜色
     */
    setBackground(color: string): void;

    /**
     * 设置是否正在反序列化过程中
     * @param deserializeing
     */
    setDeserializing(deserializeing: boolean): void;

    /**
     * 设置环境逛贴图
     * @param evnmap 贴图位置
     */
    setEnvmap(evnmap: string): void;

    /**
     * 设置是否树层次结构渲染
     * @param enable
     */
    setHierarchicalRendering(enable: boolean): void;

    /**
     * 定义拓扑中的层，参数为数组，数组中每个元素代表一个层，层在数组中的索引越大，在拓扑中就越靠上显示<br>
     * 注意，图元的默认layer是0，因此如果定义的层中不包含0，所有的图元默认将不可见
     * @param {Array} layers 层数组
     * @example
     * graphView.setLayers([0, 1, 'Layer2']);
     * node.setLayer(1);
     * node2.setLayer('Layer2');
     */
    setLayers(layers: Array<Object>): void;

    /**
     * 设置名称
     * @param name 名称
     */
    setName(name: string): void;

    /**
     * 设置后处理相关数据，后处理是 Bloom / Dof / 色彩饱和度
     */
    setPostProcessingData(processingData: any): void;

    /**
     * 返回当前容器中Data对象的总数
     * @return {number}
     */
    size(): number;

    /**
     * 获取该容器的选择模型
     * @return {SelectionModel}
     */
    sm(): ht.SelectionModel;

    /**
     * 设置该容器的选择模型
     */
    sm(sm: ht.SelectionModel): void;

    /**
     * 以matchFunc为过滤函数构建新的元素集合并返回
     * @param {Function} [matchFunc] 过滤函数
     * @param {Object} [scope] 函数域
     * @return {List} 元素集合
     */
    toDatas(matchFunc?: Function, scope?: any): List;

    /**
     * 将数据模型序列化成JSON格式对象
     * @return {Object} JSON对象
     */
    toJSON(): any;

    /**
     * 重做操作，必须设置 historyManager 才会生效
     */
    redo(): void;

    /**
     * 恢复操作，必须设置 historyManager 才会生效
     */
    undo(): void;
  }

  /**
   * 序列化器
   */
  export class JSONSerializer {
    /**
     *
     * @param dm 数据模型
     */
    constructor(dm: DataModel);

    /**
     * 反序列化
     * @param json 要反序列化的对象或者 json 字符串，也可以是个 json 文件地址
     * @param rootParent 默认根节点的父节点，设置后所有孩子节点父亲节点都会是它
     * @param options 是否设置节点 id
     */
    deserialize(
      json: string | Object,
      rootParent?: Data,
      options?: boolean,
    ): void;

    /**
     * 函数返回 Object 类型的 map 对象，key 为要序列化的 get/set 属性，可重载自定义
     * @param data
     */
    getProperties(data: Data): Object;

    /**
     * 函数返回 Object 类型的 map 对象，key 为要序列化的 style 属性，可重载自定义
     * @param data
     */
    getStyles(data: Data): Object;

    /**
     * 函数返回 Object 类型的 map 对象，key 为要序列化的 attr 属性，可重载自定义
     * @param data
     */
    getAttrs(data: Data): Object;

    /**
     * 函数默认返回true代表序列化所有对象，重载该函数可自定义data是否参与序列化
     * @param data
     */
    isSerializable(data: Data): boolean;

    /**
     * 序列化数据模型内容，返回序列化后的字符串
     */
    serialize(): string;

    /**
     * 返回序列化后的对象
     */
    toJSON(): any;
  }

  /**
   * 撤销重做类，需引入插件 ht-historymanager.js
   */
  export class HistoryManager {
    constructor(dm: DataModel);

    /**
     * 增加一条记录
     * @param action
     */
    addHistory(action: any): void;

    /**
     * 类似数据库里开启事务，从beginTransaction()到endTransaction()之间所有的修改可被一次性撤销或重做
     */
    beginTransaction(): void;

    /**
     * 清空所有历史记录
     */
    clear(): void;
    /**
     * 类似数据库里开启事务，从beginTransaction()到endTransaction()之间所有的修改可被一次性撤销或重做
     */
    endTransaction(): void;

    /**
     * 获取当前记录数据模型
     */
    getDataModel(): DataModel;

    /**
     * 获取记录动作
     */
    getHistories(): any[];

    /**
     * 获取当前所处的记录下标
     */
    getHistoryIndex(): number;

    /**
     * 获取最大记录条数
     */
    getMaxHistoryCount(): number;

    /**
     * 判断属性变化是否被记录，默认返回 true，可以重载过滤掉不需要记录历史的属性
     * @param property
     */
    isPropertyUndoable(property: string): boolean;

    /**
     * 设置记录的数据模型
     * @param dm
     */
    setDataModel(dm: DataModel): void;

    /**
     * 设置当前记录下标，可以直接跳转到指定步骤
     * @param historIndex
     */
    setHistoryIndex(historIndex: number): void;

    /**
     * 设置最大记录条数，默认为 10
     * @param count 最大记录条数
     */
    setMaxHistoryCount(count: number): void;

    /**
     * 重做操作
     */
    redo(): void;

    /**
     * 恢复操作
     */
    undo(): void;
  }

  /**
   * 射线检测器
   */
  export class Raycaster {
    constructor(g3d: graph3d.Graph3dView);
  }

  namespace graph {
    /**
     * 拓扑图形组件graph.GraphView是HT框架中2D功能最丰富的组件，其相关类库都在graph包下。<br>
     * GraphView具有基本图形的呈现和编辑、拓扑节点连线及自动布局功能；
     * 封装了电力和电信等行业预定义对象，具有动画渲染等特效， 因此其应用面很广泛，可作为监控领域的绘图工具和人机界面，或作为一般性的图形化编辑工具，或扩展成工作流和组织图等企业应用。
     * @param {DataModel} dataModel 绑定的数据模型
     * @constructor
     */
    export class GraphView {
      constructor(dataModel?: DataModel);

      /**
       * 增加底层Painter<br>
       * 拓扑组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，底层Painter绘制在拓扑最下面
       * @param {Function} painter Painter类
       * @example
       * //Painter示例：
       * function MyBottomPainter() {
       * }
       * Default.def(MyBottomPainter, Object, {
       * 	  draw: function(g) {
       * 		  g.save();
       * 		  //draw...
       * 		  g.restore();
       * 	  }
       * });
       * graphView.addBottomPainter(MyBottomPainter);
       */
      addBottomPainter(painter: Function | Object): void;

      /**
       * 增加交互事件监听器
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
       * @example
       * //示例：
       * graphView.addInteractorListener(function(event) {
       * 		//event格式：
       * 		{
       * 			//clickData, doubleClickData, clickBackground, doubleClickBackground,
       * 			//beginRectSelect, betweenRectSelect, endRectSelect, beginMove, betweenMove, endMove,
       * 			//beginPan, betweenPan, endPan, beginEditRect, betweenEditRect, endEditRect, beginEditPoint, betweenEditPoint, endEditPoint
       * 			//beginEditRotation, betweenEditRotation, endEditRotation, moveLeft, moveRight, moveUp, moveDown, toggleNote, toggleNote2
       * 			kind: 'clickData',//事件类型
       * 			data: data,//事件相关的数据元素
       * 			part: "part",//事件的区域,icon、label等
       * 			event: e//html原生事件
       * 		}
       * });
       */
      addInteractorListener(
        listener: (e: any) => void,
        scope?: any,
        ahead?: boolean,
      ): void;

      /**
       * 增加自身属性变化事件监听器
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: any,
        ahead?: boolean,
      ): void;

      /**
       * 增加顶层Painter<br>
       * 拓扑组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，顶层Painter绘制在拓扑最上面
       * @param {Function} painter Painter类
       * @example
       * //Painter示例：
       * function MyTopPainter() {
       * }
       * Default.def(MyTopPainter, Object, {
       * 	   draw: function(g) {
       * 		   g.save();
       * 		   //draw...
       * 		   g.restore();
       * 	   }
       * });
       * graphView.addTopPainter(MyTopPainter);
       */
      addTopPainter(painter: Function | Object): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(listener: Function, scope?: any, ahead?: boolean): void;

      /**
       * 判断阶段层级，可重载自定义
       * @param data 节点
       */
      adjustIndex(data: Data): number;

      /**
       * 传入即将设置的水平平移值，返回最终设置值，可重载限制水平平移范围
       * @param {number} value 原始水平平移值
       * @return {number} 新的水平平移值
       */
      adjustTranslateX(value: number): number;

      /**
       * 传入即将设置的垂直平移值，返回最终设置值，可重载限制垂直平移范围
       * @param {number} value 原始垂直平移值
       * @return {number} 新的垂直平移值
       */
      adjustTranslateY(value: number): number;

      /**
       * 传入即将修改的缩放值，返回最终运行设置的缩放值，可重载进行自定义
       * @param {number} value 原始缩放值
       * @return {number} 最终缩放值
       */
      adjustZoom(value: number): number;

      /**
       * 将视图插入到 dom 中
       * @param parentNode 父DOM
       */
      addToDOM(parentNode?: HTMLDivElement): void;

      /**
       * 追加 dom 元素到视图的根 dom 下，并返回是否追加成功
       * @param html 可以是个 dom 节点或者 ht 的视图组件
       * @param ignoreParentExist 是否不忽略已存在检查，若不传或为 false 则是进行检查，为 true 忽略
       */
      appendHTML(html: any, ignoreParentExist?: boolean): boolean;

      /**
       * 自动根据交互事件位置滚动画布
       * @param e
       * @param lastClientPoint
       */
      autoScroll(e: MouseEvent, lastClientPoint: Point): void;

      /**
             * 判断距离节点最近的吸附点信息
             * @param data 节点
             * @param point 要判断的坐标点
             * @example 返回信息如
             * {
                    index: 吸附点下标,
                    distance: 靠近距离
                    info: 定义的吸附点信息,
                    point: 位置信息
                }
             */
      calculateAttachPoint(data: Data, point: Point): any;

      /**
             * 判断所在位置离连线最近的位置，可能是一个拐点，也可能是一个百分比值
             * @param edge 连线
             * @param point 位置点
             * @param skipIndex 跳过的拐点
             * @example
             * // 当是拐点时
             * {
                    index: 拐点下标,
                    distance: 靠近距离
                    point: 位置信息
                }
             * // 当线段百分比位置时
             * {
                    percent: 线段百分比位置,
                    distance: 靠近距离
                    point: 位置信息
                }
             */
      calculateEdgePosition(edge: Edge, point: Point, skipIndex?: number): any;

      /**
       * 判断交互事件是否在对应节点上双击
       * @param e
       * @param data
       */
      checkDoubleClickOnNote(e: MouseEvent, data: Data): boolean;

      countFrame(): number;

      drawData(g: CanvasRenderingContext2D, data: Data, rect: Rect): void;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 获取{@link SelectionModel#getDataModel getDataModel}的缩写
       */
      dm(): DataModel;

      /**
       * 设置数据模型 {@link SelectionModel#getDataModel getDataModel}的缩写
       * @return {DataModel} dataModel
       */
      dm(dataModel: DataModel): void;

      /**
       * 反序列化
       * @param url
       * @param callback function(json, dm, view, datas)
       */
      deserialize(url: string, callback: deserializeCallBack): void;
      /**
       * 提供一个回调函数遍历此拓扑中的图元，与DataModel上的each方法不同，此方法还考虑了拓扑中的Layer，从低Layer向高Layer遍历
       * @param {Function} func 遍历函数
       * @param {Object} [scope] 函数域
       * @example
       * graphView.each(function(data) {
       *     console.log(data: Data);
       * });
       */
      each(func: (data: Data, index?: number) => void, scope?: Object): void;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      fi(event: any): void;

      fireInteractorEvent(event: any): void;

      /**
       * 派发属性变化事件，可使用fp的简写方式
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       */
      firePropertyChange(property: string, oldValue: any, newValue: any): void;

      /**
       * 派发属性变化事件，firePropertyChange 方法的简写
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       */
      fp(property: string, oldValue: any, newValue: any): void;

      fireViewEvent(event: any): void;

      /**
       * 缩放平移整个拓扑以展示选中的所有图元
       * @param padding 缩放后图元区域与拓扑边缘的距离，默认为20
       * @param anim 默认false，是否使用动画，可以设置为true或者false或者animation动画对象
       * @param notZoomIn
       */
      fitSelection(
        padding?: number,
        anim?: boolean | AnimOption,
        notZoomIn?: boolean,
      ): AnimInstance;

      /**
       * 缩放平移整个拓扑以展示所有的图元
       * @param {boolean} [anim] 是否使用动画
       * @param {number} [padding] 缩放后图元区域与拓扑边缘的距离，默认为20
       * @param {boolean} [notZoomIn] 是否将最小缩放值限定为1
       */
      fitContent(anim?: boolean, padding?: number, notZoomIn?: boolean): void;

      /**
       * 缩放平移整个拓扑以展示参数Data
       * @param {Data} data 要显示的data
       * @param {boolean} [anim] 是否使用动画
       * @param {number} [padding] 缩放后图元区域与拓扑边缘的距离，默认为20
       * @param {boolean} [notZoomIn] 是否将最小缩放值限定为1
       * @param {boolean} [retry] 当拓扑状态异常时，是否延时重试fitData，默认为true
       */
      fitData(
        data: Data,
        anim?: boolean,
        padding?: number,
        notZoomIn?: boolean,
        retry?: boolean,
      ): void;

      /**
       * 缩放平移整个拓扑以展示矩形范围内的图元
       * @param {Object} rect 矩形范围
       * @param {boolean} [anim] 是否使用动画
       * @param {boolean} [notZoomIn] 是否将最小缩放值限定为1
       */
      fitRect(rect: Rect, anim?: boolean, notZoomIn?: boolean): void;

      /**
       * 返回节点绘制信息
       * @param data 节点
       */
      getDataUI(data: Data): any;

      /**
       * 获取锚点可编辑过滤器
       */
      getAnchorEditableFunc(): Function;

      /**
       * 获取自动滚动区域，当鼠标距离拓扑边缘小于这个值时，拓扑自动滚动(调整translateX或translateY)
       * @return {number} 自动滚动区域
       */
      getAutoScrollZone(): number;

      /**
             *  返回节点的吸附点信息，默认优先得到 style 中的 attach.points，若无则返回矢量定义上的 attachPoints 信息，可重载自定义
             * @param data 
             * @example
             *  // 获取目标 data 的吸附点配置，格式形如：
                // [
                //    { x : 0, y : 1, customInfo : 'hello' },
                //    { x : 1, y : 1, offsetX : 10, offsetY : 20, customInfo : 'world' },
                // ]
             */
      getAttachPoints(data: Data): any;

      /**
       * 获取目标 data 的吸附方式，可选值：close-足够接近，默认；strict-最
       * @param data
       */
      getAttachStyle(data: Data): string;

      /**
       * 获取图元body的染色，可重载此方法返回自定义的颜色
       * @param {Data} data 要染色的图元
       * @return {color} 最终颜色，默认为data.s('body.color')
       */
      getBodyColor(data: Data): String;

      /**
       * 获取图元边框颜色，可重载此方法返回自定义的颜色
       * @param {Data} data 要染色的图元
       * @return {color} 最终颜色，默认为data.s('border.color')
       */
      getBorderColor(data: Data): String;

      /**
       * 获取所有底层绘制器
       */
      getBottomPainters(): any[];

      /**
       * 获取Group内child的尺寸范围，这个尺寸参与计算Group的大小
       * @param {Data} child 子节点
       * @return {Object} 子节点的尺寸范围
       */
      getBoundsForGroup(child: Data): Object;

      /**
       * 获取拓扑的画布
       * @return {HTMLCanvasElement} 画布
       */
      getCanvas(): HTMLCanvasElement;

      /**
       * 获取拓扑中所有图元占用的矩形区域
       * @return {Object} 内容区域
       */
      getContentRect(): Object;

      /**
       * 获取当前子网
       * @return {SubGraph} 子网对象
       */
      getCurrentSubGraph(): Object;

      getClipBounds(): any;

      getCoreInteractor(): any;

      /**
       * 获取当前的连接动作类型，配合 Default 上的 getConnectAction 和 setConnectAction 使用
       */
      getCurrentConnectActionType(): string;

      /**
       * 传入逻辑坐标点或者交互event事件参数，返回当前点下的图元，filter可进行过滤
       * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
       * @param {Functoin} [filter] 过滤器函数，传入data,自定义逻辑返回true或false判断此data是否可被getDataAt返回
       * @param {number} [range] 扩大点范围
       * @return {Data} 点下的图元
       */
      getDataAt(
        pointOrEvent: Object,
        filter?: Function,
        range?: number,
      ): Data | null;

      /**
       * 获取绑定的数据模型
       * @return {DataModel} 数据模型
       */
      getDataModel(): DataModel;

      /**
       * 传入逻辑坐标点或者交互event事件参数，返回当前点下的图元及part信息
       * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
       * @return {Object} 图元和part信息
       */
      /**
       * 传入逻辑坐标点或者交互event事件参数，返回当前点下的图元及part信息
       * @param pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
       * @param filter 过滤器，可以忽略一些不想选到的节点，data => boolean
       * @param range
       * @return {Object} 图元和part信息
       */
      getDataInfoAt(
        // eslint-disable-next-line no-use-before-define
        pointOrEvent: MouseEvent | Point,
        filter?: Function,
        range?: any,
      ): Object;

      /**
       * 获取逻辑坐标区域内的图元
       * @param {rect} rect 逻辑坐标区域
       * @param {boolean} [intersects] 指定相交选中还是包含选中，true表示相交，false表示包含。
       * @param {boolean} [selectable] 是否只返回可被选中的图元，可否被选中通过isSelectable判断
       * @return {List}
       */
      getDatasInRect(
        rect: Rect,
        intersects?: boolean,
        selectable?: boolean,
      ): List;

      /**
       * 获取图元的UI类
       * @param {Data} data 图元
       * @return {Object}
       */
      getDataUI(data: Data): Object;

      /**
       * 获取图元UI的绘制范围
       * @param {Data} data 图元
       * @return {Object}
       */
      getDataUIBounds(data: Data): Object;

      getDebugTip(): any;

      /**
       * 返回禁用遮罩层 div
       */
      getDisabledDiv(): HTMLElement;

      /**
       * 获取连线的绘制信息
       */
      getEdgeInfo(edge: Edge): any;

      /**
       * 获取连线起始节点连接点位置
       */
      getEdgeSourcePosition(): Point;

      /**
       * 获取连线结束节点连接点位置
       */
      getEdgeTargetPosition(): Point;

      /**
       * 获取交互样式值，必须 gv.setEditable(true) 时才有效
       * @param name
       */
      getEditStyle(name: string): any;

      /**
       * 获取编辑过滤器函数
       * @return {Function}
       */
      getEditableFunc(): Function;

      /**
       * 获取编辑交互器
       * @return {graph.EditInteractor|graph.XEditInteractor}
       */
      getEditInteractor(): Object;

      /**
       * 获取编辑交互器中编辑点的背景色
       * @return {color}
       */
      getEditPointBackground(): String;

      /**
       * 获取编辑交互器中编辑点的边框颜色
       * @return {color}
       */
      getEditPointBorderColor(): String;

      /**
       * 获取编辑交互器中编辑点的尺寸
       * @return {number}
       */
      getEditPointSize(): number;

      getFullscreenDatas(): any;

      /**
       * 获取横向滚动条的 div 对象
       */
      getHScrollBar(): HTMLDivElement;
      /**
       *
       * 获取横向滚动条的 div 对象
       */
      getVScrollBar(): HTMLDivElement;

      /**
       * 获取拓扑组件的布局高度
       * @return {number}
       */
      getHeight(): number;

      /**
       * 获取悬停延迟时间，若无设置使用 Default.hoverDelay
       */
      getHoverDelay(): number;

      /**
       * 传入逻辑坐标点或者交互event事件参数、图元对象，判断当前点下的icon信息
       * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
       * @example //返回值示例：
       * {
       * 	   data: data,//相关数据元素
       * 	   key: 'key',//styleIcon名
       * 	   index: 0,//styleIcon中第几个icon
       * 	   name: 'name'//styleIcon中相应icon的名字
       * }
       *
       * @return {Object}
       */
      getIconInfoAt(pointOrEvent: Object, data: Data): void;

      /**
       * 获取交互器
       * @return {List}
       */
      getInteractors(): List;

      /**
       * 获取节点图片，可重载自定义
       * @param data
       */
      getImage(data: Data): any;

      /**
       * 获取图元的label，用于在拓扑上显示文字信息，可重载返回自定义文字
       * @param {Data} data 图元
       * @return {String} 图元label文字，默认返回data.s('label')||data.getName();
       */
      getLabel(data: Data): String;

      /**
       * 获取图元的第二个label，用于在拓扑上显示文字，可重载返回自定义文字
       * @param {Data} data 图元
       * @return {String} 图元第二个label的文字，默认返回data.s('label2')
       */
      getLabel2(data: Data): String;

      /**
       * 获取图元的第二个label的背景色，可重载返回自定义颜色
       * @param {Data} data 图元
       * @return {color} 图元第二个label的背景色，默认返回data.s('label2.background')
       */
      getLabel2Background(data: Data): String;

      /**
       * 获取图元的第二个label的文字颜色，可重载返回自定义颜色
       * @param {Data} data 图元
       * @return {color} 图元第二个label的文字颜色，默认返回data.s('label2.color')
       */
      getLabel2Color(data: Data): String;

      /**
       * 获取图元label的背景色，可重载返回自定义颜色
       * @param {Data} data 图元
       * @return {color} 图元label的背景色，默认返回data.s('label.background')
       */
      getLabelBackground(data: Data): String;

      /**
       * 获取图元label的文字颜色，可重载返回自定义颜色
       * @param {Data} data 图元
       * @return {color} 图元label的文字颜色，默认返回data.s('label.color')
       */
      getLabelColor(data: Data): String;

      /**
       * 获取拓扑中已定义的层
       * @return {Array}
       */
      getLayers(): Array<Object>;

      /**
       * 获得所有的层
       */
      getLayersInfo(): Array<Object>;

      /**
       * 获取指定节点的移动模式，值可为：x、y、xy ，表示可横向、纵向、任意方向移动
       * @param e
       * @param moveData
       */
      getMoveMode(e: any, moveData: Data): string;

      /**
       * 获得节点举行区域
       * @param node
       */
      getNodeRect(node: Node): Rect;

      /**
       * 获取屏幕 dom 坐标
       * @param point 可以是一个 { x, y } 对象，或者 x 坐标
       * @param y y 坐标
       */
      getScreenPoint(point: Point | number, y?: number): Point;

      /**
       * 获取选中颜色，默认返回 style 中的 select.color 属性，可重载自定义
       * @param data
       */
      getSelectColor(data: Data): string;

      /**
       * 获取哪些属性可以被序列化
       */
      getSerializableProperties(): any;

      /**
       * 获得节点绘制的多边形类型，默认返回 style 中的 shape 属性，重载自定义
       * @param data
       */
      getShape(node: Node): string;

      /**
       * 获得节点状态值，默认返回 style 中的 state 属性，若空返回矢量定义中的 state 属性，详见矢量 state 机制，可重载自定义
       * @param node
       */
      getState(node: Node): string;

      /**
             * 获得双击文本编辑信息，可重载自定义
             * @param data 
             * @example
             * // 默认只有文本可编辑
             * if (data instanceof Text) {
                    return {
                        name: 'text', // 编辑的属性名字
                        accessType: 's', // 编辑的属性类型，p | a | s
                        isMultiline: false // 是否为多行编辑
                    };
                }
             */
      getTextEditInfo(data: Data): Object;

      /**
       * 获取所有顶层绘制器
       */
      getTopPainters(): any[];

      /**
       * 传入HTML事件对象，将事件坐标转换为拓扑中的逻辑坐标
       * @param {Event} event 事件对象
       * @return {Object}
       */
      getLogicalPoint(event: MouseEvent): Object;

      /**
       * 获取移动过滤器函数
       * @return {Function}
       */
      getMovableFunc(): Function;

      /**
       * 获取图元的note，用于在拓扑上显示标注信息，可重载返回自定义文字
       * @param {Data} data 图元
       * @return {String} 图元note文字，默认返回data.s('note')
       */
      getNote(data: Data): string;

      /**
       * 获取图元的第二个note，用于在拓扑上显示标注信息，可重载返回自定义文字
       * @param {Data} data 图元
       * @return {String} 图元第二个note文字，默认返回data.s('note2')
       */
      getNote2(data: Data): string;

      /**
       * 获取图元的第二个note的背景色，可重载返回自定义颜色
       * @param {Data} data 图元
       * @return {color} 图元第二个note的背景色，默认返回data.s('note2.background')
       */
      getNote2Background(data: Data): String;

      /**
       * 获取图元note的文字颜色，可重载返回自定义颜色
       * @param {Data} data 图元
       * @return {color} 图元note的文字颜色，默认返回data.s('note.background')
       */
      getNoteBackground(data: Data): String;

      /**
       * 获取图元的透明度，可重载返回自定义透明度
       * @param {Data} data 图元
       * @return {number} 图元透明度，默认返回data.s('opacity')
       */
      getOpacity(datadata: Data): number;

      /**
       * 获取点编辑(Shape、Edge等)过滤器函数
       * @return {Function}
       */
      getPointEditableFunc(): Function;

      /**
       * 获取大小编辑过滤器函数
       * @return {Function}
       */
      getRectEditableFunc(): Function;

      /**
       * 获取框选选择框的背景色
       * @return {color}
       */
      getRectSelectBackground(): String;

      /**
       * 获取框选选择框的边框颜色
       * @return {color}
       */
      getRectSelectBorderColor(): String;

      /**
       * 获取旋转编辑过滤器函数
       * @return {Function}
       */
      getRotationEditableFunc(): Function;

      /**
       * 获取图元编辑时的旋转控制点坐标
       * @param {Data} data 图元
       * @return {Object} 旋转控制点坐标
       */
      getRotationPoint(data: Data): Object;

      /**
       * 获取滚动条颜色
       * @return {color}
       */
      getScrollBarColor(): String;

      /**
       * 获取滚动条宽度
       * @return {number}
       */
      getScrollBarSize(): number;

      /**
       * 获取拓扑的滚动区域，即contentRect + viewRect
       * @return {Object} 矩形区域
       */
      getScrollRect(): Object;

      /**
       * 获取选择过滤器函数
       * @return {Function}
       */
      getSelectableFunc(): Function;

      /**
       * 传入逻辑坐标点或者交互event事件参数，返回当前点下已选中的图元
       * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
       * @return {Data}
       */
      getSelectedDataAt(pointOrEvent: Object): Data | null;

      /**
       * 获取选中模型
       * @return {SelectionModel}
       */
      getSelectionModel(): SelectionModel;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @param {Event} e 鼠标或Touch事件对象
       * @return {String} toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(e: Object): String;

      /**
       * 获取水平平移值
       * @return {number} 水平平移值
       */
      getTranslateX(): number;

      /**
       * 获取垂直平移值
       * @return {number} 垂直平移值
       */
      getTranslateY(): number;

      /**
       * 获取拓扑组件的根层div
       * @return {HTMLDivElement}
       */
      getView(): HTMLDivElement;

      /**
       * 获取拓扑组件中可见区域的逻辑尺寸
       * @return {Object}
       */
      getViewRect(): Object;

      /**
       * 获取可见过滤器函数
       * @return {Function}
       */
      getVisibleFunc(): Function;

      /**
       * 获取拓扑组件的布局宽度
       * @return {number}
       */
      getWidth(): number;

      /**
       * 获取拓扑整体缩放值
       * @return {number}
       */
      getZoom(): number;

      /**
       * 图元点击回调，可重载自定义
       * @param e
       * @param data
       * @param part
       */
      handleClick(e: MouseEvent, data: Data, part: string): void;

      /**
       * 处理数据节点变化，可重载自定义
       * @param event
       */
      handleDataModelChange(event: any): void;

      handleDataModelPropertyChange(event: any): void;

      handleDataPropertyChange(event: any): void;

      /**
       * 处理按下 delete 按键的动作，可重载自定义
       * @param event
       */
      handleDelete(event: any): void;

      /**
       * 图元双击回调，可重载自定义
       * @param e
       * @param data
       * @param part
       */
      handleDoubleClick(e: MouseEvent, data: Data, part: string): void;

      handleHierarchyChange(event: any): void;

      /**
       * 案件键盘事件，可重载自定义
       * @param event
       */
      handleKeyDown(event: KeyboardEvent): void;

      /**
       * 处理 touch 设备上的双指操作交互，可重载自定义
       * @param event
       */
      handlePinch(event: TouchEvent): void;

      /**
       * 处理鼠标滚轮操作交互，可重载自定义
       * @param event
       */
      handleScroll(event: MouseEvent): void;

      /**
       * 处理选中变化事件
       * @param event
       */
      handleSelectionChange(event: any): void;

      /**
       * 隐藏调试面板
       */
      hideDebugTip(): void;

      /**
       * 无效拓扑，并调用延时刷新
       * @param {number} delay 延迟刷新的间隔事件(单位:ms)
       */
      invalidate(delay?: number): void;

      /**
       * 无效拓扑中的所有图元
       */
      invalidateAll(): void;

      /**
       * 无效拓扑中的图元
       * @param {Data} data 要无效的图元
       */
      invalidateData(data: Data): void;

      /**
       * 无效选中模型中的图元
       */
      invalidateSelection(): void;

      /**
       * 是否自动隐藏滚动条
       * @return {boolean}
       */
      isAutoHideScrollBar(): boolean;

      /**
       * 选中图元时，是否自动平移拓扑以确保该图元出现在可见区域内
       * @return {boolean}
       */
      isAutoMakeVisible(): boolean;

      /**
       * 连接动作按钮是否可见
       * @param data
       * @param Data
       */
      isConnectActionVisible(data: Data): boolean;

      /**
       * 返回调试面板是否可见
       */
      isDebugTipShowing(): boolean;

      /**
       * 判断节点是否可交互，默认由 style 中的 interactive 决定，可重载自定义，如禁用所有交互 gv.isInteractive = () => false;
       */
      isInteractive(data: Data): boolean;

      /**
       * 判断节点是否像素精确，默认由 style 中的 isPixelPerfect 决定，可重载自定义
       */
      isPixelPerfect(data: Data): boolean;

      /**
       * 判断 edge 是否可以连接到 data 上，可重载自定义
       * @param edge
       * @param data
       * @param type
       */
      isSourceTargetEditable(
        edge: Edge,
        data: Node | Edge,
        type?: string,
      ): boolean;

      /**
       * 返回提示功能是否可用
       */
      isToolTipEnabled(): boolean;

      /**
       * 判断一个节点是否可以成为对齐指导线的参考节点，默认都返回 true ，可重载自定义
       * @param node
       */
      isValidGuideLineSource(node: Node): boolean;

      /**
       * 判断视图是否可缩放
       */
      isZoomable(): boolean;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return {boolean}
       */
      isDisabled(): boolean;

      /**
       * 判断图元是否可被编辑
       * @param {Data} data 图元
       * @return {boolean}
       */
      isEditable(data: Data): boolean;

      /**
       * 图元编辑点是否可见，默认当拓扑缩放值大于0.15时可见
       * @param {Data} data 图元
       * @return {boolean}
       */
      isEditVisible(data: Data): boolean;

      /**
       * 判断图元label是否可见，默认当拓扑缩放值大于0.15时可见
       * @param {Data} data 图元
       * @return {boolean}
       */
      isLabelVisible(data: Data): boolean;

      /**
       * 判断图元是否可移动
       * @param {Data} data 图元
       * @return {boolean}
       */
      isMovable(data: Data): boolean;

      /**
       * 判断图元note是否可见，默认当拓扑缩放值大于0.15时可见
       * @param {Data} data 图元
       * @return {boolean}
       */
      isNoteVisible(data: Data): boolean;

      /**
       * 拓扑是否可以通过鼠标拖拽进行平移操作
       * @return {boolean}
       */
      isPannable(): boolean;

      /**
       * 判断图元(Shape、Edge等)的点是否可编辑
       * @param {Data} data 图元
       * @return {boolean}
       */
      isPointEditable(data: Data): boolean;

      /**
       * 判断图元大小是否可编辑
       * @param {Data} data 图元
       * @return {boolean}
       */
      isRectEditable(data: Data): boolean;

      /**
       * 判断拓扑上是否允许框选操作
       * @return {boolean}
       */
      isRectSelectable(): boolean;

      /**
       * 判断拓扑上是否允许通过空格将拓扑的缩放和平移值复位
       * @return {boolean}
       */
      isResettable(): boolean;

      /**
       * 判断图元是否可编辑旋转
       * @param {Data} data 图元
       * @return {boolean}
       */
      isRotationEditable(data: Data): boolean;

      /**
       * 判断拓扑滚动条是否可见
       * @return {boolean}
       */
      isScrollBarVisible(): boolean;

      /**
       * 判断图元是否可被选中
       * @param {Data} data 图元
       * @return {boolean}
       */
      isSelectable(data: Data): boolean;

      /**
       * 判断图元是否被选中
       * @param {Data} data 图元
       * @return {boolean}
       */
      isSelected(data: Data): boolean;

      /**
       * 根据id判断图元是否被选中
       * @param {String|number} id 图元id
       * @return {boolean}
       */
      isSelectedById(id: String | number): boolean;

      /**
       * 当前拓扑是否共享选中模型
       * @return {boolean}
       */
      isSelectionModelShared(): boolean;

      /**
       * 拓扑中的图元的选中边框是否可见，默认当拓扑缩放值大于0.15时可见
       * @param {Data} data 图元
       * @return {boolean}
       */
      isSelectVisible(data: Data): boolean;

      /**
       * 判断图元是否可见
       * @param {Data} data 图元
       * @return {boolean}
       */
      isVisible(data: Data): boolean;

      /**
       * 无效拓扑，并调用延时刷新，{@link graph.GraphView#invalidate invalidate}的缩写
       * @param {number} delay 延迟刷新的间隔事件(单位:ms)
       */
      iv(delay?: number): void;

      /**
       * 传入HTML事件对象，将事件坐标转换为拓扑中的逻辑坐标，{@link graph.GraphView#getLogicalPoint getLogicalPoint}的缩写
       * @param {Event} event 事件对象
       * @return {Object}
       */
      lp(event: Object): Object;

      /**
       * 平移拓扑以确保该图元在可见区域内
       * @param {Data} data 图元
       */
      makeVisible(data: Data): void;

      /**
       * 平移拓扑以确保该图元在可见区域中心
       * @param data
       * @param anim
       * @param retry
       */
      makeCenter(
        data: Data,
        anim?: boolean | AnimOption,
        retry?: boolean,
      ): AnimInstance;

      /**
       * 增加交互事件监听器，{@link graph.GraphView#addInteractorListener addInteractorListener}的缩写
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
       * @example
       * //示例：
       * graphView.mi(function(event) {
       * 		//event格式：
       * 		{
       * 			//clickData, doubleClickData, clickBackground, doubleClickBackground,
       * 			//beginRectSelect, betweenRectSelect, endRectSelect, beginMove, betweenMove, endMove,
       * 			//beginPan, betweenPan, endPan, beginEditRect, betweenEditRect, endEditRect, beginEditPoint, betweenEditPoint, endEditPoint
       * 			//beginEditRotation, betweenEditRotation, endEditRotation, moveLeft, moveRight, moveUp, moveDown, toggleNote, toggleNote2
       * 			kind: 'clickData',//事件类型
       * 			data: data,//事件相关的数据元素
       * 			part: "part",//事件的区域,icon、label等
       * 			event: e//html原生事件
       * 		}
       * });
       */
      mi(listener: Function, scope?: Object, ahead?: boolean): void;

      /**
       * 移动选中模型中图元的位置
       * @param {number} offsetX 水平移动值
       * @param {number} offsetY 垂直移动值
       */
      moveSelection(offsetX: number, offsetY: number): void;

      /**
       * 整体移动所有传入图元位置
       * @param datas
       * @param offsetX 水平移动值
       * @param offsetY 垂直移动值
       */
      moveDatas(
        datas: Array<Data> | List,
        offsetX: number,
        offsetY?: number,
      ): void;

      /**
       * 增加自身属性变化事件监听器，{@link graph.GraphView#addPropertyChangeListener addPropertyChangeListener}的缩写
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
       */
      mp(listener: Function, scope?: Object, ahead?: boolean): void;

      /**
       * 自动布局动画结束后时回调，可重载做后续处理
       */
      onAutoLayoutEnded(): void;

      /**
       * 单击拓扑背景时回调，可重载做后续处理
       * @param {Event} event 事件对象
       */
      onBackgroundClicked(event: Object): void;

      /**
       * 双击拓扑背景时回调，默认调用upSubGraph()进入上一层子网，可重载改变默认逻辑或做后续处理
       * @param {Event} event 事件对象
       */
      onBackgroundDoubleClicked(event: Object): void;

      /**
       * 当前子网变化时回调，默认实现调用reset()恢复默认缩放和平移值，可重载改变默认逻辑或做后续处理
       * @param {Event} event 事件对象
       */
      onCurrentSubGraphChanged(event: Object): void;

      onCSGBoxDoubleClicked(
        csgBox: CSGBox,
        event: MouseEvent,
        part?: string,
      ): void;

      onDoorWindowDoubleClicked(
        csgBox: CSGBox,
        event: MouseEvent,
        part?: string,
      ): void;

      /**
       * 属性变化回调函数，可重载做后续处理
       * @param {Object} event 属性变化事件
       * @example //event格式：
       * {
       * 	   property: 'name',//发生变化的属性
       * 	   oldValue: 'oldValue',//旧值
       * 	   newValue: 'newValue',''新值
       * 	   data: data//发生变化的data
       * }
       *
       */
      onPropertyChanged(event: any): void;

      /**
       * 选择模型共享变化时回调
       */
      onSelectionModelSharedChanged(): void;

      /**
       * 放大
       * @param point
       */
      pinchZoomIn(point: Point): void;

      /**
       * 锁校
       * @param point
       */
      pinchZoomout(point: Point): void;

      /**
       * 返回数据模型的序列化内容
       * @param space 缩进间隔
       */
      serialize(space?: number): string;

      serializeProperty(
        name: string,
        value: any,
        serliazer: JSONSerializer,
      ): any;

      /**
       * 图元被点击时回调，可重载做后续处理
       * @param {Data} data 被点击的图元
       * @param {Event} e 事件对象
       */
      onDataClicked(data: Data, e: Object): void;

      /**
       * 图元被双击时回调，可重载做后续处理
       * @param {Data} data 双击的图元
       * @param {Event} e 事件对象
       */
      onDataDoubleClicked(data: Data, e: Object): void;

      /**
       * 连线图元被双击时回调，默认调用edge.toggle()，可重载改变默认逻辑或做后续处理
       * @param {Edge} edge 连线
       * @param {Event} e 事件对象
       */
      onEdgeDoubleClicked(edge: Edge, e: Object): void;

      /**
       * 组类型图元被双击时回调，默认实现调用group.toggle()，可重载改变默认逻辑或做后续处理
       * @param {Group} group Group对象
       * @param {Event} e 事件对象
       */
      onGroupDoubleClicked(group: Group, e: Object): void;

      /**
       * 移动图元位置结束时回调，可重载做后续处理
       */
      onMoveEnded(): void;

      /**
       * 手抓图平移拓扑图结束时回调，可重载做后续处理
       */
      onPanEnded(): void;

      /**
       * 触屏进行双指缩放结束时回调，可重载做后续处理
       */
      onPinchEnded(): void;

      /**
       * 框选结束时回调，可重载做后续处理
       */
      onRectSelectEnded(): void;

      /**
       * 选中变化时回调，默认实现会使得该选中图元出现在拓扑图上的可见范围
       * @param {Event} event 选中变化事件对象
       */
      onSelectionChanged(event: Object): void;

      /**
       * 子网图元被双击时回调，默认实现进入子网
       * @param {SubGraph} subGraph 子网对象
       * @param {Event} event 事件对象
       */
      onSubGraphDoubleClicked(subGraph: SubGraph, event: Object): void;

      /**
       * 平移动画结束时回调，可重载做后续处理
       */
      onTranslateEnded(): void;

      /**
       * 图元可见状态发生变化时回调，可重载做后续处理
       * @param {Data} data 图元
       * @param {boolean} newVisible 新的可见状态
       */
      onVisibleChanged(data: Data, newVisible: boolean): void;

      /**
       * 缩放动画结束时回调
       */
      onZoomEnded(): void;

      /**
       * 判断图元是否在矩形范围内
       * @param {Data} data 图元
       * @param {Object} rect 矩形
       * @return {boolean}
       */
      rectContains(data: Data, rect: Rect): boolean;

      /**
       * 判断图元与矩形范围是否相交
       * @param {Data} data 图元
       * @param {Object} rect 矩形
       * @return {boolean}
       */
      rectIntersects(data: Data, rect: Rect): boolean;

      /**
       * 重绘拓扑，rect参数为空时重绘拓扑中的所有图元，否则重绘矩形范围内的图元
       * @param {Object} [rect] 矩形范围
       */
      redraw(rect: Rect): void;

      /**
       * 删除底层Painter
       * @param {Object} painter Painter类
       */
      removeBottomPainter(painter: Function | Object): void;

      /**
       * 删除交互事件监听器
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       */
      removeInteractorListener(listener: Function, scope?: Object): void;

      /**
       * 删除自身属性变化事件监听器
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除所有选中的图元
       */
      removeSelection(): void;

      /**
       * 删除顶层Painter
       * @param {Object} painter Painter类
       */
      removeTopPainter(painter: Object | Function): void;

      /**
       * 删除视图事件监听器
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 重置拓扑状态，将zoom设为1，translate设为0
       */
      reset(): void;

      /**
       * 提供一个回调函数倒序遍历此拓扑中的图元，与DataModel上的each方法不同，此方法还考虑了拓扑中的Layer，从高Layer向低Layer遍历
       * @param {Function} func 遍历函数
       * @param {Object} [scope] 函数域
       * @example
       * graphView.reverseEach(function(data) {
       *      console.log(data: Data);
       * });
       */
      reverseEach(func: Function, scope?: Object): void;

      /**
       * 选中拓扑中所有图元
       */
      selectAll(): void;

      /**
       * 设置锚点可编辑过滤器，可重载自定义，如禁用所有锚点编辑 setAnchorEditableFunc(() => false);
       * @param func
       */
      setAnchorEditableFunc(func: Function): void;

      /**
       * 设置是否自动隐藏滚动条
       * @param {boolean} v
       */
      setAutoHideScrollBar(v: boolean): void;

      /**
       * 设置当选中图元时，是否自动平移拓扑以确保该图元出现在可见区域内
       * @param {boolean} v
       */
      setAutoMakeVisible(v: boolean): void;

      /**
       * 设置自动滚动区域大小，当鼠标距离拓扑边缘小于这个值时，拓扑自动滚动(调整translateX或translateY)
       * @param {boolean} v
       */
      setAutoScrollZone(v: boolean): void;

      /**
       * 设置当前子网
       * @param {SubGraph} subGraph 子网对象
       */
      setCurrentSubGraph(subGraph: SubGraph): void;

      /**
       * 设置当前的连接动作类型，配合 Default 上的 getConnectAction 和 setConnectAction 使用
       */
      setCurrentConnectActionType(actionType: string): void;

      /**
       * 设置 css 的鼠标样式，cursor
       * @param style
       */
      setCursor(style: number): void;

      /**
       * 设置 css 的默认鼠标样式，cursor
       * @param style
       */
      setDefaultCursor(style: number): void;

      setEditInteractor(interactor: any): void;

      setEditStyle(key: string, value: any, base?: any): void;

      /**
       * 设置视图聚焦
       */
      setFocus(): void;

      /**
       * 设置绑定的数据模型
       * @return {DataModel} 数据模型
       */
      setDataModel(dataModel: DataModel): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param {boolean} value 是否禁用组件
       * @param {String} [iconUrl] 蒙板上显示的icon的路径
       */
      setDisabled(value: boolean, iconUrl?: String): void;
      /**
       * 设置拓扑中的图元是否可编辑
       * @param {boolean} editable
       */
      setEditable(editable: boolean): void;

      /**
       * 设置编辑过滤器函数
       * @param {Function} func 过滤器函数
       */
      setEditableFunc(func: Function): void;

      /**
       * 设置编辑交互器中编辑点的背景色
       * @param {color} color 颜色值
       */
      setEditPointBackground(color: String): void;

      /**
       * 设置编辑交互器中编辑点的边框颜色
       * @param {color} color 颜色值
       */
      setEditPointBorderColor(color: String): void;

      /**
       * 设置编辑交互器中编辑点的尺寸
       * @param {number} size 编辑点尺寸
       */
      setEditPointSize(size: number): void;

      /**
       * 设置悬停延迟时间，若无设置使用 Default.hoverDelay
       */
      setHoverDelay(hoverDelay: number): void;

      /**
       * 设置布局高度
       * @param {number} height 高度值
       */
      setHeight(height: number): void;

      /**
       * 设置交互器
       * @param {List} interactors 交互器对象集合
       */
      setInteractors(interactors: List | Array<Object>): void;

      /**
       * 定义拓扑中的层，参数为数组，数组中每个元素代表一个层，层在数组中的索引越大，在拓扑中就越靠上显示<br>
       * 注意，图元的默认layer是0，因此如果定义的层中不包含0，所有的图元默认将不可见
       * @param {Array} layers 层数组
       * @example
       * graphView.setLayers([0, 1, 'Layer2']);
       * node.setLayer(1);
       * node2.setLayer('Layer2');
       */
      setLayers(layers: Array<Object>): void;

      /**
       * 设置移动过滤器函数
       * @param {Function} func 过滤器函数
       */
      setMovableFunc(func: Function): void;

      /**
       * 设置是否可以通过鼠标拖拽进行平移操作
       * @param {boolean} v 是否可平移
       */
      setPannable(v: boolean): void;

      /**
       * 设置点编辑(Shape、Edge等)过滤器函数
       * @param {Function} func 过滤器函数
       */
      setPointEditableFunc(func: Function): void;

      /**
       * 设置大小编辑过滤器函数
       * @param {Function} func 过滤器函数
       */
      setRectEditableFunc(func: Function): void;

      /**
       * 设置拓扑上是否允许框选操作
       * @param {boolean} v
       */
      setRectSelectable(v: boolean): void;

      /**
       * 设置框选选择框的背景色
       * @param {color} color 颜色值
       */
      setRectSelectBackground(color: String): void;

      /**
       * 设置框选选择框的边框颜色
       * @param {color} color 颜色值
       */
      setRectSelectBorderColor(color: String): void;

      /**
       * 设置提示是否可用
       * @param enable
       */
      setToolTipEnabled(enable: boolean): void;

      /**
       * 设置拓扑上是否允许通过空格将拓扑的缩放和平移值复位
       * @param {boolean} v
       */
      setResettable(v: boolean): void;

      /**
       * 设置旋转编辑过滤器函数
       * @param {Function} func 过滤器函数
       */
      setRotationEditableFunc(func: Function): void;

      /**
       * 设置滚动条颜色
       * @param {color} color 颜色值
       */
      setScrollBarColor(color: String): void;

      /**
       * 设置滚动条宽度
       * @param {number} size 宽度值
       */
      setScrollBarSize(size: number): void;

      /**
       * 设置滚动条是否可见
       * @param {boolean} visible
       */
      setScrollBarVisible(visible: boolean): void;

      /**
       * 设置选择过滤器函数
       * @param {Function} func 过滤器函数
       */
      setSelectableFunc(func: Function): void;

      /**
       * 设置拓扑是否共享选中模型
       * @param {boolean} v
       */
      setSelectionModelShared(v: boolean): void;

      /**
       * 设置拓扑水平和垂直平移值
       * @param {number} x 水平平移值
       * @param {number} y 垂直平移值
       * @param {boolean} [anim] 是否使用动画
       */
      setTranslate(x: number, y: number, anim?: boolean): void;

      /**
       * 设置拓扑水平平移值
       * @param {number} x 水平平移值
       */
      setTranslateX(x: number): void;

      /**
       * 设置拓扑垂直平移值
       * @param {number} y 垂直平移值
       */
      setTranslateY(y: number): void;

      /**
       * 设置可见过滤器
       * @param {Function} func 过滤器函数
       */
      setVisibleFunc(func: Function): void;

      /**
       * 设置布局宽度
       * @param {number} width 宽度值
       */
      setWidth(width: number): void;

      /**
       * 设置拓扑缩放值
       * @param {number} value 缩放值
       * @param {boolean} [anim] 是否使用动画
       * @param {Object} [point] 缩放中心点的坐标
       */
      setZoom(value: number, anim?: boolean, point?: Object): void;

      /**
       * 显示滚动条
       */
      showScrollBar(): void;

      /**
       * 开启调试面板
       */
      showDebugTip(): void;

      /**
       * 获取选中模型，{@link graph.GraphView#getSelectionModel getSelectionModel}的缩写
       * @return {SelectionModel}
       */
      sm(): SelectionModel;

      /**
       * 将拓扑导出为canvas
       * @param {color} background 背景色
       * @return {HTMLCanvasElement}
       */
      toCanvas(background: String): HTMLCanvasElement;

      toJSON(): Object;

      /**
       * 退出当前一级 subGraph 到上一级
       */
      upSubGraph(): void;
      /**
       * 将拓扑导出为base64格式字符串
       * @param {color} background 背景色
       * @return {String}
       */
      toDataURL(background: String): String;

      /**
       * 在当前值基础上增加水平和垂直平移值
       * @param {number} x 新增的水平平移值
       * @param {number} y 新增的垂直平移值
       * @param {boolean} [anim] 是否使用动画
       */
      translate(x: number, y: number, anim?: boolean): void;

      /**
       * 获取或设置水平平移值，没有参数时相当于{@link graph.GraphView#getTranslateX getTranslateX}，有参数时相当于{@link graph.GraphView#setTranslateX setTranslateX}
       * @param {number} value 平移值
       */
      tx(value: number): void;

      /**
       * 获取或设置垂直平移值，没有参数时相当于{@link graph.GraphView#getTranslateY getTranslateY}，有参数时相当于{@link graph.GraphView#setTranslateY setTranslateY}
       * @param {number} value 平移值
       */
      ty(value: number): void;

      /**
       * 删除交互事件监听器，{@link graph.GraphView#removeInteractorListener removeInteractorListener}的缩写
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       */
      umi(listener: Function, scope?: Object): void;

      /**
       * 删除自身属性变化事件监听器，{@link graph.GraphView#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 立刻刷新拓扑
       */
      validate(): void;

      /**
       * 放大拓扑
       * @param {boolean} [anim] 是否使用动画
       * @param {Object} [point] 缩放中心点的坐标
       */
      zoomIn(anim?: boolean, point?: Object): void;

      /**
       * 缩小拓扑
       * @param {boolean} [anim] 是否使用动画
       * @param {Object} [point] 缩放中心点的坐标
       */
      zoomOut(anim?: boolean, point?: Object): void;

      /**
       * 将拓扑缩放值改为1
       * @param {boolean} [anim] 是否使用动画
       * @param {Object} [point] 缩放中心点的坐标
       */
      zoomReset(anim?: boolean, point?: Object): void;

      /**
       * 返回节点选中边框宽度，可重写逻辑
       * @param {Data} 节点
       */
      getSelectWidth(data: Data): number;

      /**
       * 设置拓扑是否可以通过鼠标滚轮或者两指缩放
       * @param {boolean} zoomable 是否可缩放
       */
      setZoomable(zoomable: boolean): void;

      updateBackground(): void;

      updateDOMAppendMatrix(): void;
    }
  }

  // tp 类型补充

  type deserializeCallBack = (
    json: any,
    dm: DataModel,
    gv: graph.GraphView,
    data: List,
  ) => void;
  namespace graph3d {
    /**
     * 3D渲染引擎组件，可视化呈现数据模型的三维环境场景
     * @param {DataModel} dataModel 绑定的数据模型
     * @constructor
     */
    export class Graph3dView {
      constructor(dataModel?: DataModel);

      acquireProgram(): void;

      addCamera(camera: any): void;
      /**
       * 增加交互事件监听器
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
       * @example
       * //示例：
       * graph3dView.addInteractorListener(function(event) {
       * 		//event格式：
       * 		{
       * 			kind: 'clickData',//事件类型
       * 			data: data,//事件相关的数据元素
       * 			part: "part",//事件的区域,icon、label等
       * 			event: e//html原生事件
       * 		}
       * });
       */
      addInteractorListener(
        listener: Function,
        scope?: Object,
        ahead?: boolean,
      ): void;

      /**
       * 增加自身属性变化事件监听器
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: boolean,
      ): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: boolean,
      ): void;

      /**
       * 将视图插入到 dom 中
       * @param parentNode 父DOM
       */
      addToDOM(parentNode?: HTMLDivElement): void;

      bindEnvMap(gl: WebGLRenderingContext): void;

      /**
       * 检测事件是否在 note 位置上
       * @param event
       * @param data
       * @param part
       */
      checkDoubleClickOnNote(
        event: MouseEvent,
        data: Data,
        part: string,
      ): boolean;

      checkDoubleClickOnRotation(
        event: MouseEvent,
        data: Data,
        part: string,
      ): boolean;

      /**
       * 统计帧率
       */
      countFrame(): number;

      /**
       * 删除指定贴图
       * @param name
       */
      deleteTexture(name: string): void;

      drawReflectors(gl: any): void;

      drawSky(gl: any, prg: any, pickColorMap: any): void;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 获取{@link SelectionModel#getDataModel getDataModel}的缩写
       */
      dm(): DataModel;

      /**
       * 设置数据模型 {@link SelectionModel#getDataModel getDataModel}的缩写
       * @return {DataModel} dataModel
       */
      dm(dataModel: DataModel): void;

      /**
       * 反序列化
       * @param url
       * @param callback function(json, dm, view, datas)
       */
      deserialize(url: string, callback: deserializeCallBack): void;

      /**
       * 开启或关闭后处理
       * @param keys 关键词 Bloom | Blur | Dof | HueSaturation，多个可以用英文逗号分割
       * @param enable 是否开启
       */
      enablePostProcessing(keys: string, enable: boolean): void;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      fi(event: any): void;

      fireInteractorEvent(event: any): void;

      /**
       * 派发属性变化事件，可使用fp的简写方式
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @param equalFunc 相等判断函数
       * @param params 其它参数
       */
      firePropertyChange(
        property: string,
        oldValue: any,
        newValue: any,
        equalFunc?: Function,
        params?: any,
      ): void;

      /**
       * 派发属性变化事件，firePropertyChange 方法的简写
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @param equalFunc 相等判断函数
       * @param params 其它参数
       */
      fp(
        property: string,
        oldValue: any,
        newValue: any,
        equalFunc?: Function,
        params?: any,
      ): void;

      fireViewEvent(event: any): void;

      /**
       * 获得节点染色值，默认返回 style 中的 body.color 属性，可重载自定义
       * @param data
       */
      getBodyColor(data: Data): string;

      /**
       * 获得传去节点的包围盒，若无传入节点则返回当前选中的节点的
       */
      getBoundingBox(nodeList?: Node | Array<Node>): any;

      /**
       * 获取场景中心信息，返回信息如 { length, width, height }
       */
      getCenterInfo(): Object;

      getCoreInteractor(): any;

      /**
       * 获得节点三维绘制信息
       */
      getData3dUI(data: Data): any;

      /**
       * 获得对应交互事件位置的节点，前提是节点必须可选中
       * @param event
       */
      getDataAt(event: MouseEvent): Data;

      /**
       * 返回节点是否在高亮状态下
       * @param data
       */
      getDataHighlightMode(data: Data): string;

      /**
       * 获取调试面板的 dom 元素
       */
      getDebugTip(): HTMLDivElement;

      /**
       * 获取设备像素比
       */
      getDevicePixelRatio(): number;

      /**
       * 返回禁用遮罩层 div
       */
      getDisabledDiv(): HTMLElement;

      /**
       * 获取环境光贴图
       */
      getEnvmap(): string;

      /**
             * 获取节点指定面的染色值，可重载自定义
             * @param data 
             * @param face 
             * @example
             * // 默认实现如下
             * function (data, face) {
                    return data.s(face + '.blend') || data.s('all.blend');
                }
             */
      getFaceBlend(data: Data, face: string): string;

      /**
             * 获取节点指定面的染色图贴，可重载自定义
             * @param data 
             * @param face 
             * @example
             * // 默认实现如下
             *  function (data, face) {
                    return data.s(face + '.blend.image') || data.s('all.blend.image');
                }
             */
      getFaceBlendImage(data: Data, face: string): string;

      /**
             * 获取节点指定面的颜色，可重载自定义
             * @param data 
             * @param face 
             * @example
             * // 默认实现如下
             *  function (data, face) {
                    return data.s(face + '.color') || data.s('all.color');
                }
             */
      getFaceColor(data: Data, face: string): string;

      /**
             * 获取节点指定面被剔除后是否可选中，可重载自定义
             * @param data 
             * @param face 
             * @example
             * // 默认实现如下
             *  function (data, face) {
                    return data.s(face + '.discard.selectable') || data.s('all.discard.selectable');
                }
             */
      getFaceDiscardSelectable(data: Data, face: string): boolean;

      /**
             * 获取节点指定面贴图，可重载自定义
             * @param data 
             * @param face 
             * @example
             * // 默认实现如下
             *  function (data, face) {
                    return data.s(face + '.image') || data.s('all.image');
                }
             */
      getFaceImage(data: Data, face: string): string;

      /**
             * 获取节点指定面是否受光影响，可重载自定义
             * @param data 
             * @param face 
             * @example
             * // 默认实现如下
             *  function (data, face) {
                    return data.s(face + '.light') || data.s('all.light');
                }
             */
      getFaceLight(data: Data, face: string): boolean;

      /**
             * 获取节点指定面透明度，可重载自定义
             * @param data 
             * @param face 
             * @example
             * // 默认实现如下
             *  function (data, face) {
                    return data.s(face + '.opacity') || data.s('all.opacity');
                }
             */
      getFaceOpacity(data: Data, face: string): number;

      /**
             * 获取节点指定面反面颜色，可重载自定义
             * @param data 
             * @param face 
             * @example
             * // 默认实现如下
             *  function (data, face) {
                    return data.s(face + '.reverse.color') || data.s('all.reverse.color');
                }
             */
      getFaceReverseColor(data: Data, face: string): string;

      /**
             * 获取节点指定面反面是否可见，即背裁切，可重载自定义
             * @param data 
             * @param face 
             * @example
             * // 默认实现如下
             *  function (data, face) {
                    return data.s(face + '.reverse.cull') || data.s('all.reverse.cull');
                }
             */
      getFaceReverseCull(data: Data, face: string): boolean;

      /**
             * 获取节点指定面反面是否展示正面内容，即背拷贝，可重载自定义
             * @param data 
             * @param face 
             * @example
             * // 默认实现如下
             *  function (data, face) {
                    return data.s(face + '.reverse.flip') || data.s('all.reverse.flip');
                }
             */
      getFaceReverseFlip(data: Data, face: string): boolean;

      /**
             * 获取节点指定面反面是否透明，即背拷贝，可重载自定义
             * @param data 
             * @param face 
             * @example
             * // 默认实现如下
             *  function (data, face) {
                    return data.s(face + '.transparent') || data.s('all.transparent');
                }
             */
      getFaceTransparent(data: Data, face: string): boolean;

      /**
             * 获取节点指定面uv 定义，默认值[0,0, 0,1, 1,1, 1,0]，左旋转90度[1,0,  0,0, 0,1, 1,1]，右旋转90度[0,1, 1,1, 1,0, 0,0]，右旋转180度[1,1, 1,0, 0,0, 0,1]，左旋转180度：[0,1, 0,0, 1,0, 1,1]，可重载自定义
             * @param data 
             * @param face 
             * @example
             * // 默认实现如下
             *  function (data, face) {
                    return data.s(face + '.uv') || data.s('all.uv');
                }
             */
      getFaceUv(data: Data, face: string): number[];

      /**
             * 获取节点指定面uv偏移，格式为[0.5,0.5]
             * @param data 
             * @param face 
             * @example
             * // 默认实现如下
             *  function (data, face) {
                    return data.s(face + '.uv.offset') || data.s('all.uv.offset');
                }
             */
      getFaceUvOffset(data: Data, face: string): number[];

      /**
             * 获取节点指定面uv缩放，格式为[0.5,0.5]
             * @param data 
             * @param face 
             * @example
             * // 默认实现如下
             *  function (data, face) {
                    return data.s(face + '.uv.scale') || data.s('all.uv.scale');
                }
             */
      getFaceUvScale(data: Data, face: string): number[];

      /**
             * 获取节点指定面是否可见
             * @param data 
             * @param face 
             * @example
             * // 默认实现如下
             *  function (data, face) {
                    return data.s(face + '.visible') || data.s('all.visible');
                }
             */
      getFaceVisible(data: Data, face: string): boolean;

      /**
       * 获取雾化颜色值
       */
      getFogColor(): string;

      /**
       * 获取雾化远端距离
       */
      getFogFar(): number;

      /**
       * 获取雾化近端距离
       */
      getFogNear(): number;

      getFrustum(): any;

      getGL(): any;

      /**
       * 获取头灯环境光比例，默认为0.7，即无论灯的角度，头灯都会贡献70%的环境光，剩下30%根据灯的角度决定强弱
       */
      getHeadlightAmbientIntensity(): number;

      /**
       * 获取头灯的颜色
       */
      getHeadlightColor(): string;

      /**
       * 获取头灯强度，默认为1，大于1增强，小于1减弱
       */
      getHeadlightIntensity(): number;

      /**
       * 获取头灯影响范围，默认为0代表可照射到无穷远处，如果设置了值则光照射效果随物体远离光影而衰减
       */
      getHeadlightRange(): number;

      /**
       * 获取当前高亮的颜色，默认为rgba(190, 210, 250, 1)
       */
      getHighlightColor(): string;

      getHighlightHelper(): any;

      /**
       * 获取当前高亮的模式，默认为style。包括：disabled关闭高亮，selected选中高亮，hover悬浮高亮，style风格设置高亮
       */
      getHighlightMode(): string;

      /**
       * 获取当前高亮的线宽，默认为0.8
       */
      getHighlightWidth(): number;

      /**
       * 返回交互事件位置的面信息，返回信息，返回格式如 { node, face } ，face 可能是六面信息，也可能是 body note label
       * @param event
       */
      getHitFaceInfo(event: MouseEvent): Object;

      /**
       * 计算鼠标射线与三维场景中由 point 和 normal 定义的平面的交点
       * @param eventOrPoint 鼠标事件或屏幕坐标点
       * @param ponit 平面上的任意一点，默认为[0,0,0]
       * @param normal 平面法向量，默认为[0,1,0]
       */
      getHitPosition(
        eventOrPoint: any,
        ponit?: number[],
        normal?: number,
      ): number[];

      /**
       * 获取悬停延迟时间，若无设置使用 Default.hoverDelay
       */
      getHoverDelay(): number;

      /**
       * 获取图元在3d的移动范围，可取值xyz|xy|xz|yz|x|y|z
       * @param event
       * @param data
       */
      getMoveMode(event: MouseEvent, data: Data): string;

      getMat(): any;

      /**
       * 获取 Project View Matrix
       */
      getPVMatrix(): any;

      /**
       * 获取当前 Picker 的绘制精度
       */
      getPickerResolution(): number;

      getPositionInfo(position: any): any;

      /**
       * 获取贴图信息
       * @param name
       * @param data
       * @param part
       */
      getTexture(name: string, data: Data, part: string): any;

      /**
       * 获取后处理对象
       */
      getPostProcessing(): any;

      /**
       * 获取后处理模块
       * @param name
       */
      getPostProcessingModule(name?: string): any;

      /**
       * 获取后处理具体模块的属性值
       * @param module
       * @param name
       */
      getPostProcessingValue(module: string, name: string): any;

      /**
       * 获取当前场景的 Raycaster 射线检测器
       */
      getRaycaster(): any;

      /**
       * 将屏幕坐标转换为视图坐标
       * @param event
       */
      getLogicalPoint(event: MouseEvent): Point;

      /**
       * 当前渲染信息，建议通过g3d.showDebugTip 来获取
       */
      getRenderInfo(): any;

      /**
       * 返回图元 3D 文字内容， 默认  return data.getStyle('shape3d.text') || this.getLabel(data);
       * @param data
       */
      getShape3dText(data: Data): string;

      /**
       * 返回天空球节点
       */
      getSkyBox(): Node;

      /**
       * 获得管线长度
       * @param edgeOrPolyline
       */
      getLineLength(edgeOrPolyline: Shape | Edge): number;

      /**
       * 获得管线指定偏移值位置
       * @param edgeOrPolyline 管线
       * @param offset 偏移值，可用 getLineLength 获取总长度，范围为 0 ~ 总长
       */
      getLineOffset(edgeOrPolyline: Shape | Edge, offset: number): any;

      /**
       * 或者节点 3D 绘制信息
       * @param data 节点
       */
      getData3dUI(data: Data): any;

      /**
       * 获取截头锥体的宽高比
       * @return {number}
       */
      getAspect(): number;

      /**
       * 获取x轴线颜色
       * @return {color}
       */
      getAxisXColor(): String;

      /**
       * 获取y轴线颜色
       * @return {color}
       */
      getAxisYColor(): String;

      /**
       * 获取z轴线颜色
       * @return {color}
       */
      getAxisZColor(): String;

      /**
       * 获取碰撞边界
       * @return {Array}
       */
      getBoundaries(): Array<Object>;

      /**
       * 获取图元最终亮度，默认为1,大于1变亮，小于1变暗
       * @param {Data} data 图元
       * @return {number}
       */
      getBrightness(data: Data): number;

      /**
       * 获取渲染的画布
       * @return {HTMLCanvasElement} 画布
       */
      getCanvas(): HTMLCanvasElement;

      /**
       * 获取拓扑中心点
       * @return {Array} 中心点坐标，格式：[x, y, z]
       */
      getCenter(): Array<number>;

      /**
       * 获取当前子网
       * @return {SubGraph} 子网对象
       */
      getCurrentSubGraph(): SubGraph;

      /**
       * 传入逻辑坐标点或者交互event事件参数，返回当前点下的图元
       * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
       * @return {Data} 点下的图元
       */
      getDataAt(pointOrEvent: Object): Data | null;

      /**
       * 传入逻辑坐标点或者交互event事件参数，返回当前点下的图元及part信息
       * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
       * @return {Object} 图元和part信息
       */
      getDataInfoAt(pointOrEvent: Object): Object;

      /**
       * 获取绑定的数据模型
       * @return {DataModel} 数据模型
       */
      getDataModel(): DataModel;

      /**
       * 获取矩形区域内的图元
       * @param {rect} rect 逻辑坐标区域
       * @return {List}
       */
      getDatasInRect(rect: Rect): List;

      /**
       * 获取编辑过滤器函数
       * @return {Function}
       */
      getEditableFunc(): Function;

      /**
       * 获取大小编辑控制条的颜色
       * @return {color}
       */
      getEditSizeColor(): String;

      /**
       * 获取眼睛（或Camera）所在位置，默认值为[0, 300, 1000]
       * @return {Array} 眼睛位置坐标，格式[x, y, z]
       */
      getEye(): Array<number>;

      /**
       * 获取远端截面位置，默认值为10000
       * @return {number}
       */
      getFar(): number;

      /**
       * 获取垂直方向的视觉张角弧度，默认值为Math.PI/4
       * @return {number}
       */
      getFovy(): number;

      /**
       * 获取网格线颜色
       * @return {color}
       */
      getGridColor(): String;

      /**
       * 获取网格线间距
       * @return {number}
       */
      getGridGap(): number;

      /**
       * 获取网格行列数，默认为40
       * @return {number}
       */
      getGridSize(): number;

      /**
       * 获取拓扑组件的布局高度
       * @return {number}
       */
      getHeight(): number;

      /**
       * 获取交互器
       * @return {List}
       */
      getInteractors(): List;

      /**
       * 获取图元的label，用于在拓扑上显示文字信息，可重载返回自定义文字
       * @param {Data} data 图元
       * @return {String} 图元label文字，默认返回data.s('label')||data.getName();
       */
      getLabel(data: Data): String;

      /**
       * 获取图元的第二个label，用于在拓扑上显示文字，可重载返回自定义文字
       * @param {Data} data 图元
       * @return {String} 图元第二个label的文字，默认返回data.s('label2')
       */
      getLabel2(data: Data): String;

      /**
       * 获取图元的第二个label的背景色，可重载返回自定义颜色
       * @param {Data} data 图元
       * @return {color} 图元第二个label的背景色，默认返回data.s('label2.background')
       */
      getLabel2Background(data: Data): String;

      /**
       * 获取图元的第二个label的文字颜色，可重载返回自定义颜色
       * @param {Data} data 图元
       * @return {color} 图元第二个label的文字颜色，默认返回data.s('label2.color')
       */
      getLabel2Color(data: Data): String;

      /**
       * 获取图元label的背景色，可重载返回自定义颜色
       * @param {Data} data 图元
       * @return {color} 图元label的背景色，默认返回data.s('label.background')
       */
      getLabelBackground(data: Data): String;

      /**
       * 获取图元label的文字颜色，可重载返回自定义颜色
       * @param {Data} data 图元
       * @return {color} 图元label的文字颜色，默认返回data.s('label.color')
       */
      getLabelColor(data: Data): String;

      /**
       * 获取移动过滤器函数
       * @return {Function}
       */
      getMovableFunc(): Function;

      /**
       * 获取移动漫游步进
       * @return {number}
       */
      getMoveStep(): number;

      /**
       * 获取近端截面位置，默认值为10
       * @return {number}
       */
      getNear(): number;

      /**
       * 获取图元的note，用于在拓扑上显示标注信息，可重载返回自定义文字
       * @param {Data} data 图元
       * @return {String} 图元note文字，默认返回data.s('note')
       */
      getNote(data: Data): string;

      /**
       * 获取图元的第二个note，用于在拓扑上显示标注信息，可重载返回自定义文字
       * @param {Data} data 图元
       * @return {String} 图元第二个note文字，默认返回data.s('note2')
       */
      getNote2(data: Data): string;

      /**
       * 获取图元的第二个note的背景色，可重载返回自定义颜色
       * @param {Data} data 图元
       * @return {color} 图元第二个note的背景色，默认返回data.s('note2.background')
       */
      getNote2Background(data: Data): string;

      /**
       * 获取图元note的文字颜色，可重载返回自定义颜色
       * @param {Data} data 图元
       * @return {color} 图元note的文字颜色，默认返回data.s('note.background')
       */
      getNoteBackground(data: Data): string;

      /**
       * 获取图元的透明度，可重载返回自定义透明度
       * @param {Data} data 图元
       * @return {number} 图元透明度，默认返回data.s('opacity')
       */
      getOpacity(data: Data): number;

      /**
       * 获取正交投影宽度，默认为2000
       * @return {number}
       */
      getOrthoWidth(): number;

      /**
       * 获取框选选择框的背景色
       * @return {color}
       */
      getRectSelectBackground(): String;

      /**
       * 获取旋转编辑过滤器函数
       * @return {Function}
       */
      getRotationEditableFunc(): Function;

      /**
       * 获取选择过滤器函数
       * @return {Function}
       */
      getSelectableFunc(): Function;

      /**
       * 获取选中模型
       * @return {SelectionModel}
       */
      getSelectionModel(): SelectionModel;

      /**
       * 获取大小编辑过滤器
       * @return {Function}
       */
      getSizeEditableFunc(): Function;

      /**
       * 获取组件内部的贴图映射表
       * @return {Object}
       */
      getTextureMap(): Object;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @param {Event} e 鼠标或Touch事件对象
       * @return {String} toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(e: Object): String;

      /**
       * 获取摄像头正上方向，该参数一般较少改动，默认值为[0, 1, 0]
       * @return {Array} 格式：[x, y, z]
       */
      getUp(): Array<number>;

      /**
       * 获取拓扑组件的根层div
       * @return {HTMLDivElement}
       */
      getView(): HTMLDivElement;

      getViewRatio(view: any): number;

      getViewport(): any;

      /**
             * 返回图元线框信息
             * @param data 
             * @example 
             * {
                    color: data.s('wf.color'),
                    width: data.s('wf.width'),
                    mat: data.s('wf.mat'),
                    geometry: true
                }
             */
      getWireframeGeometry(data: Data): Object;

      /**
       * 获取可见过滤器函数
       * @return {Function}
       */
      getVisibleFunc(): Function;

      /**
       * 获取拓扑组件的布局宽度
       * @return {number}
       */
      getWidth(): number;

      /**
       * 定义图元立体线框效果
       * @param {Data} data 数据元素
       * @example //示例:
       * g3d.getWireframe(data){
       *     var visible = data.s('wf.visible');
       *     if(visible === true || (visible === 'selected' && this.isSelected(data))){
       *         return {
       *             color: data.s('wf.color'),
       *             width: data.s('wf.width'),
       *             short: data.s('wf.short'),
       *             mat: data.s('wf.mat')
       *         };
       *     }
       * },
       * @return {Object}
       */
      getWireframe(data: Data): Object;

      /**
       * 当前滚轮缩放是否按照Center来缩放，true为按照Center缩放，false按照鼠标缩放
       */
      getZoomToCenter(): boolean;

      /**
       * 图元点击回调，可重载自定义
       * @param e
       * @param data
       * @param part
       */
      handleClick(e: MouseEvent, data: Data, part: string): void;

      /**
       * 处理数据节点变化，可重载自定义
       * @param event
       */
      handleDataModelChange(event: any): void;

      handleDataModelPropertyChange(event: any): void;

      handleDataPropertyChange(event: any): void;

      /**
       * 处理按下 delete 按键的动作，可重载自定义
       * @param event
       */
      handleDelete(event: any): void;

      /**
       * 图元双击回调，可重载自定义
       * @param e
       * @param data
       * @param part
       */
      handleDoubleClick(e: MouseEvent, data: Data, part: string): void;

      handleHierarchyChange(event: any): void;

      /**
       * 案件键盘事件，可重载自定义
       * @param event
       */
      handleKeyDown(event: KeyboardEvent): void;

      /**
       * 处理 touch 设备上的双指操作交互，可重载自定义
       * @param event
       */
      handlePinch(event: TouchEvent): void;

      /**
       * 处理鼠标滚轮操作交互，可重载自定义
       * @param event
       */
      handleScroll(event: MouseEvent): void;

      /**
       * 处理选中变化事件
       * @param event
       */
      handleSelectionChange(event: any): void;

      /**
       * 隐藏调试面板
       */
      hideDebugTip(): void;

      handleTick(): void;
      /**
       * 计算鼠标射线与节点的交点,
       * @param event 鼠标事件或屏幕坐标点
       * @param data 被检测的节点
       * @returns 返回 {local, normal, part, uv, world, worldNormal} 这样的对象，其中 local 是相对坐标，normal 是相对法线，part 是当前位置所在部分，uv 是当前位置的贴图 uv 信息，world 是世界坐标，worldNormal 是世界法线
       */
      intersectObject(event: any, data: Data): Object;

      /**
       * 返回 Nodes 中的第一个撞击到的 Node 位置
       * @param pointOrEventOrRay
       * @param objects
       * @param filter
       */
      intersectObjects(
        pointOrEventOrRay: any,
        nodes: Node[],
        filter?: Function,
      ): Object;

      inViewSpace(v: any): boolean;

      /**
       * 无效拓扑，并调用延时刷新
       * @param {number} delay 延迟刷新的间隔事件(单位:ms)
       */
      invalidate(delay?: number): void;

      /**
       * 无效拓扑中的所有图元
       */
      invalidateAll(): void;

      /**
       * 无效拓扑中的图元
       * @param {Data} data 要无效的图元
       */
      invalidateData(data: Data): void;

      /**
       * 无效选中模型中的图元
       */
      invalidateSelection(): void;

      /**
       * 无效批量
       * @param name
       */
      invalidateBatch(name: string): void;

      /**
       * 无效线框
       * @param data
       */
      invalidateCachedGeometry(data: Data): void;

      /**
       * 无效贴图
       * @param data
       */
      invalidateCachedTexture(data: Data): void;

      /**
       * 无效灯光
       * @param data
       */
      invalidateLight(data: Data): void;

      /**
       * 废弃方法，请使用 invalidateCachedTexture
       * @deprecated
       * @param data
       */
      invalidateShape3dCachedImage(data: Data): void;

      /**
       * 批量染色是否启用
       */
      isBatchBlendDisabled(): boolean;

      /**
       * 批量亮度是否启用
       */
      isBatchBrightnessDisabled(): boolean;

      /**
       * 批量颜色是否启用
       */
      isBatchColorDisabled(): boolean;

      /**
       * 获取 block 可被选中
       */
      isBlockSelectable(): boolean;

      /**
       * 虚线是否禁用
       */
      isDashDisabled(): boolean;

      /**
       * 调试面板是否显示
       */
      isDebugTipShowing(): boolean;

      /**
       * 获取当前 EditHelper 是否关闭
       */
      isEditHelperDisabled(): boolean;

      /**
       * 雾化功能是否禁用
       */
      isFogDisabled(): boolean;

      /**
       *  头灯是否禁用
       */
      isHeadlightDisabled(): boolean;

      /**
       * 判断节点是否可交互，默认由 style 中的 interactive 决定，可重载自定义，如禁用所有交互 gv.isInteractive = () => false;
       */
      isInteractive(data: Data): boolean;

      /**
       * 选中图元时，是否自动平移拓扑以确保该图元出现在可见区域内
       * @return {boolean}
       */
      isAutoMakeVisible(): boolean;

      /**
       * 是否显示中心点轴线
       * @return {boolean}
       */
      isCenterAxisVisible(): boolean;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return {boolean}
       */
      isDisabled(): boolean;

      /**
       * 判断图元是否可被编辑
       * @param {Data} data 图元
       * @return {boolean}
       */
      isEditable(data: Data): boolean;

      /**
       * 是否是第一人称模式
       * @return {boolean}
       */
      isFirstPersonMode(): boolean;

      /**
       * 是否显示网格
       * @return {boolean}
       */
      isGridVisible(): boolean;

      /**
       * 判断图元是否可移动
       * @param {Data} data 图元
       * @return {boolean}
       */
      isMovable(data: Data): boolean;

      /**
       * 判断图元label是否可见，默认当拓扑缩放值大于0.15时可见
       * @param {Data} data 图元
       * @return {boolean}
       */
      isLabelVisible(data: Data): boolean;

      /**
       * 判断图元note是否可见，默认当拓扑缩放值大于0.15时可见
       * @param {Data} data 图元
       * @return {boolean}
       */
      isNoteVisible(data: Data): boolean;

      /**
       * 是否使用鼠标漫游，默认为true, 如果改为false, 则鼠标左键右键都不支持前进后退的操作功能，
       * 但左键可拖拽编辑图元，右键可改变视角方向，采用这样的方式一般会结合键盘w|s|a|d按键进行漫游操作
       * @return {boolean}
       */
      isMouseRoamable(): boolean;

      /**
       * 是否显示坐标原点[0,0,0]轴线
       * @return {boolean}
       */
      isOriginAxisVisible(): boolean;

      /**
       * 是否使用正交投影
       * @return {boolean}
       */
      isOrtho(): boolean;

      /**
       * 是否允许平移操作
       * @return {boolean}
       */
      isPannable(): boolean;

      /**
       * 是否允许框选操作
       * @return {boolean}
       */
      isRectSelectable(): boolean;

      isRectOverlapping(data: Data): boolean;

      /**
       * 判断是否允许通过空格将拓扑复位
       * @return {boolean}
       */
      isResettable(): boolean;

      /**
       * 是否可旋转
       * @return {boolean}
       */
      isRotatable(): boolean;

      /**
       * 获取旋转步进
       * @return {number}
       */
      getRotateStep(): number;

      /**
       * 判断图元是否可编辑旋转
       * @param {Data} data 图元
       * @return {boolean}
       */
      isRotationEditable(data: Data): boolean;

      /**
       * 判断图元是否可被选中
       * @param {Data} data 图元
       * @return {boolean}
       */
      isSelectable(data: Data): boolean;

      /**
       * 判断图元是否被选中
       * @param {Data} data 图元
       * @return {boolean}
       */
      isSelected(data: Data): boolean;

      /**
       * 根据id判断图元是否被选中
       * @param {String|number} id 图元id
       * @return {boolean}
       */
      isSelectedById(id: String | number): boolean;

      /**
       * 当前拓扑是否共享选中模型
       * @return {boolean}
       */
      isSelectionModelShared(): boolean;

      /**
       * 图元是否可编辑大小
       * @param {Data} data 图元
       * @return {boolean}
       */
      isSizeEditable(data: Data): boolean;

      /**
       * 返回提示功能是否可用
       */
      isToolTipEnabled(): boolean;

      /**
       * 判断图元是否开启透明遮罩（不可见但依然可交互）
       * @param data
       */
      isTransparentMask(data: Data): boolean;

      /**
       * getLogicalPoint 的简写
       * @param pointOrEvent
       */
      lp(pointOrEvent: MouseEvent): Point;

      /**
       * 判断图元是否可见
       * @param {Data} data 图元
       * @return {boolean}
       */
      isVisible(data: Data): boolean;

      /**
       * 是否可进退
       * @return {boolean}
       */
      isWalkable(): boolean;

      /**
       * 是否可缩放
       * @return {boolean}
       */
      isZoomable(): boolean;

      /**
       * 无效拓扑，并调用延时刷新，{@link graph3d.Graph3dView#invalidate invalidate}的缩写
       * @param {number} delay 延迟刷新的间隔事件(单位:ms)
       */
      iv(delay?: number): void;

      layout(x: number, y: number, width: number, height: number): void;

      /**
       * 平移拓扑以确保该图元在可见区域内
       * @param {Data} data 图元
       */
      makeVisible(data: Data): void;

      /**
       * 增加交互事件监听器，{@link graph3d.Graph3dView#addInteractorListener addInteractorListener}的缩写
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
       * @example //示例：
       * graph3dView.mi(function(event) {
       * 		//event格式：
       * 		{
       * 			kind: 'clickData',//事件类型
       * 			data: data,//事件相关的数据元素
       * 			part: "part",//事件的区域,icon、label等
       * 			event: e//html原生事件
       * 		}
       * });
       */
      mi(listener: Function, scope?: Object, ahead?: boolean): void;

      /**
       * 移动选中模型中图元的位置
       * @param {number} dx x轴方向移动值
       * @param {number} dy y轴方向移动值
       * @param {number} dz z轴方向移动值
       */
      moveSelection(dx: number, dy: number, dz: number): void;

      /**
       * 增加自身属性变化事件监听器，{@link graph3d.Graph3dView#addPropertyChangeListener addPropertyChangeListener}的缩写
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
       */
      mp(listener: Function, scope?: Object, ahead?: boolean): void;

      /**
       * 自动布局动画结束后时回调，可重载做后续处理
       */
      onAutoLayoutEnded(): void;

      /**
       * 单击拓扑背景时回调，可重载做后续处理
       * @param {Event} event 事件对象
       */
      onBackgroundClicked(event: Object): void;

      /**
       * 双击拓扑背景时回调，默认调用upSubGraph()进入上一层子网，可重载改变默认逻辑或做后续处理
       * @param {Event} event 事件对象
       */
      onBackgroundDoubleClicked(event: Object): void;

      onCSGBoxDoubleClicked(
        csgBox: CSGBox,
        event: MouseEvent,
        part?: string,
      ): void;

      onDoorWindowDoubleClicked(
        csgBox: CSGBox,
        event: MouseEvent,
        part?: string,
      ): void;

      /**
       * 属性变化回调函数，可重载做后续处理
       * @param {Object} event 属性变化事件
       * @example //event格式：
       * {
       * 	   property: 'name',//发生变化的属性
       * 	   oldValue: 'oldValue',//旧值
       * 	   newValue: 'newValue',''新值
       * 	   data: data//发生变化的data
       * }
       *
       */
      onPropertyChanged(event: any): void;

      /**
       * 选择模型共享变化时回调
       */
      onSelectionModelSharedChanged(): void;

      /**
       * 图元被点击时回调，可重载做后续处理
       * @param {Data} data 被点击的图元
       * @param {Event} e 事件对象
       * @param {Object} part 区域
       */
      onDataClicked(data: Data, e: Object, part: Object): void;

      /**
       * 图元被双击时回调，可重载做后续处理
       * @param {Data} data 双击的图元
       * @param {Event} e 事件对象
       * @param {Object} part 区域
       */
      onDataDoubleClicked(data: Data, e: Object, part: Object): void;

      /**
       * 连线图元被双击时回调，默认调用edge.toggle()，可重载改变默认逻辑或做后续处理
       * @param {Edge} edge 连线
       * @param {Event} e 事件对象
       * @param {Object} part 区域
       */
      onEdgeDoubleClicked(edge: Edge, e: Object, part: Object): void;

      /**
       * 组类型图元被双击时回调，默认实现调用group.toggle()，可重载改变默认逻辑或做后续处理
       * @param {Group} group Group对象
       * @param {Event} e 事件对象
       * @param {Object} part 区域
       */
      onGroupDoubleClicked(group: Group, e: Object, part: Object): void;

      /**
       * 移动图元位置结束时回调，可重载做后续处理
       */
      onMoveEnded(): void;

      /**
       * 手抓图平移拓扑图结束时回调，可重载做后续处理
       */
      onPanEnded(): void;

      /**
       * 触屏进行双指缩放结束时回调，可重载做后续处理
       */
      onPinchEnded(): void;

      /**
       * 框选结束时回调，可重载做后续处理
       */
      onRectSelectEnded(): void;

      /**
       * 旋转结束时回调，可重载做后续处理
       */
      onRotateEnded(): void;

      /**
       * 选中变化时回调，默认实现会使得该选中图元出现在拓扑图上的可见范围
       * @param {Event} event 选中变化事件对象
       */
      onSelectionChanged(event: Object): void;

      /**
       * 子网图元被双击时回调，默认实现进入子网
       * @param {SubGraph} subGraph 子网对象
       * @param {Event} event 事件对象
       * @param {Object} part 区域
       */
      onSubGraphDoubleClicked(
        subGraph: SubGraph,
        event: Object,
        part: Object,
      ): void;

      /**
       * 进退操作结束时回调，可重载做后续处理
       * @param {SubGraph} subGraph 子网对象
       * @param {Event} event 事件对象
       */
      onWalkEnded(): void;

      /**
       * 缩放动画结束时回调
       */
      onZoomEnded(): void;

      /**
       * 上下左右四个方向的平移，本质为eye和center同时做四个方向的相同偏移量，
       * dx左右偏移参数，dy上下偏移参数，dx和dy一般代表屏幕移动像素，
       * Graph3dView自动会换算成合理的3D空间逻辑坐标偏移量。<br>
       * firstPersonMode参数为空时则默认采用Graph3dView#isFirstPersonMode()当前值，
       * 如果为第一人称模式调用pan操作，该函数会考虑Graph3dView#getBoundaries()边界限制。
       * @param  {dx} dx x轴方向的偏移量
       * @param  {dy} dy y轴方向的偏移量
       * @param  {boolean} [anim] 是否使用动画
       * @param  {boolean} [firstPersonMode] 是否第一人称模式
       */
      pan(
        dx: number,
        dy: number,
        anim?: boolean,
        firstPersonMode?: boolean,
      ): void;

      /**
       * 判断节点是否可交互时是否阻止默认场景交互行为
       * @param data
       */
      preventDefaultWhenInteractive(data: Data): boolean;

      renderEnvToCube(
        width: number,
        height: number,
        side: string,
        textureWidth: number,
      ): void;

      /**
       * 重绘拓扑
       */
      redraw(): void;

      /**
       * 删除交互事件监听器
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       */
      removeInteractorListener(listener: Function, scope?: Object): void;

      /**
       * 删除自身属性变化事件监听器
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除所有选中的图元
       */
      removeSelection(): void;

      /**
       * 删除视图事件监听器
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 复位函数，调用该函数将eye、center和up三个变量设置为Default上对应的 graph3dViewCenter、graph3dViewEye和graph3dViewUp初始默认值。
       */
      reset(): void;

      /**
       * 上下左右四个方位旋转一定角度
       * @param {number} leftRight 水平旋转弧度
       * @param {number} upDown 垂直旋转弧度
       * @param {boolean} [anim] 是否使用动画
       * @param {boolean} [firstPersonMode] 是否第一人称模式，为空时则采用Graph3dView#isFirstPersonMode()，该参数将影响旋转移动的参照标准，为默认非第一人称模式时， 旋转是以center为中心进行旋转，也就是围绕中心物体旋转，当为第一人称时旋转以eye为中心进行旋转，也就是旋转眼睛朝向方向。
       */
      rotate(
        leftRight: number,
        upDown: number,
        anim?: boolean,
        firstPersonMode?: boolean,
      ): void;

      /**
       * 选中拓扑中所有图元
       */
      selectAll(): void;

      /**
       * 返回数据模型的序列化内容
       * @param space 缩进间隔
       */
      serialize(space?: number): string;

      /**
       * 设置截头锥体的宽高比，该参数默认自动根据屏幕的宽高比决定，一般不需要设置。
       * @param {number} v
       */
      setAspect(v: number): void;

      /**
       * 设置当选中图元时，是否自动平移拓扑以确保该图元出现在可见区域内
       * @param {boolean} v
       */
      setAutoMakeVisible(v: boolean): void;

      /**
       * 设置x轴线颜色
       * @param {color} color
       */
      setAxisXColor(color: String): void;

      /**
       * 设置y轴线颜色
       * @param {color} color
       */
      setAxisYColor(color: String): void;

      /**
       * 设置z轴线颜色
       * @param {color} color
       */
      setAxisZColor(color: String): void;

      /**
       * 设置批量染色是否禁用
       * @param disabled
       */
      setBatchBlendDisabled(disabled: boolean): void;

      /**
       * 设置批量亮度是否禁用
       * @param disabled
       */
      setBatchBrightnessDisabled(disabled: boolean): void;

      /**
       * 设置批量颜色是否禁用
       * @param disabled
       */
      setBatchColorDisabled(disabled: boolean): void;

      /**
       * 设置 3D 中空的 Buffer 垃圾回收释放间隔
       * @param interval
       */
      setBufferGCInterval(interval: number): void;

      /**
       * 设置虚线是否禁用
       * @param disabled
       */
      setDashDisabled(disabled: boolean): void;

      /**
       * 设置 block 是否可选中
       * @param disabled
       */
      setBlockSelectable(selectable: boolean): void;

      /**
       * 设置设备像素比
       */
      setDevicePixelRatio(ratio: number): void;

      /**
       * 设置 block 是否可选中
       * @param disabled
       */
      setBlockSelectable(disabled: boolean): void;

      /**
       * 设置 EditHelper 是否禁用
       */
      setEditHelperDisabled(fogColor: string): void;

      /**
       * 设置视图聚焦
       */
      setFocus(): void;

      /**
       * 设置雾化是否禁用
       */
      setFogDisabled(disabled: boolean): void;

      /**
       * 设置雾化远端距离
       */
      setFogFar(far: number): void;

      /**
       * 设置雾化近端距离
       */
      setFogNear(near: number): void;

      /**
       * 设置头灯环境光比例，默认为0.7，即无论灯的角度，头灯都会贡献70%的环境光，剩下30%根据灯的角度决定强弱
       */
      setHeadlightAmbientIntensity(AmbientIntensity: number): void;

      /**
       * 设置头灯的颜色
       */
      setHeadlightColor(color: string): void;

      /**
       * 设置头灯强度，默认为1，大于1增强，小于1减弱
       */
      setHeadlightIntensity(intensity: number): void;

      /**
       * 设置头灯影响范围，默认为0代表可照射到无穷远处，如果设置了值则光照射效果随物体远离光影而衰减
       */
      setHeadlightRange(range: number): void;

      /**
       * 设置当前高亮的颜色，默认为rgba(190, 210, 250, 1)
       */
      setHighlightColor(color: string): void;

      /**
       * 设置当前高亮的模式，默认为style。包括：disabled关闭高亮，selected选中高亮，hover悬浮高亮，style风格设置高亮
       */
      setHighlightMode(mode: string): void;

      /**
       * 设置当前高亮的线宽，默认为0.8
       */
      setHighlightWidth(width: number): void;

      /**
       * 设置悬停触发延迟事件
       * @param delay
       */
      setHoverDelay(delay: number): void;

      /**
       * 设置正交相机的 Zoom
       * @param increment
       * @param anim
       */
      setOrthoZoom(increment: number, anim?: boolean | AnimOption): void;

      /**
       * 设置 Picker 的精度
       * @param pickerResolution
       */
      setPickerResolution(pickerResolution: number): void;

      /**
       * 设置后处理模块的属性值
       * @param module
       * @param name
       * @param value
       */
      setPostProcessingValue(module: string, name: string, value: any): void;

      /**
       * 设置选择过滤器函数
       * @param {Function} func 过滤器函数
       */
      setSelectableFunc(func: Function): void;

      /**
       * 设置天空球节点
       * @param skyBox
       */
      setSkyBox(skyBox: Data): void;

      /**
       * 设置提示是否可用
       * @param enable
       */
      setToolTipEnabled(enable: boolean): void;

      setViewport(
        gl: any,
        x: number,
        y: number,
        width: number,
        height: number,
      ): void;

      /**
       * 设置当前滚轮缩放是否按照Center来缩放，true为按照Center缩放，false按照鼠标缩放
       * @param zoomToCenter
       */
      setZoomToCenter(zoomToCenter: boolean): void;

      /**
       * 移动场景相机中心点位置
       * @param {Array} eye 相机位置坐标
       * @param {Array} center 中心点位置坐标
       * @param {Boolean|Object} anim 默认false，是否使用动画，可以设置为true或者false或者animation动画对象
       */
      moveCamera(
        eye: Array<number>,
        center: Array<number>,
        anim?: boolean | AnimOption,
      ): AnimInstance;

      /**
       * 相机看向具体的节点或者节点列表
       * @param {ht.Node | Array | null} [target] 数据模型
       * @param {Object} [options] 可选属性,属性包括有：
       * animation：默认false，是否使用动画，可以设置为true或者false或者animation动画对象
       * center：默认undefined，新的场景center点，形如 [0,0,0]（空的话，target为一个则看向node中心，target为列表则看向根据节点列表计算出来的中心）
       * direction：默认undefined，眼睛处于目标的方向（相对目标，受到目标自身旋转影响），例如[0,1,5]在目标正面的斜向上
       * worldDirection ：默认undefined，眼睛处于目标的方向（相对场景，不受目标旋转影响），例如[0,1,5]在目标所在位置的斜向上
       * distance ：默认undefined（未定义的话则使用下面的ratio模式计算距离），浮点类型，表示眼睛跟中心的固定距离
       * ratio：默认0.8，浮点类型，表示眼睛跟中心的距离动态计算（例如 0.8 表示眼睛在上述方向上动态计算距离以将目标包围盒的8个角全部适配到屏幕80%范围内）
       */
      flyTo(target?: Data | Array<Data>, options?: FlyToOption): any;

      /**
       * 设置碰撞边界
       * @param {Array} boundaries 边界数组
       * @example //示例：
       * g3d.setBoundaries([
       *   [
       *       p0.x, p0.y,
       *       p1.x, p1.y,
       *       p2.x, p2.y,
       *       p3.x, p3.y
       *   ],
       *   [
       *       p4.x, p4.y,
       *       p5.x, p5.y,
       *       p6.x, p6.y
       *   ]
       * ]);
       */
      setBoundaries(boundaries: Array<Array<number>>): void;

      /**
       * 设置中心点
       * @param {Array} center 中心点坐标，格式：[x, y, z]
       */
      setCenter(center: Array<number>): void;

      /**
       * 设置是否显示中心点轴线
       * @param {boolean} v
       */
      setCenterAxisVisible(v: boolean): void;

      /**
       * 设置当前子网
       * @param {SubGraph} subGraph 子网对象
       */
      setCurrentSubGraph(subGraph: SubGraph): void;

      /**
       * 设置绑定的数据模型
       * @return {DataModel} 数据模型
       */
      setDataModel(dataModel: DataModel): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param {boolean} value 是否禁用组件
       * @param {String} [iconUrl] 蒙板上显示的icon的路径
       */
      setDisabled(value: boolean, iconUrl?: String): void;

      /**
       * 设置拓扑中的图元是否可编辑
       * @param {boolean} editable
       */
      setEditable(editable: boolean): void;

      /**
       * 设置编辑过滤器函数
       * @param {Function} func 过滤器函数
       */
      setEditableFunc(func: Function): void;

      /**
       * 设置大小编辑控制条的颜色
       * @param {color} color
       */
      setEditSizeColor(color: String): void;

      /**
       * 设置眼睛（或Camera）所在位置，默认值为[0, 300, 1000]
       * @param {Array} eye 眼睛位置坐标，格式[x, y, z]
       */
      setEye(eye: Array<number>): void;

      /**
       * 设置远端截面位置，默认值为10000
       * @param {number} far
       */
      setFar(far: number): void;

      /**
       * 设置第一人称模式
       * @param {boolean} mode
       */
      setFirstPersonMode(mode: boolean): void;

      /**
       * 设置垂直方向的视觉张角弧度，默认值为Math.PI/4
       * @param {number} fovy
       */
      setFovy(fovy: number): void;

      /**
       * 设置网格线颜色
       * @param {color} color
       */
      setGridColor(color: String): void;

      /**
       * 设置网格线间距
       * @param {number} gap
       */
      setGridGap(gap: number): void;

      /**
       * 设置网格行列数，默认为40
       * @param {number} size
       */
      setGridSize(size: number): void;

      /**
       * 设置是否显示网格
       * @param {boolean} v
       */
      setGridVisible(v: boolean): void;

      /**
       * 设置布局高度
       * @param {number} height 高度值
       */
      setHeight(height: number): void;

      /**
       * 设置交互器
       * @param {List} interactors 交互器对象集合
       */
      setInteractors(interactors: List): void;

      /**
       * 设置是否使用鼠标漫游，默认为true, 如果改为false, 则鼠标左键右键都不支持前进后退的操作功能，
       * 但左键可拖拽编辑图元，右键可改变视角方向，采用这样的方式一般会结合键盘w|s|a|d按键进行漫游操作
       * @param {boolean} v
       */
      setMouseRoamable(v: boolean): void;

      /**
       * 设置移动过滤器函数
       * @param {Function} func 过滤器函数
       */
      setMovableFunc(func: Function): void;

      /**
       * 设置移动漫游步进
       * @param {number} v
       */
      setMoveStep(v: number): void;

      /**
       * 设置近端截面位置，默认值为10
       * @param {number} v
       */
      setNear(v: number): void;

      /**
       * 设置是否显示坐标原点[0,0,0]轴线
       * @param {boolean} v
       */
      setOriginAxisVisible(v: boolean): void;

      /**
       * 设置是否使用正交投影
       * @param {boolean} v
       */
      setOrtho(v: boolean): void;

      /**
       * 设置正交投影宽度，默认为2000
       * @param {number} width
       */
      setOrthoWidth(width: number): void;

      /**
       * 设置是否允许平移操作
       * @param {boolean} v 是否可平移
       */
      setPannable(v: boolean): void;

      /**
       * 设置拓扑上是否允许框选操作
       * @param {boolean} v
       */
      setRectSelectable(v: boolean): void;

      /**
       * 设置框选选择框的背景色
       * @param {color} color 颜色值
       */
      setRectSelectBackground(color: String): void;

      /**
       * 设置是否允许通过空格将拓扑复位
       * @param {boolean} v
       */
      setResettable(v: boolean): void;

      /**
       * 设置是否可旋转
       * @param {boolean} v
       */
      setRotatable(v: boolean): void;

      /**
       * 设置旋转步进
       * @param {number} v
       */
      setRotateStep(v: number): void;

      /**
       * 设置图元是否可编辑旋转过滤器
       * @param {Function} func
       */
      setRotationEditableFunc(func: Function): void;

      /**
       * 设置拓扑是否共享选中模型
       * @param {boolean} v
       */
      setSelectionModelShared(v: boolean): void;

      /**
       * 设置大小编辑过滤器
       * @param {Function} func
       */
      setSizeEditableFunc(func: Function): void;

      /**
       * 设置摄像头正上方向，该参数一般较少改动，默认值为[0, 1, 0]
       * @param {Array} up 格式：[x, y, z]
       */
      setUp(up: Array<number>): void;

      /**
       * 设置可见过滤器
       * @param {Function} func 过滤器函数
       */
      setVisibleFunc(func: Function): void;

      /**
       * 设置是否可进退
       * @param {boolean} walkable
       */
      setWalkable(walkable: boolean): void;

      /**
       * 设置布局宽度
       * @param {number} width
       */
      setWidth(width: number): void;

      /**
       * 缩放操作，默认操作模式意味着eye离center的远近变化，如果在Graph3dView#isOrtho()为true的正交投影情况下，缩放意味着改变Graph3dView#setOrthoWidth(width)的可视宽度范围。
       * @param {number} increment 步进的比例，调用zoomIn(anim)和zoomOut(anim)，等同于调用了setZoom(1.3, anim)和setZoom(1/1.3, anim)。
       * @param {boolean} [anim] 是否使用动画
       */
      setZoom(increment: number, anim?: boolean): void;

      /**
       * 设置是否可缩放
       * @param {boolean} v
       */
      setZoomable(v: boolean): void;

      /**
       * 显示调试面板
       */
      showDebugTip(): void;

      /**
       * 获取选中模型，{@link graph3d.Graph3dView#getSelectionModel getSelectionModel}的缩写
       * @return {SelectionModel}
       */
      sm(): SelectionModel;

      /**
       * 将拓扑导出为canvas
       * @param {color} background 背景色
       * @return {HTMLCanvasElement}
       */
      toCanvas(background: String): HTMLCanvasElement;

      /**
       * 将拓扑导出为base64格式字符串
       * @param {color} background 背景色
       * @return {String}
       */
      toDataURL(background: String): String;

      toJSON(): Object;

      /**
       * 传入三维场景中的逻辑坐标，将逻辑坐标转换为屏幕坐标
       * @param p3 三维坐标数组，格式为[x, y, z]
       * @returns 屏幕坐标，格式为{x:x,y:y,z:z}，z为深度，一般可忽略
       */
      toViewPosition(p3: number[]): Point;

      /**
       * 删除交互事件监听器，{@link graph3d.Graph3dView#removeInteractorListener removeInteractorListener}的缩写
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       */
      umi(listener: Function, scope?: Object): void;

      /**
       * 删除自身属性变化事件监听器，{@link graph3d.Graph3dView#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 立刻刷新拓扑
       */
      validate(): void;

      /**
       * 同时改变eye和center的位置，也就是eye和center在两点建立的矢量方向上同时移动相同的偏移量。
       * 如果为第一人称模式调用walk操作，该函数会考虑Graph3dView#getBoundaries()边界限制
       * @param {number} step 偏移的矢量长度值
       * @param {boolean} [anim] 是否使用动画
       * @param {boolean} [firstPersonMode]  是否是第一人称模式，为空时则采用Graph3dView#isFirstPersonMode()
       */
      walk(step: number, anim?: boolean, firstPersonMode?: boolean): void;

      /**
       * 相当于调用setZoom(1.3, anim)
       * @param {boolean} [anim] 是否使用动画
       */
      zoomIn(anim?: boolean): void;

      /**
       * 相当于调用setZoom(1/1.3, anim)
       * @param {boolean} [anim] 是否使用动画
       */
      zoomOut(anim?: boolean): void;

      unproject(pointOrEvent: MouseEvent | Point, z: number): void;

      /**
       * 退出当前一级 subGraph 到上一级
       */
      upSubGraph(): void;

      updateDOMAppendMatrix(): void;
    }

    /**
     * 拓扑组件上交互器基类，封装了交互的基础功能
     * @param {graph.GraphView} graphView 绑定拓扑组件
     * @constructor
     */
    export class Interactor {
      constructor(gv: graph.GraphView);
    }

    /**
     * 实现GraphView手抓图、Group双击展开合并、进出SubGraph、EdgeGroup展开合并等基本交互功能
     * @param {graph.GraphView} graphView 绑定拓扑组件
     * @constructor
     * @extends {graph.Interactor}
     */
    export class DefaultInteractor extends Interactor {
      constructor(graphView: graph.GraphView);
    }

    /**
     * 实现拖拽移动图元的交互功能
     * @param {graph.GraphView} graphView 绑定拓扑组件
     * @constructor
     * @extends {graph.Interactor}
     */
    export class MoveInteractor extends Interactor {
      constructor(graphView: graph.GraphView);
    }

    /**
     * 实现单击选择和拖拽框选功能
     * @param {graph.GraphView} graphView 绑定拓扑组件
     * @constructor
     * @extends {graph.Interactor}
     */
    export class SelectInteractor extends Interactor {
      constructor(graphView: graph.GraphView);
    }

    /**
     * 实现对图元的大小、旋转以及多边形编辑功能
     * @param {graph.GraphView} graphView 绑定拓扑组件
     * @constructor
     * @extends {graph.Interactor}
     */
    export class EditInteractor extends Interactor {
      constructor(graphView: graph.GraphView);
    }
    /**
     * 实现触摸屏上Touch交互
     * @param {graph.GraphView} graphView 绑定拓扑组件
     * @param {Object} params 交互参数
     * @constructor
     * @extends {graph.Interactor}
     * @example
     * //params参数格式：
     * {
     * 	   selectable: true|false,//是否启用选择功能
     * 	   movable: true|false,//是否启用移动功能
     * 	   pannable: true|false,//是否启用pan功能
     * 	   pinchable: true|false,//是否启用双指pinch缩放
     * 	   editable: true|false,//是否启用编辑功能
     * }
     *
     */
    export class TouchInteractor extends Interactor {
      constructor(graphView: graph.GraphView, params: any);
    }
  }
  namespace Default {
    /**
     * 指定组件基准CSS的ZIndex值，改值仅在将HT与其他第三方组件混合使用时根据需要设置"
     * @type number
     */
    var baseZIndex: any;

    /**
     * 判断是否为触屏可Touch方式交互，HT系统一般会自动判断，对于极少数HT无法正确识别的系统下，可以通过配置强制指定
     * @type boolean
     */
    var isTouchable: any;

    /**
     * 设备像素比，HT系统自动取至window.devicePixelRatio，某些特性情况需要为mobile应用牺牲精度节省内存时可以强制设置为较小值
     * @type number
     */
    var devicePixelRatio: any;

    /**
     * 组件初次加载时界面宽高值可能会为0，HT会自动尝试等待下次延迟刷新，该参数指定尝试次数，一般无需改动
     * @default 3
     * @type number
     */
    var reinvalidateCount: any;

    /**
     * 进行框选判断时为了避免内存占用过大，HT会根据最大面积限制进行缩放判断，该参数一般无需改动
     * @default 3000
     * @type number
     */
    var hitMaxArea: any;

    /**
     * 决定Data元素被选中时，组件是否自动滚动到Data元素可见位置
     * @default true
     * @type boolean
     */
    var autoMakeVisible: any;

    /**
     * 决定组件的滚动条默认是否自动隐藏，true为自动显示和隐藏，false则需要滚动时一直显示不会自动隐藏
     * @default true
     * @type boolean
     */
    var autoHideScrollBar: any;

    /**
     * 组件无效时的透明度
     * @type number
     */
    var disabledOpacity: any;

    /**
     * 组件无效时的背景色
     * @type color
     */
    var disabledBackground: any;

    /**
     * 组件的ToolTip显示的延迟间隔
     * @default 800
     * @type number
     */
    var toolTipDelay: any;

    /**
     * 组件的ToolTip显示的情况下，如果鼠标移动到新的位置时，ToolTip是否实时持续跟进
     * @default false
     * @type boolean
     */
    var toolTipContinual: any;

    /**
     * 线条末端线帽的样式，可选值为butt|round|square
     * @default butt
     * @type String
     */
    var lineCap: any;

    /**
     * 当两条线交汇时创建边角的类型，可选参数为：bevel|round|miter
     * @default round
     * @type String
     */
    var lineJoin: any;

    /**
     * 默认图片的渐进色类型
     * @default linear.northeast
     * @type String
     */
    var imageGradient: any;

    /**
     * 连线或多边形等图形的默认虚线样式
     * @type Array
     */
    var dashPattern: any;

    /**
     * 默认动画效果函数
     * @default function (m){return m*m}
     * @type Function
     */
    var animEasing: any;

    /**
     * 默认文字颜色
     * @default #000
     * @type color
     */
    var labelColor: any;

    /**
     * 选中状态下文字颜色
     * @default #fff
     * @type color
     */
    var labelSelectColor: any;

    /**
     * 默认文字字体
     * @default 12px arial, sans-serif
     * @type font
     */
    var labelFont: any;

    /**
     * 默认文字字体
     * @default 12px arial, sans-serif
     * @type font
     */
    var labelFont: any;

    /**
     * 通用组件缩进，例如树组件每一层的缩进
     * @default 20
     * @type number
     */
    var widgetIndent: any;

    /**
     * 通用组件行高，例如表格每行行高
     * @default 20
     * @type number
     */
    var widgetRowHeight: any;

    /**
     * 通用组件抬头高度，例如TabView，TableHeader和Toolbar等的头部高度
     * @default 22
     * @type number
     */
    var widgetHeaderHeight: any;

    /**
     * AccordionView和TabView等组件的Title默认高度
     * @default 24
     * @type number
     */
    var widgetTitleHeight: any;

    /**
     * 滚动条默认颜色
     * @default rgba(0,0,0,0.35)
     * @type color
     */
    var scrollBarColor: any;

    /**
     * 滚动条默认宽度
     * @default 7
     * @type number
     */
    var scrollBarSize: any;

    /**
     * 滚动条默认的隐藏间隔毫秒数
     * @default 1000
     * @type number
     */
    var scrollBarTimeout: any;

    /**
     * 滚动条默认最小长度
     * @default 20
     * @type number
     */
    var scrollBarMinLength: any;

    /**
     * 滚动条起作用区域默认大小
     * @default 16
     * @type number
     */
    var scrollBarInteractiveSize: any;

    /**
     * 默认缩放步进
     * @default 1.3
     * @type number
     */
    var zoomIncrement: any;

    /**
     * 默认滚轮缩放步进
     * @default 1.05
     * @type number
     */
    var scrollZoomIncrement: any;

    /**
     * 默认双指触屏Touch方式缩放步进
     * @default 1.08
     * @type number
     */
    var pinchZoomIncrement: any;

    /**
     * 默认最大缩放倍数
     * @default 20
     * @type number
     */
    var zoomMax: any;

    /**
     * 默认最小缩放倍数
     * @default 0.01
     * @type number
     */
    var zoomMin: any;

    /**
     * 默认曲线分段微分数
     * @default 12
     * @type number
     */
    var segmentResolution: any;

    /**
     * 默认模型分段微分数
     * @default 24
     * @type number
     */
    var shapeResolution: any;

    /**
     * 默认模型边数
     * @default 24
     * @type number
     */
    var shapeSide: any;

    /**
     * ToolTip的文字颜色
     * @default #000
     * @type color
     */
    var toolTipLabelColor: any;

    /**
     * ToolTip的文字字体
     * @default 12px arial, sans-serif
     * @type String
     */
    var toolTipLabelFont: any;

    /**
     * ToolTip的文字字体
     * @default 12px arial, sans-serif
     * @type String
     */
    var toolTipLabelFont: any;

    /**
     * ToolTip的背景颜色
     * @default #FFFFE0
     * @type color
     */
    var toolTipBackground: any;

    /**
     * ToolTip的阴影颜色
     * @default rgba(0,0,0,0.35)
     * @type color
     */
    var toolTipShadowColor: any;

    /**
     * 矢量组件comp嵌套堆栈，矢量组件comp可嵌套定义，通过改参数能得到当前嵌套层次信息
     * @type Array
     */
    var compStack: any;

    /**
     * 此函数返回连线组的代理连线，edges为List类型的Edge对象数组，默认返回edges.get(0)，可重载自定义规则
     * @type Function
     */
    var edgeGroupAgentFunc: any;

    /**
     * GraphView组件中拖动图元到边缘时会自动滚动，该参数决定开始自动滚动的区域范围，设置为0或负数则代表关闭自动滚动功能
     * @default 16
     * @type number
     */
    var graphViewAutoScrollZone: any;

    /**
     * 决定GraphView组件按空格键是否允许复位，复位调用了GraphView#reset()函数，该函数默认会调用setZoom(1)和setTranslate(0, 0)
     * @default true
     * @type boolean
     */
    var graphViewResettable: any;

    /**
     * 决定GraphView组件是否允许手抓图操作
     * @default true
     * @type boolean
     */
    var graphViewPannable: any;

    /**
     * 决定GraphView组件是否允许按Ctrl键进行框选操作
     * @default true
     * @type boolean
     */
    var graphViewRectSelectable: any;

    /**
     * 决定GraphView组件是否显示滚动条
     * @default true
     * @type boolean
     */
    var graphViewScrollBarVisible: any;

    /**
     * GraphView组件框选边框颜色
     * @default #2C3E50
     * @type color
     */
    var graphViewRectSelectBorderColor: any;

    /**
     * GraphView组件框选背景颜色
     * @default rgba(0,0,0,0.35)
     * @type color
     */
    var graphViewRectSelectBackground: any;

    /**
     * GraphView组件编辑点大小
     * @default 7
     * @type number
     */
    var graphViewEditPointSize: any;

    /**
     * GraphView组件编辑点边框颜色
     * @default #2C3E50
     * @type color
     */
    var graphViewEditPointBorderColor: any;

    /**
     * GraphView组件编辑点背景颜色
     * @default #D9D9D9
     * @type color
     */
    var graphViewEditPointBackground: any;

    /**
     * Graph3dView组件初始化WebGL上下文参数，一般无需改动
     * @default null
     * @type Object
     */
    var graph3dViewAttributes: any;

    /**
     * Graph3dView组件是否为第一人称交互方式
     * @default false
     * @type boolean
     */
    var graph3dViewFirstPersonMode: any;

    /**
     * Graph3dView组件在第一人称交互方式时，鼠标是否能漫游
     * @default true
     * @type boolean
     */
    var graph3dViewMouseRoamable: any;

    /**
     * Graph3dView组件键盘控制移动的步进
     * @default 15
     * @type number
     */
    var graph3dViewMoveStep: any;

    /**
     * Graph3dView组件键盘控制旋转的步进
     * @default 0.05235987755982988
     * @type number
     */
    var graph3dViewRotateStep: any;

    /**
     * Graph3dView组件是否允许按Shift键进行手抓图平移
     * @default true
     * @type boolean
     */
    var graph3dViewPannable: any;

    /**
     * Graph3dView组件是否允许进行旋转中心或方位操作
     * @default true
     * @type boolean
     */
    var graph3dViewRotatable: any;

    /**
     * Graph3dView组件是否允许前进后退操作
     * @default true
     * @type boolean
     */
    var graph3dViewWalkable: any;

    /**
     * Graph3dView组件是否允许按空格键复位，复位调用了Graph3dView#reset()函数，该函数会重置Graph3dView的eye|center|up三个参数
     * @default true
     * @type boolean
     */
    var graph3dViewResettable: any;

    /**
     * Graph3dView组件是否允许缩放
     * @default true
     * @type boolean
     */
    var graph3dViewZoomable: any;

    /**
     * Graph3dView组件是否允许框选
     * @default true
     * @type boolean
     */
    var graph3dViewRectSelectable: any;

    /**
     * Graph3dView组件框选背景
     * @default rgba(0,0,0,0.35)
     * @type color
     */
    var graph3dViewRectSelectBackground: any;

    /**
     * Graph3dView组件是否允许显示xz面网格
     * @default false
     * @type boolean
     */
    var graph3dViewGridVisible: any;

    /**
     * Graph3dView组件显示xz面的网格行列数
     * @default 50
     * @type number
     */
    var graph3dViewGridSize: any;

    /**
     * Graph3dView组件显示xz面的网格行列间距
     * @default 50
     * @type number
     */
    var graph3dViewGridGap: any;

    /**
     * Graph3dView组件显示xz面的网格线颜色
     * @default [0.4,0.75,0.85,1]
     * @type color
     */
    var graph3dViewGridColor: any;

    /**
     * Graph3dView组件原点x|y|z三个轴线是否可见
     * @default false
     * @type boolean
     */
    var graph3dViewOriginAxisVisible: any;

    /**
     * Graph3dView组件屏幕中心点x|y|z三个轴线是否可见
     * @default false
     * @type boolean
     */
    var graph3dViewCenterAxisVisible: any;

    /**
     * Graph3dView组件显示x轴线颜色
     * @default [1,0,0,1]
     * @type color
     */
    var graph3dViewAxisXColor: any;

    /**
     * Graph3dView组件显示y轴线颜色
     * @default [0,1,0,1]
     * @type color
     */
    var graph3dViewAxisYColor: any;

    /**
     * Graph3dView组件显示z轴线颜色
     * @default [0,0,1,1]
     * @type color
     */
    var graph3dViewAxisZColor: any;

    /**
     * Graph3dView组件在编辑状态图元拉伸标识颜色
     * @default [1,1,0,1]
     * @type color
     */
    var graph3dViewEditSizeColor: any;

    /**
     * Graph3dView组件是否显示为正交投影方式
     * @default false
     * @type boolean
     */
    var graph3dViewOrtho: any;

    /**
     * Graph3dView组件正交投影方式下屏幕宽度内显示的逻辑宽度值
     * @default 2000
     * @type number
     */
    var graph3dViewOrthoWidth: any;

    /**
     * Graph3dView组件在透视投影方式下的y轴张角弧度（Field of view）
     * @default 0.7853981633974483
     * @type number
     */
    var graph3dViewFovy: any;

    /**
     * Graph3dView组件投影呈现内容的最近距离，该值在可接受的范围内尽量设置较大值有利于呈现精度
     * @default 10
     * @type number
     */
    var graph3dViewNear: any;

    /**
     * Graph3dView组件投影呈现内容的最远距离，该值可根据场景最远范围进行调节设置
     * @default 10000
     * @type number
     */
    var graph3dViewFar: any;

    /**
     * Graph3dView组件投影呈现时，眼睛观察点所在位置
     * @default [0,300,1000]
     * @type Array
     */
    var graph3dViewEye: any;

    /**
     * Graph3dView组件投影呈现时，眼睛最终锁定的目标中心位置
     * @default [0,0,0]
     * @type Array
     */
    var graph3dViewCenter: any;

    /**
     * Graph3dView组件投影呈现时，摄像镜头垂直朝上方向
     * @default [0,1,-1e-7]
     * @type Array
     */
    var graph3dViewUp: any;

    /**
     * 头灯影响范围，默认为`0`代表可照射到无穷远处，如果设置了值则光照射效果随物体远离光影而衰减
     * @default 0
     * @type number
     */
    var graph3dViewHeadlightRange: any;

    /**
     * 头灯影响范围，默认为`0`代表可照射到无穷远处，如果设置了值则光照射效果随物体远离光影而衰减
     * @default 0
     * @type number
     */
    var graph3dViewHeadlightRange: any;

    /**
     * 头灯颜色
     * @default [1,1,1,1]
     * @type Array
     */
    var graph3dViewHeadlightColor: any;

    /**
     * 头灯强度，默认为1，大于1增强，小于1减弱
     * @default 1
     * @type number
     */
    var graph3dViewHeadlightIntensity: any;

    /**
     * 是否关闭头灯效果
     * @default false
     * @type boolean
     */
    var graph3dViewHeadlightDisabled: any;

    /**
     * 是否关闭雾化效果
     * @default true
     * @type boolean
     */
    var graph3dViewFogDisabled: any;

    /**
     * 雾颜色
     * @default white
     * @type color
     */
    var graph3dViewFogColor: any;

    /**
     * 代表从该距离起物体开始受雾效果影响
     * @default 1
     * @type number
     */
    var graph3dViewFogNear: any;

    /**
     * 代表从该距离之后物体完全看不清
     * @default 2000
     * @type number
     */
    var graph3dViewFogFar: any;

    /**
     * 折叠组件展开状态图标
     * @type String
     */
    var accordionViewExpandIcon: any;

    /**
     * 折叠组件关闭状态图标
     * @type String
     */
    var accordionViewCollapseIcon: any;

    /**
     * 折叠组件文字颜色
     * @default #FFF
     * @type color
     */
    var accordionViewLabelColor: any;

    /**
     * 折叠组件文字字体
     * @default 12px arial, sans-serif
     * @type String
     */
    var accordionViewLabelFont: any;

    /**
     * 折叠组件抬头背景
     * @default #2C3E50
     * @type color
     */
    var accordionViewTitleBackground: any;

    /**
     * 折叠组件选中背景
     * @default #1ABC9C
     * @type color
     */
    var accordionViewSelectBackground: any;

    /**
     * 折叠组件选中宽度
     * @default 3
     * @type number
     */
    var accordionViewSelectWidth: any;

    /**
     * 折叠组件分隔条颜色
     * @type color
     */
    var accordionViewSeparatorColor: any;

    /**
     * 分割组件分隔条宽度
     * @default 1
     * @type number
     */
    var splitViewDividerSize: any;

    /**
     * 分割组件分隔条背景
     * @default #2C3E50
     * @type color
     */
    var splitViewDividerBackground: any;

    /**
     * 分割组件分隔条拖拽过程透明度
     * @default 0.5
     * @type number
     */
    var splitViewDragOpacity: any;

    /**
     * 分割组件展开合并图标
     * @type String
     */
    var splitViewToggleIcon: any;

    /**
     * 属性组件文字颜色
     * @default #000
     * @type color
     */
    var propertyViewLabelColor: any;

    /**
     * 属性组件文字选中颜色
     * @default #FFF
     * @type color
     */
    var propertyViewLabelSelectColor: any;

    /**
     * 属性组件文字字体
     * @default 12px arial, sans-serif
     * @type String
     */
    var propertyViewLabelFont: any;

    /**
     * 属性组件展开图标
     * @type String
     */
    var propertyViewExpandIcon: any;

    /**
     * 属性组件合并图标
     * @type String
     */
    var propertyViewCollapseIcon: any;

    /**
     * 属性组件背景
     * @default #ECF0F1
     * @type color
     */
    var propertyViewBackground: any;

    /**
     * 属性组件行线是否可见
     * @default true
     * @type boolean
     */
    var propertyViewRowLineVisible: any;

    /**
     * 属性组件列线是否可见
     * @default true
     * @type boolean
     */
    var propertyViewColumnLineVisible: any;

    /**
     * 属性组件行线颜色
     * @default #D9D9D9
     * @type color
     */
    var propertyViewRowLineColor: any;

    /**
     * 属性组件列线颜色
     * @default #D9D9D9
     * @type color
     */
    var propertyViewColumnLineColor: any;

    /**
     * 属性组件选中背景色
     * @default #1ABC9C
     * @type color
     */
    var propertyViewSelectBackground: any;

    /**
     * 列表组件文字颜色
     * @default #000
     * @type color
     */
    var listViewLabelColor: any;

    /**
     * 列表组件文字选中颜色
     * @default #FFF
     * @type color
     */
    var listViewLabelSelectColor: any;

    /**
     * 列表组件文字字体
     * @default 12px arial, sans-serif
     * @type String
     */
    var listViewLabelFont: any;

    /**
     * 列表组件行线是否可见
     * @default false
     * @type boolean
     */
    var listViewRowLineVisible: any;

    /**
     * 列表组件行线颜色
     * @default #D9D9D9
     * @type color
     */
    var listViewRowLineColor: any;

    /**
     * 列表组件选中背景色
     * @default #1ABC9C
     * @type color
     */
    var listViewSelectBackground: any;

    /**
     * 树组件文字颜色
     * @default #000
     * @type color
     */
    var treeViewLabelColor: any;

    /**
     * 树组件文字选中颜色
     * @default #FFF
     * @type color
     */
    var treeViewLabelSelectColor: any;

    /**
     * 树组件文字字体
     * @default 12px arial, sans-serif
     * @type String
     */
    var treeViewLabelFont: any;

    /**
     * 树组件展开状态图标
     * @type String
     */
    var treeViewExpandIcon: any;

    /**
     * 树组件关闭状态图标
     * @type String
     */
    var treeViewCollapseIcon: any;

    /**
     * 树组件行线是否可见
     * @default false
     * @type boolean
     */
    var treeViewRowLineVisible: any;

    /**
     * 树组件行线颜色
     * @default #D9D9D9
     * @type color
     */
    var treeViewRowLineColor: any;

    /**
     * 树组件选中背景色
     * @default #1ABC9C
     * @type color
     */
    var treeViewSelectBackground: any;

    /**
     * 表格组件文字颜色
     * @default #000
     * @type color
     */
    var tableViewLabelColor: any;

    /**
     * 表格组件文字选中颜色
     * @default #FFF
     * @type color
     */
    var tableViewLabelSelectColor: any;

    /**
     * 表格组件文字字体
     * @default 12px arial, sans-serif
     * @type String
     */
    var tableViewLabelFont: any;

    /**
     * 表格组件行线是否可见
     * @default true
     * @type boolean
     */
    var tableViewRowLineVisible: any;

    /**
     * 表格组件列线是否可见
     * @default true
     * @type boolean
     */
    var tableViewColumnLineVisible: any;

    /**
     * 表格组件行线颜色
     * @default #D9D9D9
     * @type color
     */
    var tableViewRowLineColor: any;

    /**
     * 表格组件列线颜色
     * @default #D9D9D9
     * @type color
     */
    var tableViewColumnLineColor: any;

    /**
     * 表格组件选中背景色
     * @default #1ABC9C
     * @type color
     */
    var tableViewSelectBackground: any;

    /**
     * 树表组件文字颜色
     * @default #000
     * @type color
     */
    var treeTableViewLabelColor: any;

    /**
     * 树表组件文字选中颜色
     * @default #FFF
     * @type color
     */
    var treeTableViewLabelSelectColor: any;

    /**
     * 树表组件文字字体
     * @default 12px arial, sans-serif
     * @type String
     */
    var treeTableViewLabelFont: any;

    /**
     * 树表格组件展开状态图标
     * @type String
     */
    var treeTableViewExpandIcon: any;

    /**
     * 树表格组件关闭状态图标
     * @type String
     */
    var treeTableViewCollapseIcon: any;

    /**
     * 树表格组件行线是否可见
     * @default true
     * @type boolean
     */
    var treeTableViewRowLineVisible: any;

    /**
     * 树表格组件列线是否可见
     * @default true
     * @type boolean
     */
    var treeTableViewColumnLineVisible: any;

    /**
     * 树表格组件行线颜色
     * @default #D9D9D9
     * @type color
     */
    var treeTableViewRowLineColor: any;

    /**
     * 树表格组件列线颜色
     * @default #D9D9D9
     * @type color
     */
    var treeTableViewColumnLineColor: any;

    /**
     * 树表组件选中背景色
     * @default #1ABC9C
     * @type color
     */
    var treeTableViewSelectBackground: any;

    /**
     * 表头组件文字颜色
     * @default #000
     * @type color
     */
    var tableHeaderLabelColor: any;

    /**
     * 表头组件文字字体
     * @default 12px arial, sans-serif
     * @type String
     */
    var tableHeaderLabelFont: any;

    /**
     * 表头组件列线是否可见
     * @default true
     * @type boolean
     */
    var tableHeaderColumnLineVisible: any;

    /**
     * 表头组件列线颜色
     * @default #D9D9D9
     * @type color
     */
    var tableHeaderColumnLineColor: any;

    /**
     * 表头组件背景
     * @default #ECF0F1
     * @type color
     */
    var tableHeaderBackground: any;

    /**
     * 表头组件移动状态背景
     * @default rgba(0,0,0,0.35)
     * @type color
     */
    var tableHeaderMoveBackground: any;

    /**
     * 表头组件插入状态颜色
     * @default #1ABC9C
     * @type color
     */
    var tableHeaderInsertColor: any;

    /**
     * 表头组件降序图标
     * @type String
     */
    var tableHeaderSortDescIcon: any;

    /**
     * 表头组件升序图标
     * @type String
     */
    var tableHeaderSortAscIcon: any;

    /**
     * 页签组件间距
     * @default 1
     * @type number
     */
    var tabViewTabGap: any;

    /**
     * 页签组件文字颜色
     * @default #FFF
     * @type color
     */
    var tabViewLabelColor: any;

    /**
     * 页签组件文字字体
     * @default 12px arial, sans-serif
     * @type String
     */
    var tabViewLabelFont: any;

    /**
     * 页签组件背景
     * @default #2C3E50
     * @type color
     */
    var tabViewTabBackground: any;

    /**
     * 页签组件选中宽度
     * @default 3
     * @type number
     */
    var tabViewSelectWidth: any;

    /**
     * 页签组件选中背景
     * @default #1ABC9C
     * @type color
     */
    var tabViewSelectBackground: any;

    /**
     * 页签组件移动状态背景
     * @default rgba(0,0,0,0.35)
     * @type color
     */
    var tabViewMoveBackground: any;

    /**
     * 页签组件插入状态颜色
     * @default #1ABC9C
     * @type color
     */
    var tabViewInsertColor: any;

    /**
     * 工具条组件文字颜色
     * @default #000
     * @type color
     */
    var toolbarLabelColor: any;

    /**
     * 工具条组件文字选中颜色
     * @default #FFF
     * @type color
     */
    var toolbarLabelSelectColor: any;

    /**
     * 工具条组件文字字体
     * @default 12px arial, sans-serif
     * @type String
     */
    var toolbarLabelFont: any;

    /**
     * 工具条组件背景
     * @default #ECF0F1
     * @type color
     */
    var toolbarBackground: any;

    /**
     * 工具条组件选中背景色
     * @default #1ABC9C
     * @type color
     */
    var toolbarSelectBackground: any;

    /**
     * 工具条组件Item的间距
     * @default 8
     * @type number
     */
    var toolbarItemGap: any;

    /**
     * 工具条组件的分隔条颜色
     * @default #868686
     * @type color
     */
    var toolbarSeparatorColor: any;

    /**
     * 数字类型监听器，该监听器将使得input文本输入框只允许输入数学相关字符
     * @type Function
     * @example
     * numberListener: (function(){
     *      var map = {
     *          46: 1,
     *          8: 1,
     *          9: 1,
     *          27: 1,
     *          13: 1,
     *          109: 1,
     *          110: 1,
     *          189: 1,
     *          190: 1
     *      };
     *      return function(e){
     *          var keyCode = e.keyCode;
     *          if(map[keyCode] || (keyCode === 65 && Default.isCtrlDown(e)) || (keyCode >= 35 && keyCode <= 39)){
     *              return;
     *          }
     *          if ((e.shiftKey || (keyCode < 48 || keyCode > 57)) && (keyCode < 96 || keyCode > 105)) {
     *              e.preventDefault();
     *          }
     *      };
     *  })()
     */
    var numberListener: any;

    /**
     * 无法加载图片资源时会调用该函数，默认访问空，可自定义返回一个默认的图片
     * @type Function
     * @example
     * var handleImageLoaded = function(name, url) {
     *
     * }
     */
    var handleUnfoundImage: any;

    /**
     * 图片在加载之后的回调函数
     * @type Function
     * @example
     * var handleImageLoaded = function(name, img) {
     *
     * }
     */
    var handleImageLoaded: any;

    var sortFunc: any;

    /**
     * 悬停延迟，默认 600
     */
    var hoverDelay: number;

    /**
     * 获得HT的版本号
     * @return {String} 版本号
     */
    function getVersion(): String;

    /**
     * 转换路径
     * @param url
     */
    function convertURL(url: string): string;

    /**
     * 注册矢量组件类型
     * @param {String} type 类型名称
     * @param {Function} func 绘制函数，例：function(g, rect, comp, data, view)();
     */
    function setCompType(type: String, func: Function | any): void;

    /**
     * 获得注册的矢量组件类型
     * @param {String} type 类型名称
     */
    function getCompType(type: String): Function | Object;

    /**
     * 注册|修改渲染层级，HT内部预定义了两个layer信息，分别是main和top，两个层级对应的priority分别是：main：10000，top：10000000
     * @param layer 层级名
     * @param info info 可定义属性有：priority优先等级，数值类型，值越大表示越上层；ignore是否忽略该层级的渲染，布尔类型；
     */
    function setRenderLayerInfo(layerName: string, info: Object): void;

    /**
     * 获取渲染层级，HT内部预定义了两个layer信息，分别是main和top，两个层级对应的priority分别是：main：10000，top：10000000
     * @param layerName 层级名
     */
    function getRenderLayerInfo(layerName: string): Object;
    /**
     * 阻止事件的默认行为，常用于屏蔽触屏上默认DoubleTap缩放等行为
     * @param {Event} e 事件对象
     */
    function preventDefault(e: Event): void;

    /**
     * 获取当前窗口left|top|width|height的参数信息
     *
     * 返回的对象格式如下：
     * @example
     * {
     * 	   left: 0,
     * 	   top: 0,
     * 	   width: 1280
     * 	   height: 768
     * }
     */
    function getWindowInfo(): any;

    /**
     * 判断目前是否处于拖拽状态
     * @return {boolean} 是否处于拖拽状态
     */
    function isDragging(): boolean;

    /**
     * 判断是否鼠标左键被按下
     * @param {Event} e 事件对象
     * @return {boolean} 鼠标左键是否被按下
     */
    function isLeftButton(e: Event): boolean;

    /**
     * 获取当前Touch手指个数
     * @param {Event} e 事件对象
     * @return {number} Touch手指个数
     */
    function getTouchCount(e: Event): number;

    /**
     * 判断是否为双击事件
     * @param {Event} e 事件对象
     * @return {boolean} 是否是双击
     */
    function isDoubleClick(e: Event): boolean;

    /**
     * 判断Shift键是否被按下
     * @param {Event} e 事件对象
     * @return {boolean} Shift键是否被按下
     */
    function isShiftDown(e?: Event): boolean;

    /**
     * 判断Ctrl键是否被按下
     * @param {Event} e 事件对象
     * @return {boolean} Ctrl键是否被按下
     */
    function isCtrlDown(e?: Event): boolean;

    /**
     * 返回client属性坐标
     * @param {Event} e 事件对象
     * @return {Object} client坐标对象
     * @example //返回值示例:
     * {
     *    x: 100,
     *    y: 100
     * }
     */
    function getClientPoint(e: Event): Point;

    /**
     * 返回page属性坐标
     * @param {Event} e 事件对象
     * @return {Object} page坐标对象
     * @example //返回值示例:
     * {
     *    x: 100,
     *    y: 100
     * }
     */
    function getPagePoint(e: Event): Point;

    /**
     * 注册图片
     * @param {String} name 图片名
     * @param {HTMLImageElement|HTMLCanvasElement|String|Object} img img、canvas对象或图片url或base64字符串或矢量对象
     */
    function setImage(
      name: String,
      img?: HTMLImageElement | HTMLCanvasElement | String | Object,
    ): void;

    /**
     * 注册图片
     * @param {String} name 图片名
     * @param {number} [width] 图片宽度
     * @param {number} [height] 图片高度
     * @param {HTMLImageElement|HTMLCanvasElement|String|Object} img img、canvas对象或图片url或base64字符串或矢量对象
     */
    function setImage(
      name: String,
      width?: number,
      height?: number,
      img?: HTMLImageElement | HTMLCanvasElement | String | Object,
    ): void;

    /**
     * 获得已注册的图片
     * @param {String} name 图片名
     * @param {color} [color] 染色
     * @return {HTMLImageElement|HTMLCanvasElement|Object} 返回已经注册的图片
     */
    function getImage(
      name: String,
      color?: String,
    ): HTMLImageElement | HTMLCanvasElement | Object;

    /**
     * 获取全局下一个id编号
     * @return {number} id
     */
    function getId(): number;

    /**
     * 获取全局下一个id编号
     * @param {Function} func 回调函数
     * @param {Object} scope 函数域
     * @param {Array} args 函数参数列表
     * @param {number} delay 延迟时间(毫秒)
     */
    function callLater(
      func: Function,
      scope?: Object,
      args?: Array<any>,
      delay?: number,
    ): void;

    /**
     * 传入一个对象参数，以浅拷贝的方式返回一个新的复制对象
     * @param {Object} obj 要复制的对象
     * @return {Object} 新复制的对象
     */
    function clone(obj: any): any;

    /**
     * 返回所有HT预定义类的json结构信息，key为类全路径名，value为类声明(构造函数)
     * @return {Object} 类结构信息
     */
    function getClassMap(): Object;

    /**
     * 传入全路径类字符串名称，返回类定义(构造函数)
     * @param {String} name 类名
     * @return {Function} 类定义(构造函数)
     */
    function getClass(name: String): Function;

    /**
     * 定义类
     * @param {String|Object} className 类名，如果为字符串，自动注册到HT的classMap中，一般使用函数(构造函数)即可
     * @param {Object} superClass 要继承的父类
     * @param {Object} methods 方法和变量声明
     * @example
     * function MyData() {
     * 	   MyData.superClass.constructor.call(this);
     * }
     * function def(MyData, Data, {
     * 	   sayHello: function() {
     * 		    console.log('hello');
     * 	   }
     * });
     */
    function def(
      className: String | Object,
      superClass: Object,
      methods: Object,
    ): void;

    /**
     * 启动动画
     * @param {Object} paramObj 动画配置对象，请参考入门手册中的动画属性
     * @example
     * function startAnim({
     * 	   frames: 60,
     * 	   interval: 16,
     * 	   finishFunc: function() {
     * 		   console.log('finish');
     * 	   },
     * 	   action: function(t) {
     * 		   console.log(t);
     * 	   }
     * });
     */
    function startAnim(paramObj: AnimOption): AnimInstance;

    function parse(str: string): Object;

    /**
     * 计算文字的尺寸
     * @param {String} font 文字字体，如:12px Arial
     * @param {String} text 文字内容
     * @return {Object} 文字尺寸
     * @example
     * //返回值示例:
     * {
     * 	   width: 100,
     * 	   height: 100
     * }
     *
     */
    function getTextSize(font: String, text: String): void;

    /**
     * 绘制文字
     * @param {CanvasRenderingContext2D} g 画笔对象
     * @param {String} value 文字内容
     * @param {String} font 文字字体
     * @param {color} color 文字颜色
     * @param {number} x 绘制开始的x坐标
     * @param {number} y 绘制开始的y坐标
     * @param {number} width 绘制的宽度
     * @param {number} height 绘制的高度
     * @param {String} align 文字水平对齐方式，可选值为left|center|right
     * @param {String} vAlign 文字垂直对齐方式，可选值为top|middle|bottom
     * @example function drawText(g, 'Hello, HT', '12px Arial', 0, 0, 200, 100, 'center', 'middle');
     */
    function drawText(
      g: CanvasRenderingContext2D,
      value: String,
      font: String,
      color: String,
      x: number,
      y: number,
      width: number,
      height: number,
      align: number,
      vAlign: number,
    ): void;

    /**
     * 获取两点之间距离，或向量长度
     * @param {Object|Array} p1 第一个点的坐标(格式：{x: x, y: y})或第一个向量(格式：[x, y, z])
     * @param {Object|Array} p2 第二个点的坐标(格式：{x: x, y: y})或第二个向量(格式：[x, y, z])
     * @return {number} 距离
     * @example
     * //二维两点距离
     * var distance getDistance({x: 0, y: 0}, {x: 10, y: 0});// distance equals 10
     * //三维两点距离
     * var distance3d getDistance([0, 0, 0], [0, 10, 0]);// distance3d equals 10
     */
    function getDistance(p1: Object, p2: Object): void;

    /**
     * 返回比color更亮的颜色
     * @param {color} color 原始颜色
     * @param {number} [factor] 变化因子，默认为40，允许值0~100
     * @example
     * var newColor = brighter('#f00');
     * @return {color} 新的颜色
     */
    function brighter(color: String, factor?: number): String;

    /**
     * 返回比color更暗的颜色
     * @param {color} color 原始颜色
     * @param {number} [factor] 变化因子，默认为40，允许值0~100
     * @return {color} 新的颜色
     * @example
     * var newColor = darker('#f00');
     */
    function darker(color: String, factor?: number): String;

    /**
     * 将点组合成矩形
     * @param {Object} p1 第一个点或点数组
     * @param {Object} p2 第二个点
     * @return {Object} 组合的矩形
     * @example
     * //组合两点：
     * var rect = unionPoint({x: 0, y: 0}, {x: 100, y: 100});
     * //rect结果：
     * {
     * 	   x: 0,
     * 	   y: 0,
     * 	   width: 100,
     * 	   height: 100
     * }
     * 组合多点：
     * var rect unionPoint([{x: 0, y: 0}, {x: 50, y: 50}, {x: 100, y: 100}]);
     * //rect结果：
     * {
     * 	   x: 0,
     * 	   y: 0,
     * 	   width: 100,
     * 	   height: 100
     * }
     */
    function unionPoint(p1: Point, p2: Point): Rect;

    /**
     * 将两个矩形区域union融合成新的矩形区域
     * @param {Object} rect1 第一个矩形区域
     * @param {Object} rect2 第二个矩形区域
     * @return {Object} 新的矩形区域
     * @example
     * var rect = unionRect( {x: 0, y: 0, width: 100, height: 100}, {x: 0, y: 0, width: 200, height: 200});
     * //rect结果：
     * {
     * 	   x: 0,
     * 	   y: 0,
     * 	   width: 200,
     * 	   height: 200
     * }
     */
    function unionRect(rect1: Rect, rect2: Rect): Rect;

    /**
     * 判断point是否包含在rect的矩形区域里
     * @param {Object} rect 矩形
     * @param {Object} point 点
     * @return {boolean} 矩形是否包含点
     * @example
     * containsPoint({x: 0, y: 0, width: 100, height: 100}, {x: 50, y: 50});//true
     */
    function containsPoint(rect: Rect, point: Point): boolean;

    /**
     * 判断矩形区域rect1是否包含矩形区域rect2
     * @param {Object} rect1 矩形1
     * @param {Object} rect2 矩形2
     * @return {boolean} 矩形1是否包含矩形2
     * @example
     * containsRect({x: 0, y: 0, width: 100, height: 100}, {x: 0, y: 0, width: 10, height: 10});//true
     */
    function containsRect(rect1: Rect, rect2: Rect): boolean;

    /**
     * 判断矩形区域rect1和矩形区域rect2是否相交
     * @param {Object} rect1 矩形1
     * @param {Object} rect2 矩形2
     * @return {boolean} 两个矩形是否相交
     * @example
     * function intersectsRect({x: 0, y: 0, width: 100, height: 100}, {x: 0, y: 0, width: 200, height: 200})//true
     */
    function intersectsRect(rect1: Rect, rect2: Rect): boolean;

    /**
     * 获得两个矩形的相交区域
     * @param {Object} rect1 矩形1
     * @param {Object} rect2 矩形2
     * @return {Object} 相交的矩形区域，如果没有相交，返回null
     * @example
     * var rect intersection({x: 0, y: 0, width: 100, height: 100}, {x: 50, y: 50, width: 200, height: 200})
     * //rect结果：
     * {
     * 	   x: 50,
     * 	   y: 50,
     * 	   width: 50,
     * 	   height: 50
     * }
     */
    function intersection(rect1: Rect, rect2: Rect): Rect;

    /**
     * 改变rect大小，上下左右分别扩展extend的大小
     * @param {Object} rect 原始矩形
     * @param {number} extend 扩展大小
     * @example
     * var rect = {x: 0, y: 0, width: 100, height: 100};
     * grow(rect, 2);
     * //rect结果：
     * {
     * 	   x: -2,
     * 	   y: -2,
     * 	   width: 104,
     * 	   height: 104
     * }
     */
    function grow(rect: Rect, extend: number): void;

    /**
     * 获取交互点的逻辑坐标，使用视图对象上的此方法更为便捷
     * @param {Event} e 事件对象
     * @param {Object} view 视图对象
     * @param {number} translateX 水平偏移
     * @param {number} translateY 垂直偏移
     * @param {number} zoomX 水平缩放
     * @param {number} zoomY 垂直缩放
     * @return {Object} 逻辑点坐标
     */
    function getLogicalPoint(
      e: MouseEvent,
      view: Object,
      translateX: number,
      translateY: number,
      zoomX: number,
      zoomY: number,
    ): Object;

    /**
     * 删除指定的DOM对象
     * @param {Element} domElement DOM对象
     * @return {boolean} 操作是否成功
     */
    function removeHTML(domElement: HTMLElement): boolean;

    /**
     * 返回ToolTip的相应div对象，可获取进行风格自定义
     * @return {Element} ToolTip相应的div对象
     */
    function getToolTipDiv(): HTMLElement;

    /**
     * 判断ToolTip是否正在显示状态
     * @return {boolean} ToolTip是否显示
     */
    function isToolTipShowing(): boolean;

    /**
     * 隐藏正在显示的ToolTip
     */
    function hideToolTip(): boolean;

    /**
     * 显示ToolTip
     * @param {Event|Object} eventOrPoint 鼠标事件对象或点坐标
     * @param {String} innerHTML ToolTip的内容
     */
    function showToolTip(eventOrPoint: Event | Object, innerHTML: String): void;

    /**
     * 启动拖拽，自定义交互时可能用到
     * @param {Object} interactor 交互器
     * @param {Event} e 事件对象
     */
    function startDragging(interactor: Object, e: Event): void;

    /**
     * 获得所有注册图片的信息对象
     * @return {Object} 已注册图片的映射表
     */
    function getImageMap(): Object;

    /**
     * 将不连续曲线转化成Graph3dView#setBoundaries(bs)需要的参数格式
     * @param {Array} points 曲线上的点坐标数组
     * @param {Array} segmets 曲线上的线段类型数组
     * @param {number} resolution 曲线微分数
     * @return {Array} 适合Graph3dView#setBoundaries(bs)需要的参数格式
     */
    function toBoundaries(
      points: Array<Object>,
      segments: Array<Object>,
      resolution: number,
    ): Array<number>;

    /**
     * 返回当前键盘按键信息，key为键的keyCode，如果按下则值为true
     * @return {Object} 键盘按键信息
     */
    function getCurrentKeyCodeMap(): Object;

    /**
     * 以x,y为中心绘制img图片
     * @param {CanvasRenderingContext2D} g 画笔对象
     * @param {HTMLImageElement|HTMLCanvasElement|Object} img 要绘制的图片(img对象、canvas对象或矢量对象)
     * @param {number} x 中心点x坐标
     * @param {number} y 中心点y坐标
     * @param {Data} data 要绑定的Data对象
     * @param {Object} view 要绑定的视图对象
     * @param {color} color 染色
     */
    function drawCenterImage(
      g: CanvasRenderingContext2D,
      img: HTMLImageElement | HTMLCanvasElement | Object,
      x: number,
      y: number,
      data?: Data,
      view?: Object,
      color?: String,
    ): void;

    /**
     * 在矩形位置内绘制图片
     * @param {CanvasRenderingContext2D} g 画笔对象
     * @param {HTMLImageElement|HTMLCanvasElement|Object} img 要绘制的图片(img对象、canvas对象或矢量对象)
     * @param {String} stretch 拉伸类型(uniform/centerUniform/fill)
     * @param {number} x 矩形左上角x坐标
     * @param {number} y 矩形左上角y坐标
     * @param {number} w 矩形宽度
     * @param {number} h 矩形高度
     * @param {Data} data 要绑定的Data对象
     * @param {Object} view 要绑定的视图对象
     * @param {color} color 染色
     */
    function drawStretchImage(
      g: CanvasRenderingContext2D,
      img: HTMLImageElement | HTMLCanvasElement | Object,
      stretch: String,
      x: number,
      y: number,
      w: number,
      h: number,
      data?: Data,
      view?: Object,
      color?: String,
    ): void;

    /**
     * 将图片转换成Canvas对象
     * @param {HTMLImageElement|Object} image 要转换的图片(img对象或矢量对象)
     * @param {number} width 新canvas的宽度
     * @param {number} height 新canvas的高度
     * @param {String} stretch 拉伸类型(uniform/centerUniform/fill)
     * @param {Data} data 要绑定的Data对象
     * @param {Object} view 要绑定的视图对象
     * @param {color} color 染色
     * @return {HTMLCanvasElement} canvas对象
     */
    function toCanvas(
      image: HTMLImageElement | Object,
      width: number,
      height: number,
      stretch: String,
      data?: Data,
      view?: Object,
      color?: String,
    ): HTMLCanvasElement;

    /**
     * 创建DOM对象
     * @param {String} tagName DOM类型(如div、a、span等)
     * @param {String} borderColor 边框颜色
     * @param {String} font 字体
     * @param {String} value 内容
     * @return {Element} DOM对象
     */
    function createElement(
      tagName: String,
      borderColor: String,
      font: String,
      value: String,
    ): Element;

    /**
     * 判断交互事件所处位置是否在View组件之上，一般用于Drog And Drop的拖拽操作判断
     * @param {Event} event 事件对象
     * @param {Object} view 视图对象
     * @return {boolean}
     */
    function containedInView(event: Element, view: Object): boolean;

    /**
     * 判断目前系统是否处于隔离状态，处于隔离状态时host吸附和Group组等图元间的联动关系将会被停止
     * @return {boolean} 是否处于隔离状态
     */
    function isIsolating(): boolean;

    /**
     * 设置系统的隔离状态，处于隔离状态时host吸附和Group组等图元间的联动关系将会被停止
     * @param {boolean} isolating 新的状态
     */
    function setIsolating(isolating: boolean): void;

    /**
     * 将颜色转换为rgba格式
     * @param {color} color 旧格式的颜色
     * @return {Array} rgba格式的颜色
     */
    function toColorData(color: String): Array<number>;

    /**
     * 绘制图片
     * @param {CanvasRenderingContext2D} g 画笔对象
     * @param {HTMLImageElement|HTMLCanvasElement|Object} image 要绘制的图片(img对象、canvas对象或矢量对象)
     * @param {number} x 绘制范围左上角x坐标
     * @param {number} y 绘制范围左上角y坐标
     * @param {number} width 绘制范围宽度
     * @param {number} height 绘制范围高度
     * @param {Data} data 要绑定的Data对象
     * @param {Object} view 要绑定的视图对象
     * @param {color} blendColor 染色
     */
    function drawImage(
      g: CanvasRenderingContext2D,
      image: HTMLImageElement | HTMLCanvasElement | Object,
      x: number,
      y: number,
      width: number,
      height: number,
      data?: Data,
      view?: Object,
      blendColor?: String,
    ): void;

    /**
     * 返回当前矢量组件comp，即function compStack[0]，一般用于矢量值绑定func动态调用时使用
     * @return {Object} 矢量组件comp
     */
    function getCurrentComp(): Object;

    /**
     * 返回当前矢量组件上一层comp，即function compStack[1]，一般用于矢量值绑定func动态调用时使用
     * @return {Object} 矢量组件comp
     */
    function getParentComp(): Object;

    /**
     * 注册连线类型
     * @param {String} type 连线类型名
     * @param {Function} func 决定连线走向的函数
     * @example
     * function setEdgeType('customEdge', function(edge, gap, graphView) {
     *     return {
     *         points: points;
     *         segments: segments;
     *     }
     * })
     */
    function setEdgeType(type: String, func: Function): void;

    /**
     * 获取连线类型函数
     * @param {String} type 连线类型名
     * @return {Function} 连线类型函数
     */
    function getEdgeType(type: String): Function;

    /**
     * 注册3D模型，请参考modeling建模手册
     * @param {String} name 模型名
     * @param {Object} model 模型内容
     */
    function setShape3dModel(name: String, model: Object): void;

    /**
     * 返回所注册的3D模型
     * @param {String} name 模型名
     * @return {Object} 模型
     */
    function getShape3dModel(name: String): Object;

    /**
     * 将一组JSON描述的缩放、移动和旋转等操作转换成对应的变化矩阵
     */
    function createMatrix(array: Array<number>, matrix: Object): Object;

    /**
     * 将指定矢量或顶点，通过矩阵转换运算出变化后的新矢量或顶点位置
     */
    function transformVec(vec: Object, matrix: Object): Object;

    /**
     * 构建六面体模型，该模型的六个面显示的颜色和贴图都将一样
     */
    function createBoxModel(): Object;

    /**
     * 构建圆角矩形体模型
     */
    function createRoundRectModel(top: boolean, bottom: boolean): Object;

    /**
     * 构建星形体模型
     */
    function createStarModel(top: boolean, bottom: boolean): Object;

    /**
     * 构建矩形体模型
     */
    function createRectModel(top: boolean, bottom: boolean): Object;

    /**
     * 构建三角形体模型
     */
    function createTriangleModel(top: boolean, bottom: boolean): Object;

    /**
     * 构建直角三角形体模型
     */
    function createRightTriangleModel(top: boolean, bottom: boolean): Object;

    /**
     * 构建平行四边形体模型
     */
    function createParallelogramModel(top: boolean, bottom: boolean): Object;

    /**
     * 构建梯形体模型
     */
    function createTrapezoidModel(top: boolean, bottom: boolean): Object;

    /**
     * 构建光滑球体模型
     */
    function createSmoothSphereModel(
      hResolution: number,
      vResolution: number,
      hStart: number,
      hArc: number,
      vStart: number,
      vArc: number,
      radius: number,
    ): Object;

    /**
     * 构建球体模型
     */
    function createSphereModel(
      side: number,
      sideFrom: number,
      sideTo: number,
      from: number,
      to: number,
      resolution: number,
    ): Object;

    /**
     * 构建光滑圆锥体模型
     */
    function createSmoothConeModel(
      bottom: number,
      resolution: number,
      start: number,
      arc: number,
      radius: number,
    ): Object;

    /**
     * 构建圆锥体模型
     */
    function createConeModel(
      side: number,
      sideFrom: number,
      sideTo: number,
      from: number,
      to: number,
      bottom: number,
    ): Object;

    /**
     * 构建光滑圆柱体模型
     */
    function createSmoothCylinderModel(
      resolution: number,
      top: number,
      bottom: number,
      topRadius: number,
      bottomRadius: number,
      start: number,
      arc: number,
      height: number,
    ): Object;

    /**
     * 构建圆柱体模型
     */
    function createCylinderModel(
      side: number,
      sideFrom: number,
      sideTo: number,
      from: number,
      to: number,
      top: number,
      bottom: number,
    ): Object;

    /**
     * 构建光滑圆环体模型
     */
    function createSmoothTorusModel(
      radius: number,
      tubeRadius: number,
      hResolution: number,
      vResolution: number,
      start: number,
      arc: number,
    ): Object;

    /**
     * 构建圆环体模型
     */
    function createTorusModel(
      side: number,
      sideFrom: number,
      sideTo: number,
      from: number,
      to: number,
      radius: number,
      resolution: number,
    ): Object;

    /**
     * 根据xz平面多边形，挤压形成3D模型
     */
    function createExtrusionModel(
      array: Array<number>,
      segments: Array<Object>,
      top: number,
      bottom: number,
      resolution: number,
      repeatUVLength: number,
      tall: number,
      elevation: number,
    ): Object;

    /**
     * 根据xy平面的曲线，环绕一周形成光滑3D模型
     */
    function createSmoothRingModel(
      array: Array<number>,
      segments: Array<Object>,
      vResolution: number,
      start: number,
      arc: number,
      hResolution: number,
    ): Object;

    /**
     * 根据xy平面的曲线，环绕一周形成3D模型
     */
    function createRingModel(
      array: Array<number>,
      segments: Array<Object>,
      resolution: number,
      top: number,
      bottom: number,
      side: number,
      sideFrom: number,
      sideTo: number,
      from: number,
      to: number,
    ): Object;

    /**
     * 注册3d图元的批量信息，用于优化大数据量图元绘制性能，详细用法请参考批量手册
     * @param {String} name 批量名
     * @param {Object} batchInfo 批量信息
     */
    function setBatchInfo(name: String, batchInfo: Object): void;

    /**
     * 获取已注册的批量信息
     * @param {String} name 批量名
     * @return {Oject} 批量信息
     */
    function getBatchInfo(name: String): Object;

    /**
     * 传入参数是否是对象
     * @param obj
     * @return {boolean}
     */
    function isObject(obj: any): boolean;

    /**
     * 多段传入参数是否是字符串
     * @param obj
     * @return {boolean}
     */
    function isString(obj: any): boolean;

    /**
     * @description: 绘制边框
     * @param {CanvasRenderingContext2D} g 画笔对象
     * @param {String} borderColor
     * @param {number} x 矩形左上角x坐标
     * @param {number} y 矩形左上角y坐标
     * @param {number} width 矩形宽度
     * @param {number} height 矩形高度
     * @param {number} borderWidth 边框宽度
     */
    function drawBorder(
      g: CanvasRenderingContext2D,
      borderColor: string,
      x: number,
      y: number,
      width: number,
      height: number,
      borderWidth: number,
    ): void;

    /**
     * @description: 绘制圆角矩形路径
     * @param {CanvasRenderingContext2D} g 画笔对象
     * @param {number} x 绘制开始的x坐标
     * @param {number} y 绘制开始的y坐标
     * @param {number} width 绘制的宽度
     * @param {number} height 绘制的高度
     * @param {number} topLeftRadius 左上角圆角半径，如果后面三个参数为空，表示4个圆角的半径
     * @param {number} topRightRadius 右上角圆角半径
     * @param {number} bottomLeftRadius 左下角圆角半径
     * @param {number} bottomRightRadius 右下角圆角半径
     * @return:
     */
    function drawRoundRect(
      g: CanvasRenderingContext2D,
      x: number,
      y: number,
      width: number,
      height: number,
      topLeftRadius?: number,
      topRightRadius?: number,
      bottomLeftRadius?: number,
      bottomRightRadius?: number,
    ): void;

    /**
     * 在指定区域，创建一个渐进色
     * @param {CanvasRenderingContext2D} g 画笔对象
     * @param type 渐进类型，可取值：'linear.southwest','linear.southeast','linear.northwest','linear.northeast', 'linear.north','linear.south','linear.west','linear.east', 'radial.center','radial.southwest','radial.southeast','radial.northwest','radial.northeast', 'radial.north','radial.south','radial.west','radial.east', 'spread.horizontal','spread.vertical','spread.diagonal','spread.antidiagonal', 'spread.north','spread.south','spread.west','spread.east'
     * @param background 背景色
     * @param gradientColor 渐进色
     * @param x 绘制开始的x坐标
     * @param y 绘制开始的y坐标
     * @param w 绘制的宽度
     * @param h 绘制的高度
     */
    function createGradient(
      g: CanvasRenderingContext2D,
      type: string,
      background: string,
      gradientColor: string,
      x: number,
      y: number,
      w: number,
      h: number,
    ): CanvasGradient;

    /**
     * 将指定视图对象或 dom 加入到 body 下，如果全屏时，则加入到全屏节点下
     * @param view
     */
    function appendToScreen(view: Object | Element): void;

    function getMSMap(): any;

    /**
     * 判断是否为数组
     * @param obj 判断对象
     */
    function isArray(obj: any): boolean;
    /**
     * 判断是否为函数
     * @param obj 判断对象
     */
    function isFunction(obj: any): boolean;

    /**
     * 设置属性
     * @param data 节点
     * @param type 类型
     * @param name 名称
     * @param value 值
     */
    function setPropertyValue(
      data: Data,
      type: string,
      name: string,
      value: any,
    ): void;

    /**
     * 获取属性
     * @param data 节点
     * @param type 类型
     * @param name 名称
     */
    function getPropertyValue(data: Data, type: string, name: string): any;

    /**
     * 将一组折线曲线化
     * @param listOrNode 节点或者点数组
     * @param radius 拐角弧度，
     */
    function toRoundedCorner(
      listOrNode: List | Shape | Array<any>,
      radius: number,
    ): any;

    /**
     * 获取连接类型信息，若无 actionType 则返回 gv 正使用的连接动作
     * @param gv
     * @param actionType
     */
    function getConnectAction(
      gv: graph.GraphView,
      actionType?: string,
    ): unknown;

    /**
     * 注册连接动作
     * @param actionType 动作名
     * @param action 动作函数
     * @param extraInfo 额外信息，可以定义可见，删除（垃圾桶）的可见与否，处理逻辑函数
     */
    function setConnectAction(
      actionType: string,
      action: ConnectActionFunc,
      extraInfo?: ConnectActionExtraInfo,
    ): void;

    /**
     * 异步加载文件
     * @param urls url 字符串或者多个url，为字符串数据
     * @param callback 回调函数，仅有一个参数，为请求结果
     * @param option 选项，可以设置 method,responseType
     */
    function xhrLoad(
      urls: string | [],
      callback: Function,
      option?: Object,
    ): void;
  }

  namespace Math {
    /**
     * 创建一个以 min 和 max 为边界的三维包围盒
     * @param {Vector3} min 包围盒的下边界，默认值是 {x: -Infinity, y: -Infinity, z: -Infinity}
     * @param {Vector3} max 包围盒的上边界，默认值是 {x: Infinity, y: Infinity, z: Infinity}
     * @constructor
     */

    export class Box3 {
      /**
       * 创建一个以 min 和 max 为边界的三维包围盒
       * @param {Vector3} min 包围盒的下边界，默认值是 {x: -Infinity, y: -Infinity, z: -Infinity}
       * @param {Vector3} max 包围盒的上边界，默认值是 {x: Infinity, y: Infinity, z: Infinity}
       * @constructor
       */
      constructor(min?: Vector3, max?: Vector3);

      /**
       * 包围盒的上边界
       * @type Vector3
       */
      max: Vector3;

      /**
       * 包围盒的下边界
       * @type Vector3
       */
      min: Vector3;

      /**
       * 返回一个与该包围盒子有相同下边界 min 和上边界 max 的新包围盒
       * @return {Box3}
       */
      clone(): Box3;

      /**
       * 将传入的 Box3 中的 min 和 max 拷贝到当前包围盒
       * @param {Box3} Box3
       */
      copy(Box3: Box3): Box3;

      /**
       * 使用传入的矩阵 Matrix4 变换当前包围盒
       * @param {Matrix4} Matrix4
       */
      applyMatrix4(Matrix4: Matrix4): Box3;

      /**
       * 扩展这个包围盒的边界使得 point 在包围盒内
       * @param {Vector3} point
       */
      expandByPoint(point: Vector3): Box3;

      /**
       * 扩展这个包围盒的边界使得 Box3 在包围盒内
       * @param {Box3} Box3
       */
      expandByBox(Box3: Box3): Box3;

      /**
       * 判断当前包围盒是否与传入包围盒 Box3 相交
       * @param {Box3} Box3
       * @return {Boolean}
       */
      expandByBox(Box3: Box3): Boolean;

      /**
       * 判断当前包围盒是否包含 0 个顶点
       * @return {Boolean}
       */
      isEmpty(): Boolean;

      /**
       * 清空当前包围盒
       */
      makeEmpty(): Box3;

      /**
       * 设置包围盒的上下边界
       * @param {Vector3} min
       * @param {Vector3} max
       */
      set(min: Vector3, max: Vector3): Box3;

      /**
       * 设置包围盒的上下边界使得数组 array 中的所有点的点都被包含在内
       * @param {Array} array
       */
      setFromArray(array: Object[]): Box3;

      /**
       * 设置当前包围盒的上边界和下边界，以包含数组 points 中的所有点
       * @param {Array} points
       */
      setFromPoints(points: Array<Object>): Box3;
    }

    export class CubicBezier {
      /**
       * 创建一个贝塞尔曲线
       * @param {Vector2|Vector3} v1 起点
       * @param {Vector2|Vector3} v2 第一个控制点
       * @param {Vector2|Vector3} v3 第二个控制点
       * @param {Vector2|Vector3} v4 终点
       * @constructor
       */
      constructor(
        v1?: Vector2 | Vector3,
        v2?: Vector2 | Vector3,
        v3?: Vector2 | Vector3,
        v4?: Vector2 | Vector3,
      );

      /**
       * 计算沿着贝塞尔曲线长度的百分比位置坐标
       * @param {number} alpha 在闭区间 [0，1] 中
       * @return {Vector2|Vector3} 点位坐标
       */
      getPointAt(alpha: number): Vector2 | Vector3;
    }

    export class Frustum {
      /**
       * 使用六个面来构建一个视锥体
       * @param {Plane} p0
       * @param {Plane} p1
       * @param {Plane} p2
       * @param {Plane} p3
       * @param {Plane} p4
       * @param {Plane} p5
       * @constructor
       */
      constructor(
        p0?: Plane,
        p1?: Plane,
        p2?: Plane,
        p3?: Plane,
        p4?: Plane,
        p5?: Plane,
      );

      /**
       * 包含六个平面 planes 的数组
       * @type Array
       */
      Array: number[];

      /**
       * 返回一个与当前视锥体有相同参数的视锥体
       * @return {Frustum}
       */
      clone(): Frustum;

      /**
       * 将传入 Frustum 的属性拷贝到当前视锥体
       * @param {Frustum} Frustum
       */
      copy(Frustum: Frustum): Frustum;

      /**
       * 判断 point 是否在视锥体内
       * @param {Vector3} point
       * @return {Boolean}
       */
      containsPoint(point: Vector3): Boolean;

      /**
       * 使用传入的平面设置当前视锥体
       * @param {Plane} p0
       * @param {Plane} p1
       * @param {Plane} p2
       * @param {Plane} p3
       * @param {Plane} p4
       * @param {Plane} p5
       */
      set(
        p0: Plane,
        p1: Plane,
        p2: Plane,
        p3: Plane,
        p4: Plane,
        p5: Plane,
      ): Frustum;

      /**
       * 判断 Box3 是否与视锥体相交
       * @param {Box3} Box3
       * @return {Boolean}
       */
      intersectsBox(Box3: Box3): Boolean;

      /**
       * 判断 Sphere 是否与视锥体相交
       * @param {Sphere} Sphere
       * @return {Boolean}
       */
      intersectsSphere(Sphere: Sphere): Boolean;

      /**
       * 判断 object 的包围球是否与视锥体相交
       * @param {object} object
       * @return {Boolean}
       */
      intersectsObject(object: object): Boolean;

      /**
       * Matrix4 用于设置 planes
       * @param {Matrix4} Matrix4
       */
      setFromMatrix(Matrix4: Matrix4): Frustum;
    }

    export class Matrix3 {}

    export class Matrix4 {
      /**
       * 创建并初始化一个四乘四的单位矩阵
       * @constructor
       */

      /**
       * 矩阵列优先数组
       * @type Array
       */
      el: number[];

      /**
       * 返回矩阵列优先数组
       * @return {Array}
       */
      getElements(): number[];

      /**
       * 创建一个相同的矩阵
       * @return {Matrix4}
       */
      clone(): Matrix4;

      /**
       * 设置当前矩阵为由位置、四元数和缩放组合变换的矩阵
       * @param {Vector3} position 位置
       * @param {Quaternion} quaternion 四元数
       * @param {Vector3} scale 缩放
       * @return {Matrix4}
       */
      compose(
        position: Vector3,
        quaternion: Quaternion,
        scale: Vector3,
      ): Matrix4;

      /**
       * 将矩阵 Matrix4 的元素复制到当前矩阵中
       * @param {Matrix4} Matrix4
       */
      copy(Matrix4: Matrix4): Matrix4;

      /**
       * 将当前矩阵分解到给定的平移、旋转和缩放分量中
       * @param {Vector3} position 位置
       * @param {Quaternion} quaternion 四元数
       * @param {Vector3} scale 缩放
       */
      decompose(
        position: Vector3,
        quaternion: Quaternion,
        scale: Vector3,
      ): Matrix4;

      /**
       * 返回当前矩阵的行列式
       * @return {number} 行列式
       */
      determinant(): number;

      /**
       * 将矩阵 Matrix4 的旋转分量提取到当前矩阵中
       * @param {Matrix4} Matrix4
       */
      extractRotation(Matrix4: Matrix4): Matrix4;

      /**
       * 使用列优先数组来设置当前矩阵
       * @param {Array} Array 矩阵列优先数组
       * @param {number} offset 数组的偏移量，默认值为 0
       */
      fromArray(Array: Object[], offset?: number): Matrix4;

      /**
       * 将当前矩阵设置为 Matrix4 矩阵的逆矩阵
       * @return {Matrix4} 取逆的矩阵
       */
      getInverse(Matrix4: Matrix4): Matrix4;

      /**
       * 返回当前矩阵的位置分量
       * @return {Vector3}
       */
      getPosition(): Vector3;

      /**
       * 设置当前矩阵的位置分量
       * @param {Vector3} position 位置
       */
      setPosition(position: Vector3): Matrix4;

      /**
       * 将当前矩阵重置为单位矩阵
       */
      identity(): Matrix4;

      /**
       * 构造一个旋转矩阵，从 eye 指向 center，由向量 up 定向
       * @param {Vector3} eye 摄像机
       * @param {Vector3} center 目标点
       * @param {Vector3} up 摄像机正上方向
       */
      lookAt(eye: Vector3, center: Vector3, up: Vector3): Matrix4;

      /**
       * 设置当前矩阵为围绕轴 axis 旋转 rotation 弧度
       * @param {Vector3} axis 旋转轴
       * @param {number} rotation 旋转量(弧度制)
       */
      makeRotationAxis(axis: Vector3, rotation: number): Matrix4;

      /**
       * 将传入的欧拉角转换为该矩阵的旋转分量, 矩阵的其余部分被设为单位矩阵
       * @param {Euler} Euler 欧拉角
       */
      makeRotationAxis(Euler: Euler): Matrix4;

      /**
       * 将这个矩阵的旋转分量设置为四元数指定的旋转, 矩阵的其余部分被设为单位矩阵
       * @param {Quaternion} Quaternion 四元数
       */
      makeRotationFromQuaternion(Quaternion: Quaternion): Matrix4;

      /**
       * 将当前矩阵乘以矩阵 Matrix4
       * @param {Matrix4} Matrix4
       */
      multiply(Matrix4: Matrix4): Matrix4;

      /**
       * 设置当前矩阵为矩阵 a 乘以 矩阵 b
       * @param {Matrix4} a
       * @param {Matrix4} b
       */
      multiply(a: Matrix4, b: Matrix4): Matrix4;

      /**
       * 当前矩阵所有的元素乘以该缩放值 scale
       * @param {number} scale
       */
      multiplyScalar(scale: number): Matrix4;

      /**
       * 将矩阵 Matrix4 乘以当前矩阵
       * @param {Matrix4} Matrix4
       */
      premultiply(Matrix4: Matrix4): Matrix4;

      /**
       * 将该矩阵的列向量乘以对应向量 Vector3 的分量
       * @param {Vector3} Vector3
       */
      scale(Vector3: Vector3): Matrix4;

      /**
       * 将传入的数值以行优先的格式设置给该矩阵
       * @param {number} n11
       * @param {number} n12
       * @param {number} n13
       * @param {number} n14
       * @param {number} n21
       * @param {number} n22
       * @param {number} n23
       * @param {number} n24
       * @param {number} n31
       * @param {number} n32
       * @param {number} n33
       * @param {number} n34
       * @param {number} n41
       * @param {number} n42
       * @param {number} n43
       * @param {number} n44
       */
      set(
        n11: number,
        n12: number,
        n13: number,
        n14: number,
        n21: number,
        n22: number,
        n23: number,
        n24: number,
        n31: number,
        n32: number,
        n33: number,
        n34: number,
        n41: number,
        n42: number,
        n43: number,
        n44: number,
      ): Matrix4;

      /**
       * 使用列优先格式将此矩阵的元素写入数组中
       * @param {Array} array 用于存储矩阵元素的数组，如果未指定会创建一个新的数组
       * @param {number} offset 数组中元素的偏移量
       * @return {Array}
       */
      toArray(array?: Object[], offset?: number): number[];
    }

    export class Plane {
      /**
       * 定义一个在三维空间中无限延伸的二维平面
       * @param {Vector3} normal 单位长度的平面法向量，默认值为 {x: 1, y: 0, z: 0}
       * @param {number} constant 原点到平面的有符号距离，默认值为 0
       * @constructor
       */
      constructor(normal?: Vector3, constant?: number);

      /**
       * 平面法向量
       * @type Vector3
       */
      normal: Vector3;

      /**
       * 原点到平面的有符号距离
       * @type number
       */
      constant: number[];

      /**
       * 返回一个与当前平面有相同 normal 和 constant 的平面
       * @return {Plane}
       */
      clone(): Plane;

      /**
       * 返回一个共面点，通过原点的法向量在平面上投影算得
       * @param {Vector3} Vector3 结果会拷贝到该向量中
       * @return {Vector3}
       */
      coplanarPoint(Vector3: Vector3): Vector3;

      /**
       * 返回点 point 到平面的有符号距离
       * @param {Vector3} point
       * @return {number} 有符号距离
       */
      distanceToPoint(point: Vector3): number;

      /**
       * 返回球面 sphere 的边缘到平面的最短距离
       * @param {Sphere} Sphere
       * @return {number} 距离
       */
      distanceToSphere(Sphere: Sphere): number;

      /**
       * 判断两个平面是否相等
       * @param {Plane} Plane
       * @return {Boolean}
       */
      equals(Plane: Plane): Boolean;

      /**
       * 判断当前平面是否与球体 Sphere 相交
       * @param {Sphere} Sphere
       * @return {Boolean}
       */
      intersectsSphere(Sphere: Sphere): Boolean;

      /**
       * 法向量与常量求反
       */
      negate(): number;

      /**
       * 归一化法向量 normal ，并相应的调整常量 constant
       */
      normalize(): Plane;

      /**
       * 将一个点 point 投射到当前平面上
       * @param {Vector3} point 需要投射到当前平面的点
       * @param {Vector3} target 当前平面上离投射点最近的点，结果将会写入该向量中
       */
      projectPoint(point: Vector3, target?: Vector3): Vector3;

      /**
       * 设置平面法向量 normal 和常量 constant 属性值
       * @param {Vector3} normal
       * @param {Vector3} constant
       */
      set(normal: Vector3, constant: Vector3): Plane;

      /**
       * 设置平面法向量的 x, y, z 和常量 constant 属性值
       * @param {number} x
       * @param {number} y
       * @param {number} z
       * @param {Vector3} constant
       */
      setComponents(x: number, y: number, z: number, constant: Vector3): Plane;

      /**
       * 将当前平面设置为 a ,b , c 三个点确定的平面
       * @param {Vector3} a
       * @param {Vector3} b
       * @param {Vector3} c
       */
      setFromCoplanarPoints(a: Vector3, b: Vector3, c: Vector3): Plane;

      /**
       * 通过平面上的一点以及法线确定原点到平面的最短距离
       * @param {Vector3} normal 平面单位法向量
       * @param {Vector3} point 平面上的点
       * @return {number} 距离
       */
      setFromNormalAndCoplanarPoint(normal: Vector3, point: Vector3): Plane;

      /**
       * 将平面平移给定向量大小
       * @param {Vector3} offset 平移量
       */
      translate(offset: Vector3): Plane;
    }

    export class Quaternion {
      /**
       * 创建并初始化一个四元数对象，使用 x、y、z 和 w 四个分量表示
       * @param {number} x 默认值 0
       * @param {number} y 默认值 0
       * @param {number} z 默认值 0
       * @param {number} w 默认值 1
       * @constructor
       */
      constructor(x?: number, y?: number, z?: number, w?: number);

      /**
       * 返回一个与当前四元数有相同 x、y、z 和 w 分量的四元数
       * @return {Quaternion}
       */
      clone(): Quaternion;

      /**
       * 将传入的四元数的 x、y、z 和 w 分量拷贝到当前四元数
       * @param {Quaternion} Quaternion
       */
      copy(Quaternion: Quaternion): Quaternion;

      /**
       * 返回当前四元数的旋转共轭
       */
      conjugate(): Quaternion;

      /**
       * 计算四元数 Quaternion 与当前四元数的点积
       * @param {Quaternion} Quaternion
       * @return {number}
       */
      dot(Quaternion: Quaternion): number;

      /**
       * 根据传入数组设置当前四元数的 x、y、z 和 w 分量
       * @param {Array} Array
       * @param {number} offset 数组的偏移量，默认值为 0
       */
      fromArray(Array: Object[], offset?: number): Quaternion;

      /**
       * 反转当前四元数
       */
      inverse(): Quaternion;

      /**
       * 计算此四元数的直线长度，视为四维向量
       * @return {number}
       */
      length(): number;

      /**
       * 计算此四元数的直线长度平方，视为四维向量
       * @return {number}
       */
      lengthSq(): number;

      /**
       * 将当前四元数乘以 Quaternion
       * @param {Quaternion} Quaternion
       */
      multiply(Quaternion: Quaternion): Quaternion;

      /**
       * 将当前四元数设置为 a 乘以 b
       * @param {Quaternion} a
       * @param {Quaternion} b
       */
      multiplyQuaternions(a: Quaternion, b: Quaternion): Quaternion;

      /**
       * 标准化当前四元数
       */
      normalize(): Quaternion;

      /**
       * 将 Quaternion 乘以当前四元数
       * @param {Quaternion} Quaternion
       */
      premultiply(Quaternion: Quaternion): Quaternion;

      /**
       * 设置当前四元数的 x、y、z 和 w 分量
       * @param {number} x
       * @param {number} y
       * @param {number} z
       * @param {number} w
       */
      set(x: number, y: number, z: number, w: number): Quaternion;

      /**
       * 根据旋转轴和角度指定的旋转设置当前四元数
       * @param {Vector3} axis 旋转轴
       * @param {number} angle 旋转角度(弧度制)
       */
      setFromAxisAngle(axis: Vector3, angle: number): Quaternion;

      /**
       * 根据欧拉角指定的旋转角度设置当前四元数
       * @param {Euler} Euler
       */
      setFromEuler(Euler: Euler): Quaternion;

      /**
       * 根据 Matrix4 的旋转分量设置当前四元数
       * @param {Matrix4} Matrix4
       */
      setFromRotationMatrix(Matrix4: Matrix4): Quaternion;

      /**
       * 处理四元数之间的球形插值
       * @param {Quaternion} Quaternion
       * @param {number} t 位于闭区间 [0，1] 中的插值因子
       */
      slerp(Quaternion: Quaternion, t: number): Quaternion;
    }

    export class Ray {
      /**
       * 根据一个原点和一个方向向量创建一条射线
       * @param {Vector3} origin 射线原点，默认值为 {x: 0, y: 0, z: 0}
       * @param {Vector3} direction 射线方向，默认值为 {x: 0, y: 0, z: 0}
       * @constructor
       */
      constructor(origin?: Vector3, direction?: Vector3);

      /**
       * 射线原点
       * @type Vector3
       */
      origin: Vector3;

      /**
       * 射线方向
       * @type Vector3
       */
      direction: Vector3;

      /**
       * 使用所传入的矩阵 Matrix4 来对射线进行变换
       * @param {Matrix4} Matrix4
       */
      applyMatrix4(Matrix4: Matrix4): Ray;

      /**
       * 获得当前射线上给定距离处的 Vector3
       * @param {number} distance
       * @param {Vector3} target 结果将复制到该向量中
       */
      at(distance: number, target: Vector3): Vector3;

      /**
       * 返回一个与当前射线有相同 origin 和 direction 的射线
       * @return {Ray}
       */
      clone(): Ray;

      /**
       * 将传入的射线中的 origin 和 direction 拷贝到当前射线
       * @param {Ray} Ray
       */
      copy(Ray: Ray): Ray;

      /**
       * 将当前射线与一个 Box3 相交，并返回交点，若没有交点将返回 null
       * @param {Box3} Box3
       * @param {Vector3} target 结果将复制到该向量中
       */
      intersectBox(Box3: Box3, target: Vector3): Vector3;

      /**
       * 将当前射线与一个 Sphere 相交，并返回交点，若没有交点将返回 null
       * @param {Sphere} Sphere
       * @param {Vector3} target 结果将复制到该向量中
       */
      intersectSphere(Sphere: Sphere, target: Vector3): Vector3;

      /**
       * 将当前射线与一个三角形相交，并返回交点，倘若没有交点将返回 null
       * @param {Vector3} a 向量a ,b ,c组成一个三角形
       * @param {Vector3} b
       * @param {Vector3} c
       * @param {Boolean} cull 是否使用背面剔除
       * @param {Vector3} target 结果将复制到该向量中
       */
      intersectTriangle(
        a: Vector3,
        b: Vector3,
        c: Vector3,
        cull: Boolean,
        target: Vector3,
      ): Vector3;
    }

    export class Sphere {
      /**
       * 根据球心和半径定义一个球
       * @param {Vector3} center 球心的位置，默认值为 {x: 0, y: 0, z: 0}
       * @param {number} radius 球的半径，默认值是0
       * @constructor
       */
      constructor(normal?: Vector3, constant?: number);

      /**
       * 球心的位置
       * @type Vector3
       */
      center: Vector3;

      /**
       * 球的半径
       * @type number
       */
      radius: number[];

      /**
       * 使用所传入的矩阵 Matrix4 来对球进行变换
       * @param {Matrix4} Matrix4
       */
      applyMatrix4(Matrix4: Matrix4): Sphere;

      /**
       * 若 point 在球外，则获取该点与球边缘最近的点，若 point 位于球中则获取 point
       * @param {Vector3} point 要检测的点
       * @param {Vector3} target 结果将复制到这个向量中
       */
      clampPoint(point: Vector3, target?: Vector3): Vector3;

      /**
       * 返回一个与当前球具有相同的 center 和 radius 的球
       * @return {Sphere}
       */
      clone(): Sphere;

      /**
       * 判断球体中是否包含 point，包括球的表面
       * @param {Vector3} point 要检测的点
       * @return {Boolean}
       */
      containsPoint(point: Vector3): Boolean;

      /**
       * 将传入的球中的 center 和 radius 拷贝到当前球
       * @param {Sphere} Sphere
       */
      copy(Sphere: Sphere): Sphere;

      /**
       * 返回球的边界到所传入的 point 的最近距离，若这个点在球内，则距离将为负值
       * @param {Vector3} point
       * @return {number}
       */
      distanceToPoint(point: Vector3): number;

      /**
       * 判断球是否为空
       * @return {Boolean}
       */
      empty(): Boolean;

      /**
       * 判断两个球是否相等
       * @param {Sphere} Sphere
       * @return {Boolean}
       */
      equals(Sphere: Sphere): Boolean;

      /**
       * 获取这个球的最小包围盒
       * @param {Box3} Box3 结果将复制到这个 Box3 中
       */
      getBoundingBox(Box3: Box3): Box3;

      /**
       * 判断当前球与所传入的 Box3 是否有交集
       * @param {Box3} Box3
       * @return {Boolean}
       */
      intersectsBox(Box3: Box3): Boolean;

      /**
       * 判断当前球与所传入的 Plane 是否有交集
       * @param {Plane} Plane
       * @return {Boolean}
       */
      intersectsPlane(Plane: Plane): Boolean;

      /**
       * 判断当前球与所传入的 Sphere 是否有交集
       * @param {Sphere} Sphere
       * @return {Boolean}
       */
      intersectsSphere(Sphere: Sphere): Boolean;

      /**
       * 设置当前球的 center 和 radius 属性
       * @param {Vector3} center
       * @param {Vector3} radius
       */
      set(center: Vector3, radius: Vector3): Sphere;

      /**
       * 计算一个 points 数组中的点的最小边界球。如果给定了 center，则 center 将被用作该球的球心
       * @param {Array} points
       * @param {Vector3} center
       */
      setFromPoints(points: Array<Object>, center?: Vector3): Sphere;

      /**
       * 使用传入的 offset 平移球心
       * @param {Vector3} offset
       */
      translate(offset: Vector3): Sphere;
    }

    export class Triangle {
      /**
       * 创建一个由三个 Vector3 表示的三角形
       * @param {Vector3} a 默认值为 {x: 0, y: 0, z: 0}
       * @param {Vector3} b 默认值为 {x: 0, y: 0, z: 0}
       * @param {Vector3} c 默认值为 {x: 0, y: 0, z: 0}
       * @constructor
       */
      constructor(a?: Vector3, b?: Vector3, c?: Vector3);

      /**
       * 三角形的第一个角
       * @type Vector3
       */
      a: Vector3;

      /**
       * 三角形的第二个角
       * @type Vector3
       */
      b: Vector3;

      /**
       * 三角形的第三个角
       * @type Vector3
       */
      c: Vector3;
    }

    export class Vector2 {
      /**
       * 创建一个二维向量
       * @param {number} x
       * @param {number} y
       * @constructor
       */
      constructor(x?: number | Object, y?: number);

      /**
       * @type number
       */
      x: number[];

      /**
       * @type number
       */
      y: number[];

      /**
       * x的别名
       * @type number
       */
      width: number[];

      /**
       * y的别名
       * @type number
       */
      height: number[];

      /**
       * 返回一个新的 Vector2 ，与当前向量相同的 x 、y 相同
       * @return {Vector2}
       */
      clone(): Vector2;

      /**
       * 将传入的向量 Vector2 和当前向量相加
       * @param {Vector2} Vector2
       */
      add(Vector2: Vector2): Vector2;

      /**
       * 将传入的标量 scalar 和当前向量的 x 、y 相加
       * @param {number} scalar
       */
      addScalar(scalar: number): Vector2;

      /**
       * 将所传入的 Vector2 与 scalar 相乘所得的乘积和当前向量相加
       * @param {Vector2} Vector2
       * @param {number} scalar
       */
      addScaledVector(Vector2: Vector2, scalar: number): Vector2;

      /**
       * 将当前向量设置为 a + b
       * @param {Vector2} a
       * @param {Vector2} b
       */
      addVectors(a: Vector2, b: Vector2): Vector2;

      /**
       * 计算该向量相对于 x 轴正方向的弧度角度
       * @return {number} 角度(弧度制)
       */
      angle(): number;

      /**
       * 将所传入 Vector2 的 x、y 属性复制到当前向量
       * @param {Vector2} Vector2
       */
      copy(Vector2: Vector2): Vector2;

      /**
       * 如果该向量的 x 值或 y 值大于限制范围内最大 x 值或 y 值，则该值将会被所对应的值取代。如果该向量的 x 值或 y 值小于限制范围内最小 x 值或 y 值，则该值将会被所对应的值取代
       * @param {Vector2} min x和y的最小值
       * @param {Vector2} max x和y的最大值
       */
      clamp(min: Vector2, max: Vector2): Vector2;

      /**
       * 如果向量长度大于最大值，则它将会被最大值所取代，如果向量长度小于最小值，则它将会被最小值所取代
       * @param {number} min 长度最小值
       * @param {number} max 长度最大值
       */
      clampLength(min: number, max: number): Vector2;

      /**
       * 如果该向量的 x 值或 y 值大于最大值，则它们将被最大值所取代，如果该向量的 x 值或 y 值小于最小值，则它们将被最小值所取代
       * @param {number} min 分量将被限制为的最小值
       * @param {number} max 分量将被限制为的最大值
       */
      clampScalar(min: number, max: number): Vector2;

      /**
       * 计算当前向量到所传入的 Vector2 间的距离
       * @param {Vector2} Vector2
       * @return {number} 距离
       */
      distanceTo(Vector2: Vector2): number;

      /**
       * 计算当前向量到所传入的 Vector2 间的距离的平方
       * @param {Vector2} Vector2
       * @return {number} 距离的平方
       */
      distanceToSquared(Vector2: Vector2): number;

      /**
       * 将当前向量除以向量 Vector2
       * @param {Vector2} Vector2
       */
      divide(Vector2: Vector2): Vector2;

      /**
       * 将当前向量除以标量 scalar
       * @param {number} scalar
       */
      divideScalar(scalar: number): Vector2;

      /**
       * 计算当前向量和所传入 Vector2 的点积
       * @param {Vector2} Vector2
       * @return {number} 点积
       */
      dot(Vector2: Vector2): number;

      /**
       * 当前向量和所传入 Vector2 是否相等
       * @param {Vector2} Vector2
       * @return {Boolean}
       */
      equals(Vector2: Vector2): Boolean;

      /**
       * 设置向量中的 x 值为 Array[ offset + 0 ]，y 值为 Array[ offset + 1 ]
       * @param {Array} Array
       * @param {number} offset 数组的偏移量，默认值为 0
       */
      fromArray(Array: Object[], offset?: number): Vector2;

      /**
       * 计算从 (0, 0) 到 (x, y) 的直线长度
       * @return {number} 长度
       */
      length(): number;

      /**
       * 计算从 (0, 0) 到 (x, y) 的直线长度平方
       * @return {number} 长度平方
       */
      lengthSq(): number;

      /**
       * 当前向量与传入的向量 Vector2 之间的线性插值，alpha 是沿着线的长度的百分比
       * @param {Vector2} Vector3
       * @param {number} alpha
       */
      lerp(Vector2: Vector2, alpha: number): Vector2;

      /**
       * 将当前向量设置为在 向量 a 和 b 之间进行线性插值的向量
       * @param {Vector2} a
       * @param {Vector2} b
       * @param {number} alpha
       */
      lerpVectors(a: Vector2, b: Vector2, alpha: number): Vector2;

      /**
       * 如果当前向量的 x 值、y 值小于所传入 Vector2 的 x 值、y 值， 则将其替换为对应的最大值
       * @param {Vector2} Vector2
       */
      max(Vector2: Vector2): Vector2;

      /**
       * 如果当前向量的 x 值、y 值大于所传入 Vector2 的 x 值、y 值， 则将其替换为对应的最小值
       * @param {Vector2} Vector2
       */
      min(Vector2: Vector2): Vector2;

      /**
       * 将当前向量与所传入的向量 Vector2 相乘
       * @param {Vector2} Vector2
       */
      multiply(Vector2: Vector2): Vector2;
      /**
       * 将当前向量与所传入的标量 scalar 相乘
       * @param {number} scalar
       */
      multiplyScalar(scalar: number): Vector2;

      /**
       * 将当前向量转换为单位向量
       */
      normalize(): Vector2;

      /**
       * 将向量围绕着 center 旋转 angle 弧度
       * @param {Vector2} center 被围绕旋转的点
       * @param {number} angle 旋转的角度(弧度制)
       */
      rotateAround(center: Vector2, angle: number): Vector2;

      /**
       * 设置当前向量的x、y 分量
       * @param {number} x
       * @param {number} y
       */
      set(x: number, y: number): Vector2;

      /**
       * 将当前向量设置为方向相同，但是长度为 length 的向量
       * @param {number} length
       */
      setLength(length: number): Vector2;

      /**
       * 将当前向量的 x、y 值同时设置为等于传入的 scalar
       * @param {number} scalar
       */
      setScalar(scalar: number): Vector2;

      /**
       * 将当前向量中的 x 值替换为 x
       * @param {number} x
       */
      setX(x: number): Vector2;

      /**
       * 将当前向量中的 y 值替换为 y
       * @param {number} y
       */
      setY(y: number): Vector2;

      /**
       * 当前向量减去向量 Vector2
       * @param {Vector2} Vector2
       */
      sub(Vector2: Vector2): Vector2;

      /**
       * 当前向量的 x、y 减去标量 scalar
       * @param {number} scalar
       */
      subScalar(scalar: number): Vector2;

      /**
       * 将当前向量设置为 a - b
       * @param {Vector2} a
       * @param {Vector2} b
       */
      subVectors(a: Vector2, b: Vector2): Vector2;
    }

    export class Vector3 {
      constructor(x?: number | Object, y?: number, z?: number);

      /**
       * 返回一个新的 Vector3 ，与当前向量相同的 x 、y 和 z 相同
       * @return {Vector3}
       */
      clone(): Vector3;

      /**
       * 将传入的向量 Vector3 和当前向量相加
       * @param {Vector3} Vector3
       */
      add(Vector3: Vector3): Vector3;

      /**
       * 将传入的标量 scalar 和当前向量的 x 、y 和 z 相加
       * @param {number} scalar
       */
      addScalar(scalar: number): Vector3;

      /**
       * 将所传入的 Vector3 与 scalar 相乘所得的乘积和当前向量相加
       * @param {Vector3} Vector3
       * @param {number} scalar
       */
      addScaledVector(Vector3: Vector3, scalar: number): Vector3;

      /**
       * 将当前向量设置为 a + b
       * @param {Vector3} a
       * @param {Vector3} b
       */
      addVectors(a: Vector3, b: Vector3): Vector3;

      /**
       * 返回该向量与向量 Vector3 之间的角度(弧度制)
       * @param {Vector3} Vector3
       * @return {number} 角度(弧度制)
       */
      angleTo(Vector3: Vector3): number;

      /**
       * 将轴和角度所指定的旋转应用到当前向量上
       * @param {Vector3} Vector3 旋转轴(需要归一化)
       * @param {number} rotation 旋转量(弧度制)
       */
      applyAxisAngle(Vector3: Vector3, rotation: number): Vector3;

      /**
       * 将欧拉变换应用到当前向量上
       * @param {Euler} Euler 欧拉角
       */
      applyEuler(Euler: Euler): Vector3;

      /**
       * 将当前向量乘以三阶矩阵 Matrix3
       * @param {Matrix3} Matrix3
       */
      applyMatrix3(Matrix3: Matrix3): Vector3;

      /**
       * 将当前向量乘以四阶矩阵 Matrix4
       * @param {Matrix4} Matrix4
       */
      applyMatrix4(Matrix4: Matrix4): Vector3;

      /**
       * 将 Quaternion 变换应用到当前向量
       * @param {Quaternion} Quaternion
       */
      applyQuaternion(Quaternion: Quaternion): Vector3;

      /**
       * 将所传入 Vector3 的 x、y 和 z 属性复制到当前向量
       * @param {Vector3} Vector3
       */
      copy(Vector3: Vector3): Vector3;

      /**
       * 将当前向量设置为它本身与传入的 Vector3 的叉积
       * @param {Vector3} Vector3
       */
      cross(Vector3: Vector3): Vector3;

      /**
       * 将当前向量设置为传入的向量 a 与 b 的叉积
       * @param {Vector3} a
       * @param {Vector3} b
       */
      crossVectors(a: Vector3, b: Vector3): Vector3;

      /**
       * 计算当前向量到所传入的 Vector3 间的距离
       * @param {Vector3} Vector3
       * @return {number} 距离
       */
      distanceTo(Vector3: Vector3): number;

      /**
       * 计算当前向量到所传入的 Vector3 间的距离平方
       * @param {Vector3} Vector3
       * @return {number} 距离平方
       */
      distanceToSquared(Vector3: number): number;

      /**
       * 将当前向量除以向量 Vector3
       * @param {Vector3} Vector3
       */
      divide(Vector3: Vector3): Vector3;

      /**
       * 将当前向量设置为向量 a 除以 b
       * @param {Vector3} a
       * @param {Vector3} b
       */
      divideVectors(a: Vector3, b: Vector3): Vector3;

      /**
       * 计算当前向量和所传入 Vector3 的点积
       * @param {Vector3} Vector3
       */
      dot(Vector3: Vector3): number;

      /**
       * 当前向量和所传入 Vector3 是否相等
       * @param {Vector3} Vector3
       * @return {Boolean}
       */
      equals(Vector3: Vector3): Boolean;

      /**
       * 设置向量中的 x 值为 Array[ offset + 0 ]，y 值为 Array[ offset + 1 ]， z 值为 Array[ offset + 2 ]
       * @param {Array} Array
       * @param {number} offset 数组的偏移量，默认值为 0
       */
      fromArray(Array: Object[], offset?: number): Vector3;

      /**
       * 计算从 (0, 0, 0) 到 (x, y, z) 的直线长度
       * @return {number} 长度
       */
      length(): number;

      /**
       * 计算从 (0, 0, 0) 到 (x, y, z) 的直线长度平方
       * @return {number} 长度平方
       */
      lengthSq(): number;

      /**
       * 当前向量与传入的向量 Vector3 之间的线性插值，alpha 是沿着线的长度的百分比
       * @param {Vector3} Vector3
       * @param {number} alpha
       */
      lerp(Vector3: Vector3, alpha: number): Vector3;

      /**
       * 将当前向量设置为在 向量 a 和 b 之间进行线性插值的向量
       * @param {Vector3} a
       * @param {Vector3} b
       * @param {number} alpha
       */
      lerpVectors(a: Vector3, b: Vector3, alpha: number): Vector3;

      /**
       * 计算当前向量的曼哈顿长度
       * @return {number} 曼哈顿长度
       */
      manhattanLength(): number;

      /**
       * 如果当前向量的 x 值、y 值或 z 值小于所传入 Vector3 的 x 值、y 值或 z 值， 则将其替换为对应的最大值
       * @param {Vector3} Vector3
       */
      max(Vector3: Vector3): Vector3;

      /**
       * 如果当前向量的 x 值、y 值或 z 值大于所传入 Vector3 的 x 值、y 值或 z 值， 则将其替换为对应的最小值
       * @param {Vector3} Vector3
       */
      min(Vector3: Vector3): Vector3;

      /**
       * 将当前向量与所传入的向量 Vector3 相乘
       * @param {Vector3} Vector3
       */
      multiply(Vector3: Vector3): Vector3;

      /**
       * 将当前向量与所传入的标量 scalar 相乘
       * @param {number} scalar
       */
      multiplyScalar(scalar: number): Vector3;

      /**
       * 将当前向量设为向量 a 和 b 相乘的结果
       * @param {Vector3} a
       * @param {Vector3} b
       */
      multiplyVectors(a: Vector3, b: Vector3): Vector3;

      /**
       * 将当前向量取反
       */
      negate(): Vector3;

      /**
       * 将当前向量转换为单位向量
       */
      normalize(): Vector3;

      /**
       * 将当前向量设置为 normal 法线定义的平面的反射向量
       * @param {Vector3} normal
       */
      reflect(normal: Vector3): Vector3;

      /**
       * 设置当前向量的x、y 和 z 分量
       * @param {number} x
       * @param {number} y
       * @param {number} z
       */
      set(x: number, y: number, z: number): Vector3;

      /**
       * 从矩阵 Matrix4 由 index 指定的列中， 设置该向量的 x 值、y 值和 z 值
       * @param {Matrix4} Matrix4
       * @param {number} index
       */
      setFromMatrixColumn(Matrix4: Matrix4, index: number): Vector3;

      /**
       * 从矩阵（Matrix4 中， 设置当前向量为其中与位置相关的元素
       * @param {Matrix4} Matrix4
       */
      setFromMatrixPosition(Matrix4: Matrix4): Vector3;

      /**
       * 将当前向量设置为方向相同，但是长度为 length 的向量
       * @param {number} length
       */
      setLength(length: number): Vector3;

      /**
       * 将当前向量的 x、y 和 z 值同时设置为等于传入的 scalar
       * @param {number} scalar
       */
      setScalar(scalar: number): Vector3;

      /**
       * 将当前向量中的 x 值替换为 x
       * @param {number} x
       */
      setX(x: number): Vector3;

      /**
       * 将当前向量中的 y 值替换为 y
       * @param {number} y
       */
      setY(y: number): Vector3;

      /**
       * 将当前向量中的 z 值替换为 z
       * @param {number} z
       */
      setZ(z: number): Vector3;

      /**
       * 当前向量减去向量 Vector3
       * @param {Vector3} Vector3
       */
      sub(Vector3: Vector3): Vector3;

      /**
       * 当前向量的 x、y 和 z 减去标量 scalar
       * @param {number} scalar
       */
      subScalar(scalar: number): Vector3;

      /**
       * 将当前向量设置为 a - b
       * @param {Vector3} a
       * @param {Vector3} b
       */
      subVectors(a: Vector3, b: Vector3): Vector3;

      /**
       * 返回一个数组，或者将 x 、y 和 z 复制到所传入的 array 中
       * @param {Array} array 用于存储向量的数组，如果未指定会创建一个新的数组
       * @param {number} offset 数组中元素的偏移量
       * @return {Array}
       */
      toArray(array?: Object[], offset?: number): number[];

      /**
       * 通过传入的矩阵 Matrix4 变换当前向量的方向，并将结果进行归一化
       * @param {Matrix4} Matrix4
       */
      transformDirection(Matrix4: Matrix4): Vector3;
    }

    export class Vector4 {
      /**
       * 创建一个四维向量
       * @param {number} x
       * @param {number} y
       * @param {number} z
       * @param {number} w
       * @constructor
       */
      constructor(x?: number, y?: number, z?: number, w?: number);

      /**
       * @type number
       */
      x: number[];

      /**
       * @type number
       */
      y: number[];

      /**
       * @type number
       */
      z: number[];

      /**
       * @type number
       */
      w: number[];

      /**
       * 返回一个新的 Vector4 ，与当前向量相同的 x 、y 、z 和 w 相同
       * @return {Vector4}
       */
      clone(): Vector4;

      /**
       * 将传入的向量 Vector4 和当前向量相加
       * @param {Vector4} Vector4
       */
      add(Vector4: Vector4): Vector4;

      /**
       * 将传入的标量 scalar 和当前向量的 x 、y 、z 和 w 相加
       * @param {number} scalar
       */
      addScalar(scalar: number): Vector4;

      /**
       * 将所传入的 Vector4 与 scalar 相乘所得的乘积和当前向量相加
       * @param {Vector4} Vector4
       * @param {number} scalar
       */
      addScaledVector(Vector4: Vector4, scalar: number): Vector4;

      /**
       * 将当前向量设置为 a + b
       * @param {Vector4} a
       * @param {Vector4} b
       */
      addVectors(a: Vector4, b: Vector4): Vector4;

      /**
       * 将当前向量乘以四阶矩阵 Matrix4
       * @param {Matrix4} Matrix4
       */
      applyMatrix4(Matrix4: Matrix4): Vector4;

      /**
       * 将所传入 Vector4 的 x 、y 、z 和 w 属性复制到当前向量
       * @param {Vector4} Vector4
       */
      copy(Vector4: Vector4): Vector4;

      /**
       * 将当前向量除以标量 scalar
       * @param {number} scalar
       */
      divideScalar(scalar: number): Vector4;

      /**
       * 计算当前向量和所传入 Vector4 的点积
       * @param {Vector4} Vector4
       */
      dot(Vector4: Vector4): number;

      /**
       * 当前向量和所传入 Vector4 是否相等
       * @param {Vector4} Vector4
       * @return {Boolean}
       */
      equals(Vector4: Vector4): Boolean;

      /**
       * 设置向量中的 x 值为 Array[ offset + 0 ]，y 值为 Array[ offset + 1 ]， z 值为 Array[ offset + 2 ]， w 值为 Array[ offset + 3 ]
       * @param {Array} Array
       * @param {number} offset 数组的偏移量，默认值为 0
       */
      fromArray(Array: Object[], offset?: number): Vector4;

      /**
       * 计算从 (0, 0, 0, 0) 到 (x, y, z, w) 的直线长度
       * @return {number} 长度
       */
      length(): number;

      /**
       * 计算从 (0, 0, 0, 0) 到 (x, y, z, w) 的直线长度平方
       * @return {number} 长度平方
       */
      lengthSq(): number;

      /**
       * 当前向量与传入的向量 Vector4 之间的线性插值，alpha 是沿着线的长度的百分比
       * @param {Vector4} Vector4
       * @param {number} alpha
       */
      lerp(Vector4: Vector4, alpha: number): Vector4;

      /**
       * 将当前向量设置为在 向量 a 和 b 之间进行线性插值的向量
       * @param {Vector4} a
       * @param {Vector4} b
       * @param {number} alpha
       */
      lerpVectors(a: Vector4, b: Vector4, alpha: number): Vector4;

      /**
       * 计算当前向量的曼哈顿长度
       * @return {number} 曼哈顿长度
       */
      manhattanLength(): number;

      /**
       * 如果当前向量的 x 值、y 值、z 值或 w 值小于所传入 Vector4 的 x 值、y 值、z 值或 w 值， 则将其替换为对应的最大值
       * @param {Vector4} Vector4
       */
      max(Vector4: Vector4): Vector4;

      /**
       * 如果当前向量的 x 值、y 值、z 值或 w 值大于所传入 Vector4 的 x 值、y 值、z 值或 w 值， 则将其替换为对应的最小值
       * @param {Vector4} Vector4
       */
      min(Vector4: Vector4): Vector4;

      /**
       * 将当前向量与所传入的标量 scalar 相乘
       * @param {number} scalar
       */
      multiplyScalar(scalar: number): Vector4;

      /**
       * 将当前向量取反
       */
      negate(): Vector4;

      /**
       * 将当前向量转换为单位向量
       */
      normalize(): Vector4;

      /**
       * 设置当前向量的x、y、z 和 w 分量
       * @param {number} x
       * @param {number} y
       * @param {number} z
       * @param {number} w
       */
      set(x: number, y: number, z: number, w: number): Vector4;

      /**
       * 将当前向量的x、y和z分量设置为四元数的轴， w分量设置为四元数的角度
       * @param {Quaternion} Quaternion
       */
      setAxisAngleFromQuaternion(Quaternion: Quaternion): Vector4;

      /**
       * 将当前向量的x、y和z设置为旋转轴，w为角度
       * @param {Matrix4} Matrix4
       */
      setAxisAngleFromRotationMatrix(Matrix4: Matrix4): Vector4;

      /**
       * 将当前向量设置为方向相同，但是长度为 length 的向量
       * @param {number} length
       */
      setLength(length: number): Vector4;

      /**
       * 将当前向量的 x、y、z 和 w 值同时设置为等于传入的 scalar
       * @param {number} scalar
       */
      setScalar(scalar: number): Vector4;

      /**
       * 若index为 0 则设置 x 值为 value，若index为 1 则设置 y 值为 value，若index为 2 则设置 z 值为 value，若index为 3 则设置 w 值为 value
       * @param {number} index
       * @param {number} value
       */
      setComponent(index: number, value: number): null;

      /**
       * 将当前向量中的 x 值替换为 x
       * @param {number} x
       */
      setX(x: number): Vector4;

      /**
       * 将当前向量中的 y 值替换为 y
       * @param {number} y
       */
      setY(y: number): Vector4;

      /**
       * 将当前向量中的 z 值替换为 z
       * @param {number} z
       */
      setZ(z: number): Vector4;

      /**
       * 将当前向量中的 w 值替换为 w
       * @param {number} w
       */
      setW(w: number): Vector4;

      /**
       * 当前向量减去向量 Vector4
       * @param {Vector4} Vector4
       */
      sub(Vector4: Vector4): Vector4;

      /**
       * 当前向量的 x、y、z 和 w 减去标量 scalar
       * @param {number} scalar
       */
      subScalar(scalar: number): Vector4;

      /**
       * 将当前向量设置为 a - b
       * @param {Vector4} a
       * @param {Vector4} b
       */
      subVectors(a: Vector4, b: Vector4): Vector4;

      /**
       * 返回一个数组，或者将 x 、y 、z 和 w 复制到所传入的 array 中
       * @param {Array} array 用于存储向量的数组，如果未指定会创建一个新的数组
       * @param {number} offset 数组中元素的偏移量
       * @return {Array}
       */
      toArray(array?: Object[], offset?: number): number[];

      /**
       * 将该向量 x、y、z 和 w 分量向上取整为最接近的整数
       */
      ceil(): Vector4;

      /**
       * 如果该向量的 x、y、z 和 w 值大于限制范围内最大 x、y、z 和 w 值，则该值将会被所对应的值取代。如果该向量的 x、y、z 和 w 值小于限制范围内最小 x、y、z 和 w 值，则该值将会被所对应的值取代
       * @param {Vector4} min x、y、z 和 w 的最小值
       * @param {Vector4} max x、y、z 和 w 的最大值
       */
      clamp(min: Vector4, max: Vector4): Vector4;

      /**
       * 如果向量长度大于最大值，则它将会被最大值所取代，如果向量长度小于最小值，则它将会被最小值所取代
       * @param {number} min 长度最小值
       * @param {number} max 长度最大值
       */
      clampLength(min: number, max: number): Vector4;

      /**
       * 如果该向量的 x、y、z 和 w 值大于最大值，则它们将被最大值所取代，如果该向量的 x、y、z 和 w 值小于最小值，则它们将被最小值所取代
       * @param {number} min 分量将被限制为的最小值
       * @param {number} max 分量将被限制为的最大值
       */
      clampScalar(min: number, max: number): Vector4;

      /**
       * 将该向量 x、y、z 和 w 分量向下取整为最接近的整数
       */
      floor(): Vector4;

      /**
       * 若index为 0 则返回 x 值，若index为 1 则返回 y 值，若index为 2 则返回 z 值，若index为 3 则返回 w 值
       * @param {number} index
       * @return {number}
       */
      getComponent(index: number): number;

      /**
       * 向量中的分量四舍五入取整为最接近的整数值
       */
      round(): Vector4;

      /**
       * 向量中的分量朝向 0 取整数
       */
      roundToZero(): Vector4;
    }

    export class Euler {}
  }

  export let drawing: any;
  export let ui: any;
}
/**
 * 动画选项
 */
declare interface AnimOption {
  /**
   * 周期 Time-Based 方式执行动画，优先高于 Frame-Based
   */
  duration?: number;
  /**
   * 帧数
   */
  frames?: number;
  /**
   * 执行间隔
   */
  interval?: number;
  /**
   * 缓动
   * @param t 数值
   */
  easing?: EasingFunc;
  /**
   * 结束回调
   */
  finishFunc?(): void;
  /**
   * 延迟执行时间
   */
  delay?: number;
  /**
   * 动画执行函数
   * @param v 通过easing(t)函数运算后的值
   * @param t 当前动画进行的进度[0~1]
   */
  action?(v: number, t: number): void;
}

/**
 * 动画实例
 */
declare interface AnimInstance extends AnimOption {
  /**
   * 暂停动画
   */
  pause(): void;
  /**
   * 恢复动画
   */
  resume(): void;
  /**
   * 动画是否暂停
   */
  isPaused(): boolean;
  /**
   * 停止动画，会执行 finishFunc
   */
  stop(): void;
  /**
   * 是否正在执行
   */
  isRunning(): boolean;
}
/**
 * flyTo 配置项
 */
declare interface FlyToOption {
  /**
   * 默认false，是否使用动画，可以设置为true或者false或者animation动画对象
   */
  animation?: AnimOption | boolean;
  /**
   * 新的场景center点
   */
  center?: Array<number>;
  /**
   * 眼睛处于目标的方向（相对目标，受到目标自身旋转影响），例如[0,1,5]在目标正面的斜向上
   */
  direction?: Array<number>;
  /**
   * 眼睛处于目标的方向（相对场景，不受目标旋转影响），例如[0,1,5]在目标所在位置的斜向上
   */
  worldDirection?: Array<number>;
  /**
   * 眼睛跟中心的固定距离, 若定义 ratio 属性，则优先使用 ratio
   */
  distance?: number;
  /**
   * 默认0.8，浮点类型，表示眼睛跟中心的距离动态计算（例如 0.8 表示眼睛在上述方向上动态计算距离以将目标包围盒的8个角全部适配到屏幕80%范围内）
   */
  ratio?: number;
}
/**
 * 缓动函数
 */
declare interface EasingFunc {
  (time: number): number;
}
declare interface Point {
  x: number;
  y: number;
  e?: number;
}
declare interface Point3d extends Point {
  z: number;
}
/**
 * 矩形区域
 */
declare interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

declare interface HTInteractiveEvent {
  event: any;
  kind: string;
  data?: ht.Data;
  type?: string;
  part?: string;
}

declare interface HTPropertyChangeEvent {
  data: any;
  property: string;
  oldValue: any;
  newValue: any;
}

/**
 * 调度任务对象
 */
declare interface ScheduleTask {
  /**
   * 间隔毫秒数，默认值为10
   */
  interval?: number;

  /**
   * 是否启用开关，默认为true
   */
  enabled?: boolean;

  /**
   * 调度开始之前的动作函数
   */
  beforeAction?: Function;

  /**
   * 间隔动作函数，对DataModel上的每个data节点都会执行一次action操作
   */
  action: Function;

  /**
   * 调度开始之后的动作函数
   */
  afterAction?: Function;
}

declare interface ConnectActionFunc {
  (gv: ht.graph.GraphView, source: ht.Node, target: ht.Node): void;
}

declare interface ConnectActionExtraInfo {
  visible?: Function;
  delete?: {
    action?: Function;
    visible?: Function;
  };
}

declare module 'ht' {
  export = ht;
}
