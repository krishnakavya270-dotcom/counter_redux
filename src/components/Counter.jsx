import React from 'react'
function Counter() {
  return (
    <div>
      <div style={{ height: '100vh' }} className='bg-dark text-light d-flex justify-content-center align-items-center'>
        <div className='border rounded p-5 d-flex justify-content-center align-items-center flex-column'>
          <h1 style={{ fontSize: "150px" }}>0</h1>
          <div style={{ width: "600px" }} className='my-3 d-flex justify-content-center align-items-center'>
            <button className='btn btn-warning'>Decrement</button>
            <button className='btn btn-danger mx-5'>Reset</button>
            <button className='btn btn-success'>Increment</button>
          </div>
          <div className='my-5 d-flex justify-content-center align-items-center w-100'>
            <input type="text" className='form-control me-5' placeholder='Incremented Counter Amount' />
            <button className='btn btn-primary'>Increment by Amount</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Counter
