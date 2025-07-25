import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home.jsx";

import CreatePost from "../Pages/CreatePost/CreatePost.jsx";

const routes = createBrowserRouter([
    {
    path: "/", element: <Home/>
    },
    {
    path: "/create-post", element: <CreatePost/>
    }
])
export default routes