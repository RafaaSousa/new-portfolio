"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

// Dados da seção Education
const education = {
  title: "Formação Acadêmica",
  description:
    "Minha formação e certificações demonstram meu compromisso em evoluir constantemente na área de tecnologia.",
  items: [
    { institution: "Alura", degree: "Imersão Agentes de IA", duration: "Ago 2025" },
    { institution: "Alura", degree: "Imersão DevOps", duration: "Jun 2025" },
    { institution: "Udemy", degree: "Arquitetura de Software e Design de Sistemas", duration: "Fev 2025" },
    { institution: "Udemy", degree: "Engenharia de Software", duration: "Jan 2025" },
    { institution: "Alura", degree: "Imersão Back-end", duration: "Dez 2024" },
    { institution: "Cubos Academy", degree: "Product Design", duration: "Out 2024" },
    { institution: "Conquer", degree: "Inteligência Emocional 4.0", duration: "Out 2024" },
    { institution: "Alura", degree: "Imersão Front-End", duration: "Fev 2024" },
    { institution: "Rocketseat", degree: "NLW Expert - React", duration: "Fev 2024" },
    { institution: "Intuix Academy", degree: "LGPD", duration: "Ago 2023" },
    { institution: "Intuix Academy", degree: "ESG", duration: "Ago 2023" },
    { institution: "DIO", degree: "Formação JavaScript", duration: "Jul 2023" },
    { institution: "DIO", degree: "Git e GitHub", duration: "Jul 2023" },
    { institution: "ITCERTS", degree: "DevOps Essentials", duration: "Set 2018" },
    { institution: "Faculdade Sumaré", degree: "Tecnologia de Banco de Dados", duration: "Concluído 2017" },
  ],
};

const EducationSection = ({ forwardedRef }) => {
  return (
    <div ref={forwardedRef} className="flex flex-col gap-[30px] animate-fadeIn">
      <div className="flex flex-col gap-[30px] text-justify">
        <h3 className="text-4xl font-bold text-center xl:text-left">{education.title}</h3>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-12">
        {/* Coluna da descrição */}
        <div className="xl:col-span-1">
          <p className="text-white/60 leading-relaxed">{education.description}</p>
        </div>
        
        {/* Coluna da lista de formação */}
        <div className="xl:col-span-2">
          <ScrollArea className="h-[350px] md:h-[400px] lg:h-[450px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {education.items.map((item, index) => (
                <div key={index} className="flex gap-4 border border-border/20 rounded-lg p-4 bg-[#232329]/30 hover:bg-[#232329]/50 transition-colors">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-col gap-2">
                      <h4 className="font-semibold text-white">{item.degree}</h4>
                      <div className="text-sm text-accent">{item.duration}</div>
                    </div>
                    <div className="text-white/60">{item.institution}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;