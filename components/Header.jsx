"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`py-6 text-white ${
        isSticky
          ? "sticky top-0 z-30 bg-primary shadow-lg transition-all duration-300"
          : ""
      }`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Rafa<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me Button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contato</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
          </div>

      </div>
    </header>
  );
};

export default Header;
