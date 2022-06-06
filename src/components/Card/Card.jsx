import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ product }) => {
    const navigate = useNavigate();
    const handleItem = (id) => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='mt-10'>
            <div className='h-96 w-60 rounded-md relative border-y-2 border-[#F62200] animate__animated  animate__fadeInUp'>
                <div className='p-4 '>
                    <img className='h-40 w-full rounded-md' src={product?.imageUrl} alt="" />
                </div>
                <div className='px-4'>
                    <p>Name:{product?.productName}</p>
                    <p>Description: {product?.description}</p>
                    <p>supplier: {product?.supplierName}</p>
                    <p>Quantity: {product?.quantity} <sup className='text-[#F62200]'>box</sup></p>
                    <p>Price: {product?.price}<sup className='text-[#F62200]'>per</sup></p>
                </div>
                <button onClick={() => handleItem(product?._id)} className='h-10 bg-[#FB9900] w-full absolute bottom-0 rounded-b-md text-white'>Manage Item</button>
            </div>
        </div>
    );
};

export default Card;