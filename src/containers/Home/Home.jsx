import React, { lazy, useState } from 'react'
import Header from '../../components/Header/Header'
import './Home.css';
// import './star.css';
import Banner from '../../components/Banner/Banner';
import Carousel from '../../components/Carousel/Carousel';
import ExamSection from '../../components/ExamSection/ExamSection';
import BookSection from './BookSection/BookSection';
import BestSellar from './BestSellar/BestSellar';
// const CounterSection = lazy(() => import('./CounterSection/CounterSection'))
import CounterSection from './CounterSection/CounterSection';
import IItSection from './IItSection/IItSection';
import ReviewSection from './ReviewSection/ReviewSection';
import Footer from '../../components/Footer/Footer';
import ModalLogo from '../../assets/images/logo-model.png'
import Carousel3 from '../../components/Carousel3/Carousel3';
import WhyChoose from './WhyChoose/WhyChoose';
import LinkSend from '../../components/LinkSend/LinkSend';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isLogin, resHandler } from '../../../helper';
import { all_categoryAction, cart_Action, cart_Count_Action } from './masterContentSlice';
import { cartCountService, getTestimonialService, showCartService } from '../../services';

export default function Home() {
  const allCategory = useSelector((state) => state.allCategory.allCategory)
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [banner, setBanner] = useState()
  const dispatch = useDispatch();

  useEffect(() => {
    showCartData();
    getTestimonialFetch();

  }, [])
  useEffect(() => {
    // getCourseCategory();
    if (allCategory) {
      setBanner(allCategory.banner_list_web)
      // getCourseCategory();
      // console.log('if')

      // const filteredData = dataArray.filter(item => item.parent_id === "0");
      // setParentData(filteredData);
    }
    // else{
    //   console.log("else")
    //   setBanner(allCategory.banner_list_web[0].banner_url)
    // console.log(allCategory.banner_list_web[0].banner_url)
    // }
  }, [allCategory]);


  const handleLoginModal = () => {

    // setOpenLoginModal(!openLoginModal);
  }

  const handleLoginClick = () => {

  }

  const showCartData = async () => {
    if (isLogin) {
      showCartService()
        .then((res) => {
          let { status, data, message } = resHandler(res);
          status && dispatch(cart_Action(data));

          // !status && dispatch(cart_Action({})) 
        })
        .catch((err) => console.log(err));
    }
  };



  const getTestimonialFetch = () => {
    getTestimonialService().then(res => {
      console.log(res, "testimonial");
    }).catch(err => console.log(err))
  }

  return (
    <>
      <Header />
      <Banner images={banner} />
      <Carousel />
      <ExamSection />
      <BookSection cartUpdate={() => showCartData()} showHeader={true} />
      <BestSellar />
      {/* <BookSection /> */}
      {/* <CounterSection/> */}
      {/* <IItSection/> */}
      <ReviewSection />
      <WhyChoose />
      <Carousel3 />
      <LinkSend />
      <Footer />
    </>
  )
}