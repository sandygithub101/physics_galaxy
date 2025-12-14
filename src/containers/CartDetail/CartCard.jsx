import React from 'react'
import { useNavigate } from 'react-router-dom/dist'

export default function CartCard({ value, removeItem }) {

    const navigate = useNavigate()
    return (
        <tr>
            <td>
                <div className='viewcart-image'>
                    <img src={value.cover_image} width='80px' />
                </div>
            </td>
            <td onClick={() => navigate(`//bookdetails/${value.course_id}`)} style={{ width: '40%', cursor: 'pointer' }}>
                {value.course_name}
            </td>
            <td>
                ₹ {(value.course_price / value.quantity).toFixed(2)}
            </td>
            <td>
                <input type="number" className='text-center border' min="1" max="2" value={value.quantity} readOnly />
            </td>
            <td>
                <strong> ₹ {value.course_price} </strong>
            </td>
            <td>
                <span onClick={() => removeItem(value.id)}> <i className="fa fa-trash me-2" aria-hidden="true"></i>Delete</span>
            </td>
        </tr>
    )
}
