import React from "react";
import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <>
      <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
        <div className="flex-1">
          <img
            src={offer}
            alt="offer"
            width={773}
            height={687}
            className="w-full object-contain"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-coral-red">Special</span> Offers
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Our shoes are meticulously crafted using premium materials to ensure
            unparalleled comfort, durability, and style. From casual sneakers to
            elegant dress shoes, each pair is designed to meet the highest
            standards of quality and craftsmanship. Discover the perfect blend
            of fashion and function with our extensive collection, tailored to
            elevate your footwear experience.
          </p>
          <p className="mt-4 lg:max-w-lg info-text">
            Elevate your style with our diverse selection of footwear, designed
            to complement any outfit and occasion effortlessly.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop now" iconURL={arrowRight} />
            <Button
              label="Learn more"
              backgroundColor="bg-white"
              textColor="text-slate-gray"
              borderColor="border-slate-gray"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialOffer;
