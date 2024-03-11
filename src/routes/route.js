import React from "react";
import Landing from "../pages/Landing";
import SignUp from "../pages/SignUp";


const routes = [
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
];

export default routes;