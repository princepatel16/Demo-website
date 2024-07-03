import React from "react";
import { cta } from "../assets";

const CTA = () => {
  return (
    <div className="w-full bg-[#E9F8F3] py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0">
        <img src={cta} className="w-[500px] mx-auto" />

        <div>
          <h1 className="py-2  text-3xl font-semibold">
            Work with <span className="text-[#20B486]">World's leading</span>{" "}
            Marketing agency{" "}
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Medhavee Creatives is a creative agency specializing in medical
            communication within the healthcare industry, dedicated to providing
            optimal solutions for pharmaceutical needs, serving as a
            comprehensive platform for scientific promotional support. Medhavee
            Creatives offers a wide range of medical communication services,
            including medical content creation, design, and animations.
          </p>
          <button className="max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-[#20B486] text-white font-bold">
            Sign Up For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
