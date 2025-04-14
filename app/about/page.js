"use client";
import React from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import CircleIcon from "../components/CircleIcon";
import Education from "../components/Education";
import AboutHeader from "../components/AboutHeader";

const Details = ({ category, language, time, score, description }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-4 first:mt-0 last:mb-0 w-full mr-6 ml-[55px] md:ml-[190px] flex flex-col"
    >
      <CircleIcon reference={ref} />

      {/* spring effect pop-up */}
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-xl md:text-2xl">
          {category}&nbsp;
          <a target="_blank" className="text-pinkTheme capitalize">
            @{language}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {score}
        </span>
        <p className="font-medium w-[90%] text-justify">{description}</p>
      </motion.div>
    </li>
  );
};

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div>
      <AboutHeader />
      <div className="my-30">
        <h2 className="font-bold text-4xl mb-32 w-full text-center">
          Language
        </h2>

        <div ref={ref} className="w-[75%] mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-2 md:left-9 top-0 w-[4px] h-full bg-pinkTheme dark:bg-cyanTheme origin-top drop-shadow-[0_0_5px_rgba(0,255,255,0.2)]"
          />
          <ul className="w-full flex flex-col items-start justify-between ">
            <Details
              category="TOEIC Listening & Reading"
              language="English"
              time="15/08/2024"
              score="805 Points"
              description="I can read and understand English well, and I can also follow spoken English without much difficulty."
            />
            <Details
              category="TOEIC Speaking & Writing"
              language="English"
              time="15/03/2025"
              score="290 Points"
              description="I am capable of communicating verbally at a basic conversational level and write English clearly and correctly."
            />
            <Details
              category="Native Language"
              language="Vietnamese"
              time="2002 - Present"
              score="N/A"
              description="Vietnamese is my native language and mother tongue, which I have used fluently throughout my life."
            />
          </ul>
        </div>
        <Education />
      </div>
    </div>
  );
};

export default About;
