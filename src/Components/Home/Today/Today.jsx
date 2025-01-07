import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import TodaySwipper from "./TodaySwipper";
import Slider from "react-slick";


const Today = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
      };
      const previous = () => {
        sliderRef.slickPrev();
      };
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
      <div className=" bg-red-600 w-[90%] mx-auto">
        <div className="ms-5 bg-white">
          {" "}
          <h1 className="ms-2 text-red-700">Today's</h1>
        </div>
      </div>
      <div className="w-full flex justify-between items-center gap-5 mt-5">
        <h1 className="text-4xl ">Flash Sales</h1>
        <div className="flex justify-start items-center gap-5">
          <div className="days flex flex-col justify-center items-center">
            <h1 className="text-red-500 font-bold">Days </h1>
            <p>03</p>
          </div>
          :
          <div className="hours flex flex-col justify-center items-center">
            <h1 className="text-red-500 font-bold">Hours </h1>
            <p>08</p>
          </div>
          :
          <div className="minutes flex flex-col justify-center items-center">
            <h1 className="text-red-500 font-bold">Minutes </h1>
            <p>12</p>
          </div>
          :
          <div className="seconds flex flex-col justify-center items-center">
            <h1 className="text-red-500 font-bold">Seconds </h1>
            <p>05</p>
          </div>
        </div>
        <div className="today_button-arrows flex gap-2">
          <div className="left rounded-full bg-gray-400 p-2">
            <FaArrowLeft className="cursor-pointer" onClick={previous} />
          </div>
          <div className="right rounded-full bg-gray-400 p-2">
            <FaArrowRight className="cursor-pointer" onClick={next} />
          </div>
        </div>
      </div>
      <div className="today_swiper w-[80%] mx-auto mt-10">
        {/* <TodaySwipper  /> */}

        <div className="slider-container">
      <Slider
       ref={slider => {
        sliderRef = slider;
      }}
      
      {...settings}>
        <div className="max-w-[260px] border-2 p-3 cursor-pointer rounded-md mx-auto">
        <div className="flex gap-2 flex-col">
            <div className="bg-gray-400 flex justify-center items-center">

            <img  src="../../../../images/Today-Slider-img/remoteControl.svg" alt="" />
            </div>
            <h2>remote-control Xbox</h2>
            <p>Price</p>
            <p>rating</p>
        </div>
        </div>
        <div className="max-w-[260px] border-2 p-3 cursor-pointer rounded-md  mx-auto">
        <div className="flex gap-2 flex-col">
            <div className="bg-gray-400 flex justify-center items-center">

            <img  src="../../../../images/Today-Slider-img/remoteControl.svg" alt="" />
            </div>
            <h2>remote-control Xbox</h2>
            <p>Price</p>
            <p>rating</p>
        </div>
        </div>
        <div className="max-w-[260px] border-2 p-3 cursor-pointer rounded-md  mx-auto">
        <div className="flex gap-2 flex-col">
            <div className="bg-gray-400 flex justify-center items-center">

            <img  src="../../../../images/Today-Slider-img/remoteControl.svg" alt="" />
            </div>
            <h2>remote-control Xbox</h2>
            <p>Price</p>
            <p>rating</p>
        </div>
        </div>
        <div className="max-w-[260px] border-2 p-3 cursor-pointer rounded-md  mx-auto">
        <div className="flex gap-2 flex-col">
            <div className="bg-gray-400 flex justify-center items-center">

            <img  src="../../../../images/Today-Slider-img/remoteControl.svg" alt="" />
            </div>
            <h2>remote-control Xbox</h2>
            <p>Price</p>
            <p>rating</p>
        </div>
        </div>
        <div className="max-w-[260px] border-2 p-3 cursor-pointer rounded-md  mx-auto">
        <div className="flex gap-2 flex-col">
            <div className="bg-gray-400 flex justify-center items-center">

            <img  src="../../../../images/Today-Slider-img/remoteControl.svg" alt="" />
            </div>
            <h2>remote-control Xbox</h2>
            <p>Price</p>
            <p>rating</p>
        </div>
        </div>
        <div className="max-w-[260px] border-2 p-3 cursor-pointer rounded-md  mx-auto">
        <div className="flex gap-2 flex-col">
            <div className="bg-gray-400 flex justify-center items-center">

            <img  src="../../../../images/Today-Slider-img/remoteControl.svg" alt="" />
            </div>
            <h2>remote-control Xbox</h2>
            <p>Price</p>
            <p>rating</p>
        </div>
        </div>
  
       
      </Slider>
    </div>
    <div className="text-center"> <button type="button" className=" my-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none">
  View All Products
</button></div>
      </div>
    </>
  );
};

export default Today;
