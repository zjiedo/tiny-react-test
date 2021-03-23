
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

TinyReact.render(virtualDOM, root)

console.log(virtualDOM)