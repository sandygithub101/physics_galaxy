import React from 'react'
import './NotFound.css'
import { useNavigate } from 'react-router-dom';
export default function NotFound() {
  const navigate = useNavigate();
  return (

    <section className='pg-notfound m-5 p-5'>
      <div className="container">
        {/* <div>
    <h1 className='text-center fw-bold'>:(</h1>
    <h2 className='text-center'><span>404</span> </h2>
    <h2 className='text-center'> error occured, Page not found, check the URL and try again.</h2>
    </div> */}
        {/* <div className='error_main_box'>
                <div className='error_detail_box2'>
                    <h2>404</h2>
                    <p>PAGE NOT FOUND</p>
                    {/* <button onClick={() => navigate('/')}>Back To Home</button> *
                </div>
            </div> */}

        <div className='error_main_box border-0'>
          <div className="error_detail_box">
            <h2>404</h2>
            <p>error occured, Page not found, check the URL and try again.</p>
            <button type='button' onClick={() => navigate('/')}>Back To Home</button>
          </div>
        </div>
      </div>
    </section>

  )
}
