import React from 'react'
import './CardBookList.css'
import Button4 from '../Buttons/Button4/Button4'
import BookImage from '../../assets/images/pg-jee-ad.png'
export default function CardBookList() {
  const handleButtonClick = () => {

  }
  return (
    <div className="card my-3 shadow pg-bookdetails radious_all border-0">
      <div className="row g-0">
        <div className="col-md-4 col-12">
          <img src={BookImage} className="img-fluid radious_all p-2" alt="newCourse" />
        </div>
        <div className="col-md-8 col-12">
          <div className="card-body">
            <div className=" book-buy">

              <div className="book-card-section d-md-flex justify-content-between mb-2">
                <h3 className="card-title className-header"><b>Indian and World Geography Course</b></h3>
              </div>

              <div className="d-flex col-12 col-md-8 justify-content-center mb-1">
                <div className="col text-center border-2 border-end">
                  <div className="className-type-number">300+</div>
                  <div className="className-type-desc pt-2">Live Lectures</div>
                </div>
                <div className="col text-center border-2 border-end">
                  <div className="className-type-number">250+</div>
                  <div className="className-type-desc pt-2">DPPs</div>
                </div>
                <div className="col text-center border-2 border-end">
                  <div className="className-type-number">20+</div>
                  <div className="className-type-desc pt-2">Tests</div>
                </div>
                <div className="col text-center border-2 border-end">
                  <div className="className-type-number">250+</div>
                  <div className="className-type-desc pt-2">DPP Solutions</div>
                </div>
              </div>

              <div className="justify-content-start spe-price">Special Discounted Price</div>

              <div className="d-md-flex justify-content-between mt-3">
                <div className="d-flex justify-content-between col-md-5">
                  <div className="className-price">₹ 3600</div>
                  <div className="className-old-price"><del>₹ 4200</del></div>
                  <div className="className-price-off">14% OFF</div>
                </div>

                <div className="float-end">
                  <div className="font-fam-med font-16 col-6 mb-1">
                    <span className="expCourse">  <Button4 name={"View Details"} onButtonClick={handleButtonClick} /></span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
