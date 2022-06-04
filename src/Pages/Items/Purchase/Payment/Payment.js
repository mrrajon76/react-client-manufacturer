import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import { useQuery } from 'react-query';
import { signOut } from 'firebase/auth';
import auth from '../../../../firebase.init';
import Header from '../../../Shared/Header/Header';
import Footer from '../../../Shared/Footer/Footer';
import useItems from '../../../../hooks/useItems';

const stripePromise = loadStripe('pk_test_51L6ahwHewQBurxyfUN1up86CgrhVOdGKWAg610DwovSGT0hfFEh0yksa15yD317biZHch1Xd0HN6xPk015KFp0EU00WBjGWE8P');

const Payment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isLoading: itemLoading, data: item } = useItems();
    const [paymentProcessing, setPaymentProcessing] = useState(false);

    const { isLoading, data, refetch } = useQuery(['singleOrder', id], () =>
        fetch(`http://localhost:5000/payment/order/${id}`,
            {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/')
                }
                return res.json()
            })
    )

    if (isLoading || itemLoading || paymentProcessing) {
        return <Loading />;
    }

    if (data?.paymentStatus !== 'Unpaid') {
        navigate('/dashboard/my-orders');
    }

    const itemDetails = item.find(i => i._id === data?.productID);

    return (
        <div>
            <Header />

            <div className='mx-6 my-10 md:mx-12 lg:mx-20'>
                <h1 className='text-2xl lg:text-3xl text-center md:text-left font-extrabold text-primary'>Amount to Pay: <span className='text-gray-700'>${data.price}</span></h1>
                <h3 className='text-lg mt-2 text-center md:text-left text-gray-500'>Order# {data._id}</h3>

                <div className='mt-5 grid md:grid-cols-3 gap-6 lg:gap-10'>
                    <div>
                        <div className='mx-auto lg:mx-0 w-full border px-3 py-5'>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm order={data} refetch={refetch} processing={setPaymentProcessing} />
                            </Elements>
                        </div>
                    </div>

                    <div className='md:col-span-2'>
                        <div className='mx-auto lg:mx-0 w-full'>
                            <table className='table-auto w-full text-left'>
                                <tbody>
                                    <tr className='border'>
                                        <th className='text-primary text-lg py-2 px-3 border-r bg-gray-50'>Amount to Pay</th>
                                        <td className='py-2 px-3 font-bold'>${data.price}</td>
                                    </tr>
                                    <tr className='border'>
                                        <th className='text-primary text-lg py-2 px-3 border-r bg-gray-50'>Payment Status</th>
                                        <td className='py-2 px-3 font-bold'>{data.paymentStatus === 'Unpaid'
                                            ?
                                            <span className='text-red-600'>{data.paymentStatus}</span>
                                            :
                                            <span className='text-primary'>{data.paymentStatus}</span>
                                        }</td>
                                    </tr>
                                    <tr className='border'>
                                        <th className='text-primary text-lg py-2 px-3 border-r bg-gray-50'>Payment for</th>
                                        <td className='py-2 px-3 font-bold'>{itemDetails.name}</td>
                                    </tr>
                                    <tr className='border'>
                                        <th className='text-primary text-lg py-2 px-3 border-r bg-gray-50'>Purchased Quantity</th>
                                        <td className='py-2 px-3 font-bold'>{data.quantity}</td>
                                    </tr>
                                    <tr className='border'>
                                        <th className='text-primary text-lg py-2 px-3 border-r bg-gray-50'>Customer Name</th>
                                        <td className='py-2 px-3'>{data.customerName}</td>
                                    </tr>
                                    <tr className='border'>
                                        <th className='text-primary text-lg py-2 px-3 border-r bg-gray-50'>Customer Email</th>
                                        <td className='py-2 px-3'>{data.customerEmail}</td>
                                    </tr>
                                    <tr className='border'>
                                        <th className='text-primary text-lg py-2 px-3 border-r bg-gray-50'>Customer Phone</th>
                                        <td className='py-2 px-3'>{data.customerPhone}</td>
                                    </tr>
                                    <tr className='border'>
                                        <th className='text-primary text-lg py-2 px-3 border-r bg-gray-50'>Shipping Address</th>
                                        <td className='py-2 px-3'>{data.customerAddress}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Payment;