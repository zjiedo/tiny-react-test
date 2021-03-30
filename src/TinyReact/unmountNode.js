export default function unmountNode (node) {
  // 获取节点的 _virtualDOM对象
  const virtualDOM = node._virtualDOM
  // 1、文本节点直接删除
  if (virtualDOM.type === "text") {
    node.remove()
    return
  }
  // 元素节点： 看是否由组件生成
  let component = virtualDOM.component

  // 如果 component 存在 就说明节点是由组件生成
  if (component) {
    component.componentWillUnmount()
  }
  // 看一下节点是否有ref属性
  if (virtualDOM.props && virtualDOM.props.ref) {
    virtualDOM.props.ref(null)
  }
  // 节点的属性中是否有事件属性
  Object.keys(virtualDOM.props).forEach(propName => {
    if (propName.slice(0, 2) === "on") {
      const eventName = propName.toLocaleLowerCase().slice(0, 2)
      const eventHandler = virtualDOM.props[propName]
      node.removeEventListener(eventName, eventHandler)
    }
  })
  // 递归删除子节点
  if (node.childNodes.length > 0) {
    for (let i = 0; i < node.childNodes.length; i++) {
      unmountNode(node.childNodes[i])
      i--
    }
  }
  // 删除节点
  node.remove()
}