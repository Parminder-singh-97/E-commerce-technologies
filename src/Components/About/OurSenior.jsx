import React, { useRef } from "react";
import CustomSeniorCard from "./CustomSeniorCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurSenior = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="OurSenior my-20">
        <div className="w-full">
          <div className="w-[80%] mx-auto  gap-4 ">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              
              <div className="Senior-card m-5 rounded-md border flex flex-col border-black w-full sm:w-[370px] sm:h-[564px]">
                <CustomSeniorCard
                  image="../../../images/About-image/Tom-Cruise.png"
                  name="Tom Cruise"
                  role="Founder & Chairman"
                />
              </div>
              <div className="Senior-card m-5   rounded-md border flex flex-col border-black w-[370px] h-[564px]">
                <CustomSeniorCard
                  image="../../../images/About-image/Emma.png"
                  name="Emma Watson"
                  role="Managing Director"
                />
              </div>
              <div className="Senior-card m-5  rounded-md border flex flex-col border-black w-[370px] h-[564px]">
                <CustomSeniorCard
                  image="../../../images/About-image/will-smith.png"
                  name="Will Smith"
                  role="Product Designer"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurSenior;
