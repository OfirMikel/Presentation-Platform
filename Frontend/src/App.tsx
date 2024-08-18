import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import SlidePage from "./pages/SlidePage.tsx";
import {homePageLoader} from "./loaders/homePageLoader.ts";
import Error from "./components/Errors/Error.tsx";
import AddPresentation from "./pages/AddPresentation.tsx";
import React from "react";
import AddEditSlide from "./pages/AddEditSlide.tsx";

/**
 * router for the app with loader and errors
 */
const router = createBrowserRouter([
        {
            path: '/',
            element: <Home/>,
            loader: homePageLoader,
            errorElement: <Error/>
        },
        {
            path: '/presentation/:title/:page',
            element: <SlidePage/>
        },
        {
            path: '/presentation/:title/alter',
            element: <AddEditSlide />,
        },
        {
            path: '/new_presentation',
            element: <AddPresentation/>
        }
    ]
);

/**
 * The App function - used with router context api for react router dom
 * @constructor
 */
function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
