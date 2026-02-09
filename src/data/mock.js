// mock.js
export const mockData = {
  // Informações de Perfil e Links de Currículo
  profile: {
    name: "Felipe Cardoso",
    title: "Full-Stack Developer",
    email: "felipecardoso1530@gmail.com",
    linkedin: "https://www.linkedin.com/in/fecardosodev/",
    github: "https://github.com/fecardoso7",
    resumes: {
      pt: "https://drive.usercontent.google.com/download?id=11JVMlN3oNHOVaryvhoqImBwTEPfRxdPi&export=download",
      en: "https://drive.usercontent.google.com/download?id=1iaa0nTiH6CkSBYTeT-gKnCP0QJ_IZwdl&export=download",
    },
  },

  // Listagem de Projetos (Destaques e Secundários)
  projects: [
        {
      id: 1,
      title: "APS Administrativo",
      titleEn: "APS Administrative",
      description:
        "Website institucional desenvolvido para a APS Administrativo, com foco em performance, clareza de informação e experiência do usuário. A aplicação foi construída com React e JavaScript, utilizando componentes reutilizáveis e arquitetura modular, garantindo escalabilidade, manutenção simplificada e carregamento otimizado. O projeto traduz a identidade da empresa em uma interface moderna, responsiva e orientada a conversão.",
      descriptionEn:
        "Institutional website developed for APS Administrativo, focused on performance, clarity, and user experience. Built with React and JavaScript, using reusable components and a modular architecture to ensure scalability, maintainability, and optimized loading. The project translates the company’s identity into a modern, responsive interface designed to enhance usability and conversion.",
      image: "/apsadm.webp",
      technologies: ["React", "JavaScript"],
      liveUrl: "https://fecardoso7.vercel.app/",
      githubUrl: "https://github.com/fecardoso7/Portfolio",
    },
    {
      id: 2,
      title: "Portfólio",
      titleEn: "Portfolio",
      description:
        "Aplicação web de alto desempenho desenvolvida com React e Tailwind CSS, focada em uma experiência de usuário fluida e responsiva. O projeto prioriza a otimização de performance e a semântica do código.",
      descriptionEn:
        "High-performance web application built with React and Tailwind CSS, engineered for a seamless and responsive user experience. This project emphasizes performance optimization and clean code architecture.",
      image: "/portfolio.webp",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://fecardoso7.vercel.app/",
      githubUrl: "https://github.com/fecardoso7/Portfolio",
    },
    {
      id: 3,
      title: "Sistema Solar",
      titleEn: "Solar System",
      description:
        "Projeto focado no aprendizado de JavaScript puro e manipulação de interface. Uma aplicação simples e direta que utiliza HTML e CSS para visualizar planetas do nosso Sistema Solar.",
      descriptionEn:
        "A project focused on mastering vanilla JavaScript and interface manipulation. A simple, straightforward application using HTML and CSS to visualize planets and space mission data.",
      image: "/sitedemo.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      liveUrl: "https://project-solar-system1530.vercel.app/",
      githubUrl: "https://github.com/fecardoso7/Project_Solar_System",
    },
    {
      id: 3,
      title: "AI Content Generator",
      description:
        "AI-powered content generation tool with multiple templates, export options, and usage analytics.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
      technologies: ["React", "Python", "OpenAI", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 4,
      title: "Real Estate Platform",
      description:
        "Property listing and management platform with advanced search filters, virtual tours, and appointment scheduling.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      technologies: ["React", "TypeScript", "Node.js", "MySQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
  ],

  // Grade de Habilidades por Categoria
  skills: [
    // Frontend
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "Redux", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },

    // Backend
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "MySQL", category: "backend" },
    { name: "REST API", category: "backend" },
    { name: "Python", category: "backend" },

    // Ferramentas e Testes
    { name: "Git", category: "tools" },
    { name: "GitHub", category: "tools" },
    { name: "Docker", category: "tools" },
    { name: "Jest", category: "tools" },
    { name: "Mocha", category: "tools" },
    { name: "React Testing Library", category: "tools" },
  ],
};
