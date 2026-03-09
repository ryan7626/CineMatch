import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between items-center py-6">
            <div className="flex flex-row items-center gap-2">
                <div className="bg-white p-1 rounded">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3Z" stroke="#030014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 9H19" stroke="#030014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 15H19" stroke="#030014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 3V21" stroke="#030014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 3V21" stroke="#030014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <span className="text-white font-bold text-xl tracking-tight">CineMatch</span>
            </div>

            <div className="flex flex-row items-center gap-8">
                <ul className="flex flex-row gap-6 text-sm font-medium">
                    <li><a href="#" className="text-red-500">Home</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse</a></li>
                </ul>
                <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <span className="text-sm">Search</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
