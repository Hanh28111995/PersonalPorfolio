import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Stacks from "@/app/sections/Stacks";
import Projects from "@/app/sections/Projects";
import Contact from "@/app/sections/Contact";

export default function Home() {
  return (
    <main className="pt-10 md:pt-16 overflow-hiden">
      <Hero />
      <About />
      <Stacks />
      <Projects />
      <Contact />
    </main>
  );
}
