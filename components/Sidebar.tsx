"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(sidebarRef.current, { x: "100%" });
    gsap.set(circleRef.current, { x: "100%" });
    gsap.set(contentRef.current, { opacity: 0 });
  }, []);

  const openMenu = () => {
    setOpen(true);
    const tl = gsap.timeline();
    tl.to(sidebarRef.current, { x: "0%", duration: 0.7, ease: "power3.out" })
      .to(circleRef.current, { x: "0%", duration: 0.9, ease: "power3.out" }, "<")
      .to(
        contentRef.current,
        { opacity: 1, duration: 0.4, ease: "power2.out" },
        "<"
      );
  };

  const closeMenu = () => {
    const tl = gsap.timeline({ onComplete: () => setOpen(false) });
    tl.to(contentRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" })
      .to(circleRef.current, { x: "100%", duration: 0.8, ease: "power3.in" }, "<")
      .to(
        sidebarRef.current,
        { x: "100%", duration: 0.8, ease: "power3.in" },
        "<"
      );
  };

  return (
    <>
      {/* ── MOBILE TOGGLE BUTTON ── */}
      <button
        onClick={open ? closeMenu : openMenu}
        aria-label="Toggle menu"
        className="md:hidden fixed top-5 right-6 z-50 flex flex-col gap-1.5 items-end"
      >
        {open ? (
          <span className="text-on-surface text-xl">✕</span>
        ) : (
          <>
            <span className="block w-6 h-0.5 bg-on-surface" />
            <span className="block w-4 h-0.5 bg-on-surface" />
            <span className="block w-5 h-0.5 bg-on-surface" />
          </>
        )}
      </button>

      {/* ── MOBILE OVERLAY ── */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}

      {/* ── MOBILE SIDEBAR ── */}
      <div
        ref={sidebarRef}
        className="md:hidden fixed top-0 right-0 h-[100dvh] w-[300px] z-40 overflow-hidden"
      >
        <div
          ref={circleRef}
          className="fixed inset-0 scale-150 rounded-[50%] bg-surface-container-low z-[-1]"
        />
        <div
          ref={contentRef}
          className="flex flex-col h-full px-10 pt-32 gap-8 font-headline font-bold text-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
