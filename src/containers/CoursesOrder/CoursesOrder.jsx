import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LinkSend from "../../components/LinkSend/LinkSend";
import CardPay from "../../components/CardPay/CardPay";
import "./CoursesOrder.css";
import { getCourse_Detail_Service } from "../../services";
import { useNavigate, useParams } from "react-router-dom";
import { resHandler } from "../../../helper";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import { useSearchParams } from "react-router-dom/dist";
import TestLoading from "../TestLoading/TestLoading";

export default function CoursesOrder() {
  const [courseDetails, setCourseDetails] = useState();
  const [orderDetails, setOrderDetails] = useState();
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();
  const [id, setId] = useState();
  const [paymentLoading, setPaymentLoading] = useState(false)
  // const { id } = useParams();
  useEffect(() => {
    if (typeof searchParam !== "undefined") {

      const stringWithoutUnderscore = searchParam.get('course_id').replace(/_/g, '');
      getCourseDetail(stringWithoutUnderscore);
      setId(searchParam.get('course_id'))
      // setId(searchParam.get("course_id"));
    }
  }, [searchParam]);

  const getCourseDetail = async (value) => {
    const formData = new FormData();
    formData.append("course_id", value);
    await getCourse_Detail_Service(formData)
      .then((res) => {
        let { status, data, message } = resHandler(res);
        // status && dispatch(courseDetails_Action(data));
        status && setCourseDetails(data.course_detail);
        console.log(data.course_detail);
      })
      .catch((err) => console.log(err));
  };

  const handleDataFromCard = (value) => {
    console.log(value, 'setOrderDetails')
    setOrderDetails(value);
  };

  const handlepaymentLoading = (value) => {
    setPaymentLoading(value)
  }
  return (
    <>
      {" "}
      {orderDetails ? (
        <SuccessMessage
          order_detail={orderDetails}
          course_name={courseDetails.title}
        />
      ) : (
        <>
          {paymentLoading && <TestLoading />}
          <Header />
          <section className="py-3 bg-light">

            <div className="container">
              <div className="row">
                <div className='pg-event-blog-breadcrumb'>
                  <nav aria-label="breadcrumb event-bredcrm-lstchild">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item" onClick={() => navigate('/')}><i className='fa fa-home me-1'></i>Home</li>
                      <li className="breadcrumb-item active" onClick={() => navigate('/allcourses')}>All Courses</li>
                      <li className="breadcrumb-item" onClick={() => navigate(`/view_details?course_id=${id}`)}>{courseDetails && courseDetails.title}</li>
                      <li className="breadcrumb-item active" aria-current="page">CheckOut</li>
                    </ol>
                  </nav>
                </div>
                <div className="col-lg-8 col-md-7">
                  <div className="bg-white p-4 bwhtediv">
                    <div className="vjed_sub_all">
                      <div className="book-details border-0 shadow">
                        <div className="row g-0">
                          <div className="col-lg-4">
                            <div className="pg-card-img">
                              <img
                                src={
                                  courseDetails &&
                                  courseDetails.desc_header_image
                                }
                                alt="offbook"
                              />
                            </div>
                          </div>

                          <div className="col-lg-8 p-2 ">
                            <div className="crseprice mx-3 my-2">

                              <h4>{courseDetails && courseDetails.title} </h4>
                              <h5>By Physics Galaxy</h5>
                              {courseDetails && (
                                <h6 className=" ">
                                  <i
                                    className="fa fa-calendar text-black"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Validity: {courseDetails.validity}
                                  <hr className="mb-0 mt-2" />
                                </h6>

                              )}

                            </div>

                            <div className="vjed-off-price">
                              <h4>
                                <span className="text-dark current-price">
                                  {courseDetails && `₹${courseDetails.mrp}`}
                                </span>
                                <span className="text-muted last-price ms-2">
                                  {courseDetails &&
                                    `₹${courseDetails.course_sp}`}
                                </span>
                                <p className="gstp">(GST included)</p>
                              </h4>
                            </div>
                            {/* <div className="my-2 vjed-off-des py-2">
                              {courseDetails && (
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: courseDetails.description,
                                  }}
                                />
                              )}
                            
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  {courseDetails && (
                    <CardPay
                      sendDataToParent={handleDataFromCard}
                      detail={courseDetails}
                      id={id}
                      loading={handlepaymentLoading}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
          <LinkSend />
          <Footer />
        </>
      )}
    </>
  );
}
