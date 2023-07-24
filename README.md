# Modules
## react 中 style 的书写
## 类组件
类组件的生命周期
* constructor - 最先调用
* getDerivedStateFormProps
  1. 在render之前被调用
  2. 在初始化挂载以及后续更新时都会被调用
  3. 它返回一个对象来更新 state, 如果返回 null 则不更新 
* getSnapshotBeforeUpdate - 组件更新之前
  1. 在 render 之后,在 componentDidUpdate 之前 被调用
  2. 接收3个参数(prevProps, prevState, snapshot)
  3. return 的值传给 componentDidUpdate
* componentDidMount - 组件初次渲染完成
* componentWillUnmount - 组件卸载之前
* componentDidUpdate - 组件更新之后
* shouldComponentUpdate - 组件是否需要更新
  1. 默认更新
  2. return true 更新
  3. return false 不更新 
* 
## 函数组件
