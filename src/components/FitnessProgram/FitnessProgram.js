import React from 'react';
import { Link } from 'react-router-dom';

function FitnessProgram() {
    return (
        <section className="bg-[#0D0D0D] text-white py-20 lg:h-screen">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
                            Your Journey to a Better You Starts Here
                        </h2>
                        <p className=" leading-relaxed mb-6">
                            At FitZone, we offer a variety of fitness programs to help
                            you achieve your health and wellness goals. Whether you're
                            looking to build muscle, lose weight, or simply improve your
                            overall fitness, our experienced trainers and coaches are here
                            to guide you every step of the way.
                        </p>
                        <ul className=" mb-6">
                            <li>
                                <span className="font-semibold">Personal Training:</span> Get
                                one-on-one attention and personalized workout plans tailored
                                to your goals and fitness level.
                            </li>
                            <li>
                                <span className="font-semibold">Group Fitness Classes:</span>{' '}
                                Join a community of like-minded individuals in a variety of
                                classes, from high-intensity interval training to yoga and
                                Pilates.
                            </li>
                            <li>
                                <span className="font-semibold">Nutrition Coaching:</span> Fuel
                                your body for optimal health with personalized nutrition
                                plans and guidance from our expert coaches.
                            </li>
                        </ul>
                        <Link to="/allServices"
                            href="#"
                            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
                        >
                            Start Your Journey
                        </Link>
                    </div>
                    <div className="w-full lg:w-1/2 px-4"></div>
                </div>
            </div>
        </section>
    );
}

export default FitnessProgram;
