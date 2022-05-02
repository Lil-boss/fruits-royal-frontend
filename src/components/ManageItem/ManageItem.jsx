import React from 'react';
import UseItem from '../../Hooks/UseItem';
import Sidebar from '../sidebar/Sidebar';

const ManageItem = () => {
    const [product] = UseItem();
    console.log(product);
    return (
        <div>
            <Sidebar />
            <div className='w-4/5 mx-auto bg-slate-100 mt-8 h-96'>
                <div className='grid grid-cols-2 gap-3 '>
                    <div>
                        <img className='h-3/4 w-full rounded-md p-4' src={product?.imageUrl} alt="" />
                    </div>
                    <div className='p-8'>
                        <p className='text-2xl mt-4 '>Name:{product?.productName}</p>
                        <p className='text-2xl mt-4 '>Description: {product?.description}</p>
                        <p className='text-2xl mt-4 '>supplier: {product?.supplierName}</p>
                        <p className='text-2xl mt-4 '>Quantity: {product?.quantity} <sup className='text-red-600'>box</sup></p>
                        <p className='text-2xl mt-4 '>Price: {product?.price}</p>
                        <button className='h-10 w-24 bg-[#FB9900] rounded-md text-white mt-10'>Delivered</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ManageItem;