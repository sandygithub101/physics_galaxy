import React from 'react'

export default function CartMobileCart({ value, removeItem }) {
    return (
        <div className='mobile_card_main'>
            <div className='row'>
                {/* <div className="bg-light d-flex justify-content-around mobile_card_main">
                                <div className="d-flex flex-column">
                                <img src={value.cover_image } width='80px' />
                                <input type="number" className='text-center mt-2 border' id="quantity" name="quantity" min="0" max="2" step="1" />  
                                </div>
                                <div>
                                    <ul className='list-unstyled'>
                                        <li>{value.course_name}</li>
                                        <li> ₹ {(value.course_price/value.quantity).toFixed(2)}</li>
                                        <li>
                                            <strong> ₹ {value.course_price} </strong>
                                        </li>
                                        <li>
                                        <span onClick={() =>removeItem(value.id)}> <i className="fa fa-trash me-2" aria-hidden="true"></i>Delete</span>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}






                <div className="col-md-4 col-5">
                    <div className='text-center'>
                        <div className='pg-mobile-card'>
                            <img src={value.cover_image} />
                        </div>
                        <input type="number" className='text-center mt-2 border border-dark' id="quantity" name="quantity" placeholder='1' min="1" max="2" step="1" />
                    </div>
                </div>
                <div className="col-md-8 col-7">
                    <ul className='list-unstyled'>
                        <li><strong>{value.course_name}</strong></li>
                        <li> ₹ {(value.course_price / value.quantity).toFixed(2)}</li>
                        <li>
                            <strong> ₹ {value.course_price} </strong>
                        </li>
                        <li>
                            <span onClick={() => removeItem(value.id)}> <i className="fa fa-trash me-2" aria-hidden="true"></i>Delete</span>
                        </li>
                    </ul>

                </div>
            </div>


        </div>




    )
}
