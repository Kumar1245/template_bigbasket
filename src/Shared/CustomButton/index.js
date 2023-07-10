import React from "react";
import classNames from "classnames";

const CustomButton = ({ children, onClick, className = "", type = "" }) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={classNames(
          "p-3 bg-pink-400 border hover:scale-105 transition-all shadow-md rounded-md duration-300",
          className
        )}
      >
        {children}
      </button>
    </>
  );
};

export default CustomButton;
