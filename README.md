# Portfolio — Gaétan La Selve

Personal portfolio of **Gaétan La Selve**, full-stack web & iOS developer — _from concept to production._

🔗 **Live site:** [codebygaetan.fr](https://codebygaetan.fr)

This repository is published as part of my portfolio to showcase my work. It is not intended to be reused.

## Overview

A fast, server-rendered single-page portfolio built with Angular. It presents who I am, the services I offer, a selection of projects (with inline video demos), and a contact form — no back-end of my own, the form is handled by [Web3Forms](https://web3forms.com).

| | |
|---|---|
| **Framework** | Angular 22 (standalone components, signals) |
| **Rendering** | SSR / prerendering via `@angular/ssr` |
| **Styling** | SCSS — neumorphism design system (custom tokens & mixins) |
| **Contact form** | Web3Forms (public access key, no server) |
| **Hosting** | GitHub Pages — custom domain `codebygaetan.fr` |
| **CI/CD** | GitHub Actions — build & deploy on every push to `main` |

## Sections

- **Hero** — intro & headline
- **About** — background & profile
- **Services** — what I offer
- **Stats** — key figures
- **Projects** — IntuiFit, Lector, Baudy Training, Removerr, Fitime (with device-framed video demos & lightbox)
- **Contact** — message form

## Local development

```bash
npm install
npm start
```

Then open `http://localhost:4200/`.

## Build

```bash
npm run build
```

Artifacts are emitted to `dist/portfolio/browser`.

## Tests

```bash
npm test
```

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the app and publishes it to GitHub Pages.

---

Made by [Gaétan La Selve](https://github.com/CodeByGaetan).
