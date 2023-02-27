import { createBrowserRouter, Link } from "react-router-dom";
import AddService from "../../components/AddService/AddService";
import AllServices from "../../components/AllServices/AllServices";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Reviews from "../../components/Reviews/Reviews";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>
            },
            {
                path: '/serviceDetails/:id',
                // loader: async ({ params }) => {
                //     return fetch(`http://localhost:5000/services/${params.id}`)
                // },
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/add-service',
                element: <AddService></AddService>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: '*',
        element: <div className="flex items-center h-screen bg-gray-800 text-white text-center">
            <div className="w-full">
                <h1 className="text-6xl font-medium">404</h1>
                <p className="text-xl font-medium mb-4">Page Not Found</p>
                <p className="text-sm font-medium mb-4">
                    Looks like you've followed a broken link or entered a URL that doesn't
                    exist on this site.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                    <Link to="/">Go Back Home</Link>
                </button>
            </div>
        </div>
    }
])