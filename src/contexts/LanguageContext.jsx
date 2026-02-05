import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../translations/translations";
// Cria o contexto de idioma
const LanguageContext = createContext();

// Hook customizado para usar o contexto de idioma
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
// Provider que envolve a aplicação e fornece o estado de idioma
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("language");
    return saved || "pt";
  });
  // Sempre que o idioma mudar, atualiza no localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  // Alterna entre inglês e português
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };
  // Pega as traduções do idioma atual
  const t = translations[language];
  // Fornece idioma, função de toggle e traduções para todos os componentes filhos
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
