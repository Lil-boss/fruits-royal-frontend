import React from 'react';

const Banner = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <div className=' grid sm:grid-cols-1 justify-items-center md:grid-cols-2 gap-4 p-10'>
                <div className='flex md:justify-center items-center'>
                    <h1 className='text-6xl'>Good <span className='text-[#F62200]'>Fruits</span> <br /> Good <span className='text-[#74B82B]'>Health</span></h1>
                </div>
                <div>
                    <img className='h-full w-full' src="https://www.fluentu.com/blog/german/wp-content/uploads/sites/5/2020/04/fruits-in-german-e1586089752934.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;