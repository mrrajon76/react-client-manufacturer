import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import auth from '../../../firebase.init';
import useItems from '../../../hooks/useItems';
import useUserStatus from '../../../hooks/useUserStatus';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Loading from '../../Shared/Loading/Loading';
import useUserDetails from '../../../hooks/useUserDetails';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [admin, isLoading] = useUserStatus(user);
    const { data: items, isLoading: isLoadingData, refetch } = useItems();
    const { isLoading: isUserLoading, data: userDetails } = useUserDetails();
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm({ mode: "onChange" });

    const { id } = useParams();

    if (isLoading || isLoadingData || isUserLoading) {
        return <Loading />;
    }

    //  Prevent admin to purchase
    if (admin) {
        swal('Admin can not purchase any product', {
            icon: "error"
        });
        navigate('/');
    }

    const item = items?.find(i => i._id === id);
    const { _id, image, name, desc, price, stock, moq, sold } = item;

    const onSubmit = formData => {
        formData.name = userDetails.name;
        formData.email = userDetails.email;
        console.log(formData);
    }

    return (
        <div>
            <Header />

            <div className='mx-6 my-10 md:mx-12 lg:mx-20 grid md:grid-cols-3 lg:grid-cols-4 gap-7 lg:gap-10'>
                <div className='md:col-span-2 lg:col-span-3'>
                    <h3 className='text-2xl lg:text-3xl text-center md:text-left font-extrabold text-primary'>Item Details</h3>

                    <div className='mt-6 mx-auto lg:mx-0 w-full'>
                        <table className='table-auto w-full text-left'>
                            <tbody>
                                <tr className='border'>
                                    <th className='text-primary text-lg py-2 px-3 border-r bg-gray-50'>Item Image</th>
                                    <td className='py-2 px-3 text-sm'>
                                        <img src={image} alt="" className='w-32' />
                                    </td>
                                </tr>
                                <tr className='border'>
                                    <th className='text-primary text-lg py-2 px-3 border-r bg-gray-50'>Item ID</th>
                                    <td className='py-2 px-3 text-sm'>{_id}</td>
                                </tr>
                                <tr className='border'>
                                    <th className='text-primary text-lg py-2 px-3 border-r bg-gray-50'>Name</th>
                                    <td className='py-2 px-3 font-bold'>{name}</td>
                                </tr>
                                <tr className='border'>
                                    <th className='text-primary text-lg py-2 px-3 border-r bg-gray-50'>Description</th>
                                    <td className='py-2 px-3'>{desc}</td>
                                </tr>
                                <tr className='border'>
                                    <th className='text-primary text-lg py-2 px-3 border-r bg-gray-50'>Price</th>
                                    <td className='py-2 px-3 font-bold'>${price} / unit</td>
                                </tr>
                                <tr className='border'>
                                    <th className='text-primary text-lg py-2 px-3 border-r bg-gray-50'>Available</th>
                                    <td className='py-2 px-3 font-bold'>{stock > 0 ? stock : <span className='text-red-500'>Sold Out</span>}</td>
                                </tr>
                                <tr className='border'>
                                    <th className='text-primary text-lg py-2 px-3 border-r bg-gray-50'>MOQ</th>
                                    <td className='py-2 px-3 font-bold'>{moq}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Customer details */}
                <div>
                    <h3 className='text-2xl lg:text-3xl text-center md:text-left font-extrabold text-primary'>Customer Details</h3>

                    <div className='mt-6 mx-auto lg:mx-0 w-full'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Name field */}
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text" value={userDetails?.name}
                                    disabled
                                    name="name"
                                    className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer"
                                    {...register("name")}
                                    placeholder=" " />
                                <label htmlFor="name" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Customer Name</label>
                            </div>

                            {/* Email field */}
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="email" value={userDetails?.email}
                                    disabled
                                    name="email"
                                    className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer"
                                    {...register("email")}
                                    placeholder=" " />
                                <label htmlFor="email" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Customer Email</label>
                            </div>

                            {/* Phone field */}
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="number" defaultValue={userDetails?.phone}
                                    name="phone"
                                    className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone number is required'
                                        }
                                    })}
                                    placeholder=" " />
                                <label htmlFor="phone" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Customer Phone No.</label>
                                {errors.phone?.type === 'required' && <span className='text-red-600'>{errors.phone.message}</span>}
                            </div>

                            {/* Address field */}
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text" defaultValue={userDetails?.address}
                                    name="address"
                                    className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Shipping address is required'
                                        }
                                    })}
                                    placeholder=" " />
                                <label htmlFor="address" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Shipping Address</label>
                                {errors.address?.type === 'required' && <span className='text-red-600'>{errors.address.message}</span>}
                            </div>

                            {/* Purchase amount field */}
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="number" name="quantity"
                                    defaultValue={moq}
                                    className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer"
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: 'Order quantity is required'
                                        },
                                        min: {
                                            value: `${moq}`,
                                            message: 'Less than minimum order quantity'
                                        },
                                        max: {
                                            value: `${stock}`,
                                            message: 'Greater than stock quantity'
                                        }
                                    })}
                                    placeholder=" " />
                                <label htmlFor="quantity" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Purchase Quantity</label>
                                {errors.quantity?.type === 'required' && <span className='text-red-600'>{errors.quantity.message}</span>}
                                {errors.quantity?.type === 'min' && <span className='text-red-600'>{errors.quantity.message}</span>}
                                {errors.quantity?.type === 'max' && <span className='text-red-600'>{errors.quantity.message}</span>}
                            </div>

                            <input type="submit" value='Proceed to Payment' className="cursor-pointer block mx-auto lg:mx-0 mt-6 bg-primary text-white hover:bg-secondary py-2 px-8 uppercase font-semibold rounded" />
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Purchase;