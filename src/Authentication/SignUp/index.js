import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [conPassword, setConPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const reqBody = {
      name: name,
      email: email,
      password: password,
      confirm_password: conPassword,
    };
    axios
      .post("https://api-eduvila.onrender.com/register", reqBody)
      .then((res) => {
        console.log(reqBody);
        navigate("/signin");
      })
      .catch((error) => {
        alert("data error");
      });
  };

  return (
    <>
      <div className="flex p-14 items-center bg-stone-200 justify-center  ">
        <img
          src="https://png.pngtree.com/png-clipart/20210914/ourmid/pngtree-sign-up-now-for-social-media-geometry-png-image_3899523.jpg"
          alt=""
          className="lg:flex flex-col hidden items-center shadow-md  rounded-lg text-white  h-96 border-r- rounded-r-none"
        />

        <div className="flex flex-col">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col items-center shadow-md bg-white rounded-lg text-white pt-4 gap-5 p-4 h-96 border-l-0 rounded-l-none"
          >
            <TextField
              size="small"
              type="text"
              label="Name"
              color="info"
              value={name}
              placeholder="Enter Name"
              onChange={(event) => setName(event.target.value)}
              className="!border-white !text-white"
            />
            <TextField
              size="small"
              type="email"
              label="Email"
              value={email}
              placeholder="Enter Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              size="small"
              type="password"
              label="Password"
              value={password}
              placeholder="Enter Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <TextField
              size="small"
              type="password"
              label="Confirmed Password"
              value={conPassword}
              placeholder="Enter Confirmed Password"
              onChange={(event) => setConPassword(event.target.value)}
            />
            <Button
              variant="contained"
              color="inherit"
              size="large"
              type="submit"
              className="!text-green-400 !h-10 !w-full"
            >
              Submit
            </Button>
            <Link to="/signin" className="text-blue-400 items-center">
              All Ready Registered
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
