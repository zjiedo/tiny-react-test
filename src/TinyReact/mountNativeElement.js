
import createDOMElement from "./createDOMElement"
import unmountNode from "./unmountNode"

export default function mountNativeElement (virtualDOM, container, oldDOM) {
  let newElement = createDOMElement(virtualDOM)
  if (oldDOM) {
    container.insertBefore(newElement, oldDOM)
  } else {
    // 将转换之后的DOM对象放在页面中
    container.appendChild(newElement)
  }
   // 判断旧的DOM对象是否存在， 存在 删除
  if (oldDOM) {
    unmountNode(oldDOM)
  }
  
  

  let component = virtualDOM.component
  
  component && component.setDOM(newElement)
}