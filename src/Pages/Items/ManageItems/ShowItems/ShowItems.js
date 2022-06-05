import React from 'react';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../../../firebase.init';

const ShowItems = ({ data, index, refetch }) => {
    const navigate = useNavigate();
    const { _id, image, name, stock } = data;

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
                    fetch(`https://polar-cove-29814.herokuapp.com/product/${_id}`,
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
                            }
                        })
                }
            });
    }

    return (
        <tr className='border-b'>
            <td className='py-2 pl-5 text-sm'>{index + 1}</td>
            <td className='py-2 pl-5'>
                <img src={image} alt="" className='w-20' />
            </td>
            <td className='py-2 pl-5 font-bold'>{name}</td>
            <td className='py-2 pl-5 font-bold'>{stock}</td>
            <td className='py-2 pl-5'>
                <Link to={`/dashboard/manage-items/${_id}`}><button className='inline-block mb-2 lg:mb-0 md:mr-3 text-white text-sm bg-primary hover:bg-secondary py-1 px-5 font-semibold rounded'>Manage</button></Link>
                <button onClick={deleteItem} className='inline-block text-white text-sm bg-red-500 hover:bg-secondary py-1 px-5 font-semibold rounded'>Delete</button>
            </td>
        </tr>
    );
};

export default ShowItems;