import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import LinkSend from "../../components/LinkSend/LinkSend";
import Footer from "../../components/Footer/Footer";
import UserDetails from "../../components/UserDetails/UserDetails";
import { Tabs } from "react-bootstrap";
import Tab from "../ViewDetail/Tab";
import { toast } from "react-hot-toast";
import EventListCard from "../EventList/EventListCard";
import NoDataFound from "../NoDataFound/NoDataFound";
import "../PurchaseHistory/PurchaseHistory.css";
import PG_Logo from '../../assets/images/PG_Logo.png'
import { notificationAction } from "../NotificationTab/NotificationSlice";
import { formatTimestamponly, resHandler } from "../../../helper";

import { getNotificationService, deleteNotificationService } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import './Notification.css'



export default function NotificationTab() {


  const [key, setKey] = useState("courses");
  const dispatch = useDispatch();
  const [eventList, setEventList] = useState();
  const [courseList, setCourseList] = useState();
  const [bookList, setBookList] = useState();
  const notification = useSelector(
    (state) => state.notification.notification
  );
  const handleDelete = async (id) => {
    // alert(id)
    // e.preventDefault();
    var res = window.confirm('Are you want to delete this notication');

    if (res == true) {
      var formData = new FormData();
      formData.append('id', id)

      await deleteNotificationService(formData).then(res => {
        const { data, status, message } = resHandler(res);
        status ? toast.success(message) : toast.error(message);
      }).catch(err => {
        console.log(err)
      })
    }

  }

  useEffect(() => {
    if (notification) {
      const books = notification.filter((item) => item.action_element === "1");
      setBookList(books);
      const courses = notification.filter((item) => item.action_element === "1");
      setCourseList(courses);
      const events = notification.filter((item) => item.action_element === "2");
      setEventList(events);
    } else {
      getNotification();
    }
  }, [notification]);

  const getNotification = async () => {
    const formData = new FormData();
    formData.append("page", 1);
    formData.append("type", 2);
    await getNotificationService(formData).then((res) => {
      let { status, data, message } = resHandler(res);
      console.log('data1010', data)
      // console.log('data1010', status)
      // console.log('data1010', message)
      if (status) {
        dispatch(notificationAction(data));
        const books = data.filter((item) => item.action_element === "1");
        console.log('notificationnotification', notification)

        setBookList(books);
        const courses = data.filter((item) => item.action_element === "1");
        setCourseList(courses);
        // setPurchasedList(data)
        // console.log(data)
      }
    });
  };

  useEffect(() => {
    getNotification();
  }, [])
  return (
    <>
      <Header />
      <section className="py-4 pg-userprofile-section">
        <div className="container">
          <div className="section-user-profile">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <UserDetails />
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="profile-title">
                  <h4 className="fw-bold">Notification</h4>
                </div>
                <hr />
                <div className="rounded-3">
                  <div className="p-2 rounded-3 bg-white shadow">
                    <Tabs
                      activeKey={key}
                      onSelect={(k) => setKey(k)}
                      className="mb-1 mt-1 position-relative ul_slide purchase_crse justify-content-start"
                      id="ul_slide"
                    >
                      <Tab eventKey={"courses"} title="Courses">
                        {console.log('courseList', courseList)}
                        {courseList && courseList.length > 0 ? (
                          courseList.map((item, i) => {
                            return (
                              <div className="" key={i}>
                                <div className="container mt-5">
                                  <div className="card mb-3">
                                    <span className="active"></span>
                                    <div className="row g-0 align-items-center">
                                      <div className="col-2">
                                        <img className="m-0 rounded-start" src={PG_Logo}
                                          alt="..." />
                                      </div>
                                      <div className="col-9">
                                        <div className="card-body">
                                          <p className="m-0 mt-4 fss-6" dangerouslySetInnerHTML={{ __html: item?.message && item?.message }}></p>
                                          <p className="float-end mb-0"><small className="fsize text-muted">{formatTimestamponly(
                                            item?.created
                                          )}</small></p>
                                        </div>
                                      </div>
                                      <div className="icon col-1 d-flex justify-content-end align-items-center pe-3">
                                        <i className="fa fa-trash" aria-hidden="true" onClick={() => handleDelete(item.id)}></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <div className="text-center">
                            <div className="pg-no-data-found">
                              <NoDataFound height={'50vh'} />
                            </div>
                          </div>
                        )}

                      </Tab>
                      <Tab eventKey={"UpComing"} title="Upcoming">
                        {/* {/ Display course purchase history /} */}
                        {/* {/ Map over courseList /} */}
                        <div className="text-center">
                          <div className="pg-no-data-found">
                            <NoDataFound height={'50vh'} />
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey={"event"} title="Events">
                        {/* {/ Display event purchase history /}
                        {/ Map over eventList /} */}
                        <div className="text-center">
                          <div className="pg-no-data-found">
                            <NoDataFound height={'50vh'} />
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