import React from 'react';
import './Modal1.css';
const Modal1 = (props) => {

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
      <div className={"custom-modal1 " + props?.modalCenter}>
        {/* <div className='flex-end'><button type="button" className="btn-close shadow-none" onClick={(e) => close(e)}  aria-label="Close"></button></div> */}
        {/* <div className='modal-title'>{props.title}</div> */}
        <div className={'modal-main ' + props?.modalCenter1}>{props.children}</div>
      </div>
      <div className="bg" onClick={e => close(e)} />
    </div>
  );
};

export default Modal1;