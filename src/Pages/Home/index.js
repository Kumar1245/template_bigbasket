import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Vegetables } from "../../ProductList";

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
      <div className="flex flex-col justify-center pt-4 gap=[-16px]">
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
      <div className="grid  lg:grid-cols-6 md:grid-cols-4 grid-cols-2  gap-2 border-x-2 mx-14  mt-4">
        <span className="flex justify-center items-center text-white gap-2 h-28 w-40 rounded-lg shadow-md bg-gray-500">
          <p>EGGS,MEAT AND fISH</p>
        </span>
        <img
          className="h-28 w-40 gap-2 rounded-lg shadow-md"
          src="https://tmlogosave.s3.ap-south-1.amazonaws.com/5338398.jpeg"
          alt=""
        />
        <img
          className="h-28 w-40 gap-2 rounded-lg shadow-md"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJsl3yjPjnyECzQlVIuygRha4r4K8mlTGqA&usqp=CAU"
          alt=""
        />
        <span className="flex justify-center items-center text-white h-28 w-40 gap-2 rounded-lg shadow-md border-gray-500 bg-gray-500">
          <p>BY MORE SAVE MORE</p>
        </span>

        <span className="flex justify-center items-center text-white h-28 w-40 gap- rounded-lg shadow-md bg-gray-500">
          <p>DEALS OF THE WEEK</p>
        </span>
        <span className="flex justify-center items-center text-white h-28 w-40 gap-2 rounded-lg shadow-md bg-gray-500">
          <p>COMBO STORE</p>
        </span>
      </div>
      <p className="flex justify-center text-2xl pt-5 pb-5 items-center border-spacing-1">
        Best Sellers
      </p>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 p-4 gap-5 mx-14  items-center  ">
        {Vegetables.map((item, index) => {
          return (
            <div
              key={item.id}
              className="shadow items-center hover:scale-105 transition-all duration-500 border border-gray-500 px-2 "
            >
              <img src={item.Product_Img} alt="" className="h-44 " />
              <p className="font-bold text-lg">{item.title}</p>
              <p className="font-extra-bold text-sm ">{item.Brand}</p>
              <s>Price: ₹ 100</s>
              <p> Discount price:₹ {item.Price}</p>
            </div>
          );
        })}
      </div>
      <p className="flex justify-center text-2xl pt-5 pb-5 items-center border-spacing-1">
        Top Offers
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 pt-2  gap-3 p-4 mx-14">
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
        Fruits And Vegetables
      </p>
      <div className="grid lg:grid-cols-4  md:grid-cols-3 pt-4 gap-3 p-4 mx-14">
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
      <div className="grid  lg:grid-cols-6 md:grid-cols-4  mx-14 gap-3  ">
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
      <div className="grid  lg:grid-cols-6 md:grid-cols-4  mx-14 gap-3  ">
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
