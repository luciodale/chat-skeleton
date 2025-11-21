import { SwipeBarProvider } from "@luciodale/swipe-bar";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  initThemeBeforeReact,
  ThemeProvider,
} from "./context/ThemeContext.tsx";
import { Home } from "./pages/Home.tsx";
import { Chat } from "./pages/Chat.tsx";
import "./App.css";
import "./index.css";

// Initialize theme early to avoid FOUC
initThemeBeforeReact();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/chat" replace />} />
          <Route
            path="/home"
            element={
              <SwipeBarProvider
                showOverlay={true}
                showToggle={false}
                sidebarWidthPx={window.innerWidth}
              >
                <Home />
              </SwipeBarProvider>
            }
          />
          <Route
            path="/chat"
            element={
              <SwipeBarProvider showOverlay={false}>
                <Chat />
              </SwipeBarProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
