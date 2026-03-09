import React from 'react'

const MovieCard = ({ title, year, genre, image }) => {
    return (
        <div className="flex flex-col gap-3 group cursor-pointer">
            <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-gray-800">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 italic">
                        Poster
                    </div>
                )}
            </div>
            <div>
                <h3 className="text-white font-bold text-base truncate group-hover:text-red-500 transition-colors">{title}</h3>
                <p className="text-gray-400 text-xs mt-1">{year} • {genre}</p>
            </div>
        </div>
    )
}

export default MovieCard
