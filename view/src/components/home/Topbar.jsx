import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Topbar = ({ allProduct, products, setProducts }) => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    }

    const logout = async () => {
        try {
            localStorage.removeItem("user");
            navigate("/", { replace: true });
        }
        catch (err) {
            console.log(err);
        }
    }

    const currUser = localStorage.getItem("user");

    const searchProducts = (e) => {
        const results = allProduct.filter(product =>
            product.name.includes(e.target.value)
        );

        setProducts(results);
    }

    return (
        <>
            <div className="px-16 pt-6 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="w-64 flex gap-1 uppercase font-semibold text-3xl hover:cursor-pointer"
                        onClick={() => { goToHome() }}>
                        <p className="text-gray-300">My</p>
                        <p className="text-blue-500">Shop</p>
                    </div>
                    <input className="ml-4 px-2.5 py-3 form-input text-base w-96" placeholder="Search for games"
                        onChange={e => searchProducts(e)} />
                </div>

                {
                    !currUser ? (
                        <nav className="flex items-center gap-1">
                            <Link to="/login" className="hover:text-[color:var(--primary-color)]">Login</Link>
                            <span>/</span>
                            <Link to="/register" className="hover:text-[color:var(--primary-color)]">Register</Link>
                        </nav>
                    )
                        : (
                            <div className="">
                                <p className="hover:text-[color:var(--primary-color)] hover:cursor-pointer"
                                    onClick={() => logout()}>Log out</p>
                            </div>

                        )
                }
            </div>
        </>
    )
}

export default Topbar;