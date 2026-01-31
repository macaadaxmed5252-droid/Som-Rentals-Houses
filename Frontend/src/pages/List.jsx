import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

function List() {
    const [properties, setProperties] = useState([]);

    const propertiesRead = async () => {
        try {
            const res = await axios.get("http://localhost:9000/House");
            setProperties(res.data);
            console.log("Xogta waa la helay:", res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const navigate = useNavigate();

    const propertiesDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this property?")) {
            axios.delete (`http://localhost:9000/House/${id}`).then(() => {
                propertiesRead();
            })
        }
    }

    useEffect(() => {
        propertiesRead();
    }, []);

    return (
        <div className="flex flex-col space-y-4 p-4">
            {/* Header Row - Div ahaan loo sameeyay */}
            <div className="hidden md:flex bg-gray-100 p-4 rounded-xl font-bold text-gray-700 shadow-sm">
                <div className="w-20">Image</div>
                <div className="flex-1 ml-4">Title & Email</div>
                <div className="flex-1">Location</div>
                <div className="w-24">Price</div>
                <div className="w-32 text-center">Action</div>
            </div>

            {properties.map((property) => (
                <div 
                    key={property._id} 
                    className="flex flex-col md:flex-row items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300" >

                    <div className="w-20 h-20 flex-shrink-0">
                        <img src={`http://localhost:9000/AllImages/${property.image}`} alt="House" className="w-full h-full object-cover rounded-xl border border-gray-200" onError={(e) => e.target.src = "https://via.placeholder.com/150"}/>
                    </div>

                    <div className="flex-1 md:ml-4 mt-4 md:mt-0 w-full">
                        <h3 className="text-lg font-bold text-gray-800">{property.title}</h3>
                        <p className="text-sm text-gray-500">{property.email}</p>
                    </div>

                    <div className="flex-1 text-gray-600 text-sm mt-2 md:mt-0 w-full md:w-auto">
                        <span className="md:hidden font-bold">Loc: </span> {property.location}
                    </div>

                    <div className="w-full md:w-24 mt-2 md:mt-0">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-bold"> ${property.pricePerMonth} </span>
                    </div>

                    <div className="w-full md:w-32 flex justify-center gap-4 mt-4 md:mt-0 border-t md:border-t-0 pt-4 md:pt-0">
                        <button onClick={() => navigate (`/update/${property._id}`)} className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-100 transition"> Edit </button>
                        <button onClick={() => propertiesDelete(property._id)} className="bg-red-50 text-red-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-100 transition"> Delete </button>
                    </div>
                </div>
            ))}

            {properties.length === 0 && (
                <div className="text-center py-20 text-gray-400 italic bg-white rounded-3xl">
                    No properties available.
                </div>
            )}
        </div>
    )
}

export default List