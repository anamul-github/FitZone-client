import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h2 className='text-4xl text-center font-bold'>Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    services.map(service => (
                        <div className="mx-auto card w-96 bg-base-100 shadow-xl" key={service._id}>
                            <div className="relative">
                                <PhotoProvider>
                                    <PhotoView src={service.img}>
                                        <img className="w-full h-auto object-cover" src={service.img} alt={service.name} />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-medium mb-2">{service.name}</h2>
                                <p className="text-gray-700 mb-2">${service.price}</p>
                                <p className="text-gray-600">{service.description}</p>
                                <Link to={`/serviceDetails/${service._id}`} className="mt-4 inline-block">
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
                <div className='mx-auto'>
                    <Link to='/allServices'><button className='btn-success px-5 mb-5'>See All</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Services;