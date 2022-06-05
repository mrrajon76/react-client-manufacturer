import { signOut } from "firebase/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useAllOrders = () => {
    const navigate = useNavigate();

    const { isLoading, data, refetch } = useQuery(['allOrders'], () =>
        fetch(`https://polar-cove-29814.herokuapp.com/orders`,
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
}

export default useAllOrders;