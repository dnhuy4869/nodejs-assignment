import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

const AddForm = () => {
    const [message, setMessage] = useState({
        isSuccess: false,
        message: ""
    });

    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        try {
            async function fetchData() {
                const res = await axios.get("http://127.0.0.1:8000/category/get-all");
                //console.log(res.data);

                setAllCategories(res.data);
            }

            fetchData();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: "",
            price: 0,
            category: allCategories[0] ? allCategories[0]._id : "",
            images: [],
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("This is a required field")
                .min(3, "This field require at least 3 characters")
                .max(70, "This field cannot exceed 70 characters"),
            category: Yup.string()
                .required("This is a required field"),
            price: Yup.number()
                .required("This is a required field")
                .min(1, "This field must be from 1-99999")
                .max(99999, "This field must be from 1-99999"),
            images: Yup.array()
                .required("This is a required field")
                .min(1, "You have to select at least 1 file")
        }),
        onSubmit: async (values) => {
            //console.log(values);

            let data = new FormData();
            data.append(`image`, values.images[0]);

            data.append(`name`, values.name);
            data.append(`price`, values.price);
            data.append(`idCategory`, values.category);
            data.append(`imageName`, values.images[0].name);

            //console.log(data);

            try {
                const res = await axios.post(`http://127.0.0.1:8000/product/add-new`,
                    data,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                setMessage({
                    isSuccess: true,
                    message: res.data.message
                })
            }
            catch (err) {
                if (err.response) {
                    setMessage({
                        isSuccess: false,
                        message: err.response.data.message
                    })
                }
                else {
                    setMessage({
                        isSuccess: false,
                        message: "Unknown error when post request"
                    })
                }
            }
        }
    })

    return (
        <>
            <div className="bg-[color:var(--child-background-color)] p-5 text-slate-300">
                <h5 className="font-bold text-lg">Add form</h5>
                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-3 my-4 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="" className="">Category</label>
                            <select name="category" className="mt-2 px-2.5 py-1.5 form-input text-base"
                                value={formik.values.category}
                                onChange={formik.handleChange}>
                                {
                                    allCategories.map((cate, index) => (
                                        <option key={index} value={cate._id}>{cate.name}</option>
                                    ))
                                }
                            </select>
                            {formik.errors.category && formik.touched.category && (
                                <p className="italic text-danger text-sm">
                                    {formik.errors.category}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="">Name</label>
                            <input type="text" name="name" className="mt-2 px-2.5 py-1.5 form-input text-base"
                                value={formik.values.name}
                                onChange={formik.handleChange} />
                            {formik.errors.name && formik.touched.name && (
                                <p className="italic text-danger text-sm">
                                    {formik.errors.name}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="">Image</label>
                            <input type="file" name="images" className="mt-2 px-2.5 py-1.5 form-input text-base"
                                onChange={(event) => {
                                    const files = event.target.files;
                                    let myFiles = Array.from(files);
                                    formik.setFieldValue("images", myFiles);
                                }}
                                multiple />
                            {formik.errors.images && formik.touched.images && (
                                <p className="italic text-danger text-sm">
                                    {formik.errors.images}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="">Price</label>
                            <input type="text" name="price" className="mt-2 px-2.5 py-1.5 form-input text-base"
                                value={formik.values.price}
                                onChange={formik.handleChange} />
                            {formik.errors.price && formik.touched.price && (
                                <p className="italic text-danger text-sm">
                                    {formik.errors.price}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button type="submit" className="btn-primary px-6 py-2 font-bold">Save</button>
                        {
                            message.message !== ""
                                ? (
                                    <p className={"italic " + (message.isSuccess ? "text-success" : "text-danger")}>
                                        {message.message}
                                    </p>
                                )
                                : null
                        }
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddForm;