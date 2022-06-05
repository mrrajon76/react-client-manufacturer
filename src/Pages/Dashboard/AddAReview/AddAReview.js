import { signOut } from 'firebase/auth';
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useUserDetails from '../../../hooks/useUserDetails';
import Loading from '../../Shared/Loading/Loading';

const AddAReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { isLoading, data } = useUserDetails();
    const navigate = useNavigate();

    if (isLoading) {
        return <Loading />;
    }

    const onSubmit = formData => {
        formData.name = data?.name;

        fetch('https://polar-cove-29814.herokuapp.com/review',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(formData)
            })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Thanks for your valuable feedback')
                    navigate('/');
                }
            })
    }

    return (
        <div className='mx-6 md:mx-10 my-6 md:my-10 lg:m-0'>
            <h1 className='text-3xl md:text-4xl text-center lg:text-left font-extrabold text-primary'>Add a Review</h1>

            <div className='mx-auto lg:mx-0 w-full lg:w-4/5 mt-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name field */}
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" value={data?.name}
                            disabled
                            name="name"
                            className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer"
                            {...register("name")}
                            placeholder=" " />
                        <label htmlFor="name" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                    </div>

                    {/* Review field */}
                    <div className="relative z-0 mb-6 w-full group">
                        <textarea rows={4} name="review"
                            className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer"
                            {...register("review", {
                                required: {
                                    value: true,
                                    message: 'Review is required'
                                },
                                maxLength: {
                                    value: 300,
                                    message: 'Review should be maximum 300 characters'
                                }
                            })}
                            placeholder=" " />
                        <label htmlFor="review" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Review</label>
                        {errors.review?.type === 'required' && <span className='text-red-600'>{errors.review.message}</span>}
                        {errors.review?.type === 'maxLength' && <span className='text-red-600'>{errors.review.message}</span>}
                    </div>

                    {/* Ratings field */}
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="number" name="ratings" step={0.1}
                            className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer"
                            {...register("ratings", {
                                required: {
                                    value: true,
                                    message: 'Ratings is required'
                                },
                                min: {
                                    value: 0,
                                    message: 'Should not be less than 0'
                                },
                                max: {
                                    value: 5,
                                    message: 'Should not be greater than 5'
                                }
                            })}
                            placeholder=" " />
                        <label htmlFor="ratings" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Give a Rating (Must be between 0 to 5)</label>
                        {errors.ratings?.type === 'required' && <span className='text-red-600'>{errors.ratings.message}</span>}
                        {errors.ratings?.type === 'min' && <span className='text-red-600'>{errors.ratings.message}</span>}
                        {errors.ratings?.type === 'max' && <span className='text-red-600'>{errors.ratings.message}</span>}
                    </div>

                    {/* image field */}
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="url" name="image"
                            className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer"
                            {...register("image")}
                            placeholder=" " />
                        <label htmlFor="image" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image (Give your image URL)</label>
                    </div>

                    <input type="submit" value='Add Review' className="cursor-pointer block mx-auto lg:mx-0 mt-8 bg-primary text-white hover:bg-secondary py-2 px-8 uppercase font-semibold rounded" />
                </form>
            </div>
        </div>
    );
};

export default AddAReview;