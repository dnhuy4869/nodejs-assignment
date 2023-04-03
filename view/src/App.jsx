import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/admin/Admin";

const router = createBrowserRouter([
    {
        path: "*",
        element: <Home />,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/admin",
        element: <Admin />,
    },
]);

const App = () => {
    return (
        <>
            <div className="
                    h-screen
                    border-t-2
                    text-white
                    border-[color:var(--primary-color)]
                    bg-[color:var(--background-color)]">
                <RouterProvider router={router} />
            </div>
        </>
    )
}

export default App;