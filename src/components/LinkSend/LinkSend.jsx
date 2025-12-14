import React from "react";
import { Link } from "react-router-dom";
import appImage from "../../assets/images/physics-galaxy-removebg-preview.png";
import toast from "react-hot-toast";
import CountUp from "react-countup";
import "./LinkSend.css";
export default function LinkSend() {
  return (
    <>
      <section className="asdz-app-link shadow">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-7 col-md-7">
              <div className="py-2" data-aos="zoom-in">
                <div className="app-link-heading py-3">
                  <h2 className="text-dark fw-bold">
                    Download our apps & Start learning now
                  </h2>
                </div>
                <div className="app-link app-get-link col-xl-8 col-lg-8 col-md-10  py-3">
                  {/* <div className="input-group pg-link-group mb-3">
                      <span className="input-group-text bg-warning text-white fw-bold">+91</span>
                      <input type="number" id="mobile-no" className="form-control border border-warning mobile_no shadow-none" placeholder="Enter Your Mobile Number" />
                      <input type="button" className="btn btn-warning shadow-none text-white fw-bold" id="get-link" value="GET LINK"/>
                     
                    </div> */}
                </div>

                <div className="row">
                  <div className="col-md-10">
                    <div className="downl_btn marg_con d-flex  ">
                      <Link
                        to="https://play.google.com/store/search?q=physics+galaxy&c=apps&hl=en-IN&pli=1"
                        target="_blank"
                        className="app-img p-1"
                      >
                        <img
                          src="https://www.codesquadz.com/education_staging/../website_assets/img/app-edu-android-app.png"
                          alt="app-edu-android-app"
                          className="img-fluid"
                        />
                      </Link>

                      <Link
                        to="https://d2qxo9rqhf0w5j.cloudfront.net/427/admin_v1/test_management/question_bank/26831980_Physics%20Galaxy%20Setup.exe"
                        target="_blank"
                        className="app-img p-1"
                      >
                        <img
                          src="https://www.codesquadz.com/education_staging/../website_assets/img/app-edu-windows-app(1).png"
                          alt="app-edu-windows-app"
                          className="img-fluid"
                        />
                      </Link>

                      {/* <Link to="/" target='_blank' className="app-img p-1" >
                    <img src="https://www.codesquadz.com/education_staging/../website_assets/img/app-edu-windows-app(1).png" alt="app-edu-windows-app" className="img-fluid"/>
                  </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-5">
              <div className="" data-aos="zoom-in">
                <img
                  src={appImage}
                  alt="Mobile app Link"
                  className="img-fluid pg-sirrevw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="asdz-app-linkk">
        <div className="container">
          <div className="row text-center py-3">
            <div className="col-lg-3 col-md-3 col-6" data-aos="zoom-in">
              <div className="card-counter  mb-4">
                <CountUp
                  className="text-warning fw-bold"
                  end={130}
                  duration={3.5}
                />
                <span className="text-warning fw-bold">+</span>
                {/* <CountUp className='text-warning fw-bold' isCounting end={1320} du ration={3.2} /> */}
                {/* <h2 data-max="10" className="">M+</h2> */}
                <p>AIR in top 100</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6" data-aos="zoom-in">
              <div className="card-counter  mb-4">
                <CountUp
                  className="text-warning fw-bold"
                  end={30}
                  duration={3.5}
                />
                <span className="text-warning fw-bold">+</span>
                {/* <CountUp className='text-warning fw-bold' isCounting end={1320} durat ion={3.2} /> */}
                {/* <h2 data-max="10" className="">M+</h2> */}
                <p>Years of Experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6" data-aos="zoom-in">
              <div className="card-counter  mb-4">
                <span className="text-warning fw-bold">High Quality</span>
                {/* <CountUp  className='text-warning fw-bold ' end={2500} duration={3.5} /><span className='text-warning fw-bold'>+</span> */}
                {/* <h2 data-max="2500" className="text-warning fw-bold">+</h2> */}
                <p>Content</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6" data-aos="zoom-in">
              <div className="card-counter  mb-4">
                <CountUp
                  className="text-warning fw-bold"
                  end={300}
                  duration={2}
                />
                <span className="text-warning fw-bold">M+</span>
                {/* <h2 data-max="8" id="test" className="text-warning">L+ </h2> */}
                <p>Views across the platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
