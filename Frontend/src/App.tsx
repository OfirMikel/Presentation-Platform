import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import SlidePage from "./pages/SlidePage.tsx";
import EditSlide from "./pages/EditSlide.tsx";
import AddSlide from "./pages/AddSlide.tsx";
import {homePageLoader} from "./loaders/homePageLoader.ts";
import Error from "./components/Errors/Error.tsx";
import AddPresentation from "./pages/AddPresentation.tsx";

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
            path: '/presentation/edit/:slideId',
            element: <EditSlide/>
        },
        {
            path: '/presentation/add/:slideId',
            element: <AddSlide/>
        },
        {
            path: '/new_presentation',
            element: <AddPresentation/>
        }
    ]
);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
