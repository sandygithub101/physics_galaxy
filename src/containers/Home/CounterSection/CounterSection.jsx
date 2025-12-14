import React from "react";
import "./CounterSection.css";
import CountUp from "react-countup";
export default function CounterSection() {
  return (
    <section className="py-4 mt-4 pg-counterup">
      <div className="container ">
        <div className="pg-c-section">
          <div className="pb-3 pg-platform text-center">
            <h5 className="fw-bold text-white">
              India's Most
              <span>
                {" "}
                Reliable & Trusted E-Learning Platform For JEE, NEET,
                INTERNATION OLYMPIADS.
              </span>
            </h5>
            <p>Begin your journey to success.</p>
          </div>

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
      </div>
    </section>
  );
}
