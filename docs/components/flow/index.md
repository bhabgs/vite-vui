# flow 规则引擎流程组件
> 依赖ant和x6，需要安装
## 参数以及方法

> functions：函数待选数组，格式：[{name:'',funcName:'',paramList:[{name:'',value:''}]}]
>
> rules：规则待选列表，格式：[{name:'',recordCode:''}]
>
> onRuleSearch：规则模糊搜索回调，包括一个参数为用户输入的值
>
> save：获取图表以及后台需要的json方法