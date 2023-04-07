import React from "react";
import { Route, Routes } from "react-router-dom";
import ListTable from "./ListTable";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

const Products = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<ListTable />} />
                <Route path='/add-form' element={<AddForm />} />
                <Route path='/edit-form/:id' element={<EditForm />} />
            </Routes>
        </>
    )
}

export default Products;