"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Nav from "./Nav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import ThemeToggler from "@/components/shared/ThemeToggler";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-[#F5EFFF] shadow-lg dark:bg-accent"
          : "py-6 dark:bg-[#121212]"
      } sticky top-0 z-30 transition-all ${pathName === "/" && "bg-[#F5EFFF]"}`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underLineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
