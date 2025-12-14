import React from 'react'
import { useState } from 'react';
import notes_icon from "../../assets/images/icons/Notes.png";
export default function NoteTabLayer3({ value }) {
  const [fileUrl, setFileUrl] = useState();
  const [fileOpen, setFileOpen] = useState(false);
  const handleOpenNotes = (value) => {

    setFileOpen(true);
    setFileUrl(value.file_url);
  };
  return (<>{fileOpen ?
    <>
      <iframe src={fileUrl && fileUrl} className="notes-iframe"></iframe>
    </> :
    <div
      className=" pg-tabs-description"
      onClick={() => handleOpenNotes(value)}
    >
      <div className="tabs-deschovr d-flex align-items-center rounded shadow">
        <div
          className="pg-sb-topic d-flex align-items-center "
          style={{ width: "97%" }}
        >
          <span className="videoimage">
            <img
              src={value.image ? value.image : notes_icon}
              height={"50px"}
            />
            {/* <i className="fa fa-file-text" aria-hidden="true"></i> */}
          </span>
          <h3>{value.title}</h3>
        </div>
        <div className="pg-sb-topic pe-2">
          <div className="btnsalltbba text-center">

            <button
              className="btn"
            >
              Open
            </button>

          </div>
        </div>
      </div>
    </div>}</>
  )
}
