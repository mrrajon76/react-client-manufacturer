import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useUserStatus from '../../../hooks/useUserStatus';
import Loading from '../../Shared/Loading/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, isLoading] = useUserStatus(user);
    const location = useLocation();

    if (loading || isLoading) {
        return <Loading />
    }

    if (!user || !admin) {
        signOut(auth);
        localStorage.removeItem('accessToken');
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;