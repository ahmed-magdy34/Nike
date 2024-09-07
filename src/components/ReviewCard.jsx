import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ feedback, imgURL, customerName, rating }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt="image"
        className="rounded-full w-[120px] h-[120px] object-cover"
      />
      <h3 className="text-center mt-6 info-text max-w-sm">{feedback}</h3>

      <div className="mt-3 flex justify-center items-center gap-2.5 ">
        <img
          src={star}
          alt="rate"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl text-slate-gray font-montserrat">({rating})</p>
      </div>
      <h3 className="text-3xl font-bold text-center font-palanquin mt-1">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
