import React from 'react'
import "./NoDataFound.css"
import NodataImage from '../../assets/images/nodtaimg.png'
export default function NoDataFound(props) {
  return (
    <div className='pg-no-data-found mt-2'>
      <div className='nodataimg' style={{ height: props.height }}>
        <img src={NodataImage} />
        <p>Sorry! No Data Found</p>
      </div>
    </div>
  )
}
