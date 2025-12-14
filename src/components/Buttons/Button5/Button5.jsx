import React from 'react'
import './Button5.css';
export default function Button5(props) {
  return (
    <button type={props.type} disabled={props.disabled} className="btn btn-5 border-0 shadow-none" onClick={(e) => props.onButtonClick(e)} ><span>{props.name}</span></button>
  )
}
