import React from 'react';
import useItems from '../../../hooks/useItems';
import Loading from '../../Shared/Loading/Loading';
import ShowItems from './ShowItems/ShowItems';

const ManageItems = () => {
    const { data, isLoading, refetch } = useItems();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='mx-2 md:mx-10 my-6 md:my-10 lg:m-0'>
            <h1 className='text-3xl md:text-4xl text-center lg:text-left font-extrabold text-primary'>Manage Items</h1>

            <div className='mt-8'>
                <table className='my-5 table-auto w-full text-left'>
                    <thead className=''>
                        <tr className='bg-gradient-to-r from-green-300 to-sky-300'>
                            <th className='py-2 pl-5'>No.</th>
                            <th className='py-2 pl-5'>Image</th>
                            <th className='py-2 pl-5'>Name</th>
                            <th className='py-2 pl-5'>Stock</th>
                            <th className='py-2 pl-5'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, index) => <ShowItems data={item} index={index} key={item._id} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageItems;