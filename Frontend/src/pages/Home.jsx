import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [featuredProperties, setFeaturedProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const res = await axios.get("http://localhost:9000/House");
                // Get only first 3 properties for featured section
                setFeaturedProperties(res.data.slice(0, 3));
            } catch (err) {
                console.log("Error fetching properties:", err);
            }
        };
        fetchProperties();
    }, []);

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Find Your Dream Home in <span className="text-green-500">Somalia</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
                        Discover the best rental properties in Mogadishu and beyond. Secure, affordable, and luxurious homes waiting for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/properties" className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg">
                            Browse Properties
                        </Link>
                        <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-lg text-lg transition-all">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Som-Rentals?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We provide a seamless renting experience tailored to your needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow text-center group">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">Verified Listings</h3>
                            <p className="text-gray-600">Every property is personally verified by our team to ensure it meets our high standards.</p>
                        </div>

                        <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow text-center group">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">Best Prices</h3>
                            <p className="text-gray-600">We negotiate directly with landlords to get you the most competitive rates in the market.</p>
                        </div>

                        <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow text-center group">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">24/7 Support</h3>
                            <p className="text-gray-600">Our dedicated team is available round the clock to assist you with any inquiries.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Properties Preview */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Properties</h2>
                            <p className="text-gray-600">Hand-picked selection of quality homes.</p>
                        </div>
                        <Link to="/properties" className="text-green-600 font-semibold hover:text-green-700 flex items-center">
                            View All <span className="ml-2">→</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProperties.length > 0 ? (
                            featuredProperties.map((property) => (
                                <div key={property._id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={`http://localhost:9000/AllImages/${property.image}`}
                                            alt={property.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            onError={(e) => e.target.src = "https://via.placeholder.com/400x300?text=No+Image"}
                                        />
                                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow">
                                            ${property.pricePerMonth}/mo
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">{property.title}</h3>
                                        <div className="flex items-center text-gray-500 text-sm mb-4">
                                            <span className="mr-2">📍</span>
                                            <span className="truncate">{property.location}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-3 text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                                <p className="text-gray-500">Loading featured properties...</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Hear from happy families who found their home with us.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-xl relative">
                            <div className="text-green-500 text-6xl absolute top-4 left-4 opacity-20">"</div>
                            <p className="text-gray-600 mb-6 relative z-10 italic">
                                "Finding a rental in Mogadishu was always a headache until I found Som-Rentals. The process was smooth, transparent, and quick!"
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Mohamed Ali</h4>
                                    <p className="text-sm text-gray-500">Tenant</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl relative">
                            <div className="text-green-500 text-6xl absolute top-4 left-4 opacity-20">"</div>
                            <p className="text-gray-600 mb-6 relative z-10 italic">
                                "As a landlord, I appreciate the professionalism of the Som-Rentals team. They found me reliable tenants in record time."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Faduma Hassan</h4>
                                    <p className="text-sm text-gray-500">Property Owner</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl relative">
                            <div className="text-green-500 text-6xl absolute top-4 left-4 opacity-20">"</div>
                            <p className="text-gray-600 mb-6 relative z-10 italic">
                                "Great service and excellent support. The team guided me through every step of the rental agreement. Highly recommended!"
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                                    <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Client" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Ahmed Nur</h4>
                                    <p className="text-sm text-gray-500">Tenant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-green-600 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to find your new home?</h2>
                    <p className="text-green-100 text-xl mb-10 max-w-2xl mx-auto">Join thousands of happy customers who found their perfect rental with Som-Rentals.</p>
                    <Link to="/properties" className="inline-block px-10 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                        Start Searching Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home