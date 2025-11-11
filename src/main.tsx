import { SwipeBarProvider } from "@luciodale/swipe-bar";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { initThemeBeforeReact } from "./hooks/useTheme.ts";
import "./index.css";

// Initialize theme early to avoid FOUC
initThemeBeforeReact();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SwipeBarProvider>
      <App />
    </SwipeBarProvider>
  </React.StrictMode>
);
