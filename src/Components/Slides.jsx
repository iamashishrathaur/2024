import React from 'react'
import Banner from '../assets/banner_12.jpg'
import Slider from "react-slick";

const Slides = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Changed from autoPlay to autoplay
        autoplaySpeed: 3000,
        arrows: false,
      };
  return (
    <Slides {...settings} className="bg-white shadow-lg rounded-lg ">
    <div>
       <img src="" alt="" srcSet={Banner} className="rounded-lg"/>
    </div>
    <div>
       <img src="" alt="" srcSet={Banner} className="rounded-lg"/>
    </div>
    <div>
       <img src="" alt="" srcSet={Banner} className="rounded-lg"/>
    </div>
  </Slides>
  )
}

export default Slider