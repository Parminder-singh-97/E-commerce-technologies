import React, { useRef } from "react";
import Today from "../Today/Today";
import TodaySwipper from "../Today/TodaySwipper";
import Slider from "react-slick";

const BestSellingProducts = () => {
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
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
  return (
    <>
      <div className=" bg-red-600 w-[90%] mx-auto">
        <div className="ms-5 bg-white">
          {" "}
          <h1 className="ms-2 text-red-700">This Month</h1>
        </div>
      </div>

      <div className="w-[90%] flex justify-between m-auto items-center gap-5 mt-5">
        <h1 className="text-4xl ">Best Selling Products</h1>

        <div className="text-center">
          {" "}
          <button
            type="button"
            className=" my-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
          >
            View All
          </button>
        </div>
      </div>

      <div>
        <div className="BestSelling_swiper w-[80%] mx-auto mt-10">
          {/* <TodaySwipper  /> */}

          <div className="slider-container">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div className="max-w-[260px] border-2 p-3 cursor-pointer rounded-md mx-auto">
                <div className="flex gap-2 flex-col">
                  <div className="bg-gray-400 flex justify-center items-center">
                    <img
                      src="../../../../BestSelling-img/Light-Gucci-Savoy-medium-duffle-bag.png"
                      alt=""
                    />
                  </div>
                  <h2>remote-control Xbox</h2>
                  <p>Price</p>
                  <p>rating</p>
                </div>
              </div>
              <div className="max-w-[260px] border-2 p-3 cursor-pointer rounded-md  mx-auto">
                <div className="flex gap-2 flex-col">
                  <div className="bg-gray-400 flex justify-center items-center">
                    <img
                      src="../../../../BestSelling-img/Light-Gucci-Savoy-medium-duffle-bag.png"
                      alt=""
                    />
                  </div>
                  <h2>remote-control Xbox</h2>
                  <p>Price</p>
                  <p>rating</p>
                </div>
              </div>
              <div className="max-w-[260px] border-2 p-3 cursor-pointer rounded-md  mx-auto">
                <div className="flex gap-2 flex-col">
                  <div className="bg-gray-400 flex justify-center items-center">
                    <img
                      src="../../../../BestSelling-img/Light-Gucci-Savoy-medium-duffle-bag.png"
                      alt=""
                    />
                  </div>
                  <h2>remote-control Xbox</h2>
                  <p>Price</p>
                  <p>rating</p>
                </div>
              </div>
              <div className="max-w-[260px] border-2 p-3 cursor-pointer rounded-md  mx-auto">
                <div className="flex gap-2 flex-col">
                  <div className="bg-gray-400 flex justify-center items-center">
                    <img
                      src="../../../../BestSelling-img/Light-Gucci-Savoy-medium-duffle-bag.png"
                      alt=""
                    />
                  </div>
                  <h2>remote-control Xbox</h2>
                  <p>Price</p>
                  <p>rating</p>
                </div>
              </div>
              <div className="max-w-[260px] border-2 p-3 cursor-pointer rounded-md  mx-auto">
                <div className="flex gap-2 flex-col">
                  <div className="bg-gray-400 flex justify-center items-center">
                    <img
                      src="../../../../BestSelling-img/Light-Gucci-Savoy-medium-duffle-bag.png"
                      alt=""
                    />
                  </div>
                  <h2>remote-control Xbox</h2>
                  <p>Price</p>
                  <p>rating</p>
                </div>
              </div>
              <div className="max-w-[260px] border-2 p-3 cursor-pointer rounded-md  mx-auto">
                <div className="flex gap-2 flex-col">
                  <div className="bg-gray-400 flex justify-center items-center">
                    <img
                      src="../../../../BestSelling-img/Light-Gucci-Savoy-medium-duffle-bag.png"
                      alt=""
                    />
                  </div>
                  <h2>remote-control Xbox</h2>
                  <p>Price</p>
                  <p>rating</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellingProducts;
