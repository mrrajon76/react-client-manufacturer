import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import ViewAllItems from './ViewAllItems/ViewAllItems';

const AllItems = () => {
    return (
        <div>
            <Header />

            <div className='min-h-[70vh] my-16 mx-6 md:mx-12 lg:mx-20'>
                <ViewAllItems />
            </div>

            <Footer />
        </div>
    );
};

export default AllItems;