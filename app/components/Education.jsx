"use client";
import React from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import CircleIcon from "../components/CircleIcon";
import Image from "next/image";
import assets from "@/assets/assets";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <CircleIcon reference={ref} />

      {/* spring effect pop-up */}
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex flex-col items-left"
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-30">
      <h2 className="font-bold text-4xl mb-32 w-full text-center">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-2 md:left-9 top-0 w-[4px] h-full bg-pinkTheme 
      dark:bg-cyanTheme origin-top drop-shadow-[0_0_5px_rgba(0,255,255,0.2)]"
        />

        <ul className="w-[85%] flex flex-col justify-center max-sm:ml-8 space-y-8">
          {/* Item 1 */}
          <li className="flex w-full justify-evenly items-center gap-6">
            <Details
              type="University"
              time="2020 - 2025"
              place="University of Science"
              info="Major: Applied Mathematics and Informatics."
            />
            <Image
              src={assets.school4}
              alt="High School"
              width={300}
              className="rounded-xl shadow-md object-cover max-sm:hidden border border-solid border-grayTheme dark:border-white"
            />
          </li>

          {/* Item 2 */}
          <li className="flex w-full justify-between items-start gap-6">
            <Details
              type="High"
              time="2018 - 2020"
              place="Nguyen Trai High School"
              info="An Khe town, Gia Lai"
            />
            <Image
              src={assets.school3}
              alt="High School"
              width={300}
              className="rounded-xl shadow-md object-cover max-sm:hidden border border-solid border-grayTheme dark:border-white"
            />
          </li>

          {/* Item 3 */}
          <li className="flex w-full justify-between items-start gap-6">
            <Details
              type="Secondary"
              time="2013 - 2017"
              place="Chu Van An Secondary School"
              info="Dak Po, Gia Lai"
            />
            <Image
              src={assets.school2}
              alt="Secondary"
              width={300}
              className="rounded-xl shadow-md object-cover max-sm:hidden border border-solid border-grayTheme dark:border-white"
            />
          </li>

          {/* Item 4 */}
          <li className="flex w-full justify-between items-start gap-6">
            <Details
              type="Primary"
              time="2008 - 2013"
              place="Tran Phu Primary School"
              info="Dak Po, Gia Lai"
            />
            <Image
              src={assets.school1}
              alt="High School"
              width={300}
              className="rounded-xl shadow-md object-cover max-sm:hidden border border-solid border-grayTheme dark:border-white"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
