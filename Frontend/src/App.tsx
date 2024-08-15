import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Slide from "./pages/Slide.tsx";

const router = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/presentation',
            element: <Slide/>
        }
    ]
);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
