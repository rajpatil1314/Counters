import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCounter, SubToCounter } from './redux/action'

function App() {
  const dispatch =  useDispatch();

  const counter =useSelector((s)=>s.counter)
 

  return (
    <>

    <h1 className='counters'>&#128073;counter&#128072;</h1>

    <h1 className='count'>{counter}</h1>

    <button onClick={()=>dispatch(AddToCounter(1))}>ADD</button>
    <button onClick={()=>dispatch(SubToCounter(-1))}>SUB</button>
    
  
    </>
  )
}

export default App