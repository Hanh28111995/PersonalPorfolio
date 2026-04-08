"use client";

import { motion, Variants } from "framer-motion";

/**
 * 1. ANIMATION VARIANTS - Tinh chỉnh Spring để mượt hơn
 */
const containerVariants: Variants = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const tagVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  },
  whileHover: {
    scale: 1.1,
    rotate: [0, -2, 2, 0],
    transition: { duration: 0.3 }
  }
};

const listItemVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

/**
 * 2. DATA STRUCTURES - Thêm các tech bạn đã đề cập (NgRx, Clean Architecture)
 */
const techStacks = [
  {
    category: "Front-End Growth",
    subtitle: "Architecture & Interfaces",
    icon: "bolt",
    technologies: [
      "ReactJS", "Next.js", "TypeScript", "Redux / NgRx", "TailwindCSS",
      "GSAP", "Three.js", "Framer Motion", "Vite", "MUI", "SCSS", "HTML5"
    ],
    primary: ["ReactJS", "Next.js", "TypeScript", "Redux / NgRx"]
  },
  {
    category: "Back-End Logic",
    subtitle: "Internal Systems & APIs",
    icon: "dns",
    technologies: [
      "Node.js", "ASP.NET Core", "Express.js", "Nest.js", "REST APIs",
      "Clean Architecture", "OAuth 2.0", "WebSocket", "SignalR"
    ],
    primary: ["Node.js", "ASP.NET Core", "Clean Architecture"]
  },
];

const designStack = {
  category: "Graphic Design",
  technologies: ["Figma", "Adobe Photoshop", "Google Stitch", "Canva"],
  quote: "Design is how it works."
};

const dbDevOps = {
  databases: [
    { name: "MSSQL", active: true },
    { name: "PostgreSQL", active: true },
    { name: "MongoDB", active: true }
  ],
  tools: ["Entity Framework", "Mongoose", "Docker", "CI/CD (Actions)"]
};

/**
 * 3. MAIN COMPONENT
 */
export default function Stacks() {
  return (
    <section id="stacks" className="relative min-h-screen py-16 md:py-24 overflow-hidden bg-surface-bright select-none">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* HEADER SECTION */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-pulse"></span>
            Bio-Digital Ecosystem
          </div>
          <h1 className="text-4xl md:text-8xl font-headline font-bold text-on-surface tracking-tighter leading-none mb-6 md:mb-8">
            The <span className="text-shimmer italic pr-2 md:pr-4">Tech</span> Garden.
          </h1>
          <p className="text-base md:text-2xl text-on-surface-variant leading-relaxed max-w-xl font-light opacity-80 italic">
            Cultivating high-performance applications through a balanced mix of
            <span className="text-primary"> enterprise stability</span> and <span className="text-primary"> creative frontend flair</span>.
          </p>
        </motion.header>

        {/* BENTO GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* FRONT-END CARD */}
          <motion.section
            variants={itemVariants}
            className="md:col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-3xl p-6 md:p-10 border border-outline-variant/5 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
              <div className="p-3 md:p-4 bg-primary/10 rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:scale-110">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">bolt</span>
              </div>
              <div>
                <h2 className="text-xl md:text-3xl font-headline font-black tracking-tight uppercase">Front-End Growth</h2>
                <p className="text-[9px] md:text-[10px] font-black text-primary/60 uppercase tracking-widest">User Interfaces & Interaction</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {techStacks[0].technologies.map((tech) => (
                <motion.span
                  key={tech}
                  variants={tagVariants}
                  whileHover="whileHover"
                  className={`px-3 py-2 md:px-5 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-bold border transition-all cursor-default
                ${techStacks[0].primary.includes(tech)
                      ? "bg-primary text-white border-transparent shadow-md shadow-primary/20"
                      : "bg-surface-container-low text-on-surface-variant border-outline-variant/10"
                    }`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* DB & DEVOPS CARD */}
          <motion.section
            variants={itemVariants}
            className="md:col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-3xl p-6 md:p-10 border-l-4 border-l-tertiary shadow-sm flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="material-symbols-outlined text-tertiary text-2xl md:text-3xl">database</span>
              <h2 className="text-lg md:text-2xl font-headline font-black tracking-tight uppercase">Data & Ops</h2>
            </div>
            <div className="space-y-3 md:space-y-6">
              <div className="space-y-2 md:space-y-3">
                {dbDevOps.databases.map((db) => (
                  <div key={db.name} className="flex items-center justify-between p-3 md:p-4 bg-surface-container-low rounded-xl border border-outline-variant/5">
                    <span className="font-bold text-xs md:text-sm tracking-tight">{db.name}</span>
                    <span className="w-1.5 h-1.5 bg-tertiary rounded-full shadow-[0_0_8px_#a2f31f]"></span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-outline-variant/10 flex flex-wrap gap-2">
                {dbDevOps.tools.map((tool) => (
                  <span key={tool} className="text-[9px] md:text-[10px] font-black uppercase tracking-wider bg-tertiary/10 text-tertiary px-2 py-1 md:px-3 md:py-1.5 rounded-md">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>

          {/* BACK-END CARD */}
          <motion.section
            variants={itemVariants}
            className="md:col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-3xl p-6 md:p-10 border border-outline-variant/5 group relative overflow-hidden"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
              <div className="p-3 md:p-4 bg-secondary/10 rounded-xl md:rounded-2xl transition-transform">
                <span className="material-symbols-outlined text-secondary text-2xl md:text-3xl">dns</span>
              </div>
              <div>
                <h2 className="text-xl md:text-3xl font-headline font-black tracking-tight uppercase">Back-End Logic</h2>
                <p className="text-[9px] md:text-[10px] font-black text-secondary/60 uppercase tracking-widest">Scalable Systems & APIs</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {techStacks[1].technologies.map((tech) => (
                <motion.span
                  key={tech}
                  variants={tagVariants}
                  whileHover="whileHover"
                  className={`px-3 py-2 md:px-5 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-bold border transition-all cursor-default
                ${techStacks[1].primary.includes(tech)
                      ? "bg-secondary text-white border-transparent shadow-md shadow-secondary/20"
                      : "bg-surface-container-low text-on-surface-variant border-outline-variant/10"
                    }`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* DESIGN & CREATIVE CARD */}
          <motion.section
            variants={itemVariants}
            className="md:col-span-12 lg:col-span-4 bg-surface-container-low rounded-3xl p-6 md:p-10 flex flex-col justify-between border border-outline-variant/5"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">palette</span>
                <h2 className="text-lg md:text-2xl font-headline font-black tracking-tight uppercase">Creative</h2>
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {designStack.technologies.map((tech) => (
                  <div key={tech} className="p-2 md:p-3 bg-surface-container-highest rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold text-center border border-outline-variant/10">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/10">
              <p className="text-xs md:text-sm font-black italic text-primary opacity-60">"{designStack.quote}"</p>
            </div>
          </motion.section>

          {/* LAB ENVIRONMENT (FULL WIDTH) */}
          <motion.section
            variants={itemVariants}
            className="md:col-span-12 bg-surface-container-lowest rounded-3xl overflow-hidden group border border-outline-variant/5"
          >
            <div className="flex flex-col md:flex-row h-full min-h-[200px] md:min-h-[250px]">
              <div className="md:w-1/3 relative overflow-hidden h-32 md:h-auto">
                <img
                  alt="Tech Environment"
                  className="w-full h-full object-cover opacity-60 grayscale"
                  src="/LemonAssets/General/FreshIngredients.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-surface-container-lowest"></div>
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">terminal</span>
                  <h2 className="text-xl md:text-3xl font-headline font-black tracking-tight uppercase">Lab Environment</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-x-12 gap-y-4 md:gap-y-6">
                  <div>
                    <span className="text-[9px] md:text-[10px] font-black text-on-surface/40 uppercase tracking-[0.2em] block mb-1">VCS</span>
                    <p className="font-bold text-sm md:text-lg">Git, GitHub</p>
                  </div>
                  <div>
                    <span className="text-[9px] md:text-[10px] font-black text-on-surface/40 uppercase tracking-[0.2em] block mb-1">Cloud / Storage</span>
                    <p className="font-bold text-sm md:text-lg">Firebase, Vercel, Somee</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <div className="px-3 py-1 bg-primary/10 rounded-full text-[8px] md:text-[10px] font-black text-primary uppercase tracking-widest border border-primary/20">Stable Release V4.0</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

        </motion.div>
      </div>
    </section>
  );
}