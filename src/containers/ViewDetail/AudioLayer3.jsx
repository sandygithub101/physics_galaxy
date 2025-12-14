import React from 'react'
import AudioPopup from './AudioPopup';
import { useState } from 'react';
import video_icon from "../../assets/images/icons/Video.png";
export default function AudioLayer3({ value }) {
  const [isOpenAudioModal, setIsOpenAudioModal] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const handleOpenAudio = async (item) => {
    setAudioUrl(item.file_url);
    setIsOpenAudioModal(true);
  };
  return (
    <>{audioUrl && (
      <AudioPopup
        ModalOpen={isOpenAudioModal}
        CloseModal={() => {
          setIsOpenAudioModal(false);
          setAudioUrl(null);
        }}
        AudioURL={audioUrl}
      />
    )}
      <div className=" pg-tabs-description"
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

                <button
                  className="btn"
                  onClick={() => handleOpenAudio(value)}
                >
                  <i className="fa fa-play" aria-hidden="true"></i>
                  Play
                </button>
              </>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
