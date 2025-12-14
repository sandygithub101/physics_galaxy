import React, { useEffect } from "react";
import "./Library.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LinkSend from "../../components/LinkSend/LinkSend";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import toast from "react-hot-toast";
import Tabs from "react-bootstrap/Tabs";
import UserDetails from "../../components/UserDetails/UserDetails";
import Button5 from "../../../src/components/Buttons/Button5/Button5";
import libraryimage from "../../assets/images/content-img.png";
import notcoursefound from "../../assets/images/not-c-f.png";
import { getMyCourseService, deleteCourseService } from "../../services";
import { formatTimestamponly, resHandler } from "../../../helper";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { libraryAction } from "./librarySlice";
import NoDataFound from "../NoDataFound/NoDataFound";
import NoDataFoundNew from "../NoDataFoundNew/NoDataFoundNew";

export default function Library() {
  const [key, setKey] = useState("paidcourse");
  const [paidCourseList, setPaidCourseList] = useState();
  const [freeCourseList, setFreeCourseList] = useState();
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.libraryDetail.library);
  const navigate = useNavigate();

  function truncateTitle(value, maxLength = 27) {
    if (value.length <= maxLength) {
      return value;
    } else {
      return value.slice(0, maxLength) + "...";
    }
  }
  useEffect(() => {
    if (courseData) {
      setPaidCourseList(courseData.paid_course);
      setFreeCourseList(courseData.free_course);
      console.log('freeCourseList', courseData.free_course);
    } else {
      getMyCourses();
    }
    // console.log("first")
  }, [courseData]);
  const handleViewDetailsClick = (id) => {
    // console.log(id)
    // e.preventDefault();
    // navigate(`/view_details?course_id=${id}`);
  };

  const handleDeleteCourse = async (id, txn_id) => {
    const res = window.confirm('Are you sure to delete this course?');
    const formData = new FormData();
    formData.append("course_id", id);
    formData.append("txn_id", txn_id);
    if (res === true) {
      // e.preventDefault();
      await deleteCourseService(formData).then(res => {
        const { data, status, message } = resHandler(res);
        // console.log("DData", data);
        // console.log("status", status);
        toast.success(message);
        // navigate('/library')
        location.reload()

      }).catch(err => {
        console.log(err)
      })
    }
    else {
      navigate('/library')
      return false;
    }

  }

  const getMyCourses = async () => {
    await getMyCourseService()
      .then((res) => {
        const { data, status, message } = resHandler(res);
        if (status) {
          const filteredcourseData = data.filter(
            (item) => item.cat_type == "0"
          );
          const filterPaidCourse = data.filter((item) => item.mrp > 0);
          const filterFreeCourses = data.filter((item) => item.mrp == 0);
          console.log(data, "data");
          dispatch(
            libraryAction({
              paid_course: filterPaidCourse,
              free_course: filterFreeCourses,
            })
          );
          setFreeCourseList(filterFreeCourses);
          setPaidCourseList(filterPaidCourse);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header />

      <section className="py-4 pg-userprofile-section">
        <div className="container">
          <div className="section-user-profile">
            <div className="row ">
              <div className="col-lg-3 col-md-4">
                <UserDetails />
              </div>

              <div className="col-lg-9 col-md-8">
                <div className="profile-title">
                  <h4 className="fw-bold">My Library</h4>
                  {/* <span><i className="fa fa-pencil-square-o ms-2" aria-hidden="true"></i> Edit</span> */}
                </div>
                <hr />
                <div className="rounded-3">
                  <div className="p-2 rounded-3 bg-white shadow">
                    <Tabs
                      id="controlled-tab-example"
                      activeKey={key}
                      onSelect={(k) => setKey(k)}
                      className="mb-1 mt-1 justify-content-start tabs-onoff"
                    >
                      <Tab
                        eventKey="paidcourse"
                        title="Paid Course"
                        className="paidcrse"
                      >
                        <div className="my-1 p-1">
                          <div className="row d-flex align-items-center">
                            {paidCourseList && paidCourseList.length ? (
                              paidCourseList.map((item, i) => {
                                return (
                                  <div
                                    className="col-lg-4 col-md-6 col-12"
                                    key={i}
                                  >
                                    <div className="text-center  vjed_sub_all py-1">
                                      <Link
                                        to={`/view_details?course_id=${item.combo_course_ids.length
                                          ? item.id + "_"
                                          : item.id
                                          }`}
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="E Learning"
                                      >
                                        <div className="card vjed-card library-card radious_all">
                                          <div className="pg-library-image">
                                            <img
                                              src={item.desc_header_image}
                                              className="card-img-top radious_all"
                                              alt="header_image"
                                            />

                                          </div>
                                          <div className="card-body vjed-card-body">
                                            <h5 className="card-title vjed-card-title">
                                              {truncateTitle(item.title)}
                                              {/* {item.title} */}
                                            </h5>
                                            <p className="bygalxy">
                                              By Physics Galaxy
                                            </p>
                                            <div className="pg-validity mb-2">
                                              <i
                                                className="fa fa-calendar"
                                                aria-hidden="true"
                                              ></i>
                                              &nbsp;<strong>Validity:</strong>
                                              {formatTimestamponly(
                                                item.purchase_date
                                              )}
                                              To{" "}
                                              {formatTimestamponly(
                                                item.expiry_date
                                              )}
                                            </div>
                                            <hr className="mt-0 mb-2"></hr>
                                            <div>
                                              <Button5
                                                type="button"
                                                name={"Let's Study "}
                                                onButtonClick={() => {
                                                  item.combo_course_ids
                                                    .length == 0
                                                    ? handleViewDetailsClick(
                                                      item.id
                                                    )
                                                    : handleViewDetailsClick(
                                                      item.id + "_"
                                                    );
                                                }}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                );
                              })
                            ) : (
                              <>
                                {" "}
                                <div className="text-center vjed-library-h my-3">
                                  <NoDataFoundNew height={'43vh'} />
                                </div>
                                {/* <div className="text-center">
                <img src={notcoursefound} className="w-50"/>
              </div> */}
                              </>
                            )}
                            {/* <div className="col-lg-3 col-md-6 col-12">
                        <div className="text-center  vjed_sub_all py-1">
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="E Learning">
  <div className="card vjed-card radious_all">
  <img src={libraryimage} className="card-img-top radious_all p-1" alt="..."/>
      <div className="card-body vjed-card-body">
          <h5 className="card-title vjed-card-title"> Rank Booster Series | La.. 
          </h5>
          <p className="card-text vjed-text">Rank Booster Series | Laws of Motion & Friction | JEE Main 2022</p>
      </div>
  </div>
                            </a>
                        </div>
                    </div> */}
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="freecourse" title="Free Course">
                        <div className="my-1 p-1">
                          <div className="row d-flex align-items-center">
                            {freeCourseList && freeCourseList.length ? (
                              freeCourseList.map((item, i) => {
                                return (
                                  <div
                                    className="col-lg-4 col-md-6 col-12"
                                    key={i}
                                  >
                                    <div className="text-center  vjed_sub_all py-1">
                                      <Link
                                        to={`/view_details?course_id=${item.id}`}
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="E Learning"
                                      >
                                        <div className="card vjed-card library-card radious_all">
                                          <div className="pg-library-image position-relative">
                                            <div className="deleteIcon">
                                              <i className="fa fa-trash" aria-hidden="true" title="Delete Course" onClick={() => handleDeleteCourse(item?.id, item?.txn_id)}></i>
                                            </div>
                                            <img
                                              src={item.desc_header_image}
                                              className="card-img-top radious_all p-1"
                                              alt="header_image"
                                            />

                                          </div>
                                          <div className="card-body vjed-card-body">
                                            <h5 className="card-title vjed-card-title">
                                              {truncateTitle(item.title)}
                                            </h5>
                                            <p className="bygalxy">
                                              By Physics Galaxy
                                            </p>
                                            <div className="pg-validity mb-2">
                                              <i
                                                className="fa fa-calendar"
                                                aria-hidden="true"
                                              ></i>
                                              &nbsp;<strong>Validity:</strong>
                                              {formatTimestamponly(
                                                item.purchase_date
                                              )}
                                              To{" "}
                                              {formatTimestamponly(
                                                item.expiry_date
                                              )}
                                            </div>
                                            <hr className="mt-0 mb-2"></hr>
                                            <div>
                                              <Button5
                                                name={"Let's Study"}
                                                onButtonClick={() => {
                                                  item.combo_course_ids
                                                    .length == 0
                                                    ? handleViewDetailsClick(
                                                      item.id
                                                    )
                                                    : handleViewDetailsClick(
                                                      item.id + "_"
                                                    );
                                                }}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                );
                              })
                            ) : (
                              <>
                                {" "}
                                <div className="text-center vjed-library-h my-3">
                                  <NoDataFoundNew height={'43vh'} />
                                  {/* <h6>No Course Found</h6> */}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LinkSend />
      <Footer />
    </>
  );
}
