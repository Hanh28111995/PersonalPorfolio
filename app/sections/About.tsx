"use client";

import { motion, Variants } from "framer-motion";

// Định nghĩa animation chung cho các phần tử xuất hiện
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const staggerContainer: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const services = [
  {
    title: "Full-stack Dev",
    desc: "Scalable systems built with React, Node.js, and ASP.NET Core. Clean architecture as a standard.",
    tags: "React · .NET · SQL",
    icon: "terminal",
    color: "bg-primary/10 text-primary group-hover:bg-primary",
  },
  {
    title: "Responsive Design",
    desc: "Pixel-perfect interfaces that flow across devices using Tailwind CSS and advanced layouts.",
    tags: "Tailwind · Mobile-First",
    icon: "devices",
    color: "bg-tertiary/10 text-primary group-hover:bg-tertiary",
  },
  {
    title: "API Integration",
    desc: "Connecting disparate systems with robust RESTful APIs and secure data orchestration.",
    tags: "REST · JSON · Auth",
    icon: "api",
    color: "bg-secondary/10 text-primary group-hover:bg-secondary",
  },
  {
    title: "E-commerce",
    desc: "Custom shopping experiences with seamless checkout flows and inventory management.",
    tags: "Payment · CMS · UX",
    icon: "shopping_cart",
    color: "bg-primary/10 text-primary group-hover:bg-primary",
  },
  {
    title: "Cloud Solutions",
    desc: "Deploying and managing applications using AWS and modern CI/CD pipelines.",
    tags: "AWS · Vercel · Docker",
    icon: "cloud",
    color: "bg-tertiary/10 text-primary group-hover:bg-tertiary",
  },
  {
    title: "UX Consulting",
    desc: "Applying Google UX standards to ensure products are intuitive, accessible, and delightful.",
    tags: "Figma · Wireframing",
    icon: "brush",
    color: "bg-secondary/10 text-primary group-hover:bg-secondary",
  },
];

const education = [
  {
    title: "Automation & Electrical Engineering",
    school: "University of Technology",
    period: "2015 — 2019",
  },
  {
    title: "B.S. in Computer Science",
    school: "Top Tier Tech University",
    period: "2022 — Present",
  },
];

export default function About() {
  return (
    <section id="about" className="citrus-mesh bg-surface text-on-surface">
      <div className="pt-10 lg:pt-32 ">

        {/* Intro Section */}
        <motion.div
          className="max-w-7xl mx-auto px-8 mb-15 md:mb-32"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="flex flex-col items-start  gap-3 md:gap-4" // Sử dụng Flex thay cho space-y để kiểm soát gap tốt hơn
              variants={fadeInUp}
            >
              {/* 1. Pill Label */}
              <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-4 md:py-2 bg-tertiary/10 rounded-full border border-main-border/5">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-light-primary rounded-full animate-pulse"></span>
                <span className="font-bold text-on-surface-variant tracking-wider uppercase text-[9px] md:text-[0.7rem]">
                  Available for Projects
                </span>
              </div>

              {/* 2. Headline */}
              <h1 className="font-headline font-bold tracking-tight text-on-surface leading-[1.1] text-3xl md:text-6xl lg:text-7xl">
                <span className="text-shimmer italic pr-2">Approaching</span> to Coding.
              </h1>

              {/* 3. Description */}
              <p className="text-base md:text-2xl text-on-surface-variant leading-relaxed max-w-xl font-light opacity-80 italic">
                I am a Junior Web Developer with a foundation in{" "}
                <span className="text-primary font-bold">Automation & Electrical Engineering</span>.
                Since 2019, I've pivoted my analytical mindset toward crafting high-velocity digital experiences.
              </p>

              {/* 4. CTA Buttons Container */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto mt-2">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/path-to-your-cv.pdf"
                  download
                  className="group relative overflow-hidden px-6 py-3 md:px-8 md:py-4 text-white font-bold text-sm md:text-lg rounded-full flex items-center justify-center cursor-pointer shadow-xl shadow-primary/20"
                >
                  <span className="absolute inset-0 kinetic-orchard-gradient z-0 transition-transform duration-500 group-hover:scale-110"></span>
                  <span className="relative z-20">Download CV</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="group relative overflow-hidden bg-transparent border-2 border-light-primary/20 text-light-primary font-bold px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg rounded-full flex items-center justify-center transition-all duration-300 hover:bg-light-primary hover:text-white"
                >
                  <span className="relative z-20">Contact Me</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Avatar Image with Rotation Effect */}
            <motion.div
              className="relative p-2"
              variants={fadeInUp}
            >
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary/30 rounded-full blur-3xl -z-10"></div>
              <div
                className="bg-deep-bg rounded-xl p-2"
              >
                <motion.div className="relative shadow-2xl shadow-primary/30 rounded-lg overflow-hidden z-10" initial={{ rotate: 10 }}
                  whileHover={{ rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}>
                  <img alt="HanChen Portrait" className="w-full h-auto" src="/LemonAssets/General/AboutAvatar.jpg" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Section */}
        <div className="py-12 md:py-24 bg-cover bg-center bg-fixed bg-[linear-gradient(var(--parallax-overlay),var(--parallax-overlay)),url('/LemonAssets/General/FreshIngredients.jpg')]">
          <div className="max-w-7xl mx-auto px-6 md:px-8">

            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 md:mb-16 text-left" // Giảm margin-bottom trên mobile
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold tracking-tight mb-3 text-primary">
                Fresh Ingredients
              </h2>
              <p className="text-sm md:text-2xl text-on-surface-variant leading-relaxed max-w-xl font-light opacity-80 italic">
                My core competencies distilled into high-impact services.
              </p>
            </motion.div>

            {/* Grid Services */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6" // Giảm gap để các card gần nhau hơn
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group bg-main-bg p-6 md:p-8 rounded-xl transition-all duration-500 shadow-lg shadow-primary/10 border border-primary/5 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/40"
                >
                  {/* Icon Box */}
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-4 md:mb-6 transition-colors ${s.color}`}>
                    <span className="material-symbols-outlined text-xl md:text-2xl group-hover:text-white">
                      {s.icon}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 font-headline">
                    {s.title}
                  </h3>

                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mb-4 md:mb-6 opacity-90">
                    {s.desc}
                  </p>

                  <div className="h-px bg-surface-variant w-full mb-4 opacity-10"></div>

                  <span className={`text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase ${s.color.split(' ').find(c => c.startsWith('text-'))}`}>
                    {s.tags}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Learning Path Section */}
        <motion.div
          className="py-12 md:py-20 max-w-7xl mx-auto px-6 md:px-8" // Giảm padding dọc và ngang trên mobile
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">

            {/* Sidebar Content */}
            <motion.div className="md:col-span-4" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight mb-4 md:mb-6">
                The Learning Path
              </h2>
              <p className="text-sm md:text-base text-on-surface-variant mb-6 md:mb-8 opacity-90">
                Constant iteration is the core of my workflow.
              </p>
            </motion.div>

            {/* Education Grid */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="group bg-main-bg p-6 md:p-8 rounded-xl shadow-lg shadow-primary/10 border border-primary/5 transition-all"
                  >
                    {/* Period Tag */}
                    <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full"></span>
                      <span className="text-[10px] md:text-xs font-bold text-tertiary uppercase tracking-[0.1em]">
                        {edu.period}
                      </span>
                    </div>

                    {/* Title & School */}
                    <h3 className="font-headline font-bold text-lg md:text-xl mb-1 leading-snug">
                      {edu.title}
                    </h3>
                    <p className="text-xs md:text-sm text-on-surface-variant font-medium opacity-80">
                      {edu.school}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}