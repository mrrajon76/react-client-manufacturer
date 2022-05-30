import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLinkDash from '../../CustomLink/CustomLinkDash';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { HiMenu } from 'react-icons/hi'

const Dashboard = () => {
    return (
        <div>
            <Header />

            <div className='min-h-[70vh]'>
                <div className="drawer drawer-mobile">
                    <input id="dashboard" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content py-5 md:py-6 lg:py-4 lg:px-10">
                        {/* <!-- Page content here --> */}
                        <div className='bg-primary flex justify-between items-center lg:hidden py-3 px-3 md:px-10'>
                            <h1 className='text-2xl md:text-3xl font-extrabold text-white'>Dashboard</h1>
                            <label htmlFor="dashboard" className="drawer-button"><HiMenu className='text-2xl md:text-3xl text-white' /></label>
                        </div>
                        <Outlet />
                    </div>

                    <div className="drawer-side">
                        <label htmlFor="dashboard" className="drawer-overlay"></label>
                        <ul className="menu py-6 overflow-y-auto w-80 bg-gray-100 lg:bg-gray-200 text-lg text-black">
                            {/* <!-- Sidebar content here --> */}
                            <li className='lg:bg-gray-200 px-3'><CustomLinkDash to='/dashboard'>My Profile</CustomLinkDash></li>
                            <li className='lg:bg-gray-200 px-3'><CustomLinkDash to='/dashboard/my-orders'>My Orders</CustomLinkDash></li>
                            <li className='lg:bg-gray-200 px-3'><CustomLinkDash to='/dashboard/add-review'>Add a Review</CustomLinkDash></li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard;