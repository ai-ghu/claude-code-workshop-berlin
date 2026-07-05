import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <footer className="py-10 border-t border-ink/10 text-sm text-ink/50">
        Made with Claude Code · Berlin · 2026
      </footer>
    </main>
  );
}
