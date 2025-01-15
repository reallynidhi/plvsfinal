"use client";

import { usePathname } from "next/navigation";
import XLogo from "./icons/XLogo";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { cn } from "@/utils";

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 flex justify-between items-center px-12 bg-white z-50 py-6 md:py-12">
      <Link href="/" aria-label="Home">
        <div className="w-12">
          <Logo />
        </div>
      </Link>
      <div
        className={cn(
          "flex items-center gap-6 flex-col md:flex-row absolute md:relative w-full md:w-auto bg-white/40 backdrop-blur-md left-0 bottom-0 translate-y-full md:translate-y-0 py-10 md:py-0 transition ease-in-out delay-500",
          isOpen ? "-translate-y-full" : "translate-y-full"
        )}
      >
        <NavLink
          to="portfolio"
          id="portfolio"
          onClick={handleClick}
          isActive={pathname.includes("portfolio")}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="people"
          id="people"
          onClick={handleClick}
          isActive={pathname.includes("people")}
        >
          People
        </NavLink>

        <NavLink
          to="/blogs"
          id="blog"
          isActive={pathname.includes("blogs")}
          onClick={handleClick}
          newPage
        >
          Blog
        </NavLink>

        <a
          href="https://x.com/plventurestudio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600"
          aria-label="X (formerly Twitter)"
        >
          <XLogo />
        </a>
        <a
          href="mailto:plvs@protocol.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600"
          aria-label="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm16 2H4v.01L12 12l8-5.99V6zm-8 7L4 7.01V18h16V7.01L12 13z" />
          </svg>
        </a>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden"
      >
        <HamburgerMenuIcon className="text-6xl" />
      </button>
    </nav>
  );
};

export default Navbar;
