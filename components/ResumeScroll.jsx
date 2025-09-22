"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// Componentes de seção
import AboutSection from "./resume/AboutSection";
import EducationSection from "./resume/EducationSection";
import ExperienceSection from "./resume/ExperienceSection";
import SkillsSection from "./resume/SkillsSection";

// Estilos
import "./resume/resume.css";

gsap.registerPlugin(ScrollTrigger);

const ResumeScroll = () => {
  const resumeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const el = resumeRef.current;
    if (!el) return;

    // Configurar animações para cada seção com ScrollTrigger
    const sections = [
      { ref: aboutRef.current, id: "about" },
      { ref: educationRef.current, id: "education" },
      { ref: experienceRef.current, id: "experience" },
      { ref: skillsRef.current, id: "skills" }
    ];

    const triggers = sections.map(section => {
      if (!section.ref) return null;
      
      return ScrollTrigger.create({
        trigger: section.ref,
        start: "top 70%",
        end: "bottom 20%",
        toggleClass: { targets: section.ref, className: "animate-fadeIn" },
        once: true,
      });
    });

    return () => {
      // Limpar todos os ScrollTriggers ao desmontar
      triggers.forEach(trigger => trigger && trigger.kill());
    };
  }, []);

  return (
    <motion.div
      ref={resumeRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] py-12 xl:py-16"
      id="resume-scroll"
    >
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Meu Perfil</h2>
        
        {/* Seções em sequência vertical */}
        <div className="space-y-32">
          {/* Sobre */}
          <section id="about-section" className="scroll-section">
            <AboutSection forwardedRef={aboutRef} />
          </section>
          
          {/* Formação */}
          <section id="education-section" className="scroll-section">
            <EducationSection forwardedRef={educationRef} />
          </section>
          
          {/* Experiência */}
          <section id="experience-section" className="scroll-section">
            <ExperienceSection forwardedRef={experienceRef} />
          </section>
          
          {/* Skills */}
          <section id="skills-section" className="scroll-section">
            <SkillsSection forwardedRef={skillsRef} />
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeScroll;