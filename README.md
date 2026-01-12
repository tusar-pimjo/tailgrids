# Free React UI Components powered by Tailwind CSS

Tailgrids is an open-source React UI component library built with Tailwind CSS. Ship modern web applications faster through an extensive collection of production-ready components, blocks, and templates. All featuring a sleek, handcrafted, and pixel-perfect design optimized for exceptional user experience, high performance, accessibility, and consistent UI across projects. 

Build websites, dashboards, SaaS products, landing pages, and internal tools effortlessly, without reinventing the UI from scratch or relying on generic UI commonly available online. 

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

### 🔗 Useful Links

* **Website** – [https://tailgrids.com](https://tailgrids.com)
* **Documentation** – [https://tailgrids.com/docs](https://tailgrids.com/docs)
* **Components** – [https://tailgrids.com/docs/components](https://tailgrids.com/docs/components)
* **Templates** – [https://tailgrids.com/templates](https://tailgrids.com/templates)
* **Changelog & Updates** – [https://tailgrids.com/blog](https://tailgrids.com/blog)
* **GitHub Issues** – Use this repo to report bugs or request features

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

Set up TailGrids in your React project in a few minutes.

#### Install & Initialize

Run this in your project root:

```bash
npx @tailgrids/cli@latest init
```

This sets up TailGrids, creates the config and base styles, and installs required dependencies.

---

#### Add Styles

Copy the contents of `tailgrids.css` into your main CSS file, like `globals.css` or `app.css`.

---

#### Add a Component

Add components using the CLI:

```bash
npx @tailgrids/cli@latest add button
```
---

#### Use It

Import and use the component:

```jsx
import { Button } from "@/components/core/button";

export default function Home() {
  return <Button variant="primary">Hello TailGrids!</Button>;
}
```
---



