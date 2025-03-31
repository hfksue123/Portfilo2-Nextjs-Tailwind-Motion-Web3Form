import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const NavBar = ({isDarkMode, setIsDarkMode}) => {
  const [isScroll, setisScroll] = useState(false)
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    };
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    };
    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        if (scrollY > 50){
          setisScroll(true);
        } else {
          setisScroll(false);
        }
      })
    }, [])

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
      ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt=""
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
          ${isScroll ? "" : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}>
          <li>
            <a href="#top" className="">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#top">Services</a>
          </li>
          <li>
            <a href="#top">Contact</a>
          </li>
          <li>
            <a href="#top">My Work</a>
          </li>
        </ul>

        <div className="flex flex-center gap-4">
          {/* dark-mode-toggle */}
          <button className="" onClick={()=> setIsDarkMode(prev => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6 h-6 cursor-pointer"
            />
          </button>

          {/* contact-button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border-2 
          border-gray-500 rounded-full ml-4 dark:border-white/50 "
            alt="hi"
          >
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className="w-3" />
          </a>

          {/* toggle small screen */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white :assets.menu_black}
              alt=""
              className="w-6 h-6 cursor-pointer"
            />
          </button>
        </div>

        {/* mobile-menu */}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen
        bg-rose-50 transition duration-300 dark:bg-lightHover dark:text-white">

<div className="absolute right-6 top-6" onClick={closeMenu}>
    <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className="w-5 cursor-pointer"/>
</div>

          <li>
            <a href="#top" className="" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About me</a>
          </li>
          <li>
            <a href="#top" onClick={closeMenu}>Services</a>
          </li>
          <li>
            <a href="#top" onClick={closeMenu}>Contact</a>
          </li>
          <li>
            <a href="#top" onClick={closeMenu}>My Work</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
