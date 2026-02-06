// ThemeContext.jsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

const ThemeContext = createContext(null);

// Hook para acessar o estado do tema em qualquer componente
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Inicialização do estado com persistência no localStorage (Dark como padrão)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  // Sincroniza o estado com a classe do DOM e metadados do documento
  useEffect(() => {
    const root = document.documentElement;
    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (isDark) {
      root.classList.add("dark");
      root.style.backgroundColor = "#050505";
    } else {
      root.classList.remove("dark");
      root.style.backgroundColor = "#ffffff";
    }
  }, [isDark]);

  // Função para alternar o tema com useCallback para otimização
  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  // Memoriza o valor do contexto para evitar re-renders desnecessários nos filhos
  const value = useMemo(() => ({ isDark, toggleTheme }), [isDark, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
