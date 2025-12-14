import React from 'react'
import Rating from 'react-star-rating-lite';
import Button5 from '../../../../components/Buttons/Button5/Button5';
import './Card.css'
import { formatNumberWithCommasAndDecimals, resHandler, image_check } from '../../../../../helper';
import { addToCartService } from '../../../../services';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
export default function Card(props) {
  const navigate = useNavigate();
  // const dispatch = 
  // const handleBuyNowClick = (id) =>{
  //   props.buyNowClick(id)
  // }
  const { pathname } = useLocation();
  const handleAddToCart = async () => {
    const isLogin = localStorage.getItem('jwt')
    if (isLogin) {
      const formData = new FormData();
      formData.append('course_name', props.book_name);
      formData.append('course_id', props.id);
      formData.append('quantity', 1);
      formData.append('course_price', props.special_price);
      await addToCartService(formData).then(res => {
        const { data, status, message } = resHandler(res);
        status && toast.success('Item successfully added to Cart');
        status && props.cartUpdate()
        status && props.bookUpdate()
        !status && message && toast.error(message)
        // console.log(res)
      })
    }
    else {
      const fullUrl = window.location.href;
      localStorage.setItem('redirect', fullUrl);
      navigate('/login')
    }

  }
  return (
    <div id="ver1" className=" col-lg-4 col-md-6 col-12 p-2">

      <div className="pg-cg-card books-card">
        <div className="pg-content">
          <a className="pg-content-overlay"></a>
          <img className="pg-content-image" src={image_check(props.image)} alt="" />
          <div className="pg-content-details fadeIn-bottom" onClick={() => props.buyNowClick(props.id)}>
            <a className="pg-content-title fw-bold"  >Explore</a>
          </div>

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
          <div><p>{props.is_gst == '0' ? '(GST Included)' : '(GST Excluded)'}</p></div>
          {/* <div className="pg-validity mb-3"><i className="fa fa-calendar" aria-hidden="true"></i> Validity 365 Days</div> */}
          <div className="pg-valid text-center"><Button5 name={Number(props.cart_quantity) ? "Added" : "Add To Cart"} onButtonClick={handleAddToCart} disabled={Number(props.cart_quantity)}></Button5></div>
        </div>
      </div>


    </div>
  )
}
