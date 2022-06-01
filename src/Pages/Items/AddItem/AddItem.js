import { signOut } from 'firebase/auth';
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddItem = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = formData => {

        fetch('http://localhost:5000/product',
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
                    toast.error('You are not authorized for adding a new item')
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {
                    toast.success('Item added successfully');
                    navigate('/')
                }
            })
    }

    return (
        <div className='mx-6 md:mx-10 my-6 md:my-10 lg:m-0'>
            <h1 className='text-3xl md:text-4xl text-center lg:text-left font-extrabold text-primary'>Add a New Item</h1>

            <div className='mx-auto lg:mx-0 w-full mt-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Item name field */}
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text"
                            name="name"
                            className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })}
                            placeholder=" " />
                        <label htmlFor="name" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Name</label>
                        {errors.name?.type === 'required' && <span className='text-red-600'>{errors.name.message}</span>}
                    </div>

                    {/* Description field */}
                    <div className="relative z-0 mb-6 w-full group">
                        <textarea rows={3} name="desc"
                            className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer"
                            {...register("desc", {
                                required: {
                                    value: true,
                                    message: 'Item description is required'
                                }
                            })}
                            placeholder=" " />
                        <label htmlFor="desc" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Description</label>
                        {errors.desc?.type === 'required' && <span className='text-red-600'>{errors.desc.message}</span>}
                    </div>

                    {/* Price, Stock, MOQ field */}
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
                        {/* Price field */}
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="number" name="price" step={0.1}
                                className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is required'
                                    },
                                    min: {
                                        value: 1,
                                        message: 'Price should be greater than 0'
                                    }
                                })}
                                placeholder=" " />
                            <label htmlFor="price" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Price (in USD)</label>
                            {errors.price?.type === 'required' && <span className='text-red-600'>{errors.price.message}</span>}
                            {errors.price?.type === 'min' && <span className='text-red-600'>{errors.price.message}</span>}
                        </div>

                        {/* Stock field */}
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="number" name="stock"
                                className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer"
                                {...register("stock", {
                                    required: {
                                        value: true,
                                        message: 'Stock quantity is required'
                                    },
                                    min: {
                                        value: 1,
                                        message: 'Stock should be greater than 0'
                                    }
                                })}
                                placeholder=" " />
                            <label htmlFor="stock" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Stock Quantity</label>
                            {errors.stock?.type === 'required' && <span className='text-red-600'>{errors.stock.message}</span>}
                            {errors.stock?.type === 'min' && <span className='text-red-600'>{errors.stock.message}</span>}
                        </div>

                        {/* MOQ field */}
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="number" name="moq"
                                className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer"
                                {...register("moq", {
                                    required: {
                                        value: true,
                                        message: 'MOQ is required'
                                    },
                                    min: {
                                        value: 1,
                                        message: 'MOQ should be greater than 0'
                                    }
                                })}
                                placeholder=" " />
                            <label htmlFor="moq" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Minimum Order Quantity</label>
                            {errors.moq?.type === 'required' && <span className='text-red-600'>{errors.moq.message}</span>}
                            {errors.moq?.type === 'min' && <span className='text-red-600'>{errors.moq.message}</span>}
                        </div>
                    </div>

                    {/* image field */}
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="url" name="image"
                            className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Item image is required'
                                }
                            })}
                            placeholder=" " />
                        <label htmlFor="image" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Image URL</label>
                        {errors.image?.type === 'required' && <span className='text-red-600'>{errors.image.message}</span>}
                    </div>

                    <input type="submit" value='Add Item' className="cursor-pointer block mx-auto lg:mx-0 mt-8 bg-primary text-white hover:bg-secondary py-2 px-8 uppercase font-semibold rounded" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;