// import React from 'react'

// const TodaySwipper = () => {
//   return (
   
//   <>
//   <div
//     data-hs-carousel='{
//   "loadingClasses": "opacity-0",
//   "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
//   "slidesQty": {
//     "xs": 1,
//     "lg": 3
//   }
  
// }'
//     className="relative"
//     id='TodaySwipper'
//   >
//     <div className="hs-carousel w-full flex snap-x snap-mandatory overflow-x-auto bg-white rounded-lg">
//       <div className="hs-carousel-body min-h-72 flex flex-nowrap gap-2 transition-transform duration-700 opacity-0">
//         <div className="hs-carousel-slide snap-center">
//           <div className="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
//             <span className="self-center text-sm text-gray-800 transition duration-700 dark:text-white">
//               First slide
//             </span>
//           </div>
//         </div>
//         <div className="hs-carousel-slide snap-center">
//           <div className="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
//             <span className="self-center text-sm text-gray-800 transition duration-700 dark:text-white">
//               Second slide
//             </span>
//           </div>
//         </div>
//         <div className="hs-carousel-slide snap-center">
//           <div className="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
//             <span className="self-center text-sm text-gray-800 transition duration-700 dark:text-white">
//               Third slide
//             </span>
//           </div>
//         </div>
//         <div className="hs-carousel-slide snap-center">
//           <div className="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
//             <span className="self-center text-sm text-gray-800 transition duration-700 dark:text-white">
//               Fourth slide
//             </span>
//           </div>
//         </div>
//         <div className="hs-carousel-slide snap-center">
//           <div className="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
//             <span className="self-center text-sm text-gray-800 transition duration-700 dark:text-white">
//               Fifth slide
//             </span>
//           </div>
//         </div>
//         <div className="hs-carousel-slide snap-center">
//           <div className="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
//             <span className="self-center text-sm text-gray-800 transition duration-700 dark:text-white">
//               Sixth slide
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//     <button
//       type="button"
//       className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
//     >
//       <span className="text-2xl" aria-hidden="true">
//         <svg
//           className="shrink-0 size-5"
//           xmlns="http://www.w3.org/2000/svg"
//           width={24}
//           height={24}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="m15 18-6-6 6-6" />
//         </svg>
//       </span>
//       <span className="sr-only">Previous</span>
//     </button>
//     <button
//       type="button"
//       className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
//     >
//       <span className="sr-only">Next</span>
//       <span className="text-2xl" aria-hidden="true">
//         <svg
//           className="shrink-0 size-5"
//           xmlns="http://www.w3.org/2000/svg"
//           width={24}
//           height={24}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="m9 18 6-6-6-6" />
//         </svg>
//       </span>
//     </button>
   
//   </div>
 
  
  






// </>

      
    
//   )
// }

// export default TodaySwipper



import React, { useEffect, useRef } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TodaySwipper = ({sliderRef}) => {

    // let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
    var settings = {
        dots: true,
        infinite: false,
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

      return(

    <>
    <div className="slider-container">
      <Slider
       ref={slider => {
        sliderRef = slider;
      }}
      
      {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  
    </>
      )
 
};

export default TodaySwipper;
