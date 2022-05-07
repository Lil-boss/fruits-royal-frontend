import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import ShowItem from '../ShowItem/ShowItem';

const ManageItem = () => {
    return (
        <div>
            <Sidebar />
            <div className='w-4/5 mx-auto mt-8'>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-2'>
                    <ShowItem />
                    <ShowItem />
                    <ShowItem />
                    <ShowItem />
                    <ShowItem />
                    <ShowItem />
                    <ShowItem />
                </div>

            </div>
        </div>
    );
};

export default ManageItem;