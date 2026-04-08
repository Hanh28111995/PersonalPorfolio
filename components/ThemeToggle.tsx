"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      // Sử dụng bg động dựa trên theme để không bị "lệch" với nền trang
      className={`theme-toggle flex items-center justify-center rounded-full border transition-all duration-300 group p-1 ${isDark
        ? "bg-dark-container border-border-sub/50"
        : "bg-white border-border-main/20 shadow-sm"
        }`}
    >
      <div className="flex items-center gap-2 px-1">
        {/* Icon Group: Thay đổi dựa trên trạng thái thực tế */}
        <div className="relative w-5 h-5 flex items-center justify-center">
          {
            isDark ? <span className="material-symbols-outlined text-primary block dark:hidden text-[20px]">dark_mode</span> : <span className="material-symbols-outlined text-primary block dark:hidden text-[20px]">light_mode</span>
          }      
        </div>

        {/* Toggle Track */}
        <div className={`w-11 h-6 rounded-full relative transition-all duration-300 border ${isDark
            ? "bg-[#050505] border-light-primary/20 shadow-[inset_0px_2px_4px_rgba(0,0,0,0.5)]"
            : "bg-gray-200 border-transparent"
          }`}>

          {/* Sliding Circle (Nút trượt) */}
          <div
            className={`absolute top-0.5 left-0.5 w-4.5 h-4.5 rounded-full transition-all duration-500 transform ${isDark
                ? "translate-x-5 bg-light-primary shadow-[0_0_15px_rgba(89,238,80,0.6)]" // Xanh chanh phát sáng
                : "translate-x-0 bg-white shadow-md"                                   // Trắng đổ bóng
              }`}
          >
            {/* Ánh sáng lan tỏa (Chỉ hiện ở Dark) */}
            {isDark && (
              <div className="absolute inset-0 rounded-full bg-light-primary animate-ping opacity-25"></div>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}