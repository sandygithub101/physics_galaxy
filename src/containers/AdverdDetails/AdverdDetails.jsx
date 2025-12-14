import React, { useEffect, useState } from 'react'

import './AdverdDetails.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LinkSend from '../../components/LinkSend/LinkSend'
import CurveImage from '../../assets/images/curve2.webp'
import Curve1Image from '../../assets/images/curve.jpg'
import Curve2Image from '../../assets/images/curve1.webp'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'bootstrap';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom/dist'
import { download_Ticket_Service, getCourse_Detail_Service } from '../../services'
import { convertTo12HourFormat, formatOnlyTime, formatTimestamp, formatTimestampToDateString, isLogin, resHandler } from '../../../helper'
import Registration_Form from '../Registration_Form/Registration_Form';
export default function AdverdDetails() {
    const [searchParam, setSearchParam] = useSearchParams();
    const [key, setKey] = useState(1);
    const [detail, setDetail] = useState()
    const [openForm, setOpenForm] = useState(false);
    const { pathname } = useLocation()
    const navigate = useNavigate();
    const handleTabChange = (k) => {
        setKey(k);
    }

    useEffect(() => {

        if (typeof searchParam != 'undefined') {
            getEventDetails(searchParam.get('id'));
            // console.log(searchParam.get('id'), 'id')
        }
    }, [searchParam])

    const getEventDetails = (value) => {
        const formData = new FormData();
        formData.append("course_id", value);
        getCourse_Detail_Service(formData).then(res => {
            let { data, status, message } = resHandler(res);
            if (status) {
                console.log(data, "details")
                setDetail(data)
            }

        }).catch(err => console.log(err))
    }

    const handleOpenForm = (e) => {
        e.preventDefault();

        // if(isLogin){
        setOpenForm(true);

        // }
        // else{
        //     const fullUrl = window.location.href;
        //     localStorage.setItem('redirect', fullUrl);
        //     navigate('/login')
        //   }

    }

    const handleDownload = (value) => {
        const link = document.createElement('a');
        const formData = new FormData();

        formData.append("txn_id", value);
        download_Ticket_Service(formData).then(res => {
            let { status, data, message } = resHandler(res);
            console.log(res)
            if (status) {
                // window.location.href = url;
                window.open(data, '_blank');
                // fetch(data).then(res => res.blob()).then(blob => {
                //     const blobUrl = URL.createObjectURL(blob);
                //     const link = document.createElement('a');
                //     link.href=blobUrl
                //     link.download = 'ticket.pdf';
                //      link.click()
                //     URL.revokeObjectURL(blobUrl);
                // }
                //     )
                link.href = data
                link.download = 'ticket.pdf';
                link.click()

                // link.download='ticket.pdf'

                // location.reload();
            }
            // status && message && window.open(data, '_blank');

        })
    }
    return (
        <>
            {openForm && <Registration_Form value={detail && detail.course_detail} onClose={() => setOpenForm(false)} />}
            <Header />

            <section className='pg-event-blog-section'>
                <div className='pg-event-blog-title'>
                    <div className="container">
                        <div className="row">

                            <div className='pg-event-blog-heading '>

                                <h1> {detail && detail.course_detail.title}</h1>
                                <div className='pg-event-blog-breadcrumb'>
                                    <nav aria-label="breadcrumb event-bredcrm-lstchild">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item" onClick={() => navigate('/')}><i className='fa fa-home me-1'></i>Home</li>
                                            <li className="breadcrumb-item" onClick={() => navigate('/events')}>Events</li>
                                            <li className="breadcrumb-item active" aria-current="page">{detail && detail.course_detail.title}</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pg-event-blog-carousl-section py-4 bg-light'>
                <div className="container">
                    <div className="row">
                        <div className='pg-event-blog-carousl-image'>
                            <img src={detail && detail?.course_detail?.desc_header_image} />
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <Tabs
                                activeKey={key}
                                onSelect={(k) => handleTabChange(k)}
                                className="mb-4 mt-4 position-relative ul_slide"
                                id="ul_slide"
                            >
                                <Tab eventKey={1} title='About the Event'>
                                    <div className='pg-event-blog-carousl'>
                                        {detail && <div dangerouslySetInnerHTML={{ __html: detail.course_detail.description }} />}
                                        {/* <div className='pg-event-blog-carousl-heading mb-3'>
                        <h1>National Conference On Personal Learning Curve</h1>
                        </div>
                        <div className=' pg-event-blog-carousl-text'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quo et suscipit maiores 
                                nulla dolorem aliquid natus perspiciatis? Magnam, ea fugit numquam recusandae quae, harum
                                neque provident rerum itaque laudantium, pariatur libero. Eveniet laudantium, nihil, ipsam 
                                dolorum nam expedita libero magnam eaque quas aspernatur omnis autem qui veniam totam hic!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quo et suscipit maiores 
                                nulla dolorem aliquid natus perspiciatis? Magnam, ea fugit numquam recusandae quae, harum
                                neque provident rerum itaque laudantium, pariatur libero. Eveniet laudantium, nihil, ipsam 
                                dolorum nam expedita libero magnam eaque quas aspernatur omnis autem qui veniam totam hic!</p>
                        </div>

                        <div className='event-blog-image-section'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='event-blog-image'>
                                        <img src={Curve1Image} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='event-blog-image'>
                                        <img src={Curve1Image} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='event-blog-carousl-offer mt-4'>
                            <h3 className='mb-3'>Four major elements that we offer:</h3>
                            <ul className='event-blog-list my-4'>
                                <li>
                                    <span><i className="fa fa-check-circle me-4 text-warning" aria-hidden="true"></i></span>
                                    <span className='event-blog-offer-text'>Struggling to sell one multi-million dollar home currently on the market</span>
                                </li>
                                <li>
                                    <span><i className="fa fa-check-circle me-4 text-warning" aria-hidden="true"></i></span>
                                    <span className='event-blog-offer-text'>The point of using Lorem Ipsum is that it has a normal distribution of letters.</span>
                                </li>
                                <li>
                                    <span><i className="fa fa-check-circle me-4 text-warning" aria-hidden="true"></i></span>
                                    <span className='event-blog-offer-text'>Publishing packages and web page editors now use their default model text.</span>
                                </li>
                                <li>
                                    <span><i className="fa fa-check-circle me-4 text-warning" aria-hidden="true"></i></span>
                                    <span className='event-blog-offer-text'>Publishing packages and web page editors now use their default model text.</span>
                                </li>
                            </ul>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nemo et totam natus beatae harum cum fugiat! A animi voluptas
                                ipsa distinctio aliquid nisi omnis doloribus saepe odio, fugiat nulla, dignissimos eaque praesentium quisquam cumque voluptatum?
                                Repudiandae doloribus aliquam id blanditiis. Aut, eum aliquid? Dolorum ducimus maxime aspernatur facere laboriosam.
                            </p>
                        </div> */}
                                    </div>
                                </Tab>
                                <Tab eventKey={2} title='Event Itinerary'>
                                    {console.log(detail && detail.course_detail?.extra_json?.event, "json")}
                                    <div className="container table-responsive py-2">
                                        <table className="table table-bordered table-hover time-table">
                                            <thead className="thead-dark text-center table-warning">
                                                <tr>

                                                    <th scope="col" className='text-dark'>Start Time</th>
                                                    <th scope="col" className='text-dark'>End Time</th>
                                                    <th scope="col" className='text-dark'>Activity</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {detail && detail?.course_detail?.extra_json?.event.map((item, i) => {
                                                    return (
                                                        <tr key={i}>

                                                            <td>{formatOnlyTime(item.start)}</td>
                                                            <td>{formatOnlyTime(item.end)}</td>
                                                            <td>{item.activity}</td>
                                                        </tr>
                                                    )
                                                })}


                                            </tbody>
                                        </table>
                                    </div>

                                </Tab>
                            </Tabs>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className='pg-event-blog-carousl-card-section mt-4'>
                                <div className='event-blog-carousl-card'>
                                    <h4 className='mb-4 fw-bold'>Event Details</h4>
                                    <div className='event-blog-carousl-card-list'>
                                        <div className='d-flex align-items-center justify-content-between my-2'>
                                            <span><i className="fa fa-calendar text-warning me-2" aria-hidden="true"></i> Start Date</span>
                                            <span className='text-dark text-end'>{detail && formatTimestampToDateString(detail.course_detail.start_date)}</span>
                                        </div>
                                        <hr />
                                        <div className='d-flex align-items-center justify-content-between my-2'>
                                            <span><i className="fa fa-clock-o text-warning me-2" aria-hidden="true"></i> Start Time</span>
                                            <span className='text-dark text-end'>{detail && formatOnlyTime(detail.course_detail.start_date)}</span>
                                        </div>
                                        <hr />
                                        <div className='d-flex align-items-center justify-content-between my-2'>
                                            <span><i className="fa fa-calendar text-warning me-2" aria-hidden="true"></i> End Date</span>
                                            <span className='text-dark text-end'>{detail && formatTimestampToDateString(detail.course_detail.end_date)}</span>
                                        </div>
                                        <hr />
                                        <div className='d-flex align-items-center justify-content-between my-2'>
                                            <span><i className="fa fa-clock-o text-warning me-2" aria-hidden="true"></i> End Time</span>
                                            <span className='text-dark text-end'>{detail && formatOnlyTime(detail.course_detail.end_date)}</span>
                                        </div>
                                        <hr />
                                        <div className='d-flex align-items-center justify-content-between my-2'>
                                            <span><i className="fa fa-user text-warning me-2" aria-hidden="true"></i>  Total Seats</span>
                                            <span className='text-dark text-end'>{detail && detail.course_detail.stocks}</span>
                                        </div>
                                        <hr />
                                        <div className='d-flex align-items-center justify-content-between my-2'>
                                            <span><i className="fa fa-map-marker text-warning me-2" aria-hidden="true"></i>Location</span>
                                            <span className='text-dark text-end'>{detail && detail.course_detail.event_location}</span>
                                        </div>
                                        <hr />
                                        {/* <div className='pg-regist text-center'>{detail && detail?.course_detail.token_activation != 1 && <h6 className='text-danger'>Registraion Closed</h6>}</div> */}
                                        <div className='event-block-carousel-btn mb-3'>

                                            {/* <button type='button' className='price-btn mb-3 w-100' > {detail && detail?.course_detail.course_sp == 0 ? 'Free' : `Price: ₹${detail?.course_detail.course_sp}`}  </button> */}
                                            {detail && detail?.course_detail.is_purchased == 0 ? <button type='button' className='seatBook-btn mb-3 w-100' onClick={handleOpenForm} disabled={detail && detail?.course_detail.token_activation == 1}>{detail && detail?.course_detail.token_activation == 1 ? 'Registraion Closed' : 'Register'}</button> : <button type='button' className='seatBook-btn mb-3 w-100' onClick={() => handleDownload(detail?.course_detail.txn_id)} >Download Ticket</button>}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LinkSend />
            <Footer />

        </>
    )
}

