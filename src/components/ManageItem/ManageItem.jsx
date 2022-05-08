import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import ShowItem from '../ShowItem/ShowItem';
// import UseProductItem from '../../Hooks/UseProductItem';
import toast from 'react-hot-toast';
import axios from 'axios';
const ManageItem = () => {
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [count, setCount] = useState(6);
    const [products, setProducts] = useState([]);

    // const [products, setProducts] = UseProductItem();
    const deleteItem = (id) => {
        const fetchData = async () => {
            const confirm = window.confirm("Are you sure you want to delete this item?");
            if (confirm) {
                try {
                    await axios.delete(`https://fruitsroyal.herokuapp.com/api/product/${id}`, {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(res => {
                            toast.success("delete success", { id: "success" })
                        });
                    const remainingItems = products.filter(item => item._id !== id);
                    setProducts(remainingItems);

                } catch {
                    toast.error("delete failed", { id: "failed" })
                }
            }
        }
        fetchData();
    }

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

    //countpage
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
            <Sidebar />
            <div className='w-4/5 mx-auto mt-8'>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-2'>
                    {products.map(product => { return <ShowItem key={product._id} product={product} deleteItem={deleteItem} /> })}
                </div>
            </div>
            <div className='flex justify-center items-center my-8'>
                <div className='bg-gray-400'>
                    {
                        [...Array(pageCount).keys()].map(number =>
                            <button className={page === number ? "bg-red-200 ml-4 p-4" : "ml-4 p-4"} onClick={() => setPage(number)}>{number + 1}</button>
                        )
                    }
                    <select onChange={e => setCount(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;