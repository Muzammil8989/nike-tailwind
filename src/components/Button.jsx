import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center font-montserrat gap-2 leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} border ${borderColor}` 
          : "bg-coral-red text-white border border-coral-red" 
      } px-7 py-4 hover:bg-white hover:text-coral-red hover:shadow-2xl rounded-full ${
        fullWidth ? "w-full" : "w-fit"
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
