import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUserDetails from '../../../hooks/useUserDetails';
import Loading from '../../Shared/Loading/Loading';

const AddAReview = () => {
    const { isLoading, data } = useUserDetails();
    const navigate = useNavigate();

    if (isLoading) {
        return <Loading />;
    }

    const handleUpdateUser = event => {
        event.preventDefault();

        const name = data?.name;
        const review = event.target.phone.value;
        const ratings = event.target.phone.value;
        const image = event.target.image.value;

        const updatedUser = {};

        // if (name && email && phone && postal && address) {
        //     fetch(`http://localhost:5000/user/${email}`,
        //         {
        //             method: 'PUT',
        //             headers: {
        //                 'content-type': 'application/json'
        //             },
        //             body: JSON.stringify(updatedUser)
        //         })
        //         .then(res => res.json())
        //         .then(data => {
        //             toast('Profile updated')
        //             navigate('/dashboard');
        //         })
        // }
    }

    return (
        <div className='mx-6 md:mx-10 my-6 md:my-10 lg:m-0'>
            <h1 className='text-3xl md:text-4xl text-center lg:text-left font-extrabold text-primary'>Add a Review</h1>

            <div className='mx-auto lg:mx-0 w-full lg:w-4/5 mt-10'>

            </div>
        </div>
    );
};

export default AddAReview;