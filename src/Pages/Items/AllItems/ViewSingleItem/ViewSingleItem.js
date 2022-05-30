import React from 'react';
import { Link } from 'react-router-dom';

const ViewSingleItem = ({ data }) => {
    const { image, name, desc, price, moq, stock } = data;
    return (
        <div className='grid md:grid-cols-4 gap-4 lg:gap-6 shadow-xl shadow-slate-200 hover:shadow-gray-300 hover:scale-[1.002] transition duration-500 rounded'>
            <div className='flex items-center justify-center overflow-hidden'>
                <img src={image} alt="" className='w-5/6 md:w-full lg:w-3/4 p-3 hover:scale-110 transition duration-500 ease-in-out' />
            </div>
            <div className='col-auto md:col-span-3 py-6 px-6 lg:px-8 bg-gradient-to-r from-green-50 to-cyan-100 text-black'>
                <h3 className='text-2xl font-bold text-primary'>{name}</h3>
                <p className='my-4'>{desc}</p>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 mb-5'>
                    <p className='text-lg font-bold mt-2 md:mt-0'><span className='text-secondary'>Price:</span> ${price} / unit</p>
                    <p className='text-lg mt-2 md:mt-0'><span className='font-bold text-secondary'>Available Stock:</span> {stock}</p>
                    <p className='text-lg mt-2 lg:mt-0 md:col-span-2 lg:col-auto'><span className='font-bold text-secondary'>Minimum Order Quantity:</span> {moq}</p>
                </div>
                <Link to='/'><button className='bg-primary text-white hover:bg-secondary py-2 px-10 uppercase font-semibold rounded'>Purchase Now</button></Link>
            </div>
        </div>
    );
};

export default ViewSingleItem;