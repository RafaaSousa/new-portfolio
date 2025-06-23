"use client";

import { motion } from "framer-motion";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "João Silva",
    role: "CEO na Startup X",
    text: "O Rafael superou nossas expectativas, entregando soluções inovadoras e com excelente qualidade. Recomendo fortemente!",
  },
  {
    name: "Maria Oliveira",
    role: "CTO na Tech Solutions",
    text: "Profissional dedicado, sempre atento aos detalhes e com ótima comunicação. Nossos projetos evoluíram muito com sua participação!",
  },
  {
    name: "Carlos Souza",
    role: "Product Manager na WebDev Co.",
    text: "O Rafael trouxe ideias criativas e implementou tudo com agilidade e precisão. Excelente parceiro de equipe!",
  },
  {
    name: "Carlos Souza",
    role: "Product Manager na WebDev Co.",
    text: "O Rafael trouxe ideias criativas e implementou tudo com agilidade e precisão. Excelente parceiro de equipe!",
  },
  {
    name: "Carlos Souza",
    role: "Product Manager na WebDev Co.",
    text: "O Rafael trouxe ideias criativas e implementou tudo com agilidade e precisão. Excelente parceiro de equipe!",
  },
  {
    name: "Carlos Souza",
    role: "Product Manager na WebDev Co.",
    text: "O Rafael trouxe ideias criativas e implementou tudo com agilidade e precisão. Excelente parceiro de equipe!",
  },
  {
    name: "Carlos Souza",
    role: "Product Manager na WebDev Co.",
    text: "O Rafael trouxe ideias criativas e implementou tudo com agilidade e precisão. Excelente parceiro de equipe!",
  },
  {
    name: "Carlos Souza",
    role: "Product Manager na WebDev Co.",
    text: "O Rafael trouxe ideias criativas e implementou tudo com agilidade e precisão. Excelente parceiro de equipe!",
  },
];

// Remover SwiperCore.use([Autoplay]);

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-[40vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <h2 className="text-[32px] xl:text-[42px] font-bold text-center text-white mb-10">
          Depoimentos
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 3 },
            640: { slidesPerView: 2 },
          }}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="w-full mySwiper"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * idx, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 max-w-md w-full shadow-lg text-center mx-auto"
              >
                <p className="text-white/80 mb-6 italic">"{item.text}"</p>
                <div className="font-bold text-accent text-lg">{item.name}</div>
                <div className="text-white/50 text-sm">{item.role}</div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonials;