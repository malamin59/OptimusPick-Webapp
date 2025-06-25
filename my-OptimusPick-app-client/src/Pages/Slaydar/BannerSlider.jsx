import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from '../../assets/img1.jpg';
import image2 from '../../assets/img2.webp';
import image3 from '../../assets/img3.webp';
import image4 from '../../assets/img4.jpeg';

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-2 pb-12">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-lg relative">
          <img
            src={image3}
            alt="Banner"
            className="w-full h-full object-cover brightness-75 absolute"
          />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h2 className="text-xl sm:text-3xl font-bold">Fresh Ideas Grow Here</h2>
            <p className="mt-2 text-sm sm:text-lg">Discover inspiring queries every day</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-lg relative">
          <img
            src={image2}
            alt="Banner"
            className="w-full h-full object-cover brightness-75 absolute"
          />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h2 className="text-xl sm:text-3xl font-bold">Find Your Solution</h2>
            <p className="mt-2 text-sm sm:text-lg">Browse the best user-submitted queries</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-lg relative">
          <img
            src={image1}
            alt="Banner"
            className="w-full h-full object-cover brightness-75 absolute"
          />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h2 className="text-xl sm:text-3xl font-bold">Your Curiosity Matters</h2>
            <p className="mt-2 text-sm sm:text-lg">Ask. Learn. Repeat.</p>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-lg relative">
          <img
            src={image4}
            alt="Banner"
            className="w-full h-full object-cover brightness-75 absolute"
          />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h2 className="text-xl sm:text-3xl font-bold">Explore With Us</h2>
            <p className="mt-2 text-sm sm:text-lg">Stay curious and engaged</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
