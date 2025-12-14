import React, { useState } from "react";
import "./Card3.css";
import Button4 from "../../components/Buttons/Button4/Button4";
import image2 from "../../assets/images/cg-1.png";
import Button5 from "../Buttons/Button5/Button5";
import {
  formatNumberWithCommasAndDecimals,
  isLogin,
  resHandler,
  image_check
} from "../../../helper";
import { useNavigate } from "react-router-dom";
import { freeTransactionService } from "../../services";
import SweetAlert2 from "react-sweetalert2";
import AddLibraryModel from "../BuyCourseModal/AddLibraryModel";
import LoginPageModal from "../../containers/Login/LoginPageModal";
export default function Card3(props) {
  const [librarymodal, setLibraryModal] = useState(false)
  const [swalProps, setSwalProps] = useState({});
  const navigate = useNavigate();
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleButtonClick = (value) => {
    // console.log(value)
    if (isLogin) {
      navigate(`/coursesorder?course_id=${value}`);
    }
    else {
      setOpenLoginModal(true)
    }
  };

  const handleAddtoLibary = async (value) => {
    const formData = new FormData();
    formData.append("course_id", value);
    if (isLogin) {
      await freeTransactionService(formData).then((res) => {
        let { data, status, message } = resHandler(res);
        if (status) {
          // console.log(data);
          message && setLibraryModal(true)
          //   setSwalProps({
          //     show: true,
          //     title: "You have successfully added this free course. You can find this course in my library section",
          //     icon: "success",
          //   },
          //   function(){ 
          //     location.reload();
          // });
          // location.reload()
        } else {
        }
      });
    } else {
      // const fullUrl = window.location.href;
      // localStorage.setItem("redirect", fullUrl);
      // navigate("/login");
      setOpenLoginModal(true)
    }
  };
  return (
    <>
      <LoginPageModal ModalOpen={openLoginModal} OpenModal={() => setOpenLoginModal(true)} CloseModal={() => setOpenLoginModal(false)} />
      {librarymodal && <AddLibraryModel isOpen={librarymodal} CloseModal={() => setLibraryModal(false)} />}
      {/* <SweetAlert2 {...swalProps}  onConfirm={result => {
                    location.reload()
                }}/> */}
      <div className="card vjed-card viewdetails-card-sticky  border-0 shadow radious_all">
        <div className="viewdetail-image-size">
          <img src={image_check(props.cover_image)} className="card-img-top" alt="..." />
        </div>

        <div className="card-body vjed-card-body">
          <h5 className="card-title vjed-card-title">{props.title}</h5>
          <h6>By Physics Galaxy</h6>
          {/* <p className="card-text vjed-text">Duration: {props.validity} </p>
           
        <p className="card-text vjed-text">Language: Mix (English & Hindi)</p> */}
          {/* {props.description &&<div dangerouslySetInnerHTML={{ __html: props.description}}/> } */}
          {/*<p className="card-text vjed-text">{props.description}</p>*/}
          {/* <p className="card-text vjed-text">Validity {props.validity}</p> */}
          <div className=" mb-2">
            <span className="price">
              {props.course_sp == 0 || props.mrp == 0
                ? "Free"
                : `₹${formatNumberWithCommasAndDecimals(props.mrp + props.tax)}/-`}
            </span>
            &#160;{" "}
            {props.course_sp != props.mrp && (
              <span className="price-cross">
                ₹{formatNumberWithCommasAndDecimals(props.course_sp)}/-
              </span>
            )}
          </div>
          <div>
            {props.mrp != 0 && (
              // <p>{props.is_gst == "0" ? "(GST Included)" : "(GST Excluded)"}</p>
              <p>GST Included</p>
            )}
          </div>
          <div className="pg-validity mb-2">
            <i className="fa fa-calendar" aria-hidden="true"></i> Validity{" "}
            {props.validity}
          </div>
          <div></div>
          <div className="text-center my-2">
            {" "}
            {Number(props.purchased) ? (
              <Button5
                type="button"
                name={!Number(props.course_sp) ? "ADDED" : "PURCHASED"}
                disabled={true}
              />
            ) : (
              <Button5
                type="button"
                name={!Number(props.course_sp) ? "Add to Library" : "Buy Now"}
                onButtonClick={
                  !Number(props.course_sp)
                    ? () => handleAddtoLibary(props.id)
                    : () => handleButtonClick(props.id)
                }
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
