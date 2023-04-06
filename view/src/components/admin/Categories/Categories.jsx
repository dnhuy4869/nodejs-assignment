import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useFlexLayout, useGlobalFilter, usePagination, useTable } from "react-table";
import ListTable from "./ListTable";
import AddForm from "./AddForm";
import { Route, Routes } from "react-router-dom";
import EditForm from "./EditForm";

const Categories = () => {

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

export default Categories;