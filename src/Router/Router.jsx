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
import PrivetRouter from "./PrivetRouter";
import PackageDatels from "../Pages/Main/Home/PackageDatels";
import Trips from "../Pages/Main/Home/Trips";
import BookingNow from "../Pages/Main/Home/BookingNow";
import AddStroys from "../Pages/Dashbord/AddStroys";
import Community from "../Pages/Main/Home/Community";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>Page is not found</div>,
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
            {
                path: 'datels/:id',
                element: <PrivetRouter><PackageDatels></PackageDatels></PrivetRouter>
            },
            {
                path: 'trips',
                element: <Trips></Trips>
            },
            {
                path: 'community',
                element: <Community></Community>
            },
            {
                path: 'booking/:id/:title',
                element: <PrivetRouter><BookingNow></BookingNow></PrivetRouter>
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
                path: '/dashboard/addstorie',
                element: <AddStroys></AddStroys>
            },
            {
                path: '/dashboard/addpackage',
                element: <AddTour></AddTour>
            },
        ]
    }
])

export default Router;