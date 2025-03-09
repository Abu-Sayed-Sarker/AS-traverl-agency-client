import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../Layouts/Dashboard";
import Login from "../Pages/Main/Login";
import Register from "../Pages/Main/Register";
import Home from "../Pages/Main/Home/Home";
import MyBooking from "../Pages/Dashbord/MyBooking";
import AddTour from "../Pages/Dashbord/AddTour";
import AboutUs from "../Pages/Main/About/AboutUs";
import PrivetRouter from "./PrivetRouter";
import PackageDatels from "../Pages/Main/Home/PackageDatels";
import Trips from "../Pages/Main/Home/Trips";
import BookingNow from "../Pages/Main/Home/BookingNow";
import AddStroys from "../Pages/Dashbord/AddStroys";
import Community from "../Pages/Main/Home/Community";
import JoinTourGuide from "../Pages/Dashbord/JoinTourGuide";
import AdminRouter from "./AdminRouter";
import ManageCandidates from "../Pages/Dashbord/Admin/ManageCandidates";
import ManageUsers from "../Pages/Dashbord/Admin/ManageUsers";
import GuideRouter from "./GuideRouter";
import GuideAddStories from "../Pages/Guide/GuideAddStories";
import GuideStories from "../Pages/Main/Home/GuideStories";
import MyAssignedTours from "../Pages/Guide/MyAssignedTours";
import PayNow from "../Pages/Dashbord/Payment/PayNow";
import ErrorPage from "../Components/ErrorPage";
import ManageProfileAll from "../Pages/Dashbord/Manageprofile/ManageProfileAll";



const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: 'guide-stories',
                element: <GuideStories></GuideStories>
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
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <ManageProfileAll></ManageProfileAll>
            },
            {
                path: '/dashboard/mybooking',
                element: <PrivetRouter><MyBooking></MyBooking></PrivetRouter>
            },
            {
                path: '/dashboard/addstorie',
                element: <PrivetRouter><AddStroys></AddStroys></PrivetRouter>
            },
            {
                path: '/dashboard/join-tour-guide',
                element: <PrivetRouter><JoinTourGuide></JoinTourGuide></PrivetRouter>
            },
            {
                path: '/dashboard/addpackage',
                element: <AdminRouter><AddTour></AddTour></AdminRouter>
            },
            {
                path: '/dashboard/manage-candidates',
                element: <AdminRouter><ManageCandidates></ManageCandidates></AdminRouter>
            },
            {
                path: '/dashboard/manage-users',
                element: <AdminRouter><ManageUsers></ManageUsers></AdminRouter>
            },
            {
                path: '/dashboard/guide-add-stories',
                element: <GuideRouter><GuideAddStories></GuideAddStories></GuideRouter>
            },
            {
                path: '/dashboard/my-assigned-tours',
                element: <GuideRouter><MyAssignedTours></MyAssignedTours></GuideRouter>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivetRouter><PayNow></PayNow></PrivetRouter>
            },
        ]
    }
])

export default Router;