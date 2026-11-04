import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/slices/Counterslice'

function Counter() {

  const { count } = useSelector(state => state.counterReducer)
  const dispatch = useDispatch()
   const inputRef=useRef()

   const handleIncrement=()=>{
    const amount=inputRef.current.value
    if(amount){
      dispatch(incrementByAmount(+amount))
      inputRef.current.value= ""
    }else{
      alert("please enter a valid input")
    }

   }

  return (
    <div>
      <div style={{ height: '100vh' }} className='bg-dark text-light d-flex justify-content-center align-items-center'>   
        <div className='border rounded p-5 d-flex justify-content-center align-items-center flex-column'>
          <h1 style={{ fontSize: "150px" }}>{count}</h1>
          <div style={{ width: "600px" }} className='my-3 d-flex justify-content-center align-items-center'>
            <button onClick={() => dispatch(decrement())} className='btn btn-warning'>Decrement</button>
            <button onClick={() => dispatch(reset())} className='btn btn-danger mx-5'>Reset</button>
            <button onClick={() => dispatch(increment())} className='btn btn-success'>Increment</button>
          </div>
          <div className='my-5 d-flex justify-content-center align-items-center w-100'>
            <input ref={inputRef} type="text" className='form-control me-5' placeholder='Incremented Counter Amount' />
            <button onClick={handleIncrement} className='btn btn-primary'>Increment by Amount</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Counter
