import React from "react";
import { Route, Routes } from "react-router-dom";
import ListTable from "./ListTable";

const Products = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<ListTable />} />
            </Routes>
        </>
    )
}

export default Products;