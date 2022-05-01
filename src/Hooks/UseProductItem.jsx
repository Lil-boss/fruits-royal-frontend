import axios from 'axios';
import { useState } from 'react';

const UseProductItem = () => {
    const [products, setProducts] = useState([]);
    try {
        const product = axios.get("");
        setProducts(product);
    } catch {
        console.log("error");
    }
    return [products, setProducts];
};

export default UseProductItem;