import React from 'react'
import BlogImage from '../../assets/images/user-p.jpg'
import { useNavigate } from 'react-router-dom/dist'
import { formatTimestamp, formatTimestampToDateString } from '../../../helper';
export default function EventListCard({ id, value }) {
  const navigate = useNavigate();
  return (
    <div className='pg-event-blog-card  mb-3'>
      <div className='col-lg-10 mx-auto'>
        <div className='p-3 bg-light event-shadow'>
          <div className=' row d-flex align-items-center '>
            <div className='col-md-2 col-4'>
              <div className='blog-image text-center'>
                <img src={value.desc_header_image} />
              </div>
            </div>
            <div className='col-md-7 col-8'>
              <div className='blog-text w-100'>
                <h4 className='mb-3'>{value.title}</h4>
                <div className='d-flex blog-time'>
                  {value.location && <p className='w-100'><i className="fa fa-map-marker text-black me-2" aria-hidden="true"></i>{value.location}</p>}
                  {value.start_date && <p className='w-100 text-end'><i className="fa fa-calendar text-black me-2" aria-hidden="true"></i> {formatTimestampToDateString(value.start_date)}</p>}
                  {/* <p><i className="fa fa-clock-o me-2" aria-hidden="true"></i> 9:00 AM</p> */}

                </div>
              </div>
            </div>
            <div className='col-md-3 col-12'>
              <div className='blog-btn me-2 text-end'>
                <button type='button' onClick={() => navigate(`/eventdetails?id=${id}`)}>View Detail <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>

  )
}
