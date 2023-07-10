import React from "react";

const index = () => {
  return (
    <>
      <div className="lg:grid hidden lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-3 py-5 bg-gray-400 ">
        <div className="text-center mx-4">
          <p className="text-green-400 font-light">Big Basket PsGyan</p>
        </div>
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
          <p className="text-green-400 font-light">Help With Us PsGyan</p>
          <p className="">Support</p>
          <br />
          <p className="">Support</p>
          <br />
          <p className="">Support</p>
          <br />
          <p className="">Support</p>
        </div>
        <div className="!float-right">
          <p className="text-green-400 font-light">Get Social With Us PsGyan</p>
          <p className="flex gap-3 p-3 pr-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174863.png"
              alt=""
              className="h-14 w-14"
            />
            <img
              src="https://w7.pngwing.com/pngs/708/311/png-transparent-icon-logo-twitter-logo-twitter-logo-blue-social-media-area-thumbnail.png"
              alt=""
              className="h-14 w-14"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png"
              alt=""
              className="h-14 w-14"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
              alt=""
              className="h-14 w-14 rounded-full"
            />
          </p>

          <span className="flex flex-col gap-3 items-start"></span>
        </div>
      </div>
      <div className="lg:flex md:hidden hidden border-gray-400 bg-gray-600 items-center text-center">
        <p className=" flex font-sm text-gray-200 item-center text-center p-2">
          Copyright © 2022-2024 Supermarket Grocery Supplies Pvt Ltd
        </p>
      </div>
      <div className="lg:hidden flex flex-col items-center font-bold bg-slate-400">
        Phone Ka footer
        <p className="text-gray-200 font-serif ">Contact Us </p>
        <p className="text-gray-200 font-serif ">Contact Us </p>
        <p className="text-gray-200 font-serif ">Contact Us </p>
        <p className="text-gray-200 font-serif ">Contact Us </p>
        <div className=" border-gray-400 bg-gray-600  ">
          <p className=" flex font-sm text-gray-200 justify-center item-center p-2">
            Copyright © 2022-2024 Supermarket Grocery Supplies Pvt Ltd
          </p>
        </div>
      </div>
    </>
  );
};

export default index;
