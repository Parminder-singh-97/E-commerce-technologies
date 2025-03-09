import React, { useState } from "react";
import "../../Styles/SignIn/SignIn.css";
import Button from "../../Components/CustomComponents/Button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

const SignUp = () => {
  let [formData, setFormData] = useState({
       User_email: "",
    User_password: "",
  });

  let handleChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.id]: event.target.value };
    });
  };

  let onFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
    
      User_email: "",
      User_password: "",
    })
  };
  return (
    <>
      <section className="SignIn-container flex justify-start   h-[80vh] my-20">
        <div className="SignIn-bg-img w-1/2 "></div>
        <div className="w-1/2 flex justify-center items-center ">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[70%]">
              <h1 className="text-2xl font-bold">Log in to Exclusive</h1>
              <p>Enter your details below</p>
            </div>

            <form
              action=""
              onSubmit={onFormSubmit}
              className="text-center w-[70%]"
            >
            

              <TextField
                onChange={handleChange}
                value={formData.User_email}
                className="my-4"
                fullWidth
                margin="normal"
                id="User_email"
                label="Email"
                variant="outlined"
              />

              <br />
              <TextField
                onChange={handleChange}
                value={formData.User_password}
                className="my-4"
                fullWidth
                margin="normal"
                id="User_password"
                label="Password"
                variant="outlined"
                type="password"
              />

              <Button action={handleChange} content="Login" />

             

              <p>
                Don't have account?{" "}
                <Link to="/SignUp" className="text-sm cursor-pointer">
                  {" "}
                  <em className="font-extrabold">Sign Up</em>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
