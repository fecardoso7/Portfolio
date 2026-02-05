/** @type {import('tailwindcss').Config} */
module.exports = {
  /* 🌙 Dark mode baseado em classe (mais controle e performance) */
  darkMode: ["class"],

  /* 📁 Arquivos onde o Tailwind vai buscar classes */
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],

  theme: {
    extend: {
      /* =========================================================
         🎛️ Border radius baseado em tokens CSS
         - Mantém consistência visual no design system
         ========================================================= */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* =========================================================
         🎨 Design System — Cores semânticas
         - Todas baseadas em CSS variables (index.css)
         ========================================================= */
      colors: {
        /* Base */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        /* Cards e popovers */
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        /* Cores principais */
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        /* UI tokens */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        /* 🔥 Paleta laranja (brand) */
        orange: {
          primary: "hsl(var(--orange-primary))",
          secondary: "hsl(var(--orange-secondary))",
          light: "hsl(var(--orange-light))",
          dark: "hsl(var(--orange-dark))",
        },

        /* 📊 Charts (se você realmente usar isso) */
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },

      /* =========================================================
         🎞️ Keyframes (animações base do projeto)
         ========================================================= */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        /* ✨ Glow leve (pra borders e cards) */
        glow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },

      /* =========================================================
         🎬 Animações prontas pra usar no Tailwind
         ========================================================= */
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glow: "glow 2.5s ease-in-out infinite",
      },
    },
  },

  /* 🔌 Plugins */
  plugins: [require("tailwindcss-animate")],
};
