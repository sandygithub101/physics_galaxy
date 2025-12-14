import React from 'react'

import './AddressModal.css'
import Button4 from '../../components/Buttons/Button4/Button4'
import Button5 from '../../components/Buttons/Button5/Button5'
import BuyCourse from '../../assets/images/buycourse.jpg'
import vedio_app from '../../assets/images/videocourse.jpg';
import AppStore from '../../assets/images/apple-hd.png'


export default function AddressModal() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 mx-auto mt-4 mb-3'>
                    <div className='text-center pg-addressmodal p-2 bg-white shadow'>
                        <div className='address-title mt-2 mb-3'>
                            <h4>Add New Location</h4>
                        </div>

                        <div className='mt-2 px-3'>
                            <form>
                                <input type="text" placeholder="Enter Name*" className='form-control w-100 border p-2 mb-2 rounded' />
                                <input type="text" placeholder="Enter Email" className='form-control w-100 border p-2 mb-2 rounded' />
                                <input type="text" placeholder="Enter Full Address*" className='form-control w-100 border p-2 mb-2 rounded' />
                                <input type="text" placeholder="Flat no./building name/Street no.*" className='form-control w-100 border p-2 mb-2 rounded' />
                                <input type="text" placeholder="Landmark(optional)" className='form-control w-100 border p-2 mb-2 rounded' />
                                <select className="form-select shadow-none mb-2" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <select className="form-select shadow-none mb-2" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <input type="text" placeholder="Mobile no.*" className='form-control w-100 border p-2 mb-2 rounded' />
                                <div className='my-3'>
                                    <Button5 name={'Save & Proceed'} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 mx-auto mt-4 mb-3'>
                    <div className='pg-addressmodal p-3 bg-white shadow'>
                        <div className='text-end pg-newaddress'>
                            <button type='button'>+Add New Address</button>
                        </div>
                        <div className='savesaddress ps-4'>
                            <h5>save address</h5>
                            <p>1 saved address</p>
                        </div>

                        <div className='d-flex'>
                            <div className='p-1'>  <input className="form-check-input shadow-none" type="radio" checked /></div>
                            <div className='addressdetails p-3 w-100'>
                                <h5>Office</h5>
                                <span className='fw-bold'>Location :</span><span> Noida</span><br />
                                <span className='fw-bold'>Street :</span><span> 12</span><br />
                                <span className='fw-bold'>Landmark :</span><span> Electronic City</span><br />
                                <span className='fw-bold'>Mobile no :</span><span> 1234567890</span><br />
                                <span className='fw-bold'>Email :</span><span> abc@123gmail.com</span><br />
                                <span className='fw-bold'>City :</span><span> Noida</span><br />
                                <span className='fw-bold'>Area :</span><span> 123456</span><br />
                                <div className='d-flex align-items-center justify-content-between pt-3 my-2  pg-newaddress border-top'>
                                    <button type='button'>Edit</button>
                                    <button type='button'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 mx-auto mt-4 mb-3'>
                    <div className='pg-addressmodal p-3 bg-white shadow'>
                        <div className='my-3 pg-changedadd'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h5>Change Delivery Address</h5>
                                <button type='button'><i className="fa fa-times" aria-hidden="true"></i></button>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className='d-flex justify-content-between border-bottom'>
                                <div className='d-flex '>
                                    <div className='p-1 me-2'>  <input className="form-check-input shadow-none" type="radio" checked /></div>
                                    <div>
                                        <span className='fw-bold'>Sahil</span><span className='ms-2'>(Default)</span><br />
                                        <span>Block F Deepak Vihar near Labour Chock,Khora Gaon</span><br />
                                        <span>Noida - 201309</span><br />
                                    </div>
                                </div>
                                <div className='pg-changedaddbtn'>
                                    <button type='button'>Home</button>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between border-bottom mb-3'>
                            <div className='d-flex '>
                                <div className='p-1 me-2'>  <input className="form-check-input shadow-none" type="radio" /></div>
                                <div>
                                    <span className='fw-bold'>Sahil</span><span className='ms-2'>(Default)</span><br />
                                    <span>Block F Deepak Vihar near Labour Chock,Khora Gaon</span><br />
                                    <span>Noida - 201309</span><br />
                                </div>
                            </div>
                            <div className='pg-changedaddbtn'>
                                <button type='button'>Office</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 mx-auto mt-4 mb-3'>
                    <div className='pg-addressmodal p-3 bg-white shadow text-center'>

                        <div className=' pg-changedadd'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h5>Buy Course</h5>
                                <button type='button'><i className="fa fa-times" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <hr className='my-0' />
                        <div className='text-center my-1'>
                            <img src={BuyCourse} />
                        </div>
                        <div className='my-2 pg-buycourse-heading'>
                            <h5>You need to buy this course to view its content</h5>
                        </div>

                        <div className='my-2 '>
                            <Button4 name={'Buy Course'} />
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 mx-auto mt-4 mb-3'>
                    <div className='pg-addressmodal p-3 bg-white shadow text-center'>

                        <div className=' pg-changedadd'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h5>Course Enrolled</h5>
                                <button type='button'><i className="fa fa-times" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <hr className='my-0' />
                        <div className='text-center my-1 pg-lock'>
                            <i className="fa fa-lock text-warning" aria-hidden="true"></i>
                        </div>
                        <div className='my-3 pg-buycourse-heading'>
                            <h5 className='text-dark my-3'>You have enrolled in this course</h5>
                            <h6 className='text-muted my-3'>Please, <button className='fw-bold'>login</button> on to get access to free leson</h6>
                        </div>
                        {/* <hr/>
          <div className='my-2 pg-buycourse-heading'>
          <h6 className='text-muted'>Thanks for being with us  <button className='fw-bold'>Browse More Course</button></h6>
          </div> */}
                    </div>
                </div>

                <div className='col-lg-12 mx-auto mt-4 mb-3'>
                    <div className=' p-3 bg-white shadow text-center'>
                        <div className="row d-flex align-items-center justify-content-center">
                            {/* <!-- Left side content --> */}
                            <div className="col-lg-7 col-md-7">
                                <div className="video_app_content">
                                    <h2 className='fs-1'>Videos available on app</h2>
                                    <p>You can watch on Physics Galaxy App only so download app to kickstart your exam preparation with the Dream Team</p>
                                    <h5>Anytime, Any where Access to Learning</h5>
                                    <h4>Available on all platforms</h4>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="downl_btn marg_con d-flex justify-content-between  text-center">
                                                <a target="_blank" className="app-img p-1">
                                                    <img
                                                        src="https://www.codesquadz.com/education_staging/../website_assets/img/app-edu-android-app.png"
                                                        alt="app-edu-android-app"
                                                        className="img-fluid"
                                                    />
                                                </a>
                                                <a target="_blank" className="app-img p-1">
                                                    <img
                                                        src={AppStore}
                                                        alt="app-edu-windows-app"
                                                        className="img-fluid"
                                                    />
                                                </a>
                                                <a target="_blank" className="app-img p-1">
                                                    <img
                                                        src="https://www.codesquadz.com/education_staging/../website_assets/img/app-edu-windows-app(1).png"
                                                        alt="app-edu-windows-app"
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>You need to buy this course to view its content</h3>
                                    <button className='w-100 fw-bold'>Buy Now</button>
                                </div>
                            </div>

                            {/* <!-- Right side image --> */}
                            <div className="col-lg-5 col-md-5">
                                <div className="video_app_image w-100">
                                    <img src={vedio_app} alt="app_img" className='w-100' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='col-lg-12 mx-auto mt-4 mb-3'>
                    <div className=' p-3 bg-white shadow text-center'>
                        <div className="row d-flex align-items-center justify-content-center">
                            {/* <!-- Left side content --> */}
                            <div className="col-lg-7 col-md-7">
                                <div className="video_app_content">
                                    <h2 className='fs-1'>Videos available on app</h2>
                                    <p>You can watch on Physics Galaxy App only so download app to kickstart your exam preparation with the Dream Team</p>
                                    <h5>Anytime, Any where Access to Learning</h5>
                                    <h4>Available on all platforms</h4>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="downl_btn marg_con d-flex justify-content-between  text-center">
                                                <a target="_blank" className="app-img p-1">
                                                    <img
                                                        src="https://www.codesquadz.com/education_staging/../website_assets/img/app-edu-android-app.png"
                                                        alt="app-edu-android-app"
                                                        className="img-fluid"
                                                    />
                                                </a>
                                                <a target="_blank" className="app-img p-1">
                                                    <img
                                                        src="https://www.codesquadz.com/education_staging/../website_assets/img/app-edu-windows-app(1).png"
                                                        alt="app-edu-windows-app"
                                                        className="img-fluid"
                                                    />
                                                </a>
                                                <a target="_blank" className="app-img p-1">
                                                    <img
                                                        src="https://www.codesquadz.com/education_staging/../website_assets/img/app-edu-windows-app(1).png"
                                                        alt="app-edu-windows-app"
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* <!-- Right side image --> */}
                            <div className="col-lg-5 col-md-5 mx-auto">
                                <div className="video_app_image">
                                    <img src={vedio_app} alt="app_img" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
