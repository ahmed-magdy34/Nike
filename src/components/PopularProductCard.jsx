import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ name, price, image }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={image} alt={name} className="w-[280px] h-[280px]" />
      <div className="flex mt-8 justify-start gap-2.5 ">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl text-slate-gray font-montserrat leading-normal">
          (4.5)
        </p>
      </div>
      <h3 className="text-2xl font-palanquin font-semibold mt-2 leading-normal">
        {name}
      </h3>
      <p
        className="text-coral-red text-2xl font-montserrat font-semibold mt-2
       leading-normal"
      >
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
