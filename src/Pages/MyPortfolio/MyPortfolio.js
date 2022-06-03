import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const MyPortfolio = () => {
    return (
        <div>
            <Header />
            <div className='mx-6 my-10 md:mx-12 lg:mx-20 '>
                <h1 className='text-2xl md:text-4xl text-center md:text-left font-extrabold text-primary'>Md. Rasheduzzaman Rajon</h1>
                <h4 className='text-xl mt-2 text-center md:text-left font-bold text-secondary'>Web Developer</h4>

                <div className='grid md:grid-cols-4 gap-6 lg:gap-10'>
                    <div className='md:col-span-3 order-2 md:order-1'>
                        <table className='mb-5 md:mb-0 md:my-5 table-auto w-full text-left'>
                            <tbody>
                                <tr className='border'>
                                    <th className='text-primary py-2 px-3 border-r'>Contact Details</th>
                                    <td className='py-2 px-3'>
                                        <tr>
                                            <td className='py-2 px-3'>mrrajon76@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td className='py-2 px-3'>+8801762811511</td>
                                        </tr>
                                    </td>
                                </tr>
                                <tr className='border'>
                                    <th className='text-primary py-2 px-3 border-r'>Web Skills</th>
                                    <td className='py-2 px-3 grid md:grid-cols-3 gap-5'>
                                        <ul className='list-disc list-inside'>
                                            <li className='list-item'>HTML5</li>
                                            <li className='list-item'>CSS3</li>
                                            <li className='list-item'>Tailwind CSS</li>
                                            <li className='list-item'>Bootstrap</li>
                                            <li className='list-item'>JS</li>
                                        </ul>
                                        <ul className='list-disc list-inside'>
                                            <li className='list-item'>ES6</li>
                                            <li className='list-item'>React JS</li>
                                            <li className='list-item'>Express</li>
                                            <li className='list-item'>Node JS</li>
                                            <li className='list-item'>PHP</li>
                                        </ul>
                                        <ul className='list-disc list-inside'>
                                            <li className='list-item'>MySQL</li>
                                            <li className='list-item'>MongoDB</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className='border'>
                                    <th className='text-primary py-2 px-3 border-r'>Education</th>
                                    <td className='py-2 px-3'>BSc in CSE (Graduated in 2019)</td>
                                </tr>
                                <tr className='border'>
                                    <th className='text-primary py-2 px-3 border-r'>Few Web Projects</th>
                                    <td className='py-2 px-3'>
                                        <ul className='list-disc list-inside'>
                                            <li className='text-sm'>
                                                <span className='font-bold text-lg'>Warehouse Inventory Management (Electronics)</span> &nbsp; React JS - Tailwind CSS - Firebase - Express JS - MongoDB

                                                <ul className='ml-6 list-decimal list-inside'>
                                                    <li>It has a nice navbar and a professional footer, both are device-friendly</li>
                                                    <li>To reduce the long height of the homepage, we have only set 6 items here and a button to see all the items on another page</li>
                                                    <li>On homepage, you can see 6 most popular/most selling items based on your sell data</li>
                                                    <li>Also you can see the items which stock quantities are less than 40 to give you a reminder for re-stocking the product. There is also a dedicated menu to check sold out products which stock quantity is zero.</li>
                                                    <li>For every items, you will find two buttons. One is for managing the stock and another one is for deleting the item.</li>
                                                    <li>For managing the item, you need to login first. After login, you can deliver that specific item. For each delivery, the stock quantity will be decreased and sold quantity will be increased.</li>
                                                    <li>From here you can add new stock for this item or delete this item.</li>
                                                    <li>After login, you will be able to see your own added items and you can add a new item.</li>
                                                    <li>To register as a new user, you can go with email password system or continue with google/github. There is also email verification and reset password features</li>
                                                    <a href='https://fullstack-warehouse-management.web.app/' rel='noreferrer' target='_blank' className='font-bold text-lg text-primary mt-2 block'>Live Demo</a>
                                                </ul>
                                            </li>
                                        </ul>

                                        <ul className='list-disc list-inside mt-5'>
                                            <li className='text-sm'>
                                                <span className='font-bold text-lg'>Independent Service Provider (Accountant)</span> &nbsp; React JS - Tailwind CSS - Firebase

                                                <ul className='ml-6 list-decimal list-inside'>
                                                    <li>On homepage, there is a responsive navbar, a nice banner with relevant background image, title and some introductory texts, 3 service cards, speciality section and a responsive footer.</li>
                                                    <li>For services section, used a json file containing image, title, id, rate, description. On homepage there are 3 service cards but on Services page there are all the 6 service cards. For displaying these two things using a single component, used condition (props children).</li>
                                                    <li>For every services, there is a button to book appointment. This button goes to an appointment booking form page which is a protected route. You must login before booking an appointment.</li>
                                                    <li>For managing user registration & login, used google firebase email & password authentication, google and github sign-in authentication.</li>
                                                    <li>User will receive a verification email after signing up using email & password.</li>
                                                    <li>If an user forget password then can reset the password. But for this need to input the email first.</li>
                                                    <li>After login, the login menu will be replaced by sign out menu.</li>
                                                    <a href='https://accounting-service-provider.web.app/' rel='noreferrer' target='_blank' className='font-bold text-lg text-primary mt-2 block'>Live Demo</a>
                                                </ul>
                                            </li>
                                        </ul>

                                        <ul className='list-disc list-inside mt-5'>
                                            <li className='text-sm'>
                                                <span className='font-bold text-lg'>Product Analysis (MacBook Pro)</span> &nbsp; React JS - Tailwind CSS

                                                <ul className='ml-6 list-decimal list-inside'>
                                                    <li>Used React Routing for easy navigation</li>
                                                    <li>Used React Rating & HeroIcons to show the review ratings. For the review data, created a json file and used custom hook to load that</li>
                                                    <li>Used Conditional Rendering to show 3 reviews on homepage using the same component of Review page</li>
                                                    <li>Used Rechart for all the charts of this project. For processing the chart data from the provided data.json file, used custom hook</li>
                                                    <li>The whole site is device-friendly except the charts</li>
                                                    <li>Added 404 not found page</li>
                                                    <a href='https://macbook-pro-product-analysis.netlify.app/' rel='noreferrer' target='_blank' className='font-bold text-lg text-primary mt-2 block'>Live Demo</a>
                                                </ul>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='my-5 order-1 md:order-2'>
                        <img src="https://i.ibb.co/mhVm1N6/img-rr.png" alt="" className='w-full lg:w-11/12 border rounded pt-4 px-8 shadow-xl block ml-auto' />
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    );
};

export default MyPortfolio;