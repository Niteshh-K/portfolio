import React from "react";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { UserIcon } from "@/utils/Icons";
import { navItems } from "@/utils/constants";

const Header = () => {
  const headerRef = useRef(null);
  const [current, setCurrent] = useState(-1);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const width = useSpring(useTransform(scrollYProgress, [0, 1], [100, 60]));
  const borderRadius = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 32])
  );

  const widthPercentage = useMotionTemplate`${width}%`;

  return (
    <motion.div
      ref={headerRef}
      style={{
        width: widthPercentage,
        borderRadius: borderRadius,
      }}
      className="w-full bg-gray-200 h-[60px] flex justify-between items-center px-2 fixed inset-0 mx-auto z-10"
    >
      <Image src={UserIcon.src} alt="user-icon" width={50} height={50} />
      <div className="flex">
        {navItems?.map((item, idx) => (
          <Link
            key={item.label}
            href={item.href}
            className="w-full text-center relative py-2 px-3 group rounded-2xl"
            onMouseEnter={() => setCurrent(idx)}
            onMouseLeave={() => setCurrent(-1)}
          >
            {current === idx && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 bg-black z-10 rounded-full px-3 py-4"
              />
            )}
            <div className="text-neutral-500 relative z-20 flex items-center gap-1">
              <span className="md:hidden">{item.icon}</span>
              <span className="hidden md:inline-block font-semibold">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Header;
