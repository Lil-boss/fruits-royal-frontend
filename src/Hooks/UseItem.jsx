import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UseItem = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                axios.get(`https://fruitsroyal.herokuapp.com/api/inventory/${productId}`)
                    .then(res => { setProduct(res.data) })
            } catch {
                console.log("error");
            }
        }
        fetchData();
    }, [productId]);
    return [product, setProduct];
};

export default UseItem;