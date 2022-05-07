import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-50 mt-8'>
            <div className='p-10'>
                <h1 className='text-center text-md'>&copy;All right received <Link to="/" className='text-[#FB9900]'>FruitsRoyal</Link></h1>
            </div>
        </div>
    );
};

export default Footer;