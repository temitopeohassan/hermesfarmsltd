import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./style.css";

function showError(msg) {
  const el = document.getElementById("app");
  if (el) {
    el.innerHTML = `<pre style="padding:20px;font-family:sans-serif;white-space:pre-wrap;word-break:break-all;">${msg}</pre>`;
  } else {
    document.body.innerHTML = `<pre style="padding:20px;font-family:sans-serif;">${msg}</pre>`;
  }
}

try {
  const rootEl = document.getElementById("app");
  if (!rootEl) {
    showError("Error: #app element not found.");
    throw new Error("Root element #app not found");
  }

  createRoot(rootEl).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} catch (err) {
  showError("App failed to load:\n\n" + (err?.message || String(err)) + (err?.stack ? "\n\n" + err.stack : ""));
  console.error(err);
}
