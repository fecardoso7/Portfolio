import React, { memo, useMemo } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Trophy, Code2, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const { t, language } = useLanguage();
  const isPT = language === "pt";

  // Memorização dos dados para evitar re-cálculos desnecessários durante re-renders
  const stats = useMemo(
    () => [
      {
        label: "STATUS",
        value: isPT ? "Aberto a Oportunidades" : "Open to Work",
        icon: Briefcase,
      },
      {
        label: "EXPERIÊNCIA",
        value: isPT ? "15+ Projetos" : "15+ Projects",
        icon: Trophy,
      },
      {
        label: "STACK",
        value: "Full Stack Skills",
        icon: Code2,
      },
    ],
    [isPT],
  );

  // Configuração de animação padrão para entrada suave dos elementos (Fade-in Up)
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen lg:h-screen flex flex-col items-center justify-center 
                 bg-white dark:bg-[#050505] transition-colors duration-700 snap-start 
                 pt-20 pb-12 overflow-y-auto lg:overflow-hidden transform-gpu"
    >
      {/* Camada de UI Premium: Background com Glow central e linha de gradiente superior */}
      <div className="absolute inset-0 pointer-events-none transform-gpu">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.04),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.03),transparent_70%)] opacity-100" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-blue-500/20 dark:via-blue-400/20 to-transparent z-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[120px] bg-blue-500/5 dark:bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      {/* Título da Seção: Segue o padrão de tracking largo e numeração mono */}
      <motion.div
        {...fadeInUp}
        className="w-full flex flex-col items-center mb-10 lg:mb-16 px-6 z-10 shrink-0"
      >
        <div className="flex items-center gap-4 md:gap-6 group">
          <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-blue-500/40" />
          <div className="flex flex-col items-center">
            <span className="text-blue-500 font-mono text-[10px] tracking-[0.4em] font-bold mb-2">
              01.
            </span>
            <h2 className="text-slate-900 dark:text-white font-mono text-xs md:text-sm uppercase tracking-[0.8em] md:tracking-[1.2em] opacity-70">
              {isPT ? "Sobre Mim" : "About Me"}
            </h2>
          </div>
          <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-blue-500/40" />
        </div>
      </motion.div>

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10 flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center w-full">
          {/* Container da Imagem: Efeito de borda sutil e glow lateral no hover */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative group flex justify-center lg:justify-start order-2 lg:order-1 transform-gpu"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />
            <div className="relative w-full max-w-[240px] sm:max-w-[320px] xl:max-w-[400px] rounded-[2rem] overflow-hidden border border-slate-200/50 dark:border-white/[0.05] bg-slate-50 dark:bg-[#080808]">
              <img
                src="/profile.webp"
                alt="Profile"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Área de Texto e Estatísticas */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-10 order-1 lg:order-2">
            <motion.p
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm md:text-xl xl:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-light tracking-tight text-center lg:text-left"
            >
              {t.about.description}
            </motion.p>

            {/* Grid de Cards: Implementação do padrão Premium com gradiente de subida e linha de brilho base */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                animate: { transition: { staggerChildren: 0.1 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-6 border-t border-slate-100 dark:border-white/[0.03]"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={{
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                    }}
                    transition={{ duration: 0.5 }}
                    className="group/stat relative p-4 md:p-5 rounded-2xl 
                               bg-white/50 dark:bg-[#080808] 
                               border border-slate-200/60 dark:border-white/[0.05] 
                               transition-all duration-500 overflow-hidden
                               flex flex-col items-center lg:items-start cursor-default
                               hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/[0.05] dark:hover:shadow-none"
                  >
                    {/* Efeito Visual: Gradiente de Subida Interno (Ativado no Hover) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/[0.04] to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500" />

                    {/* Efeito Visual: Linha de Glow na base do card */}
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 text-slate-400 dark:text-slate-500 group-hover/stat:text-blue-500 transition-colors duration-500 mb-2 md:mb-3">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>

                    <p className="relative z-10 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 dark:text-slate-500 mb-1 transition-colors group-hover/stat:text-slate-500 dark:group-hover/stat:text-slate-400">
                      {stat.label}
                    </p>

                    <p className="relative z-10 text-[12px] md:text-[13px] font-bold text-slate-900 dark:text-slate-100 leading-tight text-center lg:text-left transition-colors duration-500 group-hover/stat:text-blue-600 dark:group-hover/stat:text-blue-400">
                      {stat.value}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Divisor Inferior: Linha de gradiente discreta para finalização da seção */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-blue-500/10 dark:via-blue-400/10 to-transparent" />
    </section>
  );
};

export default memo(About);
