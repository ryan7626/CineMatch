import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MovieSection from './components/MovieSection'

const App = () => {
  const trendingMovies = [
    { title: "Stellar Odyssey", year: "2024", genre: "Sci-Fi" },
    { title: "The Last Detective", year: "2023", genre: "Mystery" },
    { title: "Summer Romance", year: "2024", genre: "Romance" },
    { title: "Shadow Protocol", year: "2023", genre: "Action" },
    { title: "Echoes of Yesterday", year: "2024", genre: "Drama" },
    { title: "Midnight Terror", year: "2023", genre: "Horror" },
  ]

  const recommendedMovies = [
    { title: "Pixel Perfect", year: "2024", genre: "Animation" },
    { title: "The Iron Crown", year: "2023", genre: "Fantasy" },
    { title: "Laugh Track", year: "2024", genre: "Comedy" },
    { title: "Quantum Paradox", year: "2023", genre: "Sci-Fi" },
    { title: "City of Dreams", year: "2024", genre: "Thriller" },
    { title: "The Haunting of...", year: "2023", genre: "Horror" },
  ]

  return (
    <main className="bg-[#030014] min-h-screen text-white px-5 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <MovieSection title="Trending Now" movies={trendingMovies} />
        <MovieSection title="Recommended for You" movies={recommendedMovies} />
      </div>

      <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/5 mt-10">
        <p>&copy; 2024 CineMatch. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App