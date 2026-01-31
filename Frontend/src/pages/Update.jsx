import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [house, setHouse] = useState({
        title: "",
        description: "",
        pricePerMonth: "",
        image: null,
        location: "",
        bedrooms: "",
        dateTime: "",
        email: ""
    });

    // 1. Marka hore soo saar xogta gurigan gaarka ah si form-ka loogu arko
    useEffect(() => {
        const fetchHouse = async () => {
            try {
                const res = await axios.get(`http://localhost:9000/House/${id}`);
                setHouse(res.data);
            } catch (err) {
                console.log("Xogta lama soo helin:", err);
            }
        };
        fetchHouse();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, files } = e.target; // Waxaan saxnay e.targe -> e.target
        setHouse({
            ...house,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(); // Waxaan saxnay formData -> FormData

        for (let key in house) {
            if (house[key]) formData.append(key, house[key]);
        }

        try {
            
            await axios.put(`http://localhost:9000/House/${id}`, formData);
            alert("Guriga waa la cusboonaysiiyey! ✅");
            navigate('/list'); 
        } catch (err) {
            console.error(err);
            alert("Khalad baa dhacay marka update-ka la samaynayay ❌");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="bg-white w-full max-w-2xl p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-extrabold text-indigo-900 pl-50 ">Update Property</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="text-xs font-bold text-gray-500 ml-2 mb-1">Property Title</label>
                            <input type="text" name="title" value={house.title} onChange={handleChange} className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="Modern Villa" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs font-bold text-gray-500 ml-2 mb-1">Owner Email</label>
                            <input type="email" name="email" value={house.email} onChange={handleChange} className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="email@example.com" />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-xs font-bold text-gray-500 ml-2 mb-1">Description</label>
                        <textarea name="description" value={house.description} onChange={handleChange} className="p-4 bg-gray-50 rounded-2xl h-32 outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="Describe the property..."></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col">
                            <label className="text-xs font-bold text-gray-500 ml-2 mb-1">Price ($)</label>
                            <input type="number" name="pricePerMonth" value={house.pricePerMonth} onChange={handleChange} className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-400 transition" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs font-bold text-gray-500 ml-2 mb-1">Bedrooms</label>
                            <input type="number" name="bedrooms" value={house.bedrooms} onChange={handleChange} className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-400 transition" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs font-bold text-gray-500 ml-2 mb-1">Location</label>
                            <input type="text" name="location" value={house.location} onChange={handleChange} className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-400 transition" />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-xs font-bold text-gray-500 ml-2 mb-1">New Property Image (Optional)</label>
                        <input type="file" name="image" onChange={handleChange} className="p-4 bg-indigo-50 text-indigo-700 rounded-2xl file:hidden cursor-pointer border-2 border-dashed border-indigo-200" />
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button type="submit" className="flex-1 bg-indigo-600 text-white p-4 rounded-2xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all duration-300 transform hover:-translate-y-1"> Save Changes </button>
                        <button type="button" onClick={() => navigate(-1)} className="px-6 bg-gray-100 text-gray-500 rounded-2xl font-bold hover:bg-gray-200 transition"> Cancel </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Update;