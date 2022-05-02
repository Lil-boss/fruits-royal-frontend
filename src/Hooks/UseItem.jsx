import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UseItem = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState({});

    useEffect(() => {
        try {
            axios.get(`https://fruitsroyal.herokuapp.com/inventory/${productId}`)
                .then(res => { setProducts(res.data) })
        } catch {
            console.log("error");
        }
    }, [productId]);
    return [products];
};

export default UseItem;