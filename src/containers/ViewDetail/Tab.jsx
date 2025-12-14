import React from 'react'
import lock_icon from "../../assets/images/icons/lock_icon.svg"
import { useEffect } from 'react';
export default function Tab({ item, Index, nextIndex, image }) {
  const handleClick = (index) => {
    window.scrollTo({ top: 50, behavior: 'smooth' });
    nextIndex(index)
  }
  return (
    <div className=" pg-tabs-description" onClick={() => handleClick(Index)}>
      <div className="tabs-deschovr d-flex align-items-center rounded shadow">
        <div className="pg-sb-topic d-flex align-items-center" style={{ width: "97%" }}>
          <span className="videoimage">

            <img src={item.image_icon && item.image_icon.length ? item.image_icon : image} height={'50px'} />
            {/* <i className="fa fa-file-text" aria-hidden="true"></i> */}
          </span>

          <h3>{item.title}</h3>
        </div>
        <div className="pg-sb-topic pe-2">
          <span className="videoimage text-center">
            {/* {item.is_locked == '0' ?   */}
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            {/* :  <img src={lock_icon}/>} */}
          </span>
        </div>
      </div>
    </div>
  )
}
