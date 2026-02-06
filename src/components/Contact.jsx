// Contact.jsx
import React, { useState, useRef, memo, useEffect, useCallback } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useLanguage } from "../contexts/LanguageContext";
import { toast } from "../hooks/use-toast";
import { Send, User, Mail, MessageSquare, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = memo(() => {
  const { t, language } = useLanguage();
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isPT = language === "pt";

  // Fix para o bug de 100vh no mobile
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  // Bloqueia scroll e cliques durante o envio do formulário
  useEffect(() => {
    if (!isSubmitting) return;
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";
    return () => {
      document.body.style.overflow = "";
      document.body.style.pointerEvents = "";
    };
  }, [isSubmitting]);

  // Cancela o estado de loading ao apertar ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && isSubmitting) setIsSubmitting(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isSubmitting]);

  // Envio do formulário via EmailJS
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // Honeypot anti-spam
      if (formRef.current?.company?.value) return;

      setIsSubmitting(true);

      try {
        await emailjs.sendForm(
          "service_qnlad3r",
          "template_1hpgqri",
          formRef.current,
          "__ghmewHBut_RKmgU",
        );
        toast({ title: t.contact.success });
        formRef.current?.reset();
      } catch {
        toast({ title: t.contact.error, variant: "destructive" });
      } finally {
        setIsSubmitting(false);
      }
    },
    [t],
  );

  return (
    <section
      id="contact"
      className="relative w-full min-h-[calc(var(--vh)*100)] flex flex-col items-center justify-center bg-white dark:bg-[#050505] transition-colors duration-700 snap-start pt-24 pb-20 overflow-hidden transform-gpu"
    >
      {/* Background com glow e linha guia */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.02),transparent_70%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-blue-500/20 dark:via-blue-400/20 to-transparent z-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[120px] bg-blue-500/5 dark:bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      {/* Título da seção */}
      <div className="w-full flex flex-col items-center mb-10 md:mb-16 z-10 px-6 shrink-0">
        <div className="flex items-center gap-4 md:gap-6 group">
          <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent via-blue-500/30 to-blue-500/30" />
          <div className="flex flex-col items-center">
            <span className="text-blue-500 font-mono text-[10px] tracking-[0.4em] font-bold mb-2">04.</span>
            <h2 className="text-slate-900 dark:text-white font-mono text-xs md:text-sm uppercase tracking-[0.8em] md:tracking-[1.2em] opacity-60">
              {isPT ? "Contato" : "Contact"}
            </h2>
          </div>
          <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent via-blue-500/30 to-blue-500/30" />
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
        <Card className="group relative w-full p-6 md:p-10 bg-white/50 dark:bg-[#080808]/40 backdrop-blur-xl border border-slate-200/50 dark:border-white/[0.03] rounded-[2rem] md:rounded-[3rem] transition-all hover:border-blue-500/20 overflow-hidden">
          
          {/* Efeito de overlay durante o envio */}
          {isSubmitting && (
            <div className="absolute inset-0 z-20 backdrop-blur-md bg-white/40 dark:bg-black/40 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 text-slate-900 dark:text-white">
                <Loader2 className="w-7 h-7 animate-spin" />
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-70">
                  {isPT ? "Enviando..." : "Sending..."}
                </span>
              </div>
            </div>
          )}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`relative z-10 space-y-6 md:space-y-8 transition-opacity duration-300 ${isSubmitting ? "opacity-40" : "opacity-100"}`}
          >
            {/* Campo oculto para evitar bots */}
            <input type="text" name="company" className="hidden" tabIndex="-1" autoComplete="off" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <InputField icon={User} label={t.contact.name} name="user_name" placeholder={isPT ? "Seu nome" : "Your name"} />
              <InputField icon={Mail} label={t.contact.email} name="user_email" type="email" placeholder={isPT ? "seu@email.com" : "your@email.com"} />
            </div>

            <InputField icon={MessageSquare} label={t.contact.message} name="message" placeholder={isPT ? "Como posso ajudar?" : "How can I help?"} textarea />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="group relative overflow-hidden w-full bg-blue-600 hover:bg-blue-500 text-white h-14 md:h-16 rounded-2xl text-[10px] font-bold uppercase tracking-[0.4em] transition-all active:scale-[0.98] shadow-xl"
            >
              {/* Brilho animado ao passar o mouse */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="relative flex items-center justify-center gap-3">
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                  <>
                    <span>{t.contact.send}</span>
                    <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </div>
            </Button>
          </form>
        </Card>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-blue-500/10 dark:via-blue-400/10 to-transparent" />
    </section>
  );
});

// Componente de input reutilizável com ícone e label padronizados
const InputField = memo(({ icon: Icon, label, name, type = "text", placeholder, textarea }) => {
  const baseClass = "bg-slate-50/50 dark:bg-[#050505]/50 border-slate-200/60 dark:border-white/[0.03] rounded-2xl transition-all focus:ring-2 focus:ring-blue-500/5 focus:border-blue-500/20 text-sm text-slate-900 dark:text-slate-200 placeholder:text-slate-300 dark:placeholder:text-slate-800";
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 ml-1">
        <Icon className="w-3 h-3 text-blue-500/50" />
        <label htmlFor={name} className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
          {label}
        </label>
      </div>
      {textarea ? (
        <Textarea id={name} name={name} required rows={4} className={`${baseClass} p-4 resize-none`} placeholder={placeholder} />
      ) : (
        <Input id={name} name={name} type={type} required className={`${baseClass} h-14 px-4`} placeholder={placeholder} />
      )}
    </div>
  );
});

export default Contact;