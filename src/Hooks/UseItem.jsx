import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
const UseItem = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                axios.get(`https://fruitsroyal.herokuapp.com/api/inventory/${productId}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => { setProduct(res.data) })
            } catch {
                toast.error('Something went wrong', { id: "wrong" });
            }
        }
        fetchData();
    }, [productId]);
    return [product, setProduct];
};

export default UseItem;