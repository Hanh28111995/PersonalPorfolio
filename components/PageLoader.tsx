"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useTheme } from "next-themes";
import { useGSAP } from "@gsap/react";

export default function PageLoader() {
  const { resolvedTheme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef<HTMLDivElement>(null);
  const juiceFillRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const obj = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        if (!loaderRef.current) return;
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => setHidden(true),
        });
      },
    });

    tl.to(obj, {
      val: 100,
      duration: 3,
      ease: "power2.inOut",
      onUpdate: () => {
        const currentVal = Math.round(obj.val);
        setProgress(currentVal);
        if (juiceFillRef.current) {
          juiceFillRef.current.style.width = `${currentVal}%`;
        }
      },
    });
  }, { scope: loaderRef }); // Scope giúp GSAP tìm đúng element bên trong Ref

  if (hidden) return null;

  return (
    <main
      ref={loaderRef}
      /* Dùng bg-main-bg: Tự động Trắng ở Light, Đen ở Dark.
         Dùng text-main-fg: Tự động đổi màu chữ tương ứng.
      */
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 bg-main-bg text-main-fg"
    >
      {/* Background decoration*/}
      <div className="absolute top-1/4 -right-12 w-24 h-24 md:w-48 md:h-48 border border-light-primary/10 rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-12 w-32 h-32 md:w-64 md:h-64 border border-light-primary/10 rounded-full pointer-events-none"></div>
      <div className="absolute -top-[10%] -left-[5%] w-96 h-96 bg-light-primary/20 blur-[100px] rounded-full pointer-events-none will-change-[filter]"></div>
      <div className="absolute -bottom-[10%] -right-[5%] w-96 h-96 bg-secondary/20 blur-[100px] rounded-full pointer-events-none will-change-[filter]"></div>


      {/* Central Loading Content */}
      <div className="relative z-10 flex flex-col items-center gap-12 max-w-md w-full px-8">
        {/* Stylized Lime Image */}
        <div className="relative flex items-center justify-center">
          <div className="kinetic-squeeze w-32 h-32 md:w-40 md:h-40 relative">
            <img
              alt="lime slice"
              src="/LemonAssets/Dark/Icon/Stylized Lime Slice L.png"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Drips: Sử dụng light-primary (màu xanh chanh đặc trưng) */}
          <div className="drip left-[3rem] top-full bg-light-primary" style={{ animationDelay: "0.2s" }}></div>
          <div className="drip right-[4rem] top-3/4 bg-light-primary" style={{ animationDelay: "1.2s" }}></div>
        </div>

        {/* Text & Progress Group */}
        <div className="w-full space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-light-primary uppercase">
              HANCHEN
            </h1>
            <p className="font-headline text-muted-fg font-medium tracking-tight text-lg">
              Squeezing the code...
            </p>
          </div>

          {/* Juice Progress Bar: Dùng sub-bg và main-border */}
          <div className="relative w-full h-3 bg-sub-bg rounded-full overflow-hidden border border-main-border/30">
            <div
              ref={juiceFillRef}
              /* Sử dụng shadow với màu light-primary/40 (nhờ cấu hình RGB)
              */
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-light-primary to-secondary rounded-full transition-all duration-100 shadow-[0px_0px_15px_rgba(var(--color-light-primary-rgb),0.4)]"
              style={{ width: "0%" }}
            >
              <div className="absolute inset-0 flex items-center justify-around opacity-40">
                <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>

          {/* Status Tags */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <span className="px-3 py-1 bg-sub-bg rounded-full text-[10px] font-bold tracking-widest text-muted-fg uppercase border border-main-border/20 leading-none">
              Optimizing Assets
            </span>
            {/* Tag này dùng opacity 10% và border 20% của light-primary */}
            <span className="px-3 py-1 bg-light-primary/10 rounded-full text-[10px] font-bold tracking-widest text-light-primary uppercase border border-light-primary/20 leading-none">
              {progress}% Fresh
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Branding Anchor */}
      <div className="absolute bottom-12 left-0 w-full flex justify-center">
        <div className="flex items-center gap-4 text-muted-fg font-label text-xs tracking-widest uppercase">
          <span>© 2026</span>
          <div className="w-8 h-[1px] bg-main-border/50"></div>
          <span>Creative Engineering</span>
        </div>
      </div>
    </main>
  );
}