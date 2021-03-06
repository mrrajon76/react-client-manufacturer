import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../../Images/logo.png'
import useItems from '../../../hooks/useItems';
import Loading from '../Loading/Loading';

const Footer = () => {
    const { isLoading, data } = useItems();

    if (isLoading) {
        return <Loading />;
    }

    const popularItems = data?.sort((a, b) => b.sold - a.sold);

    return (
        <div id='footer'>
            <div className='bg-primary py-4 px-3 md:px-10 lg:px-20'>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <div className='md:mr-8'>
                        <h3 className='text-2xl md:text-3xl mb-4 md:mb-0 text-white font-bold'>Get connected with us:</h3>
                    </div>
                    <div className='text-2xl text-white space-x-5 flex'>
                        <a href="https://facebook.com" target="_blank" rel='noreferrer' className='hover:text-neutral'><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel='noreferrer' className='hover:text-neutral'><FaTwitter /></a>
                        <a href="https://linkedin.com" target="_blank" rel='noreferrer' className='hover:text-neutral'><FaLinkedinIn /></a>
                        <a href="https://instagram.com" target="_blank" rel='noreferrer' className='hover:text-neutral'><FaInstagram /></a>
                        <a href="https://youtube.com" target="_blank" rel='noreferrer' className='hover:text-neutral'><FaYoutube /></a>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 px-5 md:px-8 lg:px-16'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 py-7 border-b-2 border-slate-300'>
                    <div className='col-auto md:col-span-3 lg:col-auto'>
                        <Link to='/'><img src={logo} alt="" className='w-52 md:w-60 mx-auto lg:mx-0' /></Link>
                        <p className='mt-4 text-center lg:text-left'>A Modern, Largest and Fastest growing PC components mart. Find all PC components in one place.</p>
                    </div>
                    <div className='md:mx-4 lg:mx-12'>
                        <h5 className='text-xl md:text-left text-center font-bold text-primary mb-4'>Quick Links</h5>
                        <ul className='nav space-y-3 md:text-left text-center text-[17px] font-semibold'>
                            <li className='hover:text-primary'><Link to='/'>Home</Link></li>
                            <li className='hover:text-primary'><Link to='/all-items'>All Items</Link></li>
                            <li className='hover:text-primary'><Link to='/my-portfolio'>My Portfolio</Link></li>
                            <li className='hover:text-primary'><Link to='/blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <div className='md:mx-2 lg:mx-6'>
                        <h5 className='text-xl md:text-left text-center font-bold text-primary mb-4'>Popular Products</h5>
                        <ul className='nav space-y-3 md:text-left text-center font-semibold'>
                            {
                                popularItems?.slice(0, 4).map((item, index) => <li key={index} className='hover:text-primary'><Link to={`/purchase/${item._id}`}>{item.name}</Link></li>)
                            }
                        </ul>
                    </div>
                    <div className='md:flex justify-end'>
                        <div>
                            <h5 className='text-xl md:text-left text-center font-bold text-primary mb-4'>Contact Us</h5>
                            <ul className='nav space-y-3 md:text-left text-center text-[17px] font-semibold'>
                                <li><FaPhoneAlt className='inline text-primary hover:text-accent mr-1' /> +8801762811511</li>
                                <li><FaEnvelope className='inline text-primary hover:text-accent mr-1' /> mrrajon76@gmail.com</li>
                                <li><FaMapMarkerAlt className='inline text-primary hover:text-accent mr-1' /> Dhaka, Bangladesh</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-sm text-center pt-6 pb-4'>
                    Copyright &copy; {new Date().getFullYear()} <span className='text-primary font-bold'>MRRAJON</span>. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;