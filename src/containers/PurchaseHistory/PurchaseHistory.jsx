import React, { useEffect, useState } from "react";
import "./PurchaseHistory.css";
import Header from "../../components/Header/Header";
import LinkSend from "../../components/LinkSend/LinkSend";
import Footer from "../../components/Footer/Footer";
import UserDetails from "../../components/UserDetails/UserDetails";
// import BookImage from "../../assets/images/cg-1.png";
import NodataImage from "../../assets/images/no-data.png";
import { getMyCourseService, getMyOrderService } from "../../services";
import {
  formatNumberWithCommasAndDecimals,
  formatTimestampToDateString,
  resHandler,
} from "../../../helper";
import notcoursefound from "../../assets/images/not-c-f.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { purchaseHistoryAction } from "./purchaseHistorySlice";
import { Tabs } from "react-bootstrap";
import Tab from "../ViewDetail/Tab";
import { useNavigate } from "react-router-dom/dist";
import EventListCard from "../EventList/EventListCard";
import NoDataFound from "../NoDataFound/NoDataFound";
import ModalPopup from "./ModalPopup";

export default function PurchaseHistory() {
  const navigate = useNavigate();
  const purchaseHistory = useSelector(
    (state) => state.purchaseHistory.purchaseHistory
  );
  const dispatch = useDispatch();
  const [purchasedList, setPurchasedList] = useState();
  const [courseList, setCourseList] = useState();
  const [bookList, setBookList] = useState();
  const [priceBreakup, setPriceBreakup] = useState(null);
  const [eventList, setEventList] = useState();
  const [key, setKey] = useState("courses");
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    if (purchaseHistory) {
      const books = purchaseHistory.filter((item) => item.cat_type === "1");
      setBookList(books);
      const courses = purchaseHistory.filter((item) => item.cat_type === "0");
      setCourseList(courses);
      const events = purchaseHistory.filter((item) => item.cat_type === "2");
      setEventList(events);
      // setPurchasedList(purchaseHistory)
    } else {
      getMyOrder();
    }
  }, [purchaseHistory]);

  const getMyOrder = async () => {
    const formData = new FormData();
    formData.append("page", 1);
    formData.append("type", 2);
    await getMyOrderService(formData).then((res) => {
      let { status, data, message } = resHandler(res);
      // console.log('NotiTab', data)
      if (status) {
        dispatch(purchaseHistoryAction(data));
        const books = data.filter((item) => item.cat_type === "1");
        setBookList(books);
        const courses = data.filter((item) => item.cat_type === "0");
        setCourseList(courses);
        // setPurchasedList(data)
        // console.log(data)
      }
    });
  };
  const handleOpenVideo = async (value) => {
    setIsOpenModal(true);
    setPriceBreakup(value);
  };

  return (
    <>
      <Header />
      <ModalPopup
        ModalOpen={isOpenModal}
        CloseModal={() => {
          setIsOpenModal(false);
          setPriceBreakup(null);
        }}
        value={priceBreakup && priceBreakup}
      />
      <section className="py-4 pg-userprofile-section">
        <div className="container">
          <div className="section-user-profile">
            <div className="row ">
              <div className="col-lg-3 col-md-4">
                <UserDetails />
              </div>

              <div className="col-lg-9 col-md-8">
                <div className="profile-title">
                  <h4 className="fw-bold">Purchase History</h4>
                  {/* <span><i className="fa fa-pencil-square-o ms-2" aria-hidden="true"></i> Edit</span> */}
                </div>
                <hr />
                <div className="rounded-3">
                  <div className="p-2 rounded-3 purchaseMin bg-white shadow">
                    <Tabs
                      activeKey={key}
                      onSelect={(k) => setKey(k)}
                      className="mb-1 mt-1 position-relative ul_slide purchase_crse justify-content-start"
                      id="ul_slide"
                    >
                      <Tab eventKey={"courses"} title="Courses">
                        {courseList && courseList.length > 0 ? (
                          courseList.map((item, i) => {
                            return (
                              <div className="" key={i}>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="card mb-2 m-1">
                                      <div className="row g-0 bg-greyrow">
                                        <div className="bg-greyrowww">
                                          <div className="col-lg-3 col-md-3 col-12">
                                            <div className="pg-prch-image-size">
                                              <img
                                                src={item.desc_header_image}
                                                className="img-fluid p-1"
                                                alt="cover_image"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-9 col-md-9 col-12">
                                            <div className="card-body">
                                              <div className="vjed-card-item">
                                                <h3 className="card-title card-order-title">
                                                  {item.title}
                                                </h3>
                                                {/* <p className="card-text">Indian and World Geography Co....</p> */}
                                              </div>
                                              <div
                                                className="row align-items-center vjed-amountt"
                                                onClick={() =>
                                                  navigate(
                                                    `/view_details?course_id=${item.id}`
                                                  )
                                                }
                                              >
                                                {/* <div className="mb-0">
                                              <p>
                                                amount:
                                                <span>
                                                  RS{" "}
                                                  {formatNumberWithCommasAndDecimals(
                                                    item.mrp
                                                  )}
                                                  /-
                                                </span>
                                              </p>
                                            </div> */}
                                                <div className="col-lg-5">
                                                  {item && item.mrp > 0 && (
                                                    <div className="paymnt-bold mb-0">
                                                      <span> Payment-ID:</span>
                                                      &nbsp;{item.payment_id}
                                                    </div>
                                                  )}

                                                  {item && item.mrp > 0 ? (
                                                    <div className="paymnt-bold mb-0">
                                                      <span>
                                                        {" "}
                                                        Purchase Amount:
                                                      </span>
                                                      &nbsp;{item.mrp}
                                                    </div>
                                                  ) : (
                                                    <div className="paymnt-bold mb-0">
                                                      <span>
                                                        {" "}
                                                        Purchase Amount:
                                                      </span>
                                                      &nbsp; Free
                                                    </div>
                                                  )}
                                                  <div className="paymnt-bold mb-0">
                                                    <span> Purchase Date:</span>
                                                    &nbsp;
                                                    {formatTimestampToDateString(
                                                      item.purchase_date
                                                    )}
                                                  </div>
                                                </div>

                                                {/* {item && item.mrp > 0 && (
                                                  <div className="col">
                                                    {" "}
                                                    <p
                                                      onClick={() =>
                                                        handleOpenVideo(item)
                                                      }
                                                    >
                                                      View Breakup
                                                    </p>
                                                  </div>)} */}

                                                <div className="col-lg-4">
                                                  <div className="paymnt-bold mb-0">
                                                    <span> Expiry Date:</span>
                                                    &nbsp;
                                                    {formatTimestampToDateString(
                                                      item.expiry_date
                                                    )}
                                                  </div>
                                                </div>
                                                <div className="col-lg-3">
                                                  {item.invoice_url?.length >
                                                    0 && (
                                                      <div className="">
                                                        <input
                                                          type="button"
                                                          onClick={() =>
                                                            window.open(
                                                              item.invoice_url,
                                                              "_blank",
                                                              "noopener,noreferrer"
                                                            )
                                                          }
                                                          value="Invoice Download"
                                                          className="btn-voice"
                                                        />
                                                      </div>
                                                    )}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* {item && item.mrp > 0 && (
                                        <>
                                          <hr className="mt-0 mb-0"></hr>
                                          <div className="row">
                                            <div className="d-flex justify-content-between px-4 py-2 mb-0">
                                              <div className="topdiv">
                                                <span>Total Order Price</span>
                                              </div>
                                              <div className="topdiv">
                                                <span>₹ {item.mrp}</span>
                                              </div>
                                            </div>
                                            <div className="col-lg-9">
                                          <div className="scndpriced">
                                            
                                            <p>Rs.1674.00  
                                            <br />
                                           <span>View Breakup</span> </p>
                                          </div>
                                        </div>
                                          </div>
                                          <div className="row">
                                            <div className="d-flex justify-content-end px-4 mb-2 scndbrkupdiv">
                                              <div className="topsdiv">
                                            <p>
                                              You saved&nbsp;<span>₹ 100.00</span>&nbsp;on this order
                                            </p>
                                          </div>
                                              <div
                                                className="topssdiv"
                                                onClick={() =>
                                                  handleOpenVideo(item)
                                                }
                                              >
                                                <p>View Breakup</p>
                                              </div>
                                            </div>
                                            <div className="col-lg-9">
                                          <div className="scndpriced">
                                            
                                            <p>Rs.1674.00  
                                            <br />
                                           <span>View Breakup</span> </p>
                                          </div>
                                        </div>
                                          </div>
                                        </>
                                      )} */}
                                    </div>
                                  </div>
                                </div>
                                <div></div>
                              </div>
                            );
                          })
                        ) : (
                          <div className="text-center vjed-library-h my-3">

                            <NoDataFound height={'46vh'} />

                          </div>
                        )}
                      </Tab>
                      {/* <Tab
                      eventKey={'books'}
                      title='Books'
                    >
                      {
                        bookList && bookList.map((item,i) =>{
                       return (  <div className="" key={i}>
              <div className="row">
                  
              <div className="col-md-12">
                  <div className="card mb-2 m-1">
                      <div className="row g-0">
                          <div className="col-md-4">
                             <div className='pg-prch-image-size'>
                              <img src={item.cover_image} className="img-fluid p-1" alt='cover_image'/>
                              </div>
                          </div>
                      <div className="col-md-8">
                              
                          <div className="card-body card-b-p">
                              <div className="vjed-card-item mb-2" onClick={() => navigate(`/view_details?course_id=${item.id}`)}>
                                <h3 className="card-title card-order-title">{item.title}</h3>
                               
                              </div>
                              <div className="d-flex align-items-center justify-content-between vjed-amount mt-3">
                                  <div className="mb-0">
                                      <p>amount:<span>RS {formatNumberWithCommasAndDecimals(item.mrp)}/-</span></p>
                                  </div>
                                  <div className="mb-0">
                                      <p>Payment-Id:<span>{item.payment_id}</span></p>
                                  </div>
                                  <div className="mb-0">
                                      <p>Date:<span>{formatTimestampToDateString(item.expiry_date)}</span></p>
                                  </div>
                              </div>
                            { item.invoice_url.length > 0 && <div className="text-end">
                              <input type="button" onClick={() =>  window.open(item.invoice_url, '_blank', 'noopener,noreferrer') } value="Invoice Download" className="btn-voice"/>
                              </div>}
                          </div>
                      </div>
                          </div>
                        </div>
                  </div>
              </div>
            </div>)
                        })
                      }
                    </Tab>*/}

                      {/* <Tab eventKey={"event"} title="Events">
                      <div className="my-4">
                        {eventList && eventList.length > 0 ? (
                          eventList.map((item, i) => {
                            return (
                              <EventListCard
                                id={item.id}
                                key={item.id}
                                value={item}
                              />
                            );
                          })
                        ) : (
                          <div className="text-center">
                            <div className="pg-no-data-found">
                             <NoDataFound />
                            </div>
                          </div>
                        )}
                      </div>
                    </Tab> */}
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
