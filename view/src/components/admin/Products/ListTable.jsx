import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useFlexLayout, useGlobalFilter, usePagination, useTable } from "react-table";

const ListTable = () => {
    const [allProducts, setAllProducts] = useState([]);

    const deleteProduct = async (id) => {
        try {
            const res = await axios.delete(`http://127.0.0.1:8000/product/delete-one/${id}`);

            setAllProducts((prevProducts) => {
                return prevProducts.filter((obj) => obj._id !== id);
            });
        }
        catch (err) {
           console.log(err);
        }
    }

    useEffect(() => {
        try {
            async function fetchData() {
                const res = await axios.get("http://127.0.0.1:8000/product/get-all");
                //console.log(res.data);

                const newData = res.data.map((product, index) => {
                    return {
                        _id: product._id,
                        name: product.name,
                        image: (
                            <img className="w-14 h-full" src={`http://127.0.0.1:8000/public/images/${product.image}`} />
                        ),
                        price: product.price,
                        actions: (
                            <div className="flex items-center gap-4">
                                <Link to={`/admin/products/edit-form/${product._id}`}
                                    className="font-medium text-blue-600 text-blue-500 hover:underline">
                                    Edit
                                </Link>
                                <p
                                    className="font-medium text-red-600 text-red-500 hover:underline hover:cursor-pointer"
                                    onClick={() => deleteProduct(product._id)}>
                                    Remove
                                </p>
                            </div>
                        )
                    }
                })

                setAllProducts(newData);
            }

            fetchData();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    const columns = useMemo(() => [
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "Image",
            accessor: "image",
            disableSortBy: true,
            disableFilters: true,
        },
        {
            Header: "Price",
            accessor: "price",
        },
        {
            Header: "Actions",
            accessor: "actions",
            width: 62,
            disableSortBy: true,
            disableFilters: true,
        }
    ], []);

    const data = useMemo(() => allProducts, [allProducts]);

    const tableInstance = useTable({
        columns,
        data,
        initialState: {
            pageSize: 5
        }
    }, useFlexLayout,
        useGlobalFilter,
        usePagination);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page,
        setGlobalFilter,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
    } = tableInstance;

    const { globalFilter, pageIndex, pageSize } = state;

    return (
        <>
            <div className="mb-4 flex items-center gap-5">
                <input className="px-2.5 py-2 form-input text-base w-96" placeholder="Search for items"
                    value={globalFilter || ""}
                    onChange={e => setGlobalFilter(e.target.value)} />
                <Link to="/admin/products/add-form" >
                    <button className="btn-primary px-6 py-2 font-bold">Add new</button>
                </Link>
            </div>

            <table {...getTableProps()}
                className="w-full text-sm text-left text-slate-400">
                <thead className="text-xs uppercase bg-gray-700">
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}
                                            className="px-6 py-3">
                                            {column.render("Header")}
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}
                                    className="bg-[color:var(--child-background-color)] border-b border-gray-700 hover:bg-[#25273A]">
                                    {
                                        row.cells.map(cell => (
                                            <td {...cell.getCellProps()}
                                                className="px-6 py-4">
                                                {cell.render("Cell")}
                                            </td>
                                        ))
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-normal text-gray-400">
                    Showing page <span className="font-semibold text-white"> {pageIndex + 1}</span> of <span className="font-semibold text-white">{pageOptions.length}</span>
                </span>
                <div className="">
                    <button className="px-3 py-2 leading-tight border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white hover:cursor-pointer"
                        onClick={() => previousPage()} disabled={!canPreviousPage}>{"<<"}</button>
                    <button className="px-3 py-2 leading-tight border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white hover:cursor-pointer"
                        onClick={() => nextPage()} disabled={!canNextPage}>{">>"}</button>
                </div>
            </div>
        </>
    )
}

export default ListTable;