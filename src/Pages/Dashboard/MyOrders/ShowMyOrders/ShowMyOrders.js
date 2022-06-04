import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../../../firebase.init';
import useItems from '../../../../hooks/useItems';
import Loading from '../../../Shared/Loading/Loading';

const ShowMyOrders = ({ data, index, refetch: refetchOrders }) => {
    const { _id, productID, price, quantity, status, paymentStatus, transactionID } = data;
    const { isLoading, data: items, refetch } = useItems();
    const navigate = useNavigate();

    if (isLoading) {
        return <Loading />;
    }

    const item = items?.find(i => i._id === productID);

    const deleteOrder = () => {
        const itemID = item._id;
        const adjustStock = parseInt(item.stock) + parseInt(quantity);
        const adjustSold = parseInt(item.sold) - parseInt(quantity);

        const adjustItem = { itemID, adjustStock, adjustSold };

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/orders/${_id}`,
                        {
                            method: 'DELETE',
                            headers: {
                                'content-type': 'application/json',
                                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                            },
                            body: JSON.stringify(adjustItem)
                        })
                        .then(res => {
                            if (res.status === 401 || res.status === 403) {
                                signOut(auth);
                                localStorage.removeItem('accessToken');
                                navigate('/')
                            }
                            return res.json()
                        })
                        .then(deleteResult => {
                            if (deleteResult.deleteOrder.acknowledged === true && deleteResult.adjustItem.acknowledged === true) {
                                swal("Item deleted successfully", {
                                    icon: "success",
                                });
                                refetchOrders();
                                refetch();
                            }
                        })
                }
            });
    }

    return (
        <tr className='border-b'>
            <td className='py-2 pl-2 md:pl-5 text-sm hidden md:block'>{index + 1}</td>
            <td className='py-2 pl-2 md:pl-5'>{item.name}</td>
            <td className='py-2 pl-2 md:pl-5'>{quantity}</td>
            <td className='py-2 pl-2 md:pl-5'>{price}</td>
            <td className='py-2 pl-2 md:pl-5 font-bold'>{status === 'Pending' ? <span className='text-red-600'>{status}</span> : <span className='text-primary'>{status}</span>}</td>
            <td className='py-2 pl-2 md:pl-5 font-bold'>{paymentStatus === 'Unpaid'
                ?
                <>
                    <Link to={`/purchase/payment/${_id}`}><button className='text-white text-sm bg-primary hover:bg-secondary py-1 px-3 mb-2 md:mb-0 mr-0 md:mr-2 font-semibold rounded'>Pay Now</button></Link>
                    <button onClick={deleteOrder} className='text-white text-sm bg-red-600 hover:bg-secondary py-1 px-3 font-semibold rounded'>Cancel</button>
                </>
                :
                <>
                    <span className='text-primary'>{paymentStatus}</span>
                    <br />
                    <span className='text-gray-500 text-xs'>{transactionID}</span>
                </>
            }</td>
        </tr>
    );
};

export default ShowMyOrders;