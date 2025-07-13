import React from "react";
import Timeline from "../Shared/Timeline";
import { experienceData } from "@/utils/constants";

const Experience = () => {
  return (
    <div className="sectionContainer bg-neutral-800">
      <div className="sectionHeader">Experience</div>
      <Timeline data={experienceData} />
    </div>
  );
};

export default Experience;
