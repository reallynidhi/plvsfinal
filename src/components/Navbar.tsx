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
          to="/portfolio"
          id="portfolio"
          onClick={handleClick}
          isActive={pathname.includes("portfolio")}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/blog"
          id="blog"
          onClick={handleClick}
          isActive={pathname.includes("blog")}
        >
          Blog
        </NavLink>
        <NavLink
          to="/people"
          id="people"
          onClick={handleClick}
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
      </div>
    </nav>
  );
};

export default Navbar;
