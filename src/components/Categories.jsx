import React from "react";
import CategoryCard from "./CategoryCard";
import { BsVectorPen } from "react-icons/bs";
import { TiHtml5 } from "react-icons/ti";
import { TbMicrophone2, TbMusic } from "react-icons/tb";
import { HiOutlineBriefcase } from "react-icons/hi";
import { WiSunrise } from "react-icons/wi";
import { AiOutlineCamera } from "react-icons/ai";
import { BiData } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="w-full bg-[#F0FBF7] py-24">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <h1 className="md:leading-[72px] text-3xl font-bold">
          <span className="text-[#20B486]">Services</span>
        </h1>

        <div className="grid lg:grid-cols-4 grid-cols-2 py-8 md:gap-4 gap-1">
          <CategoryCard
            icons={<BsVectorPen size={30} />}
            title={"Medical Content"}
          />
          <CategoryCard icons={<TiHtml5 size={30} />} title={"Designing"} />
          <CategoryCard
            icons={<TbMicrophone2 size={30} />}
            title={"3d Animation"}
          />
          <CategoryCard
            icons={<HiOutlineBriefcase size={30} />}
            title={"2d Animation"}
          />

          <CategoryCard
            icons={<WiSunrise size={30} />}
            title={"Web Development"}
          />
          <CategoryCard
            icons={<AiOutlineCamera size={30} />}
            title={"Journal Publishing"}
          />
          <CategoryCard icons={<TbMusic size={30} />} title={"KOL services"} />
          <CategoryCard
            icons={<BiData size={30} />}
            title={"Virtual chatbot"}
          />

          <CategoryCard
            icons={<TiHtml5 size={30} />}
            title={"Translation services"}
          />
          <CategoryCard
            icons={<TiHtml5 size={30} />}
            title={"HealthVirtual Reality"}
          />
          <CategoryCard
            icons={<MdAttachMoney size={30} />}
            title={"App Development"}
          />
          <CategoryCard
            icons={<FaUniversity size={30} />}
            title={"Social Media Management"}
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
