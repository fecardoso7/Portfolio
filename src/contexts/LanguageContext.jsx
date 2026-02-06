// LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../translations/translations";

const LanguageContext = createContext();

// Hook para acessar o contexto de tradução de qualquer lugar
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Inicializa o estado buscando do localStorage ou assume 'pt' como padrão
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("language");
    return saved || "pt";
  });

  // Persiste a escolha do usuário sempre que o idioma for alterado
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Alterna o estado entre 'en' e 'pt'
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };

  // Mapeia o objeto de tradução baseado na chave atual
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
