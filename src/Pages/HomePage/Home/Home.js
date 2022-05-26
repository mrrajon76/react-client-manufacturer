import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header />

            <div className='bg-home py-32 text-white text-center flex justify-center'>
                <div className='w-3/4'>
                    <h1 className='text-7xl font-extrabold'>PC Components</h1>
                    <h4 className='text-3xl font-semibold mt-5'>Premium Computer Components Producer</h4>
                    <p className='text-lg my-8'>'PC Components' is Bangladesh-based computer parts manufacturer company. We have distributors over 20 countries around the world. We have lots of creative engineers to provide you the modern and best build quality products. Check out our products, compare with market available products then decide.</p>
                    <Link to='/all-items'><button className='bg-primary hover:bg-secondary py-4 px-14 uppercase font-semibold rounded'>Check Our Products</button></Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;