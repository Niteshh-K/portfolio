import React from "react";
import Timeline from "../Shared/Timeline";
import { experienceData } from "@/utils/constants";

const MemoTimeline = React.memo(Timeline);
const Experience = () => {
  return (
    <div id="experience" className="sectionContainer bg-neutral-900">
      <div className="sectionHeader">Experience</div>
      <MemoTimeline data={experienceData} />
    </div>
  );
};

export default Experience;
