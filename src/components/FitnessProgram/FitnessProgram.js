import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import fitness from '../../assets/99668-fitness.json';

function FitnessProgram() {
    return (
        <section className="bg-[#0D0D0D] text-white py-20 lg:h-screen lg:flex lg:justify-center lg:items-center">
            <div className="container px-4 flex justify-center items-center">
                <div>
                    <div className="w-full lg:w-3/4 lg:pl-24 px-4 mb-8 lg:mb-0">
                        <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
                            Your Journey to a Better You Starts Here
                        </h2>
                        <p className="leading-relaxed mb-6">
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
                            <br />
                            <li>
                                <span className="font-semibold">Group Fitness Classes:</span>{' '}
                                Join a community of like-minded individuals in a variety of
                                classes, from high-intensity interval training to yoga and
                                Pilates.
                            </li>
                            <br />
                            <li>
                                <span className="font-semibold">Nutrition Coaching:</span> Fuel
                                your body for optimal health with personalized nutrition
                                plans and guidance from our expert coaches.
                            </li>
                        </ul>
                        <Link to="/allServices"
                            href="#"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 flex justify-center"
                        >
                            Start Your Journey
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <Lottie animationData={fitness} loop={true} />
            </div>
        </section>
    );
}

export default FitnessProgram;
