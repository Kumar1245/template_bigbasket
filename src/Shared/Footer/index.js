import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const userData = useSelector((state) => state.userData);

  return (
    <>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-3  bg-stone-200 ">
        <div className="flex flex-col p-4 justify-start mx-4">
          <p className="text-lime-500 font-bold">Big Basket PsGyan</p>
          <p>Service </p>
          <p>FQY</p>
          <p>Hints</p>
          <p>Support</p>
          <p>Support</p>
        </div>
        <div className=" flex flex-col p-4 justify-start">
          <p className="text-lime-500 font-bold">Help With Us PsGyan</p>
          <p>Service </p>
          <p>FQY</p>
          <p>Hints</p>
          <p>Support</p>
          <p>Support</p>
        </div>
        <div className="flex flex-row justify-end gap-3 p-4 mx-4 float-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174863.png"
            alt=""
            className="h-14 w-14 gap-3"
          />
          <img
            src="https://w7.pngwing.com/pngs/708/311/png-transparent-icon-logo-twitter-logo-twitter-logo-blue-social-media-area-thumbnail.png"
            alt=""
            className="h-14 w-14 gap-3"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png"
            alt=""
            className="h-14 w-14 gap-3"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            alt=""
            className="h-14 w-14 gap-3 rounded-full"
          />

          <span className="flex flex-col gap-3 items-start"></span>
        </div>
      </div>
      <div className="lg:flex md:hidden hidden border bg-stone-600 items-center text- justify-center">
        <p className=" flex font-mono text-gray-200 item-center text-center p-2">
          Copyright © 2022-2024 Supermarket Grocery Supplies Pvt Ltd
        </p>
      </div>
      <div className="grid grid-cols-2 lg:hidden md:hidden bg-stone-400">
        <div className="flex flex-col gap-2 p-3">
          <p className="text-green-800">Big Basket</p>
          <p className="text-white">News</p>
          <p className="text-white">Channels</p>
          <img src="" alt="" className="pt-4" />
        </div>
        <div className="flex flex-col gap-2 p-3">
          <p className="text-white font-serif ">About Us </p>
          <p className="text-white font-serif ">Services</p>
          <p className="text-white font-serif ">Contact Us </p>
          <p className="text-white font-serif ">Developed</p>
        </div>
      </div>
      <div className="lg:hidden md:hidden bg-stone-600">
        <p className=" flex font-thin text-gray-200 item-center text-center p-2">
          Copyright © 2022-2024 Supermarket Grocery Supplies Pvt Ltd
        </p>
      </div>
      <p>{userData?.city}</p>
    </>
  );
};

export default Footer;
