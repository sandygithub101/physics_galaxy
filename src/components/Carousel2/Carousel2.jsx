import React from "react";
import image1 from "../../assets/images/cg-1.png";
import ReactOwlCarousel from "react-owl-carousel";
import Card2 from "../Card2/Card2";
export default function Carousel2({ bestSellingData }) {
  // const [carouselData, setCarouselData] = useState(data)
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
      <ReactOwlCarousel {...options}>
        {bestSellingData && bestSellingData.map((item, i) => {

          return (
            <Card2
              name={item.title}
              imageUrl={item.cover_image}
              mrp={item.mrp}
              validity={item.validity}
              avg_rating={String(item.avg_rating)}
              key={i}
              id={item.id}
              is_purchased={Number(item.is_purchased)}
              course_sp={item.course_sp}
              user_rated={item.user_rated}
            />
          )
        })}
        {/* <Card2
          name={item.title}
          imageUrl={item.cover_image}
          mrp={item.mrp}
          validity={item.validity}
          avg_rating={String(item.avg_rating)}
          key={i}
          id={item.id}
          is_purchased={Number(item.is_purchased)}
          course_sp={item.course_sp}
          user_rated={item.user_rated}
        /> */}
        {/* <Card2 imageUrl={image1} />
        <Card2 imageUrl={image1} />
        <Card2 imageUrl={image1} /> */}
        {/* <Card />
        <Card /> */}
      </ReactOwlCarousel>
    </>
  );
}
