import React from "react";
import "./Card.css";
import Button5 from "../../Buttons/Button5/Button5";
import Rating from "react-star-rating-lite";
import { useState } from "react";
// import OverLay from './OverLay';
import { formatNumberWithCommasAndDecimals, image_check } from "../../../../helper";
import { useNavigate } from "react-router-dom";
import Button6 from "../../Buttons/Button6/Button6";
export default function Card(props) {
  const navigate = useNavigate();
  const [openOverlay, setOpenOverlay] = useState(false);
  const handleViewDetailsClick = (id) => {
    // console.log(id)
    // e.preventDefault();
    navigate(`/view_details?course_id=${id}`);
  };
  const handleBuynowClick = (value) => {
    navigate(`/coursesorder?course_id=${value}`);
  };

  return (
    <div className="col-lg-4 col-md-6">
      <div
        className=" pop"
        id="pop-1"
        data-iteration="1"
        data-container="body"
        data-toggle="popover-1"
        data-placement="auto"
        data-bs-original-title=""
        title=""
        onMouseEnter={() => setOpenOverlay(true)}
        onMouseLeave={() => setOpenOverlay(false)}
      >
        <div id="ver1" className="my-2">
          {/* <a href="#" style="text-decoration: none;"> */}
          <div className="card pg-cg-card border-0">
            <div className="image-size">
              <img
                src={image_check(props.imageUrl)}
                className="card-img-top"
                alt="learning"
              />
            </div>
            <div className="card-body">
              <div className="pg-cg-c-title mb-2">
                <h5>{props.name}</h5>
                <p>By Physics Galaxy</p>
              </div>
              {/* <div className="rating-box-courses mb-2">
                    <span className="rating-point fw-bold">{props.avg_rating}</span>
                    <Rating value={props.avg_rating} readonly />
                   
                    <span className="rating-num">({props.user_rated})</span>
                  </div> */}

              <div className="pg-validity mb-2">
                <i className="fa fa-calendar" aria-hidden="true"></i> Validity{" "}
                {props.validity}
              </div>
              <hr className="mb-2 mt-2" />
              <div className="d-flex align-items-center justify-content-start ">
                <div className="price">
                  {props.course_sp == 0
                    ? "Free For Students"
                    : `₹${formatNumberWithCommasAndDecimals(props.course_sp)}`
                  }
                </div>
                {props.mrp > props.course_sp && (
                  <div className="price-cross mx-1">
                    ₹{formatNumberWithCommasAndDecimals(props.mrp)}
                  </div>

                )}

              </div>
              <div>
                {props.mrp == 0 && <div className="pricegst mb-2">
                  {'(Limited Time Offer)'
                  }
                </div>}
              </div>
              <div>
                {props.mrp > 0 && <div className="pricegst mb-2">
                  {props.is_gst == 0
                    ? "(GST Included)"
                    : "(GST Excluded)"
                  }
                </div>}
              </div>

              {/* {props.mrp != 0  ? <div className="pricegst mb-2"> (GST Included) </div>: <div className="pricegst mb-2"> (GST Excluded) </div> } */}

              <div className="d-flex align-items-center justify-content-between">
                {/* {!Number(props.is_purchased) ? !Number(props.course_sp) &&   <div className=" w-100 p-1"><Button5 name= {"Add to Library"} onButtonClick={() =>handleViewDetailsClick(props.id)}/></div>: ''}
    {!props.is_purchased && Number(props.course_sp) != 0 &&  <div className=" w-100 p-1"><Button5 name= {"Buy Now"} onButtonClick={() =>handleBuynowClick(props.id)}/></div>}      */}
                <div className=" w-100 p-1">
                  {props.is_purchased || props.course_sp == 0 ? (
                    <Button5
                      name={"Explore"}
                      onButtonClick={() => handleViewDetailsClick(props.id)}
                    />
                  ) : (
                    <>
                      <div className="d-flex">
                        <Button5
                          name={"Explore"}
                          onButtonClick={() => handleViewDetailsClick(props.id)}
                        />
                        <Button6
                          name={"Buy Now"}
                          onButtonClick={() => handleBuynowClick(props.id)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* </a> */}
        </div>
        {/* <OverLay isOpen={openOverlay} ><section className="popup" id="pop-1" data-iteration="1">
                <div className=" tooltip-card pickHead">
                  <div className='popup-card-tittle'><h5 className="fw-bold">Computer Networking Course</h5>
                    </div>
                    <hr/>
                    <div className="row tooltip-course-meta text-center px-3">
                        <div className="col ">300+<br/>Live Lectures</div>
                        <div className="col ">250+<br/>DPPs</div>
                        <div className="col  ">250+<br/>DPP Solutions</div>
                        <div className="col  ">20+<br/>Tests</div>
                    </div>
                    <hr/>
                    <p className="px-3 fw-bold">Special Discounted Price</p>
                    <div className="tooltip-course-price px-3">
                      <span className="price ">₹13,300.00</span>
                      <span className="price-cross ms-2">₹300.00</span>
                    <span className="cutoff ms-2">14% OFF</span>
                    </div>
                  <hr/>  
                  <div className="tooltip-footer"></div>
                </div>
            </section></OverLay> */}
      </div>
    </div>
  );
}
