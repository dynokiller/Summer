import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const handleClick = (technology) => {
    console.log("Clicked technology:", technology);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div
            className='w-28 h-28 cursor-pointer'
            key={technology.name}
            onClick={() => handleClick(technology)}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
