import mountElement from "./mountElement"
import updateNodeElement from './updateNodeElement'

export default function createDOMElement (virtualDOM ) {
  let newElement = null
  if (virtualDOM.type === 'text') {
    // 文本节点
    newElement = document.createTextNode(virtualDOM.props.textContent)
  } else {
    // 元素节点
    newElement = document.createElement(virtualDOM.type)
    updateNodeElement(newElement, virtualDOM)
  }
  newElement.__virtualDOM = virtualDOM
  // console.log(virtualDOM.children)
  // 递归创建子节点
  virtualDOM.children.forEach(child => {
    mountElement(child, newElement)
  })

  // 判断ref
  if (virtualDOM.props && virtualDOM.props.ref) {
    virtualDOM.props.ref(newElement)
  }
  return newElement
}

