import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { name, img, price, description, details } = useLoaderData();

    return (
        <div className='bg-[#0D0D0D] text-white pb-5'>
            <h2 className='text-3xl font-bold text-center py-5'>Service Details</h2>
            <div className="max-w-6xl mx-auto px-4">
                <div className="w-full md:w-1/2 mx-auto">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img className="w-full object-cover rounded-md" src={img} alt={name} />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className="w-full md:w-1/2 mx-auto px-4 py-8 bg-[#0a192f]">
                    <h2 className="text-3xl font-bold mb-4">{name}</h2>
                    <p className="text-lg font-semibold mb-3">Price: ${price}</p>
                    <p className="text-lg mb-4">Description: {description}</p>
                    <p className="text-lg mb-4">Details: {details}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
