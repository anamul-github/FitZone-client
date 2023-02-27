import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='w-full bg-[#0a192f] text-white'>
            <h2 className='text-4xl text-center font-bold pt-10'>All Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
                {
                    services.map(service => (
                        <div className="mx-auto card w-96 bg-base-100 shadow-xl mb-5" key={service._id}>
                            <div className="relative">
                                <PhotoProvider>
                                    <PhotoView src={service.img}>
                                        <img variant="top" className="w-full h-60 min-h-full object-cover" src={service.img} alt={service.name} />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                            <div className="p-4 bg-[#0D0D0D]">
                                <h2 className="text-xl mb-3 font-bold">{service.name}</h2>
                                <p className="mb-2 font-bold">${service.price}</p>
                                <p>{service.description}</p>
                                <Link to={`/serviceDetails/${service._id}`} className="mt-4 inline-block">
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllServices;