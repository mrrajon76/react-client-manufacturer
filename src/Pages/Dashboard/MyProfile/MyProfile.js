import React from 'react';
import { Link } from 'react-router-dom';
import useUserDetails from '../../../hooks/useUserDetails';
import Loading from '../../Shared/Loading/Loading';

const MyProfile = () => {
    const { isLoading, data } = useUserDetails();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='mx-6 md:mx-10 my-6 md:my-10 lg:m-0'>
            <h1 className='text-3xl md:text-4xl text-center lg:text-left font-extrabold text-primary'>My Profile</h1>
            <div className='mt-8 mx-auto lg:mx-0 w-full md:w-2/3'>
                {
                    data.image ? <img src={data.image} alt="" className='w-28 border rounded p-4 block mx-auto lg:mx-0' /> : <img src="https://i.ibb.co/Jd4h8Nf/user.png" alt="" className='w-28 block mx-auto lg:mx-0 border rounded p-4' />
                }
                <table className='my-5 table-auto w-full text-left'>
                    <tbody>
                        <tr className='border'>
                            <th className='text-primary py-2 px-3 border-r'>User ID</th>
                            <td className='py-2 px-3 text-sm'>{data?._id}</td>
                        </tr>
                        <tr className='border'>
                            <th className='text-primary py-2 px-3 border-r'>Name</th>
                            <td className='py-2 px-3 font-bold'>{data?.name}</td>
                        </tr>
                        <tr className='border'>
                            <th className='text-primary py-2 px-3 border-r'>Email</th>
                            <td className='py-2 px-3 font-bold'>{data?.email}</td>
                        </tr>
                        <tr className='border'>
                            <th className='text-primary py-2 px-3 border-r'>Phone Number</th>
                            <td className='py-2 px-3'>{data?.phone ? data?.phone : 'N/A'}</td>
                        </tr>
                        <tr className='border'>
                            <th className='text-primary py-2 px-3 border-r'>Address</th>
                            <td className='py-2 px-3'>{data?.address ? data?.address : 'N/A'}</td>
                        </tr>
                        <tr className='border'>
                            <th className='text-primary py-2 px-3 border-r'>Postal Code</th>
                            <td className='py-2 px-3'>{data?.postal ? data?.postal : 'N/A'}</td>
                        </tr>
                        <tr className='border'>
                            <th className='text-primary py-2 px-3 border-r'>LinkedIn ID</th>
                            <td className='py-2 px-3'>{data?.linkedin ? data?.linkedin : 'N/A'}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to='/dashboard/update-profile'><button className='block mx-auto lg:mx-0 bg-primary text-white hover:bg-secondary py-2 px-8 uppercase font-semibold rounded transition hover:scale-105 duration-500'>Update Information</button></Link>
            </div>
        </div>
    );
};

export default MyProfile;