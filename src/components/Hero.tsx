import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WarpShaderBackground } from "@/components/ui/warp-shader";
import { HERO, SOCIAL_LINKS } from "@/data/site";
import { useResume } from "@/components/shared/ResumeModal";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

export function Hero() {
  const { openResume } = useResume();

  const socialIcon = (type: string) => {
    switch (type) {
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "github":
        return <Github className="h-5 w-5" />;
      case "resume":
        return <FileText className="h-5 w-5" />;
      default:
        return <Mail className="h-5 w-5" />;
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      <WarpShaderBackground />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 md:py-24">
        <div className="mx-auto w-full max-w-3xl text-center md:mx-0 md:text-left">
          <motion.p
            {...fadeUp(0.1)}
            className="mb-3 text-base font-medium tracking-wide text-[hsl(170,100%,80%)] sm:text-lg"
          >
            {HERO.greeting}
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {HERO.name}
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            className="mb-6 text-xl font-semibold sm:text-2xl md:text-3xl"
          >
            <span className="bg-gradient-to-r from-[hsl(170,100%,80%)] via-[hsl(160,100%,75%)] to-[hsl(180,90%,50%)] bg-clip-text text-transparent">
              {HERO.title}
            </span>
          </motion.p>

          <motion.p
            {...fadeUp(0.5)}
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:mx-0"
          >
            {HERO.description}
          </motion.p>

          <motion.div
            {...fadeUp(0.65)}
            className="mb-10 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <Button asChild size="default" className="min-w-[10rem] shadow-lg shadow-accent/20">
              <a href="#projects">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="min-w-[10rem] border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-[hsl(170,100%,80%)] hover:bg-white/20 hover:text-white"
            >
              <a href="#contact">
                Get In Touch
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            {...fadeUp(0.8)}
            className="flex flex-wrap justify-center gap-3 md:justify-start"
          >
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.type === "resume" ? undefined : "_blank"}
                rel="noopener noreferrer"
                onClick={
                  link.type === "resume"
                    ? (e) => {
                        e.preventDefault();
                        openResume();
                      }
                    : undefined
                }
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-all hover:border-[hsl(170,100%,80%)] hover:text-[hsl(170,100%,80%)] hover:-translate-y-0.5"
                aria-label={link.label}
              >
                {socialIcon(link.type)}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition-colors hover:text-[hsl(170,100%,80%)]"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
