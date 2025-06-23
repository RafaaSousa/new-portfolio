"use client";

import Link from "next/link";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+55 11) 96070 2307",
    live: "https://wa.link/9y2qro",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "rafael.p.sousa@hotmail.com",
    live: "mailto: rafael.p.sousa@hotmail.com",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    description: "RafaaSousa",
    live: "https://www.github.com/RafaaSousa",
  },
  {
    icon: <FaLinkedinIn />,
    title: "LinkedIn",
    description: "Rafael Sousa",
    live: "https://www.linkedin.com/in/rafael-p-sousa",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Atibaia - SP",
    live: "https://www.google.com/maps/place/Atibaia,+SP/@-23.1228775,-46.6412251,12z/data=!3m1!4b1!4m6!3m5!1s0x94cec11f46f1007d:0xc885a2d1bf078e37!8m2!3d-23.1155873!4d-46.5532067!16zL20vMDJ2X2N4?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
          
          {/* info */}
          <div className="flex items-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col xl:grid xl:grid-cols-3 gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-10">
                    <div className="flex">
                    <Link href={item.live} target="_blank" className="flex items-center gap-3">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
    </motion.section>
  );
};

export default Contact;
