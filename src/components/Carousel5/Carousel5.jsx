import React from 'react'

import ReactOwlCarousel from 'react-owl-carousel';
import ReactRotatingText from 'react-rotating-text';

import BookCard from '../../containers/BookDetails/BookCard/BookCard';

export default function Carousel5() {
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
        items: 5,
      },
    },
  };
  return (
    <>
      <ReactOwlCarousel {...options}>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </ReactOwlCarousel>
    </>

  )
}
