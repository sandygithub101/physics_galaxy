import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import Card2 from "./Card2/Card2";
import "./CourseCombo.css";
import { getCourse_Detail_Service, getMasterDataService } from "../../services";
import { resHandler } from "../../../helper";
import Loader from "../../components/Loader/Loader";
import { Tab, Tabs } from "react-bootstrap";
import Overview from "./Overview";
import Content from "./Content";
import { useRef } from "react";
import FAQ from "./FAQ";
import PDF from "./PDF";
import Video from "./Video";
import ImageTab from "./ImageTab";
import LinkTab from "./LinkTab";
import NoteTab from "./NoteTab";
import AudioTab from "./AudioTab";
import Test from "./Test";
import Subjective from "./Subjective";
import Daily_Assignment from "./Daily_Assignment";
import subject_icon from "../../assets/images/icons/subject_icon.png";
import Button5 from "../../components/Buttons/Button5/Button5";
import { useNavigate } from "react-router-dom";

export default function CourseCombo({ value, tabName, parentId }) {
  const [comboCourse, setComboCourse] = useState();
  const [key, setKey] = useState("overview");
  const [layer2CourseData, setLayer2CourseData] = useState();
  const [courseDetails, setCourseDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showLayer, setShowLayer] = useState("layer1");
  const navigate = useNavigate();
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
    if (typeof value != "undefined") {
      // console.log(value, "combo");
      setComboCourse(value);
    }
  }, [value]);

  const convertInObj = (value) => {
    const dataArray = value.split(", ").map((segment) => segment.trim());
    return dataArray;
  };

  const getLayer3Data = async (index) => {
    setShowLayer("layer3");
    setLayer2Index(index);
    console.log(layer1Data, "layer1Data");
    console.log(layer2List, "layer 2 Data");
    const data = {
      tile_id: layer1Data.id,
      type: layer1Data.type,
      revert_api: layer1Data.revert_api,
      topic_id: layer2List.list[index].id,
      subject_id: layer2List.id,
      layer: 3,
      page: 1,
    };
    const result = await getDetail(data);
    console.log(result);
    // setLayer3Data(result);
  };

  const getCourse = async (value) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("course_id", value);
    formData.append("parent_id", parentId);

    await getCourse_Detail_Service(formData)
      .then((res) => {
        const { status, data, message } = resHandler(res);
        console.log(data);
        if (status) {
          if (data.course_detail.is_purchased == 0) {
            // const tileNames = data.tiles.filter((item) => item.type != "content")
            // .map((item) => item.tile_name);
            // // .map((item) => {return item.tile_name != 'Content' && item.tile_name});
            // setArrayOfKey(tileNames);
            const tiles = data.tiles.filter((item) => item.type != "content");
            setLayer2CourseData(tiles);

            // const findOverview = data.tiles.find(item => item.type == 'overview')
            // setKey(data.tiles.find(item => item.type == 'overview').tile_name);
          } else {
            // item.type === "course_combo" ||
            // const tileNames = data.tiles.filter((item) =>  item.type === "overview" || item.type === "faq" || item.type === "content" || item.type === 'course_combo')
            // .map((item) => item.tile_name);
            // // tileNames.push('Content')
            // // .map((item) => {return item.tile_name != 'Content' && item.tile_name});
            // setArrayOfKey(tileNames);
            const tiles = data.tiles.filter(
              (item) =>
                item.type === "overview" ||
                item.type === "faq" ||
                item.type === "content"
                ||
                item.type === "course_combo"
            );
            console.log(tiles, "tile");
            // const content = {tile_name : 'Content' , type : 'content'}
            // tiles.push(content);
            // const Reamining_tiles = data.tiles.filter((item) => item.type !== "overview" && item.type !== 'course_combo')
            // console.log(Reamining_tiles, "tile")
            setLayer2CourseData(tiles);
            // setRemainingTilesData(Reamining_tiles);
          }
          // const tiles = data.tiles.filter((item) => item.type === "overview" || item.type === "faq" || item.type === "content" || item.type === 'course_combo')
          console.log(data, "tile");
          setCourseDetails(data);

          setIsLoading(false);
          setShowLayer("layer2");
          setKey(data.tiles.find((item) => item.type == "overview").tile_name);
        }
        // status &&
      })
      .catch((err) => console.log(err));
  };

  const getDetail = async (data) => {
    const formData = new FormData();
    formData.append("course_id", id);
    formData.append("tile_id", data.tile_id);
    formData.append("type", data.type);
    formData.append("revert_api", data.revert_api);
    formData.append("topic_id", data.topic_id);
    formData.append("subject_id", data.subject_id);
    formData.append("layer", data.layer);
    formData.append("page", data.page);
    return await getMasterDataService(formData).then((res) => {
      let { data, status, message } = resHandler(res);
      if (status) {
        // console.log(data, "data");
        return data;
        // setAboutData(data);
      }
    });
  };

  const handleChangeTab = (k) => {
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
  };
  return (
    <>
      {showLayer != "layer1" && <div className="custom-breadcrumb">
        <span
          // ref={resetRef}
          className={showLayer == "layer1" ? "active-breadcrumb" : ""}
          onClick={() => {
            setShowLayer("layer1");
            setFilterType("all");
            setShowPdf(false);
            setPdfUrl();
          }}
        >
          {tabName}
        </span>
        <span
          className={showLayer == "layer2" ? "active-breadcrumb" : ""}
          onClick={() => {
            setShowLayer("layer2");
            // setFilterType('all');
            // setShowPdf(false);
            // setPdfUrl();
          }}
        >
          {(layer2CourseData != undefined && showLayer == "layer2") ||
            showLayer == "layer3"
            ? ` > ${courseDetails.course_detail.title}`
            : ""}
        </span>
        <span
          className={showLayer == "layer3" ? "active-breadcrumb" : ""}
          onClick={() => {
            setShowLayer("layer3");
            // setFilterType('all');
            // setShowPdf(false);
            // setPdfUrl();
          }}
        >
          {/* {showLayer == "layer3"
            ? ` > ${layer2List.list[layer2Index].title}`
            : ""} */}
        </span>
      </div>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {showLayer == "layer2" && (
            <>
              <Tabs
                activeKey={key}
                onSelect={(k) => handleChangeTab(k)}
                className="mb-3 mt-2 px-2 position-relative ul_slide"
                id="ul_slide"
              >
                {layer2CourseData &&
                  layer2CourseData.map((item, i) => {
                    return (
                      <Tab
                        eventKey={item.tile_name}
                        title={item.tile_name}
                        key={i}
                      >
                        {item.type == "overview" && (
                          <Overview value={item.meta} />
                        )}
                        {item.type == "content" && (
                          <Content
                            value={item}
                            resetRef={resetContentLayerRef}
                            course_id={courseDetails.course_detail.id}
                            tabName={item.tile_name}
                          />
                        )}
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
                      </Tab>
                    );
                  })}
              </Tabs>
            </>
          )}

          {showLayer == "layer1" && (
            <div className="row">
              {comboCourse &&
                comboCourse.list.map((item, i) => {
                  return (
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card mb-2 m-1">
                          <div className="row g-0 bg-greyrow">
                            <div className="d-flex cursemaindiv">
                              <div className="col-md-3">
                                <div className="course-image-size regularClass">
                                  <img
                                    src={item.cover_image ? item.cover_image : subject_icon}
                                    className="img-fluid p-1"
                                    alt="cover_image"
                                  />
                                </div>
                              </div>
                              <div className="col-md-9">
                                <div className="card-body card-b-p">
                                  <div className="vjed-card-item">
                                    <h3 className="card-title card-order-title">
                                      {item.title}
                                    </h3>
                                  </div>
                                  <div className="align-items-center vjed-amountt">
                                    <div className="course-pspn mb-0">
                                      <p className="course-item-list">
                                        {/* {convertInObj(item.segment_information)} */}
                                        {/* {item.segment_information} */}
                                        {item.segment_information &&
                                          convertInObj(
                                            item.segment_information
                                          ).map((item, i) => {
                                            const [number, description] =
                                              item.split(": ");
                                            return (
                                              <div className="course-item">

                                                <p className="courseitem-description">
                                                  {description}
                                                </p>
                                                <p className="courseitem-number">
                                                  : {number}
                                                </p>
                                              </div>
                                            );
                                          })}
                                      </p>
                                    </div>
                                    <div className="coursevdtls cursor">
                                      <button
                                        onClick={() => navigate(`/cc_details?id=${parentId}_${item.id}`)}
                                      >
                                        Explore
                                        {/* getCourse(item.id) */}
                                      </button>
                                      {/* <Button5
                                      name= {"Explore"} onButtonClick={() => getCourse(item.id)}
                                       /> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </>
      )}
    </>
  );
}

{
  /* <Tabs
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 mt-2 px-2 position-relative ul_slide"
              id="ul_slide"
            >
             
            </Tabs> */
}
