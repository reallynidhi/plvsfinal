import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 py-8 px-8 md:px-24 border-t bg-white-800 text-black h-40 flex items-center justify-between">
      <div className="flex flex-col items-start">
        <div className="w-12 mb-2">
          <Logo />
        </div>

        <div className="text-sm text-gray-400 mb-2">
          © PROTOCOL LABS VENTURE STUDIO 2024
        </div>
        <div>
          <Link
            href="/disclosure"
            className="text-sm text-gray-400 underline hover:text-gray-700"
          >
            IMPORTANT DISCLOSURES
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
