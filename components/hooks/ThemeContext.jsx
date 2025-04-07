"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Tạo Context
const ThemeContext = createContext();

// Provider để bao bọc toàn bộ ứng dụng
export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [hasHydrated, setHasHydrated] = useState(false);

  // Kiểm tra theme trong localStorage khi load trang
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
    setHasHydrated(true);
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

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, hasHydrated }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook để các component khác có thể sử dụng
export function useTheme() {
  return useContext(ThemeContext);
}
