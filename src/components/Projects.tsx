import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText, Github, MessageSquare, Play, Droplets, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DASHBOARDS, PROJECTS } from "@/data/projects";
import { SectionHeader } from "@/components/shared/SectionHeader";

function ProjectThumbnail({ project }: { project: (typeof PROJECTS)[0] }) {
  if (project.thumbnail) {
    return (
      <a href={project.links.demo ?? project.links.live ?? project.links.github ?? "#"} target="_blank" rel="noopener noreferrer">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </a>
    );
  }

  const placeholders = {
    water: {
      gradient: "from-blue-900 to-blue-600",
      icon: Droplets,
    },
    rag: {
      gradient: "from-[hsl(200,100%,20%)] via-[hsl(200,100%,12%)] to-[hsl(180,90%,30%)]",
      icon: FileText,
    },
  } as const;

  const key = project.placeholderIcon ?? "water";
  const { gradient, icon: Icon } = placeholders[key];

  return (
    <div className={`flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br ${gradient}`}>
      <Icon className="h-14 w-14 text-white/85" />
      {key === "rag" && (
        <MessageSquare className="h-8 w-8 text-accent/80" aria-hidden />
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Card className="group h-full overflow-hidden">
        <div className="relative aspect-video overflow-hidden bg-[var(--color-surface-3)]">
          <ProjectThumbnail project={project} />
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-accent"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-accent"
                aria-label="Demo video"
              >
                <Play className="h-5 w-5" />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-accent"
                aria-label="Live site"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <CardContent className="p-6">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            {project.badge && (
              <Badge variant="accent" className="text-xs">
                {project.badge}
              </Badge>
            )}
          </div>
          <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [dashboardImg, setDashboardImg] = useState("");
  const [dashboardCaption, setDashboardCaption] = useState("");

  const openDashboard = (src: string, caption: string) => {
    setDashboardImg(src);
    setDashboardCaption(caption);
    setDashboardOpen(true);
  };

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader number="06." title="Featured Projects" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-accent" />
            Dashboards
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {DASHBOARDS.map((dash) => (
              <Card
                key={dash.title}
                className="cursor-pointer overflow-hidden"
                onClick={() => openDashboard(dash.thumbnail, dash.modalCaption)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={dash.thumbnail}
                    alt={dash.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="mb-2 text-lg font-semibold">{dash.title}</h4>
                  <p className="mb-4 text-sm text-[var(--color-text-muted)]">{dash.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {dash.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <Dialog open={dashboardOpen} onOpenChange={setDashboardOpen}>
          <DialogContent className="max-w-5xl">
            <DialogHeader>
              <DialogTitle>{dashboardCaption}</DialogTitle>
            </DialogHeader>
            <div className="px-6 pb-6">
              <img src={dashboardImg} alt={dashboardCaption} className="w-full rounded-lg" />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
