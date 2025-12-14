import React from 'react'
import logo from '../../assets/images/galaxy-logo.png'
import check from '../../assets/images/icons/check.webp'
import './Thankyou.css'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

export default function Thankyou() {
    return (
        <>
            <Header />
            {/* <header className="iqra-header">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="logo p-2">
                            <img src={logo} className="iqrancertfoundation" />
                        </div>
                    </div>
                </div>
            </header> */}

            <section className="educrypt-thankypu-section pt-3 pb-3" id="thank">
                <div className="container">
                    <div className="educrypt-thanks-card">
                        <div className="text-center mx-auto educrypt-logo">
                            <img className="mt-2 " src={check} alt="right check" />
                        </div>
                        <div className="text-center py-3 educrypt-thank-title">
                            <h1>Thank you!</h1>
                            <h5>We'll get back to you soon.</h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-center py-2 educrypt-thank-btn">
                            <a href="/"
                                className="btn btn-dark btn-lg preButton shadow-none customborder py-2 px-4 m-2 font400">Back</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <footer className="iqra-footer" id="footer">
                <div className="container">
                    <div className="p-3 text-center">
                        <p className="mb-0">© 2023 IQRA IAS Academy for Civil Service</p>
                    </div>
                </div>
            </footer> */}
            <Footer />
        </>

    )
}
