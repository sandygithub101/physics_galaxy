import React from 'react'
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
import Image_icon from '../../assets/images/icons/Image.png'
export default function ImageLayer3({ value }) {
  const [imageUrl, setImageUrl] = useState()

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenImage = async (item) => {
    setImageUrl(item.file_url);
    setIsModalOpen(true);
  }
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setImageUrl(); }}>
        {imageUrl ? <img className="image_modal" src={imageUrl} /> : 'NO Image'}
      </Modal>
      <div className=" pg-tabs-description"  >
        <div className="tabs-deschovr  d-flex align-items-center justify-content-between rounded shadow">
          <div className="pg-sb-topic d-flex align-items-center  " style={{ width: '97%' }}>
            <span className="videoimage">

              <img src={value.image ? value.image : Image_icon} height={"50px"} />

              {/* <i className="fa fa-file-text" aria-hidden="true"></i> */}
            </span>
            <h3>{value.title}</h3>
          </div>
          <div className="pg-sb-topic pe-2">
            <div className="btnsalltbba text-center">

              <button
                className="btn"
                onClick={() => handleOpenImage(value)}
              >
                {/* <i className="fa fa-play" aria-hidden="true"></i> */}
                <i className="fa-solid fa-eye eyeicons-a" aria-hidden="true"></i>
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
