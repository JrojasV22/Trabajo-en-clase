import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quote from './Quote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mt-5 p-4 m'>
        <Quote/>
      </div>
       
    </>
  )
}

export default App
