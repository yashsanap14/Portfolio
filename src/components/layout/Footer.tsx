import { FOOTER } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-2)] py-8">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
        <p className="text-sm text-[var(--color-text-muted)]">{FOOTER.copyright}</p>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">{FOOTER.tagline}</p>
      </div>
    </footer>
  );
}
