import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { EXPERIENCE } from "@/data/experience";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="bg-[var(--color-surface-2)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader number="03." title="Experience" />
        <div className="relative space-y-8 border-l-2 border-accent/30 pl-8 md:pl-10">
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={job.title + job.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-6 h-4 w-4 rounded-full border-4 border-[var(--color-surface-2)] bg-accent md:-left-[49px]" />
              <Card className="hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--color-border)] bg-white p-1">
                        <img
                          src={job.logo.src}
                          alt={job.logo.alt}
                          className="h-full w-full object-contain"
                          onError={(e) => {
                            const el = e.target as HTMLImageElement;
                            el.style.display = "none";
                            el.parentElement!.innerHTML = `<span class="text-xs font-bold text-accent">${job.logo.fallback}</span>`;
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <p className="font-medium text-accent">{job.company}</p>
                        <p className="mt-1 flex items-center gap-1 text-sm text-[var(--color-text-muted)]">
                          <MapPin className="h-3.5 w-3.5" />
                          {job.location}
                        </p>
                      </div>
                    </div>
                    <span className="flex shrink-0 items-center gap-1 text-sm font-medium text-[var(--color-text-muted)]">
                      <Calendar className="h-4 w-4" />
                      {job.date}
                    </span>
                  </div>
                  <ul className="mb-4 space-y-2 text-sm text-[var(--color-text-muted)]">
                    {job.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 50)} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
