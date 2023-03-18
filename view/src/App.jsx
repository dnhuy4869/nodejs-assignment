import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

const router = createBrowserRouter([
    {
        path: "*",
        element: <Home />,
    },
    {
        path: "/",
        element: <Home />,
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