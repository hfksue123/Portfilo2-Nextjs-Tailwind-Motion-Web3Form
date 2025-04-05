import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

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
      <motion.h1
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.3,
          type: "spring",
          stiffness: 80,
        }}
        className="text-3xl sm:text-6xl lg:text-[66px]"
      >
        Frontend web developer living in VietNam.
      </motion.h1>
      <p className="max-w-2xl mx-auto">
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
          <Image src={assets.right_arrow_white} className="w-4" />
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
          <Image src={assets.download_icon} className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
