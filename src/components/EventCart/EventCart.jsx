import React from 'react'
import './EventCart.css'
import cardImage from '../../assets/images/user-p.jpg'
export default function EventCart() {
  return (
    <div className='pg-card-event'>
      <div className='card pg-event-card'>
        <div className='pg-event-crosl-image'>
          <img src={cardImage} />
        </div>
        <p className='event-date'>20 sep 2023</p>
        <div className='card-body event-body p-3 bg-light'>
          <p><i className="fa fa-map-marker me-2" aria-hidden="true"></i> Noida, Sector 63</p>
          <h6>Explorations of Regional Chief Executive Network</h6>
          <button>Get Ticket <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
  )
}
