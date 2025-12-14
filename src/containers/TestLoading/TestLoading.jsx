import React from 'react'

import './TestLoading.css'
export default function TestLoading() {
  return (
    <>
      <div className='container-fluid loader_main d-flex justify-content-center align-items-center flex-wrap'>
        <h2 className='text-white'>Please Wait! Don't refresh page..</h2>
        <div className="loader"></div>
      </div>
    </>
  )
}
