"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

// Dados da seção Experience
const experience = {
  title: "Experiência Profissional",
  description:
    "Minha trajetória profissional reflete dedicação e evolução contínua na área de desenvolvimento de software. Trabalhei em projetos desafiadores que me permitiram lidar com sistemas complexos, entregando soluções de alta performance e escalabilidade. Atualmente, foco no desenvolvimento frontend com React e Next.js, aliado à construção de backends robustos com Node.js.",
  items: [
    { company: "Projeto Wall Arcanjo", position: "Desenvolvedor Full Stack", duration: "2025 - 2 mês" },
    { company: "Projeto Vitor Garcia", position: "Desenvolvedor Full Stack", duration: "2025 - 1 mês" },
    { company: "Projeto Psic Mariana Trancoso", position: "Desenvolvedor Full Stack", duration: "2025 - 1 mês" },
    { company: "Projeto Flora Canaa", position: "Desenvolvedor Full Stack", duration: "2025 - 1 mês" },
    { company: "Projeto IVAA", position: "Desenvolvedor Full Stack", duration: "2025 - 3 meses" },
    { company: "Projeto Harmony Coffee", position: "Desenvolvedor Full Stack", duration: "2024 - 1 mês" },
    { company: "Projeto Bolsa Livre", position: "Desenvolvedor Frontend", duration: "2024 - 3 meses" },
    { company: "Projeto White Label", position: "Desenvolvedor Frontend", duration: "2024 - 3 meses" },
    { company: "Projeto Crypto Wallet", position: "Desenvolvedor Full Stack", duration: "2023 - 6 meses" },
    { company: "Freelance", position: "Desenvolvedor Full Stack", duration: "2023 - Presente" },
    { company: "Almeida Santos Advogados", position: "Analista de Sistemas", duration: "2017 - 2024" },
  ],
};

const ExperienceSection = ({ forwardedRef }) => {
  return (
    <div ref={forwardedRef} className="flex flex-col gap-[30px] animate-fadeIn">
      <div className="flex flex-col gap-[30px] text-justify">
        <h3 className="text-4xl font-bold text-center xl:text-left">{experience.title}</h3>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-12">
        {/* Coluna da descrição */}
        <div className="xl:col-span-1">
          <p className="text-white/60 leading-relaxed">{experience.description}</p>
        </div>
        
        {/* Coluna da lista de experiências */}
        <div className="xl:col-span-2">
          <ScrollArea className="h-[350px] md:h-[400px] lg:h-[450px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {experience.items.map((item, index) => (
                <div key={index} className="flex gap-4 border border-border/20 rounded-lg p-4 bg-[#232329]/30 hover:bg-[#232329]/50 transition-colors">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-col gap-2">
                      <h4 className="font-semibold text-white">{item.position}</h4>
                      <div className="text-sm text-accent">{item.duration}</div>
                    </div>
                    <div className="text-white/60">{item.company}</div>
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

export default ExperienceSection;