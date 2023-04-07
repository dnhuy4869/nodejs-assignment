import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Register = () => {
    const [message, setMessage] = useState({
        isSuccess: false,
        message: ""
    });

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("This is a required field")
                .min(3, "This field require at least 3 characters")
                .max(70, "This field cannot exceed 70 characters"),
            password: Yup.string()
                .required("This is a required field")
                .min(3, "This field require at least 3 characters")
                .max(70, "This field cannot exceed 70 characters"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Confirm password must match')
        }),
        onSubmit: async (values) => {
            const data = {
                username: values.username,
                password: values.password,
            }

            try {
                const res = await axios.post(`http://127.0.0.1:8000/auth/register`,
                    data
                );

                navigate("/login");

                setMessage({
                    isSuccess: true,
                    message: res.data.message
                });

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
            <div className="min-h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-300">Register page</h2>
                    </div>
                    <form className="mt-8 text-white" onSubmit={formik.handleSubmit}>
                        <label className="block mt-5 mb-2 text-gray-400 text-base">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="block w-full text-sm py-2.5 px-2.5 form-input"
                            autoComplete="off"
                            spellCheck="false"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.username && formik.touched.username && (
                            <p className="italic text-danger text-sm">
                                {formik.errors.username}
                            </p>
                        )}
                        <label className="block mt-5 mb-2 text-gray-400 text-base">Password</label>
                        <input
                            type="password"
                            name="password"
                            autoComplete="off"
                            spellCheck="false"
                            className="block w-full text-sm py-2.5 px-2.5 form-input"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password && formik.touched.password && (
                            <p className="italic text-danger text-sm">
                                {formik.errors.password}
                            </p>
                        )}
                        <label className="block mt-5 mb-2 text-gray-400 text-base">Confirm password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            autoComplete="off"
                            spellCheck="false"
                            className="block w-full text-sm py-2.5 px-2.5 form-input"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                            <p className="italic text-danger text-sm">
                                {formik.errors.confirmPassword}
                            </p>
                        )}
                        <button type="submit" className='mt-6 w-full btn-primary px-6 py-2 font-bold'>Register</button>
                        {
                            message.message !== ""
                                ? (
                                    <p className={"italic " + (message.isSuccess ? "text-success" : "text-danger")}>
                                        {message.message}
                                    </p>
                                )
                                : null
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;