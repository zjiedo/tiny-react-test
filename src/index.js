
import TinyReact from './TinyReact'

const root = document.getElementById("root")
// const virtualDOM = (
//   <div className="container">
//     <h1>你好 Tiny React</h1>
//     <h2 data-test="test">(编码必杀技)</h2>
//     <div>
//       嵌套1 <div>嵌套 1.1</div>
//     </div>
//     <h3>(观察: 这个将会被改变)</h3>
//     {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
//     {2 == 2 && <div>2</div>}
//     <span>这是一段内容</span>
//     <button onClick={() => alert("你好")}>点击我</button>
//     <h3>这个将会被删除</h3>
//     2, 3
//     <input type="text" value="13" />
//   </div>
// )

// const modifyDOM = (
//   <div className="container">
//     <h1>你好 Tiny React</h1>
//     <h2 data-test="test123">(编码必杀技)</h2>
//     <div>
//       嵌套1 <div>嵌套 1.1</div>
//     </div>
//     <h3>(观察: 这个将会被改变)</h3>
//     {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
//     {2 == 2 && <div>2</div>}
//     <button onClick={() => alert("你好!!!!!")}>点击我</button>
//     <input type="text" value="13" />
//   </div>
// )




// TinyReact.render(virtualDOM, root)
// setTimeout(() => {
//   TinyReact.render(modifyDOM, root)
// }, 2000)

// const virtualDOM = (
//   <div class="container">
//     <h1>你好 Tiny React</h1>
//     <h2 data-test="test">(test)</h2>
//     <input value="10"/>
//     <div onClick={() => alert('点我干啥')}>点我</div>
//     { 1 == 2 && <div> 1 === 2</div> }
//     { 1 == 1 && <div> 1 === 1</div> }
//   </div>
// )

// TinyReact.render(virtualDOM, root)

// console.log(virtualDOM)

// function Demo () {
//   return <div>&hearts;</div>
// }
// function Header (props) {
//   return (
//     <div>
//       {props.title}
//       <Demo />
//     </div>
//   )
// }
class Alert extends TinyReact.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Default Title'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState({
      title: 'change hello'
    })
  }
  render () {
    console.log(this.state)
    return (
      <div>
        {this.props.title} <br />
        {this.props.name}
        <div>
          { this.state.title }
          <button onClick={this.handleClick}>改变title</button>
        </div>
      </div>
    )
  }
}
// // TinyReact.render(<Header title="hello"/>, root)

TinyReact.render(<Alert title="hello" name="alert"/>, root)
