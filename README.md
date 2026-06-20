# Yash Sanap — Portfolio

Modern React + TypeScript portfolio built with Vite, Tailwind CSS, Framer Motion, and shadcn/ui-style components.

## Stack

- **React 19** + **TypeScript**
- **Vite** — fast dev server & production builds
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — section & card animations
- **lucide-react** — icons
- **Radix UI** — accessible dialog primitives (shadcn/ui pattern)

## Quick Start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview production build
```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Certifications.tsx
│   ├── Education.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── layout/          # Navbar, Footer, scroll utilities
│   ├── shared/          # SectionHeader, ResumeModal
│   └── ui/              # Button, Badge, Card, Dialog, Marquee
├── data/
│   ├── site.ts
│   ├── about.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── certifications.ts
│   ├── education.ts
│   ├── projects.ts
│   └── contact.ts
├── hooks/
│   └── useTheme.tsx
├── App.tsx
└── main.tsx
public/
└── Assets/              # Images & logos
legacy-index.html        # Original static HTML (archived)
```

## Updating Content

Edit the files in `src/data/` — no need to touch component logic for most content changes:

| File | Content |
|------|---------|
| `site.ts` | Name, social links, nav, resume URLs |
| `about.ts` | Bio, highlights, stats |
| `skills.ts` | Skill categories & marquee data |
| `experience.ts` | Work history |
| `certifications.ts` | All certifications |
| `education.ts` | Degrees & coursework |
| `projects.ts` | Projects & dashboards |
| `contact.ts` | Contact section copy |

## Deployment

Build and deploy the `dist/` folder to GitHub Pages, Netlify, or Vercel:

```bash
npm run build
```

For GitHub Pages, set the base path in `vite.config.ts` if deploying to a project subpath.

## Legacy

The original static site is preserved as `legacy-index.html`, `styles.css`, and `script.js` for reference.
