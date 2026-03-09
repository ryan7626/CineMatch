import React from 'react'

const Hero = () => {
    return (
        <section className="relative py-20 flex flex-col items-start min-h-[500px] justify-center">
            {/* Background Graphic/Illustration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 opacity-40 pointer-events-none">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M200 50 L350 150 L350 300 L200 400 L50 300 L50 150 Z" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="200" cy="225" r="80" stroke="white" strokeWidth="1" />
                    <rect x="160" y="100" width="80" height="40" stroke="white" strokeWidth="1" />
                    {/* Simple Astronaut concept */}
                    <circle cx="200" cy="190" r="30" stroke="white" strokeWidth="2" />
                    <rect x="170" y="220" width="60" height="80" rx="10" stroke="white" strokeWidth="2" />
                </svg>
            </div>

            <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-widest mb-4">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                        <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                    Featured Movie
                </div>

                <h1 className="text-white text-6xl font-bold mb-4 !text-left !mx-0">Stellar Odyssey</h1>

                <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                    <span>2024</span>
                    <span>•</span>
                    <span>148 min</span>
                    <span>•</span>
                    <span>Sci-Fi, Adventure</span>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    A crew of explorers embarks on a journey through space to find a new home for humanity. Along the way, they encounter mysterious alien civilizations and face challenges that test their courage and resolve.
                </p>

                <div className="flex items-center gap-4">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        Watch Now
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 text-white w-12 h-12 flex items-center justify-center rounded-lg transition-all">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                        </svg>
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 text-white w-12 h-12 flex items-center justify-center rounded-lg transition-all">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
