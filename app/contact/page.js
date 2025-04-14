"use client";
import React, { useState } from "react";
import {
  IoIosSend,
  IoIosPerson,
  IoIosCalendar,
  IoIosPin,
  IoIosMail,
  IoIosCall,
  IoMdGlobe,
} from "react-icons/io";
import { motion } from "framer-motion";
import AnimateText from "@/components/AnimateText";

// Data
const personalInfo = [
  {
    label: "Full Name",
    value: "Nguyen Gia Bao",
    icon: <IoIosPerson />,
  },
  {
    label: "Birthday",
    value: "April 30, 2002",
    icon: <IoIosCalendar />,
  },
  {
    label: "Address",
    value: "Ho Chi Minh City",
    icon: <IoIosPin />,
  },
  {
    label: "Email",
    value: "baosum01@example.com",
    icon: <IoIosMail />,
  },
  {
    label: "Phone",
    value: "+84 34 898 198",
    icon: <IoIosCall />,
  },
  {
    label: "Nationality",
    value: "VietNam",
    icon: <IoMdGlobe />,
  },
];

// Motion variants
const fadeIn = (direction = "up", delay = 0.2) => {
  const dir = {
    left: { x: -40, opacity: 0 },
    right: { x: 40, opacity: 0 },
    up: { y: -40, opacity: 0 },
  };
  return {
    hidden: dir[direction],
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };
};

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "02b87140-e541-46a8-9a5a-5df7af53f1b0");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult(`Error: ${data.message}`);
    }
  };

  return (
    <div id="contact" className="w-full px-6 md:px-[15%] py-20 scroll-mt-20">
      <AnimateText mode="word">
        <p className="mt-10 mb-10 inline-block w-full text-grayTheme dark:text-white text-center font-bold capitalize text-4xl md:text-7xl">
          Keep In Touch
        </p>
      </AnimateText>

      <div className="flex flex-col lg:flex-row gap-10 relative">
        {/* Contact Form */}
        <form onSubmit={onSubmit} className="basis-full lg:basis-1/2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.input
              variants={fadeIn("left", 0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              className="p-3 border text-darkTheme/70 dark:text-gray-300 border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white"
            />
            <motion.input
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="p-3 border text-darkTheme/70 dark:text-gray-300 border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white"
            />
          </div>

          <motion.textarea
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            name="message"
            rows="5"
            placeholder="Enter your message"
            required
            className="w-full p-4 border text-darkTheme/70 dark:text-gray-300 border-gray-500 rounded-md bg-white dark:bg-darkHover/30 dark:border-white"
          ></motion.textarea>

          <p className="text-center text-green-500">{result}</p>

          <motion.button
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            type="submit"
            className="p-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:hover:bg-darkHover"
          >
            Submit now
            <IoIosSend className="w-4" />
          </motion.button>
        </form>

        {/* Vertical Divider */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block w-[1.5px] bg-gray-500 dark:bg-white/80
    h-auto absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"
        />

        {/* Contact Info */}
        <div className="basis-full lg:basis-1/2 flex flex-col items-center text-gray-700 dark:text-gray-300">
          <h2 className="font-bold text-2xl md:text-3xl mb-6 text-center">
            Bonus Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personalInfo.map((item, index) => (
              <motion.div
                key={item.label}
                variants={fadeIn("right", index * 0.2 + 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <InfoItem
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// InfoItem Component
const InfoItem = ({ label, value, icon }) => (
  <div className="flex flex-col items-center text-center gap-4">
    <span className="text-2xl dark:text-white">{icon}</span>
    <div>
      <p className="text-sm font-semibold">{label}</p>
      <p>{value}</p>
    </div>
  </div>
);

export default Contact;
