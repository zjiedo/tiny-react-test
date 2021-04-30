import diff from './diff'
export default function render(
  virtualDOM,
  container,
  oldDOM = container.firstChild // 父级
) {
  diff(virtualDOM, container, oldDOM)
}