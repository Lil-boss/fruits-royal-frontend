import React from 'react';
import { Link } from 'react-router-dom';
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
                    <h1 className='text-3xl text-center font-medium animate__animated  animate__fadeInUp'>Latest Products </h1>
                </div>
                <div className='grid sm:grid-cols-1 justify-items-center md:grid-cols-3 gap-4'>
                    {
                        items.map(product => { return <Card key={product._id} product={product} /> })
                    }
                </div>
                <div className='my-10 p-6'>
                    <div className='grid grid-cols-2 gap-2 animate__animated  animate__fadeInUp'>
                        <div>
                            <img src="https://chaldn.com/_mpimage/fruits-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23769&q=low&v=1" alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-start'>
                            <h2 className='text-4xl '>Why</h2>
                            <h1 className='text-6xl font-light'>Fruits Royal?</h1>
                            <p className='text-md font-thin mt-8'>We shorten the time between the farm and your table. Our motto is to deliver the local food which is better, fresher and tastier. The wholesale prices that farmers get for their products are low, often near the cost of production. It is an investment in the future. By supporting local farmers today, we are helping to ensure that there will be farms in our community tomorrow!</p>
                            <Link to="/">
                                <button className='my-10 bg-[#FB9900] p-4 rounded-md text-white'>Lear more..</button></Link>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;