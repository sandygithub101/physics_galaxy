import React, { useState } from 'react';
import './Carousel.css';
import ReactOwlCarousel from 'react-owl-carousel';
import ReactRotatingText from 'react-rotating-text';
import CarouselItem from './CarouselItem';
import AAheader from '../../assets/images/AAhearder.jpg'
import amansir from '../../assets/images/amansir.jpg'
export default function Carousel() {
  const [carouselData, setCarouselData] = useState(data)
  const options = {
    loop: true,

    items: 1,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
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
    <>
      <section className="pg-card">
        <div className="container">
          <div className="row scndcrusol">
            <ReactOwlCarousel   {...options}>
              {carouselData && carouselData.map((item, i) => {
                return (<CarouselItem key={i} value={item} />)
              })
              }
            </ReactOwlCarousel>
          </div>
        </div>
      </section>
    </>
  )
}

const data = [
  {
    name: 'ASHISH ARORA SIR',
    image: AAheader,
    text_1: 'Mentor of 5 AIR-1 & 130+ Ranks in Top-100 in JEE Adv, JEE Main & NEET',
    text_2: ' IITians &  Medicos selected under his guidance',
    text_3: `Personally mentored, the only dropper who secured AIR-1 in IIT JEE ever : Dungara Ram Choudhary (2002)`,
    text_4: `Mentored 21 International Olympiad Medalists of Physics, Astronomy & Jr. Science`,
    message: 'My goal is to put Physics on the top of student’s list of favourites and remove any fear if they have about it as this subject contains secrets of happenings across the universe. Physics Galaxy is a small tribute to the world of science.',
    channel_name: 'PHYSICS GALAXY',
    channel_url: 'https://www.youtube.com/@physicsgalaxyworld',
  },
  {
    name: 'AMAN MALIK SIR',
    image: amansir,
    text_1: 'Teaching for JEE Mains, JEE Advanced, Maths Olympiads from 12+ years',
    text_2: 'Questions Specialist',
    text_3: 'Known for short and innovative methods to solve Maths Problems',
    text_4: 'Started Maths journey with VK Bansal Sir in KOTA',
    message: 'Mathematics is one of the most interesting subject. We can develop Maths skills by solving different problems. My goal is to make Maths simple and students favourite subject',
    channel_name: 'BHANNAT MATHS',
    channel_url: 'https://www.youtube.com/@BHANNATMATHS'

  }
]
