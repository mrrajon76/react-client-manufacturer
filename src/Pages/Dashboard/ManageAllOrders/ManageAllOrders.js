import React from 'react';
import useAllOrders from '../../../hooks/useAllOrders';
import Loading from '../../Shared/Loading/Loading';
import ShowAllOrders from './ShowAllOrders/ShowAllOrders';

const ManageAllOrders = () => {
    const { isLoading, data, refetch } = useAllOrders();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='mx-2 md:mx-6 my-6 md:my-10 lg:m-0'>
            <h1 className='text-3xl md:text-4xl text-center lg:text-left font-extrabold text-primary'>Manage Orders</h1>

            <div className='mt-8'>
                <table className='my-5 table-auto w-full text-left'>
                    <thead className=''>
                        <tr className='bg-gradient-to-r from-green-300 to-sky-300'>
                            <th className='py-2 pl-3 hidden md:block'>No.</th>
                            <th className='py-2 pl-3'>Customer</th>
                            <th className='py-2 pl-3'>Product</th>
                            <th className='py-2 pl-3'>Quantity</th>
                            <th className='py-2 pl-3'>Price</th>
                            <th className='py-2 pl-3'>Status</th>
                            <th className='py-2 pl-3'>Payment</th>
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