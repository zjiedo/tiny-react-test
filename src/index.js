
import TinyReact from './TinyReact'
const root = document.getElementById("root")
// const virtualDOM = (
//   <div className="container">
//     <h1>你好</h1>
//     <span>这是一个内容</span>
//     <h3>哈哈哈哈</h3>
//     { 2 == 1 && 'hahaha' }
//     { 2 == 2 && 'hahaha' }
//     <button onClick={() => {alert(1)}}>点击</button>
//   </div>
// )

// const modifyDOM = (
//   <div className="container">
//     <h1>你好</h1>
//     <span>这是修改的内容</span>
//     <h4>哈哈哈哈</h4>
//     { 2 == 1 && 'hahaha' }
//     { 2 == 2 && 'hahaha' }
//     <button onClick={() => {alert('你好！！！！！')}}>点击</button>
//   </div>
// )

// TinyReact.render(virtualDOM, root)

// setTimeout(() => {
//   console.log('*****')
//   TinyReact.render(modifyDOM, root)
// }, 2000)
// const root = document.getElementById("root")
// function Test () {
//   return <div>&hearts;</div>
// }
// function Demo (props) {
//   return (
//     <div>
//       <h1 >Hello {props.title}</h1>
//       <Test />
//     </div>
//   )
// }
// TinyReact.render(<Demo title="jill"/>, root)
// class Header extends TinyReact.Component {
//   constructor (props) {
//     super(props)
//   }
//   render () {
//    return (
//     <div>
//       <h1>hello {this.props.title}</h1>
//     </div>
//    )
//   }
// }

// TinyReact.render(<Header title="jill"/>, root)
// class DemoRef extends TinyReact.Component {
//   constructor (props) {
//     super(props)
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick () {
//     console.log(this.input.value)
//     console.log(this.header)
//   }
//   componentDidMount () {
//     console.log('componentDidMount')
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" value="12213" ref={input => (this.input = input)}/>
//         <button onClick={this.handleClick}>按钮</button>
//         <Header title="haha" ref={header => (this.header = header)}/>
//       </div>
//     )
//   }
// }
// TinyReact.render(<DemoRef/>, root)
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
class DemoNode extends TinyReact.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <h1>哈哈哈哈</h1>
    )
  }
}

class Alert extends TinyReact.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Default Title',
      list: [{
        id: 1,
        value: 1
      },{
        id: 2,
        value: 2
      },{
        id: 3,
        value: 3
      }]
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    let thisList = JSON.parse(JSON.stringify(this.state.list))
    let newList = []
    while(thisList.length) {
      let item = thisList.pop()
      newList.push(item)
    }
    newList.push({
      id: Math.random(),
      value: Math.random()
    })
    console.log(newList)
    this.setState({
      title: 'change hello',
      list: newList
    })

    // this.handleChange()
  }
  handleChange () {
    let value = this.input.value
    console.log(value)
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
  // componentWillReceiveProps (nextProps) {
  //   console.log(nextProps)
  // }
  // componentWillUpdate () {
  //   console.log('compnentWillUpdate')
  // }
  // componentDidUpdate () {
  //   console.log('compnentDidUpdate')
  // }
  render () {
    return (
      <div>
        {this.state.title} <br />
        <div>
          {/* { this.state.title }
          <input ref={input => (this.input = input)}/> */}
          <ul>
            {
              this.state.list.map(item => {
                return <li key={item.id}>{item.value}</li>
              })
            }
          </ul>
          <button onClick={this.handleClick}>改变title</button>
          {/* 组件对应的实例对象 */}
          {/* <DemoNode ref={alert => (this.alert = alert)}/> */}
        </div>
      </div>
    )
  }
}
TinyReact.render(<Alert title="hello"/>, root)


// // TinyReact.render(<Alert title="hello" name="alert"/>, root)

// setTimeout(() => {
//   TinyReact.render(<DemoNode title="haha" name="111"/>, root)
//   // TinyReact.render(<Alert title="hello" name="alert"/>, root)
// }, 2000)

