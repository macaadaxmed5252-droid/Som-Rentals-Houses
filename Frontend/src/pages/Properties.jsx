import { useState, useEffect } from "react"
import axios from "axios"


function Properties() {
    const [properties, setProperties] = useState([]);
    
    const propertiesRead = async () => {
        try {
            const res = await axios.get("http://localhost:9000/House");
            setProperties(res.data);
        } catch (err) {
            console.log("Xogta lama keeni karo:", err);
        }
    }

    useEffect(() => {
        propertiesRead();
    }, []);

    return (
        <div className="p-8 bg-gray-50 min-h-screen">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                
                {properties.map((property) => (
                    <div key={property._id} className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 group">
                        <div className="relative h-56 w-full overflow-hidden">
                            <img src={`http://localhost:9000/AllImages/${property.image}`} alt={property.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => e.target.src = "https://via.placeholder.com/400x300?text=No+Image"}/>
                            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">${property.pricePerMonth}</div>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-1 truncate"> {property.title}</h3>
                            <p className="text-sm text-gray-400 mb-3">{property.email}</p>
                            
                            <div className="flex items-center text-gray-500 text-sm mb-4">
                                <span className="mr-2">📍</span>
                                <span className="truncate">{property.location}</span>
                            </div>
                         
                        </div>
                    </div>
                ))}
            </div>

            {/* Haddii xog la waayo */}
            {properties.length === 0 && (
                <div className="flex flex-col items-center justify-center py-32">
                    <p className="text-gray-400 text-xl italic font-medium">Ma jiraan guryo la soo bandhigay.</p>
                </div>
            )}
        </div>
    )
}

export default Properties;