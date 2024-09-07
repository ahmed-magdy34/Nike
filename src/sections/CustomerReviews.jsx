import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> say?
      </h3>
      <p className="info-text m-auto mt-4 text-center max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experience with us
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard {...review} key={index} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
