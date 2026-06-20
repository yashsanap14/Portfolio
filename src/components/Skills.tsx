import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  Database,
  Layers,
  Terminal,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { SKILL_CATEGORIES, type Skill, type SkillIcon } from "@/data/skills";
import { SectionHeader } from "@/components/shared/SectionHeader";

const categoryIcons: Record<string, LucideIcon> = {
  "fas fa-code": Code2,
  "fas fa-layer-group": Layers,
  "fas fa-cloud": Cloud,
  "fas fa-brain": Brain,
  "fas fa-tools": Wrench,
};

const deviconMap: Record<string, string> = {
  "fa-python": "python",
  "fa-java": "java",
  "fa-js": "javascript",
  "fa-html5": "html5",
  "fa-css3-alt": "css3",
  "fa-react": "react",
  "fa-node-js": "nodejs",
  "fa-bootstrap": "bootstrap",
  "fa-aws": "amazonwebservices",
  "fa-docker": "docker",
  "fa-linux": "linux",
  "fa-git-alt": "git",
  "fa-github": "github",
  "fa-microsoft": "microsoft",
};

function SkillIconDisplay({ icon, name }: { icon: SkillIcon; name: string }) {
  if (icon.type === "img") {
    return <img src={icon.src} alt={icon.alt} className="h-6 w-6 object-contain" loading="lazy" />;
  }

  const devicon = deviconMap[icon.class];
  if (devicon) {
    return (
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${devicon}/${devicon}-original.svg`}
        alt={name}
        className="h-6 w-6 object-contain"
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    );
  }

  const fallbacks: Record<string, LucideIcon> = {
    "fa-database": Database,
    "fa-terminal": Terminal,
    "fa-plug": Layers,
    "fa-robot": Brain,
    "fa-brain": Brain,
    "fa-search": Brain,
    "fa-eye": Brain,
    "fa-sync-alt": Wrench,
  };
  const Fallback = fallbacks[icon.class] ?? Code2;
  return <Fallback className="h-5 w-5 text-accent" style={icon.color ? { color: icon.color } : undefined} />;
}

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div className="inline-flex shrink-0 items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md">
      <SkillIconDisplay icon={skill.icon} name={skill.name} />
      <span className="whitespace-nowrap text-sm font-semibold">{skill.name}</span>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader number="02." title="Skills & Technologies" />
        <div className="space-y-8">
          {SKILL_CATEGORIES.map((category, i) => {
            const Icon = categoryIcons[category.icon] ?? Code2;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6"
              >
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <Icon className="h-5 w-5 text-accent" />
                  {category.title}
                </h3>
                <Marquee direction={category.direction} speed={category.speed} pauseOnHover>
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </Marquee>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
