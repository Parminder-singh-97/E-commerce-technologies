import React from "react";
import CustomItems from "./CustomItems";

const Carousal = () => {
  return (
    <>
      <>
        {/* Slider */}

        <div
          data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
       "isAutoPlay": true

   
  }'
          className="relative"
        >
          <div className="hs-carousel relative overflow-hidden w-full min-h-96  bg-white rounded-lg">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
              <div className="hs-carousel-slide">
                <div className="flex justify-center h-full  p-6 bg-black">
                  <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                    <CustomItems />
                  </span>
                </div>
              </div>
              <div className="hs-carousel-slide">
                <div className="flex justify-center h-full  p-6 bg-black">
                  <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                    <CustomItems />
                  </span>
                </div>
              </div>
              <div className="hs-carousel-slide">
                <div className="flex justify-center h-full  p-6 bg-black">
                  <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                    <CustomItems />
                  </span>
                </div>
              </div>
              <div className="hs-carousel-slide">
                <div className="flex justify-center h-full  p-6 bg-black">
                  <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                    <CustomItems />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2" />
        </div>
        {/* End Slider */}
      </>
    </>
  );
};

export default Carousal;
