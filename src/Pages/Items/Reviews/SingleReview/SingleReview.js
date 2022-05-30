import React from 'react';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';

const SingleReview = ({ data }) => {
    return (
        <div className='p-10 rounded shadow-xl shadow-slate-200 hover:shadow-gray-300 transition duration-500 text-center'>
            <img src={data.image} alt="" className='w-24 rounded-full block mx-auto' />
            <h5 className='text-xl my-3 font-bold text-primary'>{data.name}</h5>
            <Rating
                initialRating={data.ratings}
                emptySymbol={<FaStar className='inline text-lg text-slate-300' />}
                fullSymbol={<FaStar className='inline text-lg text-orange-300' />}
                readonly
            ></Rating>
            <p className='mt-4'>{data.review}</p>
        </div >
    );
};

export default SingleReview;