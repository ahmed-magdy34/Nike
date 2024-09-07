import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
const Hero = () => {
  const [displayImage, setDisplayImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full   flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ml-6"
    >
      <div className="flex flex-col relative xl:w-2/5 justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">
          Our summer collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold max-sm:leading-[82px]">
          <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals,quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-center relative items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={displayImage}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 gap-4 sm:gap-6">
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              shoe={shoe}
              changeImage={setDisplayImage}
              shownImage={displayImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
