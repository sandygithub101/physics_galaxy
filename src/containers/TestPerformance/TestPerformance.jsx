import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import galaxy_logo from '../../assets/images/galaxy-logo.png'
import './TestPerformance.css'
import { Tab, Tabs } from 'react-bootstrap';
export default function TestPerformance() {
    const [perDet, setPerDet] = useState(1);
    return (
        <>
            {/* Performance top header */}
            <section className='pg-testperformance-section'>

                <div className='perform_header'>
                    <div className='container'>
                        <div className='row'>

                            <div className="h-logo pg-qst-logo p-1">
                                <Link className="navbar-brand logo" to='/'>
                                    <img src={galaxy_logo} alt="Physics Galaxy" />
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>
                <div className=' text-center bg-warning'>
                    <h3 className='text-dark'>SKT</h3>
                </div>

                <div className='perform_main'>
                    <div className='container'>
                        <div className='perform_btn'>
                            <button onClick={() => setPerDet(1)} className={`${perDet === 1 && 'active_per'}`}>PERFORMANCE</button>
                            <button onClick={() => setPerDet(2)} className={`${perDet === 2 && 'active_per'} ms-2`}>SOLUTIONS</button>
                        </div>

                        {/* Performance btn section  */}
                        <div className={`perform_detail ${perDet === 1 && 'perform_detail_toggle'}`}>
                            <div className='stud_perf py-2 my-2 border text-center'>
                                <i className="fa fa-trophy" aria-hidden="true"></i>
                                <h6>Need to word hard, Shubham</h6>
                                <h6>Let's see how you perform.</h6>
                                <h6>Score 0.00/10</h6>
                            </div>
                            {/* Quick Summary */}
                            <div className='quick_main'>
                                <h5 className='my-3'>Quick Summary</h5>
                                <div className='quick_main_box d-flex justify-content-between align-items-center'>
                                    <div className='text-center quick_main_box-sec'>
                                        <span> <i className="fa fa-random me-2" aria-hidden="true"></i>
                                            <span>1</span> Rank
                                        </span>
                                    </div>
                                    <div className='text-center quick_main_box-sec'>
                                        <span> <i className="fa fa-male me-2" aria-hidden="true"></i>
                                            <span> 0.00% </span>
                                            Percentile
                                        </span>
                                    </div>
                                    <div className='text-center quick_main_box-sec'>
                                        <span> <i className="fa fa-percent me-2" aria-hidden="true"></i>
                                            <span> 0.00% </span>
                                            Percentile
                                        </span>
                                    </div>
                                    <div className='text-center quick_main_box-sec'>
                                        <span> <i className="fa fa-check-square-o me-2" aria-hidden="true"></i><span> 0% </span> Accuracy</span>
                                    </div>
                                    <div className='text-center quick_main_box-sec'>
                                        <span> <i className="fa fa-hourglass-end me-2" aria-hidden="true"></i><span> 0/5 </span> Attempted</span>
                                    </div>
                                </div>
                            </div>
                            <div className='my-2 pg-quick-score'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <p className='text-center text-muted mb-0'>Best Score</p>
                                        <p className='text-center score mb-0'>0.00</p>
                                    </div>
                                    {/* <div className='text-center'></div> */}
                                    <div className='col-md-6'>
                                        <p className='text-center text-muted mb-0'>Average Score</p>
                                        <p className='text-center score mb-0'>0.00</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sectional Summary */}
                            <div className='row my-3'>
                                <h5 className='mb-3'>Sectional Summary</h5>
                                <div className='col-md-3'>
                                    <div className='bg-primary p-2 pg-quick-summery'>
                                        <div className='d-flex align-items-center'>
                                            <div className='me-2'>
                                                <span> <i className="fa fa-trophy text-white" aria-hidden="true"></i></span>
                                            </div>
                                            <div className='me-3'>
                                                <p className='m-0 text-light'>Total Score</p>
                                                <span className='text-light me-2'>0.00/10</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sect_summ'>
                                        <span>0.00/10</span>
                                        <p className='mb-0'>Subject</p>
                                    </div>
                                </div>

                                <div className='col-md-3'>
                                    <div className='bg-success p-2 pg-quick-summery'>
                                        <div className='d-flex align-items-center'>
                                            <div className='me-2'>
                                                <span> <i className="fa fa-check-square-o text-white" aria-hidden="true"></i></span>
                                            </div>
                                            <div className='me-3'>
                                                <p className='m-0 text-light'>Accuracy</p>
                                                <span className='text-light me-2'>0%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sect_summ'>
                                        <span>0%</span>
                                        <p className='mb-0'>Subject</p>
                                    </div>
                                </div>

                                <div className='col-md-3'>
                                    <div className='bg-info p-2 pg-quick-summery'>
                                        <div className='d-flex align-items-center'>
                                            <div className='me-2'>
                                                <span> <i className="fa fa-hourglass-end text-white" aria-hidden="true"></i></span>
                                            </div>
                                            <div className='me-3'>
                                                <p className='m-0 text-light'>Attempted</p>
                                                <span className='text-light me-2'>0/5</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sect_summ'>
                                        <span>0/5</span>
                                        <p className='mb-0'>Subject</p>
                                    </div>
                                </div>


                                <div className='col-md-3'>
                                    <div className='bg-warning p-2 pg-quick-summery'>
                                        <div className='d-flex align-items-center'>
                                            <div className='me-2'>
                                                <span> <i className="fa fa-clock-o text-white" aria-hidden="true"></i></span>
                                            </div>
                                            <div className='me-3'>
                                                <p className='m-0 text-light'>Time</p>
                                                <span className='text-light me-2'>00:17/05:00 min</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sect_summ'>
                                        <span>00:17/05:00</span>
                                        <p className='mb-0'>Subject</p>
                                    </div>
                                </div>



                            </div>
                            {/* Question Summary */}
                            <div className='row my-3'>
                                <h5>Question Summary</h5>


                                <div className='col-md-3'>
                                    <div className='bg-success p-2 pg-quick-summery'>
                                        <div className='d-flex align-items-center'>
                                            <div className='me-2'>
                                                <span> <i className="fa fa-check-square-o text-white" aria-hidden="true"></i></span>
                                            </div>
                                            <div className='me-3'>
                                                <p className='m-0 text-light'>Correct</p>
                                                <span className='text-light me-2'>0/5</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className='col-md-3'>
                                    <div className='bg-danger p-2 pg-quick-summery'>
                                        <div className='d-flex align-items-center'>
                                            <div className='me-2'>
                                                <span> <i className="fa fa-times text-white" aria-hidden="true"></i></span>
                                            </div>
                                            <div className='me-3'>
                                                <p className='m-0 text-light'>InCorrect</p>
                                                <span className='text-light me-2'>0/5</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className='col-md-3'>
                                    <div className='bg-danger p-2 pg-quick-summery'>
                                        <div className='d-flex align-items-center'>
                                            <div className='me-2'>
                                                <span> <i className="fa fa-window-close text-white" aria-hidden="true"></i></span>
                                            </div>
                                            <div className='me-3'>
                                                <p className='m-0 text-light'>Unattempted</p>
                                                <span className='text-light me-2'>0/5</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>




                            </div>
                        </div>

                        {/* SOLUTION btn section  */}
                        <div className={`perform_detail ${perDet === 2 && 'perform_detail_toggle'}`}>
                            <p>SOLUTION content</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
