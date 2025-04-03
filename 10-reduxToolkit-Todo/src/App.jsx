import './App.css'
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux' //#5
import { decrement, increment } from './ReduxH/counter/counterSlice' //#6

function App() {

  const count = useSelector((state) => state.counter.value)  // #5  // get value (view)
  const dispatch = useDispatch()  // #7                             // use value/function 
 
  return (
    <>
    <Navbar/>
    <div> 
      <h2>current count {count} </h2>

      <button onClick={()=> dispatch(increment())}> Increment </button> <span> </span>     {/* #7 */}
      <button onClick={()=> dispatch(decrement())}> Decrement </button>                    {/* #7 */}    
    </div>
    </>
  )
}

export default App
