// App.js
import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";

// Importação Dinâmica para otimização de performance (Lighthouse Score)
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

// Placeholder de carregamento que respeita o padrão visual do site
const SectionSkeleton = () => (
  <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#050505] animate-pulse px-6">
    <div className="h-px w-32 bg-blue-500/10 mb-6" />
    <div className="h-4 w-48 bg-slate-200 dark:bg-white/5 rounded-full mb-12" />
    <div className="w-full max-w-5xl h-[400px] bg-slate-50 dark:bg-white/[0.02] rounded-[2rem] border border-white/5" />
  </div>
);

// Gerencia dinamicamente o título e o ícone da aba (favicon)
const FaviconHandler = () => {
  useEffect(() => {
    document.title = "Felipe Cardoso | Full Stack";
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/svg+xml";
    link.rel = "shortcut icon";

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
            {/* Linha de Gradiente Premium no Topo (h-px) */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-50" />

            <Header />

            <main className="flex-grow">
              <Hero />

              {/* Suspense gerencia o carregamento das seções lazy */}
              <Suspense fallback={<SectionSkeleton />}>
                <About />
                <Skills />
                <Projects />
                <Contact />
              </Suspense>
            </main>

            <Footer />

            {/* Linha de Gradiente Final (Baixa Opacidade) */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/5 to-transparent" />

            <Toaster />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
