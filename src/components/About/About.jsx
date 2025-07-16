import React from "react";
import { motion } from "framer-motion";
import { techStack } from "@/utils/constants";
import dynamic from "next/dynamic";
import Image from "next/image";
const DeveloperIllustration = dynamic(
  () => import("../Shared/DeveloperIllustration"),
  { ssr: false }
);

const About = () => {
  return (
    <div id="about" className="sectionContainer bg-black">
      <h1 className="sectionHeader">About Me</h1>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center ">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, ease: "easeInOut", delay: 0.5 },
          }}
          viewport={{ once: true }}
          className="mt-10 w-full overflow-hidden md:flex-2/3"
        >
          <DeveloperIllustration />
        </motion.div>
        <div className="w-full leading-8 pt-15 text-justify">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, delay: 0.5 },
            }}
            viewport={{ once: true }}
            // transition={{ duration: 0.3, delay: 0.5 }}
            className="text-neutral-200 text-2xl font-semibold "
          >
            Who I Am
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, delay: 0.8 },
            }}
            viewport={{ once: true }}
            // transition={{ duration: 0.3, delay: 0.8 }}
            className="text-neutral-400 text-md mt-4"
          >
            I’m a full-stack developer with 3+ years of experience building
            scalable and user-friendly web applications. I enjoy working across
            the stack—bringing ideas to life through clean code, thoughtful
            design, and efficient systems. I’m passionate about solving real
            problems, improving user experience, and continuously growing as a
            developer.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, delay: 1.1 },
            }}
            viewport={{ once: true }}
            // transition={{ duration: 0.3, delay: 1.1 }}
            className="text-neutral-400 text-md mt-4 hidden md:block"
          >
            My journey in software development has been driven by a passion for
            technology and a desire to create impactful solutions. I thrive in
            collaborative environments, where I can share knowledge and learn
            from others. Whether it’s building robust backends or crafting
            intuitive frontends, I take pride in delivering high-quality work
            that meets user needs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, delay: 1.4 },
            }}
            viewport={{ once: true }}
            // transition={{ duration: 0.3, delay: 1.4 }}
            className="text-neutral-400 text-md mt-4 hidden md:block  "
          >
            Outside of coding, I enjoy exploring new technologies, contributing
            to open-source projects, and staying updated with industry trends. I
            believe in the power of community and am always eager to connect
            with fellow developers.
          </motion.p>
        </div>
      </div>
      <h2 className="text-neutral-200 text-2xl font-semibold mt-10">
        Tech Stack
      </h2>
      <p className="text-neutral-400 text-md mt-4">
        I specialize in a wide range of technologies, including:
      </p>

      <div className="grid grid-cols-3 md:grid-cols-7 gap-4 justify-between pt-5">
        {techStack.map((tech, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={tech.icon.src}
              className="object-cover object-center w-full bg-neutral-200 rounded-xl"
              alt={tech.title}
              width={70}
              height={50}
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
