# Portfolio System Upgrade: Component-Based Architecture

We will transform the static `index.html` into a **Modern Component-Based System** using Vanilla JavaScript Modules. This introduces a professional development workflow without the complexity of a build tool (like Webpack/Vite) for now.

## 📂 Proposed Folder Structure

```
portfolio/
├── index.html          # Clean entry point (Skeleton only)
├── src/                # Source code
│   ├── data/           # Data layer
│   │   └── projects.js # All project information (JSON format)
│   ├── components/     # UI Logic
│   │   ├── Card.js     # Project Card component
│   │   └── Visuals.js  # Background animations (Grid, Spinner, etc.)
│   └── main.js         # Application entry point
├── css/
│   └── style.css       # Global styles
└── assets/             # Images and static files
```

## 🚀 System Architecture

### 1. Data Layer (`src/data/projects.js`)

Centralized database for all projects. Adding a project becomes adding a simple object:

```javascript
export const projects = [
  {
    id: "magic-square",
    title: "Magic Square",
    category: "Math & Visuals",
    description: "Explore the mystical properties of Magic Squares...",
    links: { live: "...", repo: "..." },
    tags: ["Logic", "Math"],
    theme: "blue", // Automatically handles colors
    visual: { type: "grid-pulse", content: "MAGIC" }, // Visual config
  },
  // ... more projects
];
```

### 2. Component Layer (`src/components/Card.js`)

A reusable function that generates consistent HTML.

- **Automated Styling:** Automatically applies Tailwind classes based on the `theme` color (e.g., `hover:border-blue-500/50`, `text-blue-500`).
- **Dynamic Content:** Renders the correct visual (Image vs. CSS Animation) based on data.

### 3. Rendering Engine (`src/main.js`)

- Imports data and components.
- Injects generated HTML into specific DOM containers (e.g., `<div id="math-section">`).

---

## 📅 Implementation Steps

1.  **System Setup:** Create `src/` directory structure.
2.  **Data Migration:** Extract all hardcoded project data from `index.html` into `projects.js`.
3.  **Component Development:** Create the smart `Card` component that handles themes and visuals.
4.  **Integration:** Clear `index.html` and wire up `main.js`.
5.  **Verification:** Ensure all animations and links work exactly as before.

---

**Benefits:**

- **Maintainability:** `index.html` shrinks from ~2000 lines to ~400 lines.
- **Scalability:** Adding a new project takes 1 minute (just add data).
- **Consistency:** Changing the card design in one file (`Card.js`) updates ALL cards instantly.

**Shall we proceed with this "Component-Based Architecture" plan?**
