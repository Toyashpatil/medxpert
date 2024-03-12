import React from "react";
import Landing from "../pages/Landing";
import SignUp from "../pages/SignUp";
import Password from "../pages/Password";
import Home from "../pages/Home";


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

];

export default routes;