import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";

const useUserDetails = () => {
    const [user] = useAuthState(auth);

    const currentUser = user.email;

    const { isLoading, data, refetch } = useQuery(['userDetails', currentUser], () =>
        fetch(`http://localhost:5000/user/${currentUser}`)
            .then(res => res.json())
    )

    return { isLoading, data, refetch };
};

export default useUserDetails;