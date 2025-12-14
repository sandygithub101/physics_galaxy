import React from 'react'

import './TestSection.css'
import galaxy_logo from '../../assets/images/galaxy-logo.png'
import user_img from '../../assets/images/user-p.jpg'

import { Link } from 'react-router-dom';
export default function TestSection() {
  return (
    <div className='pg-quesrtion-section'>
      <div className='pg-question-header'>
        <div className='container'>
          <div className='d-flex align-items-center justify-content-between'>
            <div className="h-logo pg-qst-logo p-1">
              <Link className="navbar-brand logo" to='/'>
                <img src={galaxy_logo} alt="Physics Galaxy" />
              </Link>
            </div>
            <div className='p-1'>
              <div className='d-flex align-items-center'>
                <div className='pg-qst-userimage'>
                  <img src={user_img} />
                </div>
                <div className='pg-qst-username-time'>
                  <h6 className='text-white mb-0'>Candidate name :<span> abc</span></h6>
                  <p className='text-white mb-0'>Remaning Time :<span> 00:01:00</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='pg-qst-sub-name text-center p-2'>
        <h5 className='mb-0'>Subject Name</h5>
      </div>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-8 col-md-7'>
            <div className=' mock-test'>
              <div className=' mock_test_main m-2 bg-light'>

                <div className='mock_test_top bg-white mx-4'>
                  <h5>Question <span>1/10</span></h5>
                  <p>An article marked of Rs. 8000 is sold for Rs. 7200 what is the discount percentage ?</p>
                  {/* <h6>Language:
                                &nbsp;&nbsp;
                                <select>
                                    <option>English</option>
                                    <option>Hindi</option>
                                </select>
                            </h6> */}
                </div>

                <div className='mock_test_question'>

                  <ul className='list-unstyled '>
                    <li><input type='radio' id='one' name='answer' /> <label for='one'>8%</label></li>
                    <li><input type='radio' id='two' name='answer' /> <label for='two'>11.1%</label></li>
                    <li><input type='radio' id='three' name='answer' /> <label for='three'>12%</label></li>
                    <li><input type='radio' id='four' name='answer' /> <label for='four'>11%</label></li>
                  </ul>
                </div>

              </div>

              <div className='mock_test_foot d-flex justify-content-between mt-3'>
                <div>
                  <button className='mx-2 fw-bold'>Mark & Next</button>
                  <button className='fw-bold'>Clear Response</button>
                </div>
                <div>
                  <button className='fw-bold'>Save & Next</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-5'>
            <div className='pg-qst-ans-section'>
              <div className='pg-qst-ans px-3 py-1 m-2 bg-light'>
                <div className='pg-qst-markstate '>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='mb-3'><span><i className="fa fa-square text-muted" aria-hidden="true"></i> Not Visited</span></div>

                      <div className='mb-3'><span><i className="fa fa-square text-success" aria-hidden="true"></i> Answered</span></div>
                    </div>

                    <div className='col-md-6'>
                      <div className='mb-3'><span><i className="fa fa-circle text-primary" aria-hidden="true"></i> Marked for review</span></div>
                      <div className='mb-3'><span><i className="fa fa-square text-danger" aria-hidden="true"></i> Unanswered</span></div>
                    </div>

                    <div className='mb-3'>
                      <div><span><i className="fa fa-circle text-primary" aria-hidden="true"></i> Answered and mark for review (will be considered for evaluation)</span></div>

                    </div>
                  </div>
                </div>

                <div className='bg-dark p-1'>
                  <p className='mb-0 fw-bold  text-white'>Section 1</p>
                </div>

                <div className='pg-qst-ans-btn py-3'>
                  <span><button>1</button></span>
                  <span><button>2</button></span>
                  <span><button>3</button></span>
                  <span><button>4</button></span>
                  <span><button>5</button></span>
                  <span><button>6</button></span>
                  <span><button>7</button></span>
                  <span><button>8</button></span>
                  <span><button>9</button></span>
                  <span><button>10</button></span>
                  <span><button>11</button></span>
                  <span><button>12</button></span>
                  <span><button>13</button></span>
                  <span><button>14</button></span>
                  <span><button>15</button></span>

                </div>

              </div>
              <div className='pg-qst-sbt-btn mt-3'>
                <button className='fw-bold w-100'>Submit Test</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
