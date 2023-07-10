import { Button, TextField } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="lg:grid hidden lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-3 py-5 bg-gray-400 ">
        <div className="text-center mx-4">PS GYAN</div>
        <div className="justify-start">
          <p className="">Service </p>
          <br />
          <p className="">FQY</p>
          <br />
          <p>Hints</p>
          <br />
          <p className="">Support</p>
          <br />
          <p className="">Support</p>
        </div>
        <div className="p-5">
          <p className="">Support</p>
          <br />
          <p className="">Support</p>
          <br />
          <p className="">Support</p>
          <br />
          <p className="">Support</p>
        </div>
        <div className="!float-right">
          <img src="" alt="" />
          <p>Stay up to date on the latest from PsGyan</p>

          <span className="flex flex-col gap-3 items-start">
            <TextField
              id="standard-basic"
              label="Enter Email here"
              variant="standard"
            />
            <Button variant="contained" className="!text-center ">
              Sign Up
            </Button>
          </span>
        </div>
      </div>
      <div className="lg:hidden flex flex-col">Phone Ka footer</div>
    </>
  );
};

export default Footer;
