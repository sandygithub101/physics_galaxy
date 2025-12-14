import React from 'react'
import Link_icon from "../../assets/images/icons/link.png";
export default function LinkTabLayer3({ value }) {
  const handleOpenPDF = async (item) => {
    window.open(item.file_url);
  }
  return (
    <><div
      className=" pg-tabs-description"
      onClick={() => handleOpenPDF(value)}
    >
      <div className="tabs-deschovr d-flex align-items-center rounded shadow">
        <div
          className="pg-sb-topic d-flex align-items-center"
          style={{ width: "97%" }}
        >
          <span className="videoimage">
            <img
              src={value.image ? value.image : Link_icon}
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
    </div></>
  )
}
