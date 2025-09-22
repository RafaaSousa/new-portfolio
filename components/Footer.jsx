"use client"

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-8 px-4 bg-white/5 border-t border-white/10 text-center mt-16"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <span className="text-white/70 text-sm">© 2024 Rafael Sousa. Todos os direitos reservados.</span>
          <a href="mailto:rafael.p.sousa@hotmail.com" className="text-accent hover:underline text-sm transition-colors duration-200">rafael.p.sousa@hotmail.com</a>
        </div>
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/RafaaSousa" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors duration-200">GitHub</a>
          <a href="https://www.linkedin.com/in/rafael-p-sousa" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors duration-200">LinkedIn</a>

        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
