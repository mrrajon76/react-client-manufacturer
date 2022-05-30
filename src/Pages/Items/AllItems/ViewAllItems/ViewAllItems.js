import React from 'react';
import useItems from '../../../../hooks/useItems';
import ViewSingleItem from '../ViewSingleItem/ViewSingleItem';

const ViewAllItems = ({ children }) => {
    const [items] = useItems();
    return (
        <div className='space-y-10'>
            {
                children ? items.slice(0, 6).map(item => <ViewSingleItem data={item} key={item._id}></ViewSingleItem>) : items.map(item => <ViewSingleItem data={item} key={item.id}></ViewSingleItem>)
            }
        </div>
    );
};

export default ViewAllItems;