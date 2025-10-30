import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initThemeBeforeReact } from "./hooks/useTheme.ts";

// Initialize theme early to avoid FOUC
initThemeBeforeReact();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
