import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-2'>
                <div>
                    <img src="https://www.dole.com/-/media/project/dole/produce-images/headers/dole-produce-fruit-medley.png?rev=0838c3eee98b4dbbb72b166dc3376a08&hash=54973CC8DC6C57CB5F5427D81618967F" alt="" />
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <h2 className='text-4xl '>About</h2>
                    <h1 className='text-6xl font-light'>Fruits Royal</h1>
                    <p className='text-md font-thin mt-8'>We deliver fresh farm produce fruits to our esteemed customers. Our team members are farm and horticulture experts, we help to choose the best quality products from the farmer's house across the country.</p>
                    <Link to="/">
                        <button className='my-10 bg-[#FB9900] p-4 rounded-md text-white'>Lear more..</button></Link>
                </div>

            </div>
        </div>
    );
};

export default About;