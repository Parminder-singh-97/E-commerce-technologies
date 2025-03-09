import React, { useState } from "react";
import "../../Styles/SignUp/SignUp.css";
import Button from "../../Components/CustomComponents/Button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

const SignUp = () => {
  let [formData, setFormData] = useState({
    User_fullName: "",
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
      User_fullName: "",
      User_email: "",
      User_password: "",
    })
  };
  return (
    <>
      <section className="SignUp-container flex justify-start   h-[80vh] my-20">
        <div className="Signup-bg-img w-1/2 "></div>
        <div className="w-1/2 ">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[70%]">
              <h1 className="text-2xl font-bold">Create New Account</h1>
              <p>Enter your details below</p>
            </div>

            <form
              action=""
              onSubmit={onFormSubmit}
              className="text-center w-[70%]"
            >
              <TextField
                onChange={handleChange}
                value={formData.User_fullName}
                className="my-4"
                fullWidth
                margin="normal"
                id="User_fullName"
                label="Enter Name"
                variant="outlined"
              />
              <br />

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
              <div className="w-full">
              <Button  action={handleChange} content="Create an account" />

              </div>


              <button className="bg-transparent py-[16px] text-[10px] text-nowrap w-full my-4 flex  gap-6 justify-center items-center border text-black px-[122px]">
                {" "}
                <span>
                  <FcGoogle className="text-2xl" />
                </span>
                Sign up with Google
              </button>

              <p>
                already have account?{" "}
                <Link to="/SignIn" className="text-sm cursor-pointer">
                  {" "}
                  <em className="font-extrabold">Login</em>
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
