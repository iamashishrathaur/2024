import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from '../assets/banner_12.jpg'
import Slider from "react-slick";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from "./Products";
import BottomNavigation from "../Components/BottomNavigation";

const Home = () => {

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
   <>
    <div className="slider-container p-2 pt-5">
      <Slider {...settings} className="bg-white shadow-lg rounded-lg ">
        <div>
           <img src="" alt="" srcSet={Banner} className="rounded-lg"/>
        </div>
        <div>
           <img src="" alt="" srcSet={Banner} className="rounded-lg"/>
        </div>
        <div>
           <img src="" alt="" srcSet={Banner} className="rounded-lg"/>
        </div>
      </Slider>
    </div>
    <BottomNavigation/>
   </>
  )
}

export default Home