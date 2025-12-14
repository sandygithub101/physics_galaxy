import React from 'react'
import './Button6.css';
export default function Button6(props) {
  return (
    <button type={props.type} disabled={props.disabled} className="btn btn-6 border-0 shadow-none" onClick={(e) => props.onButtonClick(e)} ><span>{props.name}</span></button>
  )
}
