import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
// import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useItems from '../../../../hooks/useItems';
import Loading from '../../../Shared/Loading/Loading';

const ShowAllOrders = ({ data, index, refetch: refetchOrders }) => {
    const { _id, productID, customerEmail, price, quantity, status, paymentStatus } = data;
    const { isLoading, data: items, refetch } = useItems();
    // const { register, formState: { errors }, handleSubmit, getValues } = useForm({ mode: "onChange" });
    const navigate = useNavigate();

    const [newStatus, setNewStatus] = useState('');

    useEffect(() => {

        if (newStatus !== '') {

            const newValue = { newStatus };

            fetch(`http://localhost:5000/order/${_id}`,
                {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(newValue)
                })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(updateResult => {
                    if (updateResult.acknowledged === true) {
                        swal("Order status updated successfully", {
                            icon: "success",
                        });
                        refetchOrders();
                    }
                    else {
                        swal("Something is wrong!", {
                            icon: "error",
                        });
                    }
                })
        }
    }, [newStatus, _id, navigate, refetchOrders])

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
            <td className='py-2 pl-5 text-sm hidden md:block'>{index + 1}</td>
            <td className='py-2 pl-5'>{customerEmail}</td>
            <td className='py-2 pl-5'>{item.name}</td>
            <td className='py-2 pl-5'>{quantity}</td>
            <td className='py-2 pl-5'>{price}</td>
            <td className='py-2 pl-5 font-bold'>{paymentStatus === 'Unpaid'
                ?
                <span className='text-red-600'>Pending</span>
                :
                <select name='newStatus' value={status} onChange={e => setNewStatus(e.target.value)} className="select select-primary w-4/5 bg-white border">
                    <option value={status} disabled>{status}</option>
                    <option value='Pending'>Pending</option>
                    <option value='Processing'>Processing</option>
                    <option value='Shipped'>Shipped</option>
                </select>
            }</td>
            <td className='py-2 pl-5 font-bold'>{paymentStatus === 'Unpaid'
                ?
                <>
                    <span className='text-red-600'>{paymentStatus}</span>
                    <button onClick={deleteOrder} className='text-white ml-3 text-sm bg-red-600 hover:bg-secondary py-1 px-3 font-semibold rounded'>Cancel</button>
                </>
                :
                <span className='text-primary'>{paymentStatus}</span>}</td>
        </tr>
    );
};

export default ShowAllOrders;