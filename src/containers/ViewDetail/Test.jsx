import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import Modal from "../../components/Modal/Modal";
import { useSearchParams } from "react-router-dom";
import { getMasterDataService } from "../../services";
import { formatTimestamp, isCurrentTimeBefore, isLogin, resHandler } from "../../../helper";
import Test_icon from '../../assets/images/icons/Test_objective.png';
import subject_icon from '../../assets/images/icons/subject_icon.png';
import topic_icon from '../../assets/images/icons/topic_icon.png';
import lock_icon from "../../assets/images/icons/lock_icon.svg";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import { Button } from "react-bootstrap";  // Corrected import statement
import BuyCourseModal from "../../components/BuyCourseModal/Index";
import LoginPageModal from "../Login/LoginPageModal";

export default function Test({ value, tabName, is_purchased, mrp, resetRef }) {
  const [testUrl, setTestUrl] = useState();
  const [layer1Data, setLayer1Data] = useState();
  const [showLayer, setShowLayer] = useState('layer1');
  const [layer2List, setLayer2List] = useState();
  const [layer1Index, setLayer1Index] = useState();
  const [layer2Index, setLayer2Index] = useState();
  const [layer3Data, setLayer3Data] = useState();
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();
  const [isOpenBuyCourseModal, setIsOpenBuyCourseModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState();
  // const history = useHistory();  // Added useHistory

  useEffect(() => {
    if (typeof searchParam !== "undefined") {
      setId(searchParam.get('course_id'));
    }
  }, [searchParam]);

  useEffect(() => {
    if (value) {
      setLayer1Data(value);
    }
  }, [value]);

  const getLayer2Data = (index) => {
    setLayer1Index(index);
    setShowLayer('layer2');
    setLayer2List(layer1Data.meta?.list[index]);
    console.log(layer1Data.meta?.list[index]);
  };

  const getLayer3Data = async (index) => {
    setShowLayer('layer3');
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
    setLayer3Data(result);
  };

  const getDetail = async (data) => {
    const formData = new FormData();
    formData.append('course_id', id);
    formData.append('tile_id', data.tile_id);
    formData.append('type', data.type);
    formData.append('revert_api', data.revert_api);
    formData.append('topic_id', data.topic_id);
    formData.append('subject_id', data.subject_id);
    formData.append('layer', data.layer);
    formData.append('page', data.page);
    return await getMasterDataService(formData)
      .then((res) => {
        let { data, status, message } = resHandler(res);
        if (status) {
          return data;
        }
      })
      .catch((err) => console.log(err));
  };

  const handleOpenPDF = async (item) => {
    if (isLogin) {
      if (item.is_locked === "0" || is_purchased === "1") {
        setTestUrl(item.file_url);
        setIsModalOpen(true);
      } else {
        setIsOpenBuyCourseModal(true);
      }
    } else {

      // const fullUrl = window.location.href;
      // localStorage.setItem('redirect', fullUrl);
      // navigate('/login')
      setOpenLoginModal(true);
    }
  };

  return (
    <>
      <LoginPageModal ModalOpen={openLoginModal} OpenModal={() => setOpenLoginModal(true)} CloseModal={() => setOpenLoginModal(false)} />
      <BuyCourseModal ModalOpen={isOpenBuyCourseModal} mrp={mrp} CloseModal={() => setIsOpenBuyCourseModal(false)} />

      <div className="custom-breadcrumb">
        <span
          ref={resetRef}
          className={showLayer == "layer1" ? 'active-breadcrumb' : ''}
          onClick={() => {
            setShowLayer("layer1");

          }}
        >
          {tabName}
        </span>
        <span
          className={showLayer == "layer2" ? 'active-breadcrumb' : ''}
          onClick={() => {
            setShowLayer("layer2");

          }}
        >
          {(layer2List != undefined && showLayer == "layer2") ||
            showLayer == "layer3"
            ? ` > ${layer2List.title}`
            : ""}
        </span>
        <span
          className={showLayer == "layer3" ? 'active-breadcrumb' : ''}
          onClick={() => {
            setShowLayer("layer3");

          }}
        >
          {showLayer == "layer3"
            ? ` > ${layer2List.list[layer2Index].title}`
            : ""}
        </span>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setTestUrl(); }}>
        {testUrl ? <img className="image_modal" src={testUrl} /> : 'NO Image'}


      </Modal>
      {
        showLayer == 'layer3' ?
          layer3Data && layer3Data.list.map((item, i) => {
            return (<div className=" pg-tabs-description" key={i} onClick={() => handleOpenPDF(item)}>
              <div className="tabs-deschovr d-flex align-items-center rounded shadow">
                <div className="pg-sb-topic d-flex align-items-center" style={{ width: "50%" }}>
                  <span className="videoimage">
                    <img src={item.image ? item.image : Test_icon} height={'50px'} />
                    {/* <i className="fa fa-file-text" aria-hidden="true"></i> */}
                  </span>
                  <div className="pg-text-section">
                    <h3>{item.test_series_name}</h3>
                    <p className="mb-0 ms-2">Start Test - {formatTimestamp(item.start_date)} </p>
                    <p className="mb-0 ms-2">End Test -  {formatTimestamp(item.end_date)}</p>
                  </div>
                </div>
                <div className="pg-sb-topic pe-2" style={{ width: "50%" }}>
                  <div className="btnsalltb text-center"> {isLogin && item.is_locked == '0' || is_purchased == '1' ?
                    <div className="btnalldiv">
                      {
                        isCurrentTimeBefore(item.start_date) ? <>
                          <p className="btn-danger">Upcoming...</p>
                          <p>
                            <CountdownTimer timeStamp={1696962600} />
                          </p>

                        </> : <>
                          {isCurrentTimeBefore(item.end_date) ? <>{item.attempt == 0 ? <button className="btn">Attempt Now</button>
                            : <button className="btn">View Result</button>}</> :
                            item.attempt == 0 ? <button className="btn">View Rank</button>
                              : <button className="btn">View Result</button>}
                        </>
                      }
                      <button className="btn">Learn</button>
                      <button className="btn">Practice</button>
                    </div>
                    : <div className="pg-sb-topic pe-2" >
                      <span className="videoimage text-center"> <img src={lock_icon} /> </span></div>} </div>
                </div>
              </div>
            </div>)
          })
          :
          showLayer == 'layer2' ? layer2List && layer2List.list.map((item, i) => {
            return (
              <Tab item={item} key={i} Index={i} nextIndex={getLayer3Data} image={topic_icon} />
            )
          })

            :
            showLayer == 'layer1' && layer1Data && layer1Data?.meta?.list?.map((item, i) => {
              return (
                <Tab item={item} key={i} Index={i} nextIndex={getLayer2Data} image={subject_icon} />
              )
            })
      }

    </>
  )
}
