import React from 'react'
import { formatNumberWithCommasAndDecimals } from '../../../helper'
import { useNavigate } from 'react-router-dom/dist'

export default function RelatedCard(props) {
  const navigate = useNavigate()
  return (
    <div id="ver1" className=" col-lg-3 col-md-6 col-12 p-2 cursor" onClick={() => navigate(`/bookdetails/${props.id}`)}>

      <div className="pg-cg-card books-card">
        <div className="pg-content">
          {/* <a className="pg-content-overlay"></a> */}
          <img className="pg-content-image" src={props.image} alt="" />
          {/* <div className="pg-content-details fadeIn-bottom" >
                  <a className="pg-content-title fw-bold"  >Explore</a>
                </div> */}

        </div>
        <div className="pg-book-card-body">
          <div className="pg-cg-c-title my-2"><h5 className="card-title ">{props.book_name}</h5></div>
          {props.rating && <div className="rating-box-courses mb-2">
            <span className="rating-point ">{props.rating}</span>
            <Rating value={props.rating} readonly />

            <span className="rating-num">({props.user_rated})</span>
          </div>}
          <div className="d-flex    my-2">
            {props.special_price && <div className="price">₹{formatNumberWithCommasAndDecimals(props.special_price)}</div>}
            {props.price > props.special_price && <div className="price-cross ms-2">₹{formatNumberWithCommasAndDecimals(props.price)}</div>}
          </div>
          {/* <div className="pg-validity mb-3"><i className="fa fa-calendar" aria-hidden="true"></i> Validity 365 Days</div> */}
          {/* <div className="pg-valid text-center"><Button5 name={Number(props.cart_quantity) ? "Added" :"Add To Cart"} onButtonClick={handleAddToCart} disabled={Number(props.cart_quantity)}></Button5></div> */}
        </div>
      </div>


    </div>
  )
}
