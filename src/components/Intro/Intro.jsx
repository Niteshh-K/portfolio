import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const Intro = () => {
  function handlePdfDownload() {
    window.open("/Nitesh_Kumar_Rai_Resume_FS_2025.pdf", "_blank");
    // const link = document.createElement("a");
    // link.href = "/Nitesh_Kumar_Rai_Resume_FS_2025.pdf";
    // link.download = "Nitesh_Kumar_Rai_Resume_FS_2025.pdf";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  }

  return (
    <div className="flex justify-between">
      <div className="h-screen bg-neutral-900  w-full min-h-50 p-10 md:p-20 flex flex-col justify-center ">
        <div className="flex gap-2 mt-7 mx-auto md:mx-0">
          <div className=" flex flex-col gap-2 mt-1.5 items-center">
            <span className="w-2 h-2 rounded-full bg-fuchsia-500"></span>
            <span className="w-1 h-45 bg-gradient-to-b from-purple-600 to-transparent [box-shadow:0px_0px_30px_1px_rgba(137,17,232,0.75)]"></span>
          </div>

          <div className="text-neutral-300 font-bold">
            <span className="text-6xl">Hello,</span>
            <div className="font-extrabold text-[3.5rem] md:text-[7rem]">
              <span className="font-medium"> I'm </span>
              <motion.span className=" bg-linear-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                {"Nitesh.".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="text-neutral-400 font-medium text-2xl"
            >
              {"SOFTWARE ENGINEER | FULL STACK DEVELOPER."}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.2 }}
              className="w-full text-xl text-neutral-200 pt-4 pb-20"
            >
              Coding the Future, Step by Step.
            </motion.p>
            <div className="flex gap-2.5 justify-start pt-6">
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 1.4,
                  ease: "easeInOut",
                }}
                className="buttonStyle"
                onClick={handlePdfDownload}
              >
                Download Resume
              </motion.button>
              <motion.button
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.4,
                  ease: "easeInOut",
                  stiffness: 100,
                }}
                className="buttonStyle"
              >
                <Link href="#about">Know More</Link>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
