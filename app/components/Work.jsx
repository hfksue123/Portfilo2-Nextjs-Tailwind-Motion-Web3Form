import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const workData = [
  {
    title: "Gallery project",
    description: "Image Web",
    bgImage: "/work-1.jpg",
  },
  {
    title: "Frontend site",
    description: "Web Design",
    bgImage: "/work-2.jpg",
  },
  {
    title: "Ecommerce Web",
    description: "Fullstack",
    bgImage: "/work-3.jpg",
  },
];

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">My Works</h4>
      <h2 className="text-center text-5xl">My Latest Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10 dark:text-black">
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
                justify-center shadow-[2px_2px_0_#000] group-hover:bg-cyanTheme group-hover:rotate-45 transition"
              >
                <FaPaperPlane className="w-5 h-5 text-black" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full
        py-3 px-10 mx-auto my-20 duration-500 dark:text-white dark:border-white"
      >
        Show More
        <FaArrowRightLong className="w-4" />
      </a>
    </div>
  );
};

export default Work;
