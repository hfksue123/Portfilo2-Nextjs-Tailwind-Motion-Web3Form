import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimateText from "@/components/AnimateText";
import { stagger } from "motion";
import { FaDownload } from "react-icons/fa";

const Header = () => {
  return (
    <div
      className="max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 mt-10"
      id="top"
    >
      {/* profile-img */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </motion.div>
      {/* h3 */}
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-2"
      >
        Hi! I'm Gia Bao 👋
      </motion.h3>
      {/* h1 */}
      <AnimateText mode="word" staggerChildren={0.1}>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px]">
          Frontend web developer living in VietNam.
        </h1>
      </AnimateText>
      {/* p */}
      <p className="max-w-2xl mx-4 max-sm:text-justify">
        I am a frontend developer from VietNam, with experience in multiple
        projects and a passion for creating beautiful and functional websites
        using React.js, Next.js, and other frontend frameworks. I am also
        familiar with backend technologies such as Node.js and MongoDB. I am
        looking for new challenges and opportunities to grow my skills and
        continue learning.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-grayTheme hover:bg-grayTheme-1
           text-white flex items-center gap-2 dark:bg-transparent transition-colors duration-300 ease-in-out"
        >
          Contact Me
          <FaArrowRightLong className="w-4" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.45 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black"
        >
          My resume
          <FaDownload className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
