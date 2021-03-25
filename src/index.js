
import TinyReact from './TinyReact'

const root = document.getElementById("root")

const virtualDOM = (
  <div class="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test">(test)</h2>
    <input value="10"/>
    <div onClick={() => alert('点我干啥')}>点我</div>
    { 1 == 2 && <div> 1 === 2</div> }
    { 1 == 1 && <div> 1 === 1</div> }
  </div>
)

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
  }
  render () {
    return (
      <div>
        {this.props.title} <br />
        {this.props.name}
      </div>
    )
  }
}
// TinyReact.render(<Header title="hello"/>, root)

TinyReact.render(<Alert title="hello" name="alert"/>, root)
