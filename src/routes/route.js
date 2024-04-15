import React from "react";
import Landing from "../pages/Landing";
import SignUp from "../pages/SignUp";
import Password from "../pages/Password";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors"
import Appointment from "../pages/Appointment";
import Test from "../pages/Test";
import ComingSoon from "../pages/ComingSoon";
import Landing1 from "../pages/Landing1";
import Landing2 from "../pages/Landing2";
import Landing3 from "../pages/Landing3";
import Details from "../pages/Details";
const routes = [
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path:"/password",
        element:<Password/>,
    },
    {
        path: "/home",
        element: <Home/>,
    },
,
    {
        path:"/doctors",
        element:<Doctors/>,
    },
    {
        path:"/appointment",
        element:<Appointment/>,
    },
    {
        path:"/test",
        element:<Test/>,
    },
    {
        path:"/comingsoon",
        element:<ComingSoon/>,
    },
    {
        path:"/landing1",
        element:<Landing1/>,
    },
    {
        path:"/landing2",
        element:<Landing2/>,
    },
    {
        path:"/landing3",
        element:<Landing3/>,
    },
    {
        path:"/details",
        element:<Details/>,
    }

];

export default routes;