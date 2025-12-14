import React from 'react'
import './Banner.css'
import ReactOwlCarousel from 'react-owl-carousel';
export default function Banner(props) {
  const options = {
    loop: true,

    items: 1,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 6000,
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
    <>
      <section className="banner-images">
        <div className="container-fluid">
          <div className="row ">
            <div className="owl-carousel owl-theme owl_custom owl-loaded owl-drag result p-0">
              <div className="item">
                <div className="text-center pg-banner-section">
                  {props.images && <ReactOwlCarousel {...options}>
                    {props.images && props.images.map((item, i) => {
                      { console.log(item.link, "link") }
                      return (
                        <div key={i}>
                          {item.link.length > 0 ? (<a href={item.link}><img src={item.banner_url} alt="result" key={i} className={`img-fluid ${item.link.length > 0 ? 'cursor' : ''}`} /></a>) : <img src={item.banner_url} alt="result" key={i} className={`img-fluid ${item.link.length > 0 ? 'cursor' : ''}`} />}
                        </div>)
                    })}
                  </ReactOwlCarousel>}
                  {/* <img src={props.image} alt="result1" className="img-fluid"/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
