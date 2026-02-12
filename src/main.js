import {
  renderCreativeLab,
  renderMathData,
  renderGaming,
  renderAILab,
} from "./components/ProjectRenderer.js";
import { FourierBackground } from "./components/FourierBackground.js";
import { renderHero } from "./components/Hero.js";
import { renderYouTube } from "./components/YouTube.js";
import { renderContact } from "./components/Contact.js";
import { renderFooter } from "./components/Footer.js";
import { renderNavigation, initNavigationLogic } from "./components/Navigation.js";
import { initVisuals, observeElements } from "./components/Visuals.js";

document.addEventListener("DOMContentLoaded", () => {
  new FourierBackground("canvas-bg");
  renderNavigation();
  initNavigationLogic();
  
  // Render structure
  renderHero();
  
  // Render projects
  renderAILab();
  renderCreativeLab();
  renderMathData();
  renderGaming();
  
  // Render other sections
  renderYouTube();
  renderContact();
  renderFooter();

  // Initialize all visual effects
  initVisuals();
  
  // Observe dynamically added project cards
  // Wait slightly for DOM update if needed, but synchronous render should be fine.
  observeElements(".project-card, footer");
});

