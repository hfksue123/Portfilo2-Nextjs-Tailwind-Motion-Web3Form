import React from 'react'
import { motion } from 'framer-motion'

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.2, //delay between each words
    },
  },
};

const singleItem = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

const AnimateText = ({ text, className = '', mode = 'letter' }) => {
  const parts =
    mode === 'word'
      ? text.split(' ') // chia từng từ
      : text.split('')  // chia từng ký tự

  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <motion.h1
        className={`inline-block w-full text-grayTheme dark:text-white font-bold capitalize text-7xl ${className}`}
        variants={quote}
        initial='initial'
        animate='animate'
      >
        {parts.map((item, index) => (
          <motion.span
            key={item + '-' + index}
            className='inline-block'
            variants={singleItem}
          >
            {item}
            {mode === 'word' ? '\u00A0' : ''}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}

export default AnimateText


// How to use
// import AnimateText from "./AnimateText.jsx"

{
  /* <AnimateText 
  text="Welcome to My Portfolio!" 
  stagger={0.02}     // chữ hiện nhanh hơn
  delay={0.3}        // bắt đầu sớm hơn
  duration={0.4}     // thời gian mỗi chữ xuất hiện
  mode="letter"      // chữ xuất hiện theo từng chữ (word) hoạc theo từng ký tự (letter)
/> */
}