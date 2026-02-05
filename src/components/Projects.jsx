// Projects.jsx
// Seção Projects pensada para:
// - manter padrão visual das sections (header, glow, grid)
// - performance estável (cards isolados + memo)
// - truncamento previsível de texto
// - loading de imagem sem layout shift
// - microinterações suaves (GPU-friendly)

import React, {
  memo,
  useState,
  useRef,
  useLayoutEffect,
  useCallback,
  useMemo,
} from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { mockData } from "../data/mock";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Box,
  Loader2,
} from "lucide-react";

const PROJECTS_TO_SHOW = 1;

/**
 * Card individual de projeto.
 * Isolado pra:
 * - evitar re-render do grid inteiro
 * - manter lógica local (expand, image loading, truncamento)
 */
const ProjectCard = memo(({ project, language, onOpen }) => {
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const textRef = useRef(null);

  // Resolve título e descrição sem recalcular toda renderização
  const { title, description } = useMemo(() => {
    return {
      title:
        language === "en" ? project.titleEn || project.title : project.title,
      description:
        language === "en"
          ? project.descriptionEn || project.description
          : project.description,
    };
  }, [language, project]);

  /**
   * Detecta truncamento real do texto.
   * useLayoutEffect evita flicker visual.
   */
  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;
    setIsTruncated(el.scrollHeight > el.clientHeight);
  }, [description]);

  const toggleExpand = useCallback((e) => {
    e.stopPropagation();
    setExpanded((prev) => !prev);
  }, []);

  return (
    <article className="group relative flex flex-col p-6 rounded-[2rem] bg-white dark:bg-[#080808]/40 border border-slate-200/60 dark:border-white/[0.04] backdrop-blur-sm transition-all duration-500 hover:border-blue-500/30 overflow-hidden transform-gpu">
      {/* GRADIENTE DE FUNDO (padrão visual do site) */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* HEADER DO CARD */}
      <div className="flex justify-between items-center mb-6 border-b border-slate-200/50 dark:border-white/[0.04] pb-4 relative z-10">
        <h3 className="text-[10px] font-bold text-slate-800 dark:text-slate-200 tracking-[0.2em] uppercase">
          {title}
          <span className="text-blue-500">_</span>
        </h3>
        <Box size={14} className="text-blue-500/40" />
      </div>

      {/* IMAGEM DO PROJETO */}
      <div className="relative aspect-video mb-6 overflow-hidden rounded-xl border border-slate-200/50 dark:border-white/[0.05] bg-slate-100 dark:bg-white/[0.02]">
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-5 h-5 text-blue-500/20 animate-spin" />
          </div>
        )}

        {project.image && (
          <img
            src={project.image}
            alt={title}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${
              imgLoaded
                ? "opacity-80 group-hover:opacity-100 grayscale-[0.4] group-hover:grayscale-0"
                : "opacity-0"
            }`}
          />
        )}
      </div>

      {/* CONTEÚDO */}
      <div className="flex-1 relative z-10">
        <div className="relative mb-6">
          <p
            ref={textRef}
            className={`text-slate-600 dark:text-white/50 text-[11px] leading-relaxed transition-all duration-300 ${
              expanded ? "line-clamp-none" : "line-clamp-2"
            }`}
          >
            {description}
          </p>

          {(isTruncated || expanded) && (
            <button
              onClick={toggleExpand}
              className="mt-2 flex items-center gap-1 text-[9px] font-bold text-blue-500/60 hover:text-blue-400 transition-colors uppercase tracking-widest"
            >
              {expanded
                ? language === "pt"
                  ? "Menos"
                  : "Less"
                : language === "pt"
                  ? "Mais"
                  : "More"}
              {expanded ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
            </button>
          )}
        </div>

        {/* TECNOLOGIAS */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(project.technologies || []).slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-[8px] font-bold uppercase tracking-widest bg-slate-50 dark:bg-white/[0.03] text-slate-400 dark:text-white/30 rounded-md border border-slate-200/50 dark:border-white/[0.05]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BOTÕES */}
        <div className="flex gap-3 mt-auto">
          <button
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-blue-600/10 active:scale-95"
            onClick={() => onOpen(project.liveUrl)}
          >
            <ExternalLink size={14} /> Demo
          </button>

          <button
            className="p-3 bg-white dark:bg-white/[0.03] text-slate-400 hover:text-blue-500 border border-slate-200 dark:border-white/[0.05] rounded-xl transition-all duration-300 active:scale-95"
            onClick={() => onOpen(project.githubUrl)}
          >
            <Github size={16} />
          </button>
        </div>
      </div>
    </article>
  );
});

/**
 * Seção Projects.
 * Mantém o mesmo padrão estrutural de About e Contact.
 */
const Projects = memo(() => {
  const { language } = useLanguage();

  // evita recalcular slice em toda renderização
  const displayedProjects = useMemo(
    () => (mockData.projects || []).slice(0, PROJECTS_TO_SHOW),
    [],
  );

  const openLink = useCallback((url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#050505] transition-colors duration-700 snap-start pt-20 pb-16 overflow-y-auto lg:overflow-hidden transform-gpu"
    >
      {/* BACKGROUND GLOW (padrão global) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.03),transparent_70%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent z-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[120px] bg-blue-500/5 dark:bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      {/* HEADER PADRONIZADO (igual About e Contact) */}
      <div className="w-full flex flex-col items-center mb-16 px-6 z-10 shrink-0">
        <div className="flex items-center gap-4 md:gap-6 group">
          <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-blue-500/40" />
          <div className="flex flex-col items-center">
            <span className="text-blue-500 font-mono text-[10px] tracking-[0.4em] font-bold mb-2">
              03.
            </span>
            <h2 className="text-slate-900 dark:text-white font-mono text-xs md:text-sm uppercase tracking-[0.8em] md:tracking-[1.2em] opacity-70 group-hover:opacity-100 transition-opacity duration-500">
              {language === "pt" ? "Projetos" : "Projects"}
            </h2>
          </div>
          <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-blue-500/40" />
        </div>
      </div>

      {/* GRID */}
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              language={language}
              onOpen={openLink}
            />
          ))}
        </div>
      </div>

      {/* LINHA FINAL PADRÃO */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-blue-500/10 dark:via-blue-400/10 to-transparent" />
    </section>
  );
});

export default Projects;
