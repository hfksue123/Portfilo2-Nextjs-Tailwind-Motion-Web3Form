"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/hooks/ThemeContext";
import { FaSun, FaMoon, FaArrowRight } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Links = [
  { name: "Home", path: "/home" },
  { name: "About Me", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/project" },
  { name: "Contact", path: "#contact" },
];

const NavBar = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [isScroll, setIsScroll] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Thêm state này

  useEffect(() => {
    const currentPath = window.location.pathname + window.location.hash;
    setActiveLink(currentPath === "/" ? "/home" : currentPath);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-evenly justify-between z-50 transition-all duration-500
      ${isScroll ? "bg-white/50 backdrop-blur-sm shadow-sm shadow-gray-500 dark:bg-darkTheme/50 dark:shadow-white/50" : ""}`}
    >
      <Link href="#top" className="text-2xl font-bold text-textdark dark:text-textlight">
        Hfksue123 <span className="text-cyanTheme text-3xl">.</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
        {Links.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={`text-lg capitalize text-black dark:text-white hover:text-black/50 dark:hover:text-white/50 transition-all pb-2 ${
                activeLink === link.path ? "border-b-2 border-darkTheme dark:border-white/50" : ""
              }`}
              onClick={() => setActiveLink(link.path)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2">
          {isDarkMode ? <FaSun className="text-2xl text-yellow-400" /> : <FaMoon className="text-2xl text-gray-600" />}
        </button>

        {/* Contact Button */}
        <Link href="#contact" className="hidden lg:flex items-center gap-3 px-5 py-2.5 border-2 border-gray-500 rounded-full dark:border-white/50">
          Contact <FaArrowRight />
        </Link>
      </div>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="block md:hidden ml-3 p-2">
          <FaBarsStaggered className="text-2xl" />
        </SheetTrigger>
        <SheetContent side="right" className="bg-white dark:bg-black dark:text-white p-6">
          <ul className="flex flex-col gap-4 h-screen justify-center items-center">
            {Links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`justify-center items-center gap-2 text-lg capitalize px-4 py-2 rounded-md transition-all hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    activeLink === link.path ? "border-b-4 border-darkTheme dark:border-white/50" : ""
                  }`}
                  onClick={() => {
                    setActiveLink(link.path);
                    setIsOpen(false); // Đóng Sheet khi click link
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default NavBar;
