"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export default function Timeline({ data, offset }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function updateHeight() {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end end"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans px-5 md:px-0 pt-10 "
      ref={containerRef}
    >
      <div ref={ref} className="relative  mx-auto pb-5">
        {data.map((item, index) => (
          <div key={index} className="w-full md:pt-20">
            <div className="sticky flex flex-col pl-10 md:pl-0 md:flex-row  z-5 items-start top-40 self-start">
              <div className="h-10 absolute -left-5 md:left-1 w-10 rounded-full bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 p-2" />
              </div>
              <div className="pl-5.5 md:pl-20 ">
                <h3 className="text-xl md:text-3xl  font-bold text-neutral-500">
                  {item.company}&nbsp;({item.from} - {item.to})
                </h3>
                <span className="text-neutral-400 font-normal text-lg">
                  {item.role}
                </span>
              </div>
              <div className="text-white md:ml-10 py-4 md:w-[80%]">
                {Array.isArray(item.projects)
                  ? item.projects.map((project, idx) =>
                      React.isValidElement(project) ? (
                        React.cloneElement(project, { key: idx })
                      ) : (
                        <div key={idx}>{project}</div>
                      )
                    )
                  : item.projects}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-6 left-0 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
