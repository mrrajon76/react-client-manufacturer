import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const ShowAllUsers = ({ data, refetch }) => {
    const { image, name, email, role } = data;
    const navigate = useNavigate();

    const makeAdmin = () => {
        fetch(`https://polar-cove-29814.herokuapp.com/user/admin/${email}`,
            {
                method: 'PATCH',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    toast.error('You are not authorized to make a user Admin');
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`${name} is now an Admin`)
                }
            })
    }

    return (
        <tr className='border-b'>
            <td className='py-2 pl-5 hidden md:block'>
                {image ? <img src={image} alt="" className='w-9 p-1 border rounded-full' /> : <img src='https://i.ibb.co/Jd4h8Nf/user.png' alt="" className='w-9 p-1 border rounded-full' />}
            </td>
            <td className='py-2 pl-5'>{name}</td>
            <td className='py-2 pl-5'>{email}</td>
            <td className='py-2 pl-5'>
                {
                    role === 'admin' ? <span className='text-primary font-bold'>Admin</span> : <button onClick={makeAdmin} className='text-white text-sm bg-primary hover:bg-secondary py-1 px-3 md:px-5 font-semibold rounded'>Make Admin</button>
                }
            </td>
        </tr>
    );
};

export default ShowAllUsers;