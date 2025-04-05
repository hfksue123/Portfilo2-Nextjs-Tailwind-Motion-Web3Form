"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import assets from "@/assets/assets";
import ScrollUpButton from "@/components/ScrollUpButton";
import { FaReact, FaVuejs, FaCss3Alt, FaGithub } from "react-icons/fa";

// Dữ liệu project

const projects = [
  {
    title: "1. Portfolio Website",
    summary:
      "This is my portfolio website was built with Next.js and Tailwind CSS. It features a responsive design and is optimized for performance.",
    img: assets.background1,
    link: "https://baosu-portfolio.vercel.app/",
    github: "https://github.com/baosu-portfolio/baosu-portfolio",
    featured: true,
    tech: [
      { icon: FaVuejs, name: "Vue.js" },
      { icon: FaCss3Alt, name: "CSS3" },
    ],
  },
  {
    title: "2. Photo Gallery",
    summary: "A simple gallery with lightbox...",
    img: assets.background1,
    link: "https://baosu-gallery.vercel.app/",
    github: "https://github.com/baosu/photo-gallery",
    featured: false,
    tech: [
      { icon: FaVuejs, name: "Vue.js" },
      { icon: FaCss3Alt, name: "CSS3" },
    ],
  },
  {
    title: "3. Task Manager App",
    summary: "A basic task management app...",
    img: assets.background1,
    link: "https://baosu-tasks.vercel.app/",
    github: "https://github.com/baosu/task-manager",
    featured: false,
    tech: [
      { icon: FaVuejs, name: "Vue.js" },
      { icon: FaCss3Alt, name: "CSS3" },
    ],
  },
  {
    title: "4. Kanban Board",
    summary:
      "This is my portfolio website was built with Next.js and Tailwind CSS. It features a responsive design and is optimized for performance.",
    img: assets.background1,
    link: "https://baosu-portfolio.vercel.app/",
    github: "https://github.com/baosu-portfolio/baosu-portfolio",
    featured: true,
    tech: [
      { icon: FaVuejs, name: "Vue.js" },
      { icon: FaCss3Alt, name: "CSS3" },
    ],
  },
];

// Component dự án nổi bật
const FeaturedProject = ({ title, summary, img, link, github, tech }) => (
  <div
    className="w-full flex flex-col items-center justify-center md:flex-row bg-white dark:bg-grayTheme 
  border-2 border-grayShadow dark:border-gray-300 rounded-2xl p-3 md:p-6 shadow-[5px_5px_0_var(--gray)] dark:shadow-[5px_5px_0_var(--white)]"
  >
    {/* image */}
    <Link href={link} target="_blank" className="md:w-1/2 w-full mb-4 md:mb-0">
      <div className="overflow-hidden rounded-xl">
        <Image
          src={img}
          alt={title}
          width={600}
          height={400}
          className="w-full object-cover transition hover:scale-105"
        />
      </div>
    </Link>

    {/* content */}
    <div className="md:w-1/2 md:pl-6 w-full">
      <h2 className="text:3xl md:text-4xl text-black dark:text-white font-bold md:mb-2">
        {title}
      </h2>
      <p className="text-gray-500 dark:text-white/50 mb-2 md:mb-4">{summary}</p>

      {/* Tech Icons + Hover:Tooltip */}
      {tech && (
        <div className="flex flex-wrap items-center gap-3 mb-4 text-3xl text-blue-500 dark:text-cyanTheme">
          {tech.map(({ icon: Icon, name }, index) => (
            <div key={index} className="relative group">
              {Icon ? (
                <>
                  <Icon className="cursor-pointer" />
                  {/* tooltip */}
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white 
          text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
          transition pointer-events-none whitespace-nowrap z-10"
                  >
                    {name}
                  </span>
                </>
              ) : (
                <span className="text-red-500 text-xs">Invalid Icon</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex items-center gap-4">
        <Link href={github} target="_blank" className="text-gray-700">
          <FaGithub className="text-[40px] text-grayTheme dark:text-white hover:text-cyanTheme transition-colors duration-200" />
        </Link>
        <Link
          href={link}
          target="_blank"
          className="bg-grayTheme dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg flex items-center gap-2"
        >
          Visit Project
        </Link>
      </div>
    </div>
  </div>
);

// Component dự án thường
const SimpleProject = ({ title, summary, img, link, github, tech }) => (
  <div
    className="items-center justify-center md:flex-row bg-white dark:bg-grayTheme 
  border-2 border-grayShadow dark:border-gray-300 rounded-2xl p-3 md:p-6 shadow-[5px_5px_0_var(--gray)] dark:shadow-[5px_5px_0_var(--white)]"
  >
    <Link href={link} target="_blank" className="w-full">
    <div className="overflow-hidden rounded-xl">
      <Image
        src={img}
        alt={title}
        width={600}
        height={300}
        className="rounded-md w-full h-[150px] object-cover mb-4 transition hover:scale-105"
      />
      </div>
    </Link>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600 dark:text-white/70 mt-2">{summary}</p>

    {/* Tech Icons + tooltip*/}
    {tech && (
        <div className="flex flex-wrap items-center gap-3 mb-4 text-3xl text-blue-500 dark:text-cyanTheme">
          {tech.map(({ icon: Icon, name }, index) => (
            <div key={index} className="relative group">
              {Icon ? (
                <>
                  <Icon className="cursor-pointer" />
                  {/* tooltip */}
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white 
          text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
          transition pointer-events-none whitespace-nowrap z-10"
                  >
                    {name}
                  </span>
                </>
              ) : (
                <span className="text-red-500 text-xs">Invalid Icon</span>
              )}
            </div>
          ))}
        </div>
      )}

    {/* Buttons */}
    <div className="flex items-center justify-between gap-3 mt-4">
      {/* visit button */}
      <Link
        href={link}
        target="_blank"
        className="bg-grayTheme dark:bg-white text-white dark:text-black px-4 py-1 rounded-lg flex items-center gap-2"
      >
        Visit Project
      </Link>
      {/* github */}
      <Link href={github} target="_blank">
        <FaGithub className="text-[35px] text-grayTheme dark:text-white hover:text-cyanTheme transition-colors duration-200" />
      </Link>
    </div>
  </div>
);

const Project = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <main className="max-w-6xl mx-auto px-4 py-16 mt-20">
      <h1 className="text-3xl font-bold text-center mb-12">My Projects</h1>

      {/* Featured 1 */}
      {featured[0] && (
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex flex-col gap-16 mb-16"
        >
          <FeaturedProject {...featured[0]} />
        </motion.div>
      )}

      {/* Simple 1 + 2 */}
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 mb-16"
      >
        {others[0] && <SimpleProject {...others[0]} />}
        {others[1] && <SimpleProject {...others[1]} />}
      </motion.div>

      {/* Featured 2 */}
      {featured[1] && (
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex flex-col gap-16 mb-16"
        >
          <FeaturedProject {...featured[1]} />
        </motion.div>
      )}

      {/* Simple 3 + 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {others[2] && <SimpleProject {...others[2]} />}
        {others[3] && <SimpleProject {...others[3]} />}
      </div>

      <ScrollUpButton className="fixed bottom-3 right-3 md:bottom-10 md:right-10" />
    </main>
  );
};

export default Project;
