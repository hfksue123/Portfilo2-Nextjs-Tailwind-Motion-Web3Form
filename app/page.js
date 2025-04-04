"use client";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Loading from "./components/Loading"; // Import Loading

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  // Hiệu ứng loading khi trang load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Giả lập load trong 3s
    return () => clearTimeout(timer);
  }, []);

  // Kiểm tra theme trong localStorage
  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // Cập nhật class cho HTML khi theme thay đổi
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [isDarkMode]);

  return loading ? (
    <Loading onComplete={() => setLoading(false)} />
  ) : (
    <>
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </>
  );
}
