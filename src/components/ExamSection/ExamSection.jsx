import React from "react";
import "./ExamSection.css";
import Button4 from "../Buttons/Button4/Button4";
// import SideBar from './SideBar/SideBar';
import Card from "./Card/Card";
import cg from "../../assets/images/cg-1.png";
import SideBar from "../SideBar/SideBar";
import { useEffect } from "react";
import { getCourses_Service } from "../../services";
import { useState } from "react";
import { resHandler } from "../../../helper";
import { useDispatch, useSelector } from "react-redux";
import { courses_Action } from "../../containers/Home/masterContentSlice";
import { useNavigate } from "react-router-dom";
import Button5 from "../Buttons/Button5/Button5";
import { useLocation } from "react-router-dom/dist";
import NoDataFound from "../../containers/NoDataFound/NoDataFound";

export default function ExamSection() {
  // const [parentData, setParentData] = useState()
  const [Data, setData] = useState()
  const [courseData, setCourseData] = useState();
  const [DataIndex, setDataIndex] = useState();
  const allCategory = useSelector((state) => state.allCategory.allCategory)
  const courseListRedux = useSelector(state => state.allCategory.course)
  const [courseId, setCourseId] = useState();
  const [isScrolled, setIsScrolled] = useState(false);
  const [catName, setCatName] = useState()
  const [subCatName, setSubCatName] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { pathname } = useLocation()
  useEffect(() => {
    if (allCategory) {
      setData(allCategory.all_cat)
      // const filteredData = dataArray.filter(item => item.parent_id === "0");
      // setParentData(filteredData);
    }


  }, [allCategory]);


  // const handleButtonClick = () => {
  //   navigate(`//allcourses/${DataIndex}`)
  // };

  const getchildId = (value) => {
    console.log(Data.find(item => item.id == value), "id");
    const subCat = Data.find(item => item.id == value);
    const catName = Data.find(item => item.id == subCat.parent_id)
    setCatName(catName.name)
    setSubCatName(subCat.name)
    setDataIndex(value);
  };

  useEffect(() => {
    const courseSection = document.getElementById('courseSection');
    if (typeof DataIndex != 'undefined') {
      getCourseData(DataIndex)
      isScrolled && window.scrollTo({ top: courseSection.offsetTop - 70, behavior: 'smooth' });
    }
  }, [DataIndex])

  const getCourseData = async (value) => {
    setCourseId(value)
    const formData = new FormData();
    formData.append('course_type', 0);
    // formData.append('is_paid',)
    // formData.append('lang')
    formData.append('page', 1);
    formData.append('sub_cat', value);


    await getCourses_Service(formData).then(res => {

      let { status, data, message } = resHandler(res)
      // console.log(data)
      // if(pathname == pathname == '//ourcourses')

      if (status) {
        const filteredcourseData = data.filter(item => item.cat_type === "0");
        console.log(filteredcourseData, "filtered")
        setCourseData(filteredcourseData)
        // courses_Action(filteredcourseData)
        dispatch(courses_Action(filteredcourseData));
        setIsScrolled(true)
      }
      else {
        // courses_Action()
        setCourseData(null)
      }
    }).catch(err => {
      console.log(err)
    })
    // }

  }
  return (
    <>
      <section className="py-4 header exams pg-category" id="courseSection">

        <div className="container">
          {pathname == '/ourcourses' && <div className="pg-breadcrum"> <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-2 cursor" >
              <li className="breadcrumb-item" onClick={() => navigate('/')}><span><i className="fa fa-home" aria-hidden="true"> </i> </span>Home</li>
              <li className="breadcrumb-item highlight" onClick={() => navigate('/')}>{catName}</li>
              <li className="breadcrumb-item highlight" >{subCatName}</li>
              {/* {courseDetails && <li className="breadcrumb-item highlight">{ courseDetails.course_detail.title}</li>} */}
            </ol>
          </nav></div>}
          <header className="my-3 pb-3 text-white d-flex justify-content-between align-items-center">
            <h1 className="text-dark fw-bold">Explore Courses Categories</h1>

          </header>

          <div className="row d-flex">

            <div className="col-lg-3 col-md-12 col-12">
              <div className="p-2 pg-course-link expexam">
                <SideBar list={Data} getChildId={getchildId} getSubCatId={getCourseData} />
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-12">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-mentorshipjee"
                  role="tabpanel"
                  aria-labelledby="v-pills-mentorshipjee"
                >
                  <div className="row d-flex align-items-center">
                    {/* <div className="col-md-12">
                      <div className="expendcarrior mt-4 mb-4">
                        <div className="d-flex align-items-center">
                        <h4 className="fw-bold">Expand your career opportunities</h4>
                     
                        </div>
                        <p>
                        Boost your professional career with our top-notch JEE course curriculum, tailored by top faculties. The course comes with comprehensive study materials that uplifts your understanding of JEE Physics with practical understanding. Get a step closer to acing your JEE exams and achieve your ambitions with flying colors.
                        </p>
                      
                      </div>
                    </div> */}
                    {courseData && courseData.length > 0 ?
                      courseData.map((item, i) => {
                        return (
                          <Card
                            name={item.title}
                            imageUrl={item.cover_image}
                            mrp={item.course_sp < item.mrp && item.mrp}
                            validity={item.validity}
                            avg_rating={String(item.avg_rating)}
                            key={i}
                            // id={item.combo_course_ids.length ? item.id + '_' : item.id}
                            id={item.combo_course_ids.length ? item.id : item.id}
                            is_purchased={Number(item.is_purchased)}
                            course_sp={item.course_sp}
                            user_rated={item.user_rated}
                          />
                        );
                      })
                      :
                      <div className='text-center'>
                        <div className='pg-no-data-found'>
                          <NoDataFound height={'50vh'} />
                        </div>
                      </div>
                    }

                    {courseData && courseData.length > 20 && <Button4 name={"Load More"} />}
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
