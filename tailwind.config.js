/** @type {import('tailwindcss').Config} */
module.exports = {
  // Quan trọng: Phải là 'class' để nhận diện .dark từ ThemeProvider
  darkMode: "class",

  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./helper/**/*.{js,jsx,ts,tsx}",
    "./layout/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // --- 1. MÀU THEO THEME (Tự đổi khi switch mode) ---
        // Thay vì dùng dark-bg/light-bg, dùng tên chung để code gọn hơn
        "main-bg": "var(--bg)",
        "sub-bg": "var(--bg-2)",
        "deep-bg": "var(--bg-3)",
        "main-fg": "var(--fg)",
        "muted-fg": "var(--fg-muted)",
        "main-border": "var(--border)",

        // --- 2. MÀU THƯƠNG HIỆU (BRAND COLORS) ---
        // Hỗ trợ Opacity (như light-primary/10) nhờ định dạng RGB trong globals.css
        "light-primary": "rgb(var(--color-light-primary) / <alpha-value>)",
        
        "primary": "var(--color-primary)",
        "secondary": "var(--color-secondary)",
        "tertiary": "var(--color-tertiary)",

        // --- 3. CÁC MÀU PHỤ TRỢ ---
        "error": "var(--color-light-error)", // Hoặc dùng chung một biến error
      },

      fontFamily: {
        headline: ["var(--font-headline)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },

      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "shimmer": "shimmer 3s linear infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "to": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
};