import createDOMElement from './createDOMElement'
import unmountNode from './unmountNode'


export default function mountNativeElement (virtualDOM, container, oldDOM) {
  let newElement = createDOMElement(virtualDOM)
  // 判断旧的节点是否存在， 存在需要删除
  if (oldDOM) {
    unmountNode(oldDOM)
  }
  // 添加到容器
  container.appendChild(newElement)
  // 
  let component = virtualDOM.component
  if (component) {
    component.setDOM(newElement) // 类组件
  }
}