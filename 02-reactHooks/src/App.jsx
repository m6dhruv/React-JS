// useState hook : learn useState with dhruv 

import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(4)
  
  const addValues = ()=>{
      // setCount(count+1)
      if(count < 13){
        setCount(count+1)
      }
      else{
        setCount(count)
      }
  }

  const removeValues = ()=>{
    // setCount(count-1)
    if(count > 0){
      setCount(count- 1)
    }
    else{
      setCount(count)
    }
  }


  return (
    <>

    <h1>Learn react with Dhruv </h1>

    <h3>Min : 0 & Max : 13</h3>



    <h2>Counter value: {count}</h2>
    <button onClick={addValues}>Add value</button>  <span> </span>
    <button onClick={removeValues}>Remove value</button>

      

    </>
  )
}

export default App
