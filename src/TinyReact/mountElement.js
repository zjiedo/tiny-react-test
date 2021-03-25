import isFunction from './isFunction'
import mountNativeElement from './mountNativeElement'
import mountComponent from './mountComponent'
export default function mountElement (virtualDOM, container) {
  // Component VS NativeElement
  if (isFunction(virtualDOM)) {
    // Component
    mountComponent(virtualDOM, container)
  } else {
    mountNativeElement(virtualDOM, container)
  }
}