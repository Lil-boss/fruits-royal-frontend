import React from 'react';

const Card = () => {
    return (
        <div className='mt-10'>
            <div className='h-96 w-60 rounded-md relative border-y-2 border-rose-400'>
                <div className='p-4 '>
                    <img className=' h-40 w-full rounded-md' src="https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=" alt="" />
                </div>
                <div className='px-4'>
                    <p>Name:Apple</p>
                    <p>Description: good quality</p>
                    <p>supplier: BoomBoom</p>
                    <p>Quantity: 10 <sup className='text-red-500'>box</sup></p>
                    <p>Price: 3000</p>
                </div>
                <button className='h-10 bg-orange-200 w-full absolute bottom-0 rounded-b-md'>Manage Item</button>
            </div>
        </div>
    );
};

export default Card;