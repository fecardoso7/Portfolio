// Skills.jsx
import React, { memo, useMemo } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { mockData } from "../data/mock";
import {
  Code2,
  Database,
  Wrench,
  FileCode,
  Braces,
  Palette,
  Layout,
  Server,
  Box,
  GitBranch,
  Github,
  FlaskConical,
  Blocks,
  Bug,
  Search,
  Cpu,
  Terminal,
} from "lucide-react";

// Mapeamento de ícones por tecnologia
const ICON_REGISTRY = Object.freeze({
  javascript: FileCode,
  typescript: FileCode,
  html: Code2,
  css: Palette,
  react: Braces,
  reactjs: Braces,
  nextjs: Braces,
  tailwindcss: Layout,
  tailwind: Layout,
  redux: Blocks,
  nodejs: Server,
  node: Server,
  express: Cpu,
  mysql: Database,
  restapis: Server,
  python: Code2,
  git: GitBranch,
  github: Github,
  docker: Box,
  jest: FlaskConical,
  mocha: Bug,
  reacttestinglibrary: Search,
});

// Ícones de reserva caso a tecnologia não esteja no registro
const FALLBACK_ICONS = Object.freeze({
  frontend: Code2,
  backend: Server,
  tools: Wrench,
  default: Wrench,
});

// Limpa strings para facilitar o match de ícones
const normalizeKey = (value) =>
  value ? value.toLowerCase().replace(/[^a-z0-9]/g, "") : "";

// Resolve qual ícone exibir
const getIcon = (name, category) =>
  ICON_REGISTRY[normalizeKey(name)] ||
  FALLBACK_ICONS[category] ||
  FALLBACK_ICONS.default;

// Componente para o card pequeno de cada skill
const SkillItem = memo(({ name, category }) => {
  const Icon = getIcon(name, category);

  return (
    <div className="group flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-[#080808]/40 border border-slate-200/50 dark:border-white/[0.04] transition-all duration-500 hover:border-blue-500/30 hover:bg-blue-500/[0.02] cursor-default relative overflow-hidden transform-gpu">
      {/* Glow interno no hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <Icon
        size={18}
        className="text-blue-500/50 mb-2 transition-all duration-500 group-hover:text-blue-400 group-hover:scale-110 relative z-10"
      />
      <span className="text-[9px] font-bold text-slate-400 dark:text-white/30 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-center uppercase tracking-[0.15em] relative z-10">
        {name}
      </span>
    </div>
  );
});

const Skills = memo(() => {
  const { t, language } = useLanguage();
  const isPT = language === "pt";

  // Organiza as skills por categoria (Frontend, Backend, etc)
  const skillsByCategory = useMemo(() => {
    const grouped = { frontend: [], backend: [], tools: [] };
    const skills = mockData?.skills || [];

    skills.forEach((skill) => {
      const cat = skill.category?.toLowerCase();
      if (grouped[cat]) grouped[cat].push(skill);
    });

    return grouped;
  }, []);

  const categories = useMemo(
    () => [
      { key: "frontend", title: t?.skills?.frontend || "Frontend" },
      { key: "backend", title: t?.skills?.backend || "Backend" },
      { key: "tools", title: t?.skills?.tools || "Tools" },
    ],
    [t],
  );

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#050505] transition-colors duration-700 snap-start pt-20 pb-12 overflow-y-auto lg:overflow-hidden"
    >
      {/* Camada de background e efeitos de luz */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.03),transparent_70%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent z-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[120px] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      {/* Cabeçalho da seção com linha de gradiente lateral */}
      <div className="w-full flex flex-col items-center mb-10 lg:mb-16 px-6 z-10 shrink-0">
        <div className="flex items-center gap-4 md:gap-6 group">
          <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent via-blue-500/30 to-blue-500/30" />
          <div className="flex flex-col items-center">
            <span className="text-blue-500 font-mono text-[10px] tracking-[0.4em] font-bold mb-2">
              02.
            </span>
            <h2 className="text-slate-900 dark:text-white font-mono text-xs md:text-sm uppercase tracking-[0.8em] md:tracking-[1.2em] opacity-60">
              {isPT ? "Tecnologias" : "Technologies"}
            </h2>
          </div>
          <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent via-blue-500/30 to-blue-500/30" />
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {categories.map(({ key, title }) => (
            <article
              key={key}
              className="group/card relative flex flex-col p-8 rounded-[2rem] bg-white dark:bg-[#080808]/40 border border-slate-200/60 dark:border-white/[0.04] backdrop-blur-sm transition-all duration-500 hover:border-blue-500/20"
            >
              {/* Brilho interno do card */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/[0.02] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 rounded-[2rem]" />

              <div className="flex justify-between items-center mb-8 border-b border-slate-200/50 dark:border-white/[0.04] pb-4 relative z-10">
                <h3 className="text-[11px] font-bold text-slate-800 dark:text-slate-200 tracking-[0.22em] uppercase">
                  {title}
                  <span className="text-blue-500">_</span>
                </h3>
                <Terminal size={14} className="text-blue-500/40" />
              </div>

              {/* Grid de tecnologias da categoria */}
              <div className="grid grid-cols-2 gap-3 relative z-10">
                {skillsByCategory[key]?.length > 0 ? (
                  skillsByCategory[key].map((skill) => (
                    <SkillItem
                      key={skill.name}
                      name={skill.name}
                      category={key}
                    />
                  ))
                ) : (
                  <div className="col-span-2 h-20 flex items-center justify-center opacity-20">
                    <div className="w-4 h-4 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Linha final de separação */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
    </section>
  );
});

export default Skills;
