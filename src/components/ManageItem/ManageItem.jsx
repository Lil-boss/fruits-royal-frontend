import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import ShowItem from '../ShowItem/ShowItem';
import UseProductItem from '../../Hooks/UseProductItem';
import toast from 'react-hot-toast';
import axios from 'axios';
const ManageItem = () => {
    const [products, setProducts] = UseProductItem();
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
            <div className='w-4/5 mx-auto mt-8'>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-2'>
                    {products.map(product => { return <ShowItem key={product._id} product={product} deleteItem={deleteItem} /> })}
                </div>
            </div>
        </div>
    );
};

export default ManageItem;