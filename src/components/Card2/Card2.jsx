import React from 'react'
import './Card2.css';
import Rating from 'react-star-rating-lite';
import Button5 from '../Buttons/Button5/Button5';
import { formatNumberWithCommasAndDecimals, image_check } from '../../../helper';
import { useNavigate } from 'react-router-dom';

export default function Card2(props) {
  const navigate = useNavigate()
  const handleViewDetailsClick = (id) => {
    navigate(`/view_details?course_id=${id}`)
  };
  const handleBuynowClick = (value) => {
    navigate(`/coursesorder?course_id=${value}`)

  }
  return (
    <>

      <div className=" bestsellarcourses m-2">
        {/* <a href="#" style="text-decoration: none;"> */}
        <div className="card pg-cg-card " >
          <div className='image-size'>
            <img src={image_check(props.imageUrl)} className="card-img-top" alt="learning" />
          </div>
          <div className="card-body pg-course-card">
            <div className="pg-cg-c-title my-2">
              <h5 className="card-title">{props.name}.</h5>
              {/* <p>Stephane Maarek | AWS Certificate cloud</p> */}
            </div>
            {/* <!-- <div className="pg-cg-c-name"></div> --> */}
            {/* <div className="rating-box-courses">
                  <span className="rating-point fw-bold">{props.avg_rating}</span>
                  <Rating value={props.avg_rating} readonly /> */}

            {/* <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span> */}
            {/* <span className="rating-num">({props.user_rated})</span>
                </div> */}
            <div className=" my-2">
              <span className="price">₹{formatNumberWithCommasAndDecimals(props.course_sp)}</span> &#160;
              <span className="price-cross ms-2">₹{formatNumberWithCommasAndDecimals(props.mrp)}</span>
            </div>
            <div className="pg-validity mb-2"><i className="fa fa-calendar" aria-hidden="true"></i> Validity {props.validity}</div>
            <div></div>
            <div className="d-flex align-items-center justify-content-between mt-2">
              {/* {!props.is_purchased &&  <div className=" w-100 p-1"><Button5 name= {"Buy Now"} onButtonClick={() =>handleBuynowClick(props.id)}/></div>}      */}
              <div className=" w-100 p-1"><Button5 name={"View Details"} onButtonClick={() => handleViewDetailsClick(props.id)} /></div>
            </div>

          </div>
        </div>
        {/* </a> */}
      </div>
    </>
  )
}
