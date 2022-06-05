import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useUserDetails = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const currentUser = user.email;

    const { isLoading, data, refetch } = useQuery(['userDetails', currentUser], () =>
        fetch(`https://polar-cove-29814.herokuapp.com/user/${currentUser}`,
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

export default useUserDetails;