import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const UseProductItem = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        try {
            axios.get("https://fruitsroyal.herokuapp.com/api/product", {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => { setProducts(res.data) })
        } catch {
            toast.error('Something went wrong', { id: "wrong" });
        }
    }, []);

    return [products, setProducts];

};

export default UseProductItem;