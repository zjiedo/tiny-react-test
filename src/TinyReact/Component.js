import diff from "./diff"

export default class Component {
  constructor (props) {
    this.props = props
  }
  setState (state) {
    // 合并原有的state和现在的state
    this.state = Object.assign({}, this.state, state)
    // 获取最新的要渲染的virtualDOM对象
    let virtualDOM = this.render()
    // 获取旧的virtualDOM对象 进行比较
    let oldDOM = this.getDOM()
    let oldVirtualDOM = oldDOM.__virtualDOM
    // 获取容器
    const conainter = oldDOM.parentNode
    // 实现对比
    diff(virtualDOM, conainter, oldDOM)
  }
  setDOM (dom) {
    this._dom = dom
  }
  getDOM (dom) {
    return this._dom
  }
}