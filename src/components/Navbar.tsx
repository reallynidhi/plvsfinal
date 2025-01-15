"use client";

import { usePathname } from "next/navigation";
import XLogo from "./icons/XLogo";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 left-0 right-0 flex justify-between items-center px-12 bg-white z-50 py-12">
      <Link href="/#Home" aria-label="Home">
        <div className="w-12">
          <Logo />
        </div>
      </Link>
      <div className="flex items-center gap-6">
        <NavLink
          to="portfolio"
          id="portfolio"
          // onClick={handleClick}
          isActive={pathname.includes("portfolio")}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/blogs"
          id="blog"
          isActive={pathname.includes("blogs")}
          newPage
        >
          Blog
        </NavLink>
        <NavLink
          to="people"
          id="people"
          // onClick={handleClick}
          isActive={pathname.includes("people")}
        >
          People
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
    </nav>
  );
};

export default Navbar;
