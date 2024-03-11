import React from 'react'
import "./index.css"

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import routes from './routes/route'

const App = () => {
    const routings = createBrowserRouter(routes);

    return (
        <div className=' '>
            <RouterProvider router={routings}></RouterProvider>
        </div>
    )
}

export default App