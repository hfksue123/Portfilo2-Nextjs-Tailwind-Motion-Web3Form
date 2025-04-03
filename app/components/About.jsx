import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { infoList } from "@/assets/assets";
import { toolsData } from "@/assets/assets";

const About = ({isDarkMode}) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <h2 className="text-center text-5xl">About Me</h2>
      <div className="flex flex-col lg:flex-row w-full items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-500 rounded-xl p-6 cursor-pointer 
                hover:bg-darktheme2 hover:-translate-y-1 hover:shadow-dark duration-300 transition-all
                dark:border-white dark:hover:shadow-[0_4px_10px_#ff388b]"
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/70">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 dark:text-white/80">Tools I Use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border
              border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:bg-darkHover">
                <Image src={tool} alt='tool' className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
