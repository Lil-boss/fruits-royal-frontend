import React from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import UseProductItem from '../../Hooks/UseProductItem';
import Footer from '../Footer/Footer';

const Home = () => {
    const [products] = UseProductItem();
    const items = products.slice(0, 6);
    return (
        <div >
            <Banner />
            <div className='w-4/5 mx-auto'>
                <div className='my-8'>
                    <h1 className='text-3xl text-center font-medium'>Latest Products </h1>
                </div>
                <div className='grid sm:grid-cols-1 justify-items-center md:grid-cols-3 gap-4'>
                    {
                        items.map(product => { return <Card key={product._id} product={product} /> })
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;