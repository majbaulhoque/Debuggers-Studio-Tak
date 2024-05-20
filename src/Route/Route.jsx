import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import SoppingCart from "../Component/Shopping Cart/SoppingCart";
import ErrorElement from "../Pages/Error Page/ErrorElement";
import AddToCart from "../Pages/Add To Cart/AddToCart";


const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json'),
            },
            {
                path: '/shoppingCart',
                element: <SoppingCart></SoppingCart>,
            },
            {
                path: '/carts/:id',
                element: <AddToCart></AddToCart>,
                loader: () => fetch('/data.json')
            }
        ],
    },
])

export default route;