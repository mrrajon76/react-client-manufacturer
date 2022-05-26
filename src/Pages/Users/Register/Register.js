import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import auth from '../../../firebase.init';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [
        createUserWithEmailAndPassword,
        user2,
        loading2,
        error2,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error3] = useUpdateProfile(auth);

    const navigate = useNavigate();
    let errorMessage;

    if (error || error1 || error2 || error3) {
        errorMessage = <p className='text-red-500 text-center'>Error: {error?.message} {error1?.message} {error2?.message} {error3?.message}</p>
    }
    if (loading || loading1 || loading2 || updating) {
        return <Loading />
    }
    if (user || user1 || user2) {
        alert(`Thank you for signing up. Please check your e-mail for the verification link...`);
        navigate('/');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.pass.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    return (
        <div>
            <Header />

            <div className='lg:min-h-[70vh] lg:w-1/3 mx-5 md:mx-20 lg:mx-auto my-14 py-14 px-5 md:px-10 lg:py-7 lg:px-7 shadow-lg shadow-slate-400'>
                <h3 className='text-4xl text-primary font-extrabold text-center mb-6'>Register</h3>
                {
                    errorMessage
                }
                <form onSubmit={handleRegister}>
                    <div className="relative z-0 mb-7 w-full group">
                        <input type="text" name="name" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" placeholder=" " required />
                        <label for="name" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-focus:dark:text-secondaryss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                    </div>
                    <div className="relative z-0 mb-7 w-full group">
                        <input type="email" name="email" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" placeholder=" " required />
                        <label for="email" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-focus:dark:text-secondaryss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 mb-10 w-full group">
                        <input type="password" name="pass" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" placeholder=" " required />
                        <label for="pass" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-focus:dark:text-secondaryss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>

                    <button type="submit" className="text-white bg-primary hover:bg-secondary rounded w-full py-2.5 text-center">Register</button>
                    <span className='mt-4 text-center block'>Already have an account? <Link to="/login" className='text-lime-500 font-semibold'>Login</Link></span>
                </form>
                <div className='flex justify-center items-center my-8'>
                    <div className='border-t-2 border-slate-300 w-full'></div>
                    <div className='mx-3'>OR</div>
                    <div className='border-t-2 border-slate-300 w-full'></div>
                </div>
                <div>
                    <div onClick={() => signInWithGoogle()} className='border border-gray-400 hover:border-secondary py-2.5 w-full hover:bg-primary hover:text-white flex justify-center items-center cursor-pointer rounded'>
                        <FcGoogle className='text-xl mr-4' />
                        Login with Google
                    </div>
                    <div onClick={() => signInWithGithub()} className='mt-4 border border-gray-400 hover:border-secondary py-2.5 w-full hover:bg-primary hover:text-white flex justify-center items-center cursor-pointer rounded'>
                        <FaGithub className='text-xl mr-4' />
                        Login with GitHub
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Register;