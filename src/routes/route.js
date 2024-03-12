import React from "react";
import Landing from "../pages/Landing";
import SignUp from "../pages/SignUp";
import Password from "../pages/Password";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors";

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

];

export default routes;