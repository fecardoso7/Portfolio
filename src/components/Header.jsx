// Header.jsx - Apenas ajuste de transição e estética de scroll
import React, { useState, useEffect, useCallback, memo } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

const SECTIONS = ["about", "skills", "projects", "contact"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 32);

      let current = "";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 150;
          if (y >= top) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }, []);

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
      ${
        scrolled
          ? "bg-white/70 dark:bg-[#050505]/70 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
          : "bg-transparent border-b border-transparent"
      }
      `}
    >
      <div
        className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${scrolled ? "h-[60px]" : "h-[80px]"}
        `}
      >
        {/* Logo / Nome */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-white hover:opacity-80 transition-opacity"
        >
          Felipe <span className="text-blue-500">Cardoso</span>
        </button>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8 relative">
          {navItems.map((item, i) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative group py-2"
              >
                <span className="absolute -top-2 text-[9px] font-mono text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  0{i + 1}
                </span>

                <span
                  className={`text-[11px] uppercase tracking-[0.35em] font-semibold transition-colors duration-300
                  ${
                    active
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 dark:text-white/50 group-hover:text-slate-900 dark:group-hover:text-white"
                  }
                  `}
                >
                  {item.label}
                </span>

                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] bg-blue-500 transition-all duration-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]
                  ${active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-60"}
                  `}
                />
              </button>
            );
          })}
        </nav>

        {/* Controles */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 pr-2 mr-1 border-r border-slate-200 dark:border-white/10">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="h-8 px-2 text-slate-500 dark:text-white/50 hover:text-blue-500 hover:bg-transparent transition-colors"
            >
              <span className="text-[10px] font-mono font-bold tracking-widest">
                {language === "pt" ? "EN" : "PT"}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8 text-slate-500 dark:text-white/50 hover:text-blue-500 hover:bg-transparent transition-all"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 text-slate-900 dark:text-white transition-transform active:scale-90"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Linha final de gradiente com Glow sutil (Regra Premium) */}
      <div
        className={`w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transition-all duration-700
        ${scrolled ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Menu Mobile Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#050505]/95 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/10 transition-all duration-500
        ${menuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-3 invisible"}
        `}
      >
        <nav className="flex flex-col items-center gap-8 py-10">
          {navItems.map((item, i) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex flex-col items-center"
              >
                <span className="text-[10px] font-mono text-blue-500 mb-2">
                  0{i + 1}
                </span>
                <span
                  className={`text-sm uppercase tracking-[0.55em] font-semibold transition-colors
                  ${active ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-white/60"}
                `}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
