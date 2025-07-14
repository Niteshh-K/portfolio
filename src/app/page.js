"use client";

import Intro from "@/components/Intro/Intro";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Experience />
      <Contact />
      {/* <div className="h-500 bg-amber-100"></div> */}
    </>
  );
}
