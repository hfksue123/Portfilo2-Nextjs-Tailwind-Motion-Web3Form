import React from "react";
import { motion } from "framer-motion";

const getQuoteVariant = (delay, staggerChildren) => ({
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      delay,
      staggerChildren,
    },
  },
});

const getSingleItemVariant = (duration) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration },
  },
});

const processChildren = (children, mode, singleItem) => {
  if (typeof children === "string") {
    const parts = mode === "word" ? children.split(" ") : children.split("");
    return parts.map((item, i) => (
      <motion.span
        key={item + "-" + i}
        className="inline-block"
        variants={singleItem}
      >
        {item}
        {mode === "word" ? "\u00A0" : ""}
      </motion.span>
    ));
  }

  if (Array.isArray(children)) {
    return children.map((child, i) => (
      <React.Fragment key={i}>
        {processChildren(child, mode, singleItem)}
      </React.Fragment>
    ));
  }

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      children: processChildren(children.props.children, mode, singleItem),
    });
  }

  return children;
};

const AnimateText = ({
  children,
  className = "",
  mode = "letter",
  delay = 0.5,
  staggerChildren = 0.3,
  duration = 1,
}) => {
  const quote = getQuoteVariant(delay, staggerChildren);
  const singleItem = getSingleItemVariant(duration);

  return (
    <motion.div
      className={className}
      variants={quote}
      initial="initial"
      animate="animate"
    >
      {processChildren(children, mode, singleItem)}
    </motion.div>
  );
};

export default AnimateText;


// How to use
// className="my-10 inline-block w-full text-grayTheme dark:text-white 
//               text-center font-bold capitalize text-4xl md:text-7xl"

{/* <AnimateText
  mode="letter"
  delay={1}              // Ghi đè delay
  staggerChildren={0.1}  // Ghi đè tốc độ giữa các chữ
  duration={0.8}         // Ghi đè thời gian trượt lên của từng phần tử
>
  <h1>Gia Bao</h1>
</AnimateText> */}
