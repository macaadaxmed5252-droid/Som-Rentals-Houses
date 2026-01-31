import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Create from '../pages/Create';
import List from '../pages/List';

function Dashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear(); // Safe clear
        navigate('/');
    };

    // Menu Item Component for consistency
    const MenuItem = ({ id, label, icon }) => (
        <button
            onClick={() => { setActiveTab(id); setIsSidebarOpen(false); }}
            className={`w-full flex items-center p-4 rounded-2xl transition-all duration-300 group ${
                activeTab === id 
                ? 'bg-white text-green-700 font-bold shadow-lg shadow-green-900/20' 
                : 'hover:bg-green-500/50 text-green-50'
            }`}
        >
            <span className="text-xl group-hover:scale-110 transition-transform">{icon}</span>
            <span className="ml-4 tracking-wide">{label}</span>
        </button>
    );

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 font-sans">
            
            {/* MOBILE TOP BAR */}
            <div className="md:hidden flex items-center justify-between bg-green-600 text-white p-5 shadow-lg z-50">
                <span className="text-2xl font-black tracking-tighter">Som<span className="text-green-200">Rentals</span></span>
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-green-500 rounded-lg">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>
            </div>

            {/* SIDEBAR */}
            <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-40 w-72 bg-green-600 text-white flex flex-col md:rounded-r-[3.5rem] shadow-2xl overflow-hidden`}>
                <div className="p-10 text-3xl font-black tracking-tighter hidden md:block">
                    Som<span className="text-green-200">Rentals</span>
                </div>
                
                <nav className="flex-1 px-6 space-y-3 mt-4 md:mt-0">
                    <MenuItem id="dashboard" label="Dashboard" icon="📊" />
                    <MenuItem id="create" label="Add Property" icon="🏠" />
                    <MenuItem id="list" label="Inventory" icon="📋" />
                </nav>

                <div className="p-8 mt-auto">
                    <div className="bg-green-700/50 p-4 rounded-[2rem] mb-6 flex items-center gap-3 border border-green-400/20">
                        <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center font-bold text-green-900">AD</div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold">Admin User</span>
                            <span className="text-[10px] opacity-70">admin@somrentals.com</span>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="flex items-center space-x-3 text-green-100 hover:text-white group w-full px-4 transition-colors">
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        <span className="text-sm font-bold uppercase tracking-widest">Logout</span>
                    </button>
                </div>
            </div>

            {/* OVERLAY FOR MOBILE */}
            {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden transition-opacity"></div>}

            {/* MAIN CONTENT AREA */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                
                {/* TOP NAVBAR (Professional Touch) */}
                <header className="hidden md:flex items-center justify-between px-10 py-6 bg-transparent">
                    <div className="relative w-96">
                        <input type="text" placeholder="Search for property..." className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl shadow-sm border-none outline-none focus:ring-2 focus:ring-green-400 transition-all text-sm" />
                        <span className="absolute left-4 top-3.5 opacity-30">🔍</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="relative p-2 bg-white rounded-xl shadow-sm hover:bg-gray-50 transition-colors">🔔 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span></button>
                        <div className="h-10 w-[1px] bg-gray-200"></div>
                        <span className="text-sm font-bold text-gray-700 italic">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto px-6 md:px-10 pb-10">
                    <div className="animate-fade-in transition-all">
                        
                        {activeTab === 'dashboard' && (
                            <div className="space-y-8">
                                <div>
                                    <h1 className="text-4xl font-black text-gray-800 tracking-tight">System Overview</h1>
                                    <p className="text-gray-500 mt-1 font-medium">Hello Admin, here is what's happening today.</p>
                                </div>

                                {/* STATS CARDS */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-2 hover:shadow-xl transition-shadow cursor-default">
                                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Total Properties</span>
                                        <span className="text-5xl font-black text-green-600">24</span>
                                        <span className="text-xs text-green-500 font-bold bg-green-50 w-fit px-2 py-1 rounded-lg">+12.5% vs last month</span>
                                    </div>
                                    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-2 hover:shadow-xl transition-shadow cursor-default">
                                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Active Bookings</span>
                                        <span className="text-5xl font-black text-blue-600">182</span>
                                        <span className="text-xs text-blue-500 font-bold bg-blue-50 w-fit px-2 py-1 rounded-lg">High Demand</span>
                                    </div>
                                    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-2 hover:shadow-xl transition-shadow cursor-default">
                                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Pending Inquiries</span>
                                        <span className="text-5xl font-black text-orange-500">07</span>
                                        <span className="text-xs text-orange-500 font-bold bg-orange-50 w-fit px-2 py-1 rounded-lg">Needs Attention</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'create' && (
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 max-w-4xl mx-auto">
                                <h1 className="text-3xl font-black text-gray-800 mb-8 flex items-center gap-3">
                                    <span className="p-3 bg-green-100 rounded-2xl text-xl text-green-600">🏠</span> 
                                    New Listing Details
                                </h1>
                                <Create />
                            </div>
                        )}

                        {activeTab === 'list' && (
                            <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100">
                                <div className="flex items-center justify-between mb-8">
                                    <h1 className="text-3xl font-black text-gray-800">Property Inventory</h1>
                                    <button onClick={() => setActiveTab('create')} className="bg-green-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-green-200 hover:bg-green-700 transition-all">+ Add New</button>
                                </div>
                                <List />
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;