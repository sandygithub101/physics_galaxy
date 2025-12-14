import React from 'react'
import Student_select_data from './Student_select_data';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Student_select = () => {
    return (
        <>
            {
                Student_select_data.map((item, i) => {
                    return (
                        <div className="card-section" key={i}>
                            <div className="card-testi">
                                <div className="px-4 card-testi-p pb-3">
                                    <p className="font-weight-light my-3 text-dark">
                                        {/* <FontAwesomeIcon className='fa-quote-left' icon={faQuoteLeft} /> */}
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                            <div className="row d-flex ">
                                <div className="col-lg-2 ">
                                    <div
                                        className=" circle text-white rounded-circle  position-relative"
                                        style={{ width: 120, height: 120 }}
                                    >
                                        <img
                                            className="rounded-circle shadow "
                                            src={item.img}
                                            height="120px"
                                            width="120px"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <div className="m-1 mt-3">
                                        <h5 className=" mb-0">{item.naam}</h5>
                                        <small className="font-weight-bold">
                                            {item.exam}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Student_select;