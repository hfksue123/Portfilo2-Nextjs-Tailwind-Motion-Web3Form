import React from "react";
import { FiMonitor, FiImage } from "react-icons/fi";
import { RiVideoOnAiLine } from "react-icons/ri";

const serviceData = [
  {
    icon: <FiMonitor className="text-4xl text-pinkTheme dark:text-cyanTheme" />,
    title: "Web Design",
    description:
      "I build responsive and SEO-friendly websites with clean UI, ensuring performance, accessibility, and a smooth user experience across all devices.",
  },
  {
    icon: <RiVideoOnAiLine className="text-4xl text-pinkTheme dark:text-cyanTheme" />,
    title: "Video Editing",
    description:
      "I edit and produce videos that tell compelling visual stories — from short promotional clips to cinematic content, using dynamic transitions and sound design.",
  },
  {
    icon: <FiImage className="text-4xl text-pinkTheme dark:text-cyanTheme" />,
    title: "Graphic Design",
    description:
      "I create visual assets such as banners, posters, and original photography — all designed and captured by myself to deliver authentic, high-quality content.",
  },
];

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">What I Do</h4>
      <h2 className="text-center text-5xl">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        While I enjoy many things, I have a particularly strong passion for the
        visual aspects of technology, specifically images, videos, and
        interfaces, which I find endlessly fascinating.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
        {serviceData.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="border border-grayTheme dark:border-gray-500 rounded-2xl px-8 py-12 
              hover:shadow-lg cursor-pointer dark:hover:bg-darkHover 
              hover:-translate-y-1 transition-transform duration-500"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-lg font-semibold my-3 text-gray-800 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-6 dark:text-gray-300">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
