"use client";

import React from "react";
import { FaUser, FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";

const ResumeNavigation = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: "about", icon: <FaUser />, label: "Sobre" },
    { id: "education", icon: <FaGraduationCap />, label: "Formação" },
    { id: "experience", icon: <FaBriefcase />, label: "Experiência" },
    { id: "skills", icon: <FaCode />, label: "Skills" },
  ];

  return (
    <nav className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-4 animate-fadeIn">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all duration-300 ${activeSection === item.id
            ? "bg-accent text-accent-foreground"
            : "hover:bg-accent/10 text-muted-foreground hover:text-accent-foreground"
            }`}
        >
          <span className="text-lg">{item.icon}</span>
          <span className="font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default ResumeNavigation;