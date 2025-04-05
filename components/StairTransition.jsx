"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        {/* Cầu thang animation */}
        <div className="fixed inset-0 z-[9999] pointer-events-none flex">
          <Stairs />
        </div>

        {/* Overlay fade */}
        <motion.div
          className="fixed inset-0 bg-primary pointer-events-none z-[9998]"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
        />
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
