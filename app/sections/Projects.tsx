"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Dữ liệu giữ nguyên như cũ của bạn...
const projects = [
  { id: "01", title: "Studious", category: "Ed-Tech Platform", year: "2023", image: "/LemonAssets/General/pj/1.jpg", translate: "" },
  { id: "02", title: "Movie Booking", category: "Ticketing System", year: "2023", image: "/LemonAssets/General/pj/2.jpg", translate: "lg:translate-y-12" },
  { id: "03", title: "Jira Clone", category: "Productivity Tool", year: "2022", image: "/LemonAssets/General/pj/3.jpg", translate: "" },
  { id: "04", title: "Cyber Phone", category: "Hardware OS Concept", year: "2022", image: "/LemonAssets/General/pj/4.jpg", translate: "lg:-translate-y-12" },
  { id: "05", title: "AUIR Software", category: "B2B SaaS", year: "2021", image: "/LemonAssets/General/pj/5.jpg", translate: "" },
  { id: "06", title: "Prestige Floor", category: "E-Commerce", year: "2021", image: "/LemonAssets/General/pj/6.jpg", translate: "lg:translate-y-12" },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-16 md:pt-32 max-w-7xl mx-auto bg-surface text-on-surface overflow-hidden">
      {/* Header Section */}
      <header className="mb-10 md:mb-20 px-6 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-8xl font-bold tracking-tighter text-on-surface mb-3 md:mb-6 leading-[0.9]"
        >
          My <span className="text-shimmer italic pr-2">Projects</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm md:text-2xl text-on-surface-variant leading-relaxed max-w-xl font-light opacity-80 italic"
        >
          A curated archive of digital products and software experiments, focused on functional minimalism.
        </motion.p>
      </header>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mb-20 md:mb-32 px-6 md:px-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`group ${project.translate}`}
          >
            {/* Project Thumbnail Container */}
            <div className="relative aspect-[4/5] bg-surface-container-low rounded-2xl overflow-hidden mb-4 hover:shadow-2xl transition-all duration-500 border border-outline-variant/5">
              {/* Giảm padding từ p-12 xuống p-3 trên mobile để ảnh to và rõ hơn */}
              <div className="absolute inset-0 flex items-center justify-center p-3 md:p-12">
                <div className="w-full h-full rounded-xl bg-surface-container-lowest flex items-center justify-center overflow-hidden border-outline-variant/10 border relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={i === 0}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="flex items-end justify-between px-1">
              <div>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1 block">
                  Project {project.id}
                </span>
                <h3 className="text-xl md:text-3xl font-bold tracking-tight mb-1 group-hover:text-primary transition-colors leading-none">
                  {project.title}
                </h3>
                <p className="text-[10px] md:text-sm text-on-surface-variant font-medium opacity-70 uppercase tracking-wider">
                  {project.category} • {project.year}
                </p>
              </div>
              <div className="hidden md:block w-8 h-0.5 bg-outline-variant mb-4"></div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Footer CTA Section */}
      <section className="relative overflow-hidden w-full py-16 md:py-24 text-center border-t border-outline-variant/10 bg-surface-container-lowest/30">
        <div className="absolute inset-0 z-0">
          <img
            alt=""
            className="w-full h-full object-cover pointer-events-none opacity-[0.05] md:opacity-20 transition-opacity"
            src="/LemonAssets/General/decorBG.png"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-6 md:mb-8 leading-tight">
            Ready to <br className="md:hidden" /> cultivate?
          </h2>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden text-white font-bold 
                   px-7 py-3.5 md:px-10 md:py-4 
                   text-base md:text-xl 
                   rounded-full transition-all duration-300 active:scale-95 shadow-xl"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-500 z-0"></span>
            <span className="relative z-20">Let's Collaborate</span>
          </a>
        </div>
      </section>
    </section>
  );
}