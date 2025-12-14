import React from "react";
import "./WhyChoose.css";
import NoOmentorship from '../../../assets/images/No.1 Mentorship Course.png'
import Authentic from '../../../assets/images/most-authentic-content.png'
import IndiaBest from '../../../assets/images/Indias-Best.png'
import TestSeries from '../../../assets/images/test-series.png'
export default function WhyChoose() {
  return (
    <section className="py-4 pg-why-choose">
      <div className="container">
        {/* <div className="my_star wt_8">
        <img src="https://www.videocrypt.com/website_assets/img/star.webp"/>
     </div>
      <div className="my_star wt_7">
        <img src="https://www.videocrypt.com/website_assets/img/star.webp"/>
     </div> */}
        <div className="row">
          <div className="pb-3 pg-platform text-center ">
            <h1 className="text-white fw-bold">
              Why{" "}
              <span className="pg-why-c text-warning">
                Choose Physics Galaxy
              </span>
            </h1>
            {/* <div className="my_star wt_9">
        <img src="https://www.videocrypt.com/website_assets/img/star.webp"/>
     </div> */}
            <p className="text-white">Your One Stop Destination For Success</p>
            {/* <div className="my_star wt_10">
        <img src="https://www.videocrypt.com/website_assets/img/star.webp"/>
     </div> */}
          </div>

          <div className="row">
            <div className="col-lg-3  col-md-3 col-6">
              <div className=" m-auto">
                <div
                  className="card pg-whychose-section mb-4 p-2"
                  data-aos="zoom-in"
                >
                  <div className="text-center pt-5 pb-4 pg-whychose-image">
                    <img src={IndiaBest} alt="lecturer" />
                  </div>

                  <div className="card-body choose-body">
                    <h5 className="text-warning text-center">
                      India's Best Courses
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className=" m-auto">
                <div className="card pg-whychose-section mb-4 p-2" data-aos="zoom-in">
                  <div className="text-center pt-4 pb-5 pg-whychose-image" >
                    <img src={TestSeries} alt="lecturer" />
                  </div>

                  <div className="card-body choose-body">
                    <h5 className="text-warning text-center">High Quality Test Series</h5>


                  </div>



                </div>
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className=" m-auto">
                <div className="card pg-whychose-section mb-4 p-2" data-aos="zoom-in">

                  <div className="text-center pt-4 pb-5 pg-whychose-image" >
                    <img src={NoOmentorship} alt="lecturer" />
                  </div>


                  <div className="card-body choose-body">
                    <h5 className="text-warning text-center">
                      No. 1 Mentorship Program</h5>


                  </div>

                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className=" m-auto">
                <div className="card pg-whychose-section mb-4 p-2" data-aos="zoom-in">
                  <div className="text-center pt-4 pb-5 pg-whychose-image">
                    <img src={Authentic} alt="lecturer" />
                  </div>

                  <div className="card-body choose-body">
                    <h5 className="text-warning text-center">
                      Most Authentic Content</h5>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
