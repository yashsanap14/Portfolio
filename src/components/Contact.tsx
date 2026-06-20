import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/data/contact";
import { SOCIAL_LINKS } from "@/data/site";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useResume } from "@/components/shared/ResumeModal";

const methodIcons = {
  email: Mail,
  phone: Phone,
  location: MapPin,
};

export function Contact() {
  const { openResume } = useResume();
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("success");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="bg-[var(--color-surface-2)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader number={CONTACT.sectionNumber} title={CONTACT.title} />
        <p className="mb-12 max-w-2xl text-[var(--color-text-muted)]">{CONTACT.intro}</p>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {CONTACT.methods.map((method) => {
              const Icon = methodIcons[method.type];
              return (
                <a
                  key={method.label}
                  href={method.href}
                  className="flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all hover:border-accent hover:-translate-y-0.5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)]">{method.label}</p>
                    <p className="font-medium">{method.value}</p>
                  </div>
                </a>
              );
            })}

            <div className="flex gap-3 pt-2">
              {SOCIAL_LINKS.filter((l) => l.type !== "email").map((link) => (
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
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] transition-all hover:border-accent hover:text-accent"
                  aria-label={link.label}
                >
                  {link.type === "linkedin" && <Linkedin className="h-5 w-5" />}
                  {link.type === "github" && <Github className="h-5 w-5" />}
                  {link.type === "resume" && <FileText className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-2.5 outline-none transition-colors focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-2.5 outline-none transition-colors focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-2.5 outline-none transition-colors focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-2.5 outline-none transition-colors focus:border-accent"
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              <Send className="h-4 w-4" />
              Send Message
            </Button>
            {status === "success" && (
              <p className="text-sm font-medium text-green-600 dark:text-green-400">
                Message sent successfully!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
