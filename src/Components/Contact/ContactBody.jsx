import {  TextField } from "@mui/material";
import React from "react";

const ContactBody = () => {
  return (
    <>
      <section className="contact-container w-full min-h-[90vh]">
        <div className="md:w-[85%] w-full md:flex-nowrap flex-wrap mx-auto min-h-[457px] flex">
          <div className="bg-white shadow-lg h-auto p-6 flex md:justify-start md:items-start justify-center items-center flex-col gap-5  md:w-[35%] w-full ">
            <div className=" flex justify-start  items-center gap-4">
              <img
                src="../../../images/Contact-images/icons-phone.png"
                alt=""
              />
              <span className=" text-xl font-bold">Call To Us</span>
            </div>
            <div className="">
              <p>We are available 24/7, 7 days a week.</p>
            </div>
            <div className="">
              <p>Phone: +8801611112222</p>
            </div>

            <hr className=" border-spacing-2 my-2 border-black w-[85%]" />

            <div className=" flex justify-start  items-center gap-4">
              <img src="../../../images/Contact-images/icons-mail.svg" alt="" />
              <span className=" text-xl font-bold">Write To Us</span>
            </div>
            <div className="">
              <p>Fill out our form and we will contact you within 24 hours.</p>
            </div>
            <div className="">
              <p>Emails: customer@exclusive.com</p>
            </div>
            <div className="">
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
          <div className="bg-white shadow-md h-auto p-4   md:w-[75%]">
            <div className=" flex justify-center items-center">
             
              <form action="" className="flex flex-col">
                <div className="flex md:flex-nowrap flex-wrap gap-4">
                <TextField
                                // onChange={handleChange}
                                // value={formData.User_fullName}
                                className="my-4 font-extrabold md:flex-grow-0 flex-grow bg-slate-100"
                                
                                required 
                                margin="normal"
                                id="User_Name"
                                label="Your Name"
                                variant="outlined"
                              />
                 <TextField
                                // onChange={handleChange}
                                // value={formData.User_fullName}
                                className="my-4 font-extrabold md:flex-grow-0 flex-grow bg-slate-100"
                                
                                required 
                                margin="normal"
                                id="User_Email"
                                label="Your Email"
                                variant="outlined"
                              />
                 <TextField
                                // onChange={handleChange}
                                // value={formData.User_fullName}
                                className="my-4 font-extrabold md:flex-grow-0 flex-grow bg-slate-100"
                                
                                required 
                                margin="normal"
                                id="User_Phone"
                                label="Your Phone"
                                variant="outlined"
                              />

                </div>
                <div className="mt-4 ">
                    <textarea required name="Message" id="Message" cols="30" rows="auto"  placeholder=" Your Message" className=" rounded-md p-4 border border-slate-400 w-full min-h-[207px]"></textarea>

                    
                    


                </div>
                <div className="w-[100%] flex justify-end my-4 ">
                <button className={`bg-[#DB4444]  flex rounded-md   justify-center items-center text-sm py-[16px] text-white p-10`}>Send Massage</button>


                </div>
                

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBody;
