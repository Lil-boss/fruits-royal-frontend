import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const MyItem = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(`https://fruitsroyal.herokuapp.com/api/product/${user.email}`)
                    .then(res => setProducts(res.data))
            } catch {
                console.log('error');
            }
        }
        fetchData();
    }, [user]);

    const deleteItem = (id) => {
        const fetchData = async () => {
            const confirm = window.confirm("Are you sure you want to delete this item?");
            if (confirm) {
                try {
                    await axios.delete(`https://fruitsroyal.herokuapp.com/api/product/${id}`)
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
    return (
        <div>
            <Sidebar />
            <div className='grid grid-cols-3 gap-2'>
                {
                    products.map(product =>
                        <div className='w-4/5 mx-auto mt-8'>
                            <div className="max-w-sm p-1 rounded-xl group sm:flex bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <img src={product?.imageUrl} alt="art cover" loading="lazy" width="1000" height="667" className=" sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                                    </div>
                                    <div className='flex flex-col items-start'>
                                        <div>
                                            <p className='mt-2 text-sm uppercase'>Name: {product?.productName}</p>
                                            <p className='mt-2 text-sm uppercase'>Des: {product?.description}</p>
                                            <p className='mt-2 text-sm uppercase'>Supplier: {product?.supplierName}</p>
                                            <p className='mt-2 text-sm uppercase'>Qty: {product?.quantity}</p>
                                            <p className='mt-2 text-sm uppercase'>Price: {product?.price}</p>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <button onClick={() => deleteItem(product._id)} className='ml-2 mt-2 text-white bg-blue-600 p-2 rounded-lg'>delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default MyItem;