import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import { useNavigate, useParams } from "react-router-dom";
import { getMasterDataService } from "../../services";
import { resHandler } from "../../../helper";
import Image_icon from '../../assets/images/icons/Image.png'
import subject_icon from '../../assets/images/icons/subject_icon.png'
import topic_icon from '../../assets/images/icons/topic_icon.png';
import lock_icon from "../../assets/images/icons/lock_icon.svg"
import Modal from "../../components/Modal/Modal";
import BuyCourseModal from "../../components/BuyCourseModal/Index";
import { useSearchParams } from "react-router-dom/dist";
import PDFLayer3 from "./PDFLayer3";
import ImageLayer3 from "./ImageLayer3";
import VideoLayer3 from "./VideoLayer3";
import AudioLayer3 from "./AudioLayer3";
import TestLayer3 from "./TestLayer3";
import Daily_AssignmentLayer3 from "./Daily_AssignmentLayer3";
import SubjectiveLayer3 from "./SubjectiveLayer3";
import LinkTabLayer3 from "./LinkTabLayer3";
import NoteTabLayer3 from "./NoteTabLayer3";
import NoDataFound from "../NoDataFound/NoDataFound";
import Loader from "../../components/Loader/Loader";
export default function Content({ value, tabName, is_purchased, resetRef, course_id }) {
  const [layer1Data, setLayer1Data] = useState();
  const [showLayer, setShowLayer] = useState("layer1");
  const [layer2List, setLayer2List] = useState();
  const [layer1Index, setLayer1Index] = useState();
  const [layer2Index, setLayer2Index] = useState();
  const [layer3Data, setLayer3Data] = useState();
  const [filteredLayer3Data, setFilteredLayer3Data] = useState();
  const [pageNum, setPageNum] = useState(0);
  const [isOpenBuyCourseModal, setIsOpenBuyCourseModal] = useState(false);
  const [imageUrl, setImageUrl] = useState()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const [searchParam, setSearchParam] = useSearchParams();
  const [uniqueTabs, setUniqueTabs] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [id, setId] = useState();
  const [showPdf, setShowPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState();
  // useEffect(() => {
  //   if (typeof searchParam !== "undefined") {
  //     setId(searchParam.get('course_id'))
  //   }
  // }, [searchParam]);

  useEffect(() => {
    const tabs = {};
    if (layer3Data) {

      layer3Data && layer3Data.list.forEach((item) => tabs[item.file_type] = item.payload);
      const uniqueTabsArray = Object.values(tabs);
      setUniqueTabs(uniqueTabsArray);
      if (filterType === 'all') {
        setFilteredLayer3Data(layer3Data.list)
      }
      else {

        const filteredData = layer3Data.list.filter(item => item.payload.tile_type == filterType);
        //  console.log(filteredData)
        setFilteredLayer3Data(filteredData);
      }
    }
  }, [layer3Data, filterType])
  // useEffect(() =>{
  //  if(filterType === 'all'){
  //     setFilteredLayer3Data(layer3Data)
  //  }
  //  else{
  //    const filteredData = layer3Data.filter(item => item.payload.type === filterType)
  //    setFilteredLayer3Data(filteredData);
  //  }
  // },[filterType])

  useEffect(() => {
    if (value) {
      setLayer1Data(value);
      // setShowLayer()
    }
  }, [value]);

  const getLayer2Data = (index) => {
    setLayer1Index(index);
    setShowLayer("layer2");
    setLayer2List(layer1Data.meta?.list[index]);
  };

  const getLayer3Data = async (index) => {
    setShowLayer("layer3");
    setLayer2Index(index);
    // console.log(layer1Data, "layer1Data");
    // console.log(layer2List, "layer 2 Data");
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
    // console.log(result);
    setLayer3Data(result);
  };

  const getDetail = async (data) => {
    setIsLoading(true)
    const formData = new FormData();
    formData.append("course_id", course_id);
    formData.append("tile_id", data.tile_id);
    formData.append("type", data.type);
    formData.append("revert_api", data.revert_api);
    formData.append("topic_id", data.topic_id);
    formData.append("subject_id", data.subject_id);
    formData.append("layer", data.layer);
    formData.append("page", data.page);
    return await getMasterDataService(formData)
      .then((res) => {
        let { data, status, message } = resHandler(res);
        setIsLoading(false)
        if (status) {
          // console.log(data, "data");
          setIsLoading(false)
          return data;

          // setAboutData(data);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleOpenPDF = async (item) => {
    if (isLogin) {
      if (item.is_locked == "0" || is_purchased == "1") {
        setImageUrl(item.file_url);
        setIsModalOpen(true);
      } else {
        setIsOpenBuyCourseModal(true);
      }
    } else {
      const fullUrl = window.location.href;
      localStorage.setItem('redirect', fullUrl);
      navigate('/login')
    }

  }

  const onDocumentLoadSuccess = ({ numPages }) => {
    // setNumPages(numPages);
  };

  const handleDataUrl = (value) => {
    setShowPdf(true);
    setPdfUrl(value)

  }

  return (
    <>
      <BuyCourseModal ModalOpen={isOpenBuyCourseModal} CloseModal={() => setIsOpenBuyCourseModal(false)} />

      <div className="custom-breadcrumb">
        <span
          ref={resetRef}
          className={showLayer == "layer1" ? 'active-breadcrumb' : ''}
          onClick={() => {
            setShowLayer("layer1");
            setFilterType('all');
            setShowPdf(false);
            setPdfUrl();
          }}
        >
          {tabName}
        </span>
        <span
          className={showLayer == "layer2" ? 'active-breadcrumb' : ''}
          onClick={() => {
            setShowLayer("layer2");
            setFilterType('all');
            setShowPdf(false);
            setPdfUrl();
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
            setFilterType('all');
            setShowPdf(false);
            setPdfUrl();

          }}
        >
          {showLayer == "layer3"
            ? ` > ${layer2List.list[layer2Index].title}`
            : ""}
        </span>
      </div>

      {/* <Modal.Header closeButton></Modal.Header> */}
      <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setImageUrl(); }}>
        {imageUrl ? <img className="image_modal" src={imageUrl} /> : 'NO Image'}


      </Modal>
      <>
        {layer3Data && uniqueTabs && uniqueTabs.length > 1 && showLayer == "layer3" && <div className={`contntalldv mb-4 px-2 py-2 pb-0`}>
          <button className={`btn ${filterType == 'all' && 'activefilter'}`} onClick={() => setFilterType('all')}>All</button>
          {
            uniqueTabs && uniqueTabs.map((item, i) => {
              return (
                <button className={`btn ${filterType == item.tile_type && 'activefilter'}`} key={i} onClick={() => setFilterType(item.tile_type)}>{item.tile_type}</button>
              )
            })
          }
          {/* <button>All</button>
        <button>All</button> */}
        </div>}

        {
          showPdf && pdfUrl ?
            <div className="embed-responsive embed-responsive-16by9" >

              <embed src={pdfUrl.file_url + `${pdfUrl.is_download == 0 ? '#toolbar=0' : ''}`} type="application/pdf" className="embed-responsive-item" width='100%' height='700' allowFullScreen />

            </div>
            :
            isLoading ?
              <Loader />
              :
              showLayer == "layer3"
                ? filteredLayer3Data &&
                filteredLayer3Data.map((item, i) => {
                  return (
                    <>
                      {item.file_type === '1' && <PDFLayer3 value={item} getDataUrl={handleDataUrl} key={i} />}
                      {item.file_type === '3' && <VideoLayer3 value={item} key={i} />}
                      {item.file_type === '6' && <ImageLayer3 value={item} key={i} />}
                      {item.file_type === '7' && <NoteTabLayer3 value={item} key={i} />}
                      {item.file_type === '8' && <LinkTabLayer3 value={item} key={i} />}
                      {item.file_type === '13' && <AudioLayer3 value={item} key={i} />}
                      {item.file_type === 't' && <TestLayer3 value={item} key={i} />}
                      {item.file_type === 'da' && <Daily_AssignmentLayer3 value={item} key={i} />}
                      {item.file_type === 'st' && <SubjectiveLayer3 value={item} key={i} />}
                    </>
                  );
                })
                : showLayer == "layer2"
                  ? layer2List &&
                  layer2List.list.map((item, i) => {
                    return (
                      <Tab item={item} key={i} Index={i} nextIndex={getLayer3Data} image={topic_icon} />
                    );
                  })
                  : showLayer == "layer1" &&
                    layer1Data && layer1Data?.meta?.list.length > 0 ?
                    layer1Data?.meta?.list?.map((item, i) => {
                      return (
                        <Tab item={item} key={i} Index={i} nextIndex={getLayer2Data} image={subject_icon} />
                      );
                    })
                    : <div className='text-center'>
                      <div className='pg-no-data-found'>
                        <NoDataFound />
                      </div>
                    </div>
        }

      </>
    </>
  );
}
