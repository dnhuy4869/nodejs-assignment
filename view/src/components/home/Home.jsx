import React, { useEffect, useState } from 'react';
import Content from './products/Content';
import Topbar from './Topbar';
import axios from 'axios';

const Home = () => {
    const [allProduct, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        try {
            async function fetchData() {
                const res = await axios.get(`http://127.0.0.1:8000/product/get-all`);

                setAllProducts(res.data);
                setProducts(res.data);
            }

            fetchData();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <>
            <Topbar allProduct={allProduct} products={products} setProducts={setProducts} />
            <Content products={products} setProducts={setProducts} setAllProducts={setAllProducts} />
        </>
    )
}

export default Home;