import React from 'react'
import { formatOnlyTime, formatTimestamp, formatTimestamponly, isCurrentTimeBefore, isLogin } from '../../../helper'
import Test_icon from '../../assets/images/icons/Test_objective.png'
import { useSearchParams } from 'react-router-dom';
import CountdownTimer from '../../components/CountdownTimer/CountdownTimer';
export default function TestLayer3({ value }) {
  const [searchParam, setSearchParam] = useSearchParams();
  const data = {
    state: '',
    test_type: 0,
    jwt: localStorage.getItem('jwt'),
    // test_id: '',
    user_id: localStorage.getItem('user_id'),
    lang: 1,
    // first_attempt: 0,
    course_id: searchParam.get('course_id'),
    appid: import.meta.env.VITE_APP_ID,
    Devicetype: 4,
  }

  const handleLearnClick = (value) => {
    const params = {
      test_id: value,
      first_attempt: 1,
      ...data
    }
    const encrypted = btoa(JSON.stringify(params))
    window.open(`${import.meta.env.VITE_TEST_SERIES_URL}/learn_result_window?data=${encrypted}`, '_blank');

  }

  const handlePracticeClick = (value) => {
    const params = {
      ...data, test_id: value,
      first_attempt: 1
    }
    const encrypted = btoa(JSON.stringify(params))
    // https://pathshalaclasses.in//web/LiveTest/attempt_now_window?
    window.open(`${import.meta.env.VITE_TEST_SERIES_URL}/attempt_now_window?data=${encrypted}`, '_blank');
  }

  const handleViewRank = (value) => {
    const params = {
      ...data, test_id: value,
      first_attempt: 1
    }
    const encrypted = btoa(JSON.stringify(params))
    window.open(`${import.meta.env.VITE_TEST_SERIES_URL}/result_window?data=${encrypted}`, '_blank');
  }

  const handleViewResult = (value) => {
    const params = {
      ...data, test_id: value,
      first_attempt: 1
    }
    const encrypted = btoa(JSON.stringify(params))
    window.open(`${import.meta.env.VITE_TEST_SERIES_URL}/result_window?data=${encrypted}`, '_blank');

  }

  const handleTestAttempt = (value) => {
    const params = {
      ...data, test_id: value,
      first_attempt: 1
    }
    const encrypted = btoa(JSON.stringify(params))
    // https://pathshalaclasses.in//web/LiveTest/learn_result_window?data=
    window.open(`${import.meta.env.VITE_TEST_SERIES_URL}/attempt_now_window?data=${encrypted}`, '_blank');
  }


  const handleOpenVideo = async (item) => {

  }
  return (
    <>
      <div className="pg-tabs-description">
        <div className="tabs-deschovr d-flex align-items-center rounded shadow">
          <div className="pg-sb-topic d-flex align-items-center" style={{ width: "100%" }}>
            <span className="videoimage">
              <img src={value.image ? value.image : Test_icon} height={'50px'} />
              {/* <i className="fa fa-file-text" aria-hidden="true"></i> */}
            </span>
            <div className="pg-text-section">
              <h3>{value.title}</h3>
              <p className="mb-0 ms-2">Start Date : {formatTimestamponly(value.start_date)} {formatOnlyTime(value.start_date)} </p>
              <p className="mb-0 ms-2">End Date :  {formatTimestamponly(value.end_date)} {formatOnlyTime(value.start_date)}</p>

              <div className="pg-sb-topic pe-2" style={{ width: "100%" }}>
                <div className="btnsalltb text-center"> {isLogin &&
                  <div className="btnalldiv">
                    {
                      isCurrentTimeBefore(value.start_date) ?
                        <>
                          <p className="btn-danger">Upcoming...</p>
                          <p>
                            <CountdownTimer timeStamp={value.start_date} />
                          </p>
                        </>
                        :
                        <>
                          {isCurrentTimeBefore(value.end_date) ? <>{value.attempt == 0 ? <button className="btn" onClick={() => handleTestAttempt(value.id)}>Attempt Now</button>
                            : <button className="btn" onClick={() => handleViewResult(value.id)}>View Result</button>}</> :
                            value.attempt == 0 ? <button className="btn" onClick={() => handleViewRank(value.id)}>View Rank</button>
                              : <button className="btn" onClick={() => handleViewResult(value.id)}>View Result</button>}
                        </>
                    }
                    <button className="btn" onClick={() => handleLearnClick(value.id)}>Learn</button>
                    <button className="btn" onClick={() => handlePracticeClick(value.id)}>Practice</button>
                  </div>}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
