import React from 'react'
import VideoPopup from './VideoPopup'
import { useState } from 'react';
import video_icon from "../../assets/images/icons/Video.png";
export default function VideoLayer3({ value }) {
  // const [isOpenBuyCourseModal, setIsOpenBuyCourseModal] = useState(false);
  const [isOpenVideoModal, setIsOpenVideoModal] = useState(false);

  const handleOpenVideo = async (item) => {

    setIsOpenVideoModal(true);

  };
  return (
    <>
      <VideoPopup
        ModalOpen={isOpenVideoModal}
        CloseModal={() => setIsOpenVideoModal(false)}
        is_purchased='1'
      />
      <div
        className=" pg-tabs-description"
      >
        <div className="tabs-deschovr d-flex align-items-center rounded shadow">
          <div
            className="pg-sb-topic d-flex align-items-center"
            style={{ width: "97%" }}
          >
            <span className="videoimage">
              <img
                src={value.image ? value.image : video_icon}
                height={"50px"}
              />
              {/* <i className="fa fa-file-text" aria-hidden="true"></i> */}
            </span>
            <h3>{value.title}</h3>
          </div>
          <div className="pg-sb-topic pe-2">
            <div className="btnsalltbba text-center">

              <>

                < button
                  className="btn"
                  onClick={() => handleOpenVideo(value)}
                >
                  <i className="fa fa-play" aria-hidden="true"></i>
                  Watch
                </button>
              </>

            </div>
          </div>
        </div>
      </div></>
  )
}
