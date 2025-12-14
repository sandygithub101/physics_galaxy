import React, { useEffect } from "react";
import "./ViewDetail.css";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LinkSend from "../../components/LinkSend/LinkSend";

import Card3 from "../../components/Card3/Card3";

import {
  createSearchParams,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getCourse_Detail_Service } from "../../services";
import { resHandler } from "../../../helper";
import { useDispatch } from "react-redux";
import { courseDetails_Action } from "./courseDetailSlice";
import Overview from "./Overview";
import PDF from "./PDF";
import Test from "./Test";
import Video from "./Video";
import TabDisplay from "./TabDisplay";
import { current } from "@reduxjs/toolkit";
import CourseCombo from "./CourseCombo";
import FAQ from "./FAQ";
import ImageTab from "./ImageTab";
import LinkTab from "./LinkTab";
import NoteTab from "./NoteTab";
import AudioTab from "./AudioTab";
import { useSearchParams } from "react-router-dom/dist";
import Subjective from "./Subjective";
import Daily_Assignment from "./Daily_Assignment";
import DisplayContent from "./DisplayContent";
import NoDataFound from "../NoDataFound/NoDataFound";
import { useRef } from "react";
import Content from "./Content";
import Loader from "../../components/Loader/Loader";

export default function ViewDetail() {
  const [key, setKey] = useState("overview");
  const [arrayOfKey, setArrayOfKey] = useState([]);
  const [courseDetails, setCourseDetails] = useState();
  const [currentActiveIndex, setCurrentActiveIndex] = useState();
  const [tilesData, setTilesData] = useState()
  const [remainingTilesData, setRemainingTilesData] = useState()
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();
  const [activeLayer, setActiveLayer] = useState()
  const [id, setId] = useState()
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const location = useLocation();
  //   const queryParams = new URLSearchParams(location.search);
  const resetPdfLayerRef = useRef();
  const resetVideoLayerRef = useRef();
  const resetImageLayerRef = useRef();
  const resetLinkLayerRef = useRef();
  const resetNoteLayerRef = useRef();
  const resetAudioLayerRef = useRef();
  const resetTestLayerRef = useRef();
  const resetContentLayerRef = useRef();
  const resetSubjectiveLayerRef = useRef();
  const resetDAssignmentLayerRef = useRef();
  useEffect(() => {
    if (typeof searchParam !== "undefined") {
      getCourseDetail(searchParam.get('course_id'));
      if (searchParam.get('course_id').includes('_')) {
        const stringWithoutUnderscore = searchParam.get('course_id').replace(/_/g, '');
        setId(stringWithoutUnderscore)
      }
      else {
        setId(searchParam.get('course_id'))
      }
    }
  }, [searchParam]);

  const getCourseDetail = async (value) => {
    setIsLoading(true)
    const formData = new FormData();
    if (value.includes('_')) {
      const stringWithoutUnderscore = value.replace(/_/g, '');
      formData.append("course_id", stringWithoutUnderscore);
      formData.append("parent_id", '');
    }
    else {
      formData.append("course_id", value);
      formData.append("parent_id", value);
    }
    await getCourse_Detail_Service(formData)
      .then((res) => {
        let { status, data, message } = resHandler(res);
        // status && dispatch(courseDetails_Action(data));
        if (status) {
          setIsLoading(false)
          setCourseDetails(data);
          console.log('course_details', data);
          if (data.course_detail.is_purchased == 0) {

            const tileNames = data.tiles.filter((item) => item.type != "content")
              .map((item) => item.tile_name);
            // .map((item) => {return item.tile_name != 'Content' && item.tile_name});
            setArrayOfKey(tileNames);
            const tiles = data.tiles.filter((item) => item.type != "content")
            setTilesData(tiles)

            const findOverview = data.tiles.find(item => item.type == 'overview')
            setKey(data.tiles.find(item => item.type == 'overview').tile_name);
          }
          else {
            // item.type === "course_combo" ||
            const tileNames = data.tiles.filter((item) => item.type === "overview" || item.type === "faq" || item.type === "content" || item.type === 'course_combo')
              .map((item) => item.tile_name);
            // tileNames.push('Content')
            // .map((item) => {return item.tile_name != 'Content' && item.tile_name});
            setArrayOfKey(tileNames);
            const tiles = data.tiles.filter((item) => item.type === "overview" || item.type === "faq" || item.type === "content" || item.type === 'course_combo')
            console.log(tiles, "tile")
            // const content = {tile_name : 'Content' , type : 'content'}
            // tiles.push(content);
            const Reamining_tiles = data.tiles.filter((item) => item.type !== "overview" && item.type !== 'course_combo')
            // console.log(Reamining_tiles, "tile")
            setTilesData(tiles);
            setRemainingTilesData(Reamining_tiles);
          }
          setKey(data.tiles.find(item => item.type == 'overview').tile_name);

        }
      })
      .catch((err) => console.log(err));
  };

  // Get the value of the 'op' query parameter
  //   const opValue = queryParams.get('op');
  const handleTabs = (k) => {
    // console.log(opValue)
    setKey(k);

    // navigate({
    //     pathname: location.pathname,
    //     search: createSearchParams({
    //         op: k
    //     }).toString()
    // })
    // navigate(`//view_details/${id}`, { query: { op: k } });
  };

  // useEffect(() =>{
  //     if (opValue) {
  //         console.log(opValue)
  //         setKey(opValue);
  //         // handleCashFlowApi(id)
  //         // console.log(router.query.op);
  //       }
  // },[opValue])

  const handlePrevious = (value) => {
    if (resetPdfLayerRef.current) {
      resetPdfLayerRef.current.click();
    }
    if (resetVideoLayerRef.current) {
      resetVideoLayerRef.current.click();
    }
    if (resetImageLayerRef.current) {
      resetImageLayerRef.current.click();
    }
    if (resetLinkLayerRef.current) {
      resetLinkLayerRef.current.click();
    }
    if (resetNoteLayerRef.current) {
      resetNoteLayerRef.current.click();
    }
    if (resetAudioLayerRef.current) {
      resetAudioLayerRef.current.click();
    }
    if (resetTestLayerRef.current) {
      resetTestLayerRef.current.click();
    }
    if (resetSubjectiveLayerRef.current) {
      resetSubjectiveLayerRef.current.click();
    }
    if (resetDAssignmentLayerRef.current) {
      resetDAssignmentLayerRef.current.click();
    }
    if (resetContentLayerRef.current) {
      resetContentLayerRef.current.click();
    }
    const index = arrayOfKey.indexOf(key);
    if (value == "previous" && index > 0) {
      setKey(arrayOfKey[index - 1]);
      setCurrentActiveIndex(index);
      const newScrollPosition = scrollPosition - 50;
      setScrollPosition(newScrollPosition);
      const listElement = document.getElementsByClassName("ul_slide");
      if (listElement) {
        listElement[0].scrollLeft = newScrollPosition;
      }
    }
    if (value == "next" && index != -1) {
      setKey(arrayOfKey[index + 1]);
      setCurrentActiveIndex(index);
      const newScrollPosition = scrollPosition + 50;
      setScrollPosition(newScrollPosition);
      const listElement = document.getElementsByClassName("ul_slide");
      if (listElement) {
        listElement[0].scrollLeft = newScrollPosition;
      }
    }
  };

  const handleTabChange = (k) => {
    setKey(k);
    if (resetPdfLayerRef.current) {
      resetPdfLayerRef.current.click();
    }
    if (resetVideoLayerRef.current) {
      resetVideoLayerRef.current.click();
    }
    if (resetImageLayerRef.current) {
      resetImageLayerRef.current.click();
    }
    if (resetLinkLayerRef.current) {
      resetLinkLayerRef.current.click();
    }
    if (resetNoteLayerRef.current) {
      resetNoteLayerRef.current.click();
    }
    if (resetAudioLayerRef.current) {
      resetAudioLayerRef.current.click();
    }
    if (resetTestLayerRef.current) {
      resetTestLayerRef.current.click();
    }
    if (resetSubjectiveLayerRef.current) {
      resetSubjectiveLayerRef.current.click();
    }
    if (resetDAssignmentLayerRef.current) {
      resetDAssignmentLayerRef.current.click();
    }
    if (resetContentLayerRef.current) {
      resetContentLayerRef.current.click();
    }
    // setActiveLayer('layer1');
  };
  return (
    <>
      <Header />
      {
        isLoading ?
          <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
            <Loader />
          </div>
          :
          <section className="py-4 viewdetail bg-light">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-8 mb-2">
                  <div className="pg-breadcrum">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb mb-2 cursor" >
                        <li className="breadcrumb-item" onClick={() => navigate('/')}><span><i className="fa fa-home" aria-hidden="true"> </i> </span>Home</li>
                        <li className="breadcrumb-item active" onClick={() => navigate('/allcourses')}>All Courses</li>
                        {courseDetails && <li className="breadcrumb-item highlight">{courseDetails.course_detail.title}</li>}
                      </ol>
                    </nav>

                    <div className="d-flex align-items-center justify-content-between">
                      <div className="mt-2">
                        <h1>
                          {courseDetails && courseDetails.course_detail.title}
                        </h1>
                      </div>
                      <div className="tabs-button">
                        <button
                          className="tabsprevious"
                          onClick={() => handlePrevious("previous")}
                          disabled={arrayOfKey.indexOf(key) == 0}
                        >
                          <i className="fa fa-angle-left chaptr-btn" aria-hidden="true"></i>
                        </button>
                        <button
                          className="tabsnext"
                          onClick={() => handlePrevious("next")}
                          disabled={
                            arrayOfKey.indexOf(key) == arrayOfKey.length - 1
                          }
                        >
                          <i className="fa fa-angle-right chaptr-btn" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <Tabs
                        activeKey={key}
                        onSelect={(k) => handleTabChange(k)}
                        // onLeave={() => setActiveLayer()}
                        className="mb-3 mt-2 px-2 position-relative ul_slide"
                        id="ul_slide"
                      >
                        {tilesData &&
                          tilesData.map((item, i) => {
                            return (
                              // courseDetails && courseDetails?.course_detail.is_purchased == '0' ?
                              // item.type != "course_combo" &&
                              <Tab
                                eventKey={item.tile_name}
                                title={item.tile_name}
                                key={i}
                              >
                                {console.log(item)}
                                {/* {
                              item.type == "content" && (
                              remainingTilesData && remainingTilesData.length > 0 ? <DisplayContent value={remainingTilesData}/> :<div className='text-center'> <NoDataFound/> </div>
                                // <Overview value={item.meta} />
                              )
                            } */}
                                {
                                  item.type == "content" && <Content value={item} resetRef={resetContentLayerRef} course_id={id} tabName={item.tile_name} is_purchased={courseDetails?.course_detail.is_purchased} mrp={courseDetails?.course_detail.mrp} />
                                }
                                {
                                  item.type == "course_combo" && <CourseCombo value={item.meta} tabName={item.tile_name} parentId={id} />
                                }
                                {item.type == "overview" && (
                                  <Overview value={item.meta} />
                                )}
                                {/* {item.type == "course_combo" && (
                              <CourseCombo value={item.meta} />
                            )} */}
                                {item.type == "faq" && (
                                  <FAQ value={item.meta.list} />
                                )}
                                {item.type == "pdf" && (
                                  <PDF value={item} resetRef={resetPdfLayerRef} tabName={item.tile_name} is_purchased={courseDetails?.course_detail.is_purchased} mrp={courseDetails?.course_detail.mrp} />
                                )}
                                {item.type == "video" && (
                                  <Video value={item} resetRef={resetVideoLayerRef} tabName={item.tile_name} is_purchased={courseDetails?.course_detail.is_purchased} mrp={courseDetails?.course_detail.mrp} />
                                )}
                                {item.type == "image" && (
                                  <ImageTab value={item} resetRef={resetImageLayerRef} tabName={item.tile_name} is_purchased={courseDetails?.course_detail.is_purchased} mrp={courseDetails?.course_detail.mrp} />
                                )}
                                {item.type == "link" && (
                                  <LinkTab value={item} resetRef={resetLinkLayerRef} tabName={item.tile_name} is_purchased={courseDetails?.course_detail.is_purchased} mrp={courseDetails?.course_detail.mrp} />
                                )}
                                {item.type == "concept" && (
                                  <NoteTab value={item} resetRef={resetNoteLayerRef} tabName={item.tile_name} is_purchased={courseDetails?.course_detail.is_purchased} mrp={courseDetails?.course_detail.mrp} />
                                )}
                                {item.type == "audio" && (
                                  <AudioTab value={item} resetRef={resetAudioLayerRef} tabName={item.tile_name} is_purchased={courseDetails?.course_detail.is_purchased} mrp={courseDetails?.course_detail.mrp} />
                                )}
                                {item.type == "test" && (
                                  <Test value={item} resetRef={resetTestLayerRef} tabName={item.tile_name} is_purchased={courseDetails?.course_detail.is_purchased} mrp={courseDetails?.course_detail.mrp} />
                                )}
                                {item.type == "subjective" && (
                                  <Subjective value={item} resetRef={resetSubjectiveLayerRef} tabName={item.tile_name} is_purchased={courseDetails?.course_detail.is_purchased} mrp={courseDetails?.course_detail.mrp} />
                                )}
                                {item.type == "daily_assignment" && (
                                  <Daily_Assignment value={item} resetRef={resetDAssignmentLayerRef} tabName={item.tile_name} is_purchased={courseDetails?.course_detail.is_purchased} mrp={courseDetails?.course_detail.mrp} />
                                )}
                                {
                                  item.type !== "subjective" &&
                                  item.type !== "test" &&
                                  item.type !== "audio" &&
                                  item.type !== "concept" &&
                                  item.type !== "link" &&
                                  item.type !== "image" &&
                                  item.type !== "video" &&
                                  item.type !== "pdf" &&
                                  item.type !== "overview" &&
                                  item.type !== "faq" &&
                                  item.type !== "course_combo" &&
                                  item.type !== "daily_assignment" &&
                                  item.type !== "content" &&
                                  item.type !== "course_combo" && (
                                    <TabDisplay
                                      value={item}
                                      resetRef={resetDAssignmentLayerRef}
                                      tabName={item.tile_name}
                                      is_purchased={courseDetails?.course_detail.is_purchased}
                                    />
                                  )

                                }
                                {/* {item.type !== "overview" && item.type !== "faq" && item.type !== "course_combo" && <TabDisplay value={item.meta} />} */}
                              </Tab>
                              // : <Tab
                              //   eventKey={item.tile_name}
                              //   title={item.tile_name}
                              //   key={i}
                              // ></Tab>
                            );
                          })}
                      </Tabs>
                      {/* <button className="course_btn_nav previous dis_ns border-0"><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
                  <button className="course_btn_nav next dis_ns border-0"><i className="fa fa-chevron-right" aria-hidden="true"></i></button> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <Card3
                    id={courseDetails?.course_detail.id}
                    purchased={courseDetails?.course_detail.is_purchased}
                    cover_image={courseDetails?.course_detail.desc_header_image}
                    title={courseDetails?.course_detail.title}
                    is_gst={courseDetails?.course_detail.is_gst}
                    mrp={Number(courseDetails?.course_detail.mrp)}
                    tax={Number(courseDetails?.course_detail.tax)}
                    course_sp={courseDetails?.course_detail.course_sp}
                    validity={courseDetails?.course_detail.validity}
                    description={courseDetails?.course_detail.description}
                  />
                </div>
              </div>
            </div>
          </section>}
      <LinkSend />
      <Footer />
    </>
  );
}
