import React from 'react';
import Card from '../../components/Card/Card';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>

            <div className='grid grid-cols-3 gap-4'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Home;