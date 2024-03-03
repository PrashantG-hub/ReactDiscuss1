import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <span className='text-black bg-green-600 p-3 rounded-xl' > Tailwind CSS</span>
    </>
  )
}

export default App
