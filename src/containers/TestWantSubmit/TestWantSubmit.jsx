import React from 'react'
import './TestWantSubmit.css'


export default function TestWantSubmit() {
    return (
        <>
            <div className='container mt-3'>
                <div className='row want_submit d-flex align-items-center justify-content-center'>
                    <div className='col-lg-6 col-md-7 col-sm-9 want_submit_box'>
                        <h3 className='mb-4'>Do you want to submit the test ?</h3>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h4> <i className="fa fa-clock-o me-2" aria-hidden="true"></i>  Reamaining</h4>
                            <p>00:04:59</p>
                        </div>

                        <div className=''>
                            <h4><i className="fa fa-check me-2" aria-hidden="true"></i> Answered</h4>
                        </div>

                        <div className=''>
                            <h4><i className="fa fa-minus-circle me-2" aria-hidden="true"></i> Unanswered</h4>
                        </div>

                        <div className=''>
                            <h4> <i className="fa fa-times me-2" aria-hidden="true"></i> Not visited</h4>
                        </div>

                        <div className=''>
                            <h4><i className="fa fa-star me-2" aria-hidden="true"></i> Marked for reiew</h4>
                        </div>

                        <div className=''>
                            <h4><i className="fa fa-star me-2" aria-hidden="true"></i>  Answered and marked for review (will be consider for evaluation)</h4>
                        </div>

                        <div className='d-flex align-items-center justify-content-center'>
                            <button>No</button>
                            <button>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
