import React from "react";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/admin/Admin";

const App = () => {
    return (
        <>
            <div className="
                   min-h-screen
                   h-full
                    border-t-2
                    text-white
                    border-[color:var(--primary-color)]
                    bg-[color:var(--background-color)]">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/admin/*" element={<Admin />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App;