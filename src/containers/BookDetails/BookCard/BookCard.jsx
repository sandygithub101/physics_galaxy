import React from 'react'
import Button5 from '../../../components/Buttons/Button5/Button5'
import Rating from 'react-star-rating-lite';

import './BookCard.css'

export default function BookCard(props) {
  return (
    <div id="ver1" className="p-2">

      <div className="pg-cg-card books-card">
        <div className="pg-content">
          <a className="pg-content-overlay"></a>
          <div className='book-image-size'>
            <img className="pg-content-image" src={props.image} alt="" />
          </div>
          <div className="pg-content-details fadeIn-bottom">
            <a className="pg-content-title fw-bold"  >Explore</a>
          </div>

        </div>
        <div className="pg-book-card-body">
          <div className="pg-cg-c-title my-2"><h5 className="card-title ">{props.book_name}</h5></div>
          <div className="rating-box-courses mb-2">
            <span className="rating-point ">{props.rating}</span>
            <Rating value={props.rating} readonly />
            <span className="rating-num">({props.user_rated})</span>
          </div>
          <div className="d-flex    my-2">
            <div className="price">₹</div>
            {props.price > props.special_price && <div className="price-cross ms-2">₹</div>}
          </div>
          <div className="pg-validity mb-3"><i className="fa fa-calendar" aria-hidden="true"></i> Validity 365 Days</div>
          <div className="pg-valid text-center"><Button5 name={"View Details"} onButtonClick={() => props.buyNowClick(props.id)}></Button5></div>
        </div>
      </div>


    </div>
  )
}
