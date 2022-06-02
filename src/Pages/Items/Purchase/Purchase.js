import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../../firebase.init';
import useUserStatus from '../../../hooks/useUserStatus';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Loading from '../../Shared/Loading/Loading';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [admin, isLoading] = useUserStatus(user);
    const navigate = useNavigate();

    if (isLoading) {
        return <Loading />;
    }
    if (admin) {
        swal('Admin can not purchase any product', {
            icon: "error"
        });
        navigate('/');
    }

    return (
        <div>
            <Header />

            <div className='min-h-[70vh]'></div>

            <Footer />
        </div>
    );
};

export default Purchase;