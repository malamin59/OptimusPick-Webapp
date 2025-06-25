import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image from '../../assets/addProduct.webp'
import image2 from '../../assets/myimage2.jpg';
import image3 from '../../assets/myimage3.png';
import image4 from '../../assets/myimage4.jpg';

const MyQueriesBanner = () => {
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
    <div className="w-full max-w-5xl mt-3 mx-auto px-2 pb-12">

      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="h-[400px] overflow-hidden rounded-lg">
          <img
            src={image3}
            alt="Banner"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Slide 2 */}
        <div className="h-[400px] overflow-hidden relative rounded-lg">
          <img
            src={image2}
            alt="Banner"
            className="w-full h-full object-cover brightness-75 absolute"
          />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4" />
        </div>

        {/* Slide 3 */}
        <div className="h-[400px] overflow-hidden relative rounded-lg">
          <img
            src={image}
            alt="Banner"
            className="w-full h-full object-cover brightness-75 absolute"
          />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4" />
        </div>

        {/* Slide 4 with Text */}
        <div className="h-[400px] overflow-hidden relative rounded-lg">
          <img
            src={image4}
            alt="Banner"
            className="w-full h-full object-cover brightness-75 absolute"
          />
        </div>
      </Slider>
    </div>
  );
};

export default MyQueriesBanner;
