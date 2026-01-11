**Free React UI Components powered by Tailwind CSS**
TailGrids is an open-source React UI component library built with Tailwind CSS. It helps you ship modern web apps faster using a large collection of production-ready components, blocks, and templates - all designed for performance, accessibility, and consistent UI.

Build dashboards, SaaS products, landing pages, and internal tools without reinventing UI from scratch.

---



### ✨ Feature Highlights

TailGrids is designed for real-world production use. Every component follows modern UI patterns and works seamlessly with React and Tailwind CSS.
- **500+ Free & Essential UI Components** – Buttons, Forms, Navbars, Footers, Cards, Modals, Alerts, Dropdowns, and much more
- **React + TypeScript** first-class support (JSX/TSX rebuild in V3)
- **Powered by Tailwind CSS** – full customization using utility classes
- **Production-ready** – Optimized for performance, accessibility (a11y), dark mode & responsiveness
- **New in V3** — CLI for instant component installation (`npx tailgrids add button`)
- Modern **design tokens** & theme control system
- Built-in support for **Next.js**, Storybook, ESLint, Prettier & Playwright
- Unified free + pro ecosystem (same design language)
- Beautiful **open-source SVG icons** library included

---

## ✨ What’s Included

### React UI Components
A growing collection of reusable React components covering common UI needs:

- Buttons, badges, alerts  
- Forms, inputs, checkboxes, radios  
- Modals, drawers, dropdowns  
- Navigation, tabs, pagination  
- Tables, lists, cards  
- Pricing, testimonials, FAQs  
- Authentication and onboarding sections  

### UI Blocks
Prebuilt UI blocks to speed up development:

- Hero sections  
- Feature sections  
- Call-to-action blocks  
- Headers and footers  
- Content sections  
- Dashboard layouts  

### Templates
Ready-to-use templates that combine components and blocks into complete pages and layouts.

---

## 🧠 Built for Developers

TailGrids focuses on developer experience and maintainability.

- Clean, readable React components  
- Utility-first styling with Tailwind CSS  
- Easy to customize and extend  
- No heavy dependencies  
- Works with Vite, Next.js, CRA, and other React setups  

---

## ♿ Accessibility First

Accessibility is not an afterthought.

- Semantic markup  
- Keyboard-friendly components  
- Proper focus handling  
- Screen reader-friendly patterns  
- WCAG-aware design decisions  

---

## ⚡ Performance Optimized

- Minimal CSS overhead  
- Tree-shakeable components  
- No unnecessary JavaScript  
- Tailwind-powered styling for fast builds  

---

## 📦 Installation

Get up and running with TailGrids in your React project in just a few steps. Make sure you have Tailwind CSS installed in your React / Next.js project.

### Initialize TailGrids

Run the TailGrids init command in your project root:

```bash
npx tailgrids@latest init
```
Then import components:

```bash
import { Button } from '@/components/core/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="primary">Hello TailGrids!</Button>
    </main>
  );
}
```
