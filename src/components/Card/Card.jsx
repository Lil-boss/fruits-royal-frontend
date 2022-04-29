import React from 'react';

const Card = () => {
    return (
        <div className='ml-8'>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                    <img className="rounded-t-lg" src="https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">name</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Description</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Supplier name</p>
                    <button className='h-8 w-32 bg-red-800 rounded'>Manage</button>
                </div>
            </div>
        </div>
    );
};

export default Card;