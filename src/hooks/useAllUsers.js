import { signOut } from "firebase/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useAllUsers = () => {
    const navigate = useNavigate();

    const { isLoading, data, refetch } = useQuery(['allUsers'], () =>
        fetch(`http://localhost:5000/users`,
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
                    navigate('/')
                }
                return res.json()
            })
    )

    return { isLoading, data, refetch };
};

export default useAllUsers;