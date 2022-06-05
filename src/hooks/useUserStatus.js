import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useUserStatus = user => {
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user?.email;

        if (email) {
            fetch(`https://polar-cove-29814.herokuapp.com/user/admin/${email}`,
                {
                    method: 'GET',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setAdmin(data.admin)
                    setIsLoading(false);
                })
        }
    }, [user, navigate])

    return [admin, isLoading];
}

export default useUserStatus;