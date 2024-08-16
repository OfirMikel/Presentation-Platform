import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import SlidePage from "./pages/SlidePage.tsx";

const router = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/presentation/:title/:page',
            element: <SlidePage/>
        }
    ]
);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
