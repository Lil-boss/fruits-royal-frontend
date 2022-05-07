import axios from 'axios';
import { useEffect, useState } from 'react';

const UseProductItem = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        try {
            axios.get("https://fruitsroyal.herokuapp.com/api/product")
                .then(res => { setProducts(res.data) })
        } catch {
            console.log("error");
        }
    }, []);

    return [products, setProducts];

};

export default UseProductItem;