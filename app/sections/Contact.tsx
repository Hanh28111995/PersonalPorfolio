"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Contact() {
  const containerRef = useRef(null);

  // Hiệu ứng bồng bềnh cho các tag kính (GSAP)
  useEffect(() => {
    gsap.to(".glass-tag", {
      y: -8, // Giảm biên độ dao động một chút cho mobile
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5
    });
  }, []);

  return (
    <section id="contact" className="py-12 md:py-32 border-t border-outline-variant bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Content Left: Headline & Form */}
          <div className="space-y-8 md:space-y-12 order-2 lg:order-1">
            <header className="space-y-4 md:space-y-6">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-7xl font-headline font-bold text-on-surface leading-[1.1] tracking-tighter"
              >
                Let's create <br />
                <span className="italic text-shimmer pr-2">something tasty.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-base md:text-xl text-on-surface-variant max-w-lg leading-relaxed font-medium opacity-80"
              >
                I'm currently looking for new opportunities to collaborate on innovative digital products.
              </motion.p>
            </header>

            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-surface-container-lowest p-6 md:p-10 rounded-3xl shadow-xl shadow-primary/[0.03] relative overflow-hidden group border border-outline-variant/10"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>

              <form action="#" className="space-y-6 md:space-y-8 relative z-10">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "HanChen" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "hanchen@example.com" }
                ].map((field) => (
                  <div key={field.id} className="relative group/field">
                    <label className="block text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-1 md:mb-2 group-focus-within/field:text-primary transition-colors" htmlFor={field.id}>
                      {field.label}
                    </label>
                    <input
                      className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-2 md:py-3 transition-all duration-300 placeholder-on-surface-variant/40 font-bold text-base md:text-lg"
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      type={field.type}
                    />
                  </div>
                ))}

                <div className="relative group/field">
                  <label className="block text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-1 md:mb-2 group-focus-within/field:text-primary transition-colors" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-2 md:py-3 transition-all duration-300 placeholder-on-surface-variant/40 font-bold text-base md:text-lg resize-none"
                    id="message"
                    name="message"
                    placeholder="Let's build the future..."
                    rows={2} // Giảm dòng trên mobile
                  ></textarea>
                </div>

                <button type="submit" className="group relative w-full sm:w-auto inline-flex items-center justify-center overflow-hidden text-white font-black px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                  <span className="absolute inset-0 kinetic-orchard-gradient z-0"></span>
                  <span className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer-bg_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"></span>
                  <span className="relative z-20 flex items-center gap-2 tracking-tight">
                    Send Message
                    <span className="material-symbols-outlined text-xl">send</span>
                  </span>
                </button>
              </form>
            </motion.div>
          </div>

          {/* Content Right: Sticky Avatar */}
          <div className="relative lg:sticky lg:top-32 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-square relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-surface-container-low flex items-center justify-center shadow-2xl max-w-[300px] md:max-w-none mx-auto"
            >
              <img
                alt="HanChen Portfolio Avatar"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700"
                src="/LemonAssets/General/User Avatar.jpg"
              />

              {/* Glass Tags - Responsive size */}
              <div className="glass-tag absolute top-4 left-4 md:top-6 md:left-0 kinetic-glass px-3 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl shadow-2xl border border-white/20 flex items-center gap-2 bg-primary text-white backdrop-blur-md">
                <span className="material-symbols-outlined text-xs md:text-xl">work</span>
                <span className="text-[8px] md:text-xs font-black uppercase tracking-widest">Available for Hire</span>
              </div>

              <div className="glass-tag absolute bottom-6 right-4 md:bottom-8 md:right-6 kinetic-glass px-3 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl shadow-2xl border border-white/20 flex items-center gap-2 bg-secondary text-white backdrop-blur-md">
                <span className="material-symbols-outlined text-xs md:text-xl">public</span>
                <span className="text-[8px] md:text-xs font-black uppercase tracking-widest">Remote/Onsite</span>
              </div>
            </motion.div>

            {/* Decorative Blurs */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}