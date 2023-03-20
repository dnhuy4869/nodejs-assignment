import React from "react";

const Register = () => {
    return (
        <>
             <div className="min-h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-300">Register page</h2>
                    </div>
                    <form className="mt-8 text-white">
                        <label className="block mt-5 mb-2 text-gray-400 text-base">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="block w-full text-sm py-2.5 px-2.5 form-input"
                            autoComplete="off"
                            spellCheck="false"
                        />
                        <label className="block mt-5 mb-2 text-gray-400 text-base">Password</label>
                        <input
                            type="password"
                            name="password"
                            autoComplete="off"
                            spellCheck="false"
                            className="block w-full text-sm py-2.5 px-2.5 form-input"
                        />
                        <label className="block mt-5 mb-2 text-gray-400 text-base">Confirm password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            autoComplete="off"
                            spellCheck="false"
                            className="block w-full text-sm py-2.5 px-2.5 form-input"
                        />
                    </form>
                    <button className='w-full btn-primary px-6 py-2 font-bold'>Register</button>
                </div>
            </div>
        </>
    )
}

export default Register;