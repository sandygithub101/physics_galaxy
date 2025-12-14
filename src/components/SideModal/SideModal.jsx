import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './SideModal.css'
import NoFoundCart from '../../assets/images/nofoundcart.png'
import Button4 from '../Buttons/Button4/Button4';
export default function SideModal() {
    const [showModal, setShowModal] = useState(false);

    return (

        <>
            <div className="App">
                <div className="text-center">
                    <button
                        type="button"
                        className="mybutton"
                        onClick={() => {
                            console.log("button click");
                            setShowModal(!showModal);
                        }}
                    >
                        Open or Close Sidebar
                    </button>
                </div>
            </div>

            {/* onclick show right side div  */}
            <div className={showModal ? "modal-dialog show" : "modal-dialog"} role="document">
                <div className="modal-content pg-cart-modal-content">
                    <div className="modal-header cart-header my-1">
                        <h4 className="modal-title" id="myModalLabel">
                            My Cart
                        </h4>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setShowModal(!showModal); }}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <hr className='m-0' />
                    <div className='modal-body'>
                        <div className='modal-cart-image text-center my-2'>
                            <img src={NoFoundCart} />
                        </div>



                        <hr />
                        <div className='cart-bill-detail mt-2'>
                            <h5 className='mb-2'>Bill Detail</h5>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h6>Price</h6>
                                <p className='mb-0'>₹</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h6>Discount</h6>
                                <p className='mb-0'> ₹ 30</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h6>Delivery Charge</h6>
                                <p className='mb-0'> ₹ 50</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between total mt-2'>
                                <h6>Total</h6>
                                <p className='mb-0'> ₹ 80</p>
                            </div>
                        </div>
                    </div>


                    <div className='bg-white shadow pg-delivery-add mt-2 p-1'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div>
                                <h6>Delivery Address</h6>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='me-2'>Noida</p>
                                <button className='change-btn'>Change</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="modal-footer d-flex align-items-center justify-content-between pg-review-btn">
                        <button className='review-btn me-3'>VIEW CART</button>
                        <button className='review-btn1'>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </>
    )
}

