import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-50 mt-8'>
            <div className='p-10'>
                <h1 className='text-center text-md'>&copy;All right received <Link to="/" className='text-[#FB9900]'>FruitsRoyal</Link></h1>
                <div className='flex justify-center items-center'>
                    <a href="https://www.facebook.com/rakibulhasan.shaon.1420/" target="_blank" alt="" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook text-blue-600 text-2xl"></i>
                    </a>
                    <a href="https://www.instagram.com/rakibul_hasan_sh4on/" target="_blank" alt="" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram-square text-orange-500 text-2xl ml-4"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;