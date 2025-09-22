"use client";

import React from "react";

// Dados da seção About
const about = {
  title: "Sobre",
  description:
    "Olá! Sou Rafael Sousa, um desenvolvedor apaixonado por criar soluções tecnológicas impactantes e experiências digitais memoráveis. Com mais de 3 anos de experiência, tenho atuado em projetos que vão desde desenvolvimento frontend, utilizando React.js e Next.js, até a construção de backends robustos com Node.js. Valorizo inovação, usabilidade e performance, buscando sempre elevar o padrão do que entrego. Quando não estou codificando, você pode me encontrar explorando novas tecnologias, praticando atividades físicas ou aperfeiçoando meu inglês. Vamos transformar ideias em realidade juntos?",
  info: [
    { fieldName: "Nome", fieldValue: "Rafael Sousa" },
    { fieldName: "Email", fieldValue: "rafael.p.sousa@hotmail.com" },
    { fieldName: "Tel.", fieldValue: "(+55) 11 96070 2307" },
    { fieldName: "Experiência", fieldValue: "3+ Anos" },
  ],
};

const AboutSection = ({ forwardedRef }) => {
  return (
    <div id="about" ref={forwardedRef} className="flex flex-col gap-[30px] animate-fadeIn">
      <div className="flex flex-col gap-[30px] text-justify">
        <h3 className="text-4xl font-bold text-center xl:text-left">{about.title}</h3>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12">
        {/* Coluna da descrição */}
        <div className="flex flex-col gap-6">
          <p className="text-white/60 leading-relaxed">{about.description}</p>
        </div>
        
        {/* Coluna das informações */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
          {about.info.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 border-b border-border pb-4">
              <div className="text-white/60">{item.fieldName}</div>
              <div className="font-medium text-white">{item.fieldValue}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;