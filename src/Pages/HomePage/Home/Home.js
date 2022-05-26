import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header />

            <div className='min-h-[72vh] px-6 md:px-12 lg:px-24'></div>

            <Footer />
        </div>
    );
};

export default Home;