import { useContext, createContext, useState } from 'react'
import useSound from 'use-sound'
import boopSfx from './beep.wav'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [play, { stop }] = useSound(boopSfx)
  const [currentOperand, setCurrentOperand] = useState('')
  const [prevOperand, setPrevOperand] = useState('')
  const [operation, setOperation] = useState('')
  const [sound, setSound] = useState(true)

  const toggleMusic = () => {
    setSound(!sound)
  }

  const handleInput = (e) => {
    {
      sound && play()
    }
    const inputData = e.target.textContent.toString()
    if (currentOperand === '0' && inputData === '0') {
      setCurrentOperand('0')
    } else if (currentOperand === '0' && inputData !== '0') {
      setCurrentOperand(inputData)
    } else {
      setCurrentOperand(currentOperand.toString() + inputData)
    }
    if (operation !== '') {
      if (e.target.textContent === '÷') {
        return '/'
      }
      operation = e.target.textContent
    }
  }

  const handleOperator = (e) => {
    {
      sound && play()
    }

    if (currentOperand !== '') {
      if (e.target.textContent === '+') {
        setOperation('+')
      }
      if (e.target.textContent === '-') {
        setOperation('-')
      }
      if (e.target.textContent === '*') {
        setOperation('*')
      }
      if (e.target.textContent === '÷') {
        setOperation('/')
      }
      setPrevOperand(currentOperand)
      setCurrentOperand('')
    }
    if (currentOperand !== '' && prevOperand !== '' && operation !== '') {
      let computed
      switch (operation) {
        case '+':
          computed = parseFloat(prevOperand) + parseFloat(currentOperand)
          break
        case '-':
          computed = parseFloat(prevOperand) - parseFloat(currentOperand)
          break
        case '*':
          computed = parseFloat(prevOperand) * parseFloat(currentOperand)
          break
        case '/':
          computed = parseFloat(prevOperand) / parseFloat(currentOperand)
        default:
          break
      }
      setPrevOperand(computed)
      if (e.target.textContent === '÷') {
        return '/'
      }
      setOperation(e.target.textContent)

      // setCurrentOperand('')
    }
  }
  const compute = () => {
    {
      sound && play()
    }
    let computed
    switch (operation) {
      case '+':
        computed = parseFloat(prevOperand) + parseFloat(currentOperand)
        break
      case '-':
        computed = parseFloat(prevOperand) - parseFloat(currentOperand)
        break
      case '*':
        computed = parseFloat(prevOperand) * parseFloat(currentOperand)
        break
      case '/':
        computed = parseFloat(prevOperand) / parseFloat(currentOperand)
      default:
        break
    }
    setCurrentOperand(computed)
    setPrevOperand('')
    setOperation('')
  }
  const handleFloat = (e) => {
    {
      sound && play()
    }
    if (!currentOperand.includes('.')) {
      const newOperand = currentOperand.concat('', e.target.textContent)
      setCurrentOperand(newOperand)
    }
    if (currentOperand === '') {
      setCurrentOperand('0.')
    }
  }
  const hanDel = () => {
    {
      sound && play()
    }
    let newInput = currentOperand
      .toString()
      .substring(0, currentOperand.length - 1)
    // if (currentOperand === '') {
    //   newInput = 0
    // }
    setCurrentOperand(newInput)
  }
  const handleAC = () => {
    {
      sound && play()
    }
    setCurrentOperand('')
    setPrevOperand('')
    setOperation('')
  }
  return (
    <AppContext.Provider
      value={{
        sound,
        toggleMusic,
        handleFloat,
        operation,
        handleAC,
        hanDel,
        compute,
        handleOperator,
        handleInput,
        currentOperand,
        prevOperand,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppProvider, useGlobalContext }
