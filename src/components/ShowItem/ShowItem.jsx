
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Card = ({ product, deleteItem }) => {
    const navigate = useNavigate();
    const { productName, imageUrl } = product;
    const updateItem = (id) => {
        console.log(id);
        navigate(`/update/${id}`);
    }
    const viewItem = (id) => {
        console.log(id);
        navigate(`/show/${id}`);
    }
    return (
        <div className='mt-10'>
            <div className="p-1 rounded-xl group sm:flex bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <div className='grid grid-cols-2'>
                    <div>
                        <img src={imageUrl} alt="art cover" loading="lazy" width="1000" height="667" className=" sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                    </div>
                    <div className='flex flex-col items-start'>
                        <div>
                            <p className='mt-2 text-2xl uppercase'>{productName}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <button onClick={() => viewItem(product._id)} className='ml-2 mt-2 text-[#FB9900]'>View</button>
                            <button onClick={() => updateItem(product._id)} className='ml-2 mt-2 text-blue-700'>update</button>
                            <button onClick={() => deleteItem(product._id)} className='ml-2 mt-2 text-red-700'>delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Card;