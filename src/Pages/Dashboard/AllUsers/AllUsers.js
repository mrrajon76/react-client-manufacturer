import React from 'react';
import useAllUsers from '../../../hooks/useAllUsers';
import Loading from '../../Shared/Loading/Loading';
import ShowAllUsers from './ShowAllUsers/ShowAllUsers';

const AllUsers = () => {
    const { isLoading, data, refetch } = useAllUsers();

    if (isLoading) {
        <Loading />
    }

    return (
        <div className='mx-6 md:mx-10 my-6 md:my-10 lg:m-0'>
            <h1 className='text-3xl md:text-4xl text-center lg:text-left font-extrabold text-primary'>All Users</h1>

            <div className='mt-8'>
                <table className='my-5 table-auto w-full text-left'>
                    <thead className=''>
                        <tr className='bg-gradient-to-r from-green-300 to-sky-300'>
                            <th className='py-2 pl-5'>Image</th>
                            <th className='py-2 pl-5'>Name</th>
                            <th className='py-2 pl-5'>Email</th>
                            <th className='py-2 pl-5'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(user => <ShowAllUsers data={user} key={user._id} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;