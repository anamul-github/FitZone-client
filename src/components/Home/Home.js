import Lottie from 'lottie-react';
import React from 'react';
import push from './../../assets/133718-boy-doing-bench-press.json';



const Home = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/M80NsLX/gradient-background.png')] flex flex-col sm:flex-row justify-center items-center lg:h-screen">
            <div className="w-full sm:w-1/2 p-4">
                <Lottie className="w-full h-auto" loop={true} animationData={push} />
            </div>
            <div className="w-full sm:w-1/2 pr-10">
                <h2 className="text-5xl font-bold mb-4 text-center lg:pr-10">FitZone</h2>
                <p className="text-2xl font-bold mb-4 py-2 lg:pr-10 text-center">Transform Your Body, Transform Your Life. Join Us Today and Achieve Your Fitness Goals!</p>
                <div className='flex justify-center lg:pr-10'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Home;