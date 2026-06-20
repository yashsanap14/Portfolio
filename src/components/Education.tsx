import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { EDUCATION } from "@/data/education";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Education() {
  return (
    <section id="education" className="bg-[var(--color-surface-2)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader number="05." title="Education" />
        <div className="space-y-8">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--color-border)] bg-white p-2">
                      <img
                        src={edu.logo.src}
                        alt={edu.logo.alt}
                        className="h-full w-full object-contain"
                        onError={(e) => {
                          const el = e.target as HTMLImageElement;
                          el.style.display = "none";
                          el.parentElement!.innerHTML = `<span class="text-sm font-bold text-accent">${edu.logo.fallback}</span>`;
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{edu.degree}</h3>
                          <p className="flex items-center gap-1 font-medium text-accent">
                            <GraduationCap className="h-4 w-4" />
                            {edu.school}
                          </p>
                          <p className="mt-1 flex items-center gap-1 text-sm text-[var(--color-text-muted)]">
                            <MapPin className="h-3.5 w-3.5" />
                            {edu.location}
                          </p>
                        </div>
                        <div className="text-sm text-[var(--color-text-muted)]">
                          <p className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.date}
                          </p>
                          {edu.gpa && <p className="mt-1 font-medium">GPA: {edu.gpa}</p>}
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="mb-2 text-sm font-medium">Relevant Coursework</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <Badge key={course} variant="accent">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
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
