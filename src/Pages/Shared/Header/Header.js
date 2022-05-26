import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi';
import { HiMenuAlt2, HiX } from 'react-icons/hi'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import logo from '../../../Images/logo.png'

const Header = () => {
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <div className='hidden lg:block'>
                <div className='py-3'>
                    <Link to='/'><img src={logo} alt="" className='block mx-auto w-64' /></Link>
                </div>
                <div className='bg-accent py-3'>
                    <div className='nav text-white text-[17px] space-x-14 flex justify-center'>
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/all-items'>All Items</CustomLink>
                        {
                            user ? <CustomLink to='/dashboard'>Dashboard</CustomLink> : <></>
                        }
                        <CustomLink to='/my-portfolio'>My Portfolio</CustomLink>
                        <CustomLink to='/blogs'>Blogs</CustomLink>
                        <span className='mx-3 border-r-2 border-gray-300'></span>
                        {
                            user ? <span className='cursor-pointer' onClick={handleSignOut}><BiLogOutCircle className='inline text-2xl' /> Sign Out</span> : <CustomLink to='/login'><BiLogInCircle className='inline text-2xl' /> Login</CustomLink>
                        }
                    </div>
                </div>
            </div>

            {/* Mobile & Tab device header */}
            <div className='lg:hidden flex justify-between items-center px-3 md:px-10 py-3 shadow-lg shadow-slate-200'>
                <div onClick={() => setOpen(!open)}>
                    {
                        open ? <HiX className='text-2xl md:text-3xl text-secondary' /> : <HiMenuAlt2 className='text-2xl md:text-3xl text-accent' />
                    }
                    <div className={`nav font-semibold flex flex-col space-y-3 py-4 left-0 absolute w-full text-center transition-all ease-in-out duration-700 z-30 text-white bg-secondary ${open ? 'md:top-20 top-16' : 'top-[-300px]'}`}>
                        <Link to='/'>Home</Link>
                        <Link to='/all-items'>All Items</Link>
                        {
                            user ? <Link to='/dashboard'>Dashboard</Link> : <></>
                        }
                        <Link to='/my-portfolio'>My Portfolio</Link>
                        <Link to='/blogs'>Blogs</Link>
                    </div>
                </div>
                <div>
                    <Link to='/'><img src={logo} alt="" className='block mx-auto w-40 md:w-56' /></Link>
                </div>
                <div>

                    {
                        user ? <span className='cursor-pointer' onClick={handleSignOut}><BiLogOutCircle className='inline text-2xl md:text-3xl text-lime-500' /> Sign Out</span> : <Link to='/login' className='font-semibold'><BiLogInCircle className='inline text-2xl md:text-3xl text-accent' /> Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;