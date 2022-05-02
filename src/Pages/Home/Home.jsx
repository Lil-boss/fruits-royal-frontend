import React from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import UseProductItem from '../../Hooks/UseProductItem';

const Home = () => {
    const [products] = UseProductItem();
    const items = products.slice(0, 6);
    return (
        <div className='w-4/5 mx-auto'>
            <Banner />
            <div className='my-8 '>
                <h1 className='text-3xl text-center font-medium'>Latest Products </h1>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    items.map(product => { return <Card key={product._id} product={product} /> })
                }
            </div>
        </div>
    );
};

export default Home;