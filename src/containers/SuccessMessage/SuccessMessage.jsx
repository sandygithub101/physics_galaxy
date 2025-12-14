import React from 'react'


import './SuccessMessage.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button4 from '../../components/Buttons/Button4/Button4'
import Button5 from '../../components/Buttons/Button5/Button5'
import { useNavigate } from 'react-router-dom'
import LinkSend from '../../components/LinkSend/LinkSend'

export default function SuccessMessage({ order_detail, course_name }) {
  const navigate = useNavigate()
  const handleButtonClick = () => {
    window.location.href = '/library';
  }
  return (
    <>
      <Header />

      <section className='pg-success-message py-2'>
        <div className="container">
          <div className='pg-success-card text-center  py-4'>
            <div className='pg-thnaks'><h1 className='fw-bold my-2'>Thank You <i className="fa fa-check text-success" aria-hidden="true"></i></h1></div>
            <div className='pg-thnaks'><p className='my-2'>For any question or further assistance, Please email or call us at</p></div>

            <div className='d-flex align-items-center justify-content-center'>
              <div className='pg-social my-2'><p className='bg-warning p-1 px-3 text-dark fw-bold'><i className="fa fa-envelope me-2" aria-hidden="true"></i>info@physicsgalaxy.com</p></div>
              <div className='pg-social my-2 ms-2'><p className='bg-warning p-1 px-3 text-dark fw-bold'><i className="fa fa-phone me-2" aria-hidden="true"></i>+91 1234567890</p></div>
            </div>

            <div className='  col-lg-6 col-md-8 col-12 mx-auto'>
              <div className='pg-success-course my-3 border p-3'>
                <div className='pg-thnaks'><h4 className='fw-bold my-2'>COURSES NAME</h4></div>
                <div className='pg-thnaks'><p className='my-2'>{course_name}</p></div>

                <div className='d-flex align-items-center justify-content-center'>
                  <div className='pg-courses-id my-2 mx-auto'>
                    <h4 className=' text-dark fw-bold'> ORDER_ID</h4>
                    <p>{order_detail.txnid}</p>
                  </div>
                  <div className='pg-courses-id my-2 mx-auto'>
                    <h4 className=' text-dark fw-bold'>PAYMENT_ID</h4>
                    <p>{order_detail.payid}</p>
                  </div>
                </div>

                <div> <Button4 name={"Go to Library"} onButtonClick={handleButtonClick} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LinkSend />
      <Footer />

    </>
  )
}
