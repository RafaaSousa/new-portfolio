"use client";

import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// Dados da seção Skills
const skills = {
  title: "Skills",
  description:
    "Tenho experiência sólida em tecnologias modernas de frontend e backend, garantindo performance, usabilidade e escalabilidade.",
  skillList: [
    { icon: <FaHtml5 />, name: "html 5" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaReact />, name: "react.js" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <FaNodeJs />, name: "node.js" },
    { icon: <FaFigma />, name: "figma" },
  ],
};

const SkillsSection = ({ forwardedRef }) => {
  return (
    <div ref={forwardedRef} className="flex flex-col gap-[30px] animate-fadeIn">
      <div className="flex flex-col gap-[30px] text-justify">
        <h3 className="text-4xl font-bold text-center xl:text-left">{skills.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {skills.description}
        </p>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
        {skills.skillList.map((skill, index) => (
          <li key={index} className="skill-item">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                    {React.isValidElement(skill.icon) ? React.cloneElement(skill.icon, { size: 48 }) : null}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="capitalize">{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;