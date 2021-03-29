import mountElement from "./mountElement"

export default function diffComponent (
  virtualDOM,
  oldComponent,
  oldDOM,
  container
) {
  if (isSameComponent()) {
    // 同一个组件
  } else {
    // 不是同一个组件
    mountElement(virtualDOM, container, oldDOM)
  }
}
function isSameComponent (virtualDOM, oldComponent) {
  return oldComponent && virtualDOM.type === oldComponent.constructor
}