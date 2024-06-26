import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";


const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] font-palanquin lg:max-w-md font-bold">
        Sign Up from <span className="text-coral-red">Updates</span> &
        Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="subscribe@nike.com"
          className="input"
        />
        <div className="flex max-sm:justify-center items-center max-sm:w-full">
          <Button label="Subscribe" fullWidth/>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
