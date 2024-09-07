import React from "react";

const Button = ({ iconUrl, label, background, borderColor, textColor }) => {
  return (
    <button
      className={`flex items-center justify-center px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        textColor ? textColor : "text-white"
      } ${background ? background : "bg-coral-red"} ${
        borderColor ? borderColor : "border-coral-red"
      }`}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="arrow" className="rounded-full ml-2 w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
