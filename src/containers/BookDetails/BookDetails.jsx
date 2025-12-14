import React, { useEffect, useState } from 'react'


import './BookDetails.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LinkSend from '../../components/LinkSend/LinkSend'
import Button4 from '../../components/Buttons/Button4/Button4'
// import BookImage from '../../assets/images/pg-jee-ad.png'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { addToCartService, getCourseReviewService, getCourse_Detail_Service, showCartService } from '../../services'
import { formatTimestamp, isLogin, resHandler } from '../../../helper'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel5 from '../../components/Carousel5/Carousel5'
import Rating from 'react-star-rating-lite';
import ReviewImage from '../../assets/images/review-user.png'

import Combo from './Combo'
import Overview from '../ViewDetail/Overview'
import toast from 'react-hot-toast'
import { cart_Action } from '../Home/masterContentSlice'
import { useDispatch } from 'react-redux'
import OverviewTab from './OverviewTab'
export default function BookDetails(props) {
  const dispatch = useDispatch()
  const [bookDetail, setBookDetail] = useState()
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [key, setKey] = useState('overview');
  const [userReviews, setuserReviews] = useState()
  const { pathname } = useLocation()
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof id !== 'undefined') {
      getCourseDetail(id)
      getCourseReview(id);
    }
  }, [id])
  const getCourseDetail = async (value) => {
    const formData = new FormData();
    formData.append("course_id", value);
    await getCourse_Detail_Service(formData)
      .then((res) => {
        let { status, data, message } = resHandler(res);
        console.log(data, "getCourseDetail")
        if (status) {
          setBookDetail(data);
          // data.course_detail.stocks == 0 && setQuantity(0)
        }
        // status && dispatch(courseDetails_Action(data));
        // status && setCourseDetails(data);
        // console.log(data);
        // setKey(data.tiles[0].tile_name)
      })
      .catch((err) => console.log(err));
  };

  const getCourseReview = async (id) => {
    const formData = new FormData();
    formData.append('course_id', id);
    await getCourseReviewService(formData).then(res => {
      let { data, status, message } = resHandler(res);
      // console.log(res, "resb")
      if (status) {
        setuserReviews(data);
      }
    }).catch(err => console.log(err))
  }

  const showCartData = async () => {
    if (isLogin) {
      showCartService()
        .then((res) => {
          let { status, data, message } = resHandler(res);
          status && dispatch(cart_Action(data));
        })
        .catch((err) => console.log(err));
    }
  };
  const handleAddToCartClick = async () => {
    if (isLogin) {
      const formData = new FormData();
      formData.append('course_name', bookDetail.course_detail.title);
      formData.append('course_id', id);
      formData.append('quantity', quantity);
      formData.append('course_price', bookDetail.course_detail.mrp);
      formData.append('tax', bookDetail.course_detail.tax);
      await addToCartService(formData).then(res => {
        const { data, status, message } = resHandler(res);
        status && toast.success('Item successfully added to Cart');
        status && showCartData()
        // status &&
        !status && message && toast.error(message)
        // console.log(res)
      })
    }
    else {
      const fullUrl = window.location.href;
      localStorage.setItem('redirect', fullUrl);
      navigate('/login')
    }
  }
  const handleTabChange = (k) => {
    setKey(k);
  };
  return (
    <>
      <Header />
      <section className='py-4 pg-book-detail'>
        <div className="container">
          <div className="book-details">
            <div className="row d-flex  justify-content-center">
              <div className="col-md-4">
                <div className="vjed-off-img text-center">
                  <div className="mySlides book-image">
                    <img src={bookDetail && bookDetail.course_detail.cover_image} className="img-fluid" alt="offbook" />
                  </div>

                  {/* <div className="mySlides">
                           <img src="images/off-book1.png" className="img-fluid" alt="offbook"/>
                          </div>
                          <div className="mySlides">      
                            <img src="images/off-book.png" className="img-fluid" alt="offbook"/>
                          </div>
                        
                          <div className="mySlides">
                           <img src="images/off-book1.png" className="img-fluid" alt="offbook"/>
                          </div>
                          <div className="mySlides">
                            <img src="images/off-book.png" className="img-fluid" alt="offbook"/>
                          </div> */}


                  {/* <div className="d-flex align-items-center justify-content-between">
                          <a className="slide-prev" ><i className="fa fa-chevron-left"></i></a>
                          <a className="slide-next" ><i className="fa fa-chevron-right"></i></a>
                         </div> */}
                </div>

                {/* <div className="p-3">
                        <div className="row">
                          <div className="column">
                            <img className="demo cursor" src="images/off-book.png" />
                          </div>
                          <div className="column">
                            <img className="demo cursor" src="images/off-book1.png" />
                          </div>
                          <div className="column">
                            <img className="demo cursor" src="images/off-book.png" />
                          </div>
                          <div className="column">
                            <img className="demo cursor" src="images/off-book1.png" />
                          </div>
                          <div className="column">
                            <img className="demo cursor" src="images/off-book.png" />
                          </div>
                         
                         
                        </div>
                      </div> */}
              </div>

              <div className="col-md-8">
                <div className='pg-book-title'>
                  <div className="mb-3 vjed-off-heading">
                    <h2 className="text-muted">
                      {bookDetail && bookDetail.course_detail.title}
                    </h2> <h6 className="text-muted">By Physics Galaxy</h6>
                  </div>

                  <div className='mb-3'>
                    <h6 className='text-muted'>{bookDetail?.course_detail?.Author?.title && ` By ${bookDetail.course_detail.Author.title} (Author)`}</h6>
                  </div>

                  <div className="rating-box mb-3">
                    {bookDetail?.course_detail?.avg_rating && (
                      <Rating value={bookDetail.course_detail.avg_rating} readonly />
                    )}

                    {/* <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span> */}
                    <span className="rating-num">({bookDetail && bookDetail?.course_detail?.avg_rating})</span>
                    <span className='px-2'>|</span>
                    <span>({bookDetail?.course_detail?.user_rated} customer reviews)</span>
                  </div>

                  {/* <div className="vjed-off-des mb-4">
                            <h6>
                            This book of PHYSICS GALAXY Solutions of Previous Years of JEE Advanced chapter wise papers is made with detailed comprehensive solutions for each question with elaborated explanation to understand the concept used in application of the questions.
                            </h6>
                        </div> */}


                  <div className='border p-3 '>

                    <div className='mb-3 pg-progress-sec'>
                      {/* <span>Hurry up!left {bookDetail?.course_detail?.stocks} in stock</span> */}
                      {/* <span>Hurry up!left 99 in stock</span> */}
                      {/* <div className="progress">
                                  <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                    <span className="sr-only">20% Complete</span>
                                  </div>
                                </div> */}

                    </div>
                    <div className='d-flex align-items-center justify-content-between pg-stock mb-3'>
                      {/* <span className='pg-aslow-title'>As low as</span> */}

                      <span className='pg-aslow-title'>IN STOCK</span>
                      {/* <span className='pg-aslow-title'>{bookDetail?.course_detail?.stocks > 0 ? 'IN STOCK' : 'OUT OF STOCK'}</span> */}
                    </div>
                    <div className="my-2  vjed-off-price d-block">
                      <h4>
                        <span className="text-dark current-price me-2">
                          {bookDetail?.course_detail?.mrp ? `₹${bookDetail?.course_detail?.mrp} ` : ''}
                        </span>
                        <span className="text-muted last-price me-2">
                          {bookDetail?.course_detail?.course_sp ? `₹${bookDetail?.course_detail?.course_sp} ` : ''}
                        </span>

                      </h4>
                    </div>
                    {<div><p>{bookDetail?.course_detail?.is_gst == '0' ? '(GST Included)' : '(GST Excluded)'}</p></div>}
                    <hr />
                    <div className="py-2 d-flex align-items-center">

                      <div className="quantity">
                        <button className="quantity__minus" onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}><span className='text-dark'>-</span></button>
                        <input disabled name="quantity" type="text" className="quantity__input border-0" value={quantity} />
                        <button className="quantity__plus" onClick={() => setQuantity(quantity + 1)} disabled={quantity == 10}><span className='text-dark fw-bold'>+</span></button>
                      </div>


                      <div className="all-book-purchase ms-2">
                        {/* <a  href="#">Buy Now</a> */}
                        {/* {bookDetail?.course_detail?.stocks != 0 && }*/}
                        <Button4 name={"Add Cart"} onButtonClick={handleAddToCartClick} />
                      </div>

                    </div>
                    <hr />
                  </div>
                  {/* <div className="vjed-cg-tahs py-2">
                      <div className="vjed-tags-cate">
                            <p><b className="text-muted">Categories:</b> Vj Education, Rajasthan, RSMSSB</p>
                            
                      </div>
                      <div>
                        <p><b className="text-muted"> Tags:</b>  Buy Dr Vandana Jadon books for Siksha Manovigyan Awem Siksha Shastra, JPP Jaipur, Books for RPSC Grade 1</p>
                      </div>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className='pg-viewdetail-section mt-4 mb-2'>
            <div className='pg-viewdetail-reviews'>
              <div className=' pg-review-btn'>
                <Tabs
                  // defaultActiveKey="detail"
                  activeKey={key}
                  id="uncontrolled-tab-example"
                  className="mb-3 custom-bookdetail-tab"
                  onSelect={(k) => handleTabChange(k)}

                >
                  {/* <Tab eventKey={'1'} title={'qwerweret'} >
                    This book of PHYSICS GALAXY Solutions of Previous Years of JEE Advanced chapter wise papers is made with detailed comprehensive solutions for each question with elaborated explanation to understand the concept used in application of the questions. For JEE Advanced, this is essential for all aspirants to carefully understand, how to attack on questions in examination hall while reading it for the first time. The solutions given in this book help students in building the attacking ability for JEE Advanced level questions and strengthen out of the box thinking (OTBT) ability
                    </Tab> */}
                  {bookDetail && bookDetail?.tiles?.map((item, i) => {
                    if (item.type !== 'course_combo') {
                      return (
                        <Tab eventKey={item.type} title={item.tile_name} key={i}>
                          {/* {item.type == 'course_combo' && <Combo data={item.meta.list}/>} */}

                          {item.type == "overview" && <OverviewTab value={item.meta} />

                          }

                        </Tab>)

                      //    <Tab eventKey={item.type} title={item.tile_name} key={i}>
                      // This book of PHYSICS GALAXY Solutions of Previous Years of JEE Advanced chapter wise papers is made with detailed comprehensive solutions for each question with elaborated explanation to understand the concept used in application of the questions. For JEE Advanced, this is essential for all aspirants to carefully understand, how to attack on questions in examination hall while reading it for the first time. The solutions given in this book help students in building the attacking ability for JEE Advanced level questions and strengthen out of the box thinking (OTBT) ability
                      // </Tab>
                    }
                  })}



                  <Tab eventKey="review" title="Review">

                    <div className='row'>
                      <div className='col-md-5'>
                        <div className='text-center pg-reviewstabs-rating'>
                          <h1 className='fw-bold'>{bookDetail?.course_detail?.avg_rating}</h1>
                          <div className='large-star'>{bookDetail?.course_detail?.avg_rating && (
                            <Rating value={bookDetail?.course_detail?.avg_rating} readonly />)}</div>

                          <p>({bookDetail?.course_detail?.user_rated} customer rated)</p>
                        </div>
                      </div>
                      <div className='col-md-7'>
                        <div className='my-2 '>
                          <h4 className='text-black '>Most Helpful Reviews</h4>
                        </div>
                        <div className='py-4 pg-reviews-tabs-section'>
                          {userReviews && userReviews.length ?
                            userReviews.map((item, i) => {
                              return (
                                <div className='m-2 p-2 bg-light shadow rounded' key={i}>
                                  <div className='d-flex mb-2'>
                                    <div className='pg-reviews-tabs-image me-2'>
                                      <img src={ReviewImage} />
                                    </div>
                                    <div className='w-100'>
                                      <div className='d-flex justify-content-between reviews-heading'>
                                        <div className='p-1'>
                                          <h5 className='mb-0'>{item.name}</h5>
                                          <Rating value={item.rating} readonly />
                                        </div>
                                        <p className='mb-0'>{formatTimestamp(item.creation_time)}</p>
                                      </div>


                                    </div>

                                  </div>
                                  <p className='reviewtabsmsg'>{item.message}</p>
                                  <hr />
                                </div>

                              )
                            })

                            : `No Review Found`}
                        </div>

                      </div>
                    </div>
                  </Tab>

                </Tabs>
              </div>





            </div>
          </div>

          {/* Best selling books and review section */}
          {/* <div className='col-lg-6 mx-auto'>
           <div className='bg-white mt-5 p-3'>
             <div><h5>Select</h5></div>
             <div className="rating-box-courses mb-2">
                <span className="rating-point-outoff">{props.rating}</span>
                <Rating value={props.rating}  />
              </div>
              <div>
                <textarea type='text' rows={5} placeholder='Message' className='border w-100 p-2'></textarea>
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-center  pg-review-btn my-2">
               <button className='review-btn me-3'>Cancle</button>
              <button className='review-btn1'>Submit</button>
            </div>
           </div>
           </div>
            <div className='pg-booksection bg-white mb-2 p-2'>
            <header className="my-3 ">
             <h2 className="text-dark fw-bold">Our Bestselling Book</h2>
       
            </header>  
            <div className="owl_custom bookdetails-carousel p-2">
             
                <Carousel5/>
            
            </div>
            </div> */}
        </div>
      </section>

      <LinkSend />
      <Footer />

    </>
  )
}
