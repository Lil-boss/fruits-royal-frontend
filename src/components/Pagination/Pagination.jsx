import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Pagination = () => {
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [count, setCount] = useState(10);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        try {
            axios.get(`https://fruitsroyal.herokuapp.com/api/product?page=${page}&size=${count}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => { setProducts(res.data) })
        } catch {
            toast.error('Something went wrong', { id: "wrong" });
        }
    }, [page, count]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(`https://fruitsroyal.herokuapp.com/api/product/count`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => setPageCount(Math.ceil(res.data / 6)));
            } catch {
                toast.error("Failed to fetch data", { id: "failed" })
            }
        }
        fetchData();
    }, []);
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='bg-gray-400'>
                    {
                        [...Array(pageCount).keys()].map(number =>
                            <button className={page === number ? "bg-red-200 ml-4 p-4" : "ml-4 p-4"} onClick={() => setPage(number)}>{number + 1}</button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Pagination;