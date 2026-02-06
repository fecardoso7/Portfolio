import React, { memo, useCallback, useState, useRef, useEffect } from "react";
import {
  Github,
  Linkedin,
  ArrowRight,
  ChevronDown,
  Download,
  FileText,
} from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { mockData } from "../data/mock";

/* =========================================================
   Componente do menu de currículo
   ========================================================= */

const CVMenu = memo(({ labels, profile, onSelect, direction, menuRef }) => {
  return (
    <div
      ref={menuRef}
      className={`absolute left-0 w-full md:w-56 p-2 
      bg-white dark:bg-[#0a0a0a] backdrop-blur-2xl 
      border border-slate-200 dark:border-white/10 
      rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] 
      dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] 
      z-50 transition-all duration-300 ease-out

      ${
        direction === "up"
          ? "bottom-[calc(100%+12px)] origin-bottom animate-dropdown-up"
          : "top-[calc(100%+12px)] origin-top animate-dropdown-down"
      }
      `}
    >
      <div className="flex flex-col gap-1">
        {/* Opção de CV em português */}
        <button
          onClick={() => onSelect(profile.resumes?.pt)}
          className="group/item relative w-full px-5 py-5 rounded-xl flex items-center justify-between overflow-hidden transition-all duration-500"
        >
          <div className="absolute inset-0 bg-blue-500/10 translate-x-[-101%] group-hover/item:translate-x-0 transition-transform duration-500 ease-out" />
          <span className="relative text-[10px] uppercase font-bold tracking-[0.2em] text-slate-800 dark:text-slate-200 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-500 transition-colors">
            {labels.pt}
          </span>
          <Download
            size={16}
            className="relative text-blue-600 dark:text-blue-500 opacity-0 scale-50 group-hover/item:opacity-100 group-hover/item:scale-100 transition-all duration-500"
          />
        </button>

        <div className="h-px w-[90%] bg-slate-100 dark:bg-white/5 mx-auto" />

        {/* Opção de CV em inglês */}
        <button
          onClick={() => onSelect(profile.resumes?.en)}
          className="group/item relative w-full px-5 py-5 rounded-xl flex items-center justify-between overflow-hidden transition-all duration-500"
        >
          <div className="absolute inset-0 bg-blue-500/10 translate-x-[-101%] group-hover/item:translate-x-0 transition-transform duration-500 ease-out" />
          <span className="relative text-[10px] uppercase font-bold tracking-[0.2em] text-slate-800 dark:text-slate-200 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-500 transition-colors">
            {labels.en}
          </span>
          <Download
            size={16}
            className="relative text-blue-600 dark:text-blue-500 opacity-0 scale-50 group-hover/item:opacity-100 group-hover/item:scale-100 transition-all duration-500"
          />
        </button>
      </div>
    </div>
  );
});

/* =========================================================
   Seção principal da página
   ========================================================= */

const Hero = () => {
  // idioma e traduções
  const { t, language } = useLanguage();

  // estado do menu de currículo
  const [open, setOpen] = useState(false);
  const [direction, setDirection] = useState("down");

  // referências do botão e do menu
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  // dados do perfil
  const profile = mockData.profile ?? {};
  const isPT = language === "pt";

  // texto de status
  const statusText = isPT
    ? "Disponível para novos projetos"
    : "Available for new projects";

  // labels do menu de currículo
  const cvLabels = {
    pt: isPT ? "Português" : "Portuguese",
    en: isPT ? "Inglês" : "English",
  };

  // abre links externos
  const openLink = useCallback((url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  // seleciona CV e fecha o menu
  const handleSelectCV = useCallback(
    (url) => {
      openLink(url);
      setOpen(false);
    },
    [openLink],
  );

  // define direção do menu
  const calcDirection = useCallback(() => {
    if (!buttonRef.current) return "down";

    const rect = buttonRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const menuHeight = 160;

    return spaceBelow < menuHeight && spaceAbove > spaceBelow ? "up" : "down";
  }, []);

  // alterna o menu de currículo
  const toggleMenu = useCallback(() => {
    setDirection(calcDirection());
    setOpen((prev) => !prev);
  }, [calcDirection]);

  // fecha o menu ao clicar fora
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (
        !menuRef.current?.contains(e.target) &&
        !buttonRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // fecha o menu ao pressionar ESC
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open]);

  // scroll suave para seções
  const scrollToId = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 snap-start transform-gpu bg-white dark:bg-[#050505] transition-colors duration-500 py-12 md:py-0"
    >
      {/* Background da seção */}
      <div className="absolute inset-0 pointer-events-none transform-gpu overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.06),transparent_80%)] dark:bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.04),transparent_80%)]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[280px] md:w-[800px] h-[400px] bg-blue-600/[0.05] blur-[100px] md:blur-[120px] rounded-full" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-48 md:h-64 bg-gradient-to-t from-blue-500/[0.03] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto w-full z-10 flex flex-col gap-8 md:gap-14">
        {/* Status */}
        <div className="flex items-center gap-3 w-fit px-4 py-2 rounded-full bg-slate-200/40 dark:bg-white/[0.02] border border-slate-300/50 dark:border-white/[0.05] backdrop-blur-md shadow-sm shrink-0">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
          </span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold text-slate-600 dark:text-slate-400 whitespace-nowrap">
            {statusText}
          </span>
        </div>

        {/* Nome, título e descrição */}
        <div className="space-y-4 md:space-y-8 text-left">
          <h1 className="flex items-baseline text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-slate-900 dark:text-white whitespace-nowrap">
            {t.hero.name}
            <span className="block w-[0.12em] h-[0.12em] rounded-full bg-blue-500 ml-2 shadow-[0_0_20px_rgba(59,130,246,0.6)] opacity-90" />
          </h1>

          <div className="space-y-3">
            <p className="text-base sm:text-xl lg:text-2xl text-slate-700 dark:text-slate-400 leading-relaxed font-light tracking-tight">
              <span className="text-slate-950 dark:text-slate-200 font-medium border-b border-blue-500/30">
                {t.hero.title}
              </span>
            </p>
            <p className="text-xs sm:text-lg text-slate-500 dark:text-slate-400/70 font-light max-w-[500px] md:max-w-[700px]">
              {t.hero.description}
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300/50 dark:via-blue-500/10 to-transparent" />

        {/* Área de ações */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 w-full">
          {/* Botão de currículo */}
          <div ref={buttonRef} className="relative group w-full md:w-auto">
            <Button
              onClick={toggleMenu}
              className="w-full md:w-auto bg-slate-950 text-white dark:bg-white dark:text-black 
                         px-8 md:px-12 py-7 md:py-8 rounded-2xl 
                         text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase 
                         shadow-xl hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white 
                         transition-all duration-500 active:scale-95 flex items-center justify-center gap-3 z-30"
            >
              <FileText size={16} className={open ? "text-blue-400" : ""} />
              {t.hero.resume}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </Button>

            {open && (
              <CVMenu
                labels={cvLabels}
                profile={profile}
                onSelect={handleSelectCV}
                direction={direction}
                menuRef={menuRef}
              />
            )}
          </div>

          {/* Links externos */}
          <div className="flex items-center gap-6 md:gap-10 px-6 py-5 md:px-10 rounded-2xl bg-slate-100/50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/[0.04] backdrop-blur-sm w-full md:w-auto justify-center">
            <div className="flex items-center gap-6">
              {/* GitHub */}
              <button
                onClick={() => openLink(profile.github)}
                className="group flex items-center gap-0 md:hover:gap-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-all duration-500 ease-in-out"
              >
                <Github size={20} />
                <span className="hidden md:block max-w-0 overflow-hidden opacity-0 group-hover:max-w-[80px] group-hover:opacity-100 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500">
                  GitHub
                </span>
              </button>

              {/* LinkedIn */}
              <button
                onClick={() => openLink(profile.linkedin)}
                className="group flex items-center gap-0 md:hover:gap-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-all duration-500 ease-in-out"
              >
                <Linkedin size={20} />
                <span className="hidden md:block max-w-0 overflow-hidden opacity-0 group-hover:max-w-[80px] group-hover:opacity-100 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500">
                  LinkedIn
                </span>
              </button>
            </div>

            <div className="h-8 w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-white/10 to-transparent" />

            {/* Scroll para projetos */}
            <button
              onClick={() => scrollToId("projects")}
              className="group flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-all text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              <span className="relative whitespace-nowrap">
                {t.hero.viewProjects}
              </span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform duration-500"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div
        onClick={() => scrollToId("about")}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer z-20 group"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap">
          {isPT ? "Rolar" : "Scroll"}
        </span>

        <div className="scroll-arrow" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.05] to-transparent" />
    </section>
  );
};

export default memo(Hero);
