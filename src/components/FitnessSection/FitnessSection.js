import React from "react";

const FitnessSection = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/Y8Q6h2w/27622.jpg')] py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-2xl text-indigo-800 font-extrabold tracking-wide uppercase">Achieve your fitness goals</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Get fit with our expert trainers
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-800 font-bold lg:mx-auto">
                        We offer a range of fitness programs designed to help you achieve your goals, no matter what your fitness level is.
                    </p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-20 lg:grid-cols-3 lg:gap-10">
                        <div className="bg-white shadow rounded-lg">
                            <div className="px-6 py-8">
                                <img className="w-full" src="https://i.ibb.co/T2NYXxL/1.jpg" alt="" />
                                <h3 className="mt-6 text-center text-2xl font-semibold text-gray-900">Personal Training</h3>
                                <p className="mt-2 text-center text-gray-600">
                                    Our expert trainers will work with you one-on-one to create a personalized fitness plan tailored to your needs and goals.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg">
                            <div className="px-6 py-8">
                                <img className="w-full" src="https://i.ibb.co/pKXWnfy/2.jpg" alt="" />
                                <h3 className="mt-6 text-center text-2xl font-semibold text-gray-900">Group Fitness</h3>
                                <p className="mt-2 text-center text-gray-600">
                                    Join one of our group fitness classes and work out with a supportive community of like-minded individuals.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg">
                            <div className="px-6 py-8">
                                <img className="w-full" src="https://i.ibb.co/CWcVTfy/3.jpg" alt="" />
                                <h3 className="mt-6 text-center text-2xl font-semibold text-gray-900">Nutrition Coaching</h3>
                                <p className="mt-2 text-center text-gray-600">
                                    Our certified nutrition coaches will work with you to create a personalized nutrition plan that will help you reach your fitness goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FitnessSection;
