import React from 'react'
import './Testimonials.css'
import AmanBansal from '../../assets/images/Aman-Bansal.png'
import DungaraRam from '../../assets/images/dungara-ram.png'
import Chitrang from '../../assets/images/Chitrang-Murdia.png'
import HarshitChopra from '../../assets/images/Harshit-Chopra.png'
import KunalGoyal from '../../assets/images/Kunal-Goyal.png'
import LuvKumar from '../../assets/images/luv-kumar.png'
import Header from '../../components/Header/Header'
import LinkSend from '../../components/LinkSend/LinkSend'
import Footer from '../../components/Footer/Footer'
import ReactOwlCarousel from 'react-owl-carousel'
import Button4 from '../../components/Buttons/Button4/Button4'
export default function Testimonials(props) {
  const handleButtonClick = () => {

  }
  const options = {
    loop: true,

    items: 1,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 6000,
    smartSpeed: 400,
    // nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };
  return (
    <>
      <Header />

      <section className="py-4 pg-testi-feeds">
        <div className="container">
          <div className="pg-testi-bg">
            <div className="row">
              <div className="col-md-6">
                <div className="p-2">
                  <ReactOwlCarousel   {...options}>
                    <div className="item active">
                      <div className="p-2 card-section">
                        <div className="card-testi">

                          <div className="px-4 card-testi-p ">
                            <p className="font-weight-light my-3 text-dark"><i className="fa fa-quote-left" aria-hidden="true"></i>I am very much fortunate that I am a student of Ashish Sir, His teaching methodology is excellent. The quality of Illustrations taken in his classes are good enough to develop a good basis of everything. Physics Galaxy Books and website covers every aspect of JEE Physics and is full of good quality questions and illustrations.</p>
                          </div>
                        </div>
                        <div className="row d-flex " >
                          <div className="col-lg-4 col-md-4 col-5">
                            <div className=" circle text-white rounded-circle  position-relative" >
                              <img className="rounded-circle shadow" src={AmanBansal} alt="" height="120px" width="120px" />
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-8 col-7">
                            <div className="m-1 testi-name mt-2">
                              <h5 className=" mb-0">Aman Bansal</h5>
                              <small className="font-weight-bold">AIR-1,JEEAdvanced 2016</small>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="item">
                      <div className="p-2 card-section">
                        <div className="card-testi">

                          <div className="px-4 card-testi-p ">
                            <p className="font-weight-light my-3 text-dark"><i className="fa fa-quote-left" aria-hidden="true"></i>Ashish Arora Sir, taught me Physics during preparation for JEE. He keeps className at ease with his light humor and able to convey complex concepts effectively in a way easier to understand for students. He is very organized and properly emphasize key ideas. I am thankful to him for his guidance and wish him best for future.</p>
                          </div>
                        </div>
                        <div className="row d-flex  " >
                          <div className="col-lg-4 col-md-4 col-5">
                            <div className=" circle text-white rounded-circle  position-relative" >
                              <img className="rounded-circle " src={DungaraRam} alt="" height="120px" width="120px" />
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-8 col-7">
                            <div className="m-1 testi-name mt-2">
                              <h5 className="font-weight-bold mb-0">DUNGARA RAM CHOUDHARY</h5>
                              <small className="font-weight-bold">AIR-1, IIT-JEE 2001</small>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="item">
                      <div className="p-2 card-section">
                        <div className="card-testi">

                          <div className="px-4 card-testi-p ">
                            <p className="font-weight-light my-3 text-dark"><i className="fa fa-quote-left" aria-hidden="true"></i>The Initiative of Physics Galaxy taken by Ashish Sir is an unmatched step toward educating students for FREE who cannot afford expansive coaching including students in rural areas. Physics Galaxy comprises extremely good content for theory and illustrations needed for preparation of all levels of Physics including JEE advanced and Physics Olympiad.</p>
                          </div>
                        </div>
                        <div className="row d-flex  " >
                          <div className="col-lg-4 col-md-4 col-5">
                            <div className=" circle text-white rounded-circle  position-relative" >
                              <img className="rounded-circle " src={Chitrang} alt="" height="120px" width="120px" />
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-8 col-7">
                            <div className="m-1 testi-name mt-2">
                              <h5 className="font-weight-bold mb-0">Chitrang Murdia</h5>
                              <small className="font-weight-bold">AIR-1, JEE(Advanced) 2014</small>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="item">
                      <div className="p-2 card-section">
                        <div className="card-testi">

                          <div className="px-4 card-testi-p ">
                            <p className="font-weight-light my-3 text-dark"><i className="fa fa-quote-left" aria-hidden="true"></i>In my experience, Ashish Arora Sir is one of the best teacher of Physics. It was only because of his teaching and his encouragement during my JEE preparation phase, that I was able to achieve AIR 2. His way of explaining concepts is so good that I can still recall most of these concepts even after 10 years.</p>
                          </div>
                        </div>
                        <div className="row d-flex  " >
                          <div className="col-lg-4 col-md-4 col-5">
                            <div className="font-weight-bold circle text-white rounded-circle  position-relative" >
                              <img className="rounded-circle " src={HarshitChopra} alt="" height="120px" width="120px" />
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-8 col-7">
                            <div className="m-1 testi-name mt-2">
                              <h5 className="font-weight-bold mb-0">HARSHIT CHOPRA</h5>
                              <small className="font-weight-bold">AIR-2 , IIT-JEE 2001</small>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="item">
                      <div className="p-2 card-section">
                        <div className="card-testi">

                          <div className="px-4 card-testi-p ">
                            <p className="font-weight-light my-3 text-dark"><i className="fa fa-quote-left" aria-hidden="true"></i>Starting from the basic level till very advance level Ashish Sir made our concepts crystal clear. Also his website and his book Physics Galaxy were extremely useful tools throughout our JEE preparation. Feel fortunate to have you our mentor.I am thankful to him for his guidance and wish him best for future.</p>
                          </div>
                        </div>
                        <div className="row d-flex  " >
                          <div className="col-lg-4 col-md-4 col-5">
                            <div className="circle text-white rounded-circle  position-relative" >
                              <img className="rounded-circle " src={KunalGoyal} alt="" height="120px" width="120px" />
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-8 col-7">
                            <div className="m-1 testi-name mt-2">
                              <h5 className="font-weight-bold mb-0">Kunal Goyal</h5>
                              <small className="font-weight-bold">AIR-3,JEEAdvanced 2016</small>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="item">
                      <div className="p-2 card-section">
                        <div className="card-testi">

                          <div className="px-4 card-testi-p ">
                            <p className="font-weight-light my-3 text-dark"><i className="fa fa-quote-left" aria-hidden="true"></i>Starting from the basic level to the very advanced level Ashish Sir made our concepts crystal clear. Also, his website and his book Physics Galaxy were extremely useful tools throughout our JEE preparation. Feel fortunate to have you as our mentor.
                            </p>
                          </div>
                        </div>
                        <div className="row d-flex  " >
                          <div className="col-lg-4 col-md-4 col-5">
                            <div className="circle text-white rounded-circle  position-relative" >
                              <img className="rounded-circle " src={'https://restapi.physicsgalaxy.com/testimonial/Kunal-Goyal.png'} alt="" height="120px" width="120px" />
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-8 col-7">
                            <div className="m-1 testi-name mt-2">
                              <h5 className="font-weight-bold mb-0">KUNAL GOYAL</h5>
                              <small className="font-weight-bold">AIR-3 , IIT-JEE 2002</small>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </ReactOwlCarousel>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-3 testi-form">
                  <h2 className="fw-bold text-warning">Submit Your Views About</h2>

                  <form >
                    <div className="row">
                      <div className="is-quarter">
                        <div className="m-1 testi-name">
                          <input id="name" name="name" type="text" className="form-control border shadow-none" placeholder='Enter Your Name*' required />
                          {/* <label for="name">Enter Your Name*</label> */}
                        </div>
                        <div>
                          <input id="surname" name="surname" type="text" className="form-control border shadow-none" placeholder='Enter Your Email*' required />
                          {/* <label for="surname">Enter Your Email*</label> */}
                        </div>
                      </div>

                      <div className="is-quarter">
                        <div>
                          <input id="subject" name="subject" type="text" className="form-control border shadow-none" placeholder='Enter City/District*' required />
                          {/* <label for="subject">Enter City/District*</label> */}
                        </div>

                      </div>
                    </div>

                    <div className="textarea">
                      <textarea type="text" id="msg" className="form-control border shadow-none" placeholder='Your FeedBack*'></textarea>
                      {/* <label for="msg">Your FeedBack*</label> */}
                    </div>

                    <div className="text-center py-3">
                      <Button4 name={"Submit"} onButtonClick={handleButtonClick} />
                    </div>

                  </form>
                </div>

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
