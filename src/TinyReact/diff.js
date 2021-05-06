import mountElement from './mountElement'
import updateTextNode from './updateTextNode'
import updateNodeElement from './updateNodeElement'
import isFunction from './isFunction'
import createDOMElement from './createDOMElement'
import unmountNode from './unmountNode'
import diffComponent from './diffComponent'
export default function diff (virtualDOM, container, oldDOM) {
  const oldVirtualDOM = oldDOM && oldDOM.__virtualDOM
  const oldComponent = oldVirtualDOM && oldVirtualDOM.component
  // 判断virtual是否存在
  if (!oldDOM) {
    mountElement(virtualDOM, container)
  } else if (virtualDOM.type !== oldVirtualDOM.type && !isFunction(virtualDOM)) {
    const newElement = createDOMElement(virtualDOM)
    oldDOM.parentNode.replaceChild(newElement, oldDOM)
  } else if (isFunction(virtualDOM)) {
    // 渲染组件
    diffComponent(virtualDOM, oldComponent, oldDOM, container)
  } else if (oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {
    if (virtualDOM.type === "text") {
      // 更新内容
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
    } else {
      // 更新元素属性
      updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM)
    }

    
    // 1.将拥有key属性的子元素放置在一个单独的对象中
    let keyedElements = {}
    for (let i = 0, len = oldDOM.childNodes.length; i < len; i++) {
      let domElement = oldDOM.childNodes[i]
      
      if (domElement.nodeType === 1) {
        let key = domElement.getAttribute('key')
        if (key) {
          keyedElements[key] = domElement
        }
      }
    }
    let hasNokey = Object.keys(keyedElements).length === 0
    if (hasNokey) {
      virtualDOM.children.forEach((child, i) => {
        diff(child, oldDOM, oldDOM.childNodes[i])
      })
    } else {
      // 循环virtualDOM的子元素 获取子元素的 key 属性
      virtualDOM.children.forEach((child, i) => {
        let key = child.props.key
        if (key) {
          let domElement = keyedElements[key]
          if (domElement) {
            // 看当前未知的元素是不是期望的元素
            if (oldDOM.childNodes[i] && oldDOM.childNodes[i] !== domElement) {
              oldDOM.insertBefore(domElement, oldDOM.childNodes[i])
            }
          } else {
            // 新增dom
            mountElement(child, oldDOM, oldDOM.childNodes[i])
          }
        }
      })
    }
    // 删除节点
    // 获取旧节点
    let oldChildNodes = oldDOM.childNodes
    // 判断旧节点的数量
    if (oldChildNodes.length > virtualDOM.children.length) {
      // 有节点需要被删除
      for (let i = oldChildNodes.length - 1, len = virtualDOM.children.length - 1; i > len; i--) {
        unmountNode(oldChildNodes[i])
      }
    }
  }
}