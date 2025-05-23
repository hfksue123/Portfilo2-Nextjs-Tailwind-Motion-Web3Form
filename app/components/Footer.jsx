import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "linear" }}
    >
      <footer className="w-full border-t-2 border-gray-500 dark:border-white/50 font-medium text-xlbg-gray-900 text-grayTheme dark:text-white py-8">
        <div className="flex flex-col gap-5 md:flex-row items-center justify-evenly">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
          <div>
            Builded with ❤️ by{" "}
            <Link
              href="https://www.facebook.com/hfksue123"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-blue-600"
            >
              HFKSUE123
            </Link>
          </div>
          <Link href="/">GoodBye!!</Link>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
