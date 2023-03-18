import React, { useState } from "react";

const Sidebar = () => {
    const categories = [
        "PC Games",
        "Mobile Games",
        "PS4 Games",
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const activeClassName = "px-8 border-l-2 border-[color:var(--primary-color)] text-[color:var(--primary-color)]";
    const inactiveClassName = "px-8 border-l-2 border-gray-300 text-gray-300 hover:border-gray-100 hover:text-gray-100";

    return (
        <>
            <aside className="w-64 h-[calc(100vh-7rem)] fixed">
                <div className="h-full rounded-sm bg-[color:var(--child-background-color)]">
                    <ul className="">
                        {
                           
                            categories.map((item, index) => {
                                return (
                                    <li key={index} className="
                                            py-3
                                            flex items-center
                                            font-bold
                                            hover:cursor-pointer"
                                        onClick={() => setActiveIndex(index)}>
                                        <p className={index === activeIndex ? activeClassName : inactiveClassName}>
                                               {item}
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;