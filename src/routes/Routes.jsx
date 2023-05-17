import { createBrowserRouter } from "react-router-dom";
import Bookings from "../Pages/Bookings/Bookings";
import BookService from "../Pages/Bookservice/BookService";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/Singup/SignUp";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },

            {
                path: "book/:id",
                element: <BookService></BookService>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path: 'bookings',
                element: <Bookings></Bookings>
            }
        ]
    },
]);

export default router;