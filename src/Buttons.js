import React from 'react'
import { useGlobalContext } from './context'
import useSound from 'use-sound'
import boopSfx from './beep.wav'
function Buttons() {
  const [play] = useSound(boopSfx)
  const {
    sound,
    toggleMusic,
    handleFloat,
    handleAC,
    hanDel,
    compute,
    handleOperator,
    handleInput,
  } = useGlobalContext()
  return (
    <>
      <button
        onClick={handleAC}
        className='span-two animate__animated animate__slideInLeft'
      >
        AC
      </button>
      <button onClick={hanDel}>DEL</button>
      <button onClick={handleOperator}>÷</button>
      <button onClick={handleInput}>1</button>
      <button onClick={handleInput}>2</button>
      <button onClick={handleInput}>3</button>
      <button dat onClick={handleOperator}>
        *
      </button>
      <button onClick={handleInput}>4</button>
      <button onClick={handleInput}>5</button>
      <button onClick={handleInput}>6</button>
      <button dat onClick={handleOperator}>
        +
      </button>
      <button onClick={handleInput}>7</button>
      <button onClick={handleInput}>8</button>
      <button onClick={handleInput}>9</button>
      <button onClick={handleOperator}>-</button>
      <button onClick={handleFloat}>.</button>
      <button onClick={handleInput}>0</button>
      <button onClick={compute} className='span-two'>
        =
      </button>
      <button
        onClick={toggleMusic}
        className={`${
          sound
            ? 'music musicox  animate__animated animate__fadeInBottomLeft'
            : 'music animate__animated animate__fadeInBottomLeft'
        }`}
      >
        ♫
      </button>
    </>
  )
}

export default Buttons

{
  /* {sample.map((item, index) => {
   return (
    <button key={index} data>
    {item}
    </button>
    )
   })} */
}

// const sample = [
//   'del',
//   '/',
//   1,
//   2,
//   3,
//   '*',
//   4,
//   5,
//   6,
//   '+',
//   7,
//   8,
//   9,
//   '-',
//   '.',
//   0,
//   '=',
// ]
