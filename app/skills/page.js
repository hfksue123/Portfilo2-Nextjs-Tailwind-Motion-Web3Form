"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimateText from "@/components/AnimateText";

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaNodeJs, FaJava,
  FaGit, FaGithub, FaFigma, FaUserFriends, FaClosedCaptioning,
  FaCamera, FaSearch
} from "react-icons/fa";

import {
  SiTailwindcss, SiNextdotjs, SiDavinciresolve, SiAdobeillustrator,
  SiAdobephotoshop, SiAdobeaftereffects, SiAdobepremierepro,
  SiAdobelightroom, SiAdobeaudition
} from "react-icons/si";

import { GrDocumentPdf } from "react-icons/gr";

import { RiSpeakFill,RiRobot2Fill } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi";
import { BiLogoVisualStudio } from "react-icons/bi";
import { IoBook } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";

const skillsData = [
  {
    category: "Web Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 85 },
      { name: "React", icon: <FaReact className="text-cyan-400" />, level: 85 },
      { name: "Vue", icon: <FaVuejs className="text-green-500" />, level: 80 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 80 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, level: 85 },
      { name: "Java", icon: <FaJava className="text-yellow-500" />, level: 75 },
      { name: "Visual Studio Code", icon: <BiLogoVisualStudio className="text-blue-500" />, level: 90 },
      { name: "GitHub", icon: <FaGithub className="dark:text-white" />, level: 90 },
      { name: "Git", icon: <FaGit className="text-orange-500" />, level: 90 },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 90 },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Figma", icon: <FaFigma className="text-pink-500" />, level: 88 },
      { name: "Adobe Illustrator", icon: <SiAdobeillustrator className="text-orange-500" />, level: 80 },
      { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-500" />, level: 90 },
      { name: "Adobe Lightroom", icon: <SiAdobelightroom className="text-[#2f7cbc]" />, level: 95 },
    ],
  },
  {
    category: "Video Editing",
    skills: [
      { name: "DaVinci Resolve", icon: <SiDavinciresolve className="text-gray-500" />, level: 75 },
      { name: "Adobe After Effects", icon: <SiAdobeaftereffects className="text-[#3056a9]" />, level: 65 },
      { name: "Adobe Premiere Pro", icon: <SiAdobepremierepro className="text-[#3261c5]" />, level: 65 },
      { name: "Adobe Audition", icon: <SiAdobeaudition className="text-[#701bb6]" />, level: 65 },
      { name: "Cap Cut", icon: <FaClosedCaptioning className="dark:text-white" />, level: 85 },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Photography", icon: <FaCamera className="dark:text-white" />, level: 95 },
      { name: "Teamwork Skills", icon: <FaUserFriends className="text-green-400" />, level: 90 },
      { name: "Using Office Tools", icon: <GrDocumentPdf className="text-orange-600" />, level: 90 },
      { name: "Apply AI to work", icon: <RiRobot2Fill className="text-cyan-500" />, level: 90 },
      { name: "Communication Skills", icon: <RiSpeakFill className="text-blue-400" />, level: 75 },
      { name: "Creativity In Problem Solving", icon: <HiLightBulb className="text-yellow-600 dark:text-yellow-400" />, level: 88 },
      { name: "Searching Information", icon: <FaSearch className="text-red-600 dark:text-red-500" />, level: 85 },
      { name: "Reading English Documents", icon: <IoBook className="text-purple-600 dark:text-purple-500" />, level: 85 },
      { name: "Adaptability To Pressure Environments", icon: <LuBrain className="text-rose-700 dark:text-rose-500" />, level: 80 },
    ],
  },
];

const SkillBar = ({ icon, name, level }) => {
  const controls = useAnimation();
  //   loading bar when scrolling
  const [ref, inView] = useInView({ triggerOnce: true });
  const [percent, setPercent] = useState(0);
  // effect to show loading bar when scrolling
  useEffect(() => {
    if (inView) {
      controls.start({ width: `${level}%`, transition: { duration: 1 } });
      let count = 0;
      const interval = setInterval(() => {
        count++;
        if (count <= level) {
          setPercent(count);
        } else {
          clearInterval(interval);
        }
      }, 1000 / level);
    }
  }, [inView, level, controls]);

  return (
    <div ref={ref} className="mb-5">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xl">{icon}</span>
        <span className="text-lg font-medium">{name}</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
      <div className="text-right text-sm text-gray-500">{percent}%</div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
      <AnimateText mode="word">
        <p className="mt-20 mb-10 inline-block w-full text-grayTheme dark:text-white text-center font-bold capitalize text-4xl md:text-7xl">
          Skills & Tools
        </p>
      </AnimateText>

      {skillsData.map((section, idx) => (
        <motion.div
          key={section.category}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 lg:mb-8">
            {section.category}
          </h2>
          <div className="space-y-3">
            {section.skills.map((skill, i) => (
              <SkillBar
                key={i}
                icon={skill.icon}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
