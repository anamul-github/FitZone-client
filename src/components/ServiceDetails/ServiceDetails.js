import React, { useEffect, useState } from 'react';
// import { PhotoProvider, PhotoView } from 'react-photo-view';
// import { useLoaderData } from 'react-router-dom';

const ServiceDetails = ({ params }) => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services/${params.id}`)
            .then(res => res.json())
            .then(data => setServices(data));

    }, [params.id])

    return (
        <div className='w-full'>
            <h2>{services.img}</h2>
        </div>
    );
};

export default ServiceDetails;