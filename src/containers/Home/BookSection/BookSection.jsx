import React, { Children, useEffect, useState } from "react";
import "./BookSection.css";
import Button4 from "../../../components/Buttons/Button4/Button4";
import SideBar from "../../../components/SideBar/SideBar";
import Card from "./Card/Card";
import { useSelector } from "react-redux";
import { getCourses_Service } from "../../../services";
import { resHandler } from "../../../../helper";
import { useNavigate } from "react-router-dom";
import NoDataFound from "../../NoDataFound/NoDataFound";
export default function BookSection(props) {
  const [books, setBooks] = useState();
  const [sideBarData, setSideBarData] = useState();
  const [courseId, setCourseId] = useState()
  const allCategory = useSelector((state) => state.allCategory.allCategory);
  const Cart_Data = useSelector((state) => state.allCategory.cart);
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false);
  const handleButtonClick = () => { };


  const getchildId = (value) => {
    // console.log(value)

    setCourseId(value)

  };

  useEffect(() => {
    const BookSection = document.getElementById('BookSection');
    if (typeof courseId != 'undefined') {
      getBookData(courseId)
      isScrolled && window.scrollTo({ top: BookSection.offsetTop - 100, behavior: 'smooth' });

    }
  }, [courseId, Cart_Data])

  const getBookData = async (value) => {
    const formData = new FormData();
    formData.append("course_type", 0);
    // formData.append('is_paid',)
    // formData.append('lang')
    formData.append("page", 1);
    formData.append("sub_cat", value);

    await getCourses_Service(formData)
      .then((res) => {
        let { status, data, message } = resHandler(res);
        if (status) {
          const filteredBookData = data.filter((item) => item.cat_type === "1");
          setBooks(filteredBookData);
          //  console.log(filteredBookData, "book")
          setIsScrolled(true)
        }
        else {
          // courses_Action()
          setBooks()
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (allCategory) {

      setSideBarData(allCategory.all_cat);
      // const filteredData = dataArray.filter(item => item.parent_id === "0");
      // setParentData(filteredData);
    }
  }, [allCategory]);

  const handleBookBuyNowClick = (value) => {
    navigate(`/bookdetails/${value}`)
  }
  return (
    <>
      <section className="py-4 header exams pg-category" id="BookSection">
        <div className="container">
          {props.showHeader && (
            <header className="my-3 pb-2 text-white d-flex justify-content-between align-items-center">
              <h1 className="text-dark fw-bold">Explore Books Categories</h1>

            </header>
          )}
          <div className="row d-flex">
            <div className="col-lg-3 col-md-4 col-5">
              <div className="p-2 pg-course-link expexam">
                <SideBar
                  list={sideBarData}
                  getChildId={getchildId}
                // getSubCatId={getBookData}
                />
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-6">
              <div className="tab-content" id="v-pills-tab">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-mentorshipjeebook"
                  role="tabpanel"
                  aria-labelledby="v-pills-mentorshipjee">
                  <div className="row d-flex align-items-center ">
                    {books && books.length > 0 ?
                      books.map((item, i) => {
                        return (
                          <Card
                            id={item.id}
                            key={i}
                            book_name={item.title}
                            image={item.desc_header_image}
                            rating={Number(item.avg_rating).toFixed(2)}
                            user_rated={item.user_rated}
                            price={item.mrp}
                            is_gst={item.is_gst}
                            special_price={item.course_sp}
                            cart_quantity={item.cart_quantity}
                            buyNowClick={handleBookBuyNowClick}
                            cartUpdate={() => props.cartUpdate()}
                            bookUpdate={() => getBookData(courseId)}
                          />
                        );
                      })
                      : <NoDataFound height={'50vh'} />}
                    {/* {books && books.length > 16 &&  <Button4 name={"View More"}/>} */}
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
