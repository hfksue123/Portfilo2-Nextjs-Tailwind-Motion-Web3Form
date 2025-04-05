"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(false);

    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 800); // tổng thời gian animation: 0.6 fade-in + 1s giữ + 0 fade-out

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Overlay animation */}
      <AnimatePresence>
        {!shouldRender && (
          <motion.div
            key={`overlay-${pathname}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3, // fade in
              ease: "easeInOut",
            }}
            className="fixed inset-0 z-50 bg-white dark:bg-darkTheme pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Children chỉ render khi overlay biến mất */}
      {shouldRender && (
        <div className="opacity-100 transition-opacity duration-100">
          {children}
        </div>
      )}
    </>
  );
};

export default PageTransition;
