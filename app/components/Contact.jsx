import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
// Send email
const Contact = ({isDarkMode}) => {
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
    <div>
      <div id="contact" className="w-full px-[12%] py-0 lg:py-10 scroll-mt-10">
        <h4 className="text-center mb-2 text-lg">Email me!</h4>
        <h2 className="text-center text-5xl">Wanna keep contact?</h2>
      </div>

      <form onSubmit={onSubmit} className="max-w-2xl mx-10 lg:mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="p-3 border border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            className="p-3 border border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white"
          />
        </div>
        <textarea
          name="message"
          rows="3"
          placeholder="Enter your message"
          required
          className="w-full p-4 border border-gray-500 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white"
        ></textarea>
        <p className="text-center">{result}</p>
        <button
          type="submit"
          className="p-3 px-8 mb-10 w-max flex items-center justify-between gap-2
        bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 outline-none border-[0.5px]
          border-gray-400 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover cursor:pointer"
        >
          Submit now{" "}
          <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_white} alt="" className="w-4" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
