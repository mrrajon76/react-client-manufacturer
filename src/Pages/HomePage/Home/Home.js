import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { RiMedal2Line } from 'react-icons/ri';
import { GiCargoShip } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';
import { GoFlame } from 'react-icons/go';
import { FaSmile, FaChartLine, FaUsersCog, FaCubes } from 'react-icons/fa';
import ViewAllItems from '../../Items/AllItems/ViewAllItems/ViewAllItems';
import Reviews from '../../Items/Reviews/Reviews';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header />

            {/* Banner */}
            <div className='bg-home py-20 md:py-28 text-white text-center flex justify-center'>
                <div className='w-full mx-3 md:mx-0 md:w-4/5 lg:w-3/4'>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-extrabold'>PC Components</h1>
                    <p className='text-lg md:text-xl lg:text-2xl my-7'>'PC Components' is Bangladesh-based computer parts manufacturer company.<br />We have distributors over 20 countries around the world.</p>
                    <Link to='/all-items'><button className='bg-primary hover:bg-secondary transition ease-in-out duration-500 hover:scale-110 py-3 px-12 uppercase font-semibold rounded'>Check Our Products</button></Link>
                </div>
            </div>

            {/* Best quality section */}
            <div className='grid md:grid-cols-3 gap-10 lg:gap-12 my-14 mx-6 md:mx-12 lg:mx-20'>
                <div className='p-5 bg-slate-100 shadow-lg shadow-slate-300 hover:shadow-slate-400 rounded md:text-center lg:text-left flex md:block lg:flex items-center'>
                    <div>
                        <RiMedal2Line className='text-5xl block mr-3 md:mx-auto md:mb-3 lg:mb-0 lg:mr-3 text-primary' />
                    </div>
                    <div>
                        <h4 className='text-xl lg:text-2xl font-bold'>Best Quality Products</h4>
                        <p className='text-sm'>We produce only BEST quality products</p>
                    </div>
                </div>
                <div className='p-5 bg-slate-100 shadow-lg shadow-slate-300 hover:shadow-slate-400 rounded md:text-center lg:text-left flex md:block lg:flex items-center'>
                    <div>
                        <GiCargoShip className='text-5xl block mr-3 md:mx-auto md:mb-3 lg:mb-0 lg:mr-3 text-primary' />
                    </div>
                    <div>
                        <h4 className='text-xl lg:text-2xl font-bold'>On-Time Shipping</h4>
                        <p className='text-sm'>We always maintain on-time shipment</p>
                    </div>
                </div>
                <div className='p-5 bg-slate-100 shadow-lg shadow-slate-300 hover:shadow-slate-400 rounded md:text-center lg:text-left flex md:block lg:flex items-center'>
                    <div>
                        <BiSupport className='text-5xl block mr-3 md:mx-auto md:mb-3 lg:mb-0 lg:mr-3 text-primary' />
                    </div>
                    <div>
                        <h4 className='text-xl lg:text-2xl font-bold'>24/7 Support</h4>
                        <p className='text-sm'>We have dedicated 24/7 support team to help you</p>
                    </div>
                </div>
            </div>

            {/* Products section */}
            <div className='mx-6 md:mx-12 lg:mx-20'>
                <ViewAllItems>6</ViewAllItems>
                <Link to='/all-items'><button className='bg-primary transition ease-in-out duration-500 hover:scale-110 text-white hover:bg-secondary mt-14 block mx-auto py-3 px-14 uppercase font-semibold rounded'>View All Products</button></Link>
            </div>

            {/* Product banners section */}
            <div className='mx-6 md:mx-12 lg:mx-20 my-20 grid lg:grid-cols-2 gap-10 lg:gap-12 text-white'>
                <div className='bg-gradient-to-r from-primary via-green-400 to-cyan-500 py-7 px-6 md:px-10 rounded'>
                    <img src='https://i.ibb.co/D8VvFk5/case-4.png' alt="" className='w-3/4 md:w-7/12' />
                    <div>
                        <h3 className='text-3xl font-bold'>Gigabyte Gaming Case v5</h3>
                        <p className='my-3'>It has Back Cable Management. Maximum Length of Graphics Card is 300-400mm. Sheet Thickness is 0.5mm. Case materials is ABS with tempered glass & RGB lighting. Transport Package. Case dimension is 360*215*450mm. Origin is China</p>
                        <ul className='text-lg mb-3'>
                            <li className='flex items-center'><GoFlame className='mr-2 text-2xl text-red-400' /> RGB color with controller</li>
                            <li className='flex items-center font-bold'><GoFlame className='mr-2 text-2xl text-red-400' /> 1 RGB 8GB RAM FREE</li>
                            <li className='flex items-center'><GoFlame className='mr-2 text-2xl text-red-400' /> 6 in-build cooler fan</li>
                            <li className='flex items-center'><GoFlame className='mr-2 text-2xl text-red-400' /> Premium tempered glass</li>
                        </ul>
                        <h4 className='text-2xl font-bold mb-5'>$68 / unit <span className='text-base font-normal ml-4'>MOQ: 450 units</span></h4>
                        <Link to='/purchase/6296d602426c473a6c8e8a6e'><button className='bg-white text-primary hover:text-white hover:bg-secondary py-2 px-10 uppercase font-semibold rounded'>Purchase Now!</button></Link>
                    </div>
                </div>
                <div className='grid grid-rows-2 gap-10'>
                    <div className='bg-gradient-to-r from-primary to-cyan-500 py-7 px-6 md:px-5 rounded md:flex items-center'>
                        <img src='https://i.ibb.co/3cGbsQN/card-2.png' alt="" className='w-3/4 md:w-2/5 md:mr-3' />
                        <div>
                            <h3 className='text-3xl font-bold'>MSI GeForce RTX 3090 VENTUS</h3>
                            <p className='my-3'>The award-winning MSI TORX Fan 3.0 design keeps the limits of thermal performance turning. Fan blades alternate between traditional blades and dispersion blades that focus and accelerate airflow into the heatsink.</p>
                            <h4 className='text-2xl font-bold mb-5'>$330 / unit <span className='text-base font-normal ml-4'>MOQ: 500 units</span></h4>
                            <Link to='/purchase/6296d602426c473a6c8e8a69'><button className='bg-white text-primary hover:text-white hover:bg-secondary py-2 px-10 uppercase font-semibold rounded'>Purchase Now!</button></Link>
                        </div>
                    </div>
                    <div className='bg-gradient-to-r from-primary to-cyan-500 py-7 px-6 md:px-5 rounded md:flex items-center'>
                        <img src='https://i.ibb.co/t4XLHRy/power-3.png' alt="" className='w-3/4 md:w-2/5 md:mr-3' />
                        <div>
                            <h3 className='text-3xl font-bold'>Asus ROG Strix 750W</h3>
                            <p className='my-3'>Asus ROG Strix 750W, Type ATX 12V, PSU Category Full Modular, Series ROG Series, Maximum Power 750Watt, Input AC 100 ???240Vac, Input Voltage 100 ??? 240 V, Over Voltage Protection Yes, Efficiency 80 Plus Gold Certified, Fan Size 135mm</p>
                            <h4 className='text-2xl font-bold mb-5'>$100 / unit <span className='text-base font-normal ml-4'>MOQ: 300 units</span></h4>
                            <Link to='/purchase/6296d602426c473a6c8e8a71'><button className='bg-white text-primary hover:text-white hover:bg-secondary py-2 px-10 uppercase font-semibold rounded'>Purchase Now!</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Business summery section */}
            <div className='mx-6 md:mx-12 lg:mx-20'>
                <div className='grid md:grid-cols-2 gap-10 lg:gap-12'>
                    <div className='order-2 md:order-1 flex items-center'>
                        <div>
                            <h1 className='text-4xl lg:text-6xl font-extrabold text-primary'>PC Components</h1>
                            <h4 className='mt-3 text-2xl lg:text-3xl font-bold text-secondary'>A premium computer components producer</h4>
                            <p className='my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus voluptate libero aliquid praesentium possimus nihil, eum nostrum quos quae ipsam ab dignissimos et odio dolore fugit molestias, ea, consequatur nisi quod adipisci!
                                <br /><br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reprehenderit repellendus, porro enim ad consequuntur quaerat ex magni esse distinctio veritatis tenetur ducimus et eligendi voluptas consequatur amet numquam sint.
                            </p>
                            <a href='/#footer'><button className='bg-primary transition ease-in-out duration-500 hover:scale-110 text-white hover:bg-secondary py-2 px-10 uppercase font-semibold rounded'>Contact Us</button></a>

                        </div>
                    </div>
                    <div className='order-1 md:order-2 flex items-center'>
                        <img src='https://i.ibb.co/85W9SgM/Office-Block.jpg' alt="" className='border-8 border-double border-slate-200' />
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-14 py-4 px-7 md:px-4 lg:px-5 w-full rounded grid md:grid-cols-2 lg:grid-cols-4 bg-gradient-to-r from-green-50 via-cyan-50 to-green-50 shadow-xl shadow-slate-300">
                    <div className="flex items-center justify-center my-3 lg:my-0">
                        <FaChartLine className='text-6xl text-primary mr-5' />
                        <div>
                            <p className='text-sm'>PC Component has</p>
                            <h1 className='text-primary text-4xl font-extrabold'>120M+</h1>
                            <h5>Annual Revenue</h5>
                        </div>
                    </div>

                    <div className="flex items-center justify-center my-3 lg:my-0">
                        <FaUsersCog className='text-6xl text-primary mr-5' />
                        <div>
                            <p className='text-sm'>We have</p>
                            <h1 className='text-primary text-4xl font-extrabold'>450+</h1>
                            <h5>Hardworking People</h5>
                        </div>
                    </div>

                    <div className="flex items-center justify-center my-3 lg:my-0">
                        <FaSmile className='text-6xl text-primary mr-5' />
                        <div>
                            <p className='text-sm'>We have</p>
                            <h1 className='text-primary text-4xl font-extrabold'>220+</h1>
                            <h5>Happy Customers</h5>
                        </div>
                    </div>
                    <div className="flex items-center justify-center my-3 lg:my-0">
                        <FaCubes className='text-6xl text-primary mr-5' />
                        <div>
                            <p className='text-sm'>We have</p>
                            <h1 className='text-primary text-4xl font-extrabold'>50+</h1>
                            <h5>Premium Products</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review section */}
            <div className='my-20 mx-6 md:mx-12 lg:mx-20'>
                <h2 className='text-5xl font-extrabold text-primary text-center mb-8'>What People Says About Us!</h2>
                <Reviews />
            </div>

            <Footer />
        </div >
    );
};

export default Home;