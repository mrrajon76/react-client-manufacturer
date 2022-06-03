import React from 'react';
import useItems from '../../../../hooks/useItems';
import Loading from '../../../Shared/Loading/Loading';

const ShowMyOrders = ({ data, index }) => {
    const { productID, price, quantity, status, paymentStatus } = data;
    const { isLoading, data: items } = useItems();

    if (isLoading) {
        return <Loading />;
    }

    const item = items?.find(i => i._id === productID);

    return (
        <tr className='border-b'>
            <td className='py-2 pl-2 md:pl-5 text-sm hidden md:block'>{index + 1}</td>
            <td className='py-2 pl-2 md:pl-5'>{item.name}</td>
            <td className='py-2 pl-2 md:pl-5'>{quantity}</td>
            <td className='py-2 pl-2 md:pl-5'>{price}</td>
            <td className='py-2 pl-2 md:pl-5 font-bold'>{status === 'Pending' ? <span className='text-red-500'>{status}</span> : <span className='text-primary'>{status}</span>}</td>
            <td className='py-2 pl-2 md:pl-5 font-bold'>{paymentStatus === 'Unpaid' ? <button className='text-white text-sm bg-red-500 hover:bg-primary py-1 px-5 font-semibold rounded'>Pay Now</button> : <span className='text-primary'>{paymentStatus}</span>}</td>
        </tr>
    );
};

export default ShowMyOrders;