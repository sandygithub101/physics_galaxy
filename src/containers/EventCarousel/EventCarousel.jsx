import React from 'react'
import './EventCarousel.css'
import Header from '../../components/Header/Header'
import LinkSend from '../../components/LinkSend/LinkSend'
import Footer from '../../components/Footer/Footer'
import EventCart from '../../components/EventCart/EventCart'
import ReactOwlCarousel from "react-owl-carousel";

export default function EventCarousel() {
  const options = {
    loop: true,
    nav: true,
    items: 4,
    margin: 10,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8000,
    smartSpeed: 450,
    // nav: false,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },

      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <>
      <Header />
      <section className='pg-event-blog-section'>
        <div className='pg-event-blog-title'>
          <div className="container">
            <div className="row">
              <div className='pg-event-blog-heading '>
                <h1>Event Carousel</h1>
                <div className='pg-event-blog-breadcrumb'>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">Home</li>
                      <li className="breadcrumb-item">Library</li>
                      <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pf-event-carousel-section py-5'>
        <div className="container">
          <div className="row">
            <div className='pg-event-carousel-title-text text-center mb-4'>
              <p>Upcoming Event</p>
              <h1>Let's Join Our Community</h1>
            </div>
            <div className='pg-event-carousel-items'>
              <div className="owl-carousel owl-theme owl-loaded owl-drag pg-eventcarouosel p-2">
                <div className="item">
                  <ReactOwlCarousel {...options}>
                    <EventCart />
                    <EventCart />
                    <EventCart />
                    <EventCart />
                  </ReactOwlCarousel>
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
