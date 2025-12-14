import React from 'react'
import ReactRotatingText from 'react-rotating-text';
import { Link } from 'react-router-dom';
export default function CarouselItem({ value }) {
  return (
    <div className="item">
      <div className="card m-3 shadow border-0 pg-hdstaf-card" style={{ borderRadius: '20px' }}>
        <div className="row g-0 d-flex align-items-center justify-content-center">

          <div className="col-md-8">
            <div className="card-body pg-card-body p-1 ms-4">

              <h1 className="fw-bold">LEARN FROM&nbsp;
                <ReactRotatingText className="txt-rotate" items={[`${value.name}`]} />
                {/* <span className="txt-rotate" data-period="1000" data-rotate='["ASHISH ARORA SIR"]'></span> */}
              </h1>

              <p className="card-text d-flex"><i className="fa fa-star me-2 mt-1 text-warning" aria-hidden="true"></i> {value.text_1}</p>
              <p className="card-text d-flex"><i className="fa fa-star me-2 mt-1 text-warning" aria-hidden="true"></i> {value.text_2}</p>
              <p className="card-text d-flex"><i className="fa fa-star me-2 mt-1 text-warning" aria-hidden="true"></i> {value.text_3}</p>
              <p className="card-text d-flex"><i className="fa fa-star me-2 mt-1 text-warning" aria-hidden="true"></i> {value.text_4}</p>
              <p className="card-text fst-italic"><i className="fa fa-quote-left me-2 text-warning fw-bold" aria-hidden="true" ></i>{value.message}<i className="fa fa-quote-right ms-2 text-warning fw-bold" aria-hidden="true" ></i></p>
              <h4 className="text-dark pg-mented">
                <span >Mentor of</span>
                <span className="fw-bold pg-prep"> {value.channel_name}</span>
                <span ><Link to={value.channel_url}> Youtube channel: <i className="fa fa-youtube-play ms-2 text-danger" aria-hidden="true" ></i></Link></span>
              </h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-img">
              <img src={value.image} className="img-fluid" alt="ashish arora sir" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
