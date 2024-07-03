import React from "react";
import { logo } from "../assets";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0">
        <div className="col-span-2">
          <img src={logo} className="h-[70px]" />
          <h3 className="text-2xl font-bold mt-10">Contact Us</h3>
          <h3 className="py-2 text-[#6D737A]">Call : +91 97231 49235</h3>
          <h3 className="py-2 text-[#6D737A]">
            103, SV square, New Rani Ahmedabad,
            <br></br>Gujarat India 382480
          </h3>
          <h3 className="py-2 text-[#363A3D]">maulik@medhaveecreatives.com </h3>
          <div className="flex gap-4 py-4">
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaFacebookF size={25} style={{ color: "#4DC39E" }} />
            </div>
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaDribbble size={25} style={{ color: "#4DC39E" }} />
            </div>
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaLinkedinIn size={25} style={{ color: "#4DC39E" }} />
            </div>
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaInstagram size={25} style={{ color: "#4DC39E" }} />
            </div>
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaBehance size={25} style={{ color: "#4DC39E" }} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Explore</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2">Home</li>
            <li className="py-2">About us</li>
            <li className="py-2">Print & Digital Collaterals</li>
            <li className="py-2">3d Animations</li>
            <li className="py-2">2d Animations</li>
            <li className="py-2">Achievements</li>
            <li className="py-2">Services</li>
            <li className="py-2">Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Category</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2">Design</li>
            <li className="py-2">Development</li>
            <li className="py-2">Marketing</li>
            <li className="py-2">Business</li>
            <li className="py-2">Lifestyle</li>
            <li className="py-2">Photography</li>
           </ul>
        </div>

        <div className="max-[780px]:col-span-2">
          <h3 className="text-2xl font-bold">Stay Updated! Subscribe</h3>
          <h3 className="py-2 text-[#6D737A]">
            Subscribe to Receive Our Latest Updates <br></br>
          </h3>
          <form className="py-4">
            <input
              className="bg-[#F2F3F4] p-4 w-full rounded"
              placeholder="Email here"
            />
            <button className="max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center py-5 md:gap-8 ">
        <h3 className="text-center text-medium font-regular text-[#757575]">
          © 2016-2024 MEDHAVEE CREATIVES. All rights reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
