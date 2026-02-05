import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

// ======================================================
// CONTEXTO DE TEMA
// -> controla modo claro/escuro globalmente
// ======================================================

const ThemeContext = createContext(null);

// ======================================================
// HOOK CUSTOMIZADO
// -> garante uso correto do contexto
// ======================================================

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
};

// ======================================================
// PROVIDER DE TEMA
// -> gerencia dark/light mode
// -> persistência + performance
// ======================================================

export const ThemeProvider = ({ children }) => {
  // ================================================
  // ESTADO INICIAL
  // -> lazy init evita acesso desnecessário ao localStorage
  // -> fallback seguro (dark como padrão)
  // ================================================

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");

    // fallback caso não exista valor salvo
    return saved ? saved === "dark" : true;
  });

  // ================================================
  // SINCRONIZAÇÃO COM DOM + LOCALSTORAGE
  // -> evita inconsistência visual (FOUC)
  // ================================================

  useEffect(() => {
    const root = document.documentElement;

    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (isDark) {
      root.classList.add("dark");
      // Adicionado: Força a cor física do html para evitar flash no overscroll
      root.style.backgroundColor = "#050505";
    } else {
      root.classList.remove("dark");
      // Adicionado: Garante fundo branco limpo no modo claro
      root.style.backgroundColor = "#ffffff";
    }
  }, [isDark]);

  // ================================================
  // TOGGLE DE TEMA
  // -> memoizado pra evitar recriação por render
  // ================================================

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  // ================================================
  // VALUE DO CONTEXTO
  // -> memo evita re-render global desnecessário
  // ================================================

  const value = useMemo(() => {
    return { isDark, toggleTheme };
  }, [isDark, toggleTheme]);

  // ================================================
  // PROVIDER
  // -> expõe estado e função de toggle
  // ================================================

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
