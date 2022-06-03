import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import ShowAllOrders from './ShowAllOrders/ShowAllOrders';

const ManageAllOrders = () => {
    const navigate = useNavigate();

    const { isLoading, data, refetch } = useQuery(['allOrders'], () =>
        fetch(`http://localhost:5000/orders`,
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

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='mx-2 md:mx-10 my-6 md:my-10 lg:m-0'>
            <h1 className='text-3xl md:text-4xl text-center lg:text-left font-extrabold text-primary'>Manage Orders</h1>

            <div className='mt-8'>
                <table className='my-5 table-auto w-full text-left'>
                    <thead className=''>
                        <tr className='bg-gradient-to-r from-green-300 to-sky-300'>
                            <th className='py-2 pl-5 hidden md:block'>No.</th>
                            <th className='py-2 pl-5'>Customer</th>
                            <th className='py-2 pl-5'>Product</th>
                            <th className='py-2 pl-5'>Quantity</th>
                            <th className='py-2 pl-5'>Price</th>
                            <th className='py-2 pl-5'>Status</th>
                            <th className='py-2 pl-5'>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((order, index) => <ShowAllOrders data={order} index={index} key={order._id} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;