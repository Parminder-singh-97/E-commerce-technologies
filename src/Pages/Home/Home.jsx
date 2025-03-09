import React from "react";
import Hero from "../../Components/Home/Hero/Hero";
import Today from "../../Components/Home/Today/Today";
import Catagories from "../../Components/Home/Catagories/Catagories";
import BestSellingProducts from "../../Components/Home/BestSellngs/BestSellingProducts";
import OurProducts from "../../Components/Home/ourProducts/OurProducts";
import CatagoryBanner from "../../Components/Home/CatagoryBanner/CatagoryBanner";
import Feature from "../../Components/Home/Featured/Feature";

const Home = () => {
  return (
    <>
      {/* hero section  */}
      <section className=" mb-9 Home_hero">
        <Hero />
      </section>
      <hr />
      {/* today product offer  */}
      <section className="Home_today py-16 w-[90%] mx-auto">
        <Today />
      </section>

      <hr />

      <section className=" mt-4 catagories">
        <Catagories />
      </section>
      <section className=" mt-4 bestSelingProducts">
        <BestSellingProducts />
      </section>
      <section className="m-auto container md:w-[90%] w-[100%] flex justify-center items-center  catagoryBanner">
        <CatagoryBanner />
      </section>
      <section className=" mt-10 bestSelingProducts">
        <OurProducts />
      </section>
      <section className="feature my-6    ">
        <Feature />
      </section>
    </>
  );
};

export default Home;
