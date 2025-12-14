import React, { useEffect } from 'react'
import './ContactUs.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LinkSend from '../../components/LinkSend/LinkSend'
import { Accordion } from 'react-bootstrap'
import { contactService, faqService } from '../../services'
import { resHandler } from '../../../helper'

export default function ContactUs() {

  useEffect(() => {
    contactUsFetch();
    faqFetch();
  }, [])

  const contactUsFetch = async () => {
    await contactService().then(res => {

    }).catch(err => console.log(err))
  }

  const faqFetch = async () => {
    await faqService().then(res => {
      let { data, status, message } = resHandler(res);
      console.log(data, "faq");

    }).catch(err => console.log(err))
  }

  return (
    <>
      <Header />
      <section className="contact-page-sec py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fa fa-map"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>Address</h2>
                    <span> Physics Galaxy, Shivneri Apartment (Basement), 134-135, Dalda Factory Road, Jadon Nagar-B, Mahaveer Nagar, Durgapura, </span>
                    {/* <span>1215 Lorem Ipsum, Ch 176080 </span>  */}
                    <span>Jaipur, Rajasthan 302020</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>E-mail</h2>
                    {/* <span>info@LoremIpsum.com</span>  */}
                    <span>physicsgalaxy@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fa fa-clock-o"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>office time</h2>
                    <span>Mon - Thu  9:00 am - 4.00 pm</span>
                    <span>Thu - Mon  10.00 pm - 5.00 pm</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="contact-page-form my-5 p-4" method="post">
                <h2 className="text-dark">Get in Touch</h2>
                <div className="row input-container">
                  <div className="col-md-6">
                    <div className="styled-input wide">
                      <input type="text" required />
                      <label>Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="styled-input wide">
                      <input type="text" required />
                      <label>subject</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="styled-input">
                      <input type="text" required />
                      <label>Email</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="styled-input" >
                      <input type="text" required />
                      <label>Phone Number</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="styled-input wide">
                      <textarea required></textarea>
                      <label>Message</label>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="btn submit-btn fw-bold">Send Message</div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-md-12">
              <div className="contact-page-map">

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14239.552425438913!2d75.828608!3d26.843511!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db617b8402db3%3A0xff782d3d03a88ebe!2sPHYSICSGALAXY.COM%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1695125465161!5m2!1sen!2sin" width="100%" height="450" frameborder="0" allowFullScreen></iframe>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227749.05322089008!2d75.62574173024464!3d26.88511513967126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1695043246793!5m2!1sen!2sin" width="100%" height="450" frameborder="0"  allowFullScreen></iframe> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            {/* <div className=" my-3 p-3">
        <div className="ps-3">
            <h1 className="fw-bold">FAQs</h1>
        </div>
        <div className="py-2">
          <Accordion >
            {[1,2,3,4,5,6,7].map((item,i) =>{
              return(
                <Accordion.Item eventKey={i}>
                  <Accordion.Header>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Accordion.Header>
                  <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>

                </Accordion.Item>
              )
            })}
            </Accordion>

        </div>
        </div> */}
          </div>
        </div>
      </section>
      <LinkSend />
      <Footer />
    </>
  )
}
