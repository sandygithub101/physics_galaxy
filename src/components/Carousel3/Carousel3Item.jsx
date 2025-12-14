import React, { useState } from 'react'

import ReactRotatingText from 'react-rotating-text';
import AmanBansal from '../../assets/images/Aman-Bansal.png';
export default function Carousel3Item({ value }) {
  const [fullLength, setFullLenth] = useState(true)
  function truncateTitle(value, maxLength = 200) {
    if (value.length <= maxLength) {
      return value;
    } else {
      return value.slice(0, maxLength) + '...';
    }
  }
  return (
    <div className="item ">
      <div className="p-3 card-section">
        <div className="card-testi">

          <div className="px-4 card-testi-p pb-3">
            <p className="font-weight-light my-3 text-dark "><i className="fa fa-quote-left" aria-hidden="true"></i>
              {fullLength ? <>{truncateTitle(value.message)}<span className='readmordiv cursor' onClick={() => setFullLenth(false)}>Read more</span></> : `${value.message}`}</p>
          </div>
        </div>
        <div className="row d-flex " >
          <div className="col-lg-4 col-md-5 col-5">
            <div className=" circle text-white rounded-circle  position-relative" >
              <img className="rounded-circle shadow " src={value.image} alt="" />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 col-7">
            <div className="m-1">
              <h5 className=" mb-0">{value.name}</h5>
              <small className="font-weight-bold">{value.position}</small>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
