import React from 'react';
import useItems from '../../../../hooks/useItems';
import Loading from '../../../Shared/Loading/Loading';
import ViewSingleItem from '../ViewSingleItem/ViewSingleItem';

const ViewAllItems = ({ children }) => {
    const { isLoading, data } = useItems();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='space-y-10'>
            {
                children ? data?.slice(0, 6).map(item => <ViewSingleItem data={item} key={item._id}></ViewSingleItem>) : data?.map(item => <ViewSingleItem data={item} key={item._id}></ViewSingleItem>)
            }
        </div>
    );
};

export default ViewAllItems;