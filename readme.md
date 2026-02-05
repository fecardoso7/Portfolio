# 💼 Felipe Cardoso - Portfolio

<div align="center">
  
  ![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![FastAPI](https://img.shields.io/badge/FastAPI-0.110.1-009688?style=for-the-badge&logo=fastapi&logoColor=white)
  
  **[🌐 View Live Demo](https://fecardoso7.vercel.app/) | [📧 Contact Me](mailto:felipe.cardoso@example.com)**

</div>

---

## 🚀 Início Rápido

```bash
# 1. Clonar o repositório
git clone git@github.com:fecardoso7/Portfolio.git
cd portfolio

# 2. Instalar dependências
npm install

# 3. Iniciar o projeto
npm start
```

**Pronto!** O site abrirá automaticamente em http://localhost:3000

---

## 🇧🇷 Português

### 📖 Sobre o Projeto

Portfólio pessoal desenvolvido para apresentar minhas habilidades como **Desenvolvedor Web Full Stack** com foco em Front-end. O site é totalmente responsivo, possui tema claro/escuro e suporte a múltiplos idiomas (Português e Inglês).

### ✨ Funcionalidades

- 🎨 **Design Moderno e Responsivo** - Interface elegante que se adapta a todos os dispositivos
- 🌓 **Tema Claro/Escuro** - Alternância suave entre modos com persistência no localStorage
- 🌍 **Multilíngue** - Suporte completo para Português e Inglês
- 📧 **Formulário de Contato** - Integração com EmailJS
- 💼 **Showcase de Projetos** - Galeria interativa de projetos com tecnologias utilizadas
- 🎯 **Seção de Skills** - Visualização de tecnologias com ícones personalizados
- 📱 **100% Responsivo** - Otimizado para desktop, tablet e mobile

### 🛠️ Tecnologias Utilizadas

#### Frontend
- **React** 19.0.0 - Biblioteca JavaScript para interfaces
- **React Router DOM** 7.5.1 - Navegação entre páginas
- **Tailwind CSS** 3.4.17 - Framework CSS utility-first
- **Shadcn/ui** - Componentes de UI modernos e acessíveis
- **Lucide React** - Biblioteca de ícones
- **EmailJS** - Serviço de envio de emails
- **Axios** - Cliente HTTP para requisições

#### Outras Ferramentas
- **Docker** - Containerização (opcional)
- **Git/GitHub** - Controle de versão

### 📁 Estrutura do Projeto

```
portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          # Componentes Shadcn/ui
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── contexts/
│   │   │   ├── ThemeContext.jsx
│   │   │   └── LanguageContext.jsx
│   │   ├── data/
│   │   │   └── mock.js      # Dados dos projetos e skills
│   │   ├── translations/
│   │   │   └── translations.js
│   │   ├── App.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
│
│
└── README.md
```

---

</details>

#### 4️⃣ Configurar EmailJS (Opcional)

1. Acesse [EmailJS](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Configure um serviço de email
4. Crie um template com as variáveis: `user_name`, `user_email`, `message`
5. Substitua as credenciais em `frontend/src/components/Contact.jsx`:

```javascript
const serviceId = 'SEU_SERVICE_ID';
const templateId = 'SEU_TEMPLATE_ID';
const publicKey = 'SUA_PUBLIC_KEY';
```

### 📧 Contato

- **LinkedIn**: [Felipe Cardoso](https://www.linkedin.com/in/fecardosodev/)
- **GitHub**: [@fecardoso7](https://github.com/fecardoso7)
- **Email**: felipe.cardoso@example.com

---

## 🇺🇸 English

### 📖 About The Project

Personal portfolio developed to showcase my skills as a **Full Stack Web Developer** with a focus on Front-end. The website is fully responsive, features light/dark theme and supports multiple languages (Portuguese and English).

### ✨ Features

- 🎨 **Modern & Responsive Design** - Elegant interface that adapts to all devices
- 🌓 **Light/Dark Theme** - Smooth theme switching with localStorage persistence
- 🌍 **Multilingual** - Full support for Portuguese and English
- 📧 **Contact Form** - EmailJS integration
- 💼 **Project Showcase** - Interactive project gallery with used technologies
- 🎯 **Skills Section** - Technology visualization with custom icons
- 📱 **100% Responsive** - Optimized for desktop, tablet and mobile

### 🛠️ Technologies Used

#### Frontend
- **React** 19.0.0 - JavaScript library for user interfaces
- **React Router DOM** 7.5.1 - Page navigation
- **Tailwind CSS** 3.4.17 - Utility-first CSS framework
- **Shadcn/ui** - Modern and accessible UI components
- **Lucide React** - Icon library
- **EmailJS** - Email sending service
- **Axios** - HTTP client for requests

#### Other Tools
- **Docker** - Containerization (optional)
- **Git/GitHub** - Version control

### 📁 Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          # Shadcn/ui components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── contexts/
│   │   │   ├── ThemeContext.jsx
│   │   │   └── LanguageContext.jsx
│   │   ├── data/
│   │   │   └── mock.js      # Projects and skills data
│   │   ├── translations/
│   │   │   └── translations.js
│   │   ├── App.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md
```

### 🚀 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/fecardoso7/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the project
npm start
```

The site will automatically open at **http://localhost:3000**

---

</details>

#### 4️⃣ Setup EmailJS (Optional)

1. Go to [EmailJS](https://www.emailjs.com/)
2. Create a free account
3. Setup an email service
4. Create a template with variables: `user_name`, `user_email`, `message`
5. Replace credentials in `frontend/src/components/Contact.jsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

### 🎨 Customization

### 📧 Contact

- **LinkedIn**: [Felipe Cardoso](https://www.linkedin.com/in/fecardosodev/)
- **GitHub**: [@fecardoso7](https://github.com/fecardoso7)
- **Email**: felipe.cardoso@example.com

---

<div align="center">
  
  **Made by Felipe Cardoso**
  
  ⭐ Star this repository if you like it!

</div>
