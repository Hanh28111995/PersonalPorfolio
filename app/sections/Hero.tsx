"use client";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  // Biến cấu hình animation chung để code gọn hơn
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-surface-bright">
      {/* Decorative Background */}
      <div className="absolute inset-0 zest-dot opacity-[0.05] pointer-events-none"></div>
      <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] kinetic-orchard-gradient opacity-10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-secondary opacity-10 blur-[80px] rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tertiary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Hero Visual Representation (LEFT SIDE) */}
          <motion.div
            className="lg:col-span-6 flex justify-center items-center relative order-1 lg:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[600px] flex justify-center items-center">
              {/* Central Lemon */}
              <div className="relative z-20 w-4/5 animate-floating" id="lemon">
                <img
                  alt="Mechanical Lemon Illustration"
                  className="w-full h-auto bg-transparent"
                  src="/LemonAssets/General/satellite/0.png"
                />
              </div>

              {/* Orbital Group */}
              <div className="absolute inset-0 z-10 flex justify-center items-center">
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <div className="absolute border-[1.5px] border-light-primary/20 rounded-[50%] w-[90%] h-[82%] scale-105 transition-colors duration-500"></div>
                  <div className="absolute border-[1px] border-light-primary/10 rounded-[50%] w-[85%] h-[85%] transition-colors duration-500"></div>
                  <div className="absolute border-[0.5px] border-light-primary/5 rounded-[50%] w-[75%] h-[92%] scale-95 transition-colors duration-500"></div>
                </div>

                {/* Rotating Icons Container */}
                <div className="absolute animate-orbit-slow w-[85%] h-[85%]">
                  {[1, 2, 3, 4, 5, 6].map((num, i) => (
                    <div key={i} className={`absolute orbit-pos-${i} w-16 h-16 md:w-20 md:h-20`}>
                      <div className="counter-rotate">
                        <img
                          alt="Tech Icon"
                          className="w-full h-full object-contain"
                          src={`/LemonAssets/General/satellite/${num}.png`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Text Content (RIGHT SIDE) */}
          <div className="lg:col-span-6 flex flex-col items-start gap-3 lg:gap-8 order-2 lg:order-2">

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-4 md:py-2 bg-tertiary/10 rounded-full border border-main-border/5"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
            >
              <span className="w-2 h-2 bg-light-primary rounded-full animate-pulse"></span>
              <span className="text-label-md font-bold text-on-surface-variant tracking-wider uppercase text-[10px] md:text-[0.7rem] gap-1.5 md:gap-2 px-2.5 py-1 md:px-4 md:py-2">
                Available for freelance
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-headline font-bold tracking-tight text-on-surface leading-[1.1] text-2xl md:text-6xl lg:text-7xl"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
            >
              Squeeze your <span className="text-shimmer italic pr-2">passion</span>{" "}
              with <br />
              Modern Code.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="text-sm md:text-2xl text-on-surface-variant leading-relaxed max-w-xl font-light opacity-80 italic"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
            >
              I'm <span className="text-primary font-bold">HanChen</span>, a developer passionate about crafting clean,
              efficient, and accessible web experiences.
            </motion.p>



            <motion.div
              className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mt-2 lg:mt-6 w-full sm:w-auto"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.4 }}
            >

              {/* Nút View My Projects */}
              <a
                href="#projects"
                className="group relative overflow-hidden text-white font-bold 
               w-full sm:w-auto px-5 py-2.5 md:px-8 md:py-4 
               text-sm md:text-lg rounded-full flex items-center justify-center 
               transition-all duration-300 hover:scale-105 
               hover:shadow-[0px_20px_40px_rgba(89,238,80,0.3)] active:scale-95"
              >
                <span className="absolute inset-0 kinetic-orchard-gradient transition-all duration-500 group-hover:bg-[100%_center] z-0"></span>
                <span className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer-bg_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-10"></span>
                <span className="relative z-20">View My Projects</span>
              </a>

              {/* Nút Let's Talk */}
              <a
                href="#contact"
                className="group relative overflow-hidden bg-transparent border-2 border-light-primary/20 text-light-primary font-bold 
               w-full sm:w-auto px-5 py-2.5 md:px-8 md:py-4 
               text-sm md:text-lg rounded-full transition-all duration-300 
               hover:scale-105 hover:bg-light-primary hover:text-white 
               hover:border-light-primary hover:shadow-[0px_20px_40px_rgba(89,238,80,0.3)] 
               flex items-center justify-center active:scale-95"
              >
                <span className="relative z-20">Let's Talk</span>
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}