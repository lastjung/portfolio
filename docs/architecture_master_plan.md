# Portfolio Code Architecture & Refactoring Master Plan

This document integrates the strategic vision of `code-splitting-plan.md` with the component-based execution strategy of `system_upgrade_plan.md`.

## 1. Executive Summary

- **Goal**: Transform the monolithic `index.html` (~2000 lines) into a modular, data-driven architecture.
- **Approach**: Component-Based System using Vanilla JavaScript Modules (No-Build Tool required initially).
- **Outcome**:
  - `index.html` size reduction: ~80% (Estimate: < 400 lines)
  - Scalability: Add new projects via config file, not HTML copy-paste.
  - Maintainability: Centralized styling and logic.

## 2. Directory Structure (The New Standard)

```
portfolio/
├── index.html              # Shell / Entry Point (Skeleton HTML)
├── docs/                   # Documentation
│   └── architecture.md     # This Master Plan
├── src/                    # Logic Layer (New)
│   ├── data/
│   │   └── projects.js     # Central Database (JSON-like Object)
│   ├── components/
│   │   ├── Card.js         # Project Card Component (HTML Generator)
│   │   └── Visuals.js      # Background Graphics/Animations
│   └── main.js             # Application Entry Point (Renderer)
├── css/                    # Style Layer
│   ├── main.css            # Global Styles & Layout
│   └── components.css      # Component-specific styles (Glassmorphism, etc.)
└── assets/                 # Static Assets
```

## 3. Implementation Strategy (Phased Rollout)

### Phase 1: Core Splitting (Immediate)

**Objective**: Separate concerns to stop the bleeding in `index.html`.

- **Action**:
  1. Create `css/main.css` and move all `<style>` blocks there.
  2. Create `src/main.js` and move all script logic there.
  3. Link these files in `index.html`.

### Phase 2: Data Extraction (The Cleanup)

**Objective**: Remove hardcoded HTML content.

- **Action**:
  1. Extract project data (Title, Desc, Links, Theme, Tags) from `index.html`.
  2. Populate `src/data/projects.js` with this data.
  3. Create `src/components/Card.js` to accept this data and return HTML strings.

### Phase 3: Dynamic Rendering (The Engine)

**Objective**: Automate the UI generation.

- **Action**:
  1. In `src/main.js`, import data and components.
  2. Write a rendering loop to inject cards into the DOM containers (e.g., `#math-section`, `#ai-lab`).
  3. Clear the hardcoded HTML from `index.html`.

## 4. Technical Specifications

### Data Model (`projects.js` Example)

```javascript
export const projects = [
  {
    id: "magic-square",
    category: "math", // math, ai, game
    title: "Magic Square",
    desc: "Explore the mystical properties of Magic Squares...",
    bgTheme: "blue", // maps to 'border-blue-500', 'text-blue-500' etc.
    links: { live: "...", repo: "..." },
    visual: { type: "grid", animation: "pulse" },
  },
];
```

### Component Logic (`Card.js` Concept)

```javascript
export function createCard(project) {
  const themeColor = project.bgTheme; // e.g., 'blue'
  return `
    <div class="group relative glass hover:border-${themeColor}-500/50 ...">
       <!-- Dynamic Content Here -->
    </div>
  `;
}
```

## 5. Execution Checklist

- [ ] Create folder structure (`src/data`, `src/components`, `css`)
- [ ] Migrate CSS
- [ ] Create `projects.js` database
- [ ] Implement `Card.js` generator
- [ ] Wire up `main.js` to render
- [ ] Verify functionality & Git Commit

---

_© 2026 ENGINEERING.PORTFOLIO | Architecture Master Plan_
