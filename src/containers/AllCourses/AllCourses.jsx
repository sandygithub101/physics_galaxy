import React from "react";
import "./AllCourses.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LinkSend from "../../components/LinkSend/LinkSend";
import SideBar from "../../components/SideBar/SideBar";
import AddImage from "../../assets/images/Rectangle 7957.jpg";
import { useEffect } from "react";
import { getCourses_Service } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Card from "../../components/ExamSection/Card/Card";
import Button4 from "../../components/Buttons/Button4/Button4";
import { resHandler } from "../../../helper";
import { courses_Action } from "../Home/masterContentSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom/dist";
import NoDataFound from "../NoDataFound/NoDataFound";
export default function AllCourses() {
  const [Data, setData] = useState();
  const [courseData, setCourseData] = useState();
  const [DataIndex, setDataIndex] = useState();
  const allCategory = useSelector((state) => state.allCategory.allCategory);
  const courseListRedux = useSelector((state) => state.allCategory.course);
  const [courseId, setCourseId] = useState();
  const [searchParam, setSearchParam] = useSearchParams();
  const { id } = useParams();
  const [catName, setCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof searchParam !== "undefined") {
      const value = searchParam.get("courses_id");
      getCourseData(searchParam.get("courses_id"));
      // setDataIndex(value);
      // const subCat = Data && Data.find(item => item.id == value);
      // const catName = Data && Data.find(item => item.id == subCat.parent_id)
      //  setCatName(catName.name)
      //  setSubCatName(subCat.name)
      // getCourseDetail(id);
    }
  }, [searchParam]);

  useEffect(() => {
    if (allCategory) {
      setData(allCategory.all_cat);
      // const filteredData = dataArray.filter(item => item.parent_id === "0");
      // setParentData(filteredData);
    }
  }, [allCategory]);

  const handleButtonClick = () => { };

  const getchildId = async (value) => {
    const subCat = Data && Data.find((item) => item.id == value);
    // if(typeof subCat == 'undefined'){
    //   window.location.href= '/allcourses'
    // }
    const catName = Data && Data.find((item) => item.id == subCat.parent_id);
    setCatName(catName?.name);
    setSubCatName(subCat?.name);
    // console.log("value",value)
    navigate(`/allcourses?courses_id=${value}`);
    setDataIndex(value);
  };

  // useEffect(() =>{
  //   if(typeof DataIndex != 'undefined'){
  //   getCourseData(DataIndex) }
  // },[DataIndex])

  const getCourseData = async (value) => {
    setCourseId(value);
    const formData = new FormData();
    formData.append("course_type", 0);
    // formData.append('is_paid',)
    // formData.append('lang')
    formData.append("page", 1);
    formData.append("sub_cat", value);

    await getCourses_Service(formData)
      .then((res) => {
        let { status, data, message } = resHandler(res);
        // console.log(data)
        if (status) {
          const filteredcourseData = data.filter(
            (item) => item.cat_type === "0"
          );
          setCourseData(filteredcourseData);
          // courses_Action(filteredcourseData)
          // dispatch(courses_Action(filteredcourseData))
        } else {
          // courses_Action()
          setCourseData(null);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  };
  return (
    <>
      <Header />

      {/* courses section */}
      <section className="py-4 header exams pg-category">
        <div className="container">
          {pathname == "/allcourses" && (
            <div className="pg-breadcrum">
              {" "}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-3 cursor">
                  <li className="breadcrumb-item" onClick={() => navigate("/")}>
                    <span>
                      <i className="fa fa-home" aria-hidden="true">
                        {" "}
                      </i>{" "}
                    </span>
                    Home
                  </li>
                  <li className="breadcrumb-item" onClick={() => navigate("/")}>
                    {catName}
                  </li>
                  <li className="breadcrumb-item highlight">{subCatName}</li>
                  {/* {courseDetails && <li className="breadcrumb-item highlight">{ courseDetails.course_detail.title}</li>} */}
                </ol>
              </nav>
            </div>
          )}
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <div className="p-2 pg-course-link expexam">
                <SideBar list={Data} getChildId={getchildId} />
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-12 newcrsadddiv">
              {/* <div className="mb-3 shadow">
                <img src={AddImage} className="img-fluid" />
              </div> */}
              <div className="row">
                {/* <div className="col-md-12">
                  <div className="expendcarrior mb-4">
                    <h4 className="fw-bold">
                    Explore Courses Categories
                    </h4>
                    <p>
                      Prepare well with the structured course curriculum of JEE,
                      designed by our top faculties. The course comprises
                      comprehensive study materials that equips you with the
                      in-depth knowledge of JEE Physics. Learn from the experts
                      with practical understanding of the concepts and get ready
                      to score higher.
                    </p>
                    <Button4 name={"View Details"}  onButtonClick={handleButtonClick}/>
                  </div>
                </div> */}

                {courseData && courseData.length > 0 ? (
                  courseData.map((item, i) => {
                    return (
                      <Card
                        name={item.title}
                        imageUrl={item.cover_image}
                        mrp={item.mrp}
                        validity={item.validity}
                        avg_rating={String(item.avg_rating)}
                        key={i}
                        // id={item.combo_course_ids.length ? item.id + '_' : item.id}
                        id={item.combo_course_ids.length ? item.id : item.id}
                        course_sp={item.course_sp}
                        user_rated={item.user_rated}
                        is_gst={item.is_gst}
                      />
                    );
                  })
                ) : (
                  <div className="text-center">
                    {" "}
                    <NoDataFound height={'50vh'} />{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* courses section */}
      <LinkSend />
      <Footer />
    </>
  );
}
