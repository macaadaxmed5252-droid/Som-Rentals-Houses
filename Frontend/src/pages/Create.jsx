import React, { useState } from 'react';
import axios from 'axios';

function Create() {
    const [data, setdata] = useState({
        title: "",
        description: "",
        pricePerMonth: "",
        image: null,
        location: "",
        bedrooms: "",
        dateTime: "",
        email: "" // Halkan ku dar email-ka maqan
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setdata({
            ...data,
            [name]: files ? files[0] : value
        });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        // Ku shub xogta oo dhan FormData
        for (let key in data) {
            formData.append(key, data[key]);
        }

        try {
            // Hubi in URL-ku sax yahay (u dhowr sida index.js ku qoran)
            await axios.post("http://localhost:9000/House", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            
            alert("House created successfully ✅");
            
            // Dib u bilaaw (Reset) xogta
            setdata({
                title: "", description: "", pricePerMonth: "",
                image: null, location: "", bedrooms: "",
                dateTime: "", email: ""
            });
            e.target.reset();
        } catch (err) {
            console.error(err.response?.data || err.message); // Halkan ka fiiri error-ka dhabta ah ee Backend-ka ka yimid
            alert("Cilad: " + (err.response?.data?.message || "Something went wrong ❌"));
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handlesubmit} className="space-y-4">
                <input type="text" name="title" value={data.title} onChange={handleChange} placeholder="Title" className="w-full border p-2 rounded" required />
                <input type="text" name="email" value={data.email} onChange={handleChange} placeholder="Owner Email" className="w-full border p-2 rounded" required />
                <textarea name="description" value={data.description} onChange={handleChange} placeholder="Description" className="w-full border p-2 rounded" required />
                <div className="grid grid-cols-2 gap-2">
                    <input type="number" name="pricePerMonth" value={data.pricePerMonth} onChange={handleChange} placeholder="Price" className="border p-2 rounded" required />
                    <input type="number" name="bedrooms" value={data.bedrooms} onChange={handleChange} placeholder="Bedrooms" className="border p-2 rounded" required />
                </div>
                <input type="text" name="location" value={data.location} onChange={handleChange} placeholder="Location" className="w-full border p-2 rounded" required />
                <input type="file" name="image" onChange={handleChange} className="w-full" required />
                <input type="datetime-local" name="dateTime" value={data.dateTime} onChange={handleChange} className="w-full border p-2 rounded" />
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Create House</button>
            </form>
        </div>
    );
}

export default Create;