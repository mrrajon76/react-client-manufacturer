import React from 'react';
import swal from 'sweetalert';
import { useNavigate, useParams } from 'react-router-dom';
import useItems from '../../../../hooks/useItems';
import Loading from '../../../Shared/Loading/Loading';
import { signOut } from 'firebase/auth';
import auth from '../../../../firebase.init';

const SingleItem = () => {
    const { data, isLoading, refetch } = useItems();
    const navigate = useNavigate();
    const { id } = useParams();

    if (isLoading) {
        return <Loading />;
    }

    const item = data?.find(i => i._id === id);
    const { _id, image, name, desc, price, stock, moq, sold } = item;

    // Update stock
    const updateStock = () => {
        swal("Input new stock quantity:", {
            content: "input",
        })
            .then((value) => {
                if (value > 0) {
                    const newStock = { value: stock + parseInt(value) };

                    fetch(`http://localhost:5000/product/${_id}`,
                        {
                            method: 'PATCH',
                            headers: {
                                'content-type': 'application/json',
                                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                            },
                            body: JSON.stringify(newStock)
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
                                swal(`${value} Stock Quantity is added`, {
                                    icon: "success"
                                });
                                refetch();
                            }
                        })
                }
                else {
                    swal('Please input a valid positive number', {
                        icon: "error"
                    });
                }
            });
    }

    // Delete item
    const deleteItem = async () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/product/${_id}`,
                        {
                            method: 'DELETE',
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
                        .then(deleteResult => {
                            if (deleteResult.acknowledged === true) {
                                swal("Item deleted successfully", {
                                    icon: "success",
                                });
                                refetch();
                                navigate('/dashboard/manage-items');
                            }
                        })
                }
            });
    }

    return (
        <div className='mx-4 md:mx-10 my-6 md:my-10 lg:m-0'>
            <h1 className='text-3xl md:text-4xl text-center lg:text-left font-extrabold text-primary'>Manage Item</h1>
            <h3 className='mt-2 text-lg md:text-2xl text-center lg:text-left'>{name}</h3>

            <div className='mt-8 mb-4 mx-auto lg:mx-0 w-full'>
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
                        <tr className='border'>
                            <th className='text-primary text-lg py-2 px-3 border-r bg-gray-50'>Sold Item</th>
                            <td className='py-2 px-3 font-bold'>{sold ? sold : '0'}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='mt-5 flex space-x-5'>
                    <button onClick={updateStock} className='bg-primary text-white hover:bg-secondary py-2 px-6 uppercase font-semibold rounded'>Add Stock</button>
                    <button onClick={deleteItem} className='bg-red-500 text-white hover:bg-secondary py-2 px-6 uppercase font-semibold rounded'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;