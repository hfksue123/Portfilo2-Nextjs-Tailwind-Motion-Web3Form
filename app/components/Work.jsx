import { workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { assets, serviceData } from "@/assets/assets";
import { FaPaperPlane, FaArrowRightLong } from "react-icons/fa";

const Work = ({ isDarkMode }) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">My Portfolio</h4>
      <h2 className="text-center text-5xl">My Lastest Project</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I am a frontend developer from VietNam, with 10 years of experience in
        multiple companies like Microsoft, Tesla and Google.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10 dark:text-black">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group cursor-pointer"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2
            py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
            >
              <div>
                <h2 className="font-extrabold">{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div
                className="border rounded-full border-black w-9 aspect-square flex items-center
  justify-center shadow-[2px_2px_0_#000] group-hover:bg-pink-300 group-hover:rotate-45 transition"
              >
                <FaPaperPlane className="w-5 h-5 text-black" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full
      py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white"
      >
        Show More{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right arrow"
          className="w-4"
        />
      </a>
    </div>
  );
};

export default Work;
