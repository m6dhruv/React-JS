import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const count = useSelector((state) => state.counter.value) 
  return (
    <div>
       <h2> Navbar Counter {count} </h2>
      
    </div>
  )
}

export default Navbar