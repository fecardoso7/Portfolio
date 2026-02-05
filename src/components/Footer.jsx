import React, { memo } from "react";
import { Github, Linkedin, ArrowUp } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { mockData } from "../data/mock";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white dark:bg-[#050505] pt-20 pb-12 overflow-hidden transform-gpu snap-end">
      {/* glow leve */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-20">
          {/* LOGO */}
          <div className="flex flex-col items-start space-y-6">
            <div className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              <span className="text-blue-500">&lt;</span>
              FC
              <span className="text-blue-500"> /&gt;</span>
            </div>

            <p className="text-[10px] text-slate-400 dark:text-slate-500 max-w-[220px] font-bold uppercase tracking-[0.35em] leading-relaxed">
              {t.footer.built}
            </p>
          </div>

          {/* SITEMAP */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500/60">
              Sitemap
            </h4>

            <nav className="flex flex-col space-y-4">
              {["about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    document
                      .getElementById(item)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors flex items-center group w-fit"
                >
                  <span className="h-px w-0 bg-blue-500 transition-all duration-200 group-hover:w-4 group-hover:mr-2 opacity-50" />
                  {t.nav[item]}
                </button>
              ))}
            </nav>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500/60">
              Connect
            </h4>

            <div className="flex flex-wrap gap-3">
              <SocialIcon href={mockData.profile.github} icon={Github} />
              <SocialIcon href={mockData.profile.linkedin} icon={Linkedin} />

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="p-4 border border-blue-500/15 rounded-2xl text-blue-500 hover:bg-blue-500 hover:text-white transition-all shadow-sm transform-gpu active:scale-90"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER BASE */}
        <div className="pt-10 border-t border-slate-200/60 dark:border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600 text-center md:text-left">
            © {currentYear} {mockData.profile.name}
            <span className="hidden md:inline mx-3 text-blue-500/20">|</span>
            {t.footer.rights}
          </p>

          <div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.4)]" />
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
              System Status: Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = memo(({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 border border-slate-200/60 dark:border-white/5 rounded-2xl text-slate-400 hover:text-blue-500 hover:border-blue-500/20 transition-all duration-200 transform-gpu hover:-translate-y-0.5 active:scale-90"
  >
    <Icon className="h-4 w-4" />
  </a>
));

export default memo(Footer);
