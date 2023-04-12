import axios from "axios";
import React, { useEffect, useState } from "react";

const Sidebar = ({setProducts, setAllProducts}) => {
    const [categories, setCategories] = useState([]);

    const [activeIndex, setActiveIndex] = useState(0);

    const activeClassName = "px-8 border-l-2 border-[color:var(--primary-color)] text-[color:var(--primary-color)]";
    const inactiveClassName = "px-8 border-l-2 border-gray-300 text-gray-300 hover:border-gray-100 hover:text-gray-100";

    useEffect(() => {
        try {
            async function fetchData() {
                const res = await axios.get("http://127.0.0.1:8000/category/get-all");

                setCategories(res.data);

                const products = await axios.get(`http://127.0.0.1:8000/product/get-by-category/${res.data[0]._id}`);

                setAllProducts(products.data);
                setProducts(products.data);
            }

            fetchData();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    const changeActiveTab = (index) => {
        async function fetchData() {
            const res = await axios.get(`http://127.0.0.1:8000/product/get-by-category/${categories[index]._id}`);

            setAllProducts(res.data);
            setProducts(res.data);
        }

        fetchData();

        setActiveIndex(index);
    }

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
                                        onClick={() => changeActiveTab(index)}>
                                        <p className={index === activeIndex ? activeClassName : inactiveClassName}>
                                               {item.name}
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