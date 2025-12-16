"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
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
  console.log(headerClasses);
  return (
    <header className={headerClasses}>
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
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <Link href="/admissions">Admission</Link>
          </li>
          <li>
            <Link href="/contact">Contacts</Link>
          </li>
          <li>
            <Button variant="primary">Apply Now</Button>
          </li>
        </ul>

        {/* mobile menu */}
        {isMenuOpen && (
          <ul className="absolute top-20 left-1/2 flex w-[90%] -translate-x-1/2 flex-col gap-4 rounded-xl bg-white px-4 py-6 text-black shadow-lg sm:hidden">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/courses" onClick={() => setIsMenuOpen(false)}>
                Courses
              </Link>
            </li>
            <li>
              <Link href="/admissions" onClick={() => setIsMenuOpen(false)}>
                Admission
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contacts
              </Link>
            </li>
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
