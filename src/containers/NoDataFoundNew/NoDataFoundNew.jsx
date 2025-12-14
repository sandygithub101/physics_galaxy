import React from 'react'
import "./NoDataFoundNew.css"
import NodataImage from '../../assets/images/nodtaimg.png'
import { useNavigate } from 'react-router-dom';
export default function NoDataFoundNew(props) {
  const navigate = useNavigate();
  return (
    <div className='pg-no-data-found mt-2'>
      <div className='nodataimg' style={{ height: props.height }}>
        <img src={NodataImage} />
        <p>No Courses Found !<br></br>
          <span>Don't miss out, Start exploring our courses!</span>
        </p>
        <button onClick={() => navigate('/allcourses')}>Explore Courses</button>
      </div>
    </div>
  )
}
