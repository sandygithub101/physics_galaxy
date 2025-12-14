import React from 'react'

import './Card.css'
import Button5 from '../../../components/Buttons/Button5/Button5'
export default function Card({ data }) {
  return (
    <div className="card vjed-card border-0 shadow radious_all">
      <div className='viewdetail-image'>
        <img src={data.cover_image} className="card-img-top" alt="..." />
      </div>

      <div className="card-body vjed-card-body">
        <h5 className="card-title vjed-card-title">
          {data.title}
        </h5>
        <h6>
          {data.segment_information}
        </h6>
        <div className='text-center my-2'><Button5 name={'View Details'} /></div>

      </div>
    </div>
  )
}
