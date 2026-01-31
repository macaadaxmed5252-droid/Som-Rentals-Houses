import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[400px] flex items-center justify-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        About Som-Rentals
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Connecting people with their perfect homes and making real estate simple, transparent, and accessible in Somalia.
                    </p>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="py-20 container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                            alt="Modern office building"
                            className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Founded in 2024, Som-Rentals has quickly emerged as the leading digital real estate platform in Somalia. We recognized the challenges people faced when searching for rental properties – lack of transparency, scattered information, and unreliable agents.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Our platform bridges the gap between property owners and tenants, providing a secure, user-friendly environment where finding your next home is as easy as a few clicks. We are committed to revolutionizing the Somali real estate market through technology and trust.
                        </p>
                        <Link to="/contact" className="text-green-600 font-bold hover:text-green-700 inline-flex items-center">
                            Get in Touch <span className="ml-2">→</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-xl shadow-sm border-l-4 border-green-500">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                            <p className="text-gray-600">
                                To simplify the property rental process by providing a trusted, efficient, and comprehensive platform that empowers both tenants and landlords.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-xl shadow-sm border-l-4 border-blue-500">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                To be the most trusted and preferred real estate ecosystem in the Horn of Africa, setting the standard for innovation and customer satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet the Team */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="group">
                            <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-green-100 group-hover:border-green-500 transition-all">
                                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Team Member" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Abdirahman Sheikh</h3>
                            <p className="text-green-600 mb-2">CEO & Founder</p>
                            <p className="text-gray-500 text-sm px-4">Visionary leader with 15+ years in Somali real estate market.</p>
                        </div>
                        <div className="group">
                            <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-green-100 group-hover:border-green-500 transition-all">
                                <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Team Member" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Amina Warsame</h3>
                            <p className="text-green-600 mb-2">Head of Operations</p>
                            <p className="text-gray-500 text-sm px-4">Ensures smooth day-to-day operations and customer satisfaction.</p>
                        </div>
                        <div className="group">
                            <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-green-100 group-hover:border-green-500 transition-all">
                                <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Team Member" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Hassan Jule</h3>
                            <p className="text-green-600 mb-2">Lead Agent</p>
                            <p className="text-gray-500 text-sm px-4">Expert in matching clients with their dream properties.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-20 bg-gray-900 text-white mb-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">500+</div>
                            <div className="text-gray-400">Properties Listed</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">1k+</div>
                            <div className="text-gray-400">Happy Tenants</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">50+</div>
                            <div className="text-gray-400">Trusted Agents</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">24/7</div>
                            <div className="text-gray-400">Customer Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About