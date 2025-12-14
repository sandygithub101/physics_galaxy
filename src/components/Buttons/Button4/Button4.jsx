import React from 'react'
import './Button4.css';
export default function Button4(props) {
  return (
    <button type='button' disabled={props.disabled} onClick={props.onButtonClick} className="btn btn-4 pg-viewdetails border-0 shadow-none fw-bold"><span>{props.name} </span></button>
  )
}
