import { motion } from "framer-motion";
import { Award, Brain, Calendar, Code2, Database, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CERTIFICATIONS, type CertificationItem } from "@/data/certifications";
import { SectionHeader } from "@/components/shared/SectionHeader";

function CertLogo({ cert, issuerLogo }: { cert: CertificationItem; issuerLogo?: string }) {
  if (cert.logoType === "icon") {
    if (cert.iconName === "linkedin") {
      return <span className="text-2xl font-bold text-[#0077b5]">in</span>;
    }
    if (cert.iconName === "docker") {
      return <span className="text-sm font-bold text-[#2496ED]">🐳</span>;
    }
    if (cert.iconName === "microsoft") {
      return <span className="text-sm font-bold text-[#0078D4]">MS</span>;
    }
    if (cert.fallbackText) {
      return (
        <span className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-accent to-[hsl(180,90%,30%)] text-xs font-bold text-white">
          {cert.fallbackText}
        </span>
      );
    }
  }

  const src = cert.logo ?? issuerLogo;
  if (src) {
    return <img src={src} alt={cert.issuer} className="h-full w-full object-contain p-1" loading="lazy" />;
  }

  return <Award className="h-6 w-6 text-accent" />;
}

function CertCard({ cert, issuerLogo }: { cert: CertificationItem; issuerLogo?: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4 flex gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <CertLogo cert={cert} issuerLogo={issuerLogo} />
          </div>
          <div>
            <h3 className="font-semibold leading-snug">{cert.title}</h3>
            <p className="text-sm font-medium text-accent">{cert.issuer}</p>
          </div>
        </div>
        {cert.date && (
          <p className="mb-3 flex items-center gap-1 text-sm text-[var(--color-text-muted)]">
            <Calendar className="h-3.5 w-3.5" />
            {cert.date}
          </p>
        )}
        <div className="mb-4 flex flex-wrap gap-2">
          {cert.skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
        {cert.url ? (
          <Button variant="outline" size="sm" asChild>
            <a href={cert.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              View Certificate
            </a>
          </Button>
        ) : (
          <Button variant="outline" size="sm" disabled className="opacity-60">
            <ExternalLink className="h-4 w-4" />
            View Certificate
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

const categoryIconMap = {
  database: Database,
  python: Code2,
  brain: Brain,
};

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader number="04." title="Certifications" />
        <div className="space-y-12">
          {CERTIFICATIONS.map((provider, pi) => (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: pi * 0.1 }}
            >
              <h3 className="mb-6 flex items-center gap-3 border-b border-[var(--color-border)] pb-4 text-xl font-semibold">
                {provider.logo ? (
                  <img src={provider.logo} alt={provider.name} className="h-8 w-8 rounded" />
                ) : (
                  <Award className="h-6 w-6 text-accent" />
                )}
                {provider.name}
              </h3>

              {provider.categories?.map((category) => {
                const CatIcon = categoryIconMap[category.icon];
                return (
                  <div key={category.title} className="mb-8">
                    <h4 className="mb-4 flex items-center gap-2 text-base font-semibold text-[var(--color-text-muted)]">
                      <CatIcon className="h-4 w-4 text-accent" />
                      {category.title}
                    </h4>
                    <div className="grid gap-6 md:grid-cols-2">
                      {category.items.map((cert) => (
                        <CertCard key={cert.title} cert={cert} issuerLogo={provider.logo} />
                      ))}
                    </div>
                  </div>
                );
              })}

              {provider.items && (
                <div className="grid gap-6 md:grid-cols-2">
                  {provider.items.map((cert) => (
                    <CertCard key={cert.title} cert={cert} />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
