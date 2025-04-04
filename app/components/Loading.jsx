"use client"
import { useEffect } from "react";
import { useState } from "react";

export default function LoadingScreen ({ onComplete }) {
  const [text, setText] = useState("");
  const fullText = "<Gia Bao />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 text-gray-100 flex flex-col items-center justify-center">
      {/* Text effect */}
      <div className="mb-6 text-4xl md:text-5xl font-mono font-bold tracking-wider">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* Loading bar */}
      <div className="w-[200px] md:w-[250px] h-[6px] bg-gray-700 rounded-full overflow-hidden relative shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 animate-loading-bar"></div>
      </div>
    </div>
  );
};
