"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "Sobre",
    path: "#about",

  },
  {
    name: "Projetos",
    path: "#work",
  },
  {
    name: "Depoimentos",
    path: "#testimonials",
  },
];

const Nav = () => {
  const pathname = usePathname();

  const handleSmoothScroll = (e, path) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(path);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isAnchor = link.path.startsWith("#");
        return (
          <Link
            href={link.path}
            key={index}
            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
            onClick={isAnchor ? (e) => handleSmoothScroll(e, link.path) : undefined}
            scroll={false}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
