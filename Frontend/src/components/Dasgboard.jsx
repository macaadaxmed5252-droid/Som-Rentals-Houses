import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Create from '../pages/Create';
import List from '../pages/List';

function Dashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/');
    };

    const MenuItems = () => (
        <>
            <button
                onClick={() => { setActiveTab('dashboard'); setIsSidebarOpen(false); }}
                className={`w-full flex items-center p-4 rounded-full transition-all duration-300 ${activeTab === 'dashboard' ? 'bg-white text-green-600 font-bold shadow-lg' : 'hover:bg-green-700 text-white'}`}
            >
                <span className="ml-4">Dashboard</span>
            </button>

            <button
                onClick={() => { setActiveTab('create'); setIsSidebarOpen(false); }}
                className={`w-full flex items-center p-4 rounded-full transition-all duration-300 ${activeTab === 'create' ? 'bg-white text-green-600 font-bold shadow-lg' : 'hover:bg-green-700 text-white'}`}
            >
                <span className="ml-4">Create House</span>
            </button>

            <button
                onClick={() => { setActiveTab('list'); setIsSidebarOpen(false); }}
                className={`w-full flex items-center p-4 rounded-full transition-all duration-300 ${activeTab === 'list' ? 'bg-white text-green-600 font-bold shadow-lg' : 'hover:bg-green-700 text-white'}`}
            >
                <span className="ml-4">Properties List</span>
            </button>
        </>
    );

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            <div className="md:hidden flex items-center justify-between bg-green-600 text-white p-4 shadow-md">
                <span className="text-xl font-bold">SomRentals</span>
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} /></svg>
                </button>
            </div>

            <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out z-30 w-72 bg-green-600 text-white flex flex-col md:rounded-r-[3rem] shadow-xl`}>
                <div className="p-8 text-3xl font-extrabold tracking-tight hidden md:block">SomRentals</div>
                
                <nav className="flex-1 px-4 space-y-4 mt-4 md:mt-0">
                    <MenuItems />
                </nav>

                <div className="p-8 mt-auto">
                    <button onClick={handleLogout} className="flex items-center space-x-3 opacity-80 hover:opacity-100 w-full transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        <span className="text-sm font-semibold">Logout</span>
                    </button>
                </div>
            </div>

            {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"></div>}

            <div className="flex-1 p-4 md:p-10 overflow-x-hidden">
                {activeTab === 'dashboard' && (
                    <div className="animate-fade-in">
                        <h1 className="text-2xl font-bold text-gray-800">Dashboard Home</h1>
                        <p className="text-gray-500">Welcome to your rental overview.</p>
                    </div>
                )}

                {activeTab === 'create' && (
                    <div className="animate-fade-in">
                        <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New House</h1>
                        <Create />
                    </div>
                )}

                {activeTab === 'list' && (
                    <div className="animate-fade-in">
                        <h1 className="text-2xl font-bold text-gray-800 mb-6">Properties Inventory</h1>
                        <List />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;