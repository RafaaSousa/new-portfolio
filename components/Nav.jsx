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
    path: "/#about",

  },
  {
    name: "Projetos",
    path: "/#work",
  },
  {
    name: "Depoimentos",
    path: "/#testimonials",
  },
];

const Nav = () => {
  const pathname = usePathname();

  const handleSmoothScroll = (e, path) => {
    const hash = path.includes('#') ? `#${path.split('#')[1]}` : path;
    if (hash.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const hasHash = link.path.includes("#");
        return (
          <Link
            href={link.path}
            key={index}
            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
            onClick={hasHash && pathname === "/" ? (e) => handleSmoothScroll(e, link.path) : undefined}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
