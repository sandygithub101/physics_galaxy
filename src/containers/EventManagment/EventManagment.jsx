import React from 'react'

import './EventManagment.css'
import Eventimage from '../../assets/images/eventmanag.png'
import Qrcode from '../../assets/images/qr-code.png'
export default function EventManagment() {
    return (

        <>
            <div className='pg-event-managment-modal col-lg-5 col-md-6 col-12 mx-auto '>
                <div className=' m-4 p-3 shadow bg-light'>
                    <div className='row'>
                        <div className="col-md-4 col-4">
                            <div className='pg-event-manag-image'>
                                <img src={Eventimage} />
                            </div>
                        </div>
                        <div className="col-md-8 col-8">
                            <div className='pg-event-manag-text-sec'>
                                <h3 >Event Management </h3>
                                <div className='mb-3 mt-3'>
                                    <span><button type='button' className='text-muted'>3 Hours</button></span>
                                    <span className='ms-2'><button type='button' className='text-muted'> Offline</button></span>
                                </div>
                                <p><i className="fa fa-map-marker me-2" aria-hidden="true"></i>AppSquadz Software, Noida </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='pg-event-manag-time-sec'>
                            <div className='row'>
                                <div className='col-md-6 col-6'>
                                    <div>
                                        <div className='mt-2'>
                                            <p className='mb-0 text-muted'>Thursday, 31 Aug ‘23</p>
                                            <p className='mb-0 text-black'>10:00 AM</p>
                                        </div>
                                        <div className='mt-2'>
                                            <p className='mb-0 text-muted'>Name</p>
                                            <p className='mb-0 text-black'>Vikas Yadav</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-6'>
                                    <div>
                                        <div className='mt-2'>
                                            <p className='mb-0 text-muted'>No. of Seats</p>
                                            <p className='mb-0 text-black'>02</p>
                                        </div>
                                        <div className='mt-2'>
                                            <p className='mb-0 text-muted'>Mobile Number</p>
                                            <p className='mb-0 text-black'>+91 9876543210</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className='pg-event-qrcode text-center'>
                        <div className='pg-event-qrcode-image'>
                            <img src={Qrcode} />
                        </div>
                        <h5>Booking ID:<span> AB0987654321082</span></h5>
                    </div>

                </div>

            </div>


        </>
    )
}
