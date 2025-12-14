import React, { useState } from 'react'
import './Carousel3.css'
import ReactOwlCarousel from 'react-owl-carousel';
import ReactRotatingText from 'react-rotating-text';
import Carousel3Item from './Carousel3Item';
import Aman_Bansal from '../../assets/images/Aman-Bansal.png';
import Dungara_Ram from '../../assets/images/dungara-ram.png';
import Chitrang_Murdia from '../../assets/images/Chitrang-Murdia.png';
import Harshit_Chopra from '../../assets/images/Harshit-Chopra.png';
import Kunal_Goyal from '../../assets/images/Kunal-Goyal.png';
import Luv_Kumar from '../../assets/images/luv-kumar.png';
import Navneet_Loiwal from '../../assets/images/navneet-loiwal.png';
import Rajhans_Samdani from '../../assets/images/rajhans-samdani.png';
import Gaurav_Didwania from '../../assets/images/gaurav-didwania.png';
import Gaurav_Bubna from '../../assets/images/Gaurav-Bubna.png';
import Mehul_Kumar from '../../assets/images/Mehul-Kumar.png';




export default function Carousel3() {
  const [testimonialData, setTestmonialData] = useState(data)


  const options = {
    loop: true,
    //   center: true,
    items: 2,
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
        items: 2
      }
    }
  };
  return (
    <section className="client py-4  pg-testimonials bg-light">
      <div className="container">
        <div className="text-center header-heading">
          <h1 className=" fw-bold text-dark">Testimonials</h1>
        </div>

        <div className="row align-items-center text-white">
          <div className="owl-carousel owl-theme owl_custom owl-loaded owl-drag pg-testi">

            <ReactOwlCarousel   {...options}>
              {testimonialData && testimonialData.map((item, i) => {
                return (
                  <Carousel3Item value={item} key={i} />
                )
              })}

              {/* <Carousel3Item />
            <Carousel3Item /> */}
              {/* { carousel3Data && carousel3Data.map((item, i)=>{
                return( <Carousel3Item key={i} name={item.name} image={item.image}/>)
            })
                        } */}
            </ReactOwlCarousel>
          </div>
        </div>
      </div>
    </section>
  )

}

const data = [
  {
    position: 'AIR-1, JEE Advanced 2016',
    name: 'Aman Bansal',
    message: 'I am very much fortunate that I am a student of Ashish Sir, His teaching methodology is excellent. The quality of Illustrations taken in his classes are good enough to develop a good basis of everything. Physics Galaxy Books and website covers every aspect of JEE Physics and is full of good quality questions and illustrations.',
    image: Aman_Bansal,
  },
  {
    position: 'AIR-1, JEE Advanced 2002',
    name: 'DUNGARA RAM CHOUDHARY',
    message: 'Ashish Arora Sir, taught me physics during preparation for JEE. He keeps class at ease with his light humour and able to convey complex concepts effectively in a way easier to understand for students. He is very organized and properly emphasize key ideas. I am thankful to him for his guidance and wish him best for future.',
    image: Dungara_Ram
  },
  {
    position: 'AIR-1, JEE Advanced 2014',
    name: 'Chitrang Murdia',
    message: 'The Initiative of Physics Galaxy taken by Ashish Sir is an unmatched step toward educating students for FREE who cannot afford expansive coaching including students in rural areas. Physics Galaxy comprises extremely good content for theory and illustrations needed for preparation of all levels of Physics including JEE advanced and Physics Olympiad. ',
    image: Chitrang_Murdia
  },
  {
    position: 'AIR-2 , IIT-JEE 2001',
    name: 'HARSHIT CHOPRA',
    message: 'In my experience, Ashish Arora Sir is one of the best teacher of physics. It was only because of his teaching and his encouragement during my JEE preparation phase, that I was able to achieve AIR 2. His way of explaining concepts is so good that I can still recall most of these concepts even after 10 years.',
    image: Harshit_Chopra
  },
  {
    position: 'AIR-3, JEE Advanced 2016',
    name: 'Kunal Goyal',
    message: 'Starting from the basic level till very advance level Ashish Sir made our concepts crystal clear. Also his website and his book Physics Galaxy were extremely useful tools throughout our JEE preparation. Feel fortunate to have you our mentor.',
    image: Kunal_Goyal
  },
  {
    position: 'AIR-3 , IIT-JEE 2002',
    name: 'LUV KUMAR',
    message: 'It was a stroke of luck to have Ashish Arora sir as my physics teacher when I was preparing for my IIT-JEE exam. He guided me through the most difficult of topics with great ease and aplomb, and sensing the potential in me, he also inspired and helped me prepare for the Physics Olympiad. It is not just his mastery of the subject matter, but the confidence that he instils in his students that sets him apart as a great teacher.',
    image: Luv_Kumar
  },
  {
    position: 'AIR-4, IIT-JEE 2000',
    name: 'NAVNEET LOIWAL',
    message: 'Ashish Sir was instrumental to a dream rank. His focus on the fundamentals and ability to pace with each student is incredible. His love and ability to teach is the best I have seen. My Physics Olympiad Gold Medal is a testament to his rigor and concepts he could impart. Lucky to have you as my teacher!',
    image: Navneet_Loiwal
  },
  {
    position: 'AIR-5, IIT-JEE 2002',
    name: 'RAJHANS SAMDANI',
    message: `I was very fortunate to have Ashish Arora Sir as my physics teacher when preparing for JEE and Physics Olympiad. Ashish sir is one of the very rare teachers who are technically accomplished, communicate complex concepts with great clarity, and care a lot about their students at a personal level. During our preparations for Physics Olympiad, he went out of his way to help us. He's truly inspiring and I ended up learning so much from him.`,
    image: Rajhans_Samdani
  },
  {
    position: 'AIR-9, JEE Advanced 2016',
    name: 'Gaurav Didwania',
    message: 'Ashish Sir’s guidance and experience was of great importance in my JEE success. He always helped in clearing all doubts and kept us motivated through our JEE preparation. His guidance also helped me in every part of my life not only academics. Mainly he taught us how to focus on our goals and how to ignore unwanted things in life which always surround us. Physics Galaxy video lectures were of immense help in my preparation at home.',
    image: Gaurav_Didwania
  },
  {
    position: 'AIR-13,IIT-JEE 2005',
    name: 'Gaurav Bubna',
    message: 'I had a great experience learning with Ashish Sir during my JEE preparation. He challenged our thinking and understanding of the material with challenging but relevant problems. His understanding the subject is very thorough and even more importantly, is able to explain everything in a way that is very easy to learn and understand. He was also easily approachable and always there to resolve any challenges we had. All in all, I would absolutely not have been able to do as well as I did without his guidance and mentoring.',
    image: Gaurav_Bubna
  },
  {
    position: 'AIR-19,IIT-JEE 2010',
    name: 'Mehul Kumar',
    message: 'Ashish Sir is a phenomenal physics teacher with a knack to explain core concepts through examples. As a student, I found his classes, and books, quite conversational, which eased the learning process. He is an experienced veteran in the field of JEE preparation and knows hundreds of methods to get over the problems frequently faced by high school students across the country.',
    image: Mehul_Kumar
  },
]
