import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <ServiceCard
          icon={service.imgURL}
          label={service.label}
          subText={service.subtext}
          key={index}
        />
      ))}
    </section>
  );
};

export default Services;
