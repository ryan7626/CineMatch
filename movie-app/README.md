# CineMatch Premium 🎬

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TMDB API](https://img.shields.io/badge/TMDB_API-01d277?style=for-the-badge&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org/)

**CineMatch Premium** is a high-performance, aesthetically driven movie discovery platform. Built with a focus on modern UI/UX principles and real-time data integration, it provides users with a cinematic experience directly in the browser.

---

## 🌟 Key Features

### 🤖 Scout: The AI Cinephile
**Scout** is your personal AI concierge. Powered by advanced Large Language Models, Scout doesn't just filter movies—it understands your mood. 
- **Natural Language Discovery**: Ask Scout for "something gritty like John Wick but set in space," and get curated matches.
- **ChatGPT Integration**: Securely connect your OpenAI account to leverage your personalized GPT context for high-fidelity recommendations.

### 🔐 Secure ChatGPT Authentication
Our custom authentication module allows deep integration with your OpenAI profile. By linking your account, **Scout** learns your historical preferences and cinematic taste, making the recommendation engine truly unique to you.

### 📊 Personal Movie Ranking System
Go beyond a simple 'Like' button.
- **Micro-Ranking**: Rate movies on a nuanced scale and build your personal "Global Top 100."
- **Data-Driven Insights**: View analytics on your most-watched genres and favorite directors based on your ranking data.

### 🎭 Premium Discovery Engine
- **Hero Carousel**: A dynamic, high-resolution spotlight section with automatic transitions and glassmorphism styling.
- **Multi-Genre Filter**: A sophisticated filtering system that understands complex movie metadata and overlapping genres.
- **Instant Global Search**: An expandable, real-time search interface that queries the entire TMDB database as you type.

---

## 🚀 Tech Stack

- **Frontend**: React 18 with Vite for lightning-fast HMR.
- **Styling**: Tailwind CSS for a scalable, pulse-design system.
- **API**: The Movie Database (TMDB) API for real-time global movie metadata.
- **Backend/AI (Integration Ready)**: OpenAI API integration for the Scout chatbot engine.
- **Animations**: CSS3 Keyframes and Framer-inspired transitions for a "living" UI.

---

## 🛠️ Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/cinematch.git
   cd cinematch/movie-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   VITE_OPENAI_API_KEY=your_openai_api_key_for_scout
   ```

4. **Launch Development Server**
   ```bash
   npm run dev
   ```

---

## 📂 Architecture Overview

```text
src/
├── components/          # Reusable UI modules (Navbar, Hero, MovieCard)
├── services/            # API abstraction layer (TMDB Service)
├── assets/              # Static resources and global styles
└── App.jsx              # Central state management and conditional routing
```

**CineMatch** utilizes a state-driven routing architecture, ensuring seamless transitions without the overhead of heavy routing libraries. This approach prioritizes performance and state persistence across views.

---

## 🛣️ Roadmap

- [ ] **Phase 1**: (Complete) TMDB API Integration & Multi-Genre Filtering.
- [ ] **Phase 2**: Social watch-parties and shared ranking lists.
- [ ] **Phase 3**: Mobile companion app built with React Native.
- [ ] **Phase 4**: Native AI video preview generation using Sora-inspired tech.

---

## 👤 Author

**Aryan Raut**
- [LinkedIn](https://www.linkedin.com/in/rautaryan/)
- [Portfolio](https://yourportfolio.com)
- [GitHub](https://github.com/ryan7626)

---

> [!TIP]
> This project was designed with a **"Performance First"** mindset. Every asset is lazy-loaded, and API calls are optimized to ensure a sub-100ms response time on all interactions.
