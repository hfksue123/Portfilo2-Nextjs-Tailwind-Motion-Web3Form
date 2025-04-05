"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/hooks/ThemeContext"; // Import useTheme
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Loading from "./components/Loading";

export default function Home() {
  const { isDarkMode } = useTheme(); // Nhận state từ Context
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loading onComplete={() => setLoading(false)} />
  ) : (
    <>
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </>
  );
}
