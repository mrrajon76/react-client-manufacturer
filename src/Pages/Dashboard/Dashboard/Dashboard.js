import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLinkDash from '../../CustomLink/CustomLinkDash';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { HiMenu } from 'react-icons/hi'
import useUserStatus from '../../../hooks/useUserStatus';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useUserStatus(user);

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

                            {
                                admin
                                    ?
                                    <>
                                        <li className='lg:bg-gray-200 px-3'><CustomLinkDash to='/dashboard/manage-items'>Manage Items</CustomLinkDash></li>
                                        <li className='lg:bg-gray-200 px-3'><CustomLinkDash to='/dashboard/add-item'>Add a New Item</CustomLinkDash></li>
                                        <li className='lg:bg-gray-200 px-3'><CustomLinkDash to='/dashboard/manage-orders'>Manage Orders</CustomLinkDash></li>
                                        <li className='lg:bg-gray-200 px-3'><CustomLinkDash to='/dashboard/all-users'>Make an Admin</CustomLinkDash></li>
                                    </>
                                    :
                                    <>
                                        <li className='lg:bg-gray-200 px-3'><CustomLinkDash to='/dashboard/my-orders'>My Orders</CustomLinkDash></li>
                                        <li className='lg:bg-gray-200 px-3'><CustomLinkDash to='/dashboard/add-review'>Add a Review</CustomLinkDash></li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard;