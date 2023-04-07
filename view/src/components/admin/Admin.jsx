import React, { useEffect, useState } from "react";
import Login from "../Login";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import Users from "./Users/Users";

const Admin = () => {
    const tabs = [
        {
            name: "Categories",
            path: "/admin/categories",
        },
        {
            name: "Products",
            path: "/admin/products",
        },
        {
            name: "Users",
            path: "/admin/users",
        },
    ];

    const navigate = useNavigate();

    useEffect(() => {
        navigate("/admin/categories", { replace: true });
     },[])

    const [activeIndex, setActiveIndex] = useState(0);

    const activeClassName = "px-8 border-l-2 border-[color:var(--primary-color)] text-[color:var(--primary-color)]";
    const inactiveClassName = "px-8 border-l-2 border-gray-300 text-gray-300 hover:border-gray-100 hover:text-gray-100";

    return (
        <>
            <div className='px-9'>
                <aside className="w-64 h-screen fixed">
                    <div className="h-full rounded-sm bg-[color:var(--child-background-color)]">
                        <div className="w-64 flex ml-8 pt-6 gap-1 uppercase 
                        font-semibold text-3xl hover:cursor-pointer">
                            <p className="text-blue-500">Dashboard</p>
                        </div>
                        <ul className="mt-10">
                            {
                                tabs.map((tab, index) => {
                                    return (
                                        <Link key={index} className="
                                                py-3
                                                flex items-center
                                                font-bold
                                                hover:cursor-pointer"
                                            to={tab.path}
                                            onClick={() => setActiveIndex(index)}>
                                            <p className={index === activeIndex ? activeClassName : inactiveClassName}>
                                                {tab.name}
                                            </p>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </aside>
                <div className="ml-64">
                    <div className="flex items-center justify-between pt-4 px-2">
                        <span></span>
                        <img className="w-9 h-9 rounded-full" src="/anime3.png" alt="Rounded avatar" />
                    </div>
                    <div className="mt-4 pt-5 pl-8">
                        <Routes>
                            <Route path='/categories/*' element={<Categories />} />
                            <Route path='/products/*' element={<Products />} />
                            <Route path='/users/*' element={<Users />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;