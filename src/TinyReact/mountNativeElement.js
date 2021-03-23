import createDOMElement from './createDOMElement'


export default function mountNativeElement (virtualDOM, container) {
  let newElement = createDOMElement(virtualDOM)
  // 添加到容器
  container.appendChild(newElement)
}