import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Lottie from "lottie-react";
import login from '../../assets/106680-login-and-sign-up.json';

const Login = () => {
    return (
        <div className='my-5 py-5 flex justify-center items-center'>
            <div className='w-1/2 mx-auto hidden lg:block'>
                <Lottie animationData={login} loop={true} />
            </div>
            <div className="w-11/12 lg:w-4/12 my-5 mx-auto bg-glass-dark text-white p-4 rounded-md">
                <form>
                    <h1 className="mb-2 text-3xl text-center font-bold">Sign in</h1>
                    <p className="text-gray-400 mb-3 text-sm text-center text-bold">Welcome back!</p>
                    <div className="relative text-gray-700">
                        <input type="email" name="email" className="pt-6 rounded-md px-3 peer h-14 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500" id="floatingInput" placeholder="name@example.com" required />
                        <label for="floatingInput" className="absolute left-0 -top-0.5 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all duration-75 px-3 pt-2">Email address</label>
                    </div>

                    <div className="relative text-gray-700 my-3">
                        <input type="password" name="password" className="pt-6 rounded-md px-3 peer h-14 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500" id="floatingPassword" placeholder="Password" required />
                        <label for="floatingPassword" className="absolute left-0 -top-0.5 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all duration-75 px-3 pt-2">Password</label>
                    </div>


                    <div className="flex items-center justify-between mb-3 text-sm">
                        <label>
                            <input type="checkbox" value="remember-me" className="mr-2 leading-tight" />
                            <span className="text-gray-400">Remember me</span>
                        </label>
                        <p className="text-right text-gray-400 cursor-pointer">Forgot Password</p>
                    </div>
                    <button className="w-full px-3 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" type="submit">Sign in</button>
                    <hr className="my-4 border-gray-400" />
                </form>
                <p className="px-3 my-0 text-sm text-gray-400 text-center font-bold pt-2">Sign in with social accounts</p>
                <div className="p-3 text-xl flex justify-center">
                    <button className="w-1/2 py-3 font-medium text-white bg-gray-800 rounded-lg hover:bg-blue-600"><FaGoogle className="inline-block mr-2" /> Google</button>
                </div>
                <p className="text-center text-gray-400 text-sm font-bold">
                    New member?{' '}
                    <Link to='../SignUpPage/SignUpPage' className="underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

