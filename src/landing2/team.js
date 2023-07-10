import { Button } from "@mui/material";
import React from "react";

const Team = () => {
  return (
    <>
      <div className="images ">
        <p
          className="text-bold font-sans justify-center mx-4 max-w-xl text-md lx:max-w-xl xl:text-2xl float-right mt-20  p-5"
          style={{ textAlign: "justify" }}
        >
          A computer program can easily produce gibberish - especially if it has
          been provided with garbage beforehand. This program does something a
          little different. It takes a block of text as input and works out the
          proportion of characters within the text according to a chosen order.
          For example, an order of 2 means the program looks at pairs of
          letters, an order of 3 means triplets of letters and so on
          <br />
          <button className="p-2 border-2 rounded-full bg-sky-400 ">
            Propspectus
          </button>
        </p>
      </div>
      <div className="text-center font-sans bg-black py-5 text-2xl border-t border-gray-50 text-red-400 ">
        {" "}
        Our Couses Deatils
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 py-5 px-2 bg-black">
        <div
          className="color-gray-200 p-5 text-gray-600 hover:bg-gray-200 border-red-500  bg-white rounded-xl"
          style={{ textAlign: "justify" }}
        >
          <div className="text-center text-xl text-black ">Our Card</div>
          In the first place we have granted to God, and by this our present
          charter confirmed for us and our heirs forever that the English Church
          shall be free, and shall have her rights entire, and her liberties
          inviolate; and we will that it be thus observed; which is apparent
          from this that the freedom of elections, which is reckoned most
          important and very essential to the English Church, we, of our pure
        </div>
        <div
          className="color-gray-200 p-5 text-gray-600 hover:bg-gray-200 border-red-500  bg-white rounded-xl"
          style={{ textAlign: "justify" }}
        >
          <div className="text-center text-xl text-black ">Our Card</div>
          In the first place we have granted to God, and by this our present
          charter confirmed for us and our heirs forever that the English Church
          shall be free, and shall have her rights entire, and her liberties
          inviolate; and we will that it be thus observed; which is apparent
          from this that the freedom of elections, which is reckoned most
          important and very essential to the English Church, we, of our pure
        </div>
        <div
          className="color-gray-200 p-5 text-gray-600 hover:bg-gray-200 border-red-500  bg-white rounded-xl"
          style={{ textAlign: "justify" }}
        >
          <div className="text-center text-xl text-black ">Our Card</div>
          In the first place we have granted to God, and by this our present
          charter confirmed for us and our heirs forever that the English Church
          shall be free, and shall have her rights entire, and her liberties
          inviolate; and we will that it be thus observed; which is apparent
          from this that the freedom of elections, which is reckoned most
          important and very essential to the English Church, we, of our pure
        </div>
        <div
          className="color-gray-200 p-5 text-gray-600 hover:bg-gray-200 border-red-500  bg-white rounded-xl"
          style={{ textAlign: "justify" }}
        >
          <div className="text-center text-xl text-black ">Our Card</div>
          In the first place we have granted to God, and by this our present
          charter confirmed for us and our heirs forever that the English Church
          shall be free, and shall have her rights entire, and her liberties
          inviolate; and we will that it be thus observed; which is apparent
          from this that the freedom of elections, which is reckoned most
          important and very essential to the English Church, we, of our pure
        </div>
      </div>
    </>
  );
};

export default Team;
