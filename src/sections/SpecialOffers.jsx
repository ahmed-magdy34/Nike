import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl max-sm:text-[72px] font-bold max-sm:leading-[82px]">
          <span className="text-coral-red">Special </span> offer
        </h2>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Ensuring Premium Comfort and Style,our meticulously crafted footwear
          is designed to elevate your experince, providing you with unmtached
          quality,innovation,and a and atouch of elegance
        </p>
        <p className="font-montserrat text-slate-gray text-lg leading-8  mb-14 sm:max-w-sm">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="flex flex-wrap mt-11 gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="learn more"
            background="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
