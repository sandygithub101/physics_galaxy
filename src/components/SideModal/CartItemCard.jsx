import React from 'react'
import CartImage from '../../assets/images/nofoundcart.png'
export default function CartItemCard({ data, removeItem }) {
  console.log(data, "data")
  return (
    <div className='modal-cart-added bg-white shadow mt-2 m-1 p-1' >
      <div className='row'>
        <div className='col-md-4'>
          <div className='cart-added-img p-1'>
            <img src={data.cover_image ? data.cover_image : CartImage} className='w-100' />
          </div>
        </div>
        <div className='col-md-8'>
          <div className='d-flex  justify-content-between cart-added-btn'>
            <h6 className='mb-0'>{data.course_name}</h6>
            <span className='px-1 cross-btn' onClick={() => removeItem(data.id)}><i className="fa fa-times" aria-hidden="true"></i></span>
          </div>
          <div className="  vjed-off-price d-block ">
            <h5>
              <span className="text-dark current-price me-2">
                ₹{data.course_price}
              </span>
              <span className="text-muted  me-2">
                Qty. {data.quantity}
              </span>

            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}
