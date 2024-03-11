import React from "react";
import Landing from "../pages/Landing";
import SignUp from "../pages/SignUp";
import Password from "../pages/Password";


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
    }
];

export default routes;