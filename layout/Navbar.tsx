"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import ThemeToggle from "../components/ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home", icon: "home" },
  { label: "About", href: "#about", icon: "person" },  
  { label: "Experience", href: "#stacks", icon: "history_edu" },
  { label: "Projects", href: "#projects", icon: "terminal" },
  { label: "Contact", href: "#contact", icon: "alternate_email" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const sidebarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(sidebarRef.current, { x: "-100%" });
    gsap.set(contentRef.current, { opacity: 0, x: -20 });
  }, []);

  const openMenu = () => {
    setIsOpen(true);
    const tl = gsap.timeline();
    tl.to(sidebarRef.current, { x: "0%", duration: 0.5, ease: "expo.out" })
      .to(contentRef.current, { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }, "-=0.2");
  };

  const closeMenu = () => {
    const tl = gsap.timeline({ onComplete: () => setIsOpen(false) });
    tl.to(contentRef.current, { opacity: 0, x: -20, duration: 0.3, ease: "power2.in" })
      .to(sidebarRef.current, { x: "-100%", duration: 0.4, ease: "expo.in" }, "-=0.1");
  };

  // Thêm vào trong Navbar component
  useEffect(() => {
    const observerOptions = {
      root: null,
      // rootMargin: "0px" sẽ kích hoạt khi chạm mép màn hình
      // -20% ở dưới và -40% ở trên giúp việc active chính xác hơn khi section nằm giữa màn hình
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Lấy ID của section đang hiện hữu và set active
          setActiveLink(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Quan sát tất cả các section có ID tương ứng với navLinks
    navLinks.forEach((link) => {
      const sectionId = link.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── MAIN NAVBAR ── */}
      <nav className="fixed top-0 w-full z-[60] bg-main-bg/50 backdrop-blur-xl py-3 shadow-lg border-b border-primary/10">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8">
          <div
            className="logo-container relative z-[70] text-2xl font-headline font-bold tracking-tighter text-primary flex items-center gap-2 cursor-pointer group"
            onClick={isOpen ? closeMenu : openMenu}
          >
            <img
              src={isOpen ? "/LemonAssets/General/icon/LemonBreak.png" : "/LemonAssets/General/icon/Lemon.png"}
              className={`w-8 h-8 object-contain transition-all duration-500 ${isOpen ? "rotate-180 scale-125" : "group-hover:rotate-12"}`}
              alt="Logo"
            />
            <span>
              HanChen
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 font-headline font-bold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`transition-all relative group ${activeLink === link.href ? "text-primary" : "text-on-surface-variant hover:text-primary"}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* ── MOBILE SIDEBAR ── */}
      <div
        ref={sidebarRef}
        className={`md:hidden fixed top-0 left-0 h-screen w-full sm:w-[320px] z-[50] shadow-2xl overflow-hidden ${!isOpen && "pointer-events-none"}`}
      >
        {/* Layer 1: Ảnh nền - Luôn hiển thị */}
        <div className="absolute inset-0 z-0">
          <img
            src="/LemonAssets/General/sidebarBG.png"
            className="w-full h-full object-cover"
            alt="Sidebar BG"
          />
        </div>

        {/* Layer 2: Lớp phủ thay đổi theo Theme
            - Light mode: Trong suốt (bg-transparent) hoặc cực nhẹ (bg-white/10)
            - Dark mode: Tối trong suốt (dark:bg-black/70)
        */}
        <div className="absolute inset-0 z-10 transition-colors duration-500 bg-main-bg/50  backdrop-blur-[2px] border-r border-primary/20" />

        {/* Layer 3: Nội dung */}
        <div ref={contentRef} className="relative z-20 flex flex-col h-full px-8 pt-32 pb-12 items-start">
          <div className="mb-10 ml-2 scale-125">
            <ThemeToggle />
          </div>

          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary opacity-80 mb-10 ml-2 shadow-sm">
            Navigation
          </p>

          <nav className="flex flex-col gap-6 w-full">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  closeMenu();
                }}
                className={`font-headline font-bold text-4xl transition-all flex items-center gap-5 group 
                  ${activeLink === link.href ? "text-primary translate-x-2" : "text-on-surface hover:text-primary hover:translate-x-2"}`}
              >
                <span className={`material-symbols-outlined text-3xl transition-all ${activeLink === link.href ? "opacity-100" : "opacity-50 group-hover:opacity-100"}`}>
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="mt-auto w-full">
            <p className="text-[10px] font-medium opacity-60 uppercase tracking-widest border-t border-primary/10 pt-6">
              © 2026 HanChen Orchard
            </p>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[40] bg-black/40 backdrop-blur-[2px]" onClick={closeMenu} />
      )}
    </>
  );
}