"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBrain } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { SignInButton } from "./auth/signin";

import { ThemeToggle } from "./themetoggle";
type NavbarProps = {
  isHome?: boolean;
};

export default function Navbar({ isHome }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "About Us", href: "/about" },
  ];

  const navLinksMob = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "About Us", href: "/about" },

    { name: "Login", href: "/login" },
  ];

  return (
    <nav
      className={` ${
        isHome ? "" : "dark:bg-black"
      } absolute top-0    backdrop-blur-xs    left-0 w-full z-20`}
    >
      <nav className="absolute top-0    backdrop-blur-xs    left-0 w-full z-20"></nav>
      <div className="max-w-7xl mx-auto px-2  ">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex text-white items-center  flex-1 gap-2 font-bold text-2xl"
          >
            <FaBrain />
            ThinkEase
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex md:justify-evenly  md:items-center md:flex-1 ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-gray-200 text-xl font-semibold  text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden  md:flex justify-end items-center gap-3 md:flex-1 ">
            <ThemeToggle />
            <SignInButton />
          </div>
          <div className=" flex mx-2 md:hidden">
            {" "}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            <IoMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden h-[100vh] backdrop-blur-md">
          <div className="px-4 py-15 space-y-4">
            {navLinksMob.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block   text-white border-b   px-3 py-2 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
