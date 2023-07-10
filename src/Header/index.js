import { Drawer, List, ListItemButton } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" fixed w-full z-50 bg-white lg:flex md:flex hidden justify-between gap-3 p-4 px-[5%]">
        <span>
          <img
            src="https://d1.awsstatic.com/apac/customer-references-logos-(%401x---%402x)/BigBasket_logo%402x.ef31ecfba085a8cc00a32b3cfc077fc04a01aeb1.png"
            alt=""
            className="h-20 "
          />
        </span>

        <span className="p-4">
          <input
            type="text"
            placeholder="Serach By Product.."
            className="border h-8 w-96  outline-green-400 "
          />
        </span>
        <span className=" flex items-center gap-3 p-4 ">
          <p className="cursor-pointer text-xl text-black hover:text-green-500">
            About Us
          </p>
          <p className="cursor-pointer text-xl text-black hover:text-green-500">
            Contact Us
          </p>
          <p className="cursor-pointer text-xl text-black hover:text-green-500">
            Services
          </p>
        </span>
      </div>
      <div className=" lg:flex md:flex hidden  mx-14 border items-center ">
        <span className="bg-green-400 w-48 p-2">Shop By Categories</span>

        <span className="flex hover:bg-green-600 h-10 text-lg pt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            className=""
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 6h.008v.008H6V6z"
            />
          </svg>
          Offer
        </span>
      </div>
      <div className=" flex  lg:hidden md:hidden justify-between gap-3 p-4 mx-14">
        <span>
          <img
            src="https://d1.awsstatic.com/apac/customer-references-logos-(%401x---%402x)/BigBasket_logo%402x.ef31ecfba085a8cc00a32b3cfc077fc04a01aeb1.png"
            alt=""
            className="h-14 "
          />
        </span>
        <MenuIcon onClick={() => setOpen(true)} />
      </div>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItemButton>About Us</ListItemButton>

          <ListItemButton>Contact Us</ListItemButton>
          <ListItemButton>Services</ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
