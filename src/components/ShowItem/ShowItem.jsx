import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ product }) => {
    const navigate = useNavigate();
    const handleItem = (id) => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='mt-10'>
            <div className="container h-60 max-w-md m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="p-1 rounded-xl group sm:flex bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                    <img src="https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg" alt="art cover" loading="lazy" width="1000" height="667" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                    <div className='flex flex-col justify-center items-start ml-4'>
                        <div>
                            <p className='ml-4 mt-6 text-center '>Rakibul</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <button className='ml-2 mt-2 text-[#FB9900]'>View</button>
                            <button className='ml-2 mt-2 text-blue-700'>update</button>
                            <button className='ml-2 mt-2 text-red-700'>delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Card;