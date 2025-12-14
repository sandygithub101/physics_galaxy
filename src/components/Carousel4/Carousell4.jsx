import React from 'react'
import './Carousell4.css'

import ReactOwlCarousel from 'react-owl-carousel';
import ReactRotatingText from 'react-rotating-text';

import LoginImg1 from '../../assets/images/login-1.svg'
import LoginImg2 from '../../assets/images/login-2.png'
import LoginImg3 from '../../assets/images/login-3.svg'

export default function Carousell4() {
  const [carouselData, setCarouselData] = useState()
  const options = {
    loop: true,
    //   center: true,
    items: 1,
    margin: 10,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8000,
    smartSpeed: 400,
    // nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };



  return (
    <div className="owl-carousel owl-theme owl_custom owl-loaded owl-drag loginsectionleft p-2">
      <div className="item ">
        <div className="p-3 text-center">
          <div className="loginsection-img m-auto">
            <img src={LoginImg2} alt="" />
          </div>
          <div className="loginsection-title">
            <h1>Welcome to Physics Galaxy</h1>

            <p>Your one-stop destination to crack competitive exams like Medical PG, FMGE, NEET SS and INI CET. Own your Dream!</p>
          </div>
        </div>
      </div>
      <div className="item ">
        <div className="p-3 text-center">
          <div className="loginsection-img m-auto">
            <img src={LoginImg1} alt="" />
          </div>
          <div className="loginsection-title">
            <h1>QBank & Test Series</h1>
            <p>Authentic pattern with rich explanations that are attempted by more than 90,000 students everyday.</p>
          </div>
        </div>
      </div>
      <div className="item ">
        <div className="p-3 text-center">
          <div className="loginsection-img m-auto">
            <img src={LoginImg3} alt="" />
          </div>
          <div className="loginsection-title">
            <h1> Video Lectures</h1>
            <p>Engaging, conceptual videos to build lasting knowledge that can be revised easily anytime anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
