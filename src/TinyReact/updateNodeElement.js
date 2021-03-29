export default function updateNodeElement (newElement, virtualDOM, oldVirtualDOM = {}) {
  // 获取节点对应的属性对象
  const newProps = virtualDOM.props || {}
  const oldProps = oldVirtualDOM.props || {}

  Object.keys(newProps).forEach(propName => {
    const newPropsValue = newProps[propName]
    const oldPropsValue = oldProps[propName]
    if (newPropsValue !== oldPropsValue) {
      // 判断是否是时间属性onClick
      if (propName.slice(0, 2) === 'on') {
        // 事件名称
        const eventName = propName.toLowerCase().slice(2)
        // 为元素添加事件
        newElement.addEventListener(eventName, newPropsValue)
        // 删除原有事件的事件处理函数
        if (oldPropsValue) {
          newElement.removeEventListener(eventName, oldPropsValue)
        }
      } else if (propName === 'value' || propName === "checked") {
        newElement[propName] = newPropsValue
      } else if (propName !== 'children') {
        if (propName === "className") {
          newElement.setAttribute('class', newPropsValue)
        } else {
          newElement.setAttribute(propName, newPropsValue)
        }
      }
    }

    // 判断属性被删除的情况
    Object.keys(oldProps).forEach(propName => {
      const newPropsValue = newProps[propName]
      const oldPropsValue = oldProps[propName]
      if (!newPropsValue) {
        // 属性删除
        if (propName.slice(0, 2) === 'on') {
          const eventName = propName.toLocaleLowerCase().slice(2)
          newElement.removeEventListener(eventName, oldPropsValue[propName])
        } else if (propName !== "children") {
          newElement.removeAttribute(propName)
        }
      }
    })
  })
}