import { Drawer, List, ListItemButton, TextField } from "@mui/material";

import React, { Fragment, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Vegetables } from "../ProductList";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(1);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "end",
    });

    // window.scrollTo({
    //   behavior: "smooth",
    //   top: 0,
    // });
  };
  return (
    <>
      <div className=" lg:flex md:flex hidden justify-between gap-3 p-4 mx-14">
        <span onClick={() => handleScroll("daily")}>
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
      <div className="flex flex-col justify-center pt-4 border gap=[-16px] ">
        {/* <img
          alt=""
          src={`https://source.unsplash.com/random/900x700/?fruit/${image}`}
          className="h-96 w-full"
        />
        <div className="flex gap-2 justify-center">
          {[1, 2, 3, 4, 5, 6].map((i) => {
            return (
              <img
                alt=""
                src={`https://source.unsplash.com/random/900x700/?fruit/${i}`}
                className="h-16 w-16"
                // onClick={() => setImage(i)}
              />
            );
          })}
        </div> */}
        <Carousel
          autoPlay
          showThumbs={false}
          showArrows={false}
          infiniteLoop
          className="mx-14"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => {
            return (
              <img
                alt=""
                src={`https://source.unsplash.com/random/700x200/?fruit/${i}`}
                className=" "
                // onClick={() => setImage(i)}
              />
            );
          })}
        </Carousel>
      </div>
      <div className="grid  md:grid-cols-4  pt-10 justify-between mx-14 ">
        <span className="">
          <img
            src="https://d1.awsstatic.com/apac/customer-references-logos-(%401x---%402x)/BigBasket_logo%402x.ef31ecfba085a8cc00a32b3cfc077fc04a01aeb1.png"
            alt=""
            className="h-14 border-2 shadow items-center hover:scale-105 transition-all duration-500"
          />
        </span>
        <span className="">
          <img
            src="https://d1.awsstatic.com/apac/customer-references-logos-(%401x---%402x)/BigBasket_logo%402x.ef31ecfba085a8cc00a32b3cfc077fc04a01aeb1.png"
            alt=""
            className="h-14 border-2 shadow items-center hover:scale-105 transition-all duration-500"
          />
        </span>
        <span className="">
          <img
            src="https://entrackr.com/storage/2022/08/Tata-Neu-800x400.jpg"
            alt=""
            className="h-20 w-60 border shadow items-center hover:scale-105 transition-all duration-500"
          />
        </span>
        <span className="">
          <img
            src="https://e7.pngegg.com/pngimages/769/243/png-clipart-logo-brand-product-design-font-ayurveda-text-logo.png"
            alt=""
            className="h-14 border-2 shadow items-center hover:scale-105 transition-all duration-500"
          />
        </span>
        <span className="">
          <img
            src="https://d1.awsstatic.com/apac/customer-references-logos-(%401x---%402x)/BigBasket_logo%402x.ef31ecfba085a8cc00a32b3cfc077fc04a01aeb1.png"
            alt=""
            className="h-14 border-2 shadow items-center hover:scale-105 transition-all duration-500"
          />
        </span>
        <span className="">
          <img
            src="https://d1.awsstatic.com/apac/customer-references-logos-(%401x---%402x)/BigBasket_logo%402x.ef31ecfba085a8cc00a32b3cfc077fc04a01aeb1.png"
            alt=""
            className="h-14 border-2 shadow items-center hover:scale-105 transition-all duration-500"
          />
        </span>
      </div>
      <p className="flex justify-center text-2xl pt-5 pb-5 items-center border-spacing-1">
        Bank Offers
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 pt-2  gap-3 p-4 mx-14">
        <span className="shadow items-center hover:scale-105 transition-all duration-500">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/c70b47aa-95ba-4ee4-8b2b-aebd32cb1030/t1_hp_aff_m_idfc-cc_360_160623.jpg"
            alt=""
          />
        </span>
        <span className="shadow items-center hover:scale-105 transition-all duration-500">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/c70b47aa-95ba-4ee4-8b2b-aebd32cb1030/t1_hp_aff_m_aubank_360_160623.jpg"
            alt=""
          />
        </span>
        <span className="shadow items-center hover:scale-105 transition-all duration-500">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/c70b47aa-95ba-4ee4-8b2b-aebd32cb1030/t1_hp_aff_m_indus_360_160623.jpg"
            alt=""
          />
        </span>
        <span className="shadow items-center hover:scale-105 transition-all duration-500">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/c70b47aa-95ba-4ee4-8b2b-aebd32cb1030/t1_hp_aff_m_hsbc_360_160623.jpg"
            alt=""
          />
        </span>
      </div>
      <p className="flex justify-center text-2xl pt-5 pb-5 items-center border-spacing-1">
        Best Sellers
      </p>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 p-4 gap-5 mx-14  items-center  ">
        {Vegetables.map((item, index) => {
          return (
            <div
              key={item.id}
              className="shadow items-center hover:scale-105 transition-all duration-500 "
            >
              <img src={item.Product_Img} alt="" className="h-44" />
              <p className="text-yellow-400 text-lg">{item.title}</p>
              <p className="text-green-400 text-sm">{item.Brand}</p>
              <s>Price: ₹ 100</s>
              <p> Discount price:₹ {item.Price}</p>
            </div>
          );
        })}
      </div>
      <p className="flex justify-center text-2xl pt-5 pb-5 items-center border-spacing-1">
        Top Offers
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 pt-2  gap-3 p-4 mx-14">
        <span className="shadow items-center hover:scale-105 transition-all duration-500">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/d84931b8-9bf6-4240-9a1e-e3dac4942116/hp_dow-topoffersStorefront_m_480_250323_01.jpg"
            alt=""
          />
        </span>
        <span className="shadow items-center hover:scale-105 transition-all duration-500">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/d84931b8-9bf6-4240-9a1e-e3dac4942116/hp_big-packs-topoffersStorefront_m_480_250323_02.jpg"
            alt=""
          />
        </span>
        <span className="shadow items-center hover:scale-105 transition-all duration-500">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/d84931b8-9bf6-4240-9a1e-e3dac4942116/hp_combos-topoffersStorefront_m_480_250323_03.jpg"
            alt=""
          />
        </span>
        <span className="shadow items-center hover:scale-105 transition-all duration-500">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/d84931b8-9bf6-4240-9a1e-e3dac4942116/hp_30-corner-topoffersStorefront_m_480_250323_04.jpg"
            alt=""
          />
        </span>
      </div>

      <p className="flex justify-center text-2xl pt-5 pb-5 items-center border-spacing-1">
        Friuts And Vegetables
      </p>
      <div className="grid lg:grid-cols-4  md:grid-cols-2 pt-4 gap-3 p-4 mx-14">
        <span className="shadow items-center hover:scale-100 transition-all duration-500">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/63c66187-b036-4706-aae9-7e0f0247b4b3/hp_f&v_m_fresh-vegetables_480_250523.jpg"
            alt=""
          />
        </span>
        <span className="shadow items-center hover:scale-105 transition-all duration-500">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/63c66187-b036-4706-aae9-7e0f0247b4b3/hp_f&v_m_fresh-fruits_480_250523.jpg"
            alt=""
          />
        </span>
        <span className="shadow items-center hover:scale-105 transition-all duration-500">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/63c66187-b036-4706-aae9-7e0f0247b4b3/hp_f&v_m_herbs-&-seasoning_480_250523.jpg"
            alt=""
          />
        </span>
        <span className="shadow items-center hover:scale-105 transition-all duration-500">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/63c66187-b036-4706-aae9-7e0f0247b4b3/hp_f&v_m_herbs-&-seasoning_480_250523.jpg"
            alt=""
          />
        </span>
      </div>
      <p
        className="flex justify-center text-2xl pt-5 pb-5 items-center border-spacing-1"
        id="daily"
      >
        Your Daily Staples
      </p>
      <div className="grid  lg:grid-cols-6 md:grid-cols-2  mx-14 gap-3  ">
        <span className=" items-center border-2 hover:shadow hover:shadow-black transition-all duration-100 ">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/1fe26cb8-1ac8-41e8-8851-ae60ba91fe4c/hp_atta-flour-staplesStorefront_m_480_250323_01.jpg"
            alt=""
          />
        </span>
        <span className=" items-center border-2 hover:shadow hover:shadow-black transition-all duration-100 ">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/1fe26cb8-1ac8-41e8-8851-ae60ba91fe4c/hp_rice-staplesStorefront_m_480_250323_02.jpg"
            alt=""
          />
        </span>
        <span className=" items-center border-2 hover:shadow hover:shadow-black transition-all duration-100 ">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/1fe26cb8-1ac8-41e8-8851-ae60ba91fe4c/hp_dals-pulses-staplesStorefront_m_480_250323_03.jpg"
            alt=""
          />
        </span>
        <span className=" items-center border-2 hover:shadow hover:shadow-black transition-all duration-100 ">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/1fe26cb8-1ac8-41e8-8851-ae60ba91fe4c/hp_cooking-oils-staplesStorefront_m_480_250323_04.jpg"
            alt=""
          />
        </span>
        <span className=" items-center border-2 hover:shadow hover:shadow-black transition-all duration-100 ">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/1fe26cb8-1ac8-41e8-8851-ae60ba91fe4c/hp_dry-fruits-staplesStorefront_m_480_250323_05.jpg"
            alt=""
          />
        </span>
        <span className=" items-center border-2 hover:shadow-lg hover:shadow-slate-300 transition-all duration-100 ">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/1fe26cb8-1ac8-41e8-8851-ae60ba91fe4c/hp_salt-staplesStorefront_m_480_250323_06.jpg"
            alt=""
          />
        </span>
      </div>
      <p className="flex justify-center text-2xl pt-5 pb-5 items-center border-spacing-1">
        Your Daily Staples
      </p>
      <div className="grid  lg:grid-cols-6 md:grid-cols-2  mx-14 gap-3  ">
        <span className=" items-center border-2 hover:shadow hover:shadow-black transition-all duration-100 ">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/1fe26cb8-1ac8-41e8-8851-ae60ba91fe4c/hp_atta-flour-staplesStorefront_m_480_250323_01.jpg"
            alt=""
          />
        </span>
        <span className=" items-center border-2 hover:shadow hover:shadow-black transition-all duration-100 ">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/1fe26cb8-1ac8-41e8-8851-ae60ba91fe4c/hp_rice-staplesStorefront_m_480_250323_02.jpg"
            alt=""
          />
        </span>
        <span className=" items-center border-2 hover:shadow hover:shadow-black transition-all duration-100 ">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/1fe26cb8-1ac8-41e8-8851-ae60ba91fe4c/hp_dals-pulses-staplesStorefront_m_480_250323_03.jpg"
            alt=""
          />
        </span>
        <span className=" items-center border-2 hover:shadow hover:shadow-black transition-all duration-100 ">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/1fe26cb8-1ac8-41e8-8851-ae60ba91fe4c/hp_cooking-oils-staplesStorefront_m_480_250323_04.jpg"
            alt=""
          />
        </span>
        <span className=" items-center border-2 hover:shadow hover:shadow-black transition-all duration-100 ">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/1fe26cb8-1ac8-41e8-8851-ae60ba91fe4c/hp_dry-fruits-staplesStorefront_m_480_250323_05.jpg"
            alt=""
          />
        </span>
        <span className=" items-center border-2 hover:shadow-lg hover:shadow-slate-300 transition-all duration-100 ">
          <img
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/1fe26cb8-1ac8-41e8-8851-ae60ba91fe4c/hp_salt-staplesStorefront_m_480_250323_06.jpg"
            alt=""
          />
        </span>
      </div>
      <div className="mx-14  pt-5 pb-5 " onClick={() => handleScroll("daily")}>
        <img
          src="https://www.bigbasket.com/media/uploads/banner_images/hp_bbw_c_400_web_wellness_banner_gut_health_w3mar23_03042023.jpg"
          alt=""
          className=" w-full"
        />
      </div>
      <div classNames="flex border-4 mx-14 pt-5 pb-5 font-sans hidden lg:block md:hidden  ">
        <p className=" flex font-bold text-lime-500 items-start mx-14 p-2">
          bigbasket – online grocery store
        </p>
        <p className="flex mx-14 p-4">
          Did you ever imagine that the freshest of fruits and vegetables, top
          quality pulses and food grains, dairy products and hundreds of branded
          items could be handpicked and delivered to your home, all at the click
          of a button? India’s first comprehensive online megastore,
          bigbasket.com, brings a whopping 20000+ products with more than 1000
          brands, to over 4 million happy customers. From household cleaning
          products to beauty and makeup, bigbasket has everything you need for
          your daily needs. bigbasket.com is convenience personified We’ve taken
          away all the stress associated with shopping for daily essentials, and
          you can now order all your household products and even buy groceries
          online without travelling long distances or standing in serpentine
          queues. Add to this the convenience of finding all your requirements
          at one single source, along with great savings, and you will realize
          that bigbasket- India’s largest online supermarket, has revolutionized
          the way India shops for groceries. Online grocery shopping has never
          been easier. Need things fresh? Whether it’s fruits and vegetables or
          dairy and meat, we have this covered as well! Get fresh eggs, meat,
          fish and more online at your convenience. Hassle-free Home Delivery
          options
        </p>
        <p className="flex mx-14 ">
          We deliver to 25 cities across India and maintain excellent delivery
          times, ensuring that all your products from groceries to snacks
          branded foods reach you in time.
        </p>
        <ol className=" mx-14 p-2 space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
          <ul className="mx-18 pl-5 mt-2 space-y-1 list-disc list-inside">
            <li>
              Slotted Delivery: Pick the most convenient delivery slot to have
              your grocery delivered. From early morning delivery for early
              birds, to late-night delivery for people who work the late shift,
              bigbasket caters to every schedule.
            </li>
            <li>
              Slotted Delivery: Pick the most convenient delivery slot to have
              your grocery delivered. From early morning delivery for early
              birds, to late-night delivery for people who work the late shift,
              bigbasket caters to every schedule.
            </li>
            <li>
              Slotted Delivery: Pick the most convenient delivery slot to have
              your grocery delivered. From early morning delivery for early
              birds, to late-night delivery for people who work the late shift,
              bigbasket caters to every schedule.
            </li>
          </ul>
        </ol>
      </div>
    </>
  );
};

export default Project;
