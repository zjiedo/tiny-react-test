import diff from "./diff"

export default function updateTextNode (virtualDOM, oldVirtualDOM, oldDOM) {
  if (virtualDOM.props.textContent != oldDOM.textContent) {
    oldDOM.textContent = virtualDOM.props.textContent
    oldDOM._virtualDOM = virtualDOM
  }
}