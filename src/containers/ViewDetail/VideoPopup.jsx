import React from 'react'
import Modal from '../../components/Modal/Modal'
import vedio_app from '../../assets/images/Group 20718.png';
import toast from 'react-hot-toast';
import Button5 from '../../components/Buttons/Button5/Button5';
export default function VideoPopup({ ModalOpen, CloseModal, is_purchased }) {

    const handleBuyNow = () => {

    }

    return (
        <Modal isOpen={ModalOpen} onClose={() => CloseModal()}>
            <div className="row d-flex align-items-center justify-content-center">
                {/* <!-- Left side content --> */}
                <div className="col-lg-7 col-md-7">
                    <div className="video_app_content">
                        <h2>Videos available on app</h2>
                        <p>You can watch on Physics Galaxy App only so download app to kickstart your exam preparation with the Dream Team</p>
                        <h5>Anytime, Any where Access to Learning</h5>
                        <h4>Available on all platforms</h4>
                        <div className="row">
                            <div className="col-md-10">
                                <div className="downl_btn marg_con d-flex justify-content-between  text-center">
                                    <a onClick={() => window.open('https://play.google.com/store/search?q=physics+galaxy&c=apps&hl=en-IN&pli=1')} target="_blank" className="app-img p-1">
                                        <img
                                            src="https://www.codesquadz.com/education_staging/../website_assets/img/app-edu-android-app.png"
                                            alt="app-edu-android-app"
                                            className="img-fluid"
                                        />
                                    </a>
                                    <a onClick={() => window.open('https://d2qxo9rqhf0w5j.cloudfront.net/427/admin_v1/test_management/question_bank/47415510_Physics%20Galaxy.exe')} target="_blank" className="app-img p-1">
                                        <img
                                            src="https://www.codesquadz.com/education_staging/../website_assets/img/app-edu-windows-app(1).png"
                                            alt="app-edu-windows-app"
                                            className="img-fluid"
                                        />
                                    </a>
                                    {/* <a target="_blank" className="app-img p-1">
                                            <img
                                                src="https://www.codesquadz.com/education_staging/../website_assets/img/app-edu-windows-app(1).png"
                                                alt="app-edu-windows-app"
                                                className="img-fluid"
                                            />
                                        </a> */}
                                </div>
                            </div>
                        </div>
                        {is_purchased === '0' && <p>You need to buy this course to view its videos on mobile app</p>}
                    </div>
                </div>

                {/* <!-- Right side image --> */}
                <div className="col-lg-5 col-md-5 mx-auto">
                    <div className="video_app_image text-center">
                        <img src={vedio_app} alt="app_img" />
                    </div>
                    {is_purchased === '0' && <div className='mt-3 px-1'><Button5 type='button' name={"Buy Now"} onButtonClick={handleBuyNow} /></div>}
                </div>

            </div>
        </Modal>
    )
}
