import React, { useState } from 'react'
import { formatTimestamp } from '../../../helper'
import Test_icon from "../../assets/images/icons/Test_objective.png";
import Test_icon2 from "../../assets/images/Test.png";
import Modal from '../../components/Modal/Modal';
import './Test.css'

export default function Daily_AssignmentLayer3({ value }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalValue, setModalValue] = useState('')
  const handleDownloadpaper = (data) => {
    if (Number(value.start_date) > Number(Date.now())) {
      setOpenModal(true);
      setModalValue(`<h5>Test will start on ${formatTimestamp(value.start_date)}</h5>`)
    } else {
      window.open(data, "_blank");
    }
  };

  const handleDownloadAnswer = (data) => {
    if (Number(value.end_date) > Number(Date.now())) {
      setOpenModal(true)
      setModalValue(`<h5>Answer Key will be available after ${formatTimestamp(value.start_date)}</h5`)
    } else {
      window.open(data, "_blank");
    }
  };

  const handleUpload = (data) => {
    if (Number(Date.now()) > Number(value.start_date) && Number(value.end_date) > Number(Date.now())) {

    } else {
      if (Number(value.end_date) < Number(Date.now())) {
        setOpenModal(true)
        setModalValue("<div style=text-align:center><img src=" + Test_icon2 + " height=150px width=150px /><h3>Test Expired!</h3></div>")
      }
      if (Number(Date.now()) < Number(value.start_date)) {
        setOpenModal(true)
        setModalValue(`<h5>Test will start on ${formatTimestamp(value.start_date)}</h5>`)
      }
    }
  }

  const handleMarks = (data) => {
    if (Number(value.result_date) < Number(Date.now())) {
      setOpenModal(true);
      setModalValue(`<table class="table table-responsive test-table" style="text-align: left;border: 1px solid #ccc;" border="57"><tbody>
      <tr><td><h6>Total Marks :</h6></td><td><h6> ${data.total_marks}</h6></td></tr>
      <tr><td><h6>Total Questions :</h6></td><td><h6>${data.total_questions}</h6></td></tr>
      <tr><td><h6>Correct :</h6></td><td><h6> ${data.correct_count}</h6></td></tr>
      <tr><td><h6>Incorrect :</h6></td><td><h6>${data.incorrect_count}</h6></td></tr>
      </tbody></table>`);
    }
    else {
      setOpenModal(true);
      setModalValue(`<h6>Result Not Declared!!</h6>`)
    }
  }

  return (
    <>
      <Modal isOpen={openModal} onClose={() => { setOpenModal(false); setModalValue(''); }}>
        <div dangerouslySetInnerHTML={{ __html: modalValue }} />
      </Modal>
      <div className=" pg-tabs-description">
        <div className="tabs-deschovr d-flex align-items-center rounded shadow">
          <div
            className="pg-sb-topic d-flex align-items-center"
            style={{ width: "50%" }}
          >
            <span className="videoimage">
              <img
                src={value.image ? value.image : Test_icon}
                height={"50px"}
              />
              {/* <i className="fa fa-file-text" aria-hidden="true"></i> */}
            </span>
            <div className="pg-text-section">
              <h3>{value.title}</h3>
              <p className="mb-0 ms-2">
                Start Test - {formatTimestamp(value.start_date)}{" "}
              </p>
              <p className="mb-0 ms-2">
                End Test - {formatTimestamp(value.end_date)}
              </p>
            </div>
          </div>
          <div className="btnsalltbb" style={{ width: "50%" }}>
            <button
              className="btn"
              onClick={() => handleDownloadpaper(value.question)}
            >
              Paper
            </button>

            {value.answers.length > 0 && (
              <button
                className="btn"
                onClick={() => handleDownloadAnswer(value.answers)}
              >
                Answer Key
              </button>
            )}
            {value.upload_allowed === "1" && (Number(value.start_date) < Number(value.end_date) && Number(value.end_date) > Number(Date.now())) || value.answers_by_student == 0 && (
              <button className="btn" onClick={handleUpload}>Upload</button>
            )}
            {value.upload_allowed === "1" && value.answers_by_student == 1 && (
              <button className="btn" onClick={() => handleView()}>View</button>
            )}
            {/* <p style={{marginTop: '19px'}}><span style={{padding:'10px'}} className="badge btn btn-dark">Booklet</span></p>  */}
            <button className="btn" onClick={() => handleMarks(value)}>Marks</button>
          </div>

        </div>
      </div></>
  )
}
