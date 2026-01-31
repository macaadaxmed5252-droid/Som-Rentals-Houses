import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    // State-kan wuxuu maamulayaa menu-ka mobile-ka (Open/Close)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    
                    {/* 1. LOGO SECTION */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold text-gray-800 tracking-tight">
                            Som<span className="text-green-600">Rentals</span>
                        </Link>
                    </div>

                    {/* 2. DESKTOP MENU (Hidden on Mobile) */}
                    <ul className="hidden md:flex space-x-8 items-center">
                        <li><Link to="/" className="text-gray-600 hover:text-green-600 font-medium transition duration-300">Home</Link></li>
                        <li><Link to="/about" className="text-gray-600 hover:text-green-600 font-medium transition duration-300">About</Link></li>
                        <li><Link to="/properties" className="text-gray-600 hover:text-green-600 font-medium transition duration-300">Properties</Link></li>
                        <li><Link to="/contact" className="text-gray-600 hover:text-green-600 font-medium transition duration-300">Contact</Link></li>
                        <li>
                            <Link to="/admin" className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300 shadow-sm">
                                Admin
                            </Link>
                        </li>
                    </ul>

                    {/* 3. MOBILE BUTTON (Burger Icon) */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="text-gray-600 hover:text-green-600 focus:outline-none p-2"
                        >
                            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    // Icon-ka marka uu menu-ku furan yahay (X)
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    // Icon-ka marka uu menu-ku xiran yahay (Burger)
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. MOBILE DROPDOWN MENU (Animated) */}
            <div className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <ul className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
                    <li>
                        <Link onClick={() => setIsOpen(false)} to="/" className="block py-3 px-4 text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-xl font-medium">Home</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsOpen(false)} to="/about" className="block py-3 px-4 text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-xl font-medium">About</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsOpen(false)} to="/properties" className="block py-3 px-4 text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-xl font-medium">Properties</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsOpen(false)} to="/contact" className="block py-3 px-4 text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-xl font-medium">Contact</Link>
                    </li>
                    <li className="pt-2">
                        <Link onClick={() => setIsOpen(false)} to="/admin" className="block text-center bg-green-600 text-white py-3 rounded-xl font-bold shadow-md">
                            Admin Panel
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;