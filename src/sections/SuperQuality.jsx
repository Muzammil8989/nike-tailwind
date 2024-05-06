import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide Best{" "}
          <span className="text-coral-red inline-block">Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Our shoes are meticulously crafted using premium materials to ensure
          unparalleled comfort, durability, and style. From casual sneakers to
          elegant dress shoes, each pair is designed to meet the highest
          standards of quality and craftsmanship. Discover the perfect blend of
          fashion and function with our extensive collection, tailored to
          elevate your footwear experience.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Elevate your style with our diverse selection of footwear, designed to
          complement any outfit and occasion effortlessly.
        </p>
        <div className="mt-12">
          <Button label="View collection" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src = {shoe8}
          alt="shoe"
          className="object-contain"
          width={600}
          height={550}
        />

      </div>
    </section>
  );
};

export default SuperQuality;
