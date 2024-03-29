import React from "react";
import Landing from "../pages/Landing";
import SignUp from "../pages/SignUp";
import Password from "../pages/Password";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors"
import Appointment from "../pages/Appointment";
import Test from "../pages/Test";
import ComingSoon from "../pages/ComingSoon";

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

];

export default routes;