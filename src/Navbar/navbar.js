import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex border-spacing-2 ">
        <div className="flex justify-between">
          <p className="">Ps Gyan</p>

          <NavLink className="">Home </NavLink>
          <NavLink className="">About </NavLink>
          <NavLink className="">Contact </NavLink>
          <NavLink className="">Other </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
