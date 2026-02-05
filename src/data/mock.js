// Mock data para o site
export const mockData = {
  // Informações do perfil do usuário
  profile: {
    name: "Felipe Cardoso", // nome completo
    title: "Full-Stack Developer", // cargo/título principal
    email: "felipecardoso1530@gmail.com", // email pra contato rápido
    linkedin: "https://www.linkedin.com/in/fecardosodev/", // link pro LinkedIn
    github: "https://github.com/fecardoso7", // link pro GitHub
    resumes: {
      pt: "https://drive.usercontent.google.com/download?id=11JVMlN3oNHOVaryvhoqImBwTEPfRxdPi&export=download&authuser=0&confirm=t&uuid=d3d060cf-6824-43d0-be7c-32cff9b2765c&at=APcXIO0unXnYP1W7WMCdXxKpMu3a:1770216365967",
      en: "https://drive.usercontent.google.com/download?id=1iaa0nTiH6CkSBYTeT-gKnCP0QJ_IZwdl&export=download&authuser=0&confirm=t&uuid=b502a650-ef79-4937-96df-31e8830f1a17&at=APcXIO3uObwmQUZkQC2UBjBpJlP1:1770216345090",
    },
  },

  // Projetos em destaque no portfólio
  projects: [
    {
      id: 1,
      title: "Portfólio",
      titleEn: "Portfolio",
      description:
        "Aplicação web de alto desempenho desenvolvida com React e Tailwind CSS, focada em uma experiência de usuário fluida e responsiva. O projeto prioriza a otimização de performance e a semântica do código, utilizando JavaScript moderno para criar interfaces dinâmicas. Uma vitrine técnica que equilibra design minimalista com uma arquitetura robusta e escalável.",
      descriptionEn:
        "High-performance web application built with React and Tailwind CSS, engineered for a seamless and responsive user experience. This project emphasizes performance optimization and clean code architecture, leveraging modern JavaScript to deliver dynamic interfaces. A technical showcase that merges minimalist design with a robust, scalable front-end foundation.",
      image: "/portfolio.webp",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://fecardoso7.vercel.app/",
      githubUrl: "https://github.com/fecardoso7/Portfolio",
    },
    {
      id: 2, // identificador único do projeto
      title: "Sistema Solar", // título em português
      titleEn: "Solar System", // título em inglês
      description:
        "Projeto focado no aprendizado de JavaScript puro e manipulação de interface. Uma aplicação simples e direta que utiliza HTML e CSS para visualizar planetas do nosso Sistema Solar e dados de algumas missões espaciais. Representa meus primeiros passos na programação, priorizando a organização do código e a clareza visual em uma interface intuitiva.", // descrição PT
      descriptionEn:
        "A project focused on mastering vanilla JavaScript and interface manipulation. A simple, straightforward application using HTML and CSS to visualize planets and space mission data. It represents my first steps in programming, prioritizing clean code organization and visual clarity within an intuitive user interface.", // descrição EN
      image: "/sitedemo.png", // imagem de destaque do projeto
      technologies: ["JavaScript", "HTML", "CSS"], // principais tecnologias usadas
      liveUrl: "https://project-solar-system1530.vercel.app/", // link para demo ao vivo
      githubUrl: "https://github.com/fecardoso7/Project_Solar_System", // repositório no GitHub
    },
    {
      id: 3,
      title: "AI Content Generator", // projeto em inglês
      description:
        "AI-powered content generation tool with multiple templates, export options, and usage analytics.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop", // imagem externa
      technologies: ["React", "Python", "OpenAI", "Redis"], // stack mais avançada
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    // Projetos adicionais - só ativar se quiser mostrar mais no portfólio
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
    {
      id: 5,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with real-time metrics, post scheduling, and engagement tracking.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      technologies: ["React", "Redux", "Express", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 6,
      title: "Fitness Tracker App",
      description:
        "Personal fitness tracking application with workout plans, nutrition logging, and progress visualization.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
  ],

  // Habilidades e categorias - pra poder filtrar ou mostrar por tipo
  skills: [
    // Frontend
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Redux", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },

    // Backend
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "MySQL", category: "backend" },
    { name: "REST API", category: "backend" },
    { name: "Python", category: "backend" },

    // Tools & Testing
    { name: "Git", category: "tools" },
    { name: "GitHub", category: "tools" },
    { name: "Docker", category: "tools" },
    { name: "Jest", category: "tools" },
    { name: "Mocha", category: "tools" },
    { name: "React Testing Library", category: "tools" },
  ],
};
