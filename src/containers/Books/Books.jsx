import React, { useEffect } from 'react'
import './Books.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BookSection from '../Home/BookSection/BookSection';
import LinkSend from '../../components/LinkSend/LinkSend';
import { showCartService } from '../../services';
import { isLogin, resHandler } from '../../../helper';
import { useDispatch } from 'react-redux';
import { cart_Action } from '../Home/masterContentSlice';
export default function Books() {
  const dispatch = useDispatch()
  useEffect(() => {
    showCartData();
    // getTestimonialFetch();

  }, [])
  const showCartData = async () => {
    if (isLogin) {
      showCartService()
        .then((res) => {
          let { status, data, message } = resHandler(res);
          status && dispatch(cart_Action(data));
          !status && dispatch(cart_Action({ cartdata: [], total: '0' }));
          // !status && location.reload()
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <Header />
      <BookSection cartUpdate={showCartData} showHeader={false} />

      <section className="py-4 pg-desciption bg-light">
        <div className="container">
          <div className="row">
            <div className="pg-des-title">
              <h1 className="fw-bold"> Description</h1>

            </div>
            <div className="pg-des-parag">
              <p>Welcome to PHYSICSGALAXY.COM, which aims to provide useful content in physics subject for all those who are desirous of enhancing academic prowess in the subject via technological mediums from any place.</p>

              <p>Physics Galaxy is dedicated to offer most refined academic content in the subject of physics up to high school level, which is powered to develop required expertise to crack competitive examinations for engineering and medical entrance examinations JEE Main, JEE Advanced, NEET, BITSAT, AIIMS, International Physics Olympiad, KVPY & NTSE.</p>

              <p>Ashish Arora, the brain behind this interactive unique website, has his 8000+ lectures available on web for free of cost for online viewing. He has created a youtube channel in the name of Physics Galaxy. Today more than 30000 video lectures are being watched per day on this website and on its youtube channel. Till now more than 37 Million videos are watched on it. On each video subtitles are also available in 67 languages using google translator including English, Hindi, Chinese, French, Marathi, Bangla, Urdu and other regional and international languages.</p>

              <p>Besides subtitles, synchronized voice accent of all theory videos are also available for students in USA, European and other countries.</p>
            </div>
            <div className="pg-des-title">
              <h1 className="fw-bold">Unique Features -</h1>
              <h5>Website statistics</h5>
            </div>
            <div className="pg-des-parag">
              <p className="ps-3">•	30000+ video lectures are being viewed per day on PG site and PG youtube channel.<br />
                •	Students from 183 countries are visiting the site. Highest traffic is from India, United States, United Kingdom, Canada and Philippines<br />
                •	Till now 38 Million (3.8 crore) video lectures are watched since 2014.</p>
            </div>
            <div className="pg-des-title">

              <h5>Video Lectures</h5>
            </div>
            <div className="pg-des-parag">
              <p className="ps-3">
                • 8000+ Video Lectures on Physics in different categories -<br />

                <span className="ps-3">o High School Physics for JEE/NEET/AIIMS aspirangts in Grade 11 & 12(Age group 17-21 yrs)<br /></span>
                <span className="ps-3">o Advance Illustrations for JEE Advanced/AIIMS aspirants<br /></span>
                <span className="ps-3">o JEE Main Solutions -(2002-2019 all Offline and Online Papers)<br /></span>
                <span className="ps-3">o NCERT Physics Solutions of Class 11 and 12<br /></span>
                <span className="ps-3">o Middle School Physics for Grade 9 to 10 (Age group 14-16yrs)<br /></span>
                <span className="ps-3">o Jr. School Physics for Grade 6 to 8 (Age group 11-13 yrs)<br /></span>
                • Such Video lectures are being sold in market at Rs3000 to Rs 7000 but on physicsgalaxy.com these are available for free for students for online viewing. This site provides high quality academics at no cost for those who cannot afford premium priced coaching.</p>
            </div>

          </div>
        </div>
      </section>
      <LinkSend />
      <Footer />
    </>
  )
}
