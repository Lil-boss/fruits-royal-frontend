import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UseUpdateItem = () => {
    const { productId } = useParams({});
    const [updates, setUpdates] = useState({});
    useEffect(() => {
        try {
            axios.put(`https://fruitsroyal.herokuapp.com/inventory/${productId}`)
                .then(res => setUpdates(res.data));
        } catch {
            console.log("error");
        }
    }, [productId]);
    return [updates, setUpdates];
};

export default UseUpdateItem;