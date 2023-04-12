import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";

const Content = ({ products, setProducts, setAllProducts }) => {
    return (
        <>
            <div className='px-12 mt-28'>
                <Sidebar setProducts={setProducts} setAllProducts={setAllProducts} />
                <div className="pl-72 grid grid-cols-4 gap-y-6">
                    {
                        products.map((product, index) => {
                            return (
                                <Card product={product} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Content;