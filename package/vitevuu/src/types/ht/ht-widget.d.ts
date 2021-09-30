// eslint-disable-next-line max-classes-per-file
declare namespace ht {
  export class Column extends Data {
    /**
     * 列数据，用于定义表格组件的列信息，包含列名称、类型以及自定义渲染和编辑单元格等信息
     * @constructor
     * @extends ht.Data
     */
    constructor();

    /**
     * 将要显示的值传入此方法格式化处理并返回，一般用于将数字转换更易读的文本格式，可重载自定义
     * @param {Object} value 格式化之前值
     * @return {Object} 格式化之后的值
     */
    formatValue(value: any): any;

    /**
     * 获取列的属性类型，值列表如下：<br>
     * <ul>
     * <li>null: 默认类型，如name为age，采用getAge()和setAge(98)的get/set或is/set方式存取</li>
     * <li>style: 如name为age，采用getStyle('age')和setStyle('age', 98)的方式存取</li>
     * <li>field：如name为age，采用data.age和data.age = 98的方式存取</li>
     * <li>attr：如name为age，采用getAttr('age')和setAttr('age', 98)的方式存取</li>
     * </ul>
     * @return {String|null}
     */
    getAccessType(): string;

    /**
     * 获取文字的水平对齐方式，可用值有left|right|center，默认为left
     * @return {String}
     */
    getAlign(): string;

    /**
     * 获取表头文字的颜色
     * @return {color}
     */
    getColor(): string;

    /**
     * 获取颜色选择器配置
     * @see {@link ht.Column#setColorPicker setColorPicker}
     * @return {Object}
     */
    getColorPicker(): Object;

    /**
     * 当此列使用下拉列表作为编辑器时，此方法返回下拉列表的所有枚举icon数组
     * @return {Array}
     */
    getEnumIcons(): string[];

    /**
     * 当此列使用下拉列表作为编辑器时，此方法返回下拉列表的所有枚举文字数组
     * @return {Array}
     */
    getEnumLabels(): string[];

    /**
     * 当此列使用下拉列表作为编辑器时，此方法返回下拉列表的最大高度(超出使用滚动条)
     */
    getEnumMaxHeight(): number;

    /**
     * 当此列使用下拉列表作为编辑器时，此方法返回下拉列表的值数组
     */
    getEnumValues(): any[];

    /**
     * 获取自定义的单元格编辑器
     * @return {Function}
     */
    getItemEditor(): Function;

    /**
     * 获取拉条配置
     * @see {@link ht.Column#setSlider setSlider}
     * @return {Object}
     */
    getSlider(): Object;

    /**
     * 获取排序函数
     * @return {Function}
     */
    getSortFunc(): Function;

    /**
     * 获取排序状态<br>
     * <ul>
     * <li>asc: 升序</li>
     * <li>desc: 降序</li>
     * </ul>
     * @return {String}
     */
    getSortOrder(): string;

    /**
     * 获取toolTip文字
     * @param {ht.Data} data 数据元素
     * @param {ht.widget.TableView} tableView 视图对象
     * @return {String}
     */
    // getToolTip(data: ht.Data, tableView: widget.TableView): string;

    /**
     * 获取值类型，值类型用于提示组件提供合适的renderer渲染，合适的编辑控件，及改变值时必要的类型转换<br>
     * <ul>
     * <li>null：默认类型，显示为文本方式</li>
     * <li>string：字符串类型，显示为文本方式</li>
     * <li>boolean：布尔类型，显示为勾选框</li>
     * <li>color：颜色类型，以填充背景色的方式显示</li>
     * <li>int：整型类型，文本编辑器改变值时自动通过parseInt进行转换</li>
     * <li>number：浮点数类型，文本编辑器改变值时自动通过parseFloat转换</li>
     * </ul>
     * @return {String}
     */
    getValueType(): string;

    /**
     * 获取列宽度
     * @return {Number}
     */
    getWidth(): number;

    /**
     * 判断该列是否允许多选时批量编辑，默认为true
     * @return {Boolean}
     */
    isBatchEditable(): boolean;

    /**
     * 判断此列是否可编辑
     * @return {Boolean}
     */
    isEditable(): boolean;

    /**
     * 判断属性是否可为空字符串，可避免输入空字符串，空字符串转换成undefined。默认为false
     * @return {Boolean}
     */
    isEmptiable(): boolean;

    /**
     * 枚举下拉编辑器是否允许可输入，默认为false
     * @return {Boolean}
     */
    isEnumEditable(): boolean;

    /**
     * 判断值匹配时是否采用严格的===进行比较，默认为true，若为false则采用==进行比较
     * @return {Boolean}
     */
    isEnumStrict(): boolean;

    /**
     * 判断属性是否可为空，默认为true，设置为false可避免输入null或undefined
     * @return {Boolean}
     */
    isNullable(): boolean;

    /**
     * 判断当前列是否可排序
     * @return {Boolean}
     */
    isSortable(): boolean;

    /**
     * 判断当前列是否是否可见
     * @return {Boolean}
     */
    isVisible(): boolean;

    /**
     * 设置列的属性类型，可选值如下：<br>
     * <ul>
     * <li>null: 默认类型，如name为age，采用getAge()和setAge(98)的get/set或is/set方式存取</li>
     * <li>style: 如name为age，采用getStyle('age')和setStyle('age', 98)的方式存取</li>
     * <li>field：如name为age，采用data.age和data.age = 98的方式存取</li>
     * <li>attr：如name为age，采用getAttr('age')和setAttr('age', 98)的方式存取</li>
     * </ul>
     * @param {String|null} accessType
     */
    setAccessType(accessType: string): void;

    /**
     * 设置文字的水平对齐方式，可用值有left|right|center，默认为left
     * @param {String} align 对齐方式
     */
    setAlign(align: string): void;

    /**
     * 设置该列是否允许多选时批量编辑，默认为true
     * @param {Boolean} v
     */
    setBatchEditable(v: boolean): void;

    /**
     * 设置表头文字的颜色
     * @param {color} color
     */
    setColor(color: string): void;

    /**
     * 设置颜色选择器配置，需要引入form插件，设置此属性后，此列将使用颜色选择器作为单元格编辑器
     * @param {Object} v 颜色选择器配置，如{background: 'red'}可以指定颜色选择器背景为红色，如果要使用默认配置，使用空对象{}即可
     */
    setColorPicker(v: Function): void;

    /**
     * 设置此列是否可编辑
     * @param {Boolean} editable
     */
    setEditable(editable: boolean): void;

    /**
     * 设置属性是否可为空字符串，可避免输入空字符串，空字符串转换成undefined。默认为false
     * @param {Boolean} emptiable
     */
    setEmptiable(emptiable: boolean): void;

    /**
     * 设置枚举列表，此列自动采用下拉列表作为单元格编辑器
     * @param {Object|Array} v
     * @example //示例，参数依次表示：值，文字、icon
     * column.setEnum([1,2,3], ['C','C++','JS'], ['c_icon', 'c++_icon', 'js_icon']);
     * //也可以使用对象的方式：
     * column.setEnum({values:[1,2,3], labels:['C','C++','JS'], icons:['c_icon', 'c++_icon', 'js_icon']});
     */
    setEnum(v: Object | any[]): void;

    /**
     * 设置自定义的单元格编辑器
     * @param {Function} editor
     */
    setItemEditor(editor: Function): void;

    /**
     * 设置属性是否可为空，默认为true，设置为false可避免输入null或undefined
     * @param {Boolean} nullable
     */
    setNullable(nullable: boolean): void;

    /**
     * 设置拉条配置，需要引入form插件，设置此属性后，此列将使用拉条作为单元格编辑器
     * @param {Object} v 拉条配置，如{background: 'red'}可以指定拉条背景为红色，如果要使用默认配置，使用空对象{}即可
     */
    setSlider(v: Object): void;

    /**
     * 设置当前列是否可排序
     * @param {Boolean} nullable
     */
    setSortable(nullable: boolean): void;

    /**
     * 设置排序函数
     * @param {Function} func
     */
    setSortFunc(func: Function): void;

    /**
     * 设置排序状态<br>
     * <ul>
     * <li>asc: 升序</li>
     * <li>desc: 降序</li>
     * </ul>
     * @param {String} sortOrder
     */
    setSortOrder(sortOrder: string): void;

    /**
     * 设置值类型，值类型用于提示组件提供合适的renderer渲染，合适的编辑控件，及改变值时必要的类型转换<br>
     * <ul>
     * <li>null：默认类型，显示为文本方式</li>
     * <li>string：字符串类型，显示为文本方式</li>
     * <li>boolean：布尔类型，显示为勾选框</li>
     * <li>color：颜色类型，以填充背景色的方式显示</li>
     * <li>int：整型类型，文本编辑器改变值时自动通过parseInt进行转换</li>
     * <li>number：浮点数类型，文本编辑器改变值时自动通过parseFloat转换</li>
     * </ul>
     * @param {String|null} type
     */
    setValueType(type: string): void;

    /**
     * 设置当前列是否是否可见
     * @param {Boolean} v
     */
    setVisible(v: boolean): void;

    /**
     * 设置列宽度
     * @param {Number} v
     */
    setWidth(v: number): void;

    /**
     * 根据value查找对应的枚举icon
     * @param {Object} value 枚举值
     * @return {String}
     */
    toEnumIcon(value: string, data: ht.Data): Object;

    /**
     * 根据value查找对应的枚举label文字
     * @param {Object} value 枚举值
     * @return {String}
     */
    toEnumLabel(value: string, data: ht.Data): string;
  }
  export class Property extends Data {
    /**
     * 将要显示的值传入此方法格式化处理并返回，一般用于将数字转换更易读的文本格式，可重载自定义
     * @param value 格式化之前值
     * @return {object} 格式化之后的值
     */
    formatValue(value: object): object;

    /**
     * 获取属性类型，值列表如下：<br>
     * null: 默认类型，如name为age，采用getAge()和setAge(98)的get/set或is/set方式存取
     * style: 如name为age，采用getStyle('age')和setStyle('age', 98)的方式存取
     * field：如name为age，采用data.age和data.age = 98的方式存取
     * attr：如name为age，采用getAttr('age')和setAttr('age', 98)的方式存取
     * @return {string|null}
     */
    getAccessType(): string;

    /**
     * 获取文字的水平对齐方式，可用值有left|right|center，默认为left
     * @return {String}
     */
    getAlign(): string;

    /**
     * 获取属性分类名称
     * @return {String}
     */
    getCategoryName(): string;

    /**
     * 获取属性名文字的颜色
     * @return {color}
     */
    getColor(): string;

    /**
     * 获取颜色选择器配置
     * @return {object}
     */
    getColorPicker(): object;

    /**
     * 当属性使用下拉列表作为编辑器时，此方法返回下拉列表的所有枚举icon数组
     * @return {Array}
     */
    getEnumIcons(): string[];

    /**
     * 当属性使用下拉列表作为编辑器时，此方法返回下拉列表的所有枚举文字数组
     * @return {Array}
     */
    getEnumLabels(): string[];

    /**
     * 当属性使用下拉列表作为编辑器时，此方法返回下拉列表的最大高度(超出使用滚动条)
     * @return {number}
     */
    getEnumMaxHeight(): number;

    /**
     * 当属性使用下拉列表作为编辑器时，此方法返回下拉列表的值数组
     * @return {Array}
     */
    getEnumValues(): object[];

    /**
     * 获取自定义的单元格编辑器
     * @return {Function}
     */
    getItemEditor(): Function;

    /**
     * 获取拉条配置
     * @return {Object}
     */
    getSlider(): object;

    /**
     * 获取toolTip文字
     * @param data 数据元素
     * @param isValue 是否是属性值
     * @param propertyView 视图对象
     * @return {string}
     */
    // getToolTip(data: ht.Data, isValue: boolean, propertyView: ht.widget.PropertyView): string;

    /**
     * 获取值类型，值类型用于提示组件提供合适的renderer渲染，合适的编辑控件，及改变值时必要的类型转换
     * null：默认类型，显示为文本方式
     * string：字符串类型，显示为文本方式
     * boolean：布尔类型，显示为勾选框
     * color：颜色类型，以填充背景色的方式显示
     * int：整型类型，文本编辑器改变值时自动通过parseInt进行转换
     * number：浮点数类型，文本编辑器改变值时自动通过parseFloat转换
     * @return {String}
     */
    getValueType(): string;

    /**
     * 判断是否允许多选时批量编辑，默认为true
     * @return {boolean}
     */
    isBatchEditable(): boolean;

    /**
     * 判断属性是否可编辑
     * @return {boolean}
     */
    isEditable(): boolean;

    /**
     * 判断属性是否可为空字符串，可避免输入空字符串，空字符串转换成undefined。默认为false
     * @return {boolean}
     */
    isEmptiable(): boolean;

    /**
     * 枚举下拉编辑器是否允许可输入，默认为false
     * @return {boolean}
     */
    isEnumEditable(): boolean;

    /**
     * 判断值匹配时是否采用严格的===进行比较，默认为true，若为false则采用==进行比较
     * @return {boolean}
     */
    isEnumStrict(): boolean;

    /**
     * 判断属性是否可为空，默认为true，设置为false可避免输入null或undefined
     * @return {boolean}
     */
    isNullable(): boolean;

    /**
     * 设置属性类型，可选值如下：
     * null: 默认类型，如name为age，采用getAge()和setAge(98)的get/set或is/set方式存取
     * style: 如name为age，采用getStyle('age')和setStyle('age', 98)的方式存取
     * field：如name为age，采用data.age和data.age = 98的方式存取
     * attr：如name为age，采用getAttr('age')和setAttr('age', 98)的方式存取
     * @param {string|null} accessType
     */
    setAccessType(accessType?: string): void;

    /**
     * 设置文字的水平对齐方式，可用值有left|right|center，默认为left
     * @param {string} align 对齐方式
     */
    setAlign(align: string): void;

    /**
     * 设置是否允许多选时批量编辑，默认为true
     * @param {boolean} v
     */
    setBatchEditable(v: boolean): void;

    /**
     * 设置属性分类名称
     * @param {string} name
     */
    setCategoryName(name: string): void;

    /**
     * 设置属性名文字的颜色
     * @param {color} color
     */
    setColor(color: string): void;

    /**
     * 设置颜色选择器配置，需要引入form插件，设置后将使用颜色选择器作为属性编辑器
     * @param {object} v 颜色选择器配置，如{background: 'red'}可以指定颜色选择器背景为红色，如果要使用默认配置，使用空对象{}即可
     */
    setColorPicker(v: object): void;

    /**
     * 设置属性是否可编辑
     * @param editable
     */
    setEditable(editable: boolean): void;

    /**
     * 设置属性是否可为空字符串，可避免输入空字符串，空字符串转换成undefined。默认为false
     * @param {boolean} emptiable
     */
    setEmptiable(emptiable: boolean): void;

    /**
     * 设置枚举列表，自动采用下拉列表作为属性编辑器
     * @param {Object|Array} v
     * @example
     * //示例，参数依次表示：值，文字、icon
     * property.setEnum([1,2,3], ['C','C++','JS'], ['c_icon', 'c++_icon', 'js_icon']);
     * //也可以使用对象的方式：
     * property.setEnum({values:[1,2,3], labels:['C','C++','JS'], icons:['c_icon', 'c++_icon', 'js_icon']});
     */
    setEnum(v: Object | any[]): void;

    /**
     * 设置自定义的属性编辑器
     * @param {Function} editor
     */
    setItemEditor(editor: Function): void;

    /**
     * 设置属性是否可为空，默认为true，设置为false可避免输入null或undefined
     * @param {Boolean} nullable
     */
    setNullable(nullable: boolean): void;

    /**
     * 设置拉条配置，需要引入form插件，设置后将使用拉条作为属性编辑器
     * @param {Object} v 拉条配置，如{background: 'red'}可以指定拉条背景为红色，如果要使用默认配置，使用空对象{}即可
     */
    setSlider(v: Object): void;

    /**
     * 设置值类型，值类型用于提示组件提供合适的renderer渲染，合适的编辑控件，及改变值时必要的类型转换<br>
     * <ul>
     * <li>null：默认类型，显示为文本方式</li>
     * <li>string：字符串类型，显示为文本方式</li>
     * <li>boolean：布尔类型，显示为勾选框</li>
     * <li>color：颜色类型，以填充背景色的方式显示</li>
     * <li>int：整型类型，文本编辑器改变值时自动通过parseInt进行转换</li>
     * <li>number：浮点数类型，文本编辑器改变值时自动通过parseFloat转换</li>
     * </ul>
     * @param {String|null} type
     */
    setValueType(type: string): void;

    /**
     * 根据value查找对应的枚举icon
     * @param {Object} value 枚举值
     * @return {String}
     */
    toEnumIcon(value: string, data: ht.Data): Object;

    /**
     * 根据value查找对应的枚举label文字
     * @param {Object} value 枚举值
     * @return {String}
     */
    toEnumLabel(value: string, data: ht.Data): string;
  }
  namespace widget {
    /**
     * 树形组件，以树形的方式呈现DataModel中Data数据的父子关系
     * @param dataModel 绑定的数据模型
     * @constructor
     */
    export class TreeView {
      constructor(dataModel?: DataModel);
      /**
       * 增加底层Painter
       * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，底层Painter绘制在组件最下面
       * @param painter 参数为Function时，为Painter类，参数为Object时，为交互器基类，会调用Object中draw方法
       * @example //Painter示例：
       * graphView.addBottomPainter(function(g){
       *     g.fillStyle = '#000000';
       *     g.fillRect(0, 0, 100, 100);
       * });
       */
      addBottomPainter(painter: Object | Function): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: boolean,
      ): void;

      /**
       * 增加顶层Painter
       * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，顶层Painter绘制在组件最上面
       * @param painter 参数为Function时，为Painter类，参数为Object时，为交互器基类，会调用Object中draw方法
       * @example //Painter示例：
       * graphView.addTopPainter(function(g){
       *     g.fillStyle = '#000000';
       *     g.fillRect(0, 0, 100, 100);
       * });
       */
      addTopPainter(painter: Object | Function): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
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

      /**
       * 传入即将设置的水平平移值，返回最终设置值，可重载限制水平平移范围
       * @param value 原始水平平移值
       * @return {number} 新的水平平移值
       */
      adjustTranslateX(value: number): number;

      /**
       * 传入即将设置的垂直平移值，返回最终设置值，可重载限制垂直平移范围
       * @param value 原始垂直平移值
       * @return {number} 新的垂直平移值
       */
      adjustTranslateY(value: number): number;

      /**
       * 合并data对象
       * @param data 数据元素
       */
      collapse(data: Data): void;

      /**
       * 合并所有对象
       */
      collapseAll(): void;

      /**
       * 展开data对象
       * @param data 数据元素
       */
      expand(data: Data): void;

      /**
       * 展开所有对象
       */
      expandAll(): void;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      /**
       * 获取数据模型，没有参数时相当于getDataModel的缩写
       * @return {DataModel} dataModel
       */
      dm(): DataModel;

      /**
       * 设置数据模型，有参数时相当于setDataModel的缩写
       * @param dataModel
       */
      dm(dataModel: DataModel): void;

      /**
       * 绘制图标，可重载自定义
       * @param g 画笔对象
       * @param data 数据元素
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param width 绘制的宽度
       * @param height 绘制的高度
       */
      drawIcon(
        g: CanvasRenderingContext2D,
        data: Data,
        x: number,
        y: number,
        width: number,
        height: number,
      ): void;

      /**
       * 绘制文本，可重载自定义，label一般绘制在最后因此没有width参数限制
       * @param g 画笔对象
       * @param data 数据元素
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param height 绘制的高度
       */
      drawLabel(
        g: CanvasRenderingContext2D,
        data: Data,
        x: number,
        y: number,
        height: number,
      ): void;

      /**
       * 绘制行内容，可重载自定义，默认调用drawIcon和drawLabel，如果返回值为HTML元素，则使用HTML元素当作Renderer
       * @param g 画笔对象
       * @param data 数据元素
       * @param selected 数据元素是否选中
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param width 绘制的宽度
       * @param height 绘制的高度
       * @return {HTMLElement}
       */
      drawRow(
        g: CanvasRenderingContext2D,
        data: Data,
        selected: boolean,
        x: number,
        y: number,
        width: number,
        height: number,
      ): HTMLElement;

      /**
       * 绘制行背景色，默认仅在选中该行时填充选中背景色，可重载自定义
       * @param g 画笔对象
       * @param data 数据元素
       * @param selected 数据元素是否选中
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param width 绘制的宽度
       * @param height 绘制的高度
       */
      drawRowBackground(
        g: CanvasRenderingContext2D,
        data: Data,
        selected: boolean,
        x: number,
        y: number,
        width: number,
        height: number,
      ): void;

      /**
       * 获取数据元素icon的背景色，可重载自定义
       * @param data 数据元素
       * @return {color} 颜色值，默认返回data.s('body.color')
       */
      getBodyColor(data: Data): String;

      /**
       * 获取数据元素icon的边框色，可重载自定义
       * @param data 数据元素
       * @return {color} 颜色值，默认返回data.s('border.color')
       */
      getBorderColor(data: Data): String;

      /**
       * 返回数据元素对应的check图标，可重载自定义check图标，该函数在checkMode模式下有效
       * @param data 数据元素
       * @return {String}
       */
      getCheckIcon(data: Data): String;

      /**
       * 获取check模式
       * null：默认值，不启用check选择模式
       * default：check模式的默认选择方式，即单击选中或取消选中，只影响当前点击中的data对象
       * children：该check模式将同时影响点击中的data对象，以及其孩子对象
       * descendant：该check模式将同时影响点击中的data对象，以及其所有子孙对象
       * all：该check模式将同时影响点击中的data对象，以及其所有父辈和子孙对象
       * @return {String}
       */
      getCheckMode(): String;

      /**
       * 获取toggle的关闭图标
       * @return {String}
       */
      getCollapseIcon(): String;

      /**
       * 传入逻辑坐标点或者交互event事件参数，返回当前点下的数据元素
       * @param pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
       * @return {Data} 点下的数据元素
       */
      getDataAt(pointOrEvent: Object): Data | null;

      /**
       * 获取绑定的数据模型
       * @return {DataModel} 数据模型
       */
      getDataModel(): DataModel;

      /**
       * 获取当前可见区域的结束行索引
       * @return {number}
       */
      getEndRowIndex(): number;

      /**
       * 获取toggle的展开图标
       * @return {String}
       */
      getExpandIcon(): String;

      /**
       * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态
       * 此方法获取focus数据元素
       * @return {Data}
       */
      getFocusData(): Data;

      /**
       * 获取布局高度
       * @return {number}
       */
      getHeight(): number;

      /**
       * 获取data对象对应的icon图标，可重载自定义
       * @param data 数据元素
       * @return {String}
       */
      getIcon(data: Data): String;

      /**
       * 返回data对象对应的图标宽度，默认如果有图标则以indent值为宽度，可重载自定义
       * @param data 数据元素
       * @return {number}
       */
      getIconWidth(data: Data): number;

      /**
       * 获取indent缩进，该值一般当作图标的宽度
       * @param data 数据元素
       * @return {number}
       */
      getIndent(data: Data): number;

      /**
       * 获取data对象显示的文字，默认返回data.toLabel()，可重载自定义
       * @param data 数据元素
       * @return {String}
       */
      getLabel(data: Data): String;

      /**
       * 获取data对象的文本颜色，可重载自定义
       * @param data 数据元素
       * @return {color}
       */
      getLabelColor(data: Data): String;

      /**
       * 获取data对象的文本字体，可重载自定义
       * @param data 数据元素
       * @return {String}
       */
      getLabelFont(data: Data): String;

      /**
       * 获取选中文本的颜色
       * @return {color}
       */
      getLabelSelectColor(): String;

      /**
       * 获取当前data的缩减层次，一般结合indent参数用于绘制
       * @param data 数据元素
       * @return {number}
       */
      getLevel(data: Data): number;

      /**
       * 获取延迟加载器
       * @return {Object}
       */
      getLoader(): Object;

      /**
       * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
       * @param event 事件对象
       * @return {Object}
       */
      getLogicalPoint(event: Event): Object;

      /**
       * 获取根节点，默认为空，从DataModel#getRoots()的对象开始展示
       * @return {Data}
       */
      getRootData(): Data;

      /**
       * 获取当前显示的Data对象集合，该集合已被排序和过滤
       * @return {List}
       */
      getRowDatas(): List;

      /**
       * 获取行高
       * @return {number}
       */
      getRowHeight(): number;

      /**
       * 获取data对象所在的行索引
       * @param data 数据元素
       * @return {number}
       */
      getRowIndex(data: Data): number;

      /**
       * 获取行线颜色
       * @return {color}
       */
      getRowLineColor(): String;

      /**
       * 返回当前可见行总行数
       * @return {number}
       */
      getRowSize(): number;

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
       * 获取选择过滤器函数
       * @return {Function}
       */
      getSelectableFunc(): Function;

      /**
       * 获取行选中背景颜色
       * @return {color}
       */
      getSelectBackground(): String;

      /**
       * 获取选中模型
       * @return {SelectionModel}
       */
      getSelectionModel(): SelectionModel;

      /**
       * 获取排序函数
       * @return {Function}
       */
      getSortFunc(): Function;

      /**
       * 获取当前可见区域的起始行索引
       * @return {number}
       */
      getStartRowIndex(): number;

      /**
       * 返回当前data对象对应的展开或合并图标，可重载自定义
       * @param data 数据元素
       * @return {String}
       */
      getToggleIcon(data: Data): String;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @param e 鼠标或Touch事件对象
       * @return {String} toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(e: Event): String;

      /**
       * 获取垂直平移值
       * @return {number} 垂直平移值
       */
      getTranslateY(): number;

      /**
       * 获取组件的根层div
       * @return {HTMLDivElement}
       */
      getView(): HTMLDivElement;

      /**
       * 获取组件中可见区域的逻辑尺寸
       * @return {Object}
       */
      getViewRect(): Object;

      /**
       * 获取可见过滤器函数
       * @return {Function}
       */
      getVisibleFunc(): Function;

      /**
       * 获取布局宽度
       * @return {number}
       */
      getWidth(): number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       */
      invalidate(delay?: number): void;

      /**
       * 无效数据元素
       * @param {Data} data 要无效的数据元素
       */
      invalidateData(data: Data): void;

      /**
       * 无效模型，最彻底的刷新方式
       */
      invalidateModel(): void;

      /**
       * 是否自动隐藏滚动条
       * @return {boolean}
       */
      isAutoHideScrollBar(): boolean;

      /**
       * 选中数据元素时，是否自动平移组件以确保该元素出现在可见区域内
       * @return {boolean}
       */
      isAutoMakeVisible(): boolean;

      /**
       * 是否是check模式
       * @return {boolean}
       */
      isCheckMode(): boolean;

      /**
       * 判断是否允许对parent对象的孩子排序，默认返回true，可重载屏蔽孩子排序
       * @param parent 父元素
       * @return {boolean}
       */
      isChildrenSortable(parent: Data): boolean;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return {boolean}
       */
      isDisabled(): boolean;

      /**
       * 判断data对象是否展开
       * @param data 数据元素
       * @return {boolean}
       */
      isExpanded(data: Data): boolean;

      /**
       * 判断rootData节点是否可见
       * @return {boolean}
       */
      isRootVisible(): boolean;

      /**
       * 获取行线是否可见，默认为true
       * @return {boolean}
       */
      isRowLineVisible(): boolean;

      /**
       * 判断data对象是否可被选中
       * @param data 数据元素
       * @return {boolean}
       */
      isSelectable(data: Data): boolean;

      /**
       * 判断data对象是否被选中
       * @param data 图元
       * @return {boolean}
       */
      isSelected(data: Data): boolean;

      /**
       * 根据id判断data对象是否被选中
       * @param id 数据元素id
       * @return {boolean}
       */
      isSelectedById(id: String | number): boolean;

      /**
       * 当前组件是否共享选中模型
       * @return {boolean}
       */
      isSelectionModelShared(): boolean;

      /**
       * 判断数据元素是否可见
       * @param data 数据元素
       * @return {boolean}
       */
      isVisible(data: Data): boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       */
      iv(delay?: number): void;

      /**
       * 无效模型，重新构造内部的rows数据，最彻底的刷新方式，invalidateModel的缩写
       */
      ivm(): void;

      /**
       * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标，getLogicalPoint的缩写
       * @param event 事件对象
       * @return {Object}
       */
      lp(event: Event): Object;

      /**
       * 平移组件以确保数据元素在可见区域内
       * @param data 数据元素
       */
      makeVisible(data: Data): void;

      /**
       * 增加自身属性变化事件监听器，addPropertyChangeListener的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      mp(listener: Function, scope?: Object, ahead?: boolean): void;

      /**
       * 合并data对象时调用，可重载做后续处理
       * @param data 数据元素
       */
      onCollapsed(data: Data): void;

      /**
       * 数据元素被点击时回调，可重载做后续处理
       * @param data 被点击的数据元素
       * @param e 事件对象
       */
      onDataClicked(data: Data, e: Event): void;

      /**
       * 数据元素被双击时回调，可重载做后续处理
       * @param data 双击的数据元素
       * @param e 事件对象
       */
      onDataDoubleClicked(data: Data, e: Event): void;

      /**
       * 展开data对象时调用，可重载做后续处理
       * @param data 数据元素
       */
      onExpanded(data: Data): void;

      /**
       * 平移动画结束时回调，可重载做后续处理
       */
      onTranslateEnded(): void;

      /**
       * 重绘组件中所有行，仅次于invalidateModel的彻底刷新方式
       */
      redraw(): void;

      /**
       * 删除底层Painter
       * @param painter Painter类
       */
      removeBottomPainter(painter: Object | Function): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除所有选中的图元
       */
      removeSelection(): void;

      /**
       * 删除顶层Painter
       * @param painter Painter类
       */
      removeTopPainter(painter: Object | Function): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 平移(滚动)组件至指定的行号
       * @param index 行号
       */
      scrollToIndex(index: number): void;

      /**
       * 选中所有数据元素
       */
      selectAll(): void;

      /**
       * 设置是否自动隐藏滚动条
       * @param v
       */
      setAutoHideScrollBar(v: boolean): void;

      /**
       * 设置当选中数据元素，是否自动平移(滚动)组件以确保该数据元素出现在可见区域内
       * @param v
       */
      setAutoMakeVisible(v: boolean): void;

      /**
       * 设置check模式
       * @param v
       * null：默认值，不启用check选择模式
       * default：check模式的默认选择方式，即单击选中或取消选中，只影响当前点击中的data对象
       * children：该check模式将同时影响点击中的data对象，以及其孩子对象
       * descendant：该check模式将同时影响点击中的data对象，以及其所有子孙对象
       * all：该check模式将同时影响点击中的data对象，以及其所有父辈和子孙对象
       */
      setCheckMode(v: String): void;

      /**
       * 设置toggle的关闭图标
       * @param v icon
       */
      setCollapseIcon(v: String): void;

      /**
       * 设置绑定的数据模型
       * @param dataModel 数据模型
       */
      setDataModel(dataModel: DataModel): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: boolean, iconUrl: String): void;

      /**
       * 设置toggle的展开图标
       * @param v icon
       */
      setExpandIcon(v: String): void;

      /**
       * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
       * 此方法设置focus的数据元素
       * @param data 数据元素
       */
      setFocusData(data: Data): void;

      /**
       * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
       * 此方法设置focus的数据元素
       * @param id 数据元素的id
       */
      setFocusDataById(id: String | number): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: number): void;

      /**
       * 设置indent缩进，该值一般当作图标的宽度
       * @param v
       */
      setIndent(v: number): void;

      /**
       * 设置行label文字颜色
       * @param v
       */
      setLabelColor(v: String): void;

      /**
       * 设置行label文字字体
       * @param v
       */
      setLabelFont(v: String): void;

      /**
       * 设置行label文字选中颜色
       * @param v
       */
      setLabelSelectColor(v: String): void;

      /**
       * 设置延迟加载器
       * @param v
       * @example //示例：
       * treeView.setLoader({
       * 	load: function(data) {
       * 		//展开此data时回调，可用于加载子节点
       * 	},
       * 	isLoaded: function(data) {
       * 		//返回此data的子结点是否已加载
       * 	}
       * });
       */
      setLoader(v: Object): void;

      /**
       * 指定根节点，默认为空，从DataModel#getRoots()的对象开始展示
       * @param v
       */
      setRootData(v: Data): void;

      /**
       * 设置根节点是否可见
       * @param v
       */
      setRootVisible(v: boolean): void;

      /**
       * 设置行高
       * @param v
       */
      setRowHeight(v: number): void;

      /**
       * 设置行线颜色
       * @param color
       */
      setRowLineColor(color: String): void;

      /**
       * 设置行线是否可见
       * @param v
       */
      setRowLineVisible(v: boolean): void;

      /**
       * 设置滚动条颜色
       * @param color 颜色值
       */
      setScrollBarColor(color: String): void;

      /**
       * 设置滚动条宽度
       * @param size 宽度值
       */
      setScrollBarSize(size: number): void;

      /**
       * 设置选择过滤器函数
       * @param func 过滤器函数
       */
      setSelectableFunc(func: Function): void;

      /**
       * 设置行选中背景颜色
       * @param color
       */
      setSelectBackground(color: String): void;

      /**
       * 设置组件是否共享选中模型
       * @param v
       */
      setSelectionModelShared(v: boolean): void;

      /**
       * 设置排序函数
       * @param func
       */
      setSortFunc(func: Function): void;

      /**
       * 设置垂直平移值(水平平移值无效)
       * @param x 水平平移值，此参数无效
       * @param y 垂直平移值
       * @param anim 是否使用动画
       */
      setTranslate(x: number, y: number, anim?: boolean): void;

      /**
       * 设置垂直平移值
       * @param v 垂直平移值
       */
      setTranslateY(v: number): void;

      /**
       * 设置可见过滤器
       * @param func 过滤器函数
       */
      setVisibleFunc(func: Function): void;

      /**
       * 设置布局宽度
       * @param v 宽度值
       */
      setWidth(v: number): void;

      /**
       * 显示垂直滚动条
       */
      showVBar(): void;

      /**
       * 获取选中模型，getSelectionModel的缩写
       * @return {SelectionModel}
       */
      sm(): SelectionModel;

      /**
       * 展开或合并data对象
       * @param data 数据元素
       */
      toggle(data: Data): void;

      /**
       * 在当前值基础上增加垂直平移值(水平无效)
       * @param x 新增的水平平移值，此参数无效
       * @param y 新增的垂直平移值
       * @param anim 是否使用动画
       */
      translate(x: number, y: number, anim?: boolean): void;

      /**
       * 获取垂直平移值，没有参数时相当于getTranslateY
       * @return {number} 平移值
       */
      ty(): number;

      /**
       * 获取或设置垂直平移值，有参数时相当于setTranslateY
       * @param value 平移值
       */
      ty(value?: number): void;

      /**
       * 删除自身属性变化事件监听器，removePropertyChangeListener的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 立刻刷新组件
       */
      validate(): void;
    }

    /**
     * 分割组件，用于左右或上下分割两个组件
     * @param {Object|HTMLElement} leftView 左侧或顶部组件
     * @param {Object|HTMLElement} rightView 右侧或底部组件
     * @param {boolean} orientation 布局方式，v上下布局，h左右布局
     * @param {number} position 分割条位置，0-1之间表示百分比，大于1表示绝对尺寸，正数指定左侧或顶部组件的尺寸，负数指定右侧或底部组件的尺寸
     * @constructor
     */
    export class SplitView {
      constructor(
        leftView?: Object | HTMLElement,
        rightView?: Object | HTMLElement,
        orientation?: String | boolean,
        position?: number,
      );

      /**
       * 增加自身属性变化事件监听器
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.SplitView#mp mp}
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

      /**
       * 获取分割条背景色
       * @return {color}
       */
      getDividerBackground(): String;

      /**
       * 获取分割条DIV
       * @return {HTMLDivElement}
       */
      getDividerDiv(): HTMLDivElement;

      /**
       * 获取分割条宽度
       * @return {number}
       */
      getDividerSize(): number;

      /**
       * 获取分割条拖拽时的透明度，默认为0.5
       * @return {number}
       */
      getDragOpacity(): number;

      /**
       * 获取布局高度
       * @return {number}
       */
      getHeight(): number;

      /**
       * 获取左侧组件
       * @return {Object|HTMLElement}
       */
      getLeftView(): Object | HTMLElement;

      /**
       * 获取布局方式，v上下布局，h左右布局
       * @return {String}
       */
      getOrientation(): String;

      /**
       * 获取分割条位置，0-1之间表示百分比，大于1表示绝对尺寸，正数指定左侧或顶部组件的尺寸，负数指定右侧或底部组件的尺寸
       * @return {number}
       */
      getPosition(): number;

      /**
       * 获取右侧组件
       * @return {Object|HTMLElement}
       */
      getRightView(): Object | HTMLElement;

      /**
       * 获取toggle状态
       * @return {String}
       * <ul>
       * <li>normal代表中间分割状态</li>
       * <li>cl代表collapse left关闭左侧或顶部组件</li>
       * <li>cr代表collapse right关闭右侧或底部组件</li>
       * </ul>
       */
      getStatus(): String;

      /**
       * 获取分割条上的toggle图标
       * @return {String}
       */
      getToggleIcon(): String;

      /**
       * 获取组件的根层div
       * @return {HTMLDivElement}
       */
      getView(): HTMLDivElement;

      /**
       * 获取布局宽度
       * @return {number}
       */
      getWidth(): number;

      /**
       * 无效组件，并调用延时刷新
       * @param {number} delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.SplitView#iv iv}
       */
      invalidate(delay?: number): void;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return {boolean}
       */
      isDisabled(): boolean;

      /**
       * 获取是否允许拖拽分割条，默认为true
       * @return {boolean}
       */
      isDraggable(): boolean;

      /**
       * 获取分割点是否可通过点击直接展开和关闭，默认为true
       * @return {boolean}
       */
      isTogglable(): boolean;

      /**
       * 无效组件，并调用延时刷新，{@link widget.SplitView#invalidate invalidate}的缩写
       * @param {number} delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.SplitView#invalidate invalidate}
       */
      iv(delay?: number): void;

      /**
       * 增加自身属性变化事件监听器，{@link widget.SplitView#addPropertyChangeListener addPropertyChangeListener}的缩写
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       * @param {boolean} [ahead] 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.SplitView#addPropertyChangeListener addPropertyChangeListener}
       */
      mp(listener: Function, scope?: Object, ahead?: boolean): void;

      /**
       * 删除自身属性变化事件监听器
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除视图事件监听器
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param {boolean} value 是否禁用组件
       * @param {String} [iconUrl] 蒙板上显示的icon的路径
       */
      setDisabled(value: boolean, iconUrl: String): void;

      /**
       * 设置分割条背景色
       * @param {color} background
       */
      setDividerBackground(background: String): void;

      /**
       * 设置分割条宽度
       * @param {number} size
       */
      setDividerSize(size: number): void;

      /**
       * 设置是否允许拖拽分割条，默认为true
       * @param {boolean} draggable
       */
      setDraggable(draggable: boolean): void;

      /**
       * 设置分割条拖拽时的透明度，默认为0.5
       * @param {number} opacity
       */
      setDragOpacity(opacity: number): void;

      /**
       * 设置布局高度
       * @param {number} height
       */
      setHeight(height: number): void;

      /**
       * 设置左侧组件
       * @param {Object|HTMLElement} left
       */
      setLeftView(left: Object | HTMLElement): void;

      /**
       * 设置布局方式，v上下布局，h左右布局
       * @param {String} orientation
       */
      setOrientation(orientation: String): void;

      /**
       * 设置分割条位置，0-1之间表示百分比，大于1表示绝对尺寸，正数指定左侧或顶部组件的尺寸，负数指定右侧或底部组件的尺寸
       * @param {number} position
       */
      setPosition(position: number): void;

      /**
       * 设置右侧组件
       * @param {Object|HTMLElement} right
       */
      setRightView(right: Object | HTMLElement): void;

      /**
       * 设置toggle状态
       * @param {String} status
       * <ul>
       * <li>normal代表中间分割状态</li>
       * <li>cl代表collapse left关闭左侧或顶部组件</li>
       * <li>cr代表collapse right关闭右侧或底部组件</li>
       * </ul>
       */
      setStatus(status: String): void;

      /**
       * 设置分割点是否可通过点击直接展开和关闭，默认为true
       * @param {boolean} togglable
       */
      setTogglable(togglable: boolean): void;

      /**
       * 设置分割条上的toggle图标
       * @param {String} icon
       */
      setToggleIcon(icon: String): void;

      /**
       * 设置布局宽度
       * @param {number} width
       */
      setWidth(width: number): void;

      /**
       * 删除自身属性变化事件监听器，{@link widget.SplitView#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param {Function} listener 监听器函数
       * @param {Object} [scope] 监听器函数域
       * @see {@link widget.SplitView#removePropertyChangeListener removePropertyChangeListener}
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 立刻刷新组件
       */
      validate(): void;
    }

    /**
     * 表格组件，以表格的方式呈现DataModel中Data的属性
     * @param dataModel 绑定的数据模型
     * @constructor
     */
    export class TableView {
      constructor(dataModel?: DataModel);
      /**
       * 增加底层Painter
       * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，底层Painter绘制在组件最下面
       * @param painter 参数为Function时，为Painter类，参数为Object时，为交互器基类，会调用Object中draw方法
       * @example //Painter示例：
       * graphView.addBottomPainter(function(g){
       *     g.fillStyle = '#000000';
       *     g.fillRect(0, 0, 100, 100);
       * });
       */
      addBottomPainter(painter: Object | Function): void;

      /**
       * 增加顶层Painter
       * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，顶层Painter绘制在组件最上面
       * @param painter 参数为Function时，为Painter类，参数为Object时，为交互器基类，会调用Object中draw方法
       * @example //Painter示例：
       * graphView.addTopPainter(function(g){
       *     g.fillStyle = '#000000';
       *     g.fillRect(0, 0, 100, 100);
       * });
       */
      addTopPainter(painter: Object | Function): void;

      /**
       * 将视图插入到 dom 中
       * @param parentNode 父DOM
       */
      addToDOM(parentNode?: HTMLDivElement): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: boolean,
      ): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: boolean,
      ): void;

      /**
       * 传入即将设置的水平平移值，返回最终设置值，可重载限制水平平移范围
       * @param value 原始水平平移值
       * @return {number} 新的水平平移值
       */
      adjustTranslateX(value: number): number;

      /**
       * 传入即将设置的垂直平移值，返回最终设置值，可重载限制垂直平移范围
       * @param value 原始垂直平移值
       * @return {number} 新的垂直平移值
       */
      adjustTranslateY(value: number): number;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      /**
       * 获取数据模型，没有参数时相当于getDataModel的缩写
       * @return {DataModel} dataModel
       */
      dm(): DataModel;

      /**
       * 设置数据模型，有参数时相当于setDataModel的缩写
       * @param dataModel
       */
      dm(dataModel: DataModel): void;

      /**
       * 以json的方式配置表格中的列(新增)
       * @param columns json列
       * @example //示例：
       * tableView.addColumns([{
       * 	name: 'id',
       * 	displayName: '序号'
       * },
       * {
       * 	name: 'background',
       * 	accessType: 'style'
       * }
       * ]);
       */
      addColumns(columns: object[]): void;

      /**
       * 绘制单元格，可重载自定义单元格渲染，如果返回值为HTML元素，则使用HTML元素当作Renderer
       * @param g 画笔对象
       * @param data 数据元素
       * @param selected 数据元素是否选中
       * @param column 列信息
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param width 绘制的宽度
       * @param height 绘制的高度
       * @return {HTMLElement} HTML元素
       */
      drawCell(
        g: CanvasRenderingContext2D,
        data: Data,
        selected: boolean,
        column: Property,
        x: number,
        y: number,
        width: number,
        height: number,
      ): void;

      /**
       * 绘制check列单元格，可重载自定义
       * @param g 画笔对象
       * @param data 数据元素
       * @param selected 数据元素是否选中
       * @param column 列信息
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param width 绘制的宽度
       * @param height 绘制的高度
       * @param view 当前的表格组件
       */
      drawCheckColumnCell(
        g: CanvasRenderingContext2D,
        data: Data,
        selected: boolean,
        column: Property,
        x: number,
        y: number,
        width: number,
        height: number,
        view: TableView,
      ): void;

      /**
       * 返回data对象对应的check图标，可重载自定义check图标，该函数在checkMode模式下有效
       * @param data 数据元素
       * @return {String}
       */
      getCheckIcon(data: Data): string;

      /**
       * 获取鼠标下的列
       * @param pointOrEvent 鼠标或Touch事件
       * @return {Column}
       */
      getColumnAt(pointOrEvent: Object): Column | null;

      /**
       * 获取列线颜色
       * @return {string}
       */
      getColumnLineColor(): string;

      /**
       * 获取列模型， 列模型用于存储Column列对象信息
       * @return {DataModel}
       */
      getColumnModel(): DataModel;

      /**
       * 默认返回sortFunc函数，当sortColumn不为空时将返回其对应的排序函数
       * @return {Function}
       */
      getCurrentSortFunc(): Function;

      /**
       * 传入逻辑坐标点或者交互event事件参数，返回当前点下的数据元素
       * @param pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
       * @return {Data} 点下的数据元素
       */
      getDataAt(pointOrEvent: Object): Data | null;

      /**
       * 获取绑定的数据模型
       * @return {DataModel} 数据模型
       */
      getDataModel(): DataModel;

      /**
       * 获取当前可见区域的结束行索引
       * @return {Number}
       */
      getEndRowIndex(): number;

      /**
       * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态
       * 此方法获取focus数据元素
       * @return {Data}
       */
      getFocusData(): Data;

      /**
       * 获取布局高度
       * @return {number}
       */
      getHeight(): number;

      /**
       * 获取data对象显示的文字，默认返回data.toLabel()，可重载自定义
       * @param data 数据元素
       * @return {String}
       */
      getLabel(data: Data): String;

      /**
       * 获取data对象的文本颜色，可重载自定义
       * @param data 数据元素
       * @return {color}
       */
      getLabelColor(data: Data): String;

      /**
       * 获取data对象的文本字体，可重载自定义
       * @param data 数据元素
       * @return {String}
       */
      getLabelFont(data: Data): String;

      /**
       * 获取选中文本的颜色
       * @return {color}
       */
      getLabelSelectColor(): String;

      /**
       * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
       * @param event 事件对象
       * @return {Object}
       */
      getLogicalPoint(event: Event): Object;

      /**
       * 获取当前显示的Data对象集合，该集合已被排序和过滤
       * @return {List}
       */
      getRowDatas(): List;

      /**
       * 获取行高
       * @return {number}
       */
      getRowHeight(): number;

      /**
       * 获取data对象所在的行索引
       * @param data 数据元素
       * @return {number}
       */
      getRowIndex(data: Data): number;

      /**
       * 获取行线颜色
       * @return {color}
       */
      getRowLineColor(): String;

      /**
       * 返回当前可见行总行数
       * @return {number}
       */
      getRowSize(): number;

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
       * 获取选择过滤器函数
       * @return {Function}
       */
      getSelectableFunc(): Function;

      /**
       * 获取行选中背景颜色
       * @return {color}
       */
      getSelectBackground(): String;

      /**
       * 获取选中模型
       * @return {SelectionModel}
       */
      getSelectionModel(): SelectionModel;

      /**
       * 获取排序函数
       * @return {Function}
       */
      getSortFunc(): Function;

      /**
       * 获取当前可见区域的起始行索引
       * @return {number}
       */
      getStartRowIndex(): number;

      /**
       * 获取当前排序列
       * @return {Column}
       */
      getSortColumn(): Column;

      /**
       * 获取排序方式
       * none:不允许排序
       * bistate:点击表头时正序和倒序两种方式之间切换
       * tristate:点击表头时正序、倒序、不排序三种方式之间切换
       * @return {String}
       */
      getSortMode(): string;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @param pointOrEvent 鼠标或Touch事件对象
       * @return {String} toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(pointOrEvent: Object): String;

      /**
       * 绘制行背景色，默认仅在选中该行时填充选中背景色，可重载自定义
       * @param g 画笔对象
       * @param data 数据元素
       * @param selected 数据元素是否选中
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param width 绘制的宽度
       * @param height 绘制的高度
       */
      drawRowBackground(
        g: CanvasRenderingContext2D,
        data: Data,
        selected: boolean,
        x: number,
        y: number,
        width: number,
        height: number,
      ): void;

      /**
       * 获取单元格中要显示的内容
       * @param data 数据元素
       * @param column 列
       * @return {Object}
       */
      getValue(data: Data, column: Column): Object;

      /**
       * 获取组件的根层div
       * @return {HTMLDivElement}
       */
      getView(): HTMLDivElement;

      /**
       * 获取组件中可见区域的逻辑尺寸
       * @return {Object}
       */
      getViewRect(): Object;

      /**
       * 获取布局宽度
       * @return {number}
       */
      getWidth(): number;

      /**
       * 获取可见过滤器函数
       * @return {Function}
       */
      getVisibleFunc(): Function;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       */
      invalidate(delay?: number): void;

      /**
       * 无效数据元素
       * @param {Data} data 要无效的数据元素
       */
      invalidateData(data: Data): void;

      /**
       * 无效模型，最彻底的刷新方式
       */
      invalidateModel(): void;

      /**
       * 是否自动隐藏滚动条
       * @return {boolean}
       */
      isAutoHideScrollBar(): boolean;

      /**
       * 选中数据元素时，是否自动平移组件以确保该元素出现在可见区域内
       * @return {boolean}
       */
      isAutoMakeVisible(): boolean;

      /**
       * 是否启用批量编辑
       * @return {boolean}
       */
      isBatchEditable(): boolean;

      /**
       * 判断单元格是否可编辑
       * @param data 数据元素
       * @param column 列
       * @return {boolean}
       */
      isCellEditable(data: Data, column: Column): boolean;

      /**
       * 是否是check模式
       * @return {boolean}
       */
      isCheckMode(): boolean;

      /**
       * 获取列线是否可见，默认为true
       * @return {boolean}
       */
      isColumnLineVisible(): boolean;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return {boolean}
       */
      isDisabled(): boolean;

      /**
       * 返回可否编辑的总开关，默认为false，每个Column列对象可再控制
       * @return {boolean}
       */
      isEditable(): boolean;

      /**
       * 获取行线是否可见，默认为true
       * @return {boolean}
       */
      isRowLineVisible(): boolean;

      /**
       * 判断data对象是否可被选中
       * @param data 数据元素
       * @return {boolean}
       */
      isSelectable(data: Data): boolean;

      /**
       * 判断data对象是否被选中
       * @param data 图元
       * @return {boolean}
       */
      isSelected(data: Data): boolean;

      /**
       * 根据id判断data对象是否被选中
       * @param id 数据元素id
       * @return {boolean}
       */
      isSelectedById(id: String | number): boolean;

      /**
       * 当前组件是否共享选中模型
       * @return {boolean}
       */
      isSelectionModelShared(): boolean;

      /**
       * 判断数据元素是否可见
       * @param data 数据元素
       * @return {boolean}
       */
      isVisible(data: Data): boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       */
      iv(delay?: number): void;

      /**
       * 无效模型，重新构造内部的rows数据，最彻底的刷新方式，invalidateModel的缩写
       */
      ivm(): void;

      /**
       * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标，getLogicalPoint的缩写
       * @param event 事件对象
       * @return {Object}
       */
      lp(event: Event): Object;

      /**
       * 平移组件以确保数据元素在可见区域内
       * @param data 数据元素
       */
      makeVisible(data: Data): void;

      /**
       * 增加自身属性变化事件监听器，addPropertyChangeListener的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      mp(listener: Function, scope?: Object, ahead?: boolean): void;

      /**
       * 数据元素被点击时回调，可重载做后续处理
       * @param data 被点击的数据元素
       * @param e 事件对象
       */
      onDataClicked(data: Data, e: Event): void;

      /**
       * 数据元素被双击时回调，可重载做后续处理
       * @param data 双击的数据元素
       * @param e 事件对象
       */
      onDataDoubleClicked(data: Data, e: Event): void;

      /**
       * 平移动画结束时回调，可重载做后续处理
       */
      onTranslateEnded(): void;

      /**
       * 重绘组件中所有行，仅次于invalidateModel的彻底刷新方式
       */
      redraw(): void;

      /**
       * 删除底层Painter
       * @param painter Painter类
       */
      removeBottomPainter(painter: Object | Function): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除所有选中的图元
       */
      removeSelection(): void;

      /**
       * 删除顶层Painter
       * @param painter Painter类
       */
      removeTopPainter(painter: Object | Function): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 平移(滚动)组件至指定的行号
       * @param index 行号
       */
      scrollToIndex(index: number): void;

      /**
       * 选中所有数据元素
       */
      selectAll(): void;

      /**
       * 设置是否自动隐藏滚动条
       * @param v
       */
      setAutoHideScrollBar(v: boolean): void;

      /**
       * 设置当选中数据元素，是否自动平移(滚动)组件以确保该数据元素出现在可见区域内
       * @param v
       */
      setAutoMakeVisible(v: boolean): void;

      /**
       * 设置是否启用批量编辑
       * @param v
       */
      setBatchEditable(v: boolean): void;

      /**
       * 设置是否为check模式，默认为false，为true时自动插入checkColumn列
       * @param v
       */
      setCheckMode(v: boolean): void;

      /**
       * 设置列线颜色
       * @paramcolor
       */
      setColumnLineColor(color: string): void;

      /**
       * 设置列线是否可见
       * @paramv
       */
      setColumnLineVisible(v: boolean): void;

      /**
       * 以json的方式配置表格中的列
       * @param columns json列
       * @example //示例：
       * tableView.setColumns([{
       * 	name: 'id',
       * 	displayName: '序号'
       * },
       * {
       * 	name: 'background',
       * 	accessType: 'style'
       * }
       * ]);
       */
      setColumns(v: object[]): void;

      /**
       * 设置绑定的数据模型
       * @param dataModel 数据模型
       */
      setDataModel(dataModel: DataModel): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param {boolean} value 是否禁用组件
       * @param {String} [iconUrl] 蒙板上显示的icon的路径
       */
      setDisabled(value: boolean, iconUrl: String): void;

      /**
       * 设置可否编辑的总开关，默认为false，每个Column列对象可再控制
       * @parameditable
       */
      setEditable(editable: boolean): void;

      /**
       * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
       * 此方法设置focus的数据元素
       * @param data 数据元素
       */
      setFocusData(data: Data): void;

      /**
       * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
       * 此方法设置focus的数据元素
       * @param id 数据元素的id
       */
      setFocusDataById(id: String | number): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: number): void;

      /**
       * 设置行label文字颜色
       * @param v
       */
      setLabelColor(v: String): void;

      /**
       * 设置行label文字字体
       * @param v
       */
      setLabelFont(v: String): void;

      /**
       * 设置行label文字选中颜色
       * @param v
       */
      setLabelSelectColor(v: String): void;

      /**
       * 设置行高
       * @param v
       */
      setRowHeight(v: number): void;

      /**
       * 设置行线颜色
       * @param color
       */
      setRowLineColor(color: String): void;

      /**
       * 设置行线是否可见
       * @param v
       */
      setRowLineVisible(v: boolean): void;

      /**
       * 设置滚动条颜色
       * @param color 颜色值
       */
      setScrollBarColor(color: String): void;

      /**
       * 设置滚动条宽度
       * @param size 宽度值
       */
      setScrollBarSize(size: number): void;

      /**
       * 设置选择过滤器函数
       * @param func 过滤器函数
       */
      setSelectableFunc(func: Function): void;

      /**
       * 设置行选中背景颜色
       * @param color
       */
      setSelectBackground(color: String): void;

      /**
       * 设置组件是否共享选中模型
       * @param v
       */
      setSelectionModelShared(v: boolean): void;

      /**
       * 设置排序函数
       * @param func
       */
      setSortFunc(func: Function): void;

      /**
       * 设置排序列
       * @param {ht.Column} column
       */
      setSortColumn(column: Column): void;

      /**
       * 设置排序方式
       * @param {String} mode
       * none:不允许排序
       * bistate:点击表头时正序和倒序两种方式之间切换
       * tristate:点击表头时正序、倒序、不排序三种方式之间切换
       */
      setSortMode(mode: string): void;

      /**
       * 设置垂直平移值
       * @param x 水平平移值，此参数无效
       * @param y 垂直平移值
       * @param anim 是否使用动画
       */
      setTranslate(x: number, y: number, anim?: boolean): void;

      /**
       * 设置垂直平移值
       * @param v 垂直平移值
       */
      setTranslateY(v: number): void;

      /**
       * 设置水平平移值
       * @param v 垂直平移值
       */
      setTranslateX(v: number): void;

      /**
       * 设置可见过滤器
       * @param func 过滤器函数
       */
      setVisibleFunc(func: Function): void;

      /**
       * 设置布局宽度
       * @param v 宽度值
       */
      setWidth(v: number): void;

      /**
       * 获取选中模型，getSelectionModel的缩写
       * @return {SelectionModel}
       */
      sm(): SelectionModel;

      /**
       * 在当前值基础上增加垂直平移值(水平无效)
       * @param x 新增的水平平移值，此参数无效
       * @param y 新增的垂直平移值
       * @param anim 是否使用动画
       */
      translate(x: number, y: number, anim?: boolean): void;

      /**
       * 删除自身属性变化事件监听器，removePropertyChangeListener的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 立刻刷新组件
       */
      validate(): void;
    }

    /**
     * 树表组件，以树形和表格的方式组合呈现DataModel中Data的父子及属性信息
     * @param dataModel 绑定的数据模型
     * @constructor
     */
    export class TreeTableView {
      constructor(dataModel?: DataModel);

      /**
       * 增加底层Painter
       * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，底层Painter绘制在组件最下面
       * @param painter 参数为Function时，为Painter类，参数为Object时，为交互器基类，会调用Object中draw方法
       * @example //Painter示例：
       * graphView.addBottomPainter(function(g){
       *     g.fillStyle = '#000000';
       *     g.fillRect(0, 0, 100, 100);
       * });
       */
      addBottomPainter(painter: Object | Function): void;

      /**
       * 以json的方式配置树表中的列(新增)
       * @param columns json列
       * @example //示例：
       * treeTableView.addColumns([{
       * 	name: 'id',
       * 	displayName: '序号'
       * },
       * {
       * 	name: 'background',
       * 	accessType: 'style'
       * }
       * ]);
       */
      addColumns(columns: object[]): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: boolean,
      ): void;

      /**
       * 增加顶层Painter
       * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，顶层Painter绘制在组件最上面
       * @param painter 参数为Function时，为Painter类，参数为Object时，为交互器基类，会调用Object中draw方法
       * @example //Painter示例：
       * graphView.addTopPainter(function(g){
       *     g.fillStyle = '#000000';
       *     g.fillRect(0, 0, 100, 100);
       * });
       */
      addTopPainter(painter: Object | Function): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
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

      /**
       * 传入即将设置的水平平移值，返回最终设置值，可重载限制水平平移范围
       * @param value 原始水平平移值
       * @return {number} 新的水平平移值
       */
      adjustTranslateX(value: number): number;

      /**
       * 传入即将设置的垂直平移值，返回最终设置值，可重载限制垂直平移范围
       * @param value 原始垂直平移值
       * @return {number} 新的垂直平移值
       */
      adjustTranslateY(value: number): number;

      /**
       * 合并data对象
       * @param data 数据元素
       */
      collapse(data: Data): void;

      /**
       * 合并所有对象
       */
      collapseAll(): void;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      /**
       * 获取数据模型，没有参数时相当于getDataModel的缩写
       * @return {DataModel} dataModel
       */
      dm(): DataModel;

      /**
       * 设置数据模型，有参数时相当于setDataModel的缩写
       * @param dataModel
       */
      dm(dataModel: DataModel): void;

      /**
       * 绘制单元格，可重载自定义单元格渲染，如果返回值为HTML元素，则使用HTML元素当作Renderer
       * @param g 画笔对象
       * @param data 数据元素
       * @param selected 数据元素是否选中
       * @param column 列信息
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param width 绘制的宽度
       * @param height 绘制的高度
       * @return {HTMLElement} HTML元素
       */
      drawCell(
        g: CanvasRenderingContext2D,
        data: Data,
        selected: boolean,
        column: Property,
        x: number,
        y: number,
        width: number,
        height: number,
      ): void;

      /**
       * 绘制图标，可重载自定义
       * @param g 画笔对象
       * @param data 数据元素
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param width 绘制的宽度
       * @param height 绘制的高度
       */
      drawIcon(
        g: CanvasRenderingContext2D,
        data: Data,
        x: number,
        y: number,
        width: number,
        height: number,
      ): void;

      /**
       * 绘制文本，可重载自定义，label一般绘制在最后因此没有width参数限制
       * @param g 画笔对象
       * @param data 数据元素
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param height 绘制的高度
       */
      drawLabel(
        g: CanvasRenderingContext2D,
        data: Data,
        x: number,
        y: number,
        height: number,
      ): void;

      /**
       * 绘制行背景色，默认仅在选中该行时填充选中背景色，可重载自定义
       * @param g 画笔对象
       * @param data 数据元素
       * @param selected 数据元素是否选中
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param width 绘制的宽度
       * @param height 绘制的高度
       */
      drawRowBackground(
        g: CanvasRenderingContext2D,
        data: Data,
        selected: boolean,
        x: number,
        y: number,
        width: number,
        height: number,
      ): void;

      /**
       * 展开data对象
       * @param data 数据元素
       */
      expand(data: Data): void;

      /**
       * 展开所有对象
       */
      expandAll(): void;

      /**
       * 获取数据元素icon的背景色，可重载自定义
       * @param data 数据元素
       * @return {color} 颜色值，默认返回data.s('body.color')
       */
      getBodyColor(data: Data): String;

      /**
       * 获取数据元素icon的边框色，可重载自定义
       * @param data 数据元素
       * @return {color} 颜色值，默认返回data.s('border.color')
       */
      getBorderColor(data: Data): String;

      /**
       * 返回数据元素对应的check图标，可重载自定义check图标，该函数在checkMode模式下有效
       * @param data 数据元素
       * @return {String}
       */
      getCheckIcon(data: Data): String;

      /**
       * 获取check模式
       * null：默认值，不启用check选择模式
       * default：check模式的默认选择方式，即单击选中或取消选中，只影响当前点击中的data对象
       * children：该check模式将同时影响点击中的data对象，以及其孩子对象
       * descendant：该check模式将同时影响点击中的data对象，以及其所有子孙对象
       * all：该check模式将同时影响点击中的data对象，以及其所有父辈和子孙对象
       * @return {String}
       */
      getCheckMode(): String;

      /**
       * 获取toggle的关闭图标
       * @return {String}
       */
      getCollapseIcon(): String;

      /**
       * 获取鼠标下的列
       * @param pointOrEvent 鼠标或Touch事件
       * @return {Column}
       */
      getColumnAt(pointOrEvent: Object): Column | null;

      /**
       * 获取列线颜色
       * @return {string}
       */
      getColumnLineColor(): string;

      /**
       * 获取列模型， 列模型用于存储Column列对象信息
       * @return {DataModel}
       */
      getColumnModel(): DataModel;

      /**
       * 默认返回sortFunc函数，当sortColumn不为空时将返回其对应的排序函数
       * @return {Function}
       */
      getCurrentSortFunc(): Function;

      /**
       * 传入逻辑坐标点或者交互event事件参数，返回当前点下的数据元素
       * @param pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
       * @return {Data} 点下的数据元素
       */
      getDataAt(pointOrEvent: Object): Data | null;

      /**
       * 获取绑定的数据模型
       * @return {DataModel} 数据模型
       */
      getDataModel(): DataModel;

      /**
       * 获取当前可见区域的结束行索引
       * @return {number}
       */
      getEndRowIndex(): number;

      /**
       * 获取toggle的展开图标
       * @return {String}
       */
      getExpandIcon(): String;

      /**
       * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态
       * 此方法获取focus数据元素
       * @return {Data}
       */
      getFocusData(): Data;

      /**
       * 获取布局高度
       * @return {number}
       */
      getHeight(): number;

      /**
       * 获取data对象对应的icon图标，可重载自定义
       * @param data 数据元素
       * @return {String}
       */
      getIcon(data: Data): String;

      /**
       * 返回data对象对应的图标宽度，默认如果有图标则以indent值为宽度，可重载自定义
       * @param data 数据元素
       * @return {number}
       */
      getIconWidth(data: Data): number;

      /**
       * 获取indent缩进，该值一般当作图标的宽度
       * @param data 数据元素
       * @return {number}
       */
      getIndent(data: Data): number;

      /**
       * 获取data对象显示的文字，默认返回data.toLabel()，可重载自定义
       * @param data 数据元素
       * @return {String}
       */
      getLabel(data: Data): String;

      /**
       * 获取data对象的文本颜色，可重载自定义
       * @param data 数据元素
       * @return {color}
       */
      getLabelColor(data: Data): String;

      /**
       * 获取data对象的文本字体，可重载自定义
       * @param data 数据元素
       * @return {String}
       */
      getLabelFont(data: Data): String;

      /**
       * 获取选中文本的颜色
       * @return {color}
       */
      getLabelSelectColor(): String;

      /**
       * 获取当前data的缩减层次，一般结合indent参数用于绘制
       * @param data 数据元素
       * @return {number}
       */
      getLevel(data: Data): number;

      /**
       * 获取延迟加载器
       * @return {Object}
       */
      getLoader(): Object;

      /**
       * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
       * @param event 事件对象
       * @return {Object}
       */
      getLogicalPoint(event: Event): Object;

      /**
       * 获取根节点，默认为空，从DataModel#getRoots()的对象开始展示
       * @return {Data}
       */
      getRootData(): Data;

      /**
       * 获取当前显示的Data对象集合，该集合已被排序和过滤
       * @return {List}
       */
      getRowDatas(): List;

      /**
       * 获取行高
       * @return {number}
       */
      getRowHeight(): number;

      /**
       * 获取data对象所在的行索引
       * @param data 数据元素
       * @return {number}
       */
      getRowIndex(data: Data): number;

      /**
       * 获取行线颜色
       * @return {color}
       */
      getRowLineColor(): String;

      /**
       * 返回当前可见行总行数
       * @return {number}
       */
      getRowSize(): number;

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
       * 获取选择过滤器函数
       * @return {Function}
       */
      getSelectableFunc(): Function;

      /**
       * 获取行选中背景颜色
       * @return {color}
       */
      getSelectBackground(): String;

      /**
       * 获取选中模型
       * @return {SelectionModel}
       */
      getSelectionModel(): SelectionModel;

      /**
       * 获取排序函数
       * @return {Function}
       */
      getSortFunc(): Function;

      /**
       * 获取当前排序列
       * @return {Column}
       */
      getSortColumn(): Column;

      /**
       * 获取排序方式
       * none:不允许排序
       * bistate:点击表头时正序和倒序两种方式之间切换
       * tristate:点击表头时正序、倒序、不排序三种方式之间切换
       * @return {String}
       */
      getSortMode(): string;

      /**
       * 获取当前可见区域的起始行索引
       * @return {number}
       */
      getStartRowIndex(): number;

      /**
       * 返回当前data对象对应的展开或合并图标，可重载自定义
       * @param data 数据元素
       * @return {String}
       */
      getToggleIcon(data: Data): String;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @param e 鼠标或Touch事件对象
       * @return {String} toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(e: Event): String;

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
       * 返回树表组件默认插入的树表列，该列显示父子关系的树层次结构
       * @return {Column}
       */
      getTreeColumn(): Column;

      /**
       * 获取单元格中要显示的内容
       * @param data 数据元素
       * @param column 列
       * @return {Object}
       */
      getValue(data: Data, column: Column): Object;

      /**
       * 获取组件的根层div
       * @return {HTMLDivElement}
       */
      getView(): HTMLDivElement;

      /**
       * 获取组件中可见区域的逻辑尺寸
       * @return {Object}
       */
      getViewRect(): Object;

      /**
       * 获取布局宽度
       * @return {number}
       */
      getWidth(): number;

      /**
       * 获取可见过滤器函数
       * @return {Function}
       */
      getVisibleFunc(): Function;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       */
      invalidate(delay?: number): void;

      /**
       * 无效数据元素
       * @param {Data} data 要无效的数据元素
       */
      invalidateData(data: Data): void;

      /**
       * 无效模型，最彻底的刷新方式
       */
      invalidateModel(): void;

      /**
       * 是否自动隐藏滚动条
       * @return {boolean}
       */
      isAutoHideScrollBar(): boolean;

      /**
       * 选中数据元素时，是否自动平移组件以确保该元素出现在可见区域内
       * @return {boolean}
       */
      isAutoMakeVisible(): boolean;

      /**
       * 是否启用批量编辑
       * @return {boolean}
       */
      isBatchEditable(): boolean;

      /**
       * 判断单元格是否可编辑
       * @param data 数据元素
       * @param column 列
       * @return {boolean}
       */
      isCellEditable(data: Data, column: Column): boolean;

      /**
       * 是否是check模式
       * @return {boolean}
       */
      isCheckMode(): boolean;

      /**
       * 判断是否允许对parent对象的孩子排序，默认返回true，可重载屏蔽孩子排序
       * @param parent 父元素
       * @return {boolean}
       */
      isChildrenSortable(parent: Data): boolean;

      /**
       * 获取列线是否可见，默认为true
       * @return {boolean}
       */
      isColumnLineVisible(): boolean;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return {boolean}
       */
      isDisabled(): boolean;

      /**
       * 返回可否编辑的总开关，默认为false，每个Column列对象可再控制
       * @return {boolean}
       */
      isEditable(): boolean;

      /**
       * 判断data对象是否展开
       * @param data 数据元素
       * @return {boolean}
       */
      isExpanded(data: Data): boolean;

      /**
       * 判断rootData节点是否可见
       * @return {boolean}
       */
      isRootVisible(): boolean;

      /**
       * 获取行线是否可见，默认为true
       * @return {boolean}
       */
      isRowLineVisible(): boolean;

      /**
       * 判断data对象是否可被选中
       * @param data 数据元素
       * @return {boolean}
       */
      isSelectable(data: Data): boolean;

      /**
       * 判断data对象是否被选中
       * @param data 图元
       * @return {boolean}
       */
      isSelected(data: Data): boolean;

      /**
       * 根据id判断data对象是否被选中
       * @param id 数据元素id
       * @return {boolean}
       */
      isSelectedById(id: String | number): boolean;

      /**
       * 当前组件是否共享选中模型
       * @return {boolean}
       */
      isSelectionModelShared(): boolean;

      /**
       * 判断数据元素是否可见
       * @param data 数据元素
       * @return {boolean}
       */
      isVisible(data: Data): boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       */
      iv(delay?: number): void;

      /**
       * 无效模型，重新构造内部的rows数据，最彻底的刷新方式，invalidateModel的缩写
       */
      ivm(): void;

      /**
       * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标，getLogicalPoint的缩写
       * @param event 事件对象
       * @return {Object}
       */
      lp(event: Event): Object;

      /**
       * 平移组件以确保数据元素在可见区域内
       * @param data 数据元素
       */
      makeVisible(data: Data): void;

      /**
       * 增加自身属性变化事件监听器，addPropertyChangeListener的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      mp(listener: Function, scope?: Object, ahead?: boolean): void;

      /**
       * 合并data对象时调用，可重载做后续处理
       * @param data 数据元素
       */
      onCollapsed(data: Data): void;

      /**
       * 列头被点击时调用，可重载做后续处理，如远程排序功能
       * @paramcolumn 列
       */
      onColumnClicked(column: Column): void;

      /**
       * 数据元素被点击时回调，可重载做后续处理
       * @param data 被点击的数据元素
       * @param e 事件对象
       */
      onDataClicked(data: Data, e: Event): void;

      /**
       * 数据元素被双击时回调，可重载做后续处理
       * @param data 双击的数据元素
       * @param e 事件对象
       */
      onDataDoubleClicked(data: Data, e: Event): void;

      /**
       * 展开data对象时调用，可重载做后续处理
       * @param data 数据元素
       */
      onExpanded(data: Data): void;

      /**
       * 重绘组件中所有行，仅次于invalidateModel的彻底刷新方式
       */
      redraw(): void;

      /**
       * 删除底层Painter
       * @param painter Painter类
       */
      removeBottomPainter(painter: Object | Function): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除所有选中的图元
       */
      removeSelection(): void;

      /**
       * 删除顶层Painter
       * @param painter Painter类
       */
      removeTopPainter(painter: Object | Function): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 平移(滚动)组件至指定的行号
       * @param index 行号
       */
      scrollToIndex(index: number): void;

      /**
       * 选中所有数据元素
       */
      selectAll(): void;

      /**
       * 设置是否自动隐藏滚动条
       * @param v
       */
      setAutoHideScrollBar(v: boolean): void;

      /**
       * 设置当选中数据元素，是否自动平移(滚动)组件以确保该数据元素出现在可见区域内
       * @param v
       */
      setAutoMakeVisible(v: boolean): void;

      /**
       * 设置是否启用批量编辑
       * @param v
       */
      setBatchEditable(v: boolean): void;

      /**
       * 设置check模式
       * @param v
       * null：默认值，不启用check选择模式
       * default：check模式的默认选择方式，即单击选中或取消选中，只影响当前点击中的data对象
       * children：该check模式将同时影响点击中的data对象，以及其孩子对象
       * descendant：该check模式将同时影响点击中的data对象，以及其所有子孙对象
       * all：该check模式将同时影响点击中的data对象，以及其所有父辈和子孙对象
       */
      setCheckMode(v: String): void;

      /**
       * 设置toggle的关闭图标
       * @param v icon
       */
      setCollapseIcon(v: String): void;

      /**
       * 设置列线颜色
       * @paramcolor
       */
      setColumnLineColor(color: string): void;

      /**
       * 设置列线是否可见
       * @paramv
       */
      setColumnLineVisible(v: boolean): void;

      /**
       * 以json的方式配置树表中的列
       * @param columns json列
       * @example //示例：
       * treeTableView.setColumns([{
       * 	name: 'id',
       * 	displayName: '序号'
       * },
       * {
       * 	name: 'background',
       * 	accessType: 'style'
       * }
       * ]);
       */
      setColumns(v: object[]): void;

      /**
       * 设置绑定的数据模型
       * @param dataModel 数据模型
       */
      setDataModel(dataModel: DataModel): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: boolean, iconUrl: String): void;

      /**
       * 设置可否编辑的总开关，默认为false，每个Column列对象可再控制
       * @parameditable
       */
      setEditable(editable: boolean): void;

      /**
       * 设置toggle的展开图标
       * @param v icon
       */
      setExpandIcon(v: String): void;

      /**
       * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
       * 此方法设置focus的数据元素
       * @param data 数据元素
       */
      setFocusData(data: Data): void;

      /**
       * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
       * 此方法设置focus的数据元素
       * @param id 数据元素的id
       */
      setFocusDataById(id: String | number): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: number): void;

      /**
       * 设置indent缩进，该值一般当作图标的宽度
       * @param v
       */
      setIndent(v: number): void;

      /**
       * 设置行label文字颜色
       * @param v
       */
      setLabelColor(v: String): void;

      /**
       * 设置行label文字字体
       * @param v
       */
      setLabelFont(v: String): void;

      /**
       * 设置行label文字选中颜色
       * @param v
       */
      setLabelSelectColor(v: String): void;

      /**
       * 设置延迟加载器
       * @param v
       * @example //示例：
       * treeView.setLoader({
       * 	load: function(data) {
       * 		//展开此data时回调，可用于加载子节点
       * 	},
       * 	isLoaded: function(data) {
       * 		//返回此data的子结点是否已加载
       * 	}
       * });
       */
      setLoader(v: Object): void;

      /**
       * 指定根节点，默认为空，从DataModel#getRoots()的对象开始展示
       * @param v
       */
      setRootData(v: Data): void;

      /**
       * 设置根节点是否可见
       * @param v
       */
      setRootVisible(v: boolean): void;

      /**
       * 设置行高
       * @param v
       */
      setRowHeight(v: number): void;

      /**
       * 设置行线颜色
       * @param color
       */
      setRowLineColor(color: String): void;

      /**
       * 设置行线是否可见
       * @param v
       */
      setRowLineVisible(v: boolean): void;

      /**
       * 设置滚动条颜色
       * @param color 颜色值
       */
      setScrollBarColor(color: String): void;

      /**
       * 设置滚动条宽度
       * @param size 宽度值
       */
      setScrollBarSize(size: number): void;

      /**
       * 设置选择过滤器函数
       * @param func 过滤器函数
       */
      setSelectableFunc(func: Function): void;

      /**
       * 设置行选中背景颜色
       * @param color
       */
      setSelectBackground(color: String): void;

      /**
       * 设置组件是否共享选中模型
       * @param v
       */
      setSelectionModelShared(v: boolean): void;

      /**
       * 设置排序列
       * @param {ht.Column} column
       */
      setSortColumn(column: Column): void;

      /**
       * 设置排序函数
       * @param func
       */
      setSortFunc(func: Function): void;

      /**
       * 设置排序方式
       * @param {String} mode
       * none:不允许排序
       * bistate:点击表头时正序和倒序两种方式之间切换
       * tristate:点击表头时正序、倒序、不排序三种方式之间切换
       */
      setSortMode(mode: string): void;

      /**
       * 设置垂直平移值
       * @param x 水平平移值，此参数无效
       * @param y 垂直平移值
       * @param anim 是否使用动画
       */
      setTranslate(x: number, y: number, anim?: boolean): void;

      /**
       * 设置垂直平移值
       * @param v 垂直平移值
       */
      setTranslateY(v: number): void;

      /**
       * 设置水平平移值
       * @param v 垂直平移值
       */
      setTranslateX(v: number): void;

      /**
       * 设置可见过滤器
       * @param func 过滤器函数
       */
      setVisibleFunc(func: Function): void;

      /**
       * 设置布局宽度
       * @param v 宽度值
       */
      setWidth(v: number): void;

      /**
       * 获取选中模型，getSelectionModel的缩写
       * @return {SelectionModel}
       */
      sm(): SelectionModel;

      /**
       * 在当前值基础上增加垂直平移值(水平无效)
       * @param x 新增的水平平移值，此参数无效
       * @param y 新增的垂直平移值
       * @param anim 是否使用动画
       */
      translate(x: number, y: number, anim?: boolean): void;

      /**
       * 展开或合并data对象
       * @param data 数据元素
       */
      toggle(data: Data): void;

      /**
       * 删除自身属性变化事件监听器，removePropertyChangeListener的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 立刻刷新组件
       */
      validate(): void;
    }

    /**
     * 表头组件，常与TableView和TreeTableView结合呈现Column信息，并提供Column的排序、大小和位置变化等交互操作功能
     * @param tableView 表格组件
     * @constructor
     */
    export class TableHeader {
      constructor(tableView?: TableView | TreeTableView);

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: boolean,
      ): void;

      /**
       * 将视图插入到 dom 中
       * @param parentNode 父DOM
       */
      addToDOM(parentNode?: HTMLDivElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: boolean,
      ): void;

      /**
       * 绘制列头，可重载自定义
       * @param g 画笔对象
       * @param column 列信息
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param width 绘制的宽度
       * @param height 绘制的高度
       */
      drawColumn(
        g: CanvasRenderingContext2D,
        column: Column,
        x: number,
        y: number,
        width: number,
        height: number,
      ): void;

      /**
       * 返回data对象对应的check图标，可重载自定义check图标，该函数在checkMode模式下有效
       * @param data 数据元素
       * @return {String}
       */
      getCheckIcon(data: Data): string;

      /**
       * 获取列线颜色
       * @return {string}
       */
      getColumnLineColor(): string;

      /**
       * 获取布局高度
       * @return {number}
       */
      getHeight(): number;

      /**
       * 获取缩进，一般当作列头图标的宽度
       * @return {number}
       */
      getIndent(): number;

      /**
       * 获取移动列时可插入位置的提示颜色
       * @return {string}
       */
      getInsertColor(): string;

      /**
       * 获取列头文字信息，默认返回column.toLabel()，可重载自定义
       * @param column 数据元素
       * @return {String}
       */
      getLabel(column: Column): String;

      /**
       * 获取列头文字水平对齐方式，默认会考虑column.getAlign()值，可重载自定义
       * @param column
       * @return {String}
       */
      getLabelAlign(column: Column): string;

      /**
       * 获取列头文字颜色，默认会返回column.getColor()||tableHeader.getLabelColor();
       * @param column
       * @return {color}
       */
      getLabelColor(column: Column): String;

      /**
       * 获取列头文字字体，可重载自定义
       * @param column
       * @return {String}
       */
      getLabelFont(column: Column): String;

      /**
       * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
       * @param event 事件对象
       * @return {Object}
       */
      getLogicalPoint(event: Event): Object;

      /**
       * 获取移动列时的列头背景色
       * @return {string}
       */
      getMoveBackground(): string;

      /**
       * 获取表头列升序图标
       * @return {String}
       */
      getSortAscIcon(): string;

      /**
       * 获取表头列降序图标
       * @return {String}
       */
      getSortDescIcon(): string;

      /**
       * 获取绑定的表格组件
       * @return {TableView|TreeTableView}
       */
      getTableView(): TableView | TreeTableView;

      /**
       * 获取组件的根层div
       * @return {HTMLDivElement}
       */
      getView(): HTMLDivElement;

      /**
       * 获取布局宽度
       * @return {number}
       */
      getWidth(): number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       */
      invalidate(delay?: number): void;

      /**
       * 获取列线是否可见，默认为true
       * @return {boolean}
       */
      isColumnLineVisible(): boolean;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return {boolean}
       */
      isDisabled(): boolean;

      /**
       * 获取列顺序是否允许移动改变，默认为true
       * @return {boolean}
       */
      isMovable(): boolean;

      /**
       * 获取列宽是否允许改变，默认为true
       * @return {boolean}
       */
      isResizable(): boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       */
      iv(delay?: number): void;

      /**
       * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标，getLogicalPoint的缩写
       * @param event 事件对象
       * @return {Object}
       */
      lp(event: Event): Object;

      /**
       * 增加自身属性变化事件监听器，addPropertyChangeListener的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      mp(listener: Function, scope?: Object, ahead?: boolean): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 设置check图标
       * @param icon
       */
      setCheckIcon(icon: string): void;

      /**
       * 设置列线颜色
       * @paramcolor
       */
      setColumnLineColor(color: string): void;

      /**
       * 设置列线是否可见
       * @paramv
       */
      setColumnLineVisible(v: boolean): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: boolean, iconUrl: String): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: number): void;

      /**
       * 设置缩进，一般当作列头图标的宽度
       * @param v
       */
      setIndent(v: number): void;

      /**
       * 设置移动列时可插入位置的提示颜色
       * @param color
       */
      setInsertColor(color: string): void;

      /**
       * 设置列头文本颜色
       * @param v
       */
      setLabelColor(v: String): void;

      /**
       * 设置列头文本字体
       * @param v
       */
      setLabelFont(v: String): void;

      /**
       * 设置列顺序是否允许移动改变，默认为true
       * @param movable
       */
      setMovable(movable: boolean): void;

      /**
       * 设置移动列时的列头背景色
       * @param color
       * @return {string}
       */
      setMoveBackground(color: string): string;

      /**
       * 设置列宽是否允许改变，默认为true
       * @param v
       */
      setResizable(v: boolean): void;

      /**
       * 设置表头列升序图标
       * @param icon
       */
      setSortAscIcon(icon: string): void;

      /**
       * 设置表头列降序图标
       * @param icon
       */
      setSortDescIcon(icon: string): void;

      /**
       * 设置布局宽度
       * @param v 宽度值
       */
      setWidth(v: number): void;

      /**
       * 删除自身属性变化事件监听器，removePropertyChangeListener的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 立刻刷新组件
       */
      validate(): void;
    }

    /**
     * 表格面板，组合了TableHeader和TableView两个子组件
     * @param tableView 绑定的表格组件
     * @constructor
     */
    export class TablePane {
      constructor(tableView?: TableView);

      /**
       * 以json的方式配置表格中的列(新增)
       * @param columns json列
       * @example //示例：
       * treeTableView.addColumns([{
       * 	name: 'id',
       * 	displayName: '序号'
       * },
       * {
       * 	name: 'background',
       * 	accessType: 'style'
       * }
       * ]);
       */
      addColumns(columns: object[]): void;

      /**
       * 将视图插入到 dom 中
       * @param parentNode 父DOM
       */
      addToDOM(parentNode?: HTMLDivElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: boolean,
      ): void;

      /**
       * 获取列模型， 列模型用于存储Column列对象信息，内部调用tableView的getColumnModel方法
       * @return {DataModel}
       */
      getColumnModel(): DataModel;

      /**
       * 获取绑定的数据模型，内部调用tableView的getDataModel方法
       * @return {DataModel} 数据模型
       */
      getDataModel(): DataModel;

      /**
       * 获取布局高度
       * @return {number}
       */
      getHeight(): number;

      /**
       * 获取表头组件
       * @return {TableHeader}
       */
      getTableHeader(): TableHeader;

      /**
       * 获取表格组件
       * @return {TableView}
       */
      getTableView(): TableView;

      /**
       * 获取组件的根层div
       * @return {HTMLDivElement}
       */
      getView(): HTMLDivElement;

      /**
       * 获取布局宽度
       * @return {number}
       */
      getWidth(): number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       */
      invalidate(delay?: number): void;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return {boolean}
       */
      isDisabled(): boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       */
      iv(delay?: number): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 以json的方式配置表格中的列(设置)，内部调用tableView的setColumns方法
       * @param columns json列
       * @example //示例：
       * tablePane.setColumns([{
       * 	name: 'id',
       * 	displayName: '序号'
       * },
       * {
       * 	name: 'background',
       * 	accessType: 'style'
       * }
       * ]);
       */
      setColumns(v: object[]): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: boolean, iconUrl: String): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: number): void;

      /**
       * 设置布局宽度
       * @param v 宽度值
       */
      setWidth(v: number): void;

      /**
       * 立刻刷新组件
       */
      validate(): void;
    }

    /**
     * 树表面板，组合了TableHeader和TreeTableView两个子组件
     * @param treeTableView 绑定的表格组件
     * @constructor
     */
    export class TreeTablePane {
      constructor(treeTableView?: TreeTableView);

      /**
       * 以json的方式配置树表中的列(新增)，内部调用treeTableView的addColumns方法
       * @param columns json列
       * @example //示例：
       * treeTablePane.addColumns([{
       * 	name: 'id',
       * 	displayName: '序号'
       * },
       * {
       * 	name: 'background',
       * 	accessType: 'style'
       * }
       * ]);
       */
      addColumns(columns: object[]): void;

      /**
       * 将视图插入到 dom 中
       * @param parentNode 父DOM
       */
      addToDOM(parentNode?: HTMLDivElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: boolean,
      ): void;

      /**
       * 获取列模型， 列模型用于存储Column列对象信息，内部调用treeTableView的getColumnModel方法
       * @return {DataModel}
       */
      getColumnModel(): DataModel;

      /**
       * 获取绑定的数据模型，内部调用treeTableView的getDataModel方法
       * @return {DataModel} 数据模型
       */
      getDataModel(): DataModel;

      /**
       * 获取布局高度
       * @return {number}
       */
      getHeight(): number;

      /**
       * 获取表头组件
       * @return {TableHeader}
       */
      getTableHeader(): TableHeader;

      /**
       * 获取表格组件
       * @return {TableView}
       */
      getTableView(): TableView;

      /**
       * 获取组件的根层div
       * @return {HTMLDivElement}
       */
      getView(): HTMLDivElement;

      /**
       * 获取布局宽度
       * @return {number}
       */
      getWidth(): number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       */
      invalidate(delay?: number): void;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return {boolean}
       */
      isDisabled(): boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       */
      iv(delay?: number): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 以json的方式配置树表中的列(设置)，内部调用treeTableView的setColumns方法
       * @param columns json列
       * @example //示例：
       * treeTablePane.setColumns([{
       * 	name: 'id',
       * 	displayName: '序号'
       * },
       * {
       * 	name: 'background',
       * 	accessType: 'style'
       * }
       * ]);
       */
      setColumns(v: object[]): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: boolean, iconUrl: String): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: number): void;

      /**
       * 设置布局宽度
       * @param v 宽度值
       */
      setWidth(v: number): void;

      /**
       * 立刻刷新组件
       */
      validate(): void;
    }

    /**
     * 属性组件，用于显示Data类型对象属性，以分组、排序等方式展示属性
     * @param dataModel 绑定的数据模型
     * @constructor
     */
    export class PropertyView {
      constructor(dataModel?: DataModel);
      /**
       * 增加底层Painter
       * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，底层Painter绘制在组件最下面
       * @param painter 参数为Function时，为Painter类，参数为Object时，为交互器基类，会调用Object中draw方法
       * @example //Painter示例：
       * graphView.addBottomPainter(function(g){
       *     g.fillStyle = '#000000';
       *     g.fillRect(0, 0, 100, 100);
       * });
       */
      addBottomPainter(painter: Object | Function): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: boolean,
      ): void;

      /**
       * 增加顶层Painter
       * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，顶层Painter绘制在组件最上面
       * @param painter 参数为Function时，为Painter类，参数为Object时，为交互器基类，会调用Object中draw方法
       * @example //Painter示例：
       * graphView.addTopPainter(function(g){
       *     g.fillStyle = '#000000';
       *     g.fillRect(0, 0, 100, 100);
       * });
       */
      addTopPainter(painter: Object | Function): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
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

      /**
       * 以json的方式配置属性
       * @param properties json属性
       */
      addProperties(properties: object[]): void;

      /**
       * 传入即将设置的水平平移值，返回最终设置值，可重载限制水平平移范围
       * @param value 原始水平平移值
       * @return {number} 新的水平平移值
       */
      adjustTranslateX(value: number): number;

      /**
       * 传入即将设置的垂直平移值，返回最终设置值，可重载限制垂直平移范围
       * @param value 原始垂直平移值
       * @return {number} 新的垂直平移值
       */
      adjustTranslateY(value: number): number;

      /**
       * 合并分组
       * @param categoryName 分组名
       */
      collapse(categoryName: string): void;

      /**
       * 合并所有分组
       */
      collapseAll(): void;

      /**
       * 展开分组名
       * @param categoryName 分组名
       */
      expand(categoryName: string): void;

      /**
       * 展开所有分组名
       */
      expandAll(): void;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      /**
       * 获取数据模型，没有参数时相当于getDataModel的缩写
       * @return {DataModel} dataModel
       */
      dm(): DataModel;

      /**
       * 设置数据模型，有参数时相当于setDataModel的缩写
       * @param dataModel
       */
      dm(dataModel: DataModel): void;

      /**
       * 绘制分组名，可重载自定义
       * @param g 画笔对象
       * @param name 分组名称
       * @param rowIndex 分组名所在的行索引
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param width 绘制的宽度
       * @param height 绘制的高度
       */
      drawCategoryName(
        g: CanvasRenderingContext2D,
        name: string,
        rowIndex: number,
        x: number,
        y: number,
        w: number,
        h: number,
      ): void;

      /**
       * 绘制属性名，可重载自定义
       * @param g 画笔对象
       * @param property 属性类
       * @param rowIndex 属性名所在的行索引
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param width 绘制的宽度
       * @param height 绘制的高度
       */
      drawPropertyName(
        g: CanvasRenderingContext2D,
        property: Property,
        rowIndex: number,
        x: number,
        y: number,
        w: number,
        h: number,
      ): void;

      /**
       * 绘制属性值，可重载自定义
       * @param g 画笔对象
       * @param property 属性类
       * @param value 属性值
       * @param rowIndex 属性值所在的行索引
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param width 绘制的宽度
       * @param height 绘制的高度
       * @param data 数据元素
       */
      drawPropertyValue(
        g: CanvasRenderingContext2D,
        property: Property,
        value: any,
        rowIndex: number,
        x: number,
        y: number,
        w: number,
        h: number,
        data: Data,
      ): void;

      /**
       * 获取边框和分组行的背景颜色
       * @return {color}
       */
      getBackground(): string;

      /**
       * 返回分组文本颜色，可重载自定义
       * @param categoryName 分组名
       * @return {color}
       */
      getCategoryColo(categoryName: string): string;

      /**
       * 返回分组文本字体，可重载自定义
       * @param categoryName 分组名
       * @return {String}
       */
      getCategoryFont(categoryName: string): string;

      /**
       * 获取toggle的关闭图标
       * @return {String}
       */
      getCollapseIcon(): String;

      /**
       * 获取列线颜色
       * @return {string}
       */
      getColumnLineColor(): string;

      /**
       * 获取列线位置比例，默认值0.5，允许范围为0~1
       * @return {number}
       */
      getColumnPosition(): number;

      /**
       * 获取当前显示对象
       * @return {Data}
       */
      getCurrentData(): Data;

      /**
       * 获取绑定的数据模型
       * @return {DataModel} 数据模型
       */
      getDataModel(): DataModel;

      /**
       * 获取toggle的展开图标
       * @return {String}
       */
      getExpandIcon(): String;

      /**
       * 获取布局高度
       * @return {number}
       */
      getHeight(): number;

      /**
       * 获取左侧缩进，左侧空间用于绘制分组toggle图标，以及属性提示icon图标
       * @param data 数据元素
       * @return {number}
       */
      getIndent(data: Data): number;

      /**
       * 获取data对象的文本颜色，可重载自定义
       * @param data 数据元素
       * @return {color}
       */
      getLabelColor(data: Data): String;

      /**
       * 获取data对象的文本字体，可重载自定义
       * @param data 数据元素
       * @return {String}
       */
      getLabelFont(data: Data): String;

      /**
       * 获取选中文本的颜色
       * @return {color}
       */
      getLabelSelectColor(): String;

      /**
       * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
       * @param event 事件对象
       * @return {Object}
       */
      getLogicalPoint(event: Event): Object;

      /**
       * 返回event事件所在的行的属性信息
       * @param event 事件对象
       * @return {Property}
       */
      getPropertyAt(event: Event): Property;

      /**
       * 返回属性名文本颜色，可重载自定义
       * @param property 属性对象
       * @param rowIndex 行索引
       * @return {string}
       */
      getPropertyColor(property: Property, rowIndex: number): string;

      /**
       * 返回属性名文本字体，可重载自定义
       * @param property 属性对象
       * @param rowIndex 行索引
       * @return {string}
       */
      getPropertyFont(property: Property, rowIndex: number): string;

      /**
       * 获取propertyModel属性，可增删Property属性对象
       * @return {DataModel}
       */
      getPropertyModel(): DataModel;

      /**
       * 返回显示在左列的属性名，可重载自定义
       * @param property 属性对象
       * @return {string}
       */
      getPropertyName(property: Property): string;

      /**
       * 返回要显示的原始未过滤排序的属性集合，默认返回propertyModel.getRoots()，可重载自定义
       * @return {List}
       */
      getRawProperties(): List;

      /**
       * 获取行高
       * @return {number}
       */
      getRowHeight(): number;

      /**
       * 获取event事件所在的行索引
       * @param pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
       * @return {number}
       */
      getRowIndexAt(pointOrEvent: Object): number;

      /**
       * 返回当前显示的所有行信息的集合，集合元素为string类型代表分组名，{data:d,property:p}结构对象代表属性信息
       * @return {List}
       */
      getRows(): List;

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
       * 获取行选中背景颜色
       * @return {color}
       */
      getSelectBackground(): String;

      /**
       * 获取当前选中行索引
       * @return {number}
       */
      getSelectRowIndex(): number;

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
       * 获取排序函数
       * @return {Function}
       */
      getSortFunc(): Function;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @param e 鼠标或Touch事件对象
       * @return {String} toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(e: Event): String;

      /**
       * 获取行线颜色
       * @return {color}
       */
      getRowLineColor(): String;

      /**
       * 获取组件的根层div
       * @return {HTMLDivElement}
       */
      getView(): HTMLDivElement;

      /**
       * 获取可见过滤器函数
       * @return {Function}
       */
      getVisibleFunc(): Function;

      /**
       * 获取布局宽度
       * @return {number}
       */
      getWidth(): number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       */
      invalidate(delay?: number): void;

      /**
       * 无效模型，最彻底的刷新方式
       */
      invalidateModel(): void;

      /**
       * 是否自动隐藏滚动条
       * @return {boolean}
       */
      isAutoHideScrollBar(): boolean;

      /**
       * 是否启用批量编辑
       * @return {boolean}
       */
      isBatchEditable(): boolean;

      /**
       * 是否分组显示，默认为true，为false则忽略Property的categoryName属性
       * @return {boolean}
       */
      isCategorizable(): boolean;

      /**
       * 获取列线是否可见，默认为true
       * @return {boolean}
       */
      isColumnLineVisible(): boolean;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return {boolean}
       */
      isDisabled(): boolean;

      /**
       * 返回可否编辑的总开关，默认为false，每个Column列对象可再控制
       * @return {boolean}
       */
      isEditable(): boolean;

      /**
       * 判断data对象是否展开
       * @param categoryName 分组名
       * @return {boolean}
       */
      isExpanded(categoryName: string): boolean;

      /**
       * 判断属性是否可编辑，可重载自定义
       * @param property 属性对象
       * @return {boolean}
       */
      isPropertyEditable(property: Property): boolean;

      /**
       * 获取行线是否可见，默认为true
       * @return {boolean}
       */
      isRowLineVisible(): boolean;

      /**
       * 判断data对象是否可被选中
       * @param data 数据元素
       * @return {boolean}
       */
      isSelectable(data: Data): boolean;

      /**
       * 判断data对象是否被选中
       * @param data 图元
       * @return {boolean}
       */
      isSelected(data: Data): boolean;

      /**
       * 根据id判断data对象是否被选中
       * @param id 数据元素id
       * @return {boolean}
       */
      isSelectedById(id: String | number): boolean;

      /**
       * 当前组件是否共享选中模型
       * @return {boolean}
       */
      isSelectionModelShared(): boolean;

      /**
       * 判断数据元素是否可见
       * @param data 数据元素
       * @return {boolean}
       */
      isVisible(data: Data): boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       */
      iv(delay?: number): void;

      /**
       * 无效模型，重新构造内部的rows数据，最彻底的刷新方式，invalidateModel的缩写
       */
      ivm(): void;

      /**
       * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标，getLogicalPoint的缩写
       * @param event 事件对象
       * @return {Object}
       */
      lp(event: Event): Object;

      mp(listener: Function, scope?: Object, ahead?: boolean): void;

      /**
       * 合并分组时调用，可重载做后续处理
       * @param categoryName 分组名
       */
      onCollapsed(categoryName: string): void;

      /**
       * 展开分组时调用，可重载做后续处理
       * @param categoryName 分组名
       */
      onExpanded(categoryName: string): void;

      /**
       * 平移动画结束时回调，可重载做后续处理
       */
      onTranslateEnded(): void;

      /**
       * 重绘组件中所有行，仅次于invalidateModel的彻底刷新方式
       */
      redraw(): void;

      /**
       * 删除底层Painter
       * @param painter Painter类
       */
      removeBottomPainter(painter: Object | Function): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除所有选中的图元
       */
      removeSelection(): void;

      /**
       * 删除顶层Painter
       * @param painter Painter类
       */
      removeTopPainter(painter: Object | Function): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 选中所有数据元素
       */
      selectAll(): void;

      /**
       * 设置是否自动隐藏滚动条
       * @param v
       */
      setAutoHideScrollBar(v: boolean): void;

      /**
       * 设置边框和分组行的背景颜色
       * @param color
       */
      setBackground(color: string): void;

      /**
       * 设置是否启用批量编辑
       * @param v
       */
      setBatchEditable(v: boolean): void;

      /**
       * 设置是否分组显示，默认为true，为false则忽略Property的categoryName属性
       * @param v
       */
      setCategorizable(v: boolean): void;

      /**
       * 设置分组合并图标
       * @param v icon
       */
      setCollapseIcon(v: String): void;

      /**
       * 设置列线颜色
       * @paramcolor
       */
      setColumnLineColor(color: string): void;

      /**
       * 设置列线是否可见
       * @paramv
       */
      setColumnLineVisible(v: boolean): void;

      /**
       * 设置列线位置比例，默认值0.5，允许范围为0~1
       * @param v
       */
      setColumnPosition(v: number): void;

      /**
       * 设置绑定的数据模型
       * @param dataModel 数据模型
       */
      setDataModel(dataModel: DataModel): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: boolean, iconUrl: String): void;

      /**
       * 设置可否编辑的总开关，默认为false，每个Property属性对象可再控制
       * @parameditable
       */
      setEditable(editable: boolean): void;

      /**
       * 设置分组展开图标
       * @param v icon
       */
      setExpandIcon(v: String): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: number): void;

      /**
       * 设置左侧缩进，左侧空间用于绘制分组toggle图标，以及属性提示icon图标
       * @param v
       */
      setIndent(v: number): void;

      /**
       * 设置属性值文本颜色
       * @param v
       */
      setLabelColor(v: String): void;

      /**
       * 设置属性值文本字体
       * @param v
       */
      setLabelFont(v: String): void;

      /**
       * 设置选中文本颜色
       * @param v
       */
      setLabelSelectColor(v: String): void;

      /**
       * 以json的方式配置属性(设置)
       * @param properties json属性
       * @example //示例：
       * propertyView.setProperties([{
       * 	name: 'id',
       * 	displayName: '序号'
       * },
       * {
       * 	name: 'background',
       * 	accessType: 'style'
       * }
       * ]);
       */
      setPropertie(properties: object[]): void;

      /**
       * 设置行高
       * @param v
       */
      setRowHeight(v: number): void;

      /**
       * 设置行线颜色
       * @param color
       */
      setRowLineColor(color: String): void;

      /**
       * 设置行线是否可见
       * @param v
       */
      setRowLineVisible(v: boolean): void;

      /**
       * 设置滚动条颜色
       * @param color 颜色值
       */
      setScrollBarColor(color: String): void;

      /**
       * 设置滚动条宽度
       * @param size 宽度值
       */
      setScrollBarSize(size: number): void;

      /**
       * 设置行选中背景颜色
       * @param color
       */
      setSelectBackground(color: String): void;

      /**
       * 设置当前选中行索引
       * @param v
       */
      setSelectRowIndex(v: number): void;

      /**
       * 设置选择过滤器函数
       * @param func 过滤器函数
       */
      setSelectableFunc(func: Function): void;

      /**
       * 设置组件是否共享选中模型
       * @param v
       */
      setSelectionModelShared(v: boolean): void;

      /**
       * 设置排序函数
       * @param func
       */
      setSortFunc(func: Function): void;

      /**
       * 设置垂直平移值
       * @param x 水平平移值，此参数无效
       * @param y 垂直平移值
       * @param anim 是否使用动画
       */
      setTranslate(x: number, y: number, anim?: boolean): void;

      /**
       * 设置垂直平移值
       * @param v 垂直平移值
       */
      setTranslateY(v: number): void;

      /**
       * 设置水平平移值
       * @param v 垂直平移值
       */
      setTranslateX(v: number): void;

      /**
       * 设置可见过滤器
       * @param func 过滤器函数
       */
      setVisibleFunc(func: Function): void;

      /**
       * 设置布局宽度
       * @param v 宽度值
       */
      setWidth(v: number): void;

      /**
       * 获取选中模型，getSelectionModel的缩写
       * @return {SelectionModel}
       */
      sm(): SelectionModel;

      /**
       * 切换分组展开合并状态
       * @param categoryName 分组名
       */
      toggle(categoryName: string): void;

      /**
       * 在当前值基础上增加垂直平移值(水平无效)
       * @param x 新增的水平平移值，此参数无效
       * @param y 新增的垂直平移值
       * @param anim 是否使用动画
       */
      translate(x: number, y: number, anim?: boolean): void;

      /**
       * 删除自身属性变化事件监听器，removePropertyChangeListener的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 立刻刷新组件
       */
      validate(): void;
    }

    /**
     * 属性面板组件，该组件增强了ht.widget.PropertyView组件的展示及操作功能，提供了可视化的切换排序、过滤和分组的界面功能。使用需引入 ht-propertypane.js
     * @param dataModel 绑定的数据模型
     * @constructor
     */
    export class PropertyPane {
      constructor(dataModel?: DataModel);
    }

    /**
     * 折叠组件，用于多组件的折叠展开效果，提供水平和垂直两种布局方式
     * @constructor
     */
    export class AccordionView {
      /**
       * 添加组件
       * @param title 组件的标题文字信息，不同组件不得相同
       * @param content 组件内容，可为HT框架提供的组件对象，也可为原生HTML元素
       * @param expand 组件是否展开，默认为false
       * @param icon 组件是否展开，默认为false
       */
      add(
        title: String,
        content: Object,
        expand?: Boolean,
        icon?: String,
      ): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.AccordionView#mp mp}
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 将组件加入到指定的DOM元素底下，不指定则加入到 document.body 下
       * @param parentNode 父DOM,默认为 document.body
       */
      addToDOM(parentNode?: HTMLElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 清除所有组件
       */
      clear(): void;

      /**
       * 合并当前展开的组件
       */
      collapse(): void;

      /**
       *
       */
      drawTitle(): void;

      /**
       * 根据标题找到组件并展开
       * @param title 标题文字
       */
      expand(title: String): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.AccordionView#fp fp}
       */
      firePropertyChange(property: String, oldValue: any, newValue: any): void;

      /**
       * @param kind
       */
      fireViewEvent(kind: String): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.AccordionView#firePropertyChange firePropertyChange}
       */
      fp(property: String, oldValue: any, newValue: any): void;

      /**
       * 获取类声明(构造函数)
       * @return 类声明(构造函数)
       */
      getClass(): any;

      /**
       * 获取类全名
       * @return 类全名
       */
      getClassName(): String;

      /**
       * 获取合并图标
       * @return 合并图标全名
       */
      getCollapseIcon(): String;

      /**
       * 获取当前展开组件的标题
       * @return 当前展开组件的标题
       */
      getCurrentTitle(): String;

      /**
       * 获取被禁用组件的div
       * @return 被禁用组件的div
       */
      getDisabledDiv(): HTMLElement;

      /**
       * 获取展开图标
       * @return 展开图标全名
       */
      getExpandIcon(): String;

      /**
       * 获取布局高度
       * @return 布局高度
       */
      getHeight(): Number;

      /**
       * 获取标题文字颜色
       * @return 标题文字颜色
       */
      getLabelColor(): String;

      /**
       * 获取标题文字字体
       * @return 标题文字字体
       */
      getLabelFont(): String;

      /**
       * 获取布局方式，默认为vertical或v，可设置为horizontal或h
       * @return 布局方式
       */
      getOrientation(): String;

      /**
       * 获取标题选中背景色
       * @return 标题选中背景色
       */
      getSelectBackground(): String;

      /**
       * 获取标题选中边框宽度
       * @return 标题选中边框宽度
       */
      getSelectWidth(): Number;

      /**
       * 获取分割线的颜色
       * @return 分割线的颜色
       */
      getSeparatorColor(): String;

      /**
       * 获取父类声明(构造函数)
       * @return 父类声明(构造函数)
       */
      getSuperClass(): Function;

      /**
       * 获取标题背景色
       * @return 标题背景色
       */
      getTitleBackground(): String;

      /**
       * 获取标题高度
       * @return 标题高度
       */
      getTitleHeight(): Number;

      /**
       * 获取所有标题
       * @return 所有标题
       */
      getTitles(): String[];

      /**
       * 获取组件的根层div
       * @return 组件的根层div
       */
      getView(): HTMLElement;

      /**
       * 获取布局宽度
       * @return 布局宽度
       */
      getWidth(): Number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.AccordionView#iv iv}
       */
      invalidate(delay: Number): void;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return 组件是否处于不可用状态
       */
      isDisabled(): Boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param 	标题文字
       * @return 判断指定的title是否处于展开状态
       */
      isExpanded(title: String): Boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.AccordionView#invalidate invalidate}
       */
      iv(delay: Number): void;

      /**
       * 增加自身属性变化事件监听器，{@link widget.AccordionView#addPropertyChangeListener addPropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.AccordionView#addPropertyChangeListener addPropertyChangeListener}
       */
      mp(listener: Function, scope?: any, ahead?: Boolean): void;

      /**
       * 合并标题时调用，可重载做后续处理
       * @param title 标题
       */
      onCollapsed(title: String): void;

      /**
       * 展开标题时调用，可重载做后续处理
       * @param title 标题
       */
      onExpanded(title: String): void;

      /**
       * 属性变化回调函数，可重载做后续处理
       * @param event 属性变化事件
       * @example //event格式：
       * {
       * 	property: 'name',//发生变化的属性
       * 	oldValue: 'oldValue',//旧值
       * 	newValue: 'newValue',''新值
       * 	data: data//发生变化的data
       * }
       *
       */
      onPropertyChanged(event: Object): void;

      /**
       * 根据标题找到组件并删除
       * @param title 标题
       */
      remove(title: String): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.AccordionView#ump ump}
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 设置合并图标
       * @param icon 图标
       */
      setCollapseIcon(icon: String): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: Boolean, iconUrl?: String): void;

      /**
       * 设置展开图标
       * @param icon 图标
       */
      setExpandIcon(icon: String): void;

      /**
       * 根据标题找到组件设置焦点
       * @param title 标题
       */
      setFocus(titlt: String): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: Number): void;

      /**
       * 设置标题文字颜色
       * @param Color 颜色值
       */
      setLabelColor(Color: String): void;

      /**
       * 设置标题文字字体
       * @param font 字体
       */
      setLabelFont(font: String): void;

      /**
       * 设置布局方式，默认为vertical或v，可设置为horizontal或h
       * @param v 布局方式
       */
      setOrientation(v: String): void;

      /**
       * 设置分割线颜色
       * @param Color 颜色值
       */
      setSeparatorColor(Color: String): void;

      /**
       * 设置行选中背景颜色
       * @param Color 颜色值
       */
      setSelectBackground(Color: String): void;

      /**
       * 设置标题选中边框宽度
       * @param v 宽度
       */
      setSelectWidth(v: Number): void;

      /**
       * 设置标题背景色
       * @param Color 颜色值
       */
      setTitleBackground(Color: String): void;

      /**
       * 设置标题高度
       * @param v 高度
       */
      setTitleHeight(v: Number): void;

      /**
       * 设置布局宽度
       * @param v 宽度
       */
      setWidth(v: Number): void;

      /**
       * 删除自身属性变化事件监听器，{@link widget.AccordionView#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.AccordionView#removePropertyChangeListener removePropertyChangeListener}
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 刷新组件
       */
      validate(): void;
    }

    /**
     * 边框面板是一种组件布局容器，可在上、下、左、右、中的五个区域位置摆放子组件，
     * 子组件可为HT框架提供的组件，也可为HTML元素，子组件以position为absolute方式进行绝对定位。
     * @constructor
     */
    export class BorderPane {
      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.BorderPane#mp mp}
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 将组件加入到指定的DOM元素底下，不指定则加入到 document.body 下
       * @param parentNode 父DOM,默认为 document.body
       */
      addToDOM(parentNode?: HTMLElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.BorderPane#fp fp}
       */
      firePropertyChange(property: String, oldValue: any, newValue: any): void;

      /**
       * @param kind
       */
      fireViewEvent(kind: String): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.BorderPane#firePropertyChange firePropertyChange}
       */
      fp(property: String, oldValue: any, newValue: any): void;

      /**
       * 获取底部组件高度
       * @return 组件高度
       */
      getBottomHeight(): Number;

      /**
       * 获取底部组件
       * @return 底部组件
       */
      getBottomView(): Object | HTMLElement;

      /**
       * 获取中间组件
       * @return 中间组件
       */
      getCenterView(): Object | HTMLElement;

      /**
       * 获取类声明(构造函数)
       * @return 类声明(构造函数)
       */
      getClass(): Function;

      /**
       * 获取类全名
       * @return 类全名
       */
      getClassName(): String;

      /**
       * 获取被禁用组件的div
       * @return 被禁用组件的div
       */
      getDisabledDiv(): HTMLElement;

      /**
       * 获取布局高度
       * @return 布局高度
       */
      getHeight(): Number;

      /**
       * 获取左侧组件
       * @return 左侧组件
       */
      getLeftView(): Object | HTMLElement;

      /**
       * 获取左侧组件宽度
       * @return 左侧组件宽度
       */
      getLeftWidth(): Number;

      /**
       * 获取右侧组件
       * @return 右侧组件
       */
      getRightView(): Object | HTMLElement;

      /**
       * 获取右侧组件宽度
       * @return 右侧组件宽度
       */
      getRightWidth(): Number;

      /**
       * 获取父类声明(构造函数)
       * @return 父类声明(构造函数)
       */
      getSuperClass(): Function;

      /**
       * 获取顶部组件
       * @return 顶部组件
       */
      getTopView(): Object | HTMLElement;

      /**
       * 获取顶部组件宽度
       * @return 顶部组件宽度
       */
      getTopWidth(): Number;

      /**
       * 获取组件的根层div
       * @return 组件的根层div
       */
      getView(): HTMLElement;

      /**
       * 获取布局宽度
       * @return 布局宽度
       */
      getWidth(): Number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.BorderPane#iv iv}
       */
      invalidate(delay: Number): void;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return 组件是否处于不可用状态
       */
      isDisabled(): Boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.BorderPane#invalidate invalidate}
       */
      iv(delay: Number): void;

      /**
       * 增加自身属性变化事件监听器，{@link widget.BorderPane#addPropertyChangeListener addPropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.BorderPane#addPropertyChangeListener addPropertyChangeListener}
       */
      mp(listener: Function, scope?: Object, ahead?: Boolean): void;

      /**
       * 属性变化回调函数，可重载做后续处理
       * @param event 属性变化事件
       * @example //event格式：
       * {
       * 	property: 'name',//发生变化的属性
       * 	oldValue: 'oldValue',//旧值
       * 	newValue: 'newValue',''新值
       * 	data: data//发生变化的data
       * }
       *
       */
      onPropertyChanged(event: Object): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.BorderPane#ump ump}
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 设置底部组件高度
       * @param v 高度值
       */
      setBottomHeight(v: Number): void;

      /**
       * 设置底部组件
       * @param v 底部组件
       */
      setBottomView(v: Object | HTMLElement): void;

      /**
       * 设置中间组件
       * @param v 中间组件
       */
      setCenterView(v: Object | HTMLElement): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: Boolean, iconUrl?: String): void;

      /**
       * 根据标题找到组件设置焦点
       * @param title 标题
       */
      setFocus(titlt: String): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: Number): void;

      /**
       * 设置左部组件
       * @param v 左部组件
       */
      setLeftView(v: Object | HTMLElement): void;

      /**
       * 设置左部组件宽度
       * @param v 宽度值
       */
      setLeftWidth(v: Number): void;

      /**
       * 设置右部组件
       * @param v 右部组件
       */
      setRightView(v: Object | HTMLElement): void;

      /**
       * 设置右部组件宽度
       * @param v 宽度值
       */
      setRightWidth(v: Number): void;

      /**
       * 设置顶部组件
       * @param v 顶部组件
       */
      setTopView(v: Object | HTMLElement): void;

      /**
       * 设置顶部组件宽度
       * @param v 宽度值
       */
      setTopWidth(v: Number): void;

      /**
       * 设置布局宽度
       * @param v 宽度
       */
      setWidth(v: Number): void;

      /**
       * 删除自身属性变化事件监听器，{@link widget.BorderPane#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.BorderPane#removePropertyChangeListener removePropertyChangeListener}
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 刷新组件
       */
      validate(): void;
    }

    /**
     * new ContextMenu(items)
     * 右击菜单组件类，可以使任意HTML元素响应右键菜单，支持任意层次子菜单。使用组件需引入ht-contextmenu.js
     * @param items <optional>菜单项配置, 为JSON对象
     * @constructor
     */
    export class ContextMenu {
      constructor(items: Object[]);

      /**
       * 指定右击菜单相应的 DOM 节点
       * @param container 父DOM
       */
      addTo(container?: HTMLElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 菜单隐藏之后被调用，可以重写此方法
       */
      afterHide(): void;

      /**
       * 菜单显示之后被调用，可以重写此方法
       * @param event 如鼠标事件对象
       */
      afterShow(event: Event): void;

      /**
       * 菜单显示之前被调用，可以重写此方法实现动态菜单功能
       * @param Event 如鼠标事件对象
       */
      beforeShow(event: Event): void;

      /**
       * 禁用全局快捷键
       */
      disableGlobalKey(): void;

      /**
       * 销毁此右键菜单
       */
      dispose(): void;

      /**
       * 启用全局快捷键，一旦启用此选项，菜单不再使用时需要显式调用{@link widget.ContextMenu#dispose dispose}销毁菜单
       */
      enableGlobalKey(): void;

      /**
       * 获取布局高度
       * @return 布局高度
       */
      getHeight(): Number;

      /**
       * 根据 id 查找菜单项
       * @param id 要查找的 id
       * @return 菜单项对象
       */
      getItemById(id: String): Object;

      /**
       * 查找属性名为property，值为value的菜单项，只返回第一个查找结果，注意：如果菜单显示时修改此查找结果，则菜单界面在下次显示时更新
       * @param property 属性名
       * @param value 菜单项
       * @return 菜单项对象
       */
      getItemByProperty(property: String, value: Object): Object;

      /**
       * 获取右击菜单组件响应的 dom
       * @return {HTMLDivElement} 右击菜单组件响应的 dom
       */
      getRelatedView(): HTMLDivElement;

      /**
       * 获取组件的根层div
       * @return {HTMLDivElement} 组件的根层div
       */
      getView(): HTMLDivElement;

      /**
       * 获取布局宽度
       * @return 布局宽度
       */
      getWidth(): Number;

      /**
       * 隐藏菜单
       */
      hide(): void;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.ContextMenu#iv iv}
       */
      invalidate(delay: Number): void;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return 组件是否处于不可用状态
       */
      isDisabled(): Boolean;

      /**
       * 组件是否处于可见状态
       * @return 组件是否处于可见状态
       */
      isShowing(): Boolean;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: Boolean, iconUrl?: String): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: Number): void;

      /**
       * 设置菜单项，参数为JSON对象
       * @param items 菜单项配置数组
       * @example //event格式：
       *[{
       *      label: '', //菜单文字
       *      icon: '', //菜单图片ICON
       *      type: "check" | "radio", //可多选的菜单项 | 单选菜单项
       *      groupId: 1 //菜单项分组, 当 type 为 radio 有用
       *      disabled: true //禁用菜单项，可以是函数，由返回值决定是否禁用
       *      href: "http://www.hightopo.com", //超链到某个URL
       *      linkTarget: "_blank", //超链目标，默认_self
       *      key: [Key.ctrl, Key.enter], //实际响应的快捷键
       *      suffix: "Ctrl+Enter", //在菜单上显示的提示文字
       *      preventDefault: false, //是否阻止快捷键默认的行为，默认为true
       *      visible: true, //是否可见，可为 Boolean，也可以是 function
       *}]
       */
      setItems(items: Object[]): void;

      /**
       * 设置指定 id 的菜单项是否可见
       * @param id 菜单项id
       * @param visible 是否可见
       */
      setItemVisible(id: String, visible: Boolean): void;

      /**
       * 设置菜单中label的最大宽度，如果label过长会出现跑马灯效果
       * @param maxWidth 最大宽度
       */
      setLabelMaxWidth(maxWidth: Number): void;

      /**
       * 设置可见过滤器
       * @param func 过滤器函数
       */
      setVisibleFunc(func: Function): void;

      /**
       * 设置布局宽度
       * @param func 过滤器函数
       */
      setWidth(func: Function): void;

      /**
       * 显示菜单, x,y为菜单显示页面在中的坐标
       * @param x x坐标，当仅有一个参数可以传入鼠标事件
       * @param y y坐标
       * @param mouseOffset 是否默认相对传入位置偏移
       */
      show(x: Number, y?: Number, mouseOffset?: Boolean): void;

      /**
       * 显示菜单, x,y为菜单显示页面在中的坐标
       * @param event 鼠标事件
       */
      show(event: Event): void;

      /**
       * 在对应组件上显示菜单
       * @param view 组件，可以是 DOM 或者 ht 组件
       * @param x x坐标，当仅有二个参数可以传入鼠标事件
       * @param y y坐标
       */
      showOnView(view: HTMLElement, x: Number, y: Number): void;

      /**
       * 在对应组件上显示菜单
       * @param view 组件，可以是 DOM 或者 ht 组件
       * @param event 鼠标事件
       */
      showOnView(view: HTMLElement, event: Event): void;

      /**
       * 刷新组件
       */
      validate(): void;
    }

    /**
     * new FormPane()
     * 表单面板类，使用表单插件需要在引入ht.js核心库之后，再引入一个ht-form.js的表单插件库。
     * @constructor
     */
    export class FormPane {
      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.FormPane#mp mp}
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 添加一行组件
       * @param items 元素数组，元素可为字符串、json格式描述的组件参数信息、html元素或者为null的空
       * @param widths 每个元素宽度信息数组，宽度值大于1代表固定绝对值，小于等于1代表相对值，也可为80+0.3的组合
       * @param height 行高信息，值大于1代表固定绝对值，小于等于1代表相对值，也可为80+0.3的组合，为空时采用默认行高
       * @param params json格式的额外参数，例如插入行索引以及行边框或背景颜色等，如{index: 2, background: 'yellow', borderColor: 'red'}
       */
      addRow(
        items: Object,
        widths: Number[],
        height: Number,
        params: Object,
      ): void;

      /**
       * 将组件加入到指定的DOM元素底下，不指定则加入到 document.body 下
       * @param parentNode 父DOM,默认为 document.body
       */
      addToDOM(parentNode?: HTMLElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 清除所有组件
       */
      clear(): void;

      /**
       * 获取表单的行垂直间距，默认值为6
       * @return 表单的行垂直间距
       */
      getHGap(): Number;

      /**
       * 获取表单左边和右边与组件内容的间距，默认值为8
       * @return 表单左边和右边与组件内容的间距
       */
      getHPadding(): Number;

      /**
       * 根据id值找到对应的item元素
       * @param id id值
       * @return item元素
       */
      getItemById(id: String): any;

      /**
       * 获取文字左边和右边的间距，默认值为2
       * @return 文字左边和右边的间距
       */
      getLabelHPadding(): Number;

      /**
       * 获取文字顶部和顶部的间距，默认值为0
       * @return 文字顶部和顶部的间距
       */
      getLabelVPadding(): Number;

      /**
       * 获取默认行高
       * @return 行高
       */
      getRowHeight(): Number;

      /**
       * 获取滚动条颜色
       * @return 滚动条颜色
       */
      getScrollBarColor(): String;

      /**
       * 获取滚动条宽度，默认值为7
       * @return 滚动条宽度
       */
      getScrollBarSize(): Number;

      /**
       * 获取水平平移值
       * @return 水平平移值
       * @see {@link widget.FormPane#tx tx}
       */
      getTranslateX(): Number;

      /**
       * 获取垂直平移值
       * @return 垂直平移值
       * @see {@link widget.FormPane#ty ty}
       */
      getTranslateY(): Number;

      /**
       * 获取或设置水平平移值，没有参数时相当于{@link ht.widget.FormPane#getTranslateX getTranslateX}，有参数时相当于{@link ht.widget.FormPane#setTranslateX setTranslateX}
       * @return 水平平移值
       * @see {@link widget.FormPane#getTranslateX getTranslateX}
       * @see {@link widget.FormPane#setTranslateX setTranslateX}
       */
      tx(value?: Number): Number;

      /**
       * 获取或设置垂直平移值，没有参数时相当于{@link widget.FormPane#getTranslateY getTranslateY}，有参数时相当于{@link widget.FormPane#setTranslateY setTranslateY}
       * @return 垂直平移值
       * @see {@link widget.FormPane#getTranslateY getTranslateY}
       * @see {@link widget.FormPane#setTranslateY setTranslateY}
       *
       */
      ty(value?: Number): Number;

      /**
       * 根据id获取对应item元素值
       * @param id id值
       * @return 对应item元素值
       * @see {@link widget.FormPane#v v}
       */
      getValue(id: String): String;

      /**
       * 获取表单组件水平间距，默认值为6
       * @return 表单组件水平间距
       */
      getVGap(): Number;

      /**
       * 获取表单顶部和顶部与组件内容的间距，默认值为8
       * @return 表单顶部和顶部与组件内容的间距
       */
      getVPadding(): Number;

      /**
       * 获取是否自动隐藏滚动条，默认为true
       * @return 是否自动隐藏滚动条
       */
      isAutoHideScrollBar(): Boolean;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.FormPane#addPropertyChangeListener addPropertyChangeListener}
       */
      mp(listener: Function, scope?: Object, ahead?: Boolean): void;

      /**
       * 删除指定的行
       * @param index 行号
       */
      removeRow(index: Number): void;

      /**
       * 设置是否自动隐藏滚动条，默认为true
       * @param v 是否自动隐藏滚动条
       */
      setAutoHideScrollBar(v: Boolean): void;

      /**
       * 设置表单的行垂直间距，默认值为6
       * @param hGap 表单的行垂直间距
       */
      setHGap(hGap: Number): void;

      /**
       * 设置表单左边和右边与组件内容的间距，默认值为8
       * @param hPadding 表单左边和右边与组件内容的间距
       */
      setHPadding(hPadding: Number): void;

      /**
       * 设置文字左边和右边的间距，默认值为2
       * @param hPadding 文字左边和右边的间距
       */
      setLabelHPadding(hPadding: Number): void;

      /**
       * 设置文字顶部和顶部的间距，默认值为0
       * @param vPadding 文字顶部和顶部的间距
       */
      setLabelVPadding(vPadding: Number): void;

      /**
       * 设置默认行高
       * @param height 默认行高
       */
      setRowHeight(height: Number): void;

      /**
       * 设置滚动条颜色
       * @param Color 颜色
       */
      setScrollBarColor(Color: String): void;

      /**
       * 设置滚动条宽度，默认值为7
       * @param size 滚动条宽度
       */
      setScrollBarSize(size: Number): void;

      /**
       * 设置水平平移值
       * @param v 水平平移值
       * @see {@link widget.FormPane#tx tx}
       */
      setTranslateX(v: Number): void;

      /**
       * 设置垂直平移值
       * @param v 垂直平移值
       * @see {@link widget.FormPane#ty ty}
       */
      setTranslateY(v: Number): void;

      /**
       * 根据id设置对应item元素值
       * @param id id值
       * @return 对应item元素值
       * @see {@link widget.FormPane#v v}
       */
      setValue(id: String, value: String): void;

      /**
       * 设置表单组件水平间距，默认值为6
       * @param vGap 表单组件水平间距
       */
      setVGap(vGap: Number): void;

      /**
       * 设置表单顶部和顶部与组件内容的间距，默认值为8
       * @param vPadding 表单顶部和顶部与组件内容的间距
       */
      setVPadding(vPadding: Number): void;

      /**
       * 根据id获取对应item元素值
       * @param id id值
       * @return 对应item元素值
       * @see {@link widget.FormPane#getValue getValue}
       */
      v(id: String): String;
    }

    /**
     * new ListView(dataModel)
     * 列表组件类，用列表的方式呈现DataModel中的数据
     * @param {dataModel} dataModel 绑定的数据模型
     * @constructor
     */
    export class ListView {
      constructor(dataModel: DataModel);

      /**
       * 增加底层Painter<br>
       * 拓扑组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，底层Painter绘制在拓扑最下面
       * @param painter Painter类
       * @example //Painter示例：
       * //Painter示例：
       * graphView.addBottomPainter(function(g){
       * g.fillStyle = '#000000';
       * g.fillRect(0, 0, 100, 100);
       * });
       * graphView.addBottomPainter(MyBottomPainter);
       */
      addBottomPainter(painter: Function | Object): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.ListView#mp mp}
       */
      addPropertyChangeListener(
        listener: Function,
        scope: Object,
        ahead: Boolean,
      ): void;

      /**
       * 将组件加入到指定的DOM元素底下，不指定则加入到 document.body 下
       * @param parentNode 父DOM,默认为 document.body
       */
      addToDOM(parentNode?: HTMLElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 增加顶层Painter<br>
       * 拓扑组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，顶层Painter绘制在拓扑最上面
       * @param painter Painter类
       * @example //Painter示例：
       * graphView.addBottomPainter(function(g){
       * g.fillStyle = '#000000';
       * g.fillRect(0, 0, 100, 100);
       * });
       * graphView.addBottomPainter(MyBottomPainter);
       */
      addTopPainter(painter: Function | Object): void;

      /**
       * 传入即将设置的水平平移值，返回最终设置值，可重载限制水平平移范围
       * @param value 原始水平平移值
       * @return 新的水平平移值
       */
      adjustTranslateX(value: Number): Number;

      /**
       * 传入即将设置的垂直平移值，返回最终设置值，可重载限制垂直平移范围
       * @param value 原始垂直平移值
       * @return 新的垂直平移值
       */
      adjustTranslateY(value: Number): Number;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 获取或设置数据模型，没有参数时相当于getDataModel，有参数时相当于setDataModel
       * @param {DataModel} dataModel 数据模型
       */
      dm(dataModel: DataModel): DataModel;

      /**
       * 绘制文本，可重载自定义，label一般绘制在最后因此没有width参数限制
       * @param g 画笔对象
       * @param data 数据元素
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param height 绘制的高度
       */
      drawIcon(
        g: CanvasRenderingContext2D,
        data: Object,
        x: Number,
        y: Number,
        height: Number,
      ): void;

      /**
       * 绘制行内容，可重载自定义，默认调用drawIcon和drawLabel，如果返回值为HTML元素，则使用HTML元素当作Renderer
       * @param g 画笔对象
       * @param data 数据元素
       * @param selected 数据元素是否选中
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param height 绘制的高度
       */
      drawRow(
        g: CanvasRenderingContext2D,
        data: Object,
        selected: Boolean,
        x: Number,
        y: Number,
        height: Number,
      ): void;

      /**
       * 绘制行背景色，默认仅在选中该行时填充选中背景色，可重载自定义
       * @param g 画笔对象
       * @param data 数据元素
       * @param selected 数据元素是否选中
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param height 绘制的高度
       */
      drawRowBackground(
        g: CanvasRenderingContext2D,
        data: Object,
        selected: Boolean,
        x: Number,
        y: Number,
        height: Number,
      ): void;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      /**
       * 获取数据元素icon的背景色，可重载自定义
       * @param data 数据元素
       * @return 颜色值，默认返回data.s('body.Color')
       */
      getBodyColor(data: Object): String;

      /**
       * 获取数据元素icon的边框色，可重载自定义
       * @param data 数据元素
       * @return 颜色值，默认返回data.s('body.Color')
       */
      getBorderColor(data: Object): String;

      /**
       * 返回数据元素对应的check图标，可重载自定义check图标，该函数在checkMode模式下有效
       * @param data 数据元素
       * @return 数据元素对应的check图标
       */
      getCheckIcon(data: Object): String;

      /**
       * 传入逻辑坐标点或者交互event事件参数，返回当前点下的数据元素
       * @param pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
       * @return 点下的数据元素
       */
      getDataAt(pointOrEvent: Object | Event): Object;

      /**
       * 获取绑定的数据模型
       * @return 数据模型
       */
      getDataModel(): Object;

      /**
       * 获取当前可见区域的结束行索引
       * @return 当前可见区域的结束行索引
       */
      getEndRowIndex(): Number;

      /**
       * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态
       * 此方法获取focus数据元素
       * @return focus数据元素
       */
      getFocusData(): Object;

      /**
       * 获取布局高度
       * @return {Number }
       */
      getHeight(): Number;

      /**
       * 获取data对象对应的icon图标，可重载自定义
       * @param data 数据元素
       * @return data对象对应的icon图标
       */
      getIcon(data: Object): String;

      /**
       * 返回data对象对应的图标宽度，默认如果有图标则以indent值为宽度，可重载自定义
       * @return 对象对应的图标宽度
       */
      getIconWidth(data: Object): Number;

      /**
       * 获取indent缩进，该值一般当作图标的宽度
       * @return indent缩进
       */
      getIndent(data: Object): Number;

      /**
       * 获取data对象显示的文字，默认返回data.toLabel()，可重载自定义
       * @param data 数据模型
       * @return data对象显示的文字
       */
      getLabel(data: Object): String;

      /**
       * 获取data对象的文本颜色，可重载自定义
       * @param data 数据模型
       * @return data对象的文本颜色
       */
      getLabelColor(data: Object): String;

      /**
       * 获取data对象的文本字体，可重载自定义
       * @param data 数据模型
       * @return data对象的文本字体
       */
      getLabelFont(data: Object): String;

      /**
       * 获取选中文本的颜色
       * @return 选中文本的颜色
       */
      getLabelSelectColor(): String;

      /**
       * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
       * @param event 数据模型
       * @return 组件中的逻辑坐标
       * @see {@link widget.ListView#lp lp}
       */
      getLogicalPoint(event: Object): Object;

      /**
       * 获取当前显示的Data对象集合，该集合已被排序和过滤
       * @return 当前显示的Data对象集合，该集合已被排序和过滤
       */
      getRowDatas(): Object[];

      /**
       * 获取行高
       * @return 行高
       */
      getRowHeight(): Number;

      /**
       * 获取data对象所在的行索引
       * @param data 数据模型
       * @return data对象所在的行索引
       */
      getRowIndex(data: Object): Number;

      /**
       * 获取行线颜色
       * @return 行线颜色
       */
      getRowLineColor(): String;

      /**
       * 返回当前可见行总行数
       * @return 当前可见行总行数
       */
      getRowSize(): Number;

      /**
       * 获取行线颜色
       * @return 行线颜色
       */
      getRowLineColor(): String;

      /**
       * 获取滚动条颜色
       * @return 滚动条颜色
       */
      getScrollBarColor(): String;

      /**
       * 获取滚动条宽度
       * @return 滚动条宽度
       */
      getScrollBarSize(): Number;

      /**
       * 获取选择过滤器函数
       * @return 选择过滤器函数
       */
      getSelectableFunc(): Function;

      /**
       * 获取行选中背景颜色
       * @return 行选中背景颜色
       */
      getSelectBackground(): String;

      /**
       * 获取选中模型
       * @return 选中模型
       * @see {@link widget.ListView#sm sm}
       */
      getSelectionModel(): Object[];

      /**
       * 获取排序函数
       * @return 排序函数
       */
      getSortFunc(): Function;

      /**
       * 获取当前可见区域的起始行索引
       * @return 当前可见区域的起始行索引
       */
      getStartRowIndex(): Number;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @param e 鼠标或Touch事件对象
       * @returns  toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(e: Event): String;

      /**
       * 获取水平平移值
       * @return 水平平移值
       * @see {@link widget.ListView#tx tx}
       */
      getTranslateX(): Number;

      /**
       * 获取垂直平移值
       * @return 垂直平移值
       * @see {@link widget.ListView#ty ty}
       */
      getTranslateY(): Number;

      /**
       * 获取水平平移值
       * @return 水平平移值
       * @see {@link widget.ListView#getTranslateX getTranslateX}
       */
      tx(value?: Number): Number;

      /**
       * 获取垂直平移值
       * @return 垂直平移值
       * @see {@link widget.ListView#getTranslateY getTranslateY}
       */
      ty(value?: Number): Number;

      /**
       * 获取组件的根层div
       * @return 组件的根层div
       */
      getView(): HTMLElement;

      /**
       * 获取组件中可见区域的逻辑尺寸
       * @return 组件中可见区域的逻辑尺寸
       */
      getViewRect(): Object;

      /**
       * 获取可见过滤器函数
       * @return 可见过滤器函数
       */
      getVisibleFunc(): Function;

      /**
       * 获取布局宽度
       * @return 布局宽度
       */
      getWidth(): Number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.ListView#iv iv}
       */
      invalidate(delay: Number): void;

      /**
       * 无效数据元素
       * @param data 要无效的图元
       */
      invalidateData(data: Object): void;

      /**
       * 无效模型，最彻底的刷新方式
       * @see {@link widget.ListView#ivm ivm}
       */
      invalidateModel(): void;

      /**
       * 无效模型，最彻底的刷新方式
       * @see {@link widget.ListView#invalidateModel invalidateModel}
       */
      ivm(): void;

      /**
       * 是否自动隐藏滚动条
       * @return 是否自动隐藏滚动条
       */
      isAutoHideScrollBar(): Boolean;

      /**
       * 选中数据元素时，是否自动平移组件以确保该元素出现在可见区域内
       * @return  选中数据元素时，是否自动平移组件以确保该元素出现在可见区域内
       */
      isAutoMakeVisible(): Boolean;

      /**
       * 是否是check模式
       * @return 是否是check模式
       */
      isCheckMode(): Boolean;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return 组件是否处于不可用状态
       */
      isDisabled(): Boolean;

      /**
       * 获取行线是否可见，默认为true
       * @return 获取行线是否可见
       */
      isRowLineVisible(): Boolean;

      /**
       * 判断data对象是否可被选中
       * @param data 数据元素
       * @return data对象是否可被选中
       */
      isSelectable(data: Object): Boolean;

      /**
       * 判断data对象是否被选中
       * @param data 数据元素
       * @return data对象是否被选中
       */
      isSelected(data: Object): Boolean;

      /**
       * 根据id判断data对象是否被选中
       * @param {String | Number} id 数据元素id
       * @return 对象是否被选中
       */
      isSelectedById(id: String): Boolean;

      /**
       * 当前组件是否共享选中模型
       * @return 当前组件是否共享选中模型
       */
      isSelectionModelShared(): Boolean;

      /**
       * 判断数据元素是否可见
       * @param data 数据元素
       * @return 数据元素是否可见
       */
      isVisible(data: Object): Boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.ListView#invalidate invalidate}
       */
      iv(delay: Number): void;

      /**
       * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
       * @param event 数据模型
       * @return 组件中的逻辑坐标
       * @see {@link widget.ListView#getLogicalPoint getLogicalPoint}
       */
      lp(event: Object): Object;

      /**
       * 平移组件以确保数据元素在可见区域内
       * @param data 数据元素
       */
      makeVisible(data: Object): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.ListView#addPropertyChangeListener addPropertyChangeListener}
       */
      mp(listener: Function, scope?: Object, ahead?: Boolean): void;

      /**
       * 图元被点击时回调，可重载做后续处理
       * @param data 被点击的图元
       * @param e 事件对象
       */
      onDataClicked(data: Object, e: Event): void;

      /**
       * 图元被双击时回调，可重载做后续处理
       * @param data 双击的图元
       * @param e 事件对象
       */
      onDataDoubleClicked(data: Object, e: Event): void;

      /**
       * 平移动画结束时回调，可重载做后续处理
       */
      onTranslateEnded(): void;

      /**
       * 重绘拓扑
       */
      redraw(): void;

      /**
       * 删除底层Painter
       * @param painter Painter类
       */
      removeBottomPainter(painter: Function | Object): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link SelectionModel#ump ump}
       */
      removePropertyChangeListener(listener: Function, scope?: any): void;

      /**
       * 删除自身属性变化事件监听器，{@link widget.ListView#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.ListView#removePropertyChangeListener removePropertyChangeListener}
       */
      ump(listener: Function, scope?: any): void;

      /**
       * 取消选中数据元素，参数可为单个数据元素，也可为List或Array数组
       * @param datas Data|List|Array数据元素
       * @see {@link SelectionModel#rs rs}
       */
      removeSelection(datas: Object | [] | Object[]): void;

      /**
       * 删除顶层Painter
       * @param painter Painter类
       */
      removeTopPainter(painter: Object | Function): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 平移(滚动)组件至指定的行号
       * @param index 行号
       */
      scrollToIndex(index: Number): void;

      /**
       * 选中所有数据元素
       */
      selectAll(): void;

      /**
       * 设置是否自动隐藏滚动条，默认为true
       * @param v 是否自动隐藏滚动条
       */
      setAutoHideScrollBar(v: Boolean): void;

      /**
       * 设置当选中数据元素，是否自动平移(滚动)组件以确保该数据元素出现在可见区域内
       * @param v
       */
      setAutoMakeVisible(v: Boolean): void;

      /**
       * 设置check模式
       * @param v
       */
      setCheckMode(v: Boolean): void;

      /**
       * 设置绑定的数据模型
       */
      setDataModel(): DataModel;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: Boolean, iconUrl: String): void;

      /**
       * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态
       * 此方法设置focus的数据元素
       * @param data 数据元素
       */
      setFocusData(data: Object): void;

      /**
       * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态
       * 此方法设置focus的数据元素
       * @param {String | Number} id 数据元素的id
       */
      setFocusDataById(id: String | Number): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: Number): void;

      /**
       * 设置标题文字颜色
       * @param Color 颜色值
       */
      setLabelColor(Color: String): void;

      /**
       * 设置标题文字字体
       * @param font 字体
       */
      setLabelFont(font: String): void;

      /**
       * 设置行label文字选中颜色
       * @param color 行label文字选中颜色
       */
      setLabelSelectColor(color: String): void;

      /**
       * 设置默认行高
       * @param height 默认行高
       */
      setRowHeight(height: Number): void;

      /**
       * 设置行线颜色
       * @param Color 颜色值
       */
      setRowLineColor(Color: String): void;

      /**
       * 设置行线是否可见
       * @param v 行线是否可见
       */
      setRowLineVisible(v: Boolean): void;

      /**
       * 设置滚动条颜色
       * @param Color 颜色
       */
      setScrollBarColor(Color: String): void;

      /**
       * 设置滚动条宽度，默认值为7
       * @param size 滚动条宽度
       */
      setScrollBarSize(size: Number): void;

      /**
       * 设置选择过滤器函数
       * @param func 滚动条宽度
       */
      setSelectableFunc(func: Function): void;

      /**
       * 设置行选中背景颜色
       * @param Color 颜色值
       */
      setSelectBackground(Color: String): void;

      /**
       * 设置组件是否共享选中模型
       * @param v
       */
      setSelectionModelShared(v: Boolean): void;

      /**
       * 设置排序函数
       * @param func 滚动条宽度
       */
      setSortFunc(func: Function): void;

      /**
       * 设置垂直平移值(水平平移值无效)
       * @param x 水平平移值，此参数无效
       * @param y 垂直平移值
       * @param anim 是否使用动画
       */
      setTranslate(x: Number, y: Number, anim?: Object | Boolean): void;

      /**
       * 显示垂直滚动条
       * @param func 过滤器函数
       */
      setWidth(func: Function): void;

      /**
       * 设置排序函数
       */
      showVBar(): void;

      /**
       * 获取选中模型
       * @return
       * @see {@link widget.ListView#getSelectionModel getSelectionModel}
       */
      sm(): Object[];

      /**
       * 在当前值基础上增加垂直平移值(水平无效)
       * @param x 水平平移值，此参数无效
       * @param y 垂直平移值
       * @param anim 是否使用动画
       */
      translate(x: Number, y: Number, anim?: Object | Boolean): void;

      /**
       * 删除自身属性变化事件监听器，{@link widget.ListView#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.ListView#removePropertyChangeListener removePropertyChangeListener}
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 刷新组件
       */
      validate(): void;
    }

    /**
     * new TabView()
     * 页签组件，以页签的方式呈现多组件，页签支持拖拽和关闭等功能
     * @constructor
     */
    export class TabView {
      /**
       * 添加组件
       * @param name 组件的标题文字信息
       * @param view 组件内容，可为HT框架提供的组件对象，也可为原生HTML元素
       * @param selected 组件是否选中，默认为false
       */
      add(name: String, view: Object | HTMLElement, selected: Boolean): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.TabView#mp mp}
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 将组件加入到指定的DOM元素底下，不指定则加入到 document.body 下
       * @param parentNode 父DOM,默认为 document.body
       */
      addToDOM(parentNode?: HTMLElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 绘制文本，可重载自定义，label一般绘制在最后因此没有width参数限制
       * @param s
       * @param g 画笔对象
       * @param color 图标颜色
       * @param position 图标位置
       */
      drawCloseIcon(
        s: any,
        g: CanvasRenderingContext2D,
        color: String,
        position: Object,
      ): void;

      /**
       * 绘制行内容，可重载自定义，默认调用drawIcon和drawLabel，如果返回值为HTML元素，则使用HTML元素当作Renderer
       * @param g 画笔对象
       * @param data 数据元素
       * @param selected 数据元素是否选中
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param width 绘制的宽度
       * @param height 绘制的高度
       */
      drawTab(
        g: CanvasRenderingContext2D,
        data: Object,
        selected: Boolean,
        x: Number,
        y: Number,
        width: Number,
        height: Number,
      ): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.TabView#fp fp}
       */
      firePropertyChange(property: String, oldValue: any, newValue: any): void;

      /**
       * @param kind
       */
      fireViewEvent(kind: String): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.TabView#firePropertyChange firePropertyChange}
       */
      fp(property: String, oldValue: any, newValue: any): void;

      /**
       * 获取指定的Tab对象，参数可为Tab的标签文字或索引
       * @param nameOrIndex 标签文字或索引
       */
      get(nameOrIndex: String | Number): void;

      /**
       * 获取类声明(构造函数)
       * @return 类声明(构造函数)
       */
      getClass(): Function;

      /**
       * 获取类全名
       * @return 类全名
       */
      getClassName(): String;

      /**
       * 获取组件的内容区域Div
       * @return 组件的内容区域Div
       */
      getContentDiv(): HTMLDivElement;

      /**
       * 获取当前选中的Tab对象
       * @return 当前选中的Tab对象
       */
      getCurrentTab(): Object;

      /**
       * 获取被禁用组件的div
       * @return 被禁用组件的div
       */
      getDisabledDiv(): HTMLElement;

      /**
       * 获取布局高度
       * @return 布局高度
       */
      getHeight(): Number;

      /**
       * 获取提示插入位置颜色
       * @return 提示插入位置颜色
       */
      getInsertColor(): String;

      /**
       * 获取tab对象显示的文字，默认返回tab.toLabel()，可重载自定义
       * @param tab 标签文字或索引
       * @return tab对象显示的文字
       */
      getLabel(tab: Object): String;

      /**
       * 获取页签文字颜色，可重载自定义
       * @param tab 标签文字或索引
       * @return tab对象显示的文字
       */
      getLabelColor(tab: Object): String;

      /**
       * 获取页签文字字体，可重载自定义
       * @return 页签文字字体
       */
      getLabelFont(): String;

      /**
       * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
       * @param event 数据模型
       * @return 组件中的逻辑坐标
       * @see {@link widget.TabView#lp lp}
       */
      getLogicalPoint(event: Object): Object;

      /**
       * 获取移动时的页签背景色
       * @return 移动时的页签背景色
       */
      getMoveBackground(): String;

      /**
       * 获取页签选中线条背景色
       * @return 页签选中线条背景色
       */
      getSelectBackground(): String;

      /**
       * 获取页签选中的线条宽度，默认值为3
       * @return 页签选中的线条宽度
       */
      getSelectWidth(): Number;

      /**
       * 获取父类声明(构造函数)
       * @return 父类声明(构造函数)
       */
      getSuperClass(): Function;

      /**
       *  根据索引值获取到对应的Tab对象
       * @param index 标签文字或索引
       * @return Tab对象
       */
      getTabAt(index: Number): Object;

      /**
       * 获取页签背景色
       * @return 页签背景色
       */
      getTabBackground(): String;

      /**
       * 获取页签间隔，默认值为1
       * @return 页签间隔
       */
      getTabGap(): Number;

      /**
       * 设置tab左边和右边与组件内容的间距，默认值为0
       * @return tab左边和右边与组件内容的间距
       */
      getTabHPadding(): Number;

      /**
       * 获取页签高度
       * @return 页签高度
       */
      getTabHeight(): Number;

      /**
       * 获取页签模型容器，用于增删Tab页签
       * @return 页签模型容器
       */
      getTabModel(): Object;

      /**
       * 获取页签位置，可用值有：top|bottom|left|right|left-vertical|right-vertical，默认值为top
       * @return 页签位置
       */
      getTabPosition(): String;

      /**
       * 获取页签宽度，可重载自定义
       * @param tab 标签文字或索引
       * @return 页签宽度
       */
      getTabWidth(tab: Object): Number;

      /**
       * 获取页签的div容器
       * @return 页签的div容器
       */
      getTitleDiv(tab: Object): HTMLDivElement;

      /**
       * 获取水平平移值
       * @return 水平平移值
       * @see {@link widget.TabView#tx tx}
       */
      getTranslateX(): Number;

      /**
       * 获取垂直平移值
       * @return 垂直平移值
       * @see {@link widget.TabView#ty ty}
       */
      getTranslateY(): Number;

      /**
       * 获取水平平移值
       * @return 水平平移值
       * @see {@link widget.TabView#getTranslateX getTranslateX}
       * @see {@link widget.TabView#setTranslateX setTranslateX}
       */
      tx(value?: Number): Number;

      /**
       * 获取垂直平移值
       * @return 垂直平移值
       * @see {@link widget.TabView#getTranslateY getTranslateY}
       * @see {@link widget.TabView#setTranslateY setTranslateY}
       */
      ty(value?: Number): Number;

      /**
       * 获取组件的根层div
       * @return 组件的根层div
       */
      getView(): HTMLElement;

      /**
       * 获取布局宽度
       * @return 布局宽度
       */
      getWidth(): Number;

      /**
       * 监听tabView 选择改变事件，可重载做后续处理
       * @param event 事件
       */
      handleSelectionChange(event: Object): void;

      hideTabView(): void;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.tabView#iv iv}
       */
      invalidate(delay: Number): void;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return 组件是否处于不可用状态
       */
      isDisabled(): Boolean;

      /**
       * 获取页签是否可拖拽移动改变显示顺序，默认值为true
       * @return 页签是否可拖拽移动改变显示顺序
       */
      isMovable(): Boolean;

      /**
       * 获取页签是否可滚动，默认值为fasle
       * @return 页签是否可滚动
       */
      isScrollable(): Boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.tabView#invalidate invalidate}
       */
      iv(delay: Number): void;

      /**
       * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
       * @param event 数据模型
       * @return 组件中的逻辑坐标
       * @see {@link widget.tabView#getLogicalPoint getLogicalPoint}
       */
      lp(event: Object): Object;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.tabView#addPropertyChangeListener addPropertyChangeListener}
       */
      mp(listener: Function, scope?: Object, ahead?: Boolean): void;

      /**
       * 属性变化回调函数，可重载做后续处理
       * @param event 属性变化事件
       * @example //event格式：
       * {
       * 	property: 'name',//发生变化的属性
       * 	oldValue: 'oldValue',//旧值
       * 	newValue: 'newValue',''新值
       * 	data: data//发生变化的data
       * }
       *
       */
      onPropertyChanged(event: Object): void;

      /**
       * 当前选中Tab对象变化时回调，可重载做后续处理
       * @param oldTab 旧页签
       * @param newTab 新选中的页签
       * @example // func参数
       * function (oldTab, newTab){
       *
       * };
       */
      onTabChanged(Func: Function): void;

      /**
       * 关闭Tab页签回调函数，可重载做后续处理
       * @param tab 被关闭的页签
       * @param index 索引
       * @example // func参数
       * function (tab, index){
       *
       * };
       */
      onTabClosed(Func: Function): void;

      /**
       * 关闭Tab页签时回调函数，可重载做后续处理
       * @param tab 被关闭的页签
       * @param index 索引
       * @example // func参数
       * function (tab, index){
       *
       * };
       */
      onTabClosing(Func: Function): void;

      /**
       * 删除指定的Tab
       * @param tab tab Tab对象，或整数类型的索引，或页签文字
       */
      remove(tab: Object | Number | String): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.tabView#ump ump}
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 选中指定的Tab
       * @param tab Tab对象，或整数类型的索引，或页签文字
       */
      select(tab: Object | Number | String): void;

      /**
       * 根据索引选中指定的Tab
       * @param index 索引
       */
      select(index: Number): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: Boolean, iconUrl?: String): void;

      /**
       * 根据标题找到组件设置焦点
       * @param tab Tab对象
       */
      setFocus(tab: Object): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: Number): void;

      /**
       * 设置提示插入位置颜色
       * @param color
       */
      setInsertColor(color: String): void;

      /**
       * 设置页签文字颜色
       * @param color
       */
      setLabelColor(color: String): void;

      /**
       * 设置页签文字字体
       * @param font
       */
      setLabelFont(font: String): void;

      /**
       * 设置页签是否可拖拽移动改变显示顺序，默认值为true
       * @param v
       */
      setMovable(v: Boolean): void;

      /**
       * 设置移动时的页签背景色
       * @param color
       */
      setMoveBackground(color: String): void;

      /**
       * 设置页签选中线条背景色
       * @param color
       */
      setSelectBackground(color: String): void;

      /**
       * 设置页签选中的线条宽度，默认值为3
       * @param width
       */
      setSelectWidth(width: Number): void;

      /**
       * 设置页签背景色
       * @param color
       */
      setTabBackground(color: string): void;

      /**
       * 设置页签间隔，默认值为1
       * @param  v
       */
      setTabGap(v: Number): void;

      /**
       * 设置页签间隔，默认值为1
       * @param v
       */
      setTabGap(v: Number): void;

      /**
       * 设置页签高度
       * @param v
       */
      setTabHeight(v: Number): void;

      /**
       * 设置页签位置，可用值有：top|bottom|left|right|left-vertical|right-vertical，默认值为top
       * @param v
       */
      setTabPosition(v: String): void;

      /**
       * 设置组件水平平移(滚动)值
       * @param x 水平平移(滚动)值
       */
      setTranslateX(x: Number): void;

      /**
       * 设置组件垂直平移(滚动)值
       * @param y 垂直平移(滚动)值
       */
      setTranslateY(y: Number): void;

      /**
       * 设置布局宽度
       * @param width
       */
      setWidth(width: Number): void;

      /**
       * 获取或设置水平平移(滚动)值，没有参数时相当于{@link widget.TabView#getTranslateX getTranslateX}，有参数时相当于{@link ht.widget.TabView#setTranslateX setTranslateX}
       * @param {Number} value 平移(滚动)值
       */
      tx(value?: Number): void;

      /**
       * 获取或设置垂直平移(滚动)值，没有参数时相当于{@link widget.TabView#getTranslateY getTranslateY}，有参数时相当于{@link ht.widget.TabView#setTranslateY setTranslateY}
       * @param {Number} value 平移(滚动)值
       */
      ty(value?: Number): void;

      /**
       * 删除自身属性变化事件监听器，{@link  widget.TabView#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link  widget.TabView#removePropertyChangeListener removePropertyChangeListener}
       */
      ump(listener: Function, scope?: any): void;

      /**
       * 刷新组件
       */
      validate(): void;
    }

    /**
     * new Toolbar(items)
     * 工具条组件，提供按钮等组件的水平摆放功能
     * @param {Array} items 配置json，详细内容可以参考Toolbar手册
     * @constructor
     */
    export class Toolbar {
      constructor(items: Object[]);
      /**
       * 在指定index位置插入新元素，index为空代表插入到最后
       * @param item 监听器函数
       * @param index 监听器函数域
       */
      addItem(item: Object, index?: Number): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.Toolbar#mp mp}
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 将组件加入到指定的DOM元素底下，不指定则加入到 document.body 下
       * @param parentNode DOM元素,默认为 document.body
       */
      addToDOM(parentNode?: HTMLElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 绘制元素，并返回该元素所占的宽度值
       * @param g 画笔对象
       * @param item 元素
       * @param x x坐标
       * @param height 绘制的高度
       * @return 宽度值
       */
      drawItem(
        g: CanvasRenderingContext2D,
        item: Object,
        x: Number,
        height: Number,
      ): Number;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.ToolBar#fp fp}
       */
      firePropertyChange(property: String, oldValue: any, newValue: any): void;

      /**
       * @param kind
       */
      fireViewEvent(kind: String): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.ToolBar#firePropertyChange firePropertyChange}
       */
      fp(property: String, oldValue: any, newValue: any): void;

      /**
       * 获取类声明(构造函数)
       * @return 类声明(构造函数)
       */
      getClass(): Function;

      /**
       * 获取类全名
       * @return 类全名
       */
      getClassName(): String;

      /**
       * 获取当前选中toolItem
       * @return
       */
      getCurrentItem(): Object;

      /**
       * 获取被禁用组件的div
       * @return 被禁用组件的div
       */
      getDisabledDiv(): HTMLElement;

      /**
       * 获取布局高度
       * @return 布局高度
       */
      getHeight(): Number;

      /**
       *  获取指定id对应的元素，id值为item元素上的id属性定义
       * @param id
       * @return 菜单项对象
       */
      getItemById(id: Object): Object;

      /**
       * 获取元素之间的间距
       * @return 元素之间的间距
       */
      getItemGap(): Number;

      /**
       * 获取toolBar的所有item的信息
       * @return toolBar的所有item的信息
       */
      getItemInfos(): Object[];

      /**
       * 获取工具条元素数组
       * @return
       */
      getItems(): Object[];

      /**
       * 获取文本颜色，可重载自定义
       * @param item
       * @return 标题文字颜色
       */
      getLabelColor(item: Object): String;

      /**
       * 获取文本字体，可重载自定义
       * @return 标题文本字体
       */
      getLabelFont(): String;

      /**
       * 获取文本选中颜色
       * @return
       */
      getLabelSelectColor(): String;

      /**
       * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
       * @param event 事件对象
       * @return
       * @see {@link widget.Toolbar#lp lp}
       */
      getLogicalPoint(e: Event): Object;

      /**
       * 获取选中元素的背景色，可重载自定义
       * @return
       */
      getSelectBackground(): String;

      /**
       * 获取分割线的颜色
       * @return 分割线的颜色
       */
      getSeparatorColor(): String;

      getSumWidth(): Number;

      /**
       * 获取父类声明(构造函数)
       * @return 父类声明(构造函数)
       */
      getSuperClass(): Function;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @param e 鼠标或Touch事件对象
       * @returns  toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(e: Event): String;

      /**
       * 获取水平平移值
       * @return 水平平移值
       * @see {@link widget.ToolBar#tx tx}
       */
      getTranslateX(): Number;

      /**
       * 根据id获取对应item元素值
       * @param id id值
       * @return 对应item元素值
       * @see {@link widget.ToolBar#v v}
       */
      getValue(id: String): String;

      /**
       * 获取组件的根层div
       * @return 组件的根层div
       */
      getView(): HTMLElement;

      /**
       * 获取布局宽度
       * @return 布局宽度
       */
      getWidth(): Number;

      /**
       * 点击事件回调，可重载自定义
       * @param fun 回调函数，可返回点击选中的item，鼠标事件mouseEvent
       */
      handleClick(fun: Function): void;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.toolBar#iv iv}
       */
      invalidate(delay: Number): void;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return 组件是否处于不可用状态
       */
      isDisabled(): Boolean;

      /**
       * 获取工具条是否可滚动，默认值为fasle
       * @return 工具条是否可滚动
       */
      isScrollable(): Boolean;

      /**
       * 获取是否向右对齐排布，默认为false
       * @return 是否向右对齐排布
       */
      isStickToRight(): Boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.toolBar#invalidate invalidate}
       */
      iv(delay: Number): void;

      /**
       * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
       * @param event 数据模型
       * @return 组件中的逻辑坐标
       * @see {@link widget.toolBar#getLogicalPoint getLogicalPoint}
       */
      lp(event: Object): Object;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.toolBar#addPropertyChangeListener addPropertyChangeListener}
       */
      mp(listener: Function, scope?: Object, ahead?: Boolean): void;

      /**
       * 属性变化回调函数，可重载做后续处理
       * @param event 属性变化事件
       * @example //event格式：
       * {
       * 	property: 'name',//发生变化的属性
       * 	oldValue: 'oldValue',//旧值
       * 	newValue: 'newValue',''新值
       * 	data: data//发生变化的data
       * }
       *
       */
      onPropertyChanged(event: Object): void;

      /**
       * 重绘组件
       */
      redraw(): void;

      /**
       * 删除指定元素
       * @param item
       */
      removeItem(item: Object): void;

      /**
       * 根据id删除指定元素
       * @param {Object} id
       */
      removeItemById(id: String): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: Boolean, iconUrl?: String): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: Number): void;

      /**
       * 设置元素之间的间距
       * @param gap
       */
      setItemGap(gap: Number): void;

      /**
       * 设置工具条元素数组
       * @param items
       */
      setItems(items: Object[]): void;

      /**
       * 设置文本颜色
       * @param Color 颜色值
       */
      setLabelColor(Color: String): void;

      /**
       * 设置文本字体
       * @param font 字体
       */
      setLabelFont(font: String): void;

      /**
       * 设置文本选中颜色
       * @param color 文本选中颜色
       */
      setLabelSelectColor(color: String): void;

      /**
       * 设置文本选中背景颜色
       * @param Color 颜色值
       */
      setSelectBackground(Color: String): void;

      /**
       * 设置分割线颜色
       * @param Color 颜色值
       */
      setSeparatorColor(Color: String): void;

      /**
       * 设置是否向右对齐排布，默认为false
       * @param v
       */
      setStickToRight(v: Boolean): void;

      /**
       * 设置拓扑水平平移(滚动)值
       * @param x 水平平移(滚动)值
       */
      setTranslateX(x: Number): void;

      /**
       * 根据id设置对应item元素值，比如input的值
       * @param id 元素id
       * @param value 值
       * @see {@link widget.Toolbar#v v}
       */
      setValue(id: Object, value: Object): Object;

      /**
       * 设置布局宽度
       * @param width 宽度
       */
      setWidth(width: Number): void;

      /**
       * 获取或设置水平平移(滚动)值，没有参数时相当于{@link widget.Toolbar#getTranslateX getTranslateX}，有参数时相当于{@link ht.widget.Toolbar#setTranslateX setTranslateX}
       * @param value 平移(滚动)值
       */
      tx(value: Number): void;

      /**
       * 删除自身属性变化事件监听器，{@link ht.widget.Toolbar#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.Toolbar#removePropertyChangeListener removePropertyChangeListener}
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 根据id获取或设置对应item元素值，比如input的值；没有参数时相当于{@link ht.widget.Toolbar#getValue getValue}，有参数时相当于{@link ht.widget.Toolbar#setValue setValue}
       * @param id 元素id
       * @param value 值
       * @return {Object}
       */
      v(id?: Object, value?: Object): Object;

      /**
       * 立刻刷新组件
       */
      validate(): void;
    }

    /**
     * new Button()
     * 按钮
     * @constructor
     */
    export class Button {
      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.Button#mp mp}
       */
      addPropertyChangeListener(
        listener: Function,
        scope: Object,
        ahead: Boolean,
      ): void;

      /**
       * 将组件加入到指定的DOM元素底下，不指定则加入到 document.body 下
       * @param parentNode 父DOM,默认为 document.body
       */
      addToDOM(parentNode?: HTMLElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.Button#fp fp}
       */
      firePropertyChange(property: String, oldValue: any, newValue: any): void;

      /**
       * @param kind
       */
      fireViewEvent(kind: String): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.Button#firePropertyChange firePropertyChange}
       */
      fp(property: String, oldValue: any, newValue: any): void;

      /**
       * 获取按钮背景颜色
       * @return 按钮背景颜色
       */
      getBackground(): String;

      /**
       * 获取按钮边框色
       * @return 颜色值
       */
      getBorderColor(): String;

      /**
       * 获取类声明(构造函数)
       * @return 类声明(构造函数)
       */
      getClass(): Function;

      /**
       * 获取类全名
       * @return 类全名
       */
      getClassName(): String;

      /**
       * 获取按钮当前背景颜色
       * @return 颜色值
       */
      getCurrentBackground(): String;

      /**
       * 获取按钮当前边框颜色
       * @return 颜色值
       */
      getCurrentBorderColor(): String;

      /**
       * 获取被禁用组件的div
       * @return 被禁用组件的div
       */
      getDisabledDiv(): HTMLElement;

      /**
       * 获取布局高度
       * @return 布局高度
       */
      getHeight(): Number;

      /**
       * 获取按钮对象对应的icon图标
       * @return icon图标
       */
      getIcon(): String;

      /**
       * 获取按钮对象对应的icon图标颜色
       * @return icon图标颜色
       */
      getIconColor(): String;

      /**
       * 获取文字标签
       * @return 文字标签
       */
      getLabel(): String;

      /**
       * 获取按钮对象的文本颜色
       * @return 按钮对象的文本颜色
       */
      getLabelColor(): String;

      /**
       * 获取按钮对象的文本字体，可重载自定义
       * @return 按钮对象的文本字体
       */
      getLabelFont(): String;

      /**
       * 获取选中文本的颜色
       * @return 选中文本的颜色
       */
      getLabelSelectColor(): String;

      /**
       * 获取布局方式，默认为vertical或v，可设置为horizontal或h
       * @return 布局方式
       */
      getOrientation(): String;

      /**
       * 获取标题选中背景色
       * @return 标题选中背景色
       */
      getSelectBackground(): String;

      /**
       * 获取父类声明(构造函数)
       * @return 父类声明(构造函数)
       */
      getSuperClass(): Function;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @returns  toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(): String;

      /**
       * 按钮元素值
       * @return 按钮元素值
       * @see {@link widget.Button#v v}
       */
      getValue(): String;

      /**
       * 获取组件的根层div
       * @return 组件的根层div
       */
      getView(): HTMLElement;

      /**
       * 获取布局宽度
       * @return 布局宽度
       */
      getWidth(): Number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.toolBar#iv iv}
       */
      invalidate(delay: Number): void;

      /**
       * 获取按钮是否可点击
       * @return
       */
      isClickable(): Boolean;

      /**
       * 获取按钮是否可用
       * @return
       */
      isDisabled(): Boolean;

      /**
       * 获取按钮处于可按状态
       * @return
       */
      isPressed(): Boolean;

      /**
       * 获取按钮选择状态
       * @return
       */
      isSelected(): Boolean;

      /**
       * 获取按钮是否打开开关
       * @return
       */
      isTogglable(): Boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.Button#invalidate invalidate}
       */
      iv(delay: Number): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.Button#addPropertyChangeListener addPropertyChangeListener}
       */
      mp(listener: Function, scope?: Object, ahead?: Boolean): void;

      /**
       * 按钮点击事件
       * @param fun 点击事件回调
       */
      onClicked(Fun: Function): void;

      /**
       * 属性变化回调函数，可重载做后续处理
       * @param event 属性变化事件
       * @example //event格式：
       * {
       * 	property: 'name',//发生变化的属性
       * 	oldValue: 'oldValue',//旧值
       * 	newValue: 'newValue',''新值
       * 	data: data//发生变化的data
       * }
       *
       */
      onPropertyChanged(event: Object): void;

      /**
       * 按钮选择事件监听
       * @param fun 事件回调
       */
      onSelectedChanged(fun: Function): void;

      /**
       * 按钮选择事件改变监听
       * @param fun 事件回调
       */
      onSelectedChanged(fun: Function): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 设置按钮背景颜色
       * @param color 颜色
       */
      setBackground(color: String): void;

      /**
       * 设置按钮边框颜色
       * @param color 颜色
       */
      setBorderColor(color: String): void;

      /**
       * 设置按钮是否可点击
       * @param v
       */
      setClickable(v: Boolean): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: Boolean, iconUrl?: String): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: Number): void;

      /**
       * 设置按钮图标
       * @param icon
       */
      setIcon(icon: String): void;

      /**
       * 设置按钮图标颜色
       * @param color
       */
      setIconColor(color: String): void;

      /**
       * 设置按钮文字
       * @param text 颜色值
       */
      setLabel(text: String): void;

      /**
       * 设置按钮文字颜色
       * @param Color 颜色值
       */
      setLabelColor(Color: String): void;

      /**
       * 设置按钮文字字体
       * @param font 字体
       */
      setLabelFont(font: String): void;

      /**
       * 设置按钮选中文字颜色
       * @param Color 颜色值
       */
      setLabelSelectColor(Color: String): void;

      /**
       * 设置布局方式，默认为vertical或v，可设置为horizontal或h
       * @param v 布局方式
       */
      setOrientation(v: String): void;

      /**
       * 设置按钮是否处于按下状态
       * @param value
       */
      setPressed(value: Boolean): void;

      /**
       * 设置按钮选中背景颜色
       * @param Color 颜色值
       */
      setSelectBackground(Color: String): void;

      /**
       * 设置按钮是否处于选中状态
       * @param value
       */
      setSelected(value: Boolean): void;

      /**
       * 设置按钮是否打开开关
       * @return
       */
      setTogglable(value: Boolean): void;

      /**
       * 根据按钮的值
       * @param value
       */
      setValue(value: String): void;

      /**
       * 显示垂直滚动条
       * @param func 过滤器函数
       */
      setWidth(func: Function): void;

      /**
       * 删除自身属性变化事件监听器，{@link widget.ListView#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.ListView#removePropertyChangeListener removePropertyChangeListener}
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 刷新组件
       */
      validate(): void;

      /**
       * 获取button对象的文本字体
       * @return data对象的文本字体
       */
      getLabelFont(): String;
    }

    /**
     * new CheckBox()
     * 复选框
     * @constructor
     */
    export class CheckBox {
      /**
       * 返回数据元素对应的check图标，可重载自定义check图标，该函数在checkMode模式下有效
       * @return 数据元素对应的check图标
       */
      getCheckIcon(): String;

      /**
       * 获取类声明(构造函数)
       * @return 类声明(构造函数)
       */
      getClass(): Function;

      /**
       * 获取类全名
       * @return 类全名
       */
      getClassName(): String;

      /**
       * 获取父类声明(构造函数)
       * @return 父类声明(构造函数)
       */
      getSuperClass(): Function;

      /**
       * 点击事件回调，可重载自定义
       * @param fun 回调函数，可返回点击选中的item，鼠标事件mouseEvent
       */
      handleClick(fun: Function): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.Toolbar#mp mp}
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 将组件加入到指定的DOM元素底下，不指定则加入到 document.body 下
       * @param parentNode DOM元素,默认为 document.body
       */
      addToDOM(parentNode?: HTMLElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.CheckBox#fp fp}
       */
      firePropertyChange(property: String, oldValue: any, newValue: any): void;

      /**
       * @param kind
       */
      fireViewEvent(kind: String): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.CheckBox#firePropertyChange firePropertyChange}
       */
      fp(property: String, oldValue: any, newValue: any): void;

      /**
       * 获取被禁用组件的div
       * @return 被禁用组件的div
       */
      getDisabledDiv(): HTMLElement;

      /**
       * 获取布局高度
       * @return 布局高度
       */
      getHeight(): Number;

      /**
       * 获取单选框对象对应的icon图标
       * @return icon图标
       */
      getIcon(): String;

      /**
       * 获取单选框对象对应的icon图标颜色
       * @return icon图标颜色
       */
      getIconColor(): String;

      /**
       * 获取文字标签
       * @return 文字标签
       */
      getLabel(): String;

      /**
       * 获取单选框对象的文本颜色
       * @return 单选框对象的文本颜色
       */
      getLabelColor(): String;

      /**
       * 获取单选框对象的文本字体，可重载自定义
       * @return 单选框对象的文本字体
       */
      getLabelFont(): String;

      /**
       * 获取间距，默认值为0
       * @return 获取间距
       */
      getPadding(): Number;

      /**
       * 设置间距，默认值为0
       * @param v 间距
       */
      setPadding(v: Number): void;

      /**
       * 获取单选框对象对应的icon图标颜色
       * @return icon图标颜色
       */
      getPressBackground(): String;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @returns  toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(): String;

      /**
       * 单选框元素值
       * @return 单选框元素值
       * @see {@link widget.CheckBox#v v}
       */
      getValue(): String;

      /**
       * 获取组件的根层div
       * @return 组件的根层div
       */
      getView(): HTMLElement;

      /**
       * 获取布局宽度
       * @return 布局宽度
       */
      getWidth(): Number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.toolBar#iv iv}
       */
      invalidate(delay: Number): void;

      /**
       * 获取单选框是否可用
       * @return
       */
      isDisabled(): Boolean;

      /**
       * 获取单选框处于可按状态
       * @return
       */
      isPressed(): Boolean;

      /**
       * 获取单选框选择状态
       * @return
       */
      isSelected(): Boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.CheckBox#invalidate invalidate}
       */
      iv(delay: Number): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.CheckBox#addPropertyChangeListener addPropertyChangeListener}
       */
      mp(listener: Function, scope?: Object, ahead?: Boolean): void;

      /**
       * 单选框点击事件
       * @param fun 点击事件回调
       */
      onClicked(Fun: Function): void;

      /**
       * 属性变化回调函数，可重载做后续处理
       * @param event 属性变化事件
       * @example //event格式：
       * {
       * 	property: 'name',//发生变化的属性
       * 	oldValue: 'oldValue',//旧值
       * 	newValue: 'newValue',''新值
       * 	data: data//发生变化的data
       * }
       *
       */
      onPropertyChanged(event: Object): void;

      /**
       * 单选框选择事件监听
       * @param fun 事件回调
       */
      onSelectedChanged(fun: Function): void;

      /**
       * 单选框选择事件改变监听
       * @param fun 事件回调
       */
      onSelectedChanged(fun: Function): void;

      /**
       * 单选框值改变监听
       * @param fun 事件回调
       */
      onValueChanged(fun: Function): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: Boolean, iconUrl?: String): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: Number): void;

      /**
       * 设置按钮图标
       * @param icon
       */
      setIcon(icon: String): void;

      /**
       * 设置按钮图标颜色
       * @param color
       */
      setIconColor(color: String): void;

      /**
       * 设置按钮文字
       * @param text 颜色值
       */
      setLabel(text: String): void;

      /**
       * 设置按钮文字颜色
       * @param Color 颜色值
       */
      setLabelColor(Color: String): void;

      /**
       * 设置按钮文字字体
       * @param font 字体
       */
      setLabelFont(font: String): void;

      /**
       * 设置间距，默认值为0
       * @param v 间距
       */
      setPadding(v: Number): void;

      /**
       * 设置按下背景颜色
       * @param color
       */
      setPressBackground(color: String): void;

      /**
       * 设置按钮是否处于按下状态
       * @param value
       */
      setPressed(value: Boolean): void;

      /**
       * 设置按钮是否处于选中状态
       * @param value
       */
      setSelected(value: Boolean): void;

      /**
       * 设置按钮的值
       * @param value
       */
      setValue(value: String): void;

      /**
       * 显示垂直滚动条
       * @param func 过滤器函数
       */
      setWidth(func: Function): void;

      /**
       * 删除自身属性变化事件监听器，{@link widget.ListView#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.ListView#removePropertyChangeListener removePropertyChangeListener}
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 刷新组件
       */
      validate(): void;
    }

    /**
     * new TextField()
     * 文本框
     * @constructor
     */
    export class TextField {
      /**
       * 获取类声明(构造函数)
       * @return 类声明(构造函数)
       */
      getClass(): Function;

      /**
       * 获取类全名
       * @return 类全名
       */
      getClassName(): String;

      /**
       * 获取父类声明(构造函数)
       * @return 父类声明(构造函数)
       */
      getSuperClass(): Function;

      /**
       * 获取文本框类型
       * @return 文本框类型
       */
      getType(): String;

      /**
       * 设置文本框类型，该值设置到原生elemenet的type属性，如number类型只允许输入数字
       * @param type 文本框类型
       */
      setType(type: String): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.Toolbar#mp mp}
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 将组件加入到指定的DOM元素底下，不指定则加入到 document.body 下
       * @param parentNode DOM元素,默认为 document.body
       */
      addToDOM(parentNode?: HTMLElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.TextField#fp fp}
       */
      firePropertyChange(property: String, oldValue: any, newValue: any): void;

      /**
       * @param kind
       */
      fireViewEvent(kind: String): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.TextField#firePropertyChange firePropertyChange}
       */
      fp(property: String, oldValue: any, newValue: any): void;

      /**
       * 获取按钮背景颜色
       * @return 按钮背景颜色
       */
      getBackground(): String;

      /**
       * 获取边框
       * @return 边框
       */
      getBorder(): String;

      /**
       * 获取颜色
       * @return 颜色
       */
      getColor(): String;

      /**
       * 获取被禁用组件的div
       * @return 被禁用组件的div
       */
      getDisabledDiv(): HTMLElement;

      /**
       * 获取文本框对象的文本字体，可重载自定义
       * @return 按钮对象的文本字体
       */
      getFont(): String;

      /**
       * 获取布局高度
       * @return 布局高度
       */
      getHeight(): Number;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @returns  toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(): String;

      /**
       * 文本框元素值
       * @return 单选框元素值
       * @see {@link widget.TextField#v v}
       */
      getValue(): String;

      /**
       * 获取组件的根层div
       * @return 组件的根层div
       */
      getView(): HTMLElement;

      /**
       * 获取布局宽度
       * @return 布局宽度
       */
      getWidth(): Number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.TextField#iv iv}
       */
      invalidate(delay: Number): void;

      /**
       * 获取文本框是否可用
       * @return
       */
      isDisabled(): Boolean;

      /**
       * 获取文本框是否可编辑
       * @return
       */
      isEditable(): Boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.TextField#invalidate invalidate}
       */
      iv(delay: Number): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.TextField#addPropertyChangeListener addPropertyChangeListener}
       */
      mp(listener: Function, scope?: Object, ahead?: Boolean): void;

      /**
       * 属性变化回调函数，可重载做后续处理
       * @param event 属性变化事件
       * @example //event格式：
       * {
       * 	property: 'name',//发生变化的属性
       * 	oldValue: 'oldValue',//旧值
       * 	newValue: 'newValue',''新值
       * 	data: data//发生变化的data
       * }
       *
       */
      onPropertyChanged(event: Object): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 设置文本框背景颜色
       * @param color 颜色
       */
      setBackground(color: String): void;

      /**
       * 设置文本框边框
       * @param v
       */
      setBorder(v: String): void;

      /**
       * 设置文本框颜色
       * @param color 颜色
       */
      setColor(color: String): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: Boolean, iconUrl?: String): void;

      /**
       * 设置文本框是否可编辑
       * @param v
       */
      setEditable(v: Boolean): void;

      /**
       * 文本框设置焦点
       */
      setFocus(): void;

      /**
       * 设置文本框字体
       * @param font 字体
       */
      setFont(font: String): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: Number): void;

      /**
       * 设置文本框文字
       * @param text
       */
      setText(text: String): void;

      /**
       * 设置元素值
       * @param value 值
       */
      setValue(value: Object): Object;

      /**
       * 设置布局宽度
       * @param width 宽度
       */
      setWidth(width: Number): void;

      /**
       * 删除自身属性变化事件监听器，{@link ht.widget.TextField#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.TextField#removePropertyChangeListener removePropertyChangeListener}
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 立刻刷新组件
       */
      validate(): void;
    }

    /**
     * new TextArea()
     * 文本区
     * @constructor
     */
    export class TextArea {
      /**
       * 获取类声明(构造函数)
       * @return 类声明(构造函数)
       */
      getClass(): Function;

      /**
       * 获取类全名
       * @return 类全名
       */
      getClassName(): String;

      /**
       * 获取父类声明(构造函数)
       * @return 父类声明(构造函数)
       */
      getSuperClass(): Function;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.TextArea#mp mp}
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 将组件加入到指定的DOM元素底下，不指定则加入到 document.body 下
       * @param parentNode DOM元素,默认为 document.body
       */
      addToDOM(parentNode?: HTMLElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.TextArea#fp fp}
       */
      firePropertyChange(property: String, oldValue: any, newValue: any): void;

      /**
       * @param kind
       */
      fireViewEvent(kind: String): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.TextArea#firePropertyChange firePropertyChange}
       */
      fp(property: String, oldValue: any, newValue: any): void;

      /**
       * 获取按钮背景颜色
       * @return 按钮背景颜色
       */
      getBackground(): String;

      /**
       * 获取边框
       * @return 边框
       */
      getBorder(): String;

      /**
       * 获取颜色
       * @return 颜色
       */
      getColor(): String;

      /**
       * 获取被禁用组件的div
       * @return 被禁用组件的div
       */
      getDisabledDiv(): HTMLElement;

      /**
       * 获取文本区对象的文本字体，可重载自定义
       * @return 按钮对象的文本字体
       */
      getFont(): String;

      /**
       * 获取布局高度
       * @return 布局高度
       */
      getHeight(): Number;

      /**
       * 获取文本内容
       */
      getText(): String;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @returns  toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(): String;

      /**
       * 文本区元素值
       * @return 单选框元素值
       * @see {@link widget.TextArea#v v}
       */
      getValue(): String;

      /**
       * 获取组件的根层div
       * @return 组件的根层div
       */
      getView(): HTMLElement;

      /**
       * 获取布局宽度
       * @return 布局宽度
       */
      getWidth(): Number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.TextArea#iv iv}
       */
      invalidate(delay: Number): void;

      /**
       * 获取文本区是否可用
       * @return
       */
      isDisabled(): Boolean;

      /**
       * 获取文本区是否可编辑
       * @return
       */
      isEditable(): Boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.TextArea#invalidate invalidate}
       */
      iv(delay: Number): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.TextArea#addPropertyChangeListener addPropertyChangeListener}
       */
      mp(listener: Function, scope?: Object, ahead?: Boolean): void;

      /**
       * 属性变化回调函数，可重载做后续处理
       * @param event 属性变化事件
       * @example //event格式：
       * {
       * 	property: 'name',//发生变化的属性
       * 	oldValue: 'oldValue',//旧值
       * 	newValue: 'newValue',''新值
       * 	data: data//发生变化的data
       * }
       *
       */
      onPropertyChanged(event: Object): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 设置文本区背景颜色
       * @param color 颜色
       */
      setBackground(color: String): void;

      /**
       * 设置文本区边框
       * @param v
       */
      setBorder(v: String): void;

      /**
       * 设置文本区颜色
       * @param color 颜色
       */
      setColor(color: String): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: Boolean, iconUrl?: String): void;

      /**
       * 设置文本区是否可编辑
       * @param v
       */
      setEditable(v: Boolean): void;

      /**
       * 文本区设置焦点
       */
      setFocus(): void;

      /**
       * 设置文本区字体
       * @param font 字体
       */
      setFont(font: String): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: Number): void;

      /**
       * 设置文本框文字
       * @param text
       */
      setText(text: String): void;

      /**
       * 设置元素值
       * @param value 值
       */
      setValue(value: Object): Object;

      /**
       * 设置布局宽度
       * @param width 宽度
       */
      setWidth(width: Number): void;

      /**
       * 删除自身属性变化事件监听器，{@link ht.widget.TextArea#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.TextArea#removePropertyChangeListener removePropertyChangeListener}
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 立刻刷新组件
       */
      validate(): void;
    }

    /**
     * new Image()
     * 图片
     * @constructor
     */
    export class Image {
      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.Image#mp mp}
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 将组件加入到指定的DOM元素底下，不指定则加入到 document.body 下
       * @param parentNode DOM元素,默认为 document.body
       */
      addToDOM(parentNode?: HTMLElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      /**
       * 绘制行内容，可重载自定义，默认调用drawIcon和drawLabel，如果返回值为HTML元素，则使用HTML元素当作Renderer
       * @param g 画笔对象
       * @param data 数据元素
       * @param selected 数据元素是否选中
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param width 绘制的宽度
       * @param height 绘制的高度
       */
      drawImage(
        g: CanvasRenderingContext2D,
        data: Object,
        selected: Boolean,
        x: Number,
        y: Number,
        width: Number,
        height: Number,
      ): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.Image#fp fp}
       */
      firePropertyChange(property: String, oldValue: any, newValue: any): void;

      /**
       * @param kind
       */
      fireViewEvent(kind: String): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.Image#firePropertyChange firePropertyChange}
       */
      fp(property: String, oldValue: any, newValue: any): void;

      /**
       * 获取图片背景
       * @return 图片背景
       */
      getBackground(): String;

      /**
       * 获取图片边框颜色
       * @return 颜色
       */
      getBorderColor(): String;

      /**
       * 获取类声明(构造函数)
       * @return 类声明(构造函数)
       */
      getClass(): Function;

      /**
       * 获取类全名
       * @return 类全名
       */
      getClassName(): String;

      /**
       * 获取被禁用组件的div
       * @return 被禁用组件的div
       */
      getDisabledDiv(): HTMLElement;

      /**
       * 获取布局高度
       * @return 布局高度
       */
      getHeight(): Number;

      /**
       * 获取icon图标，可重载自定义
       * @param data 数据元素
       * @return data对象对应的icon图标
       */
      getIcon(data: Object): String;

      /**
       * 获取图片对应的icon图标颜色
       * @return icon图标颜色
       */
      getIconColor(): String;

      /**
       * 获取图片拉伸方式，默认值为centerUniform
       * @return 图片拉伸方式
       */
      getStretch(): String;

      /**
       * 获取父类声明(构造函数)
       * @return 父类声明(构造函数)
       */
      getSuperClass(): Function;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @returns  toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(): String;

      /**
       * 获取组件的根层div
       * @return 组件的根层div
       */
      getView(): HTMLElement;

      /**
       * 获取布局宽度
       * @return 布局宽度
       */
      getWidth(): Number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.Image#iv iv}
       */
      invalidate(delay: Number): void;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return 组件是否处于不可用状态
       */
      isDisabled(): Boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.Image#invalidate invalidate}
       */
      iv(delay: Number): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.Image#addPropertyChangeListener addPropertyChangeListener}
       */
      mp(listener: Function, scope?: Object, ahead?: Boolean): void;

      /**
       * 图片点击事件
       * @param fun 点击事件回调
       */
      onClicked(Fun: Function): void;

      /**
       * 属性变化回调函数，可重载做后续处理
       * @param event 属性变化事件
       * @example //event格式：
       * {
       * 	property: 'name',//发生变化的属性
       * 	oldValue: 'oldValue',//旧值
       * 	newValue: 'newValue',''新值
       * 	data: data//发生变化的data
       * }
       *
       */
      onPropertyChanged(event: Object): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 设置图片背景颜色
       * @param color 颜色
       */
      setBackground(color: String): void;

      /**
       * 设置图片边框颜色
       * @param color 颜色
       */
      setBorderColor(color: String): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: Boolean, iconUrl?: String): void;

      /**
       * 图片设置焦点
       */
      setFocus(): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: Number): void;

      /**
       * 设置图片图标
       * @param icon
       */
      setIcon(icon: String): void;

      /**
       * 设置图片图标颜色
       * @param color
       */
      setIconColor(color: String): void;

      /**
       * 设置图片拉伸方式
       * @param stretch
       * fill图片填充满整个矩形区域，如果图片宽高比例和矩形不一致会导致图片拉伸失真
       * uniform图片始终保持原始宽高比例不变化，并尽量填充满矩形区域
       * centerUniform当矩形区域大于图片尺寸时图片以原始大小绘制在中心位置，空间不够时采用uniform的绘制方式
       */
      setStretch(stretch: String): void;

      /**
       * 设置布局宽度
       * @param width 宽度
       */
      setWidth(width: Number): void;

      /**
       * 删除自身属性变化事件监听器，{@link ht.widget.Image#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.Image#removePropertyChangeListener removePropertyChangeListener}
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 立刻刷新组件
       */
      validate(): void;
    }

    /**
     * new Slider()
     * 图片
     * @constructor
     */
    export class Slider {
      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.Slider#mp mp}
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 将组件加入到指定的DOM元素底下，不指定则加入到 document.body 下
       * @param parentNode DOM元素,默认为 document.body
       */
      addToDOM(parentNode?: HTMLElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.Slider#fp fp}
       */
      firePropertyChange(property: String, oldValue: any, newValue: any): void;

      /**
       * @param kind
       */
      fireViewEvent(kind: String): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.Slider#firePropertyChange firePropertyChange}
       */
      fp(property: String, oldValue: any, newValue: any): void;

      /**
       * 获取滑动条背景
       * @return 滑动条背景
       */
      getBackground(): String;

      /**
       * 获取滑动条按钮
       * @return 滑动条按钮
       */
      getButton(): Object;

      /**
       * 获取滑动条按钮宽度
       * @return 滑动条按钮宽度
       */
      getButtonWidth(): Number;

      /**
       * 获取类声明(构造函数)
       * @return 类声明(构造函数)
       */
      getClass(): Function;

      /**
       * 获取类全名
       * @return 类全名
       */
      getClassName(): String;

      /**
       * 获取被禁用组件的div
       * @return 被禁用组件的div
       */
      getDisabledDiv(): HTMLElement;

      /**
       * 获取布局高度
       * @return 布局高度
       */
      getHeight(): Number;

      /**
       * 获取滑动条左边背景颜色
       * @return 滑动条左边背景颜色
       */
      getLeftBackground(): String;

      /**
       * 获取滑动条最大值
       * @return 滑动条最大值
       */
      getMax(): Number;

      /**
       * 获取滑动条最小值
       * @return 滑动条最小值
       */
      getMin(): Number;

      /**
       * 获取滑动条内边距
       * @return 滑动条内边距
       */
      getPadding(): Number;

      /**
       * 获取滑动条步进
       * @return 滑动条步进
       */
      getStep(): Number;

      /**
       * 获取父类声明(构造函数)
       * @return 父类声明(构造函数)
       */
      getSuperClass(): Function;

      /**
       * 获取滑动条厚度
       * @return 滑动条厚度
       */
      getThickness(): Number;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @returns  toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(): String;

      /**
       * @return 对应item元素值
       */
      getValue(): String;

      /**
       * 获取组件的根层div
       * @return 组件的根层div
       */
      getView(): HTMLElement;

      /**
       * 获取布局宽度
       * @return 布局宽度
       */
      getWidth(): Number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.Slider#iv iv}
       */
      invalidate(delay: Number): void;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return 组件是否处于不可用状态
       */
      isDisabled(): Boolean;

      /**
       * 组件是否立即使用
       * @return 组件是否立即使用
       */
      isInstant(): Boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.Slider#invalidate invalidate}
       */
      iv(delay: Number): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.Slider#addPropertyChangeListener addPropertyChangeListener}
       */
      mp(listener: Function, scope?: Object, ahead?: Boolean): void;

      /**
       * 组件值改变之前回调
       * @param fun
       */
      onBeginValueChanged(Fun: Function): void;

      /**
       * 组件值改变之后回调
       * @param fun
       */
      onEndValueChanged(Fun: Function): void;

      /**
       * 属性变化回调函数，可重载做后续处理
       * @param event 属性变化事件
       * @example //event格式：
       * {
       * 	property: 'name',//发生变化的属性
       * 	oldValue: 'oldValue',//旧值
       * 	newValue: 'newValue',''新值
       * 	data: data//发生变化的data
       * }
       *
       */
      onPropertyChanged(event: Object): void;

      /**
       * 组件值改变回调
       * @param fun
       */
      onValueChanged(Fun: Function): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 设置滑动条背景颜色
       * @param color 颜色
       */
      setBackground(color: String): void;

      /**
       * 设置滑动条按钮
       * @param button 按钮
       */
      setButton(button: Object): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: Boolean, iconUrl?: String): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: Number): void;

      /**
       * 设置组件是否立即使用
       * @param v
       */
      setInstant(v: Boolean): void;

      /**
       * 设置滑动条左边背景颜色
       * @param 颜色
       */
      setLeftBackground(color: String): void;

      /**
       * 设置滑动条最大值
       * @param v 滑动条最大值
       */
      setMax(v: Number): void;

      /**
       * 设置滑动条最小值
       * @param v 滑动条最小值
       */
      setMin(v: Number): void;

      /**
       * 设置滑动条内边距
       * @param v 滑动条内边距
       */
      setPadding(v: Number): void;

      /**
       * 设置滑动条内边距
       * @param v 滑动条内边距
       */
      setPadding(v: Number): void;

      /**
       * 设置滑动条步进
       * @param 滑动条步进
       */
      setStep(v: Number): void;

      /**
       * 设置滑动条厚度
       * @param v 滑动条厚度
       */
      setThickness(v: Number): void;

      /**
       * 设置元素值
       * @param value 值
       */
      setValue(value: Object): void;

      /**
       * 设置布局宽度
       * @param width 宽度
       */
      setWidth(width: Number): void;

      /**
       * 删除自身属性变化事件监听器，{@link ht.widget.Slider#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.Slider#removePropertyChangeListener removePropertyChangeListener}
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 立刻刷新组件
       */
      validate(): void;
    }

    /**
     * new ComboBox()
     * 组合框
     * @constructor
     */
    export class ComboBox {
      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.ComboBox#mp mp}
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 将组件加入到指定的DOM元素底下，不指定则加入到 document.body 下
       * @param parentNode DOM元素,默认为 document.body
       */
      addToDOM(parentNode?: HTMLElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 关闭下拉框
       */
      close(): void;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 绘制行内容，可重载自定义，默认调用drawIcon和drawLabel，如果返回值为HTML元素，则使用HTML元素当作Renderer
       * @param g 画笔对象
       * @param data 数据元素
       * @param selected 数据元素是否选中
       * @param x 左上角x坐标
       * @param y 左上角y坐标
       * @param height 绘制的高度
       */
      drawRow(
        g: CanvasRenderingContext2D,
        data: Object,
        selected: Boolean,
        x: Number,
        y: Number,
        height: Number,
      ): void;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.ComboBox#fp fp}
       */
      firePropertyChange(property: String, oldValue: any, newValue: any): void;

      /**
       * @param kind
       */
      fireViewEvent(kind: String): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.ComboBox#firePropertyChange firePropertyChange}
       */
      fp(property: String, oldValue: any, newValue: any): void;

      /**
       * 获取背景颜色
       * @return 背景颜色
       */
      getBackground(): String;

      /**
       * 获取类声明(构造函数)
       * @return 类声明(构造函数)
       */
      getClass(): Function;

      /**
       * 获取类全名
       * @return 类全名
       */
      getClassName(): String;

      /**
       * 获取被禁用组件的div
       * @return 被禁用组件的div
       */
      getDisabledDiv(): HTMLElement;

      /**
       * 获取下拉框背景颜色
       * @return 背景颜色
       */
      getDropDownBackground(): String;

      /**
       * 获取下拉框图标
       * @return 下拉框图标
       */
      getDropDownIcon(): String;

      /**
       * 获取下拉框宽度
       * @return 下拉框宽度
       */
      getDropDownWidth(): Number;

      /**
       * 获取布局高度
       * @return 布局高度
       */
      getHeight(): Number;

      /**
       * 获取组件缩进
       * @return 组件缩进
       */
      getIndent(): Number;

      /**
       * 获取组件Label颜色，可重载自定义
       * @return 标题文字颜色
       */
      getLabelColor(item: Object): String;

      /**
       * 获取组件Label文本字体，可重载自定义
       * @return 组件Label文本字体
       */
      getLabelFont(): String;

      /**
       * 获取组件Label选中颜色
       * @return
       */
      getLabelSelectColor(): String;

      /**
       * 获取组件Label 的 ListView
       * @return ListView
       */
      getListView(): Object;

      /**
       * 获取组件下拉框最大高度
       * @return 组件下拉框最大高度
       */
      getMaxHeight(): Number;

      /**
       * 获取选中元素的背景色，可重载自定义
       * @return
       */
      getSelectBackground(): String;

      /**
       * 获取父类声明(构造函数)
       * @return 父类声明(构造函数)
       */
      getSuperClass(): Function;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @param e 鼠标或Touch事件对象
       * @returns  toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(e: Event): String;

      /**
       * 根据组件值
       * @return 元素值
       */
      getValue(): String;

      /**
       * 获取组件的根层div
       * @return 组件的根层div
       */
      getView(): HTMLElement;

      /**
       * 获取布局宽度
       * @return 布局宽度
       */
      getWidth(): Number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.ComboBox#iv iv}
       */
      invalidate(delay: Number): void;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return 组件是否处于不可用状态
       */
      isDisabled(): Boolean;

      /**
       * 获取组件是否可编辑
       * @return
       */
      isEditable(): Boolean;

      /**
       * 获取组件是否打开
       * @return
       */
      isOpened(): Boolean;

      /**
       * 获取组件是否精确
       * @return
       */
      isStrict(): Boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.ComboBox#invalidate invalidate}
       */
      iv(delay: Number): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.ComboBox#addPropertyChangeListener addPropertyChangeListener}
       */
      mp(listener: Function, scope?: Object, ahead?: Boolean): void;

      /**
       * 输入框创建事件监听器
       * @param listener 监听器函数
       */
      onInputCreated(listener: Function): void;

      /**
       * 属性变化回调函数，可重载做后续处理
       * @param event 属性变化事件
       * @example //event格式：
       * {
       * 	property: 'name',//发生变化的属性
       * 	oldValue: 'oldValue',//旧值
       * 	newValue: 'newValue',''新值
       * 	data: data//发生变化的data
       * }
       *
       */
      onPropertyChanged(event: Object): void;

      /**
       * 单选框值改变监听
       * @param fun 事件回调
       */
      onValueChanged(fun: Function): void;

      /**
       * 打开下拉框
       */
      open(): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 设置组件背景颜色
       * @param color 颜色
       */
      setBackground(color: String): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: Boolean, iconUrl?: String): void;

      /**
       * 设置组件下拉框背景颜色
       * @param color 颜色
       */
      setDropDownBackground(color: String): void;

      /**
       * 设置组件下拉框图标
       * @param icon 图标
       */
      setDropDownIcon(icon: String): void;

      /**
       * 设置组件下拉框宽度
       * @param width 宽度
       */
      setDropDownWidth(width: Number): void;

      /**
       * 设置文本框是否可编辑
       * @param v
       */
      setEditable(v: Boolean): void;

      /**
       * 根据值给组件设置焦点
       * @param value
       */
      setFocus(value: String): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: Number): void;

      /**
       * 设置缩进
       * @param v 缩进值
       */
      setIndent(v: Number): void;

      /**
       * 设置组件输入框值
       * @param value
       */
      setInputValue(value: String): void;

      /**
       * 设置标签文字颜色
       * @param Color 颜色值
       */
      setLabelColor(Color: String): void;

      /**
       * 设置标签文字字体
       * @param font 字体
       */
      setLabelFont(font: String): void;

      /**
       * 设置标签文字选中颜色
       * @param color 颜色
       */
      setLabelSelectColor(color: String): void;

      /**
       * 设置组件最大高度
       * @param v 高度
       */
      setMaxHeight(v: Number): void;

      /**
       * 设置按钮选中背景颜色
       * @param Color 颜色值
       */
      setSelectBackground(Color: String): void;

      /**
       * 设置组件的值
       * @param value
       */
      setValue(value: String): void;

      /**
       * 设置布局宽度
       * @param width 宽度
       */
      setWidth(width: Number): void;

      /**
       * 开关下拉框
       */
      toggle(): void;

      /**
       * 删除自身属性变化事件监听器，{@link ht.widget.ComboBox#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.ComboBox#removePropertyChangeListener removePropertyChangeListener}
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 立刻刷新组件
       */
      validate(): void;
    }

    /**
     * new MultiComboBox()
     * 组合框
     * @constructor
     */
    export class MultiComboBox {
      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.MultiComboBox#mp mp}
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 将组件加入到指定的DOM元素底下，不指定则加入到 document.body 下
       * @param parentNode DOM元素,默认为 document.body
       */
      addToDOM(parentNode?: HTMLElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 关闭下拉框
       */
      close(): void;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.MultiComboBox#fp fp}
       */
      firePropertyChange(property: String, oldValue: any, newValue: any): void;

      /**
       * @param kind
       */
      fireViewEvent(kind: String): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.MultiComboBox#firePropertyChange firePropertyChange}
       */
      fp(property: String, oldValue: any, newValue: any): void;

      /**
       * 获取背景颜色
       * @return 背景颜色
       */
      getBackground(): String;

      /**
       * 获取类声明(构造函数)
       * @return 类声明(构造函数)
       */
      getClass(): Function;

      /**
       * 获取类全名
       * @return 类全名
       */
      getClassName(): String;

      /**
       * 获取被禁用组件的div
       * @return 被禁用组件的div
       */
      getDisabledDiv(): HTMLElement;

      /**
       * 获取组件下拉框的组件
       * @return
       */
      getDropDownComponent(): Object;

      /**
       * 获取布局高度
       * @return 布局高度
       */
      getHeight(): Number;

      /**
       * 获取组件缩进
       * @return 组件缩进
       */
      getIndent(): Number;

      /**
       * 获取组件Label颜色，可重载自定义
       * @return 标题文字颜色
       */
      getLabelColor(item: Object): String;

      /**
       * 获取组件Label文本字体，可重载自定义
       * @return 组件Label文本字体
       */
      getLabelFont(): String;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @param e 鼠标或Touch事件对象
       * @returns  toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(e: Event): String;

      /**
       * 根据组件值
       * @return 元素值
       */
      getValue(): String;

      /**
       * 获取组件的根层div
       * @return 组件的根层div
       */
      getView(): HTMLElement;

      /**
       * 获取布局宽度
       * @return 布局宽度
       */
      getWidth(): Number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.MultiComboBox#iv iv}
       */
      invalidate(delay: Number): void;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return 组件是否处于不可用状态
       */
      isDisabled(): Boolean;

      /**
       * 获取组件是否可编辑
       * @return
       */
      isEditable(): Boolean;

      /**
       * 获取组件是否打开
       * @return
       */
      isOpened(): Boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.MultiComboBox#invalidate invalidate}
       */
      iv(delay: Number): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.MultiComboBox#addPropertyChangeListener addPropertyChangeListener}
       */
      mp(listener: Function, scope?: Object, ahead?: Boolean): void;

      /**
       * 输入框创建事件监听器
       * @param listener 监听器函数
       */
      onInputCreated(listener: Function): void;

      /**
       * 属性变化回调函数，可重载做后续处理
       * @param event 属性变化事件
       * @example //event格式：
       * {
       * 	property: 'name',//发生变化的属性
       * 	oldValue: 'oldValue',//旧值
       * 	newValue: 'newValue',''新值
       * 	data: data//发生变化的data
       * }
       *
       */
      onPropertyChanged(event: Object): void;

      /**
       * 单选框值改变监听
       * @param fun 事件回调
       */
      onValueChanged(fun: Function): void;

      /**
       * 打开下拉框
       */
      open(): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 设置组件背景颜色
       * @param color 颜色
       */
      setBackground(color: String): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: Boolean, iconUrl?: String): void;

      /**
       * 设置组件下拉框图标
       * @param icon 图标
       */
      setDropDownIcon(icon: String): void;

      /**
       * 设置文本框是否可编辑
       * @param v
       */
      setEditable(v: Boolean): void;

      /**
       * 根据值给组件设置焦点
       * @param value
       */
      setFocus(value: String): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: Number): void;

      /**
       * 设置缩进
       * @param v 缩进值
       */
      setIndent(v: Number): void;

      /**
       * 设置标签文字颜色
       * @param Color 颜色值
       */
      setLabelColor(Color: String): void;

      /**
       * 设置标签文字字体
       * @param font 字体
       */
      setLabelFont(font: String): void;

      /**
       * 设置组件的值
       * @param value
       */
      setValue(value: String): void;

      /**
       * 设置布局宽度
       * @param width 宽度
       */
      setWidth(width: Number): void;

      /**
       * 开关下拉框
       */
      toggle(): void;

      /**
       * 删除自身属性变化事件监听器，{@link widget.MultiComboBox#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.MultiComboBox#removePropertyChangeListener removePropertyChangeListener}
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 立刻刷新组件
       */
      validate(): void;
    }

    /**
     * new ColorPicker()
     * 颜色选择框
     * @constructor
     */
    export class ColorPicker {
      /**
       * 获取类声明(构造函数)
       * @return 类声明(构造函数)
       */
      getClass(): Function;

      /**
       * 获取类全名
       * @return 类全名
       */
      getClassName(): String;

      /**
       * 获取调色板颜色
       * @return 调色板颜色
       */
      getPaletteColors(): String;

      /**
       * 获取父类声明(构造函数)
       * @return 父类声明(构造函数)
       */
      getSuperClass(): Function;

      /**
       * 清除按钮是否可见
       * @return
       */
      isClearButtonVisible(): Boolean;

      /**
       * 组件是否立即使用
       * @return 组件是否立即使用
       */
      isInstant(): Boolean;

      /**
       * 设置清除按钮是否可见
       * @param v 是否可见
       */
      setClearButtonVisible(v: Boolean): void;

      /**
       * 设置是否立即使用
       * @param v
       */
      setInstant(v: Boolean): void;

      /**
       * 设置调色板颜色
       * @param 调色板颜色
       */
      getPaletteColors(colors: string[]): void;

      /**
       * 设置元素值
       * @param color 值
       */
      setValue(color: String): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.ColorPicker#mp mp}
       */
      addPropertyChangeListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 将组件加入到指定的DOM元素底下，不指定则加入到 document.body 下
       * @param parentNode DOM元素,默认为 document.body
       */
      addToDOM(parentNode?: HTMLElement): void;

      /**
       * 监听视图事件，如布局、刷新等
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       */
      addViewListener(
        listener: Function,
        scope?: Object,
        ahead?: Boolean,
      ): void;

      /**
       * 关闭下拉框
       */
      close(): void;

      /**
       * 关闭ToolTip功能
       */
      disableToolTip(): void;

      /**
       * 启用ToolTip
       */
      enableToolTip(): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.ColorPicker#fp fp}
       */
      firePropertyChange(property: String, oldValue: any, newValue: any): void;

      /**
       * @param kind
       */
      fireViewEvent(kind: String): void;

      /**
       * 派发改变事件
       * @param property 属性
       * @param oldValue 旧值
       * @param newValue 新值
       * @see {@link widget.ColorPicker#firePropertyChange firePropertyChange}
       */
      fp(property: String, oldValue: any, newValue: any): void;

      /**
       * 获取背景颜色
       * @return 背景颜色
       */
      getBackground(): String;

      /**
       * 获取类声明(构造函数)
       * @return 类声明(构造函数)
       */
      getClass(): Function;

      /**
       * 获取类全名
       * @return 类全名
       */
      getClassName(): String;

      /**
       * 获取被禁用组件的div
       * @return 被禁用组件的div
       */
      getDisabledDiv(): HTMLElement;

      /**
       * 获取组件下拉框的组件
       * @return
       */
      getDropDownComponent(): Object;

      /**
       * 获取下拉框图标
       * @return 下拉框图标
       */
      getDropDownIcon(): String;

      /**
       * 获取布局高度
       * @return 布局高度
       */
      getHeight(): Number;

      /**
       * 获取组件缩进
       * @return 组件缩进
       */
      getIndent(): Number;

      /**
       * 获取组件Label颜色，可重载自定义
       * @return 标题文字颜色
       */
      getLabelColor(item: Object): String;

      /**
       * 获取组件Label文本字体，可重载自定义
       * @return 组件Label文本字体
       */
      getLabelFont(): String;

      /**
       * 获取父类声明(构造函数)
       * @return 父类声明(构造函数)
       */
      getSuperClass(): Function;

      /**
       * 获取ToolTip文字，可重载返回自定义的toolTip文字
       * @param e 鼠标或Touch事件对象
       * @returns  toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
       */
      getToolTip(e: Event): String;

      /**
       * 根据组件值
       * @return 元素值
       */
      getValue(): String;

      /**
       * 获取组件的根层div
       * @return 组件的根层div
       */
      getView(): HTMLElement;

      /**
       * 获取布局宽度
       * @return 布局宽度
       */
      getWidth(): Number;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.ColorPicker#iv iv}
       */
      invalidate(delay: Number): void;

      /**
       * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
       * @return 组件是否处于不可用状态
       */
      isDisabled(): Boolean;

      /**
       * 获取组件是否可编辑
       * @return
       */
      isEditable(): Boolean;

      /**
       * 获取组件是否打开
       * @return
       */
      isOpened(): Boolean;

      /**
       * 无效组件，并调用延时刷新
       * @param delay 延迟刷新的间隔事件(单位:ms)
       * @see {@link widget.ColorPicker#invalidate invalidate}
       */
      iv(delay: Number): void;

      /**
       * 增加自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @param ahead 是否将当前监听器插入到监听器列表开头
       * @see {@link widget.ColorPicker#addPropertyChangeListener addPropertyChangeListener}
       */
      mp(listener: Function, scope?: Object, ahead?: Boolean): void;

      /**
       * 输入框创建事件监听器
       * @param listener 监听器函数
       */
      onInputCreated(listener: Function): void;

      /**
       * 属性变化回调函数，可重载做后续处理
       * @param event 属性变化事件
       * @example //event格式：
       * {
       * 	property: 'name',//发生变化的属性
       * 	oldValue: 'oldValue',//旧值
       * 	newValue: 'newValue',''新值
       * 	data: data//发生变化的data
       * }
       *
       */
      onPropertyChanged(event: Object): void;

      /**
       * 单选框值改变监听
       * @param fun 事件回调
       */
      onValueChanged(fun: Function): void;

      /**
       * 打开下拉框
       */
      open(): void;

      /**
       * 删除自身属性变化事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removePropertyChangeListener(listener: Function, scope?: Object): void;

      /**
       * 删除视图事件监听器
       * @param listener 监听器函数
       * @param scope 监听器函数域
       */
      removeViewListener(listener: Function, scope?: Object): void;

      /**
       * 设置组件背景颜色
       * @param color 颜色
       */
      setBackground(color: String): void;

      /**
       * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
       * @param value 是否禁用组件
       * @param iconUrl 蒙板上显示的icon的路径
       */
      setDisabled(value: Boolean, iconUrl?: String): void;

      /**
       * 设置组件下拉框图标
       * @param icon 图标
       */
      setDropDownIcon(icon: String): void;

      /**
       * 设置文本框是否可编辑
       * @param v
       */
      setEditable(v: Boolean): void;

      /**
       * 根据值给组件设置焦点
       * @param value
       */
      setFocus(value: String): void;

      /**
       * 设置布局高度
       * @param v 高度值
       */
      setHeight(v: Number): void;

      /**
       * 设置缩进
       * @param v 缩进值
       */
      setIndent(v: Number): void;

      /**
       * 设置标签文字颜色
       * @param Color 颜色值
       */
      setLabelColor(Color: String): void;

      /**
       * 设置标签文字字体
       * @param font 字体
       */
      setLabelFont(font: String): void;

      /**
       * 设置组件的值
       * @param value
       */
      setValue(value: String): void;

      /**
       * 设置布局宽度
       * @param width 宽度
       */
      setWidth(width: Number): void;

      /**
       * 开关下拉框
       */
      toggle(): void;

      /**
       * 删除自身属性变化事件监听器，{@link widget.MultiComboBox#removePropertyChangeListener removePropertyChangeListener}的缩写
       * @param listener 监听器函数
       * @param scope 监听器函数域
       * @see {@link widget.MultiComboBox#removePropertyChangeListener removePropertyChangeListener}
       */
      ump(listener: Function, scope?: Object): void;

      /**
       * 立刻刷新组件
       */
      validate(): void;
    }
  }
}
