import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLinkDash from '../../CustomLink/CustomLinkDash';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { HiMenu } from 'react-icons/hi'
import useUserDetails from '../../../hooks/useUserDetails';
import Loading from '../../Shared/Loading/Loading';

const Dashboard = () => {
    const { isLoading, data } = useUserDetails();

    if (isLoading) {
        return <Loading />;
    }

    const role = data?.role;

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
                            <li className='lg:bg-gray-200 ml-3 md:ml-5 mr-auto'><CustomLinkDash to='/dashboard' className='w-full pb-1'>My Profile</CustomLinkDash></li>

                            {
                                role === 'admin'
                                    ?
                                    <>
                                        <li className='lg:bg-gray-200 ml-3 md:ml-5 mr-auto'><CustomLinkDash to='/dashboard/manage-items' className='w-full pb-1'>Manage Items</CustomLinkDash></li>
                                        <li className='lg:bg-gray-200 ml-3 md:ml-5 mr-auto'><CustomLinkDash to='/dashboard/add-item' className='w-full pb-1'>Add a New Item</CustomLinkDash></li>
                                        <li className='lg:bg-gray-200 ml-3 md:ml-5 mr-auto'><CustomLinkDash to='/dashboard/manage-orders' className='w-full pb-1'>Manage Orders</CustomLinkDash></li>
                                        <li className='lg:bg-gray-200 ml-3 md:ml-5 mr-auto'><CustomLinkDash to='/dashboard/all-users' className='w-full pb-1'>Make an Admin</CustomLinkDash></li>
                                    </>
                                    :
                                    <>
                                        <li className='lg:bg-gray-200 ml-3 md:ml-5 mr-auto'><CustomLinkDash to='/dashboard/my-orders' className='w-full pb-1'>My Orders</CustomLinkDash></li>
                                        <li className='lg:bg-gray-200 ml-3 md:ml-5 mr-auto'><CustomLinkDash to='/dashboard/add-review' className='w-full pb-1'>Add a Review</CustomLinkDash></li>
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