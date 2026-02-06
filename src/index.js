// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

/**
 * Ponto de entrada da aplicação.
 * Renderiza o componente raiz dentro do elemento 'root' do HTML.
 * O StrictMode ajuda a identificar efeitos colaterais e práticas depreciadas.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
