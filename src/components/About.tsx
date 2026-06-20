import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Lightbulb, Users } from "lucide-react";
import { ABOUT } from "@/data/about";
import { SITE } from "@/data/site";
import { SectionHeader } from "@/components/shared/SectionHeader";

const highlightIcons = {
  code: Code2,
  lightbulb: Lightbulb,
  users: Users,
};

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(value / 30);
    const id = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(id);
      } else {
        setCount(start);
      }
    }, 40);
    return () => clearInterval(id);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-accent md:text-4xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-[var(--color-text-muted)]">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="bg-[var(--color-surface-2)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader number={ABOUT.sectionNumber} title={ABOUT.title} />
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {ABOUT.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-[var(--color-text-muted)] leading-relaxed">
                {p}
              </p>
            ))}
            <div className="space-y-4 pt-2">
              {ABOUT.highlights.map((item, i) => {
                const Icon = highlightIcons[item.icon];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)]">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {ABOUT.stats.map((stat) => (
                <AnimatedStat key={stat.label} {...stat} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/30 to-purple-500/20 blur-xl" />
              <img
                src={SITE.profileImage}
                alt={SITE.name}
                className="relative h-72 w-72 rounded-3xl border-4 border-[var(--color-surface)] object-cover shadow-2xl md:h-80 md:w-80"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
