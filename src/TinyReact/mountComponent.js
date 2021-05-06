import isFunction from "./isFunction";
import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";

export default function mountComponent (virtualDOM, container, oldDOM) {
  let nextVirtualDOM = null
  let component = null
 
  // 判断是类组件函数组件-- 有render方法是类组件
  if (isFunctionComponent(virtualDOM)) {
    // function Component
    nextVirtualDOM = buildFunctionComponent(virtualDOM)
  } else {
    // class Component
    nextVirtualDOM = buildClassComponent(virtualDOM)
    component = nextVirtualDOM.component
  }

  
  if (isFunction(nextVirtualDOM)) {
    mountComponent(nextVirtualDOM, container, oldDOM)
  } else {
    mountNativeElement(nextVirtualDOM, container, oldDOM)
  }
  if (component) {
    component.componentDidMount()
    if (component.props && component.props.ref) {
      component.props.ref(component)
    }
  }
}

function buildFunctionComponent (virtualDOM) {
  return virtualDOM.type(virtualDOM.props || {})
}
function buildClassComponent (virtualDOM) {
  // 得到组件实例对象
  const component = new virtualDOM.type(virtualDOM.props || {})
  const nextVirtualDOM = component.render()

  nextVirtualDOM.component = component

  return nextVirtualDOM
}