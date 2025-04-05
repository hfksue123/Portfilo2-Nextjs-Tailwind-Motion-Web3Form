import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Tính toán index ngược lại để tạo delay
const reserveIndex = (index) => {
  const totalSteps = 4;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Render 4 motion divs với delay trên mỗi phần tử */}
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reserveIndex(index) * 0.1,
          }}
          className="h-full w-full bg-darkTheme dark:bg-cyanTheme relative"
        />
      ))}
    </>
  );
};

export default Stairs;
