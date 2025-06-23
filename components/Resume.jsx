"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "Sobre",
  description:
    "Olá! Sou Rafael Sousa, um desenvolvedor apaixonado por criar soluções tecnológicas impactantes e experiências digitais memoráveis. Com mais de 3 anos de experiência, tenho atuado em projetos que vão desde desenvolvimento frontend, utilizando React.js e Next.js, até a construção de backends robustos com Node.js. Valorizo inovação, usabilidade e performance, buscando sempre elevar o padrão do que entrego. Quando não estou codificando, você pode me encontrar explorando novas tecnologias, praticando atividades físicas, ou aperfeiçoando meu inglês. Vamos transformar ideias em realidade juntos?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rafael Sousa",
    },
    {
      fieldName: "Tel.",
      fieldValue: "(+55) 11 96070 2307",
    },
    {
      fieldName: "Experiencia",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasil",
    },
    {
      fieldName: "Email",
      fieldValue: "rafael.p.sousa@hotmail.com",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Português, Inglês",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experiencia Profissional",
  description:
    "Minha trajetória profissional reflete dedicação e evolução contínua na área de desenvolvimento de software. Durante minha atuação na Almeida Santos Advogados, adquiri habilidades em lidar com sistemas complexos e demandas críticas, aprimorando minha capacidade de solucionar problemas com eficiência e trabalho em equipe. Recentemente, tenho me dedicado a projetos em Next.js, Tailwind CSS e Node.js, desenvolvendo soluções white-label e sites que impactam positivamente o mercado. Além disso, estou imerso em projetos de plataformas web robustas com foco em usabilidade, performance e segurança. Minha experiência abrange tanto o desenvolvimento frontend quanto a estruturação de backends organizados e seguros, com o objetivo de entregar produtos que superem as expectativas do usuário final.",
  items: [
    {
      company: "Projeto Vitor Garcia",
      position: "Desenvolvedor Full Stack",
      duration: "2025 - 1 meses",
    },
    {
      company: "Projeto Psic Mariana Trancoso",
      position: "Desenvolvedor Full Stack",
      duration: "2025 - 1 meses",
    },
    {
      company: "Projeto Flora Canaa",
      position: "Desenvolvedor Full Stack",
      duration: "2025 - 1 meses",
    },
    {
      company: "Projeto IVAA",
      position: "Desenvolvedor Full Stack",
      duration: "2025 - 3 meses",
    },
    {
      company: "Projeto Bolsa Livre",
      position: "Desenvolvedor Frontend",
      duration: "2024 - 3 meses",
    },
    {
      company: "Projeto White Label",
      position: "Desenvolvedor Frontend",
      duration: "2024 - 3 meses",
    },
    {
      company: "Projeto Crypto Wallet",
      position: "Desenvolvedor Full Stack",
      duration: "2023 - 6 meses",
    },
    {
      company: "Freelance",
      position: "Desenvolvedor Full Stack",
      duration: "2023 - Presente",
    },
    {
      company: "Almeida Santos Advogados",
      position: "Analista de Sistemas",
      duration: "2017 - 2024",
    },
  ],
};


// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Formação Acadêmica",
  description:
    "Minha formação e certificações destacam meu compromisso em evoluir continuamente na área de tecnologia e desenvolvimento de software. Com experiências que abrangem inteligência emocional, front-end, DevOps e especializações em JavaScript, estou sempre focado em aprimorar minhas habilidades e oferecer soluções robustas.",
  items: [
    {
      institution: "Udemy",
      degree: "Engenharia de Software",
      duration: "Janeiro de 2025",
    },
    {
      institution: "Alura",
      degree: "Imersão Back-end",
      duration: "Dezembro de 2024",
    },
    {
      institution: "Cubo Academy",
      degree: "Product Design",
      duration: "Outubro de 2024",
    },
    {
      institution: "Conquer",
      degree: "Inteligência Emocional 4.0",
      duration: "Outubro de 2024",
    },
    {
      institution: "Alura",
      degree: "Imersão Front-End",
      duration: "Fevereiro de 2024",
    },
    {
      institution: "Rocketseat",
      degree: "NLW Expert trilha de React",
      duration: "Fevereiro de 2024",
    },
    {
      institution: "Intuix Academy",
      degree: "Lei Geral de Proteção de Dados (LGPD)",
      duration: "Agosto de 2023",
    },
    {
      institution: "Intuix Academy",
      degree: "ESG - Environmental, Social and Governance",
      duration: "Agosto de 2023",
    },
    {
      institution: "DIO",
      degree: "Formação JavaScript",
      duration: "Julho de 2023",
    },
    {
      institution: "DIO",
      degree: "Git e GitHub",
      duration: "Julho de 2023",
    },
    {
      institution: "ITCERTS",
      degree: "DevOps Essentials",
      duration: "Setembro de 2018",
    },
    {
      institution: "Faculdade Sumaré",
      degree: "Tecnologia de Banco de Dados",
      duration: "Concluído em 2017",
    },
  ],
};



//skills data
const skills = {
  title: "Skills",
  description:
    "Minha jornada profissional me permitiu adquirir uma ampla gama de habilidades em desenvolvimento front-end e back-end, focando em tecnologias modernas e experiência do usuário. Sou proficiente em HTML5 e CSS3 para construção de layouts responsivos e acessíveis. Utilizo JavaScript como base sólida para desenvolvimento dinâmico, enquanto React.js e Next.js são minhas especialidades para criar interfaces eficientes e escaláveis. Com Tailwind CSS, garanto um design moderno e consistente. No backend, minha experiência com Node.js possibilita a construção de APIs robustas. Além disso, utilizo Figma para prototipagem e design centrado no usuário, garantindo uma experiência visual de alta qualidade.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const resumeRef = useRef(null);

  useEffect(() => {
    const el = resumeRef.current;
    if (!el) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    timeline
      .fromTo(
        el.querySelector('.tabs-list'),
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }
      )
      .fromTo(
        el.querySelector('.tabs-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        el.querySelectorAll('.skill-item'),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        },
        '-=0.2'
      );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <motion.div
      ref={resumeRef}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      id="resume"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="tabs-list flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">Sobre</TabsTrigger>
            <TabsTrigger value="education">Formação acadêmica</TabsTrigger>
            <TabsTrigger value="experience">Experiencia Profissional</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="tabs-content min-h-[70vh] w-full">
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-justify"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-center xl:text-left">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-sm">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-justify">
                <h3 className="text-4xl font-bold text-center xl:text-left">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-justify">
                <h3 className="text-4xl font-bold text-center xl:text-left">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-justify">
                  <h3 className="text-4xl font-bold text-center xl:text-left">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index} className="skill-item">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
