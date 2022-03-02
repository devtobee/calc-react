import 'animate.css'
import Buttons from './Buttons'
import { useGlobalContext } from './context'
function App() {
  const { operation, currentOperand, prevOperand } = useGlobalContext()

  return (
    <section
      className='calculator-grid animate__animated animate__jackInTheBox'
      onKeyPress={(e) => console.log(e)}
    >
      <div className='output animate__animated animate__backInDown'>
        <div data-previous-operand className='previous-operand'>
          {prevOperand} {operation}
        </div>
        <div data-current-operand className='current-operand'>
          {currentOperand}
        </div>
      </div>
      <Buttons />
    </section>
  )
}

export default App
