import React from "react";
import { motion, useScroll } from "framer-motion";

const CircleIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
  });
  return (
    <figure className="absolute -left-7 md:left-0 ">
      <svg width="75" height="75" viewBox="0 0 100 100" className="-rotate-90">
        <circle
          cx="75"
          cy="50"
          r="20"
          fill="none"
          className="stroke-pinkTheme dark:stroke-cyanTheme stroke-2"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="fill-white dark:fill-grayTheme stroke-pinkTheme dark:stroke-cyanTheme stroke-[5px]"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle cx="75" cy="50" r="10" fill="cyanTheme" className="" />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="fill-pinkTheme dark:fill-cyanTheme animate-pulse stroke-1 stroke-pinkTheme dark:stroke-cyanTheme"
        />
      </svg>
    </figure>
  );
};

export default CircleIcon;
