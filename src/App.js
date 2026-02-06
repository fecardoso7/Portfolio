import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Toaster } from "./components/ui/toaster";

// Componentes carregados estaticamente para evitar latência de renderização
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

// Configuração dinâmica de metadados e identidade visual da aba
const FaviconHandler = () => {
  useEffect(() => {
    document.title = "Felipe Cardoso | Full Stack";

    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");

    link.type = "image/svg+xml";
    link.rel = "shortcut icon";

    // SVG inline para garantir o carregamento imediato do ícone
    const svgIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="8" fill="#050505"/>
        <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="#3b82f6" font-family="monospace" font-weight="bold" font-size="18">&gt;_</text>
      </svg>
    `.trim();

    link.href = `data:image/svg+xml,${encodeURIComponent(svgIcon)}`;
    document.getElementsByTagName("head")[0].appendChild(link);
  }, []);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <FaviconHandler />

          <div className="min-h-screen bg-white dark:bg-[#050505] transition-colors duration-700 relative flex flex-col">
            {/* Elemento visual de topo: linha de gradiente com opacidade reduzida */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-50" />

            <Header />

            {/* Fluxo principal de renderização das seções do portfólio */}
            <main className="flex-grow">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>

            <Footer />

            {/* Elemento visual de fechamento: linha de gradiente de baixa opacidade */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/5 to-transparent" />

            <Toaster />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
