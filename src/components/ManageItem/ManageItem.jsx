import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import ShowItem from '../ShowItem/ShowItem';
import UseProductItem from '../../Hooks/UseProductItem';
const ManageItem = () => {
    const [products] = UseProductItem();
    return (
        <div>
            <Sidebar />
            <div className='w-4/5 mx-auto mt-8'>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-2'>
                    {products.map(product => { return <ShowItem key={product.id} product={product} /> })}
                </div>

            </div>
        </div>
    );
};

export default ManageItem;