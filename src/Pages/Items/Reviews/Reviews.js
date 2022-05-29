import React from 'react';
import useReviews from '../../hooks/useReviews';
import SingleReview from './SingleReview/SingleReview';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {
                reviews.map(review => <SingleReview data={review} key={review.id}></SingleReview>)
            }
        </div>
    );
};

export default Reviews;