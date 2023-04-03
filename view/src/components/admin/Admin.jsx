import React from "react";

const Admin = () => {

    const activeClassName = "px-8 border-l-2 border-[color:var(--primary-color)] text-[color:var(--primary-color)]";
    const inactiveClassName = "px-8 border-l-2 border-gray-300 text-gray-300 hover:border-gray-100 hover:text-gray-100";

    return (
        <>
            <div className='px-12'>
                <aside className="w-64 h-screen fixed">
                    <div className="h-full rounded-sm bg-[color:var(--child-background-color)]">
                        <div className="w-64 flex ml-8 pt-6 gap-1 uppercase 
                        font-semibold text-3xl hover:cursor-pointer">
                            <p className="text-blue-500">Dashboard</p>
                        </div>
                        <ul className="mt-10">
                            <li className="
                                            py-3
                                            flex items-center
                                            font-bold
                                            hover:cursor-pointer"
                            >
                                <p className={activeClassName}>
                                    Categories
                                </p>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default Admin;