import React from 'react';
import './Model2.css';
const Modal2 = (props) => {

  const close = (e) => {
    e.preventDefault()

    if (props.onClose) {
      props.onClose()
    }

    if (props.onToggle) {
      props.onClose()
    }
  }

  if (props.isOpen === false)
    return null

  return (
    <div>
      <div className="custom-modal1 ">
        <div className='flex-end'><button type="button" className="btn-close shadow-none" onClick={(e) => close(e)} aria-label="Close"></button></div>
        {/* <div className='modal-title'>{props.title}</div> */}
        <div className='modal-main'>{props.children}</div>
      </div>
      <div className="bg" onClick={e => close(e)} />
    </div>
  );
};

export default Modal2;