import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import './Catagories.css'

const Catagories = () => {
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
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

  const categories = [
    {
      name: "CellPhone",
      image: '../../../../Catagory-img/CellPhone.svg',
      func:()=>  console.log("click")
    },
    {
      name: "Computer",
      image: '../../../../Catagory-img/Computer.svg',
    },
    {
      name: "SmartWatch",
      image: '../../../../Catagory-img/SmartWatch.svg',
    },
    {
      name: "GamePad",
      image: '../../../../Catagory-img/GamePad.svg',

    },
    {
      name: "HeadPhone",
      image: '../../../../Catagory-img/HeadPhone.svg',
    },
    {
      name: "Camera",
      image: '../../../../Catagory-img/Camera.svg',
    },
  ];
  

  return (
    <>
      <div className=" bg-red-600 w-[90%] mx-auto">
        <div className="ms-5 bg-white">
          {" "}
          <h1 className="ms-2 text-red-700">Categories</h1>
        </div>
      </div>

      <div className="w-[90%] flex justify-between m-auto items-center gap-5 mt-5">
        <h1 className="text-4xl ">Browse By Category</h1>

        <div className="today_button-arrows flex gap-2">
          <div className="left rounded-full bg-gray-400 p-2">
            <FaArrowLeft className="cursor-pointer" onClick={previous} />
          </div>
          <div className="right rounded-full bg-gray-400 p-2">
            <FaArrowRight className="cursor-pointer" onClick={next} />
          </div>
        </div>
      </div>
      <div>
        <div className="catgories_swiper w-[80%] mt-10 mx-auto">
          {/* <TodaySwipper  /> */}

          <div className="slider-container">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              {categories.map((items,id) =>{
                return (
                  <div key={id-0.2*10}>
                    <div onClick={items.func} className="hover:bg-red-400 svgCata rounded-md mb-24 hover:text-white cursor-pointer hover:border-none hover:scale-105 transition duration-200  w-[170px] h-[145px] border-2 flex justify-center items-center gap-2 flex-col">
                      <div className="flex justify-center items-center">
                        <img className="hover:fill-white " src={items.image} alt={items.name} />
                      </div>
                      <h2>{items.name}</h2>
                    </div>
                  </div>
                );


              })}
            
            </Slider>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Catagories;
