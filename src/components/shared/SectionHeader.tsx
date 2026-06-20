import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: string;
}

export function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 flex flex-wrap items-center gap-4"
    >
      <span className="font-mono text-lg font-semibold text-accent">{number}</span>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      <div className="h-px min-w-[120px] flex-1 bg-gradient-to-r from-accent to-transparent" />
    </motion.div>
  );
}
