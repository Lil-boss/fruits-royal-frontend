import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const UseUpdateItem = () => {
    const { productId } = useParams({});
    const [updates, setUpdates] = useState({});
    useEffect(() => {
        try {
            axios.put(`https://fruitsroyal.herokuapp.com/inventory/${productId}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => setUpdates(res.data));
        } catch {
            toast.error('Something went wrong', { id: "wrong" });
        }
    }, [productId]);
    return [updates, setUpdates];
};

export default UseUpdateItem;