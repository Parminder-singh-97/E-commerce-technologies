import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className=" p-4 min-h-[440px] bg-black text-white flex gap-7 flex-wrap justify-center items-center   px-16">
        <div className=" flex flex-wrap   gap-9 ">
          <div className="flex  flex-col gap-4">
            <h5 className="text-xl font-extrabold">Exclusive</h5>
            <h4 className="font-bold">Subscribe</h4>

            <h5>Get 10% off your first order</h5>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-extrabold">Support</h3>
            <h4 className="">
              111 Bijoy sarani, Dhaka, <br />
              DH 1515, Bangladesh.
            </h4>

            <h5>exclusive@gmail.com</h5>
            <h5>+88015-88888-999</h5>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-extrabold">Account</h3>

            <h5>My Account</h5>
            <h5>Login / Register</h5>
            <h5>Cart</h5>
            <h5>Wishlist</h5>
            <h5>Shop</h5>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-extrabold">Quick Link</h3>

            <h5>Privacy Policy</h5>
            <h5>Terms Of Use</h5>
            <h5>FAQ</h5>
            <h5>Contact</h5>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-extrabold">Download App</h3>

            <p>Save $3 with App New User Only</p>
            <div className="flex ">
              <img
                className="w-[90px]"
                src="../../../../Footer-img/QrCode.png"
                alt=""
              />
              <div className="h-[100%]">
                <img
                  className="w-[150px] h-[50px]"
                  src="../../../../Footer-img/GooglePlay.svg"
                  alt=""
                />
                <img
                  className="w-[150px] h-[50px]"
                  src="../../../../Footer-img/AppStore.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex gap-4 text-3xl">
              <BiLogoFacebook />
              <BiLogoTwitter />
              <BiLogoInstagram />
              <BiLogoLinkedin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
