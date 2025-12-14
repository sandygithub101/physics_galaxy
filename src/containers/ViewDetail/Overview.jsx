import React, { useEffect, useState } from 'react'
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap'
import { getMasterDataService } from '../../services'
import { resHandler } from '../../../helper'
import { useParams } from 'react-router-dom';
import NoDataFound from '../NoDataFound/NoDataFound';
import './Overview.css';

export default function Overview({ value }) {
  const [aboutData, setAboutData] = useState();
  const [language, setLanguage] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    // console.log(value)
    value && setAboutData(value);
  }, [value])

  // const getDetail = (value) =>{
  //   const formData = new FormData();
  //   formData.append('course_id',id);
  //   formData.append('tile_id',value.id);
  //   formData.append('type',value.type);
  //   formData.append('revert_api',value.revert_api);
  //   formData.append('topic_id',0);
  //   formData.append('subject_id',0);
  //   getMasterDataService(formData).then(res =>{
  //     let {data, status, message} = resHandler(res);
  //     if(status){
  //       console.log(data, "data")
  //       setAboutData(data);
  //     }
  //   }).catch(err => console.log(err))
  // }
  return (
    <div>
      <div className="bg-white pg-tabs-description pb-3 tbSectionOption  shadow">
        <div className="d-flex align-items-center justify-content-between p-3">
          <h3>{aboutData && language == true ? aboutData?.description.heading : aboutData?.description_2.heading}</h3>
          {aboutData && aboutData.visibility === '0' && <span><button className='toggle' onClick={() => setLanguage(!language)}>{language ? 'Hindi' : 'English'}</button></span>}
          {/* <i className="fa fa-toggle-on" aria-hidden="true"></i> */}
        </div>
        {language ? aboutData && aboutData.description.data ? <div className='overview' dangerouslySetInnerHTML={{ __html: aboutData && aboutData.description.data }} /> : <div className='text-center'> <NoDataFound /> </div>
          :
          aboutData && aboutData.description_2.data ? <div className='overview' dangerouslySetInnerHTML={{ __html: aboutData && aboutData.description_2.data }} /> : <div className='text-center'> <NoDataFound /> </div>}
      </div>
    </div>
    // <div><div className="bg-white pg-tabs-description pb-3 shadow">
    // <div className="d-flex align-items-center justify-content-between p-3">
    //  <span><h1 className="fw-bold">About</h1></span>
    //  <span className="fw-bold"><i className="fa fa-bars" aria-hidden="true"></i></span>
    // </div>

    // <div className="pg-tabs-des">
    //   <p></p>
    //   <p>We’ll talk about “big data” and how to deal with that in Weka (you’ll process a dataset with 10 million instances). You’ll learn about mining text. You’ll look at filtering using supervised and unsupervised filters. You’ll learn about discretization and sampling. You’ll learn about attribute selection. You’ll learn about classification rules, rules vs. trees, association rules, clustering, cost-sensitive evaluation and classification. You already know how to use the Explorer, and we’re going to start by showing you Weka’s other interfaces.</p>
    //   <p>Again, the aim of the course is to dispel the mystery that surrounds data mining. After completing it you will be even better equipped to mine your own data using more powerful methods. Most importantly, you’ll understand what it is that you’re doing!</p>
    //   <p></p>                    
    //    </div>
    // </div></div>
  )
}
