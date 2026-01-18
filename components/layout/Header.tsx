"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/admissions", label: "Admission" },
  { href: "/contact", label: "Contacts" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = scrolled
    ? "sticky top-0 z-50 bg-white text-black transition-colors duration-600"
    : "sticky top-0 z-50 text-white";

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={headerClasses + " shadow-lg"}>
      <nav className="flex items-center justify-between px-10 py-6 font-bold">
        <div className="text-2xl font-bold">
          <span className="text-3xl font-bold text-pink-500">V</span>alentino
        </div>
        {isMenuOpen ? (
          <IoClose className="sm:hidden" size={28} onClick={() => setIsMenuOpen(false)} />
        ) : (
          <div className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <GiHamburgerMenu size={24} />
          </div>
        )}

        <ul className="flex hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors hover:text-pink-500 ${isActive(link.href)
                  ? "text-pink-500 border-b-2 border-pink-500 pb-1"
                  : ""
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Button variant="primary">Apply Now</Button>
          </li>
        </ul>

        {/* mobile menu */}
        {isMenuOpen && (
          <ul className="absolute top-20 left-1/2 flex w-[90%] -translate-x-1/2 flex-col gap-4 rounded-xl bg-white px-4 py-6 text-black shadow-lg sm:hidden">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-1 transition-colors hover:text-pink-500 ${isActive(link.href)
                    ? "text-pink-500 font-bold"
                    : ""
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button className="w-full" variant="primary">
                Apply Now
              </Button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
