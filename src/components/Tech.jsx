import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import TechCard from "./TechCard";
import { technologies } from "../constants";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const handleMouseEnter = (technology) => {
    setHoveredTech(technology);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <div
            className='w-28 h-28'
            key={technology.name}
            onMouseEnter={() => handleMouseEnter(technology)}
            onMouseLeave={handleMouseLeave}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      {hoveredTech && (
        <div className='mt-10'>
          <TechCard
            name={hoveredTech.name}
            icon={hoveredTech.icon}
            description={hoveredTech.description}
            projects={hoveredTech.projects}
          />
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
