"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollUpButton = ({ className = "fixed bottom-10 right-10 z-50" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={className}
          style={{ pointerEvents: isVisible ? "auto" : "none" }}
        >
          <button
            onClick={scrollToTop}
            className="bg-black dark:bg-white text-white dark:text-black p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="hover:rotate-360"/>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollUpButton;

// How to use it:
// import ScrollUpButton from "./ScrollUpButton";
// add this to your page: <ScrollUpButton className="absolute bottom-10 right-10" />