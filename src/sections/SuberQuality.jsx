import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuberQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl max-sm:text-[72px] font-bold max-sm:leading-[82px]">
          We Provide You
          <span className="text-coral-red">
            Super
            <br /> Quality{" "}
          </span>
          Shoes
        </h2>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Ensuring Premium Comfort and Style,our meticulously crafted footwear
          is designed to elevate your experince, providing you with unmtached
          quality,innovation,and a and atouch of elegance
        </p>
        <p className="font-montserrat text-slate-gray text-lg leading-8  mb-14 sm:max-w-sm">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div>
          <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuberQuality;
