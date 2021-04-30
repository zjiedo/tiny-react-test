export default function createElement (type, props, ...children) {
  const childElements = [].concat(...children).reduce((result, child) => {
    // 处理判断值
    if (child !== undefined && child !== false && child !== null) {
      if (child instanceof Object) {
        result.push(child)
      } else {
        result.push(createElement('text', {textContent: child}))
      }
    }
    return result
  }, [])
  return {
    type,
    props: Object.assign({ // 可以通过props属性拿到children
      children: childElements
    }, props),
    children: childElements   
  }
}