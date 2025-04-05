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
      <main className="flex w-full flex-col items-center justify-center relative">
        <div className="pt-16">
          <AnimateText text="Passion Fuels" className="my-10" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-center justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-grayTheme/75 dark:text-white">
                Biography
              </h2>
              <p className="font-medium ">
                A lone robin perched on a low branch, its melodic song filling
                the air with a sense of tranquil harmony. The scent of damp
                earth and pine needles mingled, creating an earthy fragrance
                that spoke of the ancient woods' timeless beauty.
              </p>
              <p className="my-4 font-medium ">
                A lone robin perched on a low branch, its melodic song filling
                the air with a sense of tranquil harmony. The scent of damp
                earth and pine needles mingled, creating an earthy fragrance
                that spoke of the ancient woods' timeless beauty.
              </p>
              <p className="font-medium ">
                A lone robin perched on a low branch, its melodic song filling
                the air with a sense of tranquil harmony. The scent of damp
                earth and pine needles mingled, creating an earthy fragrance
                that spoke of the ancient woods' timeless beauty.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-grayTheme
            dark:border-white p-8 bg-grayTheme dark:bg-white"
            >
              <div>
                <Image
                  src={assets2.background1}
                  alt=""
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              {/* stats */}
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <div className="inline-block text-7xl font-bold">
                  <AnimationNumbers value={100} />
                  <h2 className="text-xl font-medium capitalize text-grayTheme dark:text-white">
                    Satisfied Clients
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center">
                <div className="inline-block text-7xl font-bold">
                <AnimationNumbers value={100} />
                  <h2 className="text-xl font-medium capitalize text-grayTheme dark:text-white">
                    Satisfied Clients
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center">
                <div className="inline-block text-7xl font-bold">
                <AnimationNumbers value={100} />
                  <h2 className="text-xl font-medium capitalize text-grayTheme dark:text-white">
                    Satisfied Clients
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center">
                <div className="inline-block text-7xl font-bold">
                <AnimationNumbers value={9} />
                  <h2 className="text-xl font-medium capitalize text-grayTheme dark:text-white">
                    Satisfied Clients
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutHeader;
