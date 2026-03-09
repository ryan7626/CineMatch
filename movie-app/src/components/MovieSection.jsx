import React from 'react'
import MovieCard from './MovieCard'

const MovieSection = ({ title, movies }) => {
    return (
        <section className="py-10">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-white text-2xl font-bold">{title}</h2>
                <a href="#" className="text-red-500 text-sm font-medium hover:underline flex items-center gap-1">
                    View All
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {movies.map((movie, index) => (
                    <MovieCard key={index} {...movie} />
                ))}
            </div>
        </section>
    )
}

export default MovieSection
