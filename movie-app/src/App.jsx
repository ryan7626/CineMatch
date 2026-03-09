import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MovieSection from './components/MovieSection'
import AllMovies from './components/AllMovies'

const App = () => {
  const [view, setView] = useState('home');

  const trendingMovies = [
    { title: "Stellar Odyssey", year: "2024", genre: "Sci-Fi", duration: "148 min" },
    { title: "The Last Detective", year: "2023", genre: "Mystery", duration: "115 min" },
    { title: "Summer Romance", year: "2024", genre: "Romance", duration: "98 min" },
    { title: "Shadow Protocol", year: "2023", genre: "Action", duration: "132 min" },
    { title: "Echoes of Yesterday", year: "2024", genre: "Drama", duration: "124 min" },
    { title: "Midnight Terror", year: "2023", genre: "Horror", duration: "105 min" },
  ]

  const sciFiMovies = [
    { title: "Quantum Paradox", year: "2023", genre: "Sci-Fi" },
    { title: "Neon Dreams", year: "2024", genre: "Sci-Fi" },
    { title: "Mars Colony X", year: "2022", genre: "Sci-Fi" },
    { title: "The Singularity", year: "2023", genre: "Sci-Fi" },
    { title: "Void Walker", year: "2024", genre: "Sci-Fi" },
    { title: "Binary Star", year: "2023", genre: "Sci-Fi" },
  ]

  const actionMovies = [
    { title: "Velocity Zero", year: "2024", genre: "Action" },
    { title: "Iron Fist", year: "2023", genre: "Action" },
    { title: "Urban Jungle", year: "2024", genre: "Action" },
    { title: "Firestorm", year: "2023", genre: "Action" },
    { title: "The Enforcer", year: "2022", genre: "Action" },
    { title: "Rapid Response", year: "2024", genre: "Action" },
  ]

  const horrorMovies = [
    { title: "The Haunting of...", year: "2023", genre: "Horror" },
    { title: "Shattered Mirror", year: "2024", genre: "Horror" },
    { title: "Midnight Terror", year: "2023", genre: "Horror" },
    { title: "Whispers in Dark", year: "2022", genre: "Horror" },
    { title: "The Basement", year: "2024", genre: "Horror" },
    { title: "Grave Mistake", year: "2023", genre: "Horror" },
  ]

  const comedyMovies = [
    { title: "Laugh Track", year: "2024", genre: "Comedy" },
    { title: "Office Prank war", year: "2023", genre: "Comedy" },
    { title: "Weekend Chaos", year: "2024", genre: "Comedy" },
    { title: "Just Kidding", year: "2023", genre: "Comedy" },
    { title: "The Mixup", year: "2022", genre: "Comedy" },
    { title: "Family Vacation", year: "2024", genre: "Comedy" },
  ]

  const allMovies = [...trendingMovies, ...sciFiMovies, ...actionMovies, ...horrorMovies, ...comedyMovies];

  const showHome = () => setView('home');
  const showBrowse = () => setView('browse');

  return (
    <main className="bg-[#030014] min-h-screen text-white px-5 sm:px-10 md:px-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <Navbar onHome={showHome} onBrowse={showBrowse} currentView={view} />

        {view === 'home' ? (
          <div className="animate-fadeIn">
            <Hero movies={trendingMovies} />

            <div className="flex flex-col gap-12 mt-10">
              <MovieSection title="Sci-Fi Blockbusters" movies={sciFiMovies} onViewAll={showBrowse} />
              <MovieSection title="Adrenaline Rush Action" movies={actionMovies} onViewAll={showBrowse} />
              <MovieSection title="Chills & Thrills" movies={horrorMovies} onViewAll={showBrowse} />
              <MovieSection title="Laugh Out Loud" movies={comedyMovies} onViewAll={showBrowse} />
              <MovieSection title="More for You" movies={sciFiMovies.slice().reverse()} onViewAll={showBrowse} />
            </div>
          </div>
        ) : (
          <AllMovies allMovies={allMovies} />
        )}
      </div>

      <footer className="py-20 text-center text-gray-500 text-sm border-t border-white/5 mt-20">
        <p className="mb-2 font-bold text-gray-400">CineMatch Premium</p>
        <p>&copy; 2024 CineMatch. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App