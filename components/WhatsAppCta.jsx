import React from "react";
import { Button } from "@/components/ui/button";

const WhatsAppCta = () => {
  return (
    <section className="py-10 flex flex-col items-center text-center gap-6">
      <div className="container mx-10">
      <h2 className="mx-auto text-2xl md:text-3xl font-bold text-white/80 text-center max-w-max">
        Pronto para transformar seu projeto em realidade?<br/> Entre em contato agora mesmo e tenha um parceiro dedicado ao seu sucesso!
      </h2>
      <a
        href="https://wa.me/5511960702307"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2"
      >
        <Button variant="outline" size="lg" className="mt-10 px-10">
          Fale comigo no WhatsApp
        </Button>
      </a>
      </div>
    </section>
  );
};

export default WhatsAppCta;