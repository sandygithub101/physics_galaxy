import React, { useEffect, useState } from "react";
import "./PurchasedEvents.css";
import Header from "../../components/Header/Header";
import LinkSend from "../../components/LinkSend/LinkSend";
import Footer from "../../components/Footer/Footer";
import UserDetails from "../../components/UserDetails/UserDetails";
// import BookImage from "../../assets/images/cg-1.png";
import { getMyCourseService, getMyOrderService } from "../../services";
import {
  formatNumberWithCommasAndDecimals,
  formatTimestampToDateString,
  resHandler,
} from "../../../helper";
import notcoursefound from "../../assets/images/not-c-f.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { purchaseHistoryAction } from "./purchaseHistorySlice";
import { Tabs } from "react-bootstrap";
import Tab from "../ViewDetail/Tab";
import { useNavigate } from "react-router-dom/dist";

export default function PurchasedEvents() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [eventList, setEventList] = useState();
  //   const [purchasedList, setPurchasedList] = useState();
  //   const [courseList, setCourseList] = useState();
  //   const [bookList, setBookList] = useState();
  const [key, setKey] = useState('upcoming')
  useEffect(() => {
    // if (purchaseHistory) {
    //   const books = purchaseHistory.filter((item) => item.cat_type === "1");
    //   setBookList(books);
    //   const courses = purchaseHistory.filter((item) => item.cat_type === "0");
    //   setCourseList(courses);
    //   // setPurchasedList(purchaseHistory)
    // } else {
    //   getMyOrder();
    // }
  }, []);

  const getMyCourse = async () => {
    await getMyCourseService().then(res => {
      let { status, data, message } = resHandler(res);
      if (status) {
        const filteredEventData = data.filter(item => item.cat_type === "2");
        setEventList(filteredEventData);

      }
    })
  }


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
                  <h4 className="fw-bold">Purchased Events</h4>
                  {/* <span><i className="fa fa-pencil-square-o ms-2" aria-hidden="true"></i> Edit</span> */}
                </div>
                <hr />

                <div className="p-md-2 rounded-3 bg-white shadow">
                  <Tabs
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-4 mt-2 position-relative ul_slide"
                    id="ul_slide"
                  >
                    <Tab
                      eventKey={'upcoming'}
                      title='Upcoming Events'
                    >

                    </Tab>
                    <Tab
                      eventKey={'history'}
                      title='Events History'
                    >

                    </Tab>
                  </Tabs>


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
