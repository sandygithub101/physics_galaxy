import React from "react";
import Modal from "../../components/Modal/Modal";
import vedio_app from "../../assets/images/videocourse.jpg";
import toast from "react-hot-toast";
import NoDataFound from "../NoDataFound/NoDataFound";
export default function ModelPopup({ ModalOpen, CloseModal, value }) {
  return (
    <Modal isOpen={ModalOpen} onClose={() => CloseModal()}>
      {/* {courseList && courseList.length > 0 ? (
        courseList.map((item, i) => {
          return ( */}
      <div className="row d-flex align-items-center justify-content-center">
        {console.log(value, "val")}
        {/* <!-- Left side content --> */}
        <div className="col-lg-12 col-md-12">
          <div className="text-center">
            <h5>Biling Details</h5>
          </div>
          <hr></hr>
          <div className="bilngdiv d-flex justify-content-between align-items-center">
            <div>
              <p>Course Title</p>
            </div>
            <div>
              <p>{value && value.title}</p>
            </div>
          </div>
          {/* <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p>Coupons</p>
                  </div>
                  <div>
                    <p>5000.00</p>
                  </div>
                </div> */}
          <div className="bilngdiv d-flex justify-content-between align-items-center">
            <div>
              <p>Grand Total</p>
            </div>
            <div>
              <p>{value && value.mrp}</p>
            </div>
          </div>
          <hr></hr>
          <div className="bilngdiv d-flex justify-content-between align-items-center">
            <div>
              <p>Payment Mode</p>
            </div>
            <div>
              <p>{value && value.pay_via}</p>
            </div>
          </div>
          <div className="bilngdiv d-flex justify-content-between align-items-center">
            <div>
              <p>Transaction Id</p>
            </div>
            <div>
              <p>{value && value.txn_id}</p>
            </div>
          </div>
          {value && value.invoice_url.length > 0 && (
            <>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="grtinvcebt"
                  onClick={() =>
                    window.open(
                      value && value.invoice_url,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  Get Invoice
                </button>
              </div>
              <div className="notdiv mt-2">
                <p><span>Note-</span> In case of download failure please raise a request from help center.</p>
              </div>
            </>
          )}
        </div>
      </div>
      {/* );
        })
      ) : (
        <NoDataFound />
      )} */}
    </Modal>
  );
}
