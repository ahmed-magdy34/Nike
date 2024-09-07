import React from "react";

const ServiceCard = ({ label, icon, subText }) => {
  return (
    <div className="flex1 sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16 ">
      <div className="bg-coral-red flex justify-center items-center w-11 h-11 rounded-full">
        <img src={icon} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">
        {label}
      </h3>
      <p className="mt-3 leading-normal font-montserrat text-slate-gray break-words text-lg">
        {subText}
      </p>
    </div>
  );
};

export default ServiceCard;
