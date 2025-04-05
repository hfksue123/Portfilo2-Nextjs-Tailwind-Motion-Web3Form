"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowUp,
  FaUser,
  FaTools,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const buttons = [
  { id: "top", icon: <FaArrowUp />, label: "Top" },
  { id: "about", icon: <FaUser />, label: "About" },
  { id: "services", icon: <FaTools />, label: "Services" },
  { id: "work", icon: <FaBriefcase />, label: "Work" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
];

const ScrollNavButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed z-50 flex gap-3 right-5 bottom-2 justify-center items-center
                     md:flex-col md:bottom-5 md:right-5 flex-row  left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto"
        >
          {buttons.map((btn, index) => (
            <motion.button
              key={btn.id}
              onClick={() => scrollToSection(btn.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-grayTheme dark:bg-white text-white dark:text-black 
                         p-3 rounded-full shadow-lg 
                         hover:scale-110 transition-transform duration-300 ease-in-out"
              aria-label={`Scroll to ${btn.label}`}
            >
              {btn.icon}
            </motion.button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollNavButtons;
