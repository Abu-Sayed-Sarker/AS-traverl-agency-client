import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../Layouts/Dashboard";
import Login from "../Pages/Main/Login";
import Register from "../Pages/Main/Register";
import Home from "../Pages/Main/Home/Home";
import ManageProfile from "../Pages/Dashbord/ManageProfile";
import MyBooking from "../Pages/Dashbord/MyBooking";
import AddTour from "../Pages/Dashbord/AddTour";
import AboutUs from "../Pages/Main/About/AboutUs";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>Page is loding</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        errorElement: <div>Dashbord in ton found</div>,
        children: [
            {
                path: '/dashboard',
                element: <ManageProfile></ManageProfile>
            },
            {
                path: '/dashboard/mybooking',
                element: <MyBooking></MyBooking>
            },
            {
                path: '/dashboard/addpackage',
                element: <AddTour></AddTour>
            },
        ]
    }
])

export default Router;