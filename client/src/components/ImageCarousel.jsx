import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageCarousel.css';

import prato1 from '../assets/cozido-portuguesa-transmontano.jpeg';
import prato2 from '../assets/Grilled_Sardines.jpg';
import prato3 from '../assets/francesinha.jpg';

function ImageCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    pauseOnHover: false,
    speed: 800,
    slidesToShow: 1,
    accessibility: false,
    slidesToScroll: 1
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div tabIndex="-1"><img src={prato1} alt="Refeição 1" /></div>
        <div tabIndex="-1"><img src={prato2} alt="Refeição 2" /></div>
        <div tabIndex="-1"><img src={prato3} alt="Refeição 3" /></div>
      </Slider>

    </div>
  );
}

export default ImageCarousel;
