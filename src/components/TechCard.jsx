import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const TechCard = ({ name, icon, description, projects }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    variants={fadeIn("right", "spring", 0, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  >
    <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
      <img
        src={icon}
        alt={name}
        className='w-16 h-16 object-contain'
      />
      <h3 className='text-white text-[20px] font-bold text-center'>
        {name}
      </h3>
      <p className='text-white text-[14px] text-center'>
        {description}
      </p>
      <p className='text-white text-[14px] text-center'>
        <strong>Projects:</strong> {projects}
      </p>
    </div>
  </motion.div>
);

export default TechCard;
