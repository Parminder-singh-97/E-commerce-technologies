import React from "react";
import WishListHead from "../../Components/WishList/WishListHead";
import WishListItems from "../../Components/WishList/WishListItems";
import JustForYou from "../../Components/WishList/JustForYou";
import BreadCrumb from "../../Components/CustomComponents/BreadCrumb";

const WishList = () => {
  return (
    <>
      <section className="Wishlist-container my-10">
        {/* breadcrumb */}
        <BreadCrumb/>
       {/* header */}
       <WishListHead/>

       {/* wishlist items */}
      <WishListItems/>
       {/* today For you */}
       <JustForYou/>
      </section>
    </>
  );
};

export default WishList;
