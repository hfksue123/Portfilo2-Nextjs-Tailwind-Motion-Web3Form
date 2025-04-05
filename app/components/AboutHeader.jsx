import AnimateText from "@/components/AnimateText";
import Image from "next/image";
import assets2 from "@/assets/assets";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const AnimationNumbers = ({ value }) => {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState("0000");
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const totalFrames = 60;
    const settleStart = 30; // Bắt đầu làm mượt từ frame 30
    const settleFrames = totalFrames - settleStart;

    const interval = setInterval(() => {
      frame++;

      if (frame < settleStart) {
        // Giai đoạn random hỗn loạn
        const random = Math.floor(Math.random() * 9999)
          .toString()
          .padStart(4, "0");
        setDisplayValue(random);
      } else if (frame <= totalFrames) {
        // Giai đoạn chuyển mượt về số thật bằng cách mix giữa số thật và random
        const mix = (i) => {
          if (i < 4 - (frame - settleStart)) {
            return Math.floor(Math.random() * 10);
          } else {
            return value.toString().padStart(4, "0")[i];
          }
        };

        const mixed = Array(4)
          .fill(0)
          .map((_, i) => mix(i))
          .join("");

        setDisplayValue(mixed);
      } else {
        // Kết thúc → về đúng số
        setDisplayValue(value.toString().padStart(4, "0"));
        clearInterval(interval);
      }
    }, 30); // speed

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="tabular-nums font-mono transition-all duration-200 ease-out"
    >
      {displayValue}
    </span>
  );
};

// Đoạn code này increase number từ 0 -> value
// import React, { useEffect, useRef } from "react";
// import { useInView, useMotionValue, useSpring } from "framer-motion";

// const AnimationNumbers = ({ value }) => {
//   const ref = useRef(null);
//   const motionValue = useMotionValue(0);
//   const springValue = useSpring(motionValue, {
//     damping: 25,
//     stiffness: 100,
//   });

//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (isInView) {
//       motionValue.set(value);
//     }
//   }, [isInView, value, motionValue]);

//   useEffect(() => {
//     const unsubscribe = springValue.on("change", (latest) => {
//       if (ref.current && latest.toFixed(0) <= value) {
//         ref.current.textContent = latest.toFixed(0);
//       }
//     });

//     return () => unsubscribe(); // cleanup
//   }, [springValue, value]);

//   return <span ref={ref} />;
// };

const AboutHeader = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <div className="w-full max-w-7xl pt-16">
          <AnimateText text="Passion Fuels" className="my-10" mode="word"/>
          <div className="flex flex-col lg:flex-row gap-8 w-full">
  {/* BIOGRAPHY */}
  <div className="flex-1 flex flex-col items-center lg:items-start justify-start">
    <h2 className="mb-4 text-lg font-bold uppercase text-grayTheme/75 dark:text-white">
      Biography
    </h2>
    <p className="font-medium mb-4">
      &#8901;&nbsp;&nbsp;&nbsp; A lone robin perched on a low branch, its melodic song
      filling the air with a sense of tranquil harmony...
    </p>
    <p className="font-medium mb-4">
      &#8901;&nbsp;&nbsp;&nbsp; A lone robin perched on a low branch, its melodic song
      filling the air with a sense of tranquil harmony...
    </p>
    <p className="font-medium">
      &#8901;&nbsp;&nbsp;&nbsp; A lone robin perched on a low branch, its melodic song
      filling the air with a sense of tranquil harmony...
    </p>
  </div>

  {/* IMAGE */}
  <div className="flex-1 relative h-max rounded-2xl border border-solid border-grayTheme dark:border-white bg-grayTheme dark:bg-white">
    <Image
      src={assets2.background1}
      alt=""
      className="w-full h-auto rounded-2xl"
    />
  </div>

  {/* STATS */}
  <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-8 items-center text-right">
    {[100, 100, 100, 9].map((val, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center justify-center"
      >
        <div className="inline-block text-2xl md:text-5xl font-bold">
          <AnimationNumbers value={val} />
        </div>
        <h2 className="text-sm md:text-lg capitalize text-grayTheme dark:text-white">
          Satisfied Clients
        </h2>
      </div>
    ))}
  </div>
</div>

        </div>
      </main>
    </>
  );
};

export default AboutHeader;
