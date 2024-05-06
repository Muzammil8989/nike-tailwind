import React from "react";
import { products } from "../constant";
import PopularProductCard from "../components/PopularProductCard";

const PopularProduct = () => {
  return (
    <>
      <section
        id="products"
        className="max-container max-sm:mt-12 flex flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-start gap-5 text-center">
          <h2 className="text-4xl font-palanquin font-bold">
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
            Explore our latest collection and discover top-notch quality and
            style. Find the perfect pair of shoes for every occasion.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-14">
          {products.map((product) => (
            <PopularProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularProduct;
